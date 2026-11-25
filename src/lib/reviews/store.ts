import * as db from "@/lib/db";
import {
  addMonths,
  todayIST,
  type Payment,
  type ReviewBusiness,
  type ReviewBusinessInput,
  type ReviewEvent,
  type ReviewEventType,
  type ReviewStats,
} from "./types";

/* Review-service records on top of the shared document store (src/lib/db.ts). */

const DEFAULTS: Omit<ReviewBusinessInput, "slug" | "name"> = {
  category: "Other",
  city: "",
  highlights: "",
  languages: ["English"],
  placeId: "",
  reviewUrl: "",
  active: true,
  contactName: "",
  phone: "",
  email: "",
  planId: "",
  paidUntil: "",
  signupId: "",
};

/** Fills fields added after a record was first saved. */
const normalize = (b: ReviewBusiness): ReviewBusiness => {
  const n = { ...DEFAULTS, ...b };
  // Records saved before multi-language support had a single `language`.
  const legacy = (b as unknown as { language?: string }).language;
  if (!b.languages?.length) n.languages = [legacy || "English"];
  return n;
};

export async function listBusinesses(): Promise<ReviewBusiness[]> {
  return (await db.list<ReviewBusiness>("businesses")).map(normalize);
}

export async function getBusiness(id: string): Promise<ReviewBusiness | null> {
  const b = await db.get<ReviewBusiness>("businesses", id);
  return b ? normalize(b) : null;
}

export async function getBusinessBySlug(slug: string): Promise<ReviewBusiness | null> {
  const b = await db.findOne<ReviewBusiness>("businesses", { slug });
  return b ? normalize(b) : null;
}

async function assertSlugFree(slug: string, exceptId?: string) {
  const other = await db.findOne<ReviewBusiness>("businesses", { slug });
  if (other && other.id !== exceptId) throw new Error("That QR link name is taken. Pick another.");
}

export async function createBusiness(input: Partial<ReviewBusinessInput> & { slug: string; name: string }) {
  await assertSlugFree(input.slug);
  return normalize(await db.insert<ReviewBusiness>("businesses", { ...DEFAULTS, ...input }));
}

export async function updateBusiness(id: string, patch: Partial<ReviewBusinessInput>) {
  if (patch.slug) await assertSlugFree(patch.slug, id);
  const b = await db.update<ReviewBusiness>("businesses", id, patch);
  return b ? normalize(b) : null;
}

export async function deleteBusiness(id: string) {
  await db.remove("businesses", id);
  await db.removeWhere("events", "businessId", id);
  await db.removeWhere("suggestions", "businessId", id);
}

// ---------- payments ----------

export async function listPayments(businessId?: string): Promise<Payment[]> {
  return db.list<Payment>("payments", businessId ? { businessId } : undefined);
}

/**
 * Records a payment and extends the business's paid-until date by `months`: from the day after
 * the current end if still paid up, otherwise from today.
 */
export async function recordPayment(
  businessId: string,
  p: Pick<Payment, "amountInr" | "method" | "months" | "note"> & { paidOn?: string },
): Promise<{ payment: Payment; business: ReviewBusiness }> {
  const b = await getBusiness(businessId);
  if (!b) throw new Error("Client not found.");
  const today = todayIST();
  const start = b.paidUntil && b.paidUntil >= today ? nextDay(b.paidUntil) : today;
  const paidUntil = addMonths(start, p.months);
  const payment = await db.insert<Payment>("payments", {
    businessId,
    amountInr: p.amountInr,
    method: p.method,
    months: p.months,
    note: p.note,
    paidOn: p.paidOn || today,
  });
  const business = (await updateBusiness(businessId, { paidUntil }))!;
  return { payment, business };
}

function nextDay(day: string) {
  const d = new Date(`${day}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + 1);
  return d.toISOString().slice(0, 10);
}

// ---------- events & stats ----------

export async function logEvent(businessId: string, type: ReviewEventType, rating: number | null) {
  // Stats must never block a customer's review, so a failed write is only logged.
  try {
    await db.insert<ReviewEvent>("events", { businessId, type, rating });
  } catch (e) {
    console.error("[reviews] logEvent failed", e instanceof Error ? e.message : e);
  }
}

export async function statsByBusiness(): Promise<Record<string, ReviewStats>> {
  const events = await db.list<ReviewEvent>("events");
  const out: Record<string, ReviewStats> = {};
  for (const e of events) {
    const st = (out[e.businessId] ??= { scans: 0, copied: 0, byRating: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } });
    if (e.type === "rated") {
      st.scans++;
      if (e.rating && e.rating >= 1 && e.rating <= 5) st.byRating[e.rating as 1 | 2 | 3 | 4 | 5]++;
    } else if (e.type === "copied") {
      st.copied++;
    }
  }
  return out;
}
