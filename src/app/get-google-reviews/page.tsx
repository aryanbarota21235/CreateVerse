import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { listActivePlans } from "@/lib/admin-data";
import Landing, { type PublicPlan } from "./landing";

export const dynamic = "force-dynamic";

// This product page has its own display face, apart from the rest of the site.
const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-rq", display: "swap" });

export const metadata: Metadata = {
  title: "Get More Google Reviews with a QR Code — Plans & Sign-up",
  description:
    "A QR code for your counter: customers scan, tap the stars, pick a review in English, Hinglish or Hindi, and post it on Google in under a minute. See plans and sign up.",
  alternates: { canonical: "https://www.createverse.in/get-google-reviews" },
};

export default async function GetGoogleReviewsPage() {
  const plans: PublicPlan[] = (await listActivePlans().catch(() => [])).map((p) => ({
    id: p.id,
    name: p.name,
    priceInr: p.priceInr,
    months: p.months,
    description: p.description,
    features: p.features,
    popular: p.popular,
  }));
  return (
    <div className={display.variable}>
      <Landing plans={plans} />
    </div>
  );
}
