import { NextResponse } from "next/server";
import { getBusinessBySlug, logEvent } from "@/lib/reviews/store";

/** Counts a rating ("rated", once per visit) or a review sent to Google ("copied"). */
export async function POST(req: Request) {
  try {
    const { slug, rating, type } = (await req.json()) as { slug?: unknown; rating?: unknown; type?: unknown };
    if (typeof slug !== "string") return NextResponse.json({ ok: false }, { status: 400 });
    const business = await getBusinessBySlug(slug);
    if (!business) return NextResponse.json({ ok: false }, { status: 404 });
    const r = Number(rating);
    await logEvent(business.id, type === "rated" ? "rated" : "copied", Number.isInteger(r) && r >= 1 && r <= 5 ? r : null);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
