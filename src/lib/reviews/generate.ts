import { createHash } from "crypto";
import * as db from "@/lib/db";
import { askJson, providers } from "./ai";
import { templateReviews } from "./templates";
import { libraryReviews } from "./library";
import { getCategory, keywordsFor } from "@/lib/categories";
import type { ReviewBusiness } from "./types";

/*
 * Review suggestions, saved per business, star rating and language ("pools").
 *
 * - A pool holds POOL_SIZE drafts. Each scan shows SHOWN of them at random.
 * - When a customer copies a draft to Google it is marked used: removed from the pool and its
 *   fingerprint remembered, so the same text is never offered again for that business and every
 *   posted review stays unique. When fewer than LOW are left, the pool is topped up.
 * - Writers, in order: AI (free-tier providers, see ai.ts), then the hand-written library
 *   (library.ts, English), then the phrase-bank templates (templates.ts, other languages).
 * - The team can edit a pool in the admin ("manual"); manual pools are never rewritten,
 *   only topped up when they run low.
 */

const POOL_SIZE = 10;
const SHOWN = 4;
const LOW = 6;
const MAX_USED = 1000;
const RETRY_FALLBACK_POOL_MS = 30 * 60_000;

interface SuggestionPool {
  id: string;
  createdAt: string;
  businessId: string;
  rating: number;
  language: string;
  fingerprint: string;
  /** Who wrote the drafts: an AI provider name, "Library", "Templates" or "Manual" */
  source: string;
  reviews: string[];
  /** Fingerprints of drafts already posted by customers */
  used?: string[];
  /** Edited by the team in the admin: never rewritten automatically */
  manual?: boolean;
}

/** Same text (ignoring case, spacing and punctuation) gives the same fingerprint. */
/**
 * Fills placeholders the team can write in their own reviews (and the library uses):
 * {name} {city} {keyword} (or {kw}) {thing} (one of the highlights). A sentence whose
 * placeholder has no value for this client (say, no city yet) is left out, so nothing reads
 * like "Best sweet shop in."; if every sentence would go, the text is kept with the gaps closed.
 */
/**
 * A business with its category's settings folded in: `keyword` becomes the effective comma list
 * (the client's own keywords, else the category's), plus the category's hint and library type.
 */
export type WithCategory = ReviewBusiness & { catHint: string; catLibrary: string };

export async function withCategory(b: ReviewBusiness): Promise<WithCategory> {
  if ("catHint" in b) return b as WithCategory;
  const cat = await getCategory(b.category).catch(() => null);
  return { ...b, keyword: keywordsFor(b.keyword, cat).join(", "), catHint: cat?.hint ?? "", catLibrary: cat?.library ?? "" };
}

const keywordList = (k: string) => k.split(",").map((x) => x.trim()).filter(Boolean);

export function render(b: Pick<ReviewBusiness, "name" | "city" | "keyword" | "highlights">, text: string): string {
  if (!text.includes("{")) return text;
  const things = b.highlights.split(",").map((h) => h.trim()).filter(Boolean);
  const kws = keywordList(b.keyword);
  const kw = kws[Math.floor(Math.random() * kws.length)] ?? "";
  const values: Record<string, string> = {
    name: b.name.trim(),
    city: b.city.trim(),
    keyword: kw,
    kw,
    thing: things[Math.floor(Math.random() * things.length)] ?? "",
  };
  const fill = (t: string) => t.replace(/\{(\w+)\}/g, (_, k: string) => values[k.toLowerCase()] ?? "");
  const complete = (t: string) => [...t.matchAll(/\{(\w+)\}/g)].every((m) => values[m[1].toLowerCase()]);
  const sentences = text.match(/[^.!?।]+[.!?।]*\s*/g) ?? [text];
  const kept = sentences.filter(complete);
  const out = kept.length ? kept.join("") : sentences.join("");
  return fill(out).replace(/\s{2,}/g, " ").replace(/\s+([.,!?।])/g, "$1").trim();
}

export const textHash = (t: string) =>
  createHash("sha1").update(t.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()).digest("hex").slice(0, 12);

const TONE: Record<number, string> = {
  5: `Delighted customer. Warm, specific about what they got, and they'd recommend it to others.
Good: "Got my root canal done here and honestly it was painless. The doctor explained every step before starting, so I wasn't nervous at all. The clinic is very clean and the staff are polite. Easily the best dental clinic in Karnal, I've already sent my family here."
Good: "Since they started our ads, we're getting a lot more enquiries and calls every week. More people in the city know about our brand now and the business has really grown. The team understands what we need and always replies quickly. Best digital marketing agency in Panipat for small businesses."`,
  4: `Happy customer. Clearly positive with details, plus one small thing that could be a bit better, said kindly.
Good: "Food was really tasty and came out hot and quick, the paneer dishes especially. Staff were friendly and the place was clean. Parking is a little tight on weekends, but we'll definitely come back with family."`,
  3: `Average experience. One or two things were fine AND one thing clearly needs to improve. Neutral and fair, neither praising nor complaining hard.
Good: "The haircut itself was fine and the stylist was polite. But I had to wait quite long even after booking an appointment, and nobody told me why. Okay overall, hope they manage time better."`,
  2: `Disappointed customer. The main message is what went wrong, with a little detail. At most one short polite remark about something that was okay. No praise words.
Good: "Food came cold and we had to remind them twice for water. The taste was also not like before. Staff were polite, but the service really needs work."`,
  1: `Unhappy customer. This was a bad experience. Clearly say what went wrong, in general terms, and that it needs to improve. Calm and polite, never abusive, but NO praise at all: never "good", "great", "excellent", "recommend" or "will come again".
Good: "Not a good experience this time. We didn't get the results we expected and replies were very slow whenever we asked for an update. Hope they improve their service."
Good: "The food was not fresh and service was very slow. We waited a long time and nobody checked on us. Disappointed with this visit."`,
};


// What the customer got out of it, most important first. Reviews should be mostly about the first items.
// What customers of each kind of business care about now lives with the categories
// (src/lib/categories.ts, editable in the admin).


// Stiff, generic or salesy wording that real customers don't write. Drafts using these are dropped.
const STIFF = /\d|\b(reports?|metrics|onboarding|paperwork|invoice|KPIs?)\b|\b(a|one|two|three|four|five|six|few|couple of|first|second|third|next) (day|week|month|hour|minute)s?\b|\b(doubled|tripled|overnight|within (a|one) (day|week))\b|\b(our|my) (bakery|shop|store|restaurant|clinic|salon|product|brand new)\b|\b(dashboard|reporting|transparency|deliverables?|synergy|top[- ]class|top[- ]notch|exceptional|impeccable|seamless|commendable|utmost|second to none|state[- ]of[- ]the[- ]art|one[- ]stop|hassle[- ]free experience|wonderful experience|I am (very )?(much )?impressed|kudos)\b/i;

// Low ratings must not read as praise: drafts with these words are thrown away for 1 and 2 stars.
const PRAISE = /\b(excellent|amazing|awesome|outstanding|fantastic|wonderful|superb|perfect|great|best|loved|lovely|highly recommend|recommend|top class|will (definitely )?(come|visit) again|badhiya|shandaar|lajawab|zabardast|kamaal)\b|बहुत अच्छ|बढ़िया|शानदार|लाजवाब|बेहतरीन|ज़बरदस्त|ਬਹੁਤ ਵਧੀਆ|ਸ਼ਾਨਦਾਰ/i;

const SYSTEM = `You write Google review drafts for customers of a local business in India. A real customer picks one, may edit it, and posts it under their own name, so every draft must sound like that customer wrote it on their phone.

How real reviews sound:
- Plain, everyday words. Like telling a friend. Indian English is fine ("very nice", "got it done", "they replied fast").
- About the customer's own visit: what they came for, what happened, how they felt, and whether they'd come back or recommend it. Concrete, not generic praise.
- Proper, detailed reviews: most drafts 3-5 sentences (45-90 words), a few 2-3 sentences (25-45 words). Never longer than 110 words. Cover two or three different things the customer noticed.
- Each draft has a different angle (a different thing they noticed) and starts with different words. Don't start most of them with the business name.
- At most one exclamation mark per draft. No emojis, no hashtags, no ALL CAPS.

- Focus on what the customer got out of it (see "What matters to customers" in the request). Most drafts should be about the first things listed there.
- Keep it general enough that ANY real customer of this business could post it truthfully.

Never:
- Numbers of any kind: no follower counts, percentages, prices, days, weeks, months, hours, minutes. Say "quickly", "soon", "a lot more" instead.
- The customer's own business type or product (don't say "our bakery", "my shop", "our new product"). Say "our business", "my business" at most.
- Made-up specific incidents (a late meeting, spelling mistakes, a missed Friday deadline, a named staff member). Low ratings complain about general things: slow replies, expectations not met, results not coming, service needs to improve.
- Office or marketing words: reporting, transparency, deliverables, dashboard, strategy execution, top class, exceptional, seamless, impeccable, commendable, "I am impressed", "wonderful experience".
- Awards, guarantees, or mentioning AI, stars, ratings, or that this is a draft.

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

function fingerprint(b: WithCategory) {
  // Bumped whenever the writing rules change, so saved pools are rewritten
  // ("v8": longer reviews, more "best" wording, editable categories and keyword lists).
  return createHash("sha1").update(["v8", b.name, b.category, b.highlights, b.keyword, b.city, b.catHint].join("|")).digest("hex").slice(0, 16);
}

/**
 * Local search: good reviews name what the business is and where, the way people search
 * ("best sweet shop in Karnal"). Google reads review text, so this helps the listing show up for
 * those searches. Most 5-star drafts and about half the 4-star ones use it, with varied wording.
 */
function seoLine(b: WithCategory, rating: number): string | null {
  if (rating < 4) return null;
  const kws = keywordList(b.keyword);
  const where = b.city.trim();
  if (!where && !kws.length) return null;
  const what = kws.length ? kws.join(" / ") : `(a plain everyday name for this kind of business, like "sweet shop" or "dental clinic")`;
  const share = rating === 5 ? "most of the drafts (about 8 out of 10)" : "about half of the drafts";
  const k = kws[0] ?? "sweet shop";
  return [
    `Search wording: in ${share}, naturally say this is one of the best ${kws.length ? "for one of these keywords" : "of its kind"}${where ? " in the city" : ""}, the way people search on Google.`,
    `Keywords (use a different one across drafts): ${what}.${where ? ` City: ${where}.` : ""}`,
    where
      ? `Vary the wording, e.g. "best ${k} in ${where}", "one of the best ${k}s in ${where}", "the best ${k} I've found in ${where}", "if you're looking for a good ${k} in ${where}". No made-up landmarks or areas. At most once per draft, in the language of the review.`
      : `Vary the wording, e.g. "best ${k} around", "one of the best ${k}s I've been to". At most once per draft.`,
  ].join("\n");
}

async function writeDrafts(
  b: WithCategory,
  rating: number,
  language: string,
  count: number,
  avoid: Set<string>,
): Promise<{ reviews: string[]; source: string }> {
  const prompt = [
    `Business: ${b.name}`,
    `Category: ${b.category}`,
    b.city ? `City: ${b.city}` : null,
    b.catHint ? `What matters to customers, most important first: ${b.catHint}` : null,
    b.highlights
      ? rating <= 3
        ? `This business's main services (topics only, not things to praise at this rating): ${b.highlights}`
        : `This business is known for (mention some of these naturally): ${b.highlights}`
      : null,
    `Language: ${languageNote(language)}`,
    seoLine(b, rating),
    "",
    `Star rating: ${rating} of 5 stars.`,
    `Tone: ${TONE[rating]}`,
    "",
    `Write ${count} different ${rating}-star review drafts.`,
  ]
    .filter((l) => l !== null)
    .join("\n");

  const fresh = (r: string) => !avoid.has(textHash(r));
  // Drafts that break the rules are dropped, so a reply can come back short. A second try only
  // if fewer than SHOWN survive (each try costs tokens); the good drafts from both are kept.
  const keep = (r: string) => !STIFF.test(r) && (rating > 2 || !PRAISE.test(r)) && fresh(r);
  const good: string[] = [];
  let provider = "";
  for (let attempt = 0; attempt < 2 && good.length < Math.min(SHOWN, count); attempt++) {
    const ai = await askJson(SYSTEM, prompt, (v) => {
      const list = (v as { reviews?: unknown })?.reviews;
      if (!Array.isArray(list)) return null;
      return list.filter((r): r is string => typeof r === "string").map((r) => r.trim()).filter((r) => r.length > 10 && r.length < 500);
    });
    if (!ai) break;
    provider = ai.provider;
    for (const r of ai.value) if (keep(r) && !good.some((g) => textHash(g) === textHash(r))) good.push(r);
  }
  if (good.length >= Math.min(SHOWN, count)) return { reviews: good.slice(0, count), source: provider };

  // No AI: the hand-written library (English), topped up with phrase-bank templates.
  const out: string[] = [];
  const add = (list: string[]) => {
    for (const r of list.sort(() => Math.random() - 0.5)) {
      if (out.length >= count) break;
      if (fresh(r) && !out.some((o) => textHash(o) === textHash(r))) out.push(r);
    }
  };
  if (language === "English") add(libraryReviews({ ...b, library: b.catLibrary }, rating));
  const fromLibrary = out.length;
  if (out.length < count) add(templateReviews({ ...b, language }, rating, count * 2));
  return { reviews: out, source: fromLibrary >= out.length / 2 && fromLibrary > 0 ? "Library" : "Templates" };
}

const isFallback = (source: string) => source === "Templates" || source === "Library";

async function findPool(businessId: string, rating: number, language: string): Promise<SuggestionPool | undefined> {
  return (await db.list<SuggestionPool>("suggestions", { businessId })).find(
    (p) => p.rating === rating && (p.language ?? "English") === language,
  );
}

async function savePool(saved: SuggestionPool | undefined, data: Omit<SuggestionPool, "id" | "createdAt">): Promise<SuggestionPool> {
  try {
    if (saved?.id) {
      const updated = await db.update<SuggestionPool>("suggestions", saved.id, data);
      if (updated) return updated;
    }
    return await db.insert<SuggestionPool>("suggestions", data);
  } catch (e) {
    // Couldn't save (e.g. storage not set up): still show the reviews.
    console.error("[reviews] could not save suggestions", e instanceof Error ? e.message : e);
    return { ...data, id: "", createdAt: new Date().toISOString() };
  }
}

async function poolFor(b: WithCategory, rating: number, language: string): Promise<SuggestionPool> {
  const fp = fingerprint(b);
  const saved = await findPool(b.id, rating, language);
  const stale =
    !saved ||
    saved.reviews.length === 0 ||
    (!saved.manual && saved.fingerprint !== fp) ||
    (!saved.manual && isFallback(saved.source) && providers().length > 0 && Date.now() - Date.parse(saved.createdAt) > RETRY_FALLBACK_POOL_MS);
  if (!stale) {
    if (saved.reviews.length < LOW) return topUp(b, saved);
    return saved;
  }
  const used = saved?.used ?? [];
  const keepManual = saved?.manual ? saved.reviews : [];
  const { reviews, source } = await writeDrafts(b, rating, language, POOL_SIZE - keepManual.length, new Set([...used, ...keepManual.map((r) => textHash(render(b, r)))]));
  return savePool(saved, {
    businessId: b.id,
    rating,
    language,
    fingerprint: fp,
    source: saved?.manual ? "Manual" : source,
    reviews: [...keepManual, ...reviews],
    used,
    manual: saved?.manual ?? false,
  });
}

/** Adds drafts to a pool that is running low. */
async function topUp(b: WithCategory, pool: SuggestionPool): Promise<SuggestionPool> {
  const avoid = new Set([...(pool.used ?? []), ...pool.reviews.map((r) => textHash(render(b, r)))]);
  const { reviews, source } = await writeDrafts(b, pool.rating, pool.language ?? "English", POOL_SIZE - pool.reviews.length, avoid);
  if (!reviews.length) return pool;
  const { id: _i, createdAt: _c, ...rest } = pool;
  void _i;
  void _c;
  return savePool(pool, { ...rest, reviews: [...pool.reviews, ...reviews], source: pool.manual ? "Manual" : source });
}

/**
 * A customer copied `draft` to post on Google: never offer it again for this business, and top
 * the pool up when it runs low. Runs after the response (see /api/reviews/event).
 */
export async function markUsed(raw: ReviewBusiness, rating: number, language: string, draft: string): Promise<void> {
  const b = await withCategory(raw);
  const lang = b.languages.includes(language) ? language : b.languages[0];
  const pool = await findPool(b.id, rating, lang);
  if (!pool) return;
  const h = textHash(draft);
  const used = [...new Set([...(pool.used ?? []), h])].slice(-MAX_USED);
  const reviews = pool.reviews.filter((r) => textHash(render(b, r)) !== h);
  const { id: _i, createdAt: _c, ...rest } = pool;
  void _i;
  void _c;
  const saved = await savePool(pool, { ...rest, reviews, used });
  if (reviews.length < LOW) await topUp(b, saved);
}

/** SHOWN reviews for a customer in `language` (one of the business's), picked from the saved pool. */
export async function suggestReviews(raw: ReviewBusiness, rating: number, language?: string): Promise<string[]> {
  const b = await withCategory(raw);
  const lang = language && b.languages.includes(language) ? language : b.languages[0];
  const pool = await poolFor(b, rating, lang);
  return pickShown(pool.reviews.map((r) => render(b, r)));
}

/** A random SHOWN, preferring drafts that open differently so the four on screen don't look alike. */
function pickShown(reviews: string[]): string[] {
  const shuffled = [...reviews].sort(() => Math.random() - 0.5);
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
export async function savedPools(raw: ReviewBusiness): Promise<Record<string, Record<number, string[]>>> {
  const b = await withCategory(raw);
  const fp = fingerprint(b);
  const out: Record<string, Record<number, string[]>> = {};
  for (const p of await db.list<SuggestionPool>("suggestions", { businessId: b.id })) {
    const lang = p.language ?? "English";
    if ((!p.manual && p.fingerprint !== fp) || !b.languages.includes(lang) || !p.reviews.length) continue;
    (out[lang] ??= {})[p.rating] = p.reviews.map((r) => render(b, r));
  }
  return out;
}

/** Writes any missing or outdated pools for the main language, one rating at a time. */
export async function warmPools(raw: ReviewBusiness): Promise<void> {
  const b = await withCategory(raw);
  // One after another: free AI plans limit tokens per minute, and five at once trips that limit.
  for (const r of [5, 4, 3, 2, 1]) await poolFor(b, r, b.languages[0]).catch(() => null);
}

/**
 * Admin "Prepare reviews": rewrites the main language's pools now (up to 5 AI requests).
 * Pools the team edited by hand are kept. Used drafts stay remembered.
 */
export async function regenerateAll(raw: ReviewBusiness): Promise<Record<number, string>> {
  const b = await withCategory(raw);
  const out: Record<number, string> = {};
  const lang = b.languages[0];
  for (const r of [5, 4, 3, 2, 1]) {
    const saved = await findPool(b.id, r, lang);
    if (saved?.manual) {
      out[r] = "Manual";
      continue;
    }
    const used = saved?.used ?? [];
    const { reviews, source } = await writeDrafts(b, r, lang, POOL_SIZE, new Set(used));
    await savePool(saved, { businessId: b.id, rating: r, language: lang, fingerprint: fingerprint(b), source, reviews, used, manual: false });
    out[r] = source;
  }
  return out;
}

/** Where each business's saved reviews came from, for the admin panel. */
export async function poolSources(): Promise<Record<string, string[]>> {
  // Only two small fields: the pools' review texts are not needed here.
  const rows = await db.listFields("suggestions", ["businessId", "source"]);
  const out: Record<string, string[]> = {};
  for (const p of rows) (out[p.businessId] ??= []).push(p.source);
  return out;
}

export interface PoolView {
  rating: number;
  language: string;
  reviews: string[];
  used: number;
  source: string;
  manual: boolean;
}

/** All pools of one business, for the admin's suggestion editor. */
export async function listPools(b: ReviewBusiness): Promise<PoolView[]> {
  const pools = await db.list<SuggestionPool>("suggestions", { businessId: b.id });
  return pools
    .filter((p) => b.languages.includes(p.language ?? "English"))
    .map((p) => ({
      rating: p.rating,
      language: p.language ?? "English",
      reviews: p.reviews,
      used: p.used?.length ?? 0,
      source: p.source,
      manual: Boolean(p.manual),
    }));
}

/**
 * The team's own list for one rating and language. Drafts already posted are dropped (so a
 * listing never gets the same text twice); returns how many were dropped.
 */
export async function setPool(raw: ReviewBusiness, rating: number, language: string, reviews: string[]): Promise<{ saved: number; skipped: number }> {
  const b = await withCategory(raw);
  const saved = await findPool(b.id, rating, language);
  const used = new Set(saved?.used ?? []);
  const clean: string[] = [];
  for (const r of reviews.map((x) => x.trim()).filter((x) => x.length > 5)) {
    if (used.has(textHash(render(b, r))) || clean.some((c) => textHash(c) === textHash(r))) continue;
    clean.push(r.slice(0, 600));
  }
  await savePool(saved, {
    businessId: b.id,
    rating,
    language,
    fingerprint: fingerprint(b),
    source: "Manual",
    reviews: clean,
    used: saved?.used ?? [],
    manual: true,
  });
  return { saved: clean.length, skipped: reviews.filter((x) => x.trim().length > 5).length - clean.length };
}
