import { createHash } from "crypto";
import * as db from "@/lib/db";
import { askJson, providers } from "./ai";
import { templateReviews } from "./templates";
import type { ReviewBusiness } from "./types";

/*
 * Review suggestions, saved per business and star rating.
 *
 * The first time a rating is needed, one AI request writes a pool of POOL_SIZE reviews, which is
 * saved and reused: each scan (and each "New ideas" tap) shows a random SHOWN of them, so free
 * AI limits are spent once per business, not once per customer. Editing the business's name,
 * category, highlights or language makes a fresh pool. If no AI provider works, the free
 * template writer fills in (and the pool is retried with AI later).
 */

const POOL_SIZE = 12;
const SHOWN = 4;
const RETRY_TEMPLATE_POOL_MS = 6 * 3600_000;

interface SuggestionPool {
  id: string;
  createdAt: string;
  businessId: string;
  rating: number;
  language: string;
  fingerprint: string;
  source: string;
  reviews: string[];
}

const TONE: Record<number, string> = {
  5: "Very happy customer. Warm, enthusiastic and specific about what they liked.",
  4: "Happy customer. Positive overall, maybe one tiny suggestion phrased kindly.",
  3: "Mixed experience. Mention what was good AND one clear thing that could be better. Neutral, fair tone.",
  2: "Disappointed but polite. Clearly say what needs improvement and acknowledge anything that was okay. Constructive, never rude.",
  1: "Unhappy customer. Polite and constructive: clearly state what needs to improve, credit anything that was fine, hope it gets better. Never rude, abusive or exaggerated, and never praise-heavy: it must read like a 1-star review.",
};

const SYSTEM = `You write short Google review drafts for customers of a local business in India. A customer picks one, edits it if they like, and posts it under their own name.

Rules:
- Match the star rating's tone exactly. A low rating must read as a low rating: constructive and polite, never secretly positive.
- 1 to 3 sentences, 15 to 50 words each. Sound like a real local customer, not marketing copy. No hashtags, no emojis, no ALL CAPS.
- Only mention things that fit the business category, and the business's own listed highlights if given. Never invent names, prices, dates, durations, outcomes, or details about the customer's own life or business.
- Every draft takes a different angle and starts with different words.
- Do not mention AI, stars, or that this is a draft.
- Reply with JSON only: {"reviews": ["...", "..."]}`;

// Languages that need a word of explanation; any other is written "in <language>, in its usual script".
const LANGUAGE_NOTE: Record<string, string> = {
  English: "Simple Indian English",
  Hinglish: "Hinglish: Hindi written in Roman (English) letters, mixed with English words, the way people text in North India",
  Hindi: "Hindi in Devanagari script",
  Haryanvi: "Haryanvi, written in Devanagari script, the way people speak in Haryana",
  Punjabi: "Punjabi in Gurmukhi script",
  Urdu: "Urdu in Nastaliq (Urdu) script",
};
const languageNote = (l: string) => LANGUAGE_NOTE[l] ?? `${l}, in its usual script`;

function fingerprint(b: ReviewBusiness) {
  return createHash("sha1").update([b.name, b.category, b.highlights].join("|")).digest("hex").slice(0, 16);
}

async function writePool(b: ReviewBusiness, rating: number, language: string): Promise<{ reviews: string[]; source: string }> {
  const prompt = [
    `Business: ${b.name}`,
    `Category: ${b.category}`,
    b.city ? `City: ${b.city}` : null,
    b.highlights ? `Things customers can mention: ${b.highlights}` : null,
    `Language: ${languageNote(language)}`,
    `Star rating: ${rating} of 5`,
    `Tone: ${TONE[rating]}`,
    "",
    `Write ${POOL_SIZE} different review drafts.`,
  ]
    .filter((l) => l !== null)
    .join("\n");

  const ai = await askJson(SYSTEM, prompt, (v) => {
    const list = (v as { reviews?: unknown })?.reviews;
    if (!Array.isArray(list)) return null;
    const clean = [...new Set(list.filter((r): r is string => typeof r === "string").map((r) => r.trim()).filter((r) => r.length > 10 && r.length < 600))];
    return clean.length >= SHOWN ? clean : null;
  });
  if (ai) return { reviews: ai.value, source: ai.provider };
  return { reviews: templateReviews({ ...b, language }, rating, POOL_SIZE), source: "Templates" };
}

async function poolFor(b: ReviewBusiness, rating: number, language: string): Promise<SuggestionPool> {
  const fp = fingerprint(b);
  const saved = (await db.list<SuggestionPool>("suggestions", { businessId: b.id })).find(
    (p) => p.rating === rating && (p.language ?? "English") === language,
  );
  const stale =
    !saved ||
    saved.fingerprint !== fp ||
    (saved.source === "Templates" && providers().length > 0 && Date.now() - Date.parse(saved.createdAt) > RETRY_TEMPLATE_POOL_MS);
  if (!stale) return saved;

  const { reviews, source } = await writePool(b, rating, language);
  try {
    if (saved) await db.remove("suggestions", saved.id);
    return await db.insert<SuggestionPool>("suggestions", { businessId: b.id, rating, language, fingerprint: fp, source, reviews });
  } catch (e) {
    // Couldn't save (e.g. storage not set up): still show the reviews.
    console.error("[reviews] could not save suggestions", e instanceof Error ? e.message : e);
    return { id: "", createdAt: new Date().toISOString(), businessId: b.id, rating, language, fingerprint: fp, source, reviews };
  }
}

/** SHOWN reviews for a customer in `language` (one of the business's), picked from the saved pool. */
export async function suggestReviews(b: ReviewBusiness, rating: number, language?: string): Promise<string[]> {
  const lang = language && b.languages.includes(language) ? language : b.languages[0];
  const pool = await poolFor(b, rating, lang);
  const shuffled = [...pool.reviews].sort(() => Math.random() - 0.5);
  // Prefer drafts that open differently, so the four on screen don't look alike.
  const opening = (r: string) => r.split(/\s+/).slice(0, 3).join(" ").toLowerCase();
  const picked: string[] = [];
  const seen = new Set<string>();
  for (const r of shuffled) if (picked.length < SHOWN && !seen.has(opening(r))) (seen.add(opening(r)), picked.push(r));
  for (const r of shuffled) if (picked.length < SHOWN && !picked.includes(r)) picked.push(r);
  return picked;
}

/**
 * Admin "Prepare reviews": rewrites all five ratings in the main language now (5 AI requests).
 * Other languages are written the first time a customer picks them.
 */
export async function regenerateAll(b: ReviewBusiness): Promise<Record<number, string>> {
  await db.removeWhere("suggestions", "businessId", b.id);
  const out: Record<number, string> = {};
  for (const r of [5, 4, 3, 2, 1]) out[r] = (await poolFor(b, r, b.languages[0])).source;
  return out;
}

/** Where each rating's saved reviews came from, for the admin panel. */
export async function poolSources(): Promise<Record<string, string[]>> {
  const pools = await db.list<SuggestionPool>("suggestions");
  const out: Record<string, string[]> = {};
  for (const p of pools) (out[p.businessId] ??= []).push(p.source);
  return out;
}
