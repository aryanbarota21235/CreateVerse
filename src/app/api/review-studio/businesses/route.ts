import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/reviews/auth";
import { createBusiness, listBusinesses, statsByBusiness } from "@/lib/reviews/store";
import type { ReviewBusinessInput } from "@/lib/reviews/types";
import { parseBusiness } from "./validate";

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const [businesses, stats] = await Promise.all([listBusinesses(), statsByBusiness()]);
  return NextResponse.json({ businesses, stats });
}

export async function POST(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  const parsed = parseBusiness(body);
  if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: 400 });
  try {
    const business = await createBusiness(parsed.value as ReviewBusinessInput);
    return NextResponse.json({ business });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Could not save.";
    const dup = /duplicate|already exists|unique/i.test(msg);
    return NextResponse.json(
      { error: dup ? "That link name is taken. Pick another." : msg },
      { status: dup ? 409 : 500 },
    );
  }
}
