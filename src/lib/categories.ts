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
  { name: "Restaurant / Café", hint: "the food first: taste, freshness, specific dishes if listed, portion size; then service speed, staff behaviour, cleanliness, ambience, value for money", keywords: "restaurant, family restaurant" },
  { name: "Sweet Shop / Bakery", hint: "taste and freshness of the sweets/cakes first, specific items if listed, quality of ghee/ingredients, neat packing for gifts and functions; then fair prices, polite staff, cleanliness", keywords: "sweet shop, mithai shop, bakery" },
  { name: "Salon / Spa", hint: "the result first: haircut, colour, facial, how they looked and felt after; then the stylist understanding what they wanted, hygiene, relaxing feel, value for money", keywords: "salon, unisex salon, beauty parlour" },
  { name: "Clinic / Hospital", hint: "feeling better and the doctor first: doctor listened, explained clearly, treatment worked; then staff behaviour, cleanliness, waiting time", keywords: "clinic, doctor" },
  { name: "Dental Clinic", hint: "the treatment first: painless, done properly, doctor explained the procedure; then hygiene, gentle with nervous patients or kids, waiting time", keywords: "dental clinic, dentist" },
  { name: "Gym / Fitness", hint: "trainers and equipment first: trainers guide properly and push you, good and well-kept machines; then results they feel, cleanliness, atmosphere, crowd", keywords: "gym, fitness centre" },
  { name: "Hotel / Resort", hint: "the stay first: clean, comfortable room, good sleep, helpful staff; then food, location, value for money", keywords: "hotel" },
  { name: "Retail Store", hint: "the products first: good range and quality, fair prices; then staff helping choose, quick billing, easy exchange", keywords: "shop, store" },
  { name: "Real Estate", hint: "finding the right property first: honest guidance, options within budget, deal done smoothly; then clear paperwork, quick replies", keywords: "real estate agent, property dealer" },
  { name: "Education / Coaching", hint: "learning and results first: concepts became clear, marks or confidence improved, teachers explain well; then doubt clearing, study material, tests", keywords: "coaching centre, coaching institute" },
  { name: "Immigration Consultancy", hint: "the outcome and guidance first: honest advice, file handled properly, visa or admission process went smoothly; then help with documents, regular updates", keywords: "immigration consultant, visa consultant" },
  { name: "Digital Marketing Agency", hint: "business results first: more leads, enquiries and calls started coming, the business grew, more people know about the brand now (visibility), more customers; then the team understood the business, replies fast, regular updates", keywords: "digital marketing agency, SEO company" },
  { name: "Automobile / Service Centre", hint: "the vehicle first: problem fixed properly, runs smoothly now, delivered on time; then honest charges, staff explaining the work", keywords: "car service centre, bike service centre" },
  { name: "Mobile / Laptop / TV Repair", hint: "the device first: problem fixed properly, works like new, done on time or same day; then honest estimate with no extra charges, genuine parts, staff explaining the fault", keywords: "mobile repair shop, laptop repair shop, TV repair shop" },
  { name: "Other", hint: "", keywords: "" },
];

const byName = (a: Category, b: Category) => (a.name === "Other" ? 1 : b.name === "Other" ? -1 : a.name.localeCompare(b.name));

let seeding: Promise<void> | null = null;

export async function listCategories(): Promise<Category[]> {
  let cats = await db.list<Category>("categories");
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
