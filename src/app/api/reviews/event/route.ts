import { NextResponse, after } from "next/server";
import { getBusinessBySlug, logEvent } from "@/lib/reviews/store";
import { markUsed } from "@/lib/reviews/generate";

export const maxDuration = 60;

/**
 * Counts a rating ("rated", once per visit) or a review sent to Google ("copied").
 * For "copied", `draft` is the suggestion the customer picked: it's marked used so the same
 * text is never offered again for this business (and the pool is topped up after the response).
 */
export async function POST(req: Request) {
  try {
    const { slug, rating, type, draft, language, service } = (await req.json()) as {
      slug?: unknown;
      rating?: unknown;
      type?: unknown;
      draft?: unknown;
      language?: unknown;
      service?: unknown;
    };
    if (typeof slug !== "string") return NextResponse.json({ ok: false }, { status: 400 });
    const business = await getBusinessBySlug(slug);
    if (!business) return NextResponse.json({ ok: false }, { status: 404 });
    const r = Number(rating);
    const validRating = Number.isInteger(r) && r >= 1 && r <= 5 ? r : null;
    const kind = type === "rated" ? "rated" : "copied";
    await logEvent(business.id, kind, validRating);
    if (kind === "copied" && validRating && typeof draft === "string" && draft.trim()) {
      const lang = typeof language === "string" ? language : business.languages[0];
      after(() => markUsed(business, validRating, lang, draft.slice(0, 1000), typeof service === "string" ? service.slice(0, 80) : "").catch((e) => console.error("[reviews] markUsed failed", e)));
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
