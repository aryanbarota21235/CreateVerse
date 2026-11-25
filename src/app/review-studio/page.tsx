import type { Metadata } from "next";
import { adminConfigured, isAdmin } from "@/lib/reviews/auth";
import { listBusinesses, statsByBusiness } from "@/lib/reviews/store";
import Login from "./login";
import Studio from "./studio";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Review Studio",
  robots: { index: false, follow: false },
};

export default async function ReviewStudioPage() {
  if (!(await isAdmin())) {
    return <Login configured={adminConfigured()} />;
  }
  const [businesses, stats] = await Promise.all([listBusinesses(), statsByBusiness()]);
  return (
    <Studio
      initialBusinesses={businesses}
      initialStats={stats}
      aiEnabled={Boolean(process.env.ANTHROPIC_API_KEY)}
      storage={process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY ? "Supabase" : "Local file (.data/reviews.json)"}
    />
  );
}
