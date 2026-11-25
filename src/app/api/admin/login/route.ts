import { NextResponse } from "next/server";
import { adminConfigured, checkPassword, clearAdminCookie, setAdminCookie } from "@/lib/admin-auth";

// Slow down password guessing: a short pause on every failed attempt.
export async function POST(req: Request) {
  if (!adminConfigured()) {
    return NextResponse.json({ error: "ADMIN_PASSWORD is not set on the server." }, { status: 500 });
  }
  const { password } = (await req.json().catch(() => ({}))) as { password?: unknown };
  if (typeof password !== "string" || !checkPassword(password)) {
    await new Promise((r) => setTimeout(r, 800));
    return NextResponse.json({ error: "Wrong password." }, { status: 401 });
  }
  await setAdminCookie();
  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  await clearAdminCookie();
  return NextResponse.json({ ok: true });
}
