import { NextResponse } from "next/server";
import { createSignup, listActivePlans, notifyTeam } from "@/lib/admin-data";
import { REVIEW_CATEGORIES } from "@/lib/reviews/types";

const str = (v: unknown, max = 300) => (typeof v === "string" ? v.trim().slice(0, max) : "");

// Small per-IP limit against spam.
const hits = new Map<string, { n: number; reset: number }>();
function limited(ip: string) {
  const now = Date.now();
  const h = hits.get(ip);
  if (!h || h.reset < now) {
    hits.set(ip, { n: 1, reset: now + 60 * 60 * 1000 });
    return false;
  }
  return ++h.n > 10;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (limited(ip)) return NextResponse.json({ error: "Too many requests. Please call or WhatsApp us." }, { status: 429 });

  const b = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  if (str(b.website)) return NextResponse.json({ ok: true }); // honeypot field, bots fill it

  const businessName = str(b.businessName, 120);
  const contactName = str(b.contactName, 100);
  const phone = str(b.phone, 30);
  if (!businessName || !contactName || !phone) {
    return NextResponse.json({ error: "Please fill business name, your name and phone." }, { status: 400 });
  }
  if (phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }
  const plans = await listActivePlans();
  const planId = plans.some((p) => p.id === str(b.planId)) ? str(b.planId) : "";
  const category = (REVIEW_CATEGORIES as readonly string[]).includes(str(b.category)) ? str(b.category) : "Other";

  try {
    const signup = await createSignup({
      businessName,
      contactName,
      phone,
      email: str(b.email, 120),
      category,
      city: str(b.city, 80),
      mapsLink: str(b.mapsLink, 500),
      planId,
      branches: 1,
      message: str(b.message, 1000),
      status: "New",
      notes: "",
      businessId: "",
    });
    const plan = plans.find((p) => p.id === planId);
    await notifyTeam({
      leadId: signup.id,
      name: contactName,
      phone,
      email: signup.email,
      company: businessName,
      service: "Google Review QR System",
      budget: plan ? `${plan.name} (₹${plan.priceInr} / ${plan.months} mo)` : "Not chosen",
      source: "Google Review QR sign-up form",
      channel: "Direct Traffic",
      message: `${category}, ${signup.city}. ${signup.message}`.trim(),
      submittedAt: signup.createdAt,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[signup] failed", e instanceof Error ? e.message : e);
    return NextResponse.json({ error: "Could not submit right now. Please call or WhatsApp us." }, { status: 500 });
  }
}
