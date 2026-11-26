import { createHash } from "crypto";
import * as db from "@/lib/db";
import { askJson, providers } from "./ai";
import { templateReviews } from "./templates";
import { libraryReviews } from "./library";
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
export function render(b: Pick<ReviewBusiness, "name" | "city" | "keyword" | "highlights">, text: string): string {
  if (!text.includes("{")) return text;
  const things = b.highlights.split(",").map((h) => h.trim()).filter(Boolean);
  const values: Record<string, string> = {
    name: b.name.trim(),
    city: b.city.trim(),
    keyword: b.keyword.trim(),
    kw: b.keyword.trim(),
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
  5: `Delighted customer. Warm, specific about what they got, sounds like a real person who would happily recommend the place.
Good: "Got my root canal done here and honestly it was painless. Doctor explained everything before starting. Very happy."
Good: "Since they started our ads, we're getting a lot more enquiries and calls. Our business has really grown. Thank you team!"
Good: "Many more people know about our brand now. The leads are coming in regularly and the team always replies quickly."`,
  4: `Happy customer. Clearly positive, with one small thing that could be a bit better, said kindly.
Good: "Food was really tasty and came out quickly. Parking is a little tight on weekends, but we'll definitely come back."`,
  3: `Average experience. One thing was fine AND one thing clearly needs to improve. Neutral and fair, neither praising nor complaining hard.
Good: "Haircut was fine, but I had to wait 30 minutes even with an appointment. Okay overall."`,
  2: `Disappointed customer. The main message is what went wrong. At most one short polite remark about something that was okay. No praise words.
Good: "Food came cold and we had to remind them twice for water. Staff were polite, but the service needs work."`,
  1: `Unhappy customer. This was a bad experience. Clearly say what went wrong, in general terms, and that it needs to improve. Calm and polite, never abusive, but NO praise at all: never "good", "great", "excellent", "recommend" or "will come again".
Good: "Not a good experience. We didn't get the results we expected and replies were slow. Hope they improve."
Good: "The food was not fresh and service was very slow. Disappointed with this visit."`,
};

// What the customer got out of it, most important first. Reviews should be mostly about the first items.
const CATEGORY_HINT: Record<string, string> = {
  "Restaurant / Café": "the food first: taste, freshness, specific dishes if listed, portion size; then service speed, staff behaviour, cleanliness, ambience, value for money",
  "Salon / Spa": "the result first: haircut, colour, facial, how they looked and felt after; then the stylist understanding what they wanted, hygiene, relaxing feel, value for money",
  "Clinic / Hospital": "feeling better and the doctor first: doctor listened, explained clearly, treatment worked; then staff behaviour, cleanliness, waiting time",
  "Dental Clinic": "the treatment first: painless, done properly, doctor explained the procedure; then hygiene, gentle with nervous patients or kids, waiting time",
  "Gym / Fitness": "trainers and equipment first: trainers guide properly and push you, good and well-kept machines; then results they feel, cleanliness, atmosphere, crowd",
  "Hotel / Resort": "the stay first: clean, comfortable room, good sleep, helpful staff; then food, location, value for money",
  "Retail Store": "the products first: good range and quality, fair prices; then staff helping choose, quick billing, easy exchange",
  "Real Estate": "finding the right property first: honest guidance, options within budget, deal done smoothly; then clear paperwork, quick replies",
  "Education / Coaching": "learning and results first: concepts became clear, marks or confidence improved, teachers explain well; then doubt clearing, study material, tests",
  "Immigration Consultancy": "the outcome and guidance first: honest advice, file handled properly, visa or admission process went smoothly; then help with documents, regular updates",
  "Digital Marketing Agency": "business results first: more leads, enquiries and calls started coming, the business grew, more people know about the brand now (visibility), more customers; then the team understood the business, replies fast, regular updates",
  "Sweet Shop / Bakery": "taste and freshness of the sweets/cakes first, specific items if listed, quality of ghee/ingredients, neat packing for gifts and functions; then fair prices, polite staff, cleanliness",
  "Mobile / Laptop / TV Repair": "the device first: problem fixed properly, works like new, done on time or same day; then honest estimate with no extra charges, genuine parts, staff explaining the fault",
  "Automobile / Service Centre": "the vehicle first: problem fixed properly, runs smoothly now, delivered on time; then honest charges, staff explaining the work",
};

// Stiff, generic or salesy wording that real customers don't write. Drafts using these are dropped.
const STIFF = /\d|\b(reports?|metrics|onboarding|paperwork|invoice|KPIs?)\b|\b(a|one|two|three|four|five|six|few|couple of|first|second|third|next) (day|week|month|hour|minute)s?\b|\b(doubled|tripled|overnight|within (a|one) (day|week))\b|\b(our|my) (bakery|shop|store|restaurant|clinic|salon|product|brand new)\b|\b(dashboard|reporting|transparency|deliverables?|synergy|top[- ]class|top[- ]notch|exceptional|impeccable|seamless|commendable|utmost|second to none|state[- ]of[- ]the[- ]art|one[- ]stop|hassle[- ]free experience|wonderful experience|I am (very )?(much )?impressed|kudos)\b/i;

// Low ratings must not read as praise: drafts with these words are thrown away for 1 and 2 stars.
const PRAISE = /\b(excellent|amazing|awesome|outstanding|fantastic|wonderful|superb|perfect|great|best|loved|lovely|highly recommend|recommend|top class|will (definitely )?(come|visit) again|badhiya|shandaar|lajawab|zabardast|kamaal)\b|बहुत अच्छ|बढ़िया|शानदार|लाजवाब|बेहतरीन|ज़बरदस्त|ਬਹੁਤ ਵਧੀਆ|ਸ਼ਾਨਦਾਰ/i;

const SYSTEM = `You write Google review drafts for customers of a local business in India. A real customer picks one, may edit it, and posts it under their own name, so every draft must sound like that customer wrote it on their phone.

How real reviews sound:
- Plain, everyday words. Like telling a friend. Short sentences. Indian English is fine ("very nice", "got it done", "they replied fast").
- About the customer's own visit: what they came for, what happened, how they felt. Concrete, not generic praise.
- Mix of lengths: some one line (8-15 words), most 2-3 sentences (20-45 words). Never longer than 55 words.
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

function fingerprint(b: ReviewBusiness) {
  // Bumped whenever the writing rules change, so saved pools are rewritten ("v7": keyword + city; results-first, no invented facts or time spans).
  return createHash("sha1").update(["v7", b.name, b.category, b.highlights, b.keyword, b.city].join("|")).digest("hex").slice(0, 16);
}

/**
 * Local search: some good reviews name what the business is and where, the way people search
 * ("best sweet shop in Karnal"). Google reads review text, so this helps the listing show up for
 * those searches. Only for 4-5 stars, and only in some drafts so they don't all sound the same.
 */
function seoLine(b: ReviewBusiness, rating: number): string | null {
  if (rating < 4) return null;
  const what = b.keyword.trim() || `(a plain everyday name for this kind of business, like "sweet shop" or "dental clinic")`;
  const where = b.city.trim();
  if (!where && !b.keyword.trim()) return null;
  return [
    `Search wording: in about half of the drafts (not all), naturally mention what the business is${where ? " and the city" : ""}, the way people search on Google.`,
    `What it is: ${what}.${where ? ` City: ${where}.` : ""}`,
    where
      ? `Vary it, e.g. "best ${b.keyword.trim() || "sweet shop"} in ${where}", "if you need a ${b.keyword.trim() || "sweet shop"} in ${where}", "one of the best in ${where}". No made-up landmarks or areas. Use it at most once per draft, in the language of the review.`
      : `Use it at most once per draft.`,
  ].join("\n");
}

async function writeDrafts(
  b: ReviewBusiness,
  rating: number,
  language: string,
  count: number,
  avoid: Set<string>,
): Promise<{ reviews: string[]; source: string }> {
  const prompt = [
    `Business: ${b.name}`,
    `Category: ${b.category}`,
    b.city ? `City: ${b.city}` : null,
    CATEGORY_HINT[b.category] ? `What matters to customers, most important first: ${CATEGORY_HINT[b.category]}` : null,
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
  if (language === "English") add(libraryReviews(b, rating));
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

async function poolFor(b: ReviewBusiness, rating: number, language: string): Promise<SuggestionPool> {
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
async function topUp(b: ReviewBusiness, pool: SuggestionPool): Promise<SuggestionPool> {
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
export async function markUsed(b: ReviewBusiness, rating: number, language: string, draft: string): Promise<void> {
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
export async function suggestReviews(b: ReviewBusiness, rating: number, language?: string): Promise<string[]> {
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
export async function savedPools(b: ReviewBusiness): Promise<Record<string, Record<number, string[]>>> {
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
export async function warmPools(b: ReviewBusiness): Promise<void> {
  // One after another: free AI plans limit tokens per minute, and five at once trips that limit.
  for (const r of [5, 4, 3, 2, 1]) await poolFor(b, r, b.languages[0]).catch(() => null);
}

/**
 * Admin "Prepare reviews": rewrites the main language's pools now (up to 5 AI requests).
 * Pools the team edited by hand are kept. Used drafts stay remembered.
 */
export async function regenerateAll(b: ReviewBusiness): Promise<Record<number, string>> {
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
  const pools = await db.list<SuggestionPool>("suggestions");
  const out: Record<string, string[]> = {};
  for (const p of pools) (out[p.businessId] ??= []).push(p.source);
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
export async function setPool(b: ReviewBusiness, rating: number, language: string, reviews: string[]): Promise<{ saved: number; skipped: number }> {
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
