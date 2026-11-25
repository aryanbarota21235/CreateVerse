import { listPlans } from "@/lib/admin-data";
import { storageLabel } from "@/lib/db";
import { listBusinesses, statsByBusiness } from "@/lib/reviews/store";
import { providerNames } from "@/lib/reviews/ai";
import { poolSources } from "@/lib/reviews/generate";
import ClientsView from "./clients-view";

export const metadata = { title: "Review clients" };

export default async function ClientsPage() {
  const [businesses, stats, plans, sources] = await Promise.all([listBusinesses(), statsByBusiness(), listPlans(), poolSources()]);
  return (
    <ClientsView
      businesses={businesses}
      stats={stats}
      plans={plans}
      aiProviders={providerNames()}
      sources={sources}
      storage={storageLabel()}
    />
  );
}
