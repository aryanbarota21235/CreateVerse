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
const RETRY_TEMPLATE_POOL_MS = 30 * 60_000;

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
  5: `Delighted customer. Warm, specific, sounds like a real person who would happily recommend the place.
Good: "Got my root canal done here and honestly it was painless. Doctor explained everything before starting. Very happy."
Good: "Started running ads with them for our showroom and the enquiries really picked up within a month. Team replies fast on WhatsApp too."`,
  4: `Happy customer. Clearly positive, with one small thing that could be a bit better, said kindly.
Good: "Food was really tasty and came out quickly. Parking is a little tight on weekends, but we'll definitely come back."`,
  3: `Average experience. One thing was fine AND one thing clearly needs to improve. Neutral and fair, neither praising nor complaining hard.
Good: "Haircut was fine, but I had to wait 30 minutes even with an appointment. Okay overall."`,
  2: `Disappointed customer. The main message is what went wrong. At most one short polite remark about something that was okay. No praise words.
Good: "Food came cold and we had to remind them twice for water. Staff were polite, but the service needs work."`,
  1: `Unhappy customer. This was a bad experience. Clearly say what went wrong and that it needs to improve. Calm and polite, never abusive, but NO praise at all: never "good", "great", "excellent", "recommend" or "will come again".
Good: "Not a good experience. Waited over an hour past my appointment and nobody told us why. Hope they fix this."`,
};

// What real customers of each kind of business notice. Steers the AI away from office jargon.
const CATEGORY_HINT: Record<string, string> = {
  "Restaurant / Café": "taste of specific dishes, portion size, freshness, how quickly food came, staff behaviour, cleanliness, seating, value for money, family-friendly",
  "Salon / Spa": "the haircut/colour/facial result, the stylist listening to what they wanted, hygiene, waiting time, relaxing feel, value for money",
  "Clinic / Hospital": "the doctor listening and explaining properly, correct diagnosis, waiting time, staff behaviour, cleanliness, feeling better after treatment",
  "Dental Clinic": "painless treatment, doctor explaining the procedure, hygiene and sterilised tools, waiting time, gentle with kids/nervous patients",
  "Gym / Fitness": "trainers guiding properly, equipment condition, cleanliness, crowd at peak hours, results they are seeing, motivating atmosphere",
  "Hotel / Resort": "room cleanliness and comfort, check-in, staff helpfulness, food/breakfast, location, value for money, hot water, wifi",
  "Retail Store": "range of products, prices compared to other shops, staff helping choose, billing speed, after-sales or exchange",
  "Real Estate": "honest guidance, showing properties that matched the budget, clear paperwork, no hidden charges, quick replies, help after booking",
  "Education / Coaching": "teachers explaining concepts clearly, doubt clearing, study material, regular tests, personal attention, results/marks improving",
  "Immigration Consultancy": "honest advice about chances, help with documents, regular updates on the file, quick replies, visa/admission outcome if positive",
  "Digital Marketing Agency": "more enquiries/leads or calls after ads, Instagram/Facebook page growth, good website, team understanding the business, quick replies on WhatsApp/calls, regular updates on results",
  "Automobile / Service Centre": "car/bike delivered on time, problem fixed properly, honest estimate with no extra charges, washing/cleaning, staff explaining the work",
};

// Stiff, generic or salesy wording that real customers don't write. Drafts using these are dropped.
const STIFF = /\b(reporting|transparency|deliverables?|synergy|top[- ]class|top[- ]notch|exceptional|impeccable|seamless|commendable|utmost|second to none|state[- ]of[- ]the[- ]art|one[- ]stop|hassle[- ]free experience|wonderful experience|I am (very )?(much )?impressed|kudos)\b/i;

// Low ratings must not read as praise: drafts with these words are thrown away for 1 and 2 stars.
const PRAISE = /\b(excellent|amazing|awesome|outstanding|fantastic|wonderful|superb|perfect|great|best|loved|lovely|highly recommend|recommend|top class|will (definitely )?(come|visit) again|badhiya|shandaar|lajawab|zabardast|kamaal)\b|बहुत अच्छ|बढ़िया|शानदार|लाजवाब|बेहतरीन|ज़बरदस्त|ਬਹੁਤ ਵਧੀਆ|ਸ਼ਾਨਦਾਰ/i;

const SYSTEM = `You write Google review drafts for customers of a local business in India. A real customer picks one, may edit it, and posts it under their own name, so every draft must sound like that customer wrote it on their phone.

How real reviews sound:
- Plain, everyday words. Like telling a friend. Short sentences. Indian English is fine ("very nice", "got it done", "they replied fast").
- About the customer's own visit: what they came for, what happened, how they felt. Concrete, not generic praise.
- Mix of lengths: some one line (8-15 words), most 2-3 sentences (20-45 words). Never longer than 55 words.
- Each draft has a different angle (a different thing they noticed) and starts with different words. Don't start most of them with the business name.
- At most one exclamation mark per draft. No emojis, no hashtags, no ALL CAPS.

Never:
- Office or marketing words: reporting, transparency, deliverables, strategy execution, top class, exceptional, seamless, impeccable, commendable, "I am impressed", "wonderful experience".
- Invent facts a customer couldn't know or that might be false: names of staff, prices, exact numbers, dates, awards, guarantees, "best in the city".
- Mention AI, stars, ratings, or that this is a draft.

Match the star rating exactly. A low rating must clearly read as a complaint, politely.

Reply with JSON only: {"reviews": ["...", "..."]}`;

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
  // Bumped whenever the writing rules change, so saved pools are rewritten ("v3": natural-voice prompt).
  return createHash("sha1").update(["v3", b.name, b.category, b.highlights].join("|")).digest("hex").slice(0, 16);
}

async function writePool(b: ReviewBusiness, rating: number, language: string): Promise<{ reviews: string[]; source: string }> {
  const prompt = [
    `Business: ${b.name}`,
    `Category: ${b.category}`,
    b.city ? `City: ${b.city}` : null,
    CATEGORY_HINT[b.category] ? `What customers of this kind of business usually talk about: ${CATEGORY_HINT[b.category]}` : null,
    b.highlights
      ? rating <= 3
        ? `This business's main services (topics only, not things to praise at this rating): ${b.highlights}`
        : `This business is known for (mention some of these naturally): ${b.highlights}`
      : null,
    `Language: ${languageNote(language)}`,
    "",
    `Star rating: ${rating} of 5 stars.`,
    `Tone: ${TONE[rating]}`,
    "",
    `Write ${POOL_SIZE} different ${rating}-star review drafts.`,
  ]
    .filter((l) => l !== null)
    .join("\n");

  const ai = await askJson(SYSTEM, prompt, (v) => {
    const list = (v as { reviews?: unknown })?.reviews;
    if (!Array.isArray(list)) return null;
    const clean = [...new Set(list.filter((r): r is string => typeof r === "string").map((r) => r.trim()).filter((r) => r.length > 10 && r.length < 500))].filter(
      (r) => !STIFF.test(r) && (rating > 2 || !PRAISE.test(r)),
    );
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
 * Saved, up-to-date pools for a business, by language then star rating. The review page gets
 * these with its HTML, so tapping a star shows suggestions instantly.
 */
export async function savedPools(b: ReviewBusiness): Promise<Record<string, Record<number, string[]>>> {
  const fp = fingerprint(b);
  const out: Record<string, Record<number, string[]>> = {};
  for (const p of await db.list<SuggestionPool>("suggestions", { businessId: b.id })) {
    const lang = p.language ?? "English";
    if (p.fingerprint !== fp || !b.languages.includes(lang)) continue;
    (out[lang] ??= {})[p.rating] = p.reviews;
  }
  return out;
}

/** Writes any missing or outdated pools for the main language, all five ratings at once. */
export async function warmPools(b: ReviewBusiness): Promise<void> {
  await Promise.all([5, 4, 3, 2, 1].map((r) => poolFor(b, r, b.languages[0]).catch(() => null)));
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
