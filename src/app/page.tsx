import type { Metadata } from "next";
import Hero from "@/components/hero";
import LeadFlow from "@/components/lead-flow";
import ServicesExplorer from "@/components/services-explorer";
import StatsStrip from "@/components/stats-strip";
import PoliticalClients from "@/components/political-clients";
import ProcessSection from "@/components/process-section";
import WhyCreateVerse from "@/components/why-createverse";
import FinalCTA from "@/components/final-cta";
import { siteKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: "CreateVerse — Growth & Digital Acquisition Partner | Performance Marketing & War Rooms",
  description:
    "Turn digital attention into verified revenue. CreateVerse designs and executes high-impact acquisition funnels for real estate developers, immigration consultancies, political campaigns, and ambitious brands across India and global diaspora markets.",
  keywords: siteKeywords,
  alternates: {
    canonical: "https://createverse.in",
  },
  openGraph: {
    title: "CreateVerse — Growth & Digital Acquisition Partner",
    description:
      "Turn digital attention into real revenue. Specialized acquisition systems for real estate developers, immigration consultancies, political campaigns, and high-growth brands.",
    url: "https://createverse.in",
    siteName: "CreateVerse",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "CreateVerse — Redefining Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CreateVerse — Growth & Digital Acquisition Partner",
    description:
      "Turn digital attention into real revenue. Specialized acquisition systems for real estate developers, immigration consultancies, political campaigns, and high-growth brands.",
    images: ["/logo.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <LeadFlow />
      <ServicesExplorer />
      <StatsStrip />
      <PoliticalClients />
      <ProcessSection />
      <WhyCreateVerse />
      <FinalCTA />
    </>
  );
}
