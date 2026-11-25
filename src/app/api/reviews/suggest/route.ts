import { NextResponse } from "next/server";
import { getBusinessBySlug, logEvent } from "@/lib/reviews/store";
import { generateReviews } from "@/lib/reviews/generate";

// Basic per-IP limit so a public QR page can't be used to burn AI credits.
const hits = new Map<string, { count: number; reset: number }>();
const LIMIT = 20;
const WINDOW_MS = 10 * 60 * 1000;

function limited(ip: string) {
  const now = Date.now();
  const h = hits.get(ip);
  if (!h || h.reset < now) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  h.count++;
  return h.count > LIMIT;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (limited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again in a few minutes." }, { status: 429 });
  }

  let body: { slug?: unknown; rating?: unknown; first?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const slug = typeof body.slug === "string" ? body.slug : "";
  const rating = Number(body.rating);
  if (!slug || !Number.isInteger(rating) || rating < 1 || rating > 5) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const business = await getBusinessBySlug(slug);
  if (!business || !business.active) {
    return NextResponse.json({ error: "Business not found." }, { status: 404 });
  }

  if (body.first === true) await logEvent(business.id, "rated", rating);
  const suggestions = await generateReviews(business, rating);
  return NextResponse.json({ suggestions });
}
