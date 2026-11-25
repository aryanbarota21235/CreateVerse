import { listPlans } from "@/lib/admin-data";
import { listBusinesses } from "@/lib/reviews/store";
import PlansView from "./plans-view";

export const metadata = { title: "Plans" };

export default async function PlansPage() {
  const [plans, businesses] = await Promise.all([listPlans(), listBusinesses()]);
  const used: Record<string, number> = {};
  for (const b of businesses) if (b.planId) used[b.planId] = (used[b.planId] ?? 0) + 1;
  return <PlansView plans={[...plans].sort((a, b) => a.priceInr - b.priceInr)} used={used} />;
}
