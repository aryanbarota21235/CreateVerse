import { REVIEW_CATEGORIES, REVIEW_LANGUAGES, slugify, type ReviewBusinessInput } from "@/lib/reviews/types";

const str = (v: unknown, max = 300) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/** Validates admin form input. `partial` allows PATCH bodies with only some fields. */
export function parseBusiness(
  body: Record<string, unknown>,
  partial = false,
): { ok: true; value: Partial<ReviewBusinessInput> } | { ok: false; error: string } {
  const v: Partial<ReviewBusinessInput> = {};
  const has = (k: string) => k in body;

  if (!partial || has("name")) {
    v.name = str(body.name, 120);
    if (!v.name) return { ok: false, error: "Business name is required." };
  }
  if (!partial || has("slug") || has("name")) {
    v.slug = slugify(str(body.slug) || v.name || "");
    if (!v.slug && !partial) return { ok: false, error: "Link name is required." };
    if (!v.slug) delete v.slug;
  }
  if (!partial || has("category")) {
    const c = str(body.category);
    v.category = (REVIEW_CATEGORIES as readonly string[]).includes(c) ? c : "Other";
  }
  if (!partial || has("language")) {
    const l = str(body.language);
    v.language = (REVIEW_LANGUAGES as readonly string[]).includes(l) ? (l as ReviewBusinessInput["language"]) : "English";
  }
  if (!partial || has("city")) v.city = str(body.city, 80);
  if (!partial || has("highlights")) v.highlights = str(body.highlights, 400);
  if (!partial || has("placeId")) v.placeId = str(body.placeId, 200);
  if (!partial || has("reviewUrl")) {
    v.reviewUrl = str(body.reviewUrl, 500);
    if (v.reviewUrl && !/^https:\/\//.test(v.reviewUrl)) {
      return { ok: false, error: "Review link must start with https://" };
    }
  }
  if (!partial || has("active")) v.active = body.active === undefined ? true : Boolean(body.active);

  if (!partial && !v.placeId && !v.reviewUrl) {
    return { ok: false, error: "Add a Google Place ID or a Google review link." };
  }
  return { ok: true, value: v };
}
