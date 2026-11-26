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

const POOL_SIZE = 10;
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

async function writePool(b: ReviewBusiness, rating: number, language: string): Promise<{ reviews: string[]; source: string }> {
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
    `Write ${POOL_SIZE} different ${rating}-star review drafts.`,
  ]
    .filter((l) => l !== null)
    .join("\n");

  // Drafts that break the rules are dropped, so a reply can come back short. A second try only if
  // fewer than SHOWN survive (each try costs tokens). Up to two tries,
  // keeping the good drafts from both; the templates are only used if AI gives too few.
  const keep = (r: string) => !STIFF.test(r) && (rating > 2 || !PRAISE.test(r));
  const good: string[] = [];
  let provider = "";
  for (let attempt = 0; attempt < 2 && good.length < SHOWN; attempt++) {
    const ai = await askJson(SYSTEM, prompt, (v) => {
      const list = (v as { reviews?: unknown })?.reviews;
      if (!Array.isArray(list)) return null;
      return list.filter((r): r is string => typeof r === "string").map((r) => r.trim()).filter((r) => r.length > 10 && r.length < 500);
    });
    if (!ai) break;
    provider = ai.provider;
    for (const r of ai.value) if (keep(r) && !good.includes(r)) good.push(r);
  }
  if (good.length >= SHOWN) return { reviews: good, source: provider };
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
  // One after another: free AI plans limit tokens per minute, and five at once trips that limit.
  for (const r of [5, 4, 3, 2, 1]) await poolFor(b, r, b.languages[0]).catch(() => null);
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
