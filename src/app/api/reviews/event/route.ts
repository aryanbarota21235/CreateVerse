import { NextResponse } from "next/server";
import { getBusinessBySlug, logEvent } from "@/lib/reviews/store";

export async function POST(req: Request) {
  try {
    const { slug, rating } = (await req.json()) as { slug?: unknown; rating?: unknown };
    if (typeof slug !== "string") return NextResponse.json({ ok: false }, { status: 400 });
    const business = await getBusinessBySlug(slug);
    if (!business) return NextResponse.json({ ok: false }, { status: 404 });
    const r = Number(rating);
    await logEvent(business.id, "copied", Number.isInteger(r) && r >= 1 && r <= 5 ? r : null);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
