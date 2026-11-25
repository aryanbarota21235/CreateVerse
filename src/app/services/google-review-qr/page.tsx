import type { Metadata } from "next";
import { listActivePlans } from "@/lib/admin-data";
import Landing, { type PublicPlan } from "./landing";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Google Review QR System — Get More Google Reviews",
  description:
    "A QR code for your counter: customers scan, tap the stars, pick a review in their language, and post it on Google in under a minute. See plans and sign up.",
  alternates: { canonical: "https://www.createverse.in/services/google-review-qr" },
};

export default async function GoogleReviewQrPage() {
  const plans: PublicPlan[] = (await listActivePlans().catch(() => [])).map((p) => ({
    id: p.id,
    name: p.name,
    priceInr: p.priceInr,
    months: p.months,
    description: p.description,
    features: p.features,
    popular: p.popular,
  }));
  return <Landing plans={plans} />;
}
