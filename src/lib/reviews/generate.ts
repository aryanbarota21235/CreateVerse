import Anthropic from "@anthropic-ai/sdk";
import type { ReviewBusiness } from "./types";

/*
 * Generates short review drafts a customer can pick, edit and post themselves.
 *
 * Tone by rating (the customer's chosen stars are always respected):
 *   5 / 4 -> warm and positive
 *   3     -> balanced: what was good, one thing to improve
 *   2 / 1 -> polite and constructive: names what needs improvement, credits anything that was fine
 *
 * Drafts never invent specifics (names, prices, dates, the customer's own business, results)
 * beyond the highlights the business itself listed, because the customer has to be able to
 * stand behind what gets posted under their name.
 */

const MODEL = process.env.REVIEW_AI_MODEL || "claude-opus-5-5";
const COUNT = 4;

const TONE: Record<number, string> = {
  5: "Very happy customer. Warm, enthusiastic and specific about what they liked.",
  4: "Happy customer. Positive overall, maybe one tiny suggestion phrased kindly.",
  3: "Mixed experience. Mention what was good AND one clear thing that could be better. Neutral, fair tone.",
  2: "Disappointed but polite. Clearly say what needs improvement, and acknowledge anything that was okay. Constructive, never rude or abusive.",
  1: "Unhappy customer. Polite and constructive: clearly state what needs to improve, credit anything that was fine, and say they hope it gets better. Never rude, abusive or exaggerated, and never praise-heavy: it must read like a 1-star review.",
};

const SYSTEM = `You write short Google review drafts for a customer who just rated a local business. The customer will pick one draft, edit it if they like, and post it under their own name.

Rules:
- Match the star rating's tone exactly. A low rating must read as a low rating: constructive and polite, never secretly positive.
- 2 to 3 sentences, 20 to 55 words each. Sound like a real local customer, not marketing copy. No hashtags, no emojis, no ALL CAPS.
- Only mention aspects that fit the business category, and the business's own listed highlights if given. Never invent names, prices, dates, durations, outcomes, or details about the customer's own life or business.
- Each draft must take a different angle and start with different words.
- Do not mention AI, stars, or that this is a draft.`;

const SCHEMA = {
  type: "object",
  properties: {
    reviews: { type: "array", items: { type: "string" } },
  },
  required: ["reviews"],
  additionalProperties: false,
} as const;

let client: Anthropic | null = null;
function anthropic(): Anthropic | null {
  if (!process.env.ANTHROPIC_API_KEY) return null;
  client ??= new Anthropic();
  return client;
}

export async function generateReviews(b: ReviewBusiness, rating: number): Promise<string[]> {
  const c = anthropic();
  if (!c) return fallbackReviews(b, rating);

  const prompt = [
    `Business: ${b.name}`,
    `Category: ${b.category}`,
    b.city ? `City: ${b.city}` : null,
    b.highlights ? `Things customers can mention: ${b.highlights}` : null,
    `Language: ${languageNote(b.language)}`,
    `Star rating chosen: ${rating} of 5`,
    `Tone: ${TONE[rating]}`,
    ``,
    `Write ${COUNT} different review drafts.`,
  ]
    .filter((l) => l !== null)
    .join("\n");

  try {
    const res = await c.beta.messages.create({
      model: MODEL,
      max_tokens: 2000,
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      system: SYSTEM,
      output_config: { effort: "low", format: { type: "json_schema", schema: SCHEMA } },
      messages: [{ role: "user", content: prompt }],
    });

    if (res.stop_reason === "refusal") return fallbackReviews(b, rating);
    const text = res.content.find((x) => x.type === "text");
    if (!text || text.type !== "text") return fallbackReviews(b, rating);
    const parsed = JSON.parse(text.text) as { reviews?: unknown };
    const reviews = Array.isArray(parsed.reviews)
      ? parsed.reviews.filter((r): r is string => typeof r === "string" && r.trim().length > 0).map((r) => r.trim())
      : [];
    return reviews.length ? reviews.slice(0, COUNT) : fallbackReviews(b, rating);
  } catch (err) {
    console.error("[reviews] AI generation failed, using templates:", err instanceof Error ? err.message : err);
    return fallbackReviews(b, rating);
  }
}

function languageNote(lang: ReviewBusiness["language"]): string {
  if (lang === "Hinglish") return "Hinglish (Hindi written in Roman/English letters, mixed with English, as people in North India text)";
  if (lang === "Hindi") return "Hindi in Devanagari script";
  return "Simple Indian English";
}

// The third aspect is always people (staff/team), so "were" in the templates reads correctly.
// ---------- template fallback (no API key, or the API failed) ----------

type Aspects = [string, string, string];
const ASPECTS: Record<string, Aspects> = {
  "Restaurant / Café": ["the food", "the ambience", "the staff"],
  "Salon / Spa": ["the service", "the hygiene", "the staff"],
  "Clinic / Hospital": ["the doctor's consultation", "the waiting time", "the staff"],
  "Dental Clinic": ["the treatment", "the hygiene", "the staff"],
  "Gym / Fitness": ["the equipment", "the cleanliness", "the trainers"],
  "Hotel / Resort": ["the rooms", "the cleanliness", "the staff"],
  "Retail Store": ["the product range", "the pricing", "the staff"],
  "Real Estate": ["the guidance", "the transparency", "the team"],
  "Education / Coaching": ["the teaching", "the study material", "the faculty"],
  "Immigration Consultancy": ["the guidance", "the documentation support", "the team"],
  "Digital Marketing Agency": ["the strategy", "the reporting", "the team"],
  "Automobile / Service Centre": ["the service quality", "the turnaround time", "the staff"],
};
const DEFAULT_ASPECTS: Aspects = ["the service", "the experience", "the staff"];

function fallbackReviews(b: ReviewBusiness, rating: number): string[] {
  const [a, c, d] = ASPECTS[b.category] ?? DEFAULT_ASPECTS;
  const n = b.name;
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  const byRating: Record<number, string[]> = {
    5: [
      `Had a great experience at ${n}. ${cap(a)} was excellent and ${c} was just as good. Highly recommended!`,
      `${cap(d)} at ${n} were really helpful and friendly. Loved ${a}. Will definitely come back.`,
      `One of the best places of its kind. ${cap(c)} and ${a} were both top notch. Thank you ${n}!`,
      `Really impressed with ${n}. Everything from ${a} to ${d} was well handled. Five stars from me.`,
    ],
    4: [
      `Good experience at ${n}. ${cap(a)} was very good and ${d} were polite. A few small things can be better, but overall happy.`,
      `Liked ${a} and ${c} at ${n}. Would recommend it to others.`,
      `Nice place, ${d} were helpful. ${cap(c)} could be slightly better, otherwise a good experience.`,
      `Overall a pleasant experience at ${n}. ${cap(a)} met my expectations.`,
    ],
    3: [
      `Average experience at ${n}. ${cap(a)} was okay, but ${c} needs some improvement.`,
      `${cap(d)} were polite, but ${a} could be better. Decent overall.`,
      `Some things were good, some not. ${cap(c)} was fine, ${a} needs more attention.`,
      `It was an okay visit. Hope ${n} works on ${c}.`,
    ],
    2: [
      `${cap(a)} at ${n} needs improvement. ${cap(d)} were polite though. Hope it gets better.`,
      `Not fully satisfied. ${cap(c)} was below expectations, but ${d} tried to help.`,
      `Expected better ${a}. ${cap(c)} was okay. Please work on the experience.`,
      `My visit was a bit disappointing because of ${a}. Hope to see improvements next time.`,
    ],
    1: [
      `${cap(a)} at ${n} needs a lot of improvement. ${cap(d)} were polite, but the overall experience did not meet my expectations.`,
      `Not a good experience this time. ${cap(c)} needs attention. Hope ${n} works on it.`,
      `Was disappointed with ${a}. I hope the team takes this feedback and improves.`,
      `${cap(a)} and ${c} both need improvement. Hoping for a better experience in the future.`,
    ],
  };
  return byRating[rating] ?? byRating[5];
}
