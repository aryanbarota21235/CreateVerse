import { adminRoute, body, parsePlan } from "@/lib/admin-api";
import { createPlan } from "@/lib/admin-data";
import type { Plan } from "@/lib/reviews/types";

export async function POST(req: Request) {
  return adminRoute(async () => ({ plan: await createPlan(parsePlan(await body(req)) as Omit<Plan, "id" | "createdAt">) }));
}
