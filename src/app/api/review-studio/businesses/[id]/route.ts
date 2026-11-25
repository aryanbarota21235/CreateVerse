import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/reviews/auth";
import { deleteBusiness, updateBusiness } from "@/lib/reviews/store";
import { parseBusiness } from "../validate";

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  const parsed = parseBusiness(body, true);
  if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: 400 });
  try {
    const business = await updateBusiness(id, parsed.value);
    if (!business) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ business });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "Could not save." }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  await deleteBusiness(id);
  return NextResponse.json({ ok: true });
}
