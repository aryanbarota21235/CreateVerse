import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import CaseStudies from "@/components/case-studies";
import FinalCTA from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Work — Case Studies & Campaign Results",
  description:
    "Case studies across real estate lead generation, immigration marketing, political campaigns and performance marketing. Placeholder data clearly marked until verified results are published.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title={<>Results we&apos;ll <span className="text-accent">show, not tell.</span></>}
        description="We're preparing detailed case studies with verified client data. Until they're approved, we publish the shape of our engagements with clearly marked placeholders — never invented numbers."
      />
      <CaseStudies />
      <FinalCTA />
    </>
  );
}
