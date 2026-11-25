import { NextResponse } from "next/server";
import { adminConfigured, checkPassword, clearAdminCookie, setAdminCookie } from "@/lib/reviews/auth";

export async function POST(req: Request) {
  if (!adminConfigured()) {
    return NextResponse.json({ error: "REVIEW_ADMIN_PASSWORD is not set on the server." }, { status: 500 });
  }
  const { password } = (await req.json().catch(() => ({}))) as { password?: unknown };
  if (typeof password !== "string" || !checkPassword(password)) {
    return NextResponse.json({ error: "Wrong password." }, { status: 401 });
  }
  await setAdminCookie();
  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  await clearAdminCookie();
  return NextResponse.json({ ok: true });
}
