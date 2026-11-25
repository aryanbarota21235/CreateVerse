import { listPlans } from "@/lib/admin-data";
import { storageLabel } from "@/lib/db";
import { listBusinesses, statsByBusiness } from "@/lib/reviews/store";
import ClientsView from "./clients-view";

export const metadata = { title: "Review clients" };

export default async function ClientsPage() {
  const [businesses, stats, plans] = await Promise.all([listBusinesses(), statsByBusiness(), listPlans()]);
  return (
    <ClientsView
      businesses={businesses}
      stats={stats}
      plans={plans}
      aiEnabled={Boolean(process.env.ANTHROPIC_API_KEY)}
      storage={storageLabel()}
    />
  );
}
