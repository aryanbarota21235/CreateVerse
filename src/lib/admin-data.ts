import * as db from "@/lib/db";
import type { Enquiry, Plan, Signup } from "@/lib/reviews/types";

/* Plans, review sign-ups and website enquiries, on the shared document store. */

// ---------- plans ----------

/** Fills fields added after a plan was first saved. */
const normalizePlan = (p: Plan): Plan => ({ ...p, features: p.features ?? [], popular: p.popular ?? false, description: p.description ?? "" });

export const listPlans = async () => (await db.list<Plan>("plans")).map(normalizePlan);

export async function listActivePlans(): Promise<Plan[]> {
  return (await listPlans()).filter((p) => p.active).sort((a, b) => a.priceInr - b.priceInr);
}

export const createPlan = (p: Omit<Plan, "id" | "createdAt">) => db.insert<Plan>("plans", p);
export const updatePlan = (id: string, p: Partial<Omit<Plan, "id" | "createdAt">>) => db.update<Plan>("plans", id, p);
export const deletePlan = (id: string) => db.remove("plans", id);

// ---------- sign-ups ----------

export const listSignups = () => db.list<Signup>("signups");
export const getSignup = (id: string) => db.get<Signup>("signups", id);
export const createSignup = (s: Omit<Signup, "id" | "createdAt">) => db.insert<Signup>("signups", s);
export const updateSignup = (id: string, s: Partial<Omit<Signup, "id" | "createdAt">>) => db.update<Signup>("signups", id, s);
export const deleteSignup = (id: string) => db.remove("signups", id);

// ---------- website enquiries ----------

export const listEnquiries = () => db.list<Enquiry>("enquiries");
export const createEnquiry = (e: Omit<Enquiry, "id" | "createdAt">) => db.insert<Enquiry>("enquiries", e);
export const updateEnquiry = (id: string, e: Partial<Omit<Enquiry, "id" | "createdAt">>) => db.update<Enquiry>("enquiries", id, e);
export const deleteEnquiry = (id: string) => db.remove("enquiries", id);

// ---------- Make.com notification (same webhook the site's enquiry forms use) ----------

export async function notifyTeam(payload: Record<string, unknown>) {
  const url = process.env.MAKE_WEBHOOK_URL || "https://hook.eu1.make.com/cbyanw6vlwgsn0sq9mu10vkfipajqdyb";
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "User-Agent": "CreateVerse-Lead-Engine/1.0" },
      body: JSON.stringify(payload),
    });
  } catch (e) {
    console.error("[admin] Make.com webhook failed", e instanceof Error ? e.message : e);
  }
}
