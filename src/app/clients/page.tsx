import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import CaseStudies from "@/components/case-studies";
import PoliticalClients from "@/components/political-clients";
import FinalCTA from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Clients — Case Studies, Campaign Results & Verified Impact",
  description:
    "Explore CreateVerse clients, partners, and case studies across real estate acquisition, immigration marketing, political campaigns, and high-growth performance marketing.",
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients & Case Studies"
        title={
          <>
            Results we&apos;ll <span className="text-accent">show, not tell.</span>
          </>
        }
        description="We're preparing detailed case studies with verified client data. Until they're approved, we publish the shape of our engagements with clearly marked placeholders — never invented numbers."
      />
      <CaseStudies className="pt-2 sm:pt-4 pb-20 lg:pb-28" />
      <PoliticalClients />
      <FinalCTA />
    </>
  );
}
