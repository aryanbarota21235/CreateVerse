import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type {
  ReviewBusiness,
  ReviewBusinessInput,
  ReviewEventType,
  ReviewStats,
} from "./types";

/*
 * Storage for the review QR service.
 *
 * Production: Supabase (set SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY, run supabase/review-schema.sql).
 * Local dev without those vars: a JSON file in .data/ so the feature works out of the box.
 * Vercel's filesystem is read-only, so the JSON fallback is for local use only.
 */

interface BusinessRow {
  id: string;
  slug: string;
  name: string;
  category: string;
  city: string;
  highlights: string;
  language: string;
  place_id: string;
  review_url: string;
  active: boolean;
  created_at: string;
}

interface EventRow {
  business_id: string;
  type: ReviewEventType;
  rating: number | null;
  created_at: string;
}

const toBusiness = (r: BusinessRow): ReviewBusiness => ({
  id: r.id,
  slug: r.slug,
  name: r.name,
  category: r.category,
  city: r.city ?? "",
  highlights: r.highlights ?? "",
  language: (r.language as ReviewBusiness["language"]) ?? "English",
  placeId: r.place_id ?? "",
  reviewUrl: r.review_url ?? "",
  active: r.active,
  createdAt: r.created_at,
});

const toRow = (b: Partial<ReviewBusinessInput>): Partial<BusinessRow> => {
  const row: Partial<BusinessRow> = {};
  if (b.slug !== undefined) row.slug = b.slug;
  if (b.name !== undefined) row.name = b.name;
  if (b.category !== undefined) row.category = b.category;
  if (b.city !== undefined) row.city = b.city;
  if (b.highlights !== undefined) row.highlights = b.highlights;
  if (b.language !== undefined) row.language = b.language;
  if (b.placeId !== undefined) row.place_id = b.placeId;
  if (b.reviewUrl !== undefined) row.review_url = b.reviewUrl;
  if (b.active !== undefined) row.active = b.active;
  return row;
};

let supabase: SupabaseClient | null | undefined;
function db(): SupabaseClient | null {
  if (supabase === undefined) {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    supabase = url && key ? createClient(url, key, { auth: { persistSession: false } }) : null;
  }
  return supabase;
}

// ---------- local JSON fallback ----------
const FILE = path.join(process.cwd(), ".data", "reviews.json");
interface LocalData {
  businesses: BusinessRow[];
  events: EventRow[];
}
async function readLocal(): Promise<LocalData> {
  try {
    return JSON.parse(await fs.readFile(FILE, "utf8")) as LocalData;
  } catch {
    return { businesses: [], events: [] };
  }
}
async function writeLocal(data: LocalData) {
  if (process.env.VERCEL) {
    throw new Error(
      "Storage is not set up: add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in Vercel, then redeploy.",
    );
  }
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(data, null, 2));
}

// ---------- public API ----------
export async function listBusinesses(): Promise<ReviewBusiness[]> {
  const s = db();
  if (s) {
    const { data, error } = await s
      .from("review_businesses")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return (data as BusinessRow[]).map(toBusiness);
  }
  const d = await readLocal();
  return [...d.businesses].reverse().map(toBusiness);
}

export async function getBusinessBySlug(slug: string): Promise<ReviewBusiness | null> {
  const s = db();
  if (s) {
    const { data, error } = await s.from("review_businesses").select("*").eq("slug", slug).maybeSingle();
    if (error) throw error;
    return data ? toBusiness(data as BusinessRow) : null;
  }
  const row = (await readLocal()).businesses.find((b) => b.slug === slug);
  return row ? toBusiness(row) : null;
}

export async function createBusiness(input: ReviewBusinessInput): Promise<ReviewBusiness> {
  const s = db();
  if (s) {
    const { data, error } = await s.from("review_businesses").insert(toRow(input)).select("*").single();
    if (error) throw error;
    return toBusiness(data as BusinessRow);
  }
  const d = await readLocal();
  if (d.businesses.some((b) => b.slug === input.slug)) {
    throw new Error("A business with this link name already exists.");
  }
  const row = { ...(toRow(input) as BusinessRow), id: randomUUID(), created_at: new Date().toISOString() };
  d.businesses.push(row);
  await writeLocal(d);
  return toBusiness(row);
}

export async function updateBusiness(
  id: string,
  patch: Partial<ReviewBusinessInput>,
): Promise<ReviewBusiness | null> {
  const s = db();
  if (s) {
    const { data, error } = await s
      .from("review_businesses")
      .update(toRow(patch))
      .eq("id", id)
      .select("*")
      .maybeSingle();
    if (error) throw error;
    return data ? toBusiness(data as BusinessRow) : null;
  }
  const d = await readLocal();
  const i = d.businesses.findIndex((b) => b.id === id);
  if (i < 0) return null;
  if (patch.slug && d.businesses.some((b) => b.slug === patch.slug && b.id !== id)) {
    throw new Error("A business with this link name already exists.");
  }
  d.businesses[i] = { ...d.businesses[i], ...toRow(patch) };
  await writeLocal(d);
  return toBusiness(d.businesses[i]);
}

export async function deleteBusiness(id: string): Promise<void> {
  const s = db();
  if (s) {
    const { error } = await s.from("review_businesses").delete().eq("id", id);
    if (error) throw error;
    return;
  }
  const d = await readLocal();
  d.businesses = d.businesses.filter((b) => b.id !== id);
  d.events = d.events.filter((e) => e.business_id !== id);
  await writeLocal(d);
}

export async function logEvent(businessId: string, type: ReviewEventType, rating: number | null) {
  const row: EventRow = { business_id: businessId, type, rating, created_at: new Date().toISOString() };
  const s = db();
  if (s) {
    const { error } = await s.from("review_events").insert(row);
    if (error) console.error("[reviews] logEvent failed", error.message);
    return;
  }
  // Stats must never block a customer's review, so a failed write is only logged.
  try {
    const d = await readLocal();
    d.events.push(row);
    await writeLocal(d);
  } catch (e) {
    console.error("[reviews] logEvent failed", e instanceof Error ? e.message : e);
  }
}

export async function statsByBusiness(): Promise<Record<string, ReviewStats>> {
  let events: Pick<EventRow, "business_id" | "type" | "rating">[];
  const s = db();
  if (s) {
    const { data, error } = await s.from("review_events").select("business_id,type,rating");
    if (error) throw error;
    events = data as typeof events;
  } else {
    events = (await readLocal()).events;
  }
  const out: Record<string, ReviewStats> = {};
  for (const e of events) {
    const st = (out[e.business_id] ??= { scans: 0, copied: 0, byRating: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } });
    if (e.type === "rated") {
      st.scans++;
      if (e.rating && e.rating >= 1 && e.rating <= 5) st.byRating[e.rating as 1 | 2 | 3 | 4 | 5]++;
    } else if (e.type === "copied") {
      st.copied++;
    }
  }
  return out;
}
