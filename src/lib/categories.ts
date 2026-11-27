import * as db from "@/lib/db";
import { FAMILY_OF } from "@/lib/reviews/library";

/*
 * Business categories, editable in the admin (Admin -> Categories). Each has:
 *   hint      what customers of this kind of business care about, most important first (steers the AI)
 *   keywords  default search keywords, comma separated, used when a client has none of its own
 *   library   which hand-written review library to fall back on without AI
 * The built-in list below seeds the database the first time categories are read.
 */

export interface Category {
  id: string;
  createdAt: string;
  name: string;
  hint: string;
  keywords: string;
  library: string;
}

export const DEFAULT_CATEGORIES: Omit<Category, "id" | "createdAt" | "library">[] = [
  { name: "Restaurant", hint: "the food first: taste, freshness, specific dishes if listed, portion size; then service speed, staff behaviour, cleanliness, ambience, value for money", keywords: "restaurant, family restaurant" },
  { name: "Café", hint: "the coffee, shakes and snacks first: taste and freshness, specific items if listed; then a nice place to sit with friends or work, ambience, quick service, value for money", keywords: "cafe, coffee shop" },
  { name: "Sweet Shop", hint: "taste and freshness of the sweets first, specific items if listed, pure ghee and good ingredients, neat packing for gifts and festivals; then fair prices, polite staff, cleanliness", keywords: "sweet shop, mithai shop" },
  { name: "Bakery", hint: "cakes, breads, pastries and cookies first: taste and freshness, custom cakes looking as ordered and ready on time, specific items if listed; then variety, eggless options, fair prices, polite staff, cleanliness", keywords: "bakery, cake shop" },
  { name: "Salon", hint: "the result first: haircut, colour, grooming, how they looked and felt after; then the stylist understanding what they wanted, hygiene, value for money", keywords: "salon, unisex salon, beauty parlour" },
  { name: "Spa", hint: "the massage or therapy first: relaxing, body pain relief, skilled therapist who asks about comfort; then hygiene, calm ambience, privacy, value for money", keywords: "spa, massage centre" },
  { name: "Clinic", hint: "feeling better and the doctor first: doctor listened, explained clearly, treatment worked; then staff behaviour, cleanliness, waiting time", keywords: "clinic, doctor" },
  { name: "Hospital", hint: "treatment and doctors first: right diagnosis, good care, recovered well; then nursing staff, cleanliness, quick emergency response, clear billing, waiting time", keywords: "hospital, multispeciality hospital" },
  { name: "Dental Clinic", hint: "the treatment first: painless, done properly, doctor explained the procedure; then hygiene, gentle with nervous patients or kids, waiting time", keywords: "dental clinic, dentist" },
  { name: "Gym", hint: "trainers and equipment first: trainers guide properly and push you, good and well-kept machines; then results they feel, cleanliness, atmosphere, crowd", keywords: "gym, fitness centre" },
  { name: "Hotel", hint: "the stay first: clean, comfortable room, good sleep, helpful staff; then food, location, value for money", keywords: "hotel" },
  { name: "Resort", hint: "the stay and the experience first: clean rooms, peaceful surroundings, lawns or pool, good food; then helpful staff, activities for family and kids, value for money", keywords: "resort" },
  { name: "Retail Store", hint: "the products first: good range and quality, fair prices; then staff helping choose, quick billing, easy exchange", keywords: "shop, store" },
  { name: "Real Estate", hint: "finding the right property first: honest guidance, options within budget, deal done smoothly; then clear paperwork, quick replies", keywords: "real estate agent, property dealer" },
  { name: "Coaching Centre", hint: "learning and results first: concepts became clear, marks or confidence improved, teachers explain well; then doubt clearing, study material, tests", keywords: "coaching centre, coaching institute" },
  { name: "Immigration Consultancy", hint: "the outcome and guidance first: honest advice, file handled properly, visa or admission process went smoothly; then help with documents, regular updates", keywords: "immigration consultant, visa consultant" },
  { name: "Digital Marketing Agency", hint: "business results first: more leads, enquiries and calls started coming, the business grew, more people know about the brand now (visibility), more customers; then the team understood the business, replies fast, regular updates", keywords: "digital marketing agency, SEO company" },
  { name: "Car Service Centre", hint: "the car first: problem fixed properly, runs smoothly now, delivered on time and washed clean; then honest charges, genuine parts, staff explaining the work", keywords: "car service centre, car repair shop" },
  { name: "Bike Service Centre", hint: "the bike first: problem fixed properly, runs smoothly, pickup and mileage feel better, delivered on time; then honest charges, genuine parts, staff explaining the work", keywords: "bike service centre, bike repair shop" },
  { name: "Laptop Repair", hint: "the laptop first: the problem fixed properly (not turning on, slow, broken screen, keyboard, battery, charging, heating, motherboard), works like new, data kept safe, done on time; then honest estimate with no extra charges, genuine parts, staff explaining the fault in simple words", keywords: "laptop repair shop, laptop repair, laptop service centre" },
  { name: "Mobile Repair", hint: "the phone first: screen, battery, charging port or water damage fixed properly, works like new, quick or same day; then honest price, genuine parts, data kept safe", keywords: "mobile repair shop, phone repair" },
  { name: "TV Repair", hint: "the TV first: picture and sound fixed properly, works like new; then technician on time, honest charges, genuine parts, explaining the fault", keywords: "TV repair shop, LED TV repair" },
  { name: "Other", hint: "", keywords: "" },
];

/*
 * Categories used to combine different businesses ("Restaurant / Café"). Each now stands on its
 * own; the first name is where existing clients of the old category move.
 */
const SPLITS: Record<string, string[]> = {
  "Restaurant / Café": ["Restaurant", "Café"],
  "Sweet Shop / Bakery": ["Sweet Shop", "Bakery"],
  "Salon / Spa": ["Salon", "Spa"],
  "Clinic / Hospital": ["Clinic", "Hospital"],
  "Gym / Fitness": ["Gym"],
  "Hotel / Resort": ["Hotel", "Resort"],
  "Education / Coaching": ["Coaching Centre"],
  "Automobile / Service Centre": ["Car Service Centre", "Bike Service Centre"],
  "Mobile / Laptop / TV Repair": ["Laptop Repair", "Mobile Repair", "TV Repair"],
};

/** Replaces old combined categories with single ones and moves their clients. Safe to run again. */
async function splitCombined(cats: Category[]): Promise<boolean> {
  const old = cats.filter((c) => SPLITS[c.name]);
  if (!old.length) return false;
  const names = new Set(cats.map((c) => c.name.toLowerCase()));
  for (const c of old) {
    for (const n of SPLITS[c.name]) {
      if (names.has(n.toLowerCase())) continue;
      const d = DEFAULT_CATEGORIES.find((x) => x.name === n)!;
      await db.insert<Category>("categories", { ...d, library: FAMILY_OF[n] ?? "general" });
      names.add(n.toLowerCase());
    }
    const target = SPLITS[c.name][0];
    for (const b of await db.list<{ id: string; createdAt: string; category: string }>("businesses", { category: c.name })) {
      await db.update("businesses", b.id, { category: target });
    }
    await db.remove("categories", c.id);
  }
  return true;
}

const byName = (a: Category, b: Category) => (a.name === "Other" ? 1 : b.name === "Other" ? -1 : a.name.localeCompare(b.name));

let seeding: Promise<void> | null = null;
let splitting: Promise<void> | null = null;

export async function listCategories(): Promise<Category[]> {
  let cats = await db.list<Category>("categories");
  if (cats.some((c) => SPLITS[c.name])) {
    splitting ??= splitCombined(cats).then(() => undefined).finally(() => (splitting = null));
    await splitting;
    cats = await db.list<Category>("categories");
  }
  if (!cats.length) {
    seeding ??= (async () => {
      for (const c of DEFAULT_CATEGORIES) await db.insert<Category>("categories", { ...c, library: FAMILY_OF[c.name] ?? "general" });
    })();
    await seeding;
    cats = await db.list<Category>("categories");
  }
  return cats.sort(byName);
}

export async function getCategory(name: string): Promise<Category | null> {
  return (await listCategories()).find((c) => c.name === name) ?? null;
}

export const createCategory = (c: Omit<Category, "id" | "createdAt">) => db.insert<Category>("categories", c);
export const updateCategory = (id: string, c: Partial<Omit<Category, "id" | "createdAt">>) => db.update<Category>("categories", id, c);
export const deleteCategory = (id: string) => db.remove("categories", id);

/** A client's own keywords, or else its category's. */
export function keywordsFor(clientKeywords: string, category: Category | null): string[] {
  const list = (clientKeywords.trim() ? clientKeywords : category?.keywords ?? "")
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);
  return [...new Set(list)];
}
