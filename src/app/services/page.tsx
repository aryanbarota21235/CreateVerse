import type { Metadata } from "next";
import ServicesGrid from "@/components/services-grid";
import FinalCTA from "@/components/final-cta";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Services — Lead Generation, Ads, Political Management & More",
  description:
    "Explore CreateVerse services: lead generation, Google Ads, paid social, political management, web development, content, design and full-funnel growth systems.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Everything growth needs, <span className="text-accent">under one roof.</span></>}
        description="Acquisition, advertising, creative and technology — organized so every service feeds the same goal: customers, not just clicks."
      />
      <ServicesGrid showHeading={false} />
      <FinalCTA />
    </>
  );
}
