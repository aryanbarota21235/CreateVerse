import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import {
  ENQUIRY_STATUSES,
  PAYMENT_METHODS,
  REVIEW_CATEGORIES,
  MAX_LANGUAGES,
  SIGNUP_STATUSES,
  slugify,
  type ReviewBusinessInput,
} from "@/lib/reviews/types";

/** Runs an admin handler: 401 unless signed in, JSON errors instead of crashes. */
export async function adminRoute(fn: () => Promise<unknown>) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Please sign in again." }, { status: 401 });
  try {
    const result = await fn();
    return result instanceof Response ? result : NextResponse.json(result ?? { ok: true });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Something went wrong.";
    return NextResponse.json({ error: msg }, { status: e instanceof BadInput ? 400 : 500 });
  }
}

export class BadInput extends Error {}

export async function body(req: Request): Promise<Record<string, unknown>> {
  return (await req.json().catch(() => ({}))) as Record<string, unknown>;
}

export const str = (v: unknown, max = 300) => (typeof v === "string" ? v.trim().slice(0, max) : "");
export const num = (v: unknown) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : NaN;
};
const oneOf = <T extends string>(v: unknown, list: readonly T[], fallback: T): T =>
  (list as readonly string[]).includes(str(v)) ? (str(v) as T) : fallback;
const isDay = (v: string) => /^\d{4}-\d{2}-\d{2}$/.test(v);

/** Client (business) fields from the admin form. `partial` for PATCH. */
export function parseBusiness(b: Record<string, unknown>, partial = false): Partial<ReviewBusinessInput> {
  const v: Partial<ReviewBusinessInput> = {};
  const has = (k: string) => !partial || k in b;
  if (has("name")) {
    v.name = str(b.name, 120);
    if (!v.name) throw new BadInput("Business name is required.");
  }
  if (has("slug")) {
    v.slug = slugify(str(b.slug) || v.name || "");
    if (!v.slug) throw new BadInput("QR link is required.");
  }
  if (has("category")) v.category = oneOf(b.category, REVIEW_CATEGORIES, "Other");
  if (has("languages")) {
    const raw = Array.isArray(b.languages) ? b.languages : [];
    const list = [...new Set(raw.map((l) => str(l, 30)).filter((l) => /^[\p{L} ()-]{2,30}$/u.test(l)))].slice(0, MAX_LANGUAGES);
    v.languages = list.length ? list : ["English"];
  }
  if (has("city")) v.city = str(b.city, 80);
  if (has("highlights")) v.highlights = str(b.highlights, 400);
  if (has("keyword")) v.keyword = str(b.keyword, 60);
  if (has("placeId")) v.placeId = str(b.placeId, 200);
  if (has("reviewUrl")) {
    v.reviewUrl = str(b.reviewUrl, 500);
    if (v.reviewUrl && !/^https:\/\//.test(v.reviewUrl)) throw new BadInput("Review link must start with https://");
  }
  if (has("contactName")) v.contactName = str(b.contactName, 100);
  if (has("phone")) v.phone = str(b.phone, 30);
  if (has("email")) v.email = str(b.email, 120);
  if (has("planId")) v.planId = str(b.planId, 60);
  if (has("paidUntil")) {
    v.paidUntil = str(b.paidUntil, 10);
    if (v.paidUntil && !isDay(v.paidUntil)) throw new BadInput("Paid-until must be a date.");
  }
  if ("active" in b) v.active = Boolean(b.active);
  else if (!partial) v.active = true;
  if ("signupId" in b) v.signupId = str(b.signupId, 60);
  if (!partial && !v.placeId && !v.reviewUrl) throw new BadInput("Add the Google Place ID or the Google review link.");
  return v;
}

export function parsePlan(b: Record<string, unknown>, partial = false) {
  const v: { name?: string; priceInr?: number; months?: number; description?: string; features?: string[]; popular?: boolean; active?: boolean } = {};
  const has = (k: string) => !partial || k in b;
  if (has("name")) {
    v.name = str(b.name, 60);
    if (!v.name) throw new BadInput("Plan name is required.");
  }
  if (has("priceInr")) {
    v.priceInr = Math.round(num(b.priceInr));
    if (!(v.priceInr >= 0)) throw new BadInput("Price must be a number.");
  }
  if (has("months")) {
    v.months = Math.round(num(b.months));
    if (!(v.months >= 1 && v.months <= 60)) throw new BadInput("Months must be between 1 and 60.");
  }
  if (has("description")) v.description = str(b.description, 300);
  if (has("features")) {
    const raw = Array.isArray(b.features) ? b.features.join("\n") : str(b.features, 2000);
    v.features = raw.split("\n").map((l) => l.trim().slice(0, 120)).filter(Boolean).slice(0, 10);
  }
  if ("popular" in b) v.popular = Boolean(b.popular);
  else if (!partial) v.popular = false;
  if ("active" in b) v.active = Boolean(b.active);
  else if (!partial) v.active = true;
  return v;
}

export function parsePayment(b: Record<string, unknown>) {
  const amountInr = Math.round(num(b.amountInr));
  const months = Math.round(num(b.months));
  if (!(amountInr >= 0)) throw new BadInput("Amount must be a number.");
  if (!(months >= 1 && months <= 60)) throw new BadInput("Months must be between 1 and 60.");
  const paidOn = str(b.paidOn, 10);
  if (paidOn && !isDay(paidOn)) throw new BadInput("Paid on must be a date.");
  return { amountInr, months, method: oneOf(b.method, PAYMENT_METHODS, "UPI"), note: str(b.note, 300), paidOn };
}

export const parseSignupStatus = (v: unknown) => oneOf(v, SIGNUP_STATUSES, "New");
export const parseEnquiryStatus = (v: unknown) => oneOf(v, ENQUIRY_STATUSES, "New");
