import type { Metadata } from "next";
import Hero from "@/components/hero";
import PracticeAreas from "@/components/practice-areas";
import LeadFlow from "@/components/lead-flow";
import ServicesExplorer from "@/components/services-explorer";
import StatsStrip from "@/components/stats-strip";
import PoliticalClients from "@/components/political-clients";
import OurClients from "@/components/our-clients";
import ProcessSection from "@/components/process-section";
import LocalPresence from "@/components/local-presence";
import FinalCTA from "@/components/final-cta";
import { siteKeywords, homeFaqs, getFaqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Karnal, India | CreateVerse",
  description:
    "Digital marketing agency in Karnal, Haryana, serving clients across India — Google Ads, Meta Ads, SEO, lead generation and web development. Call +91 91746-91846.",
  keywords: siteKeywords,
  alternates: {
    canonical: "https://www.createverse.in",
  },
  openGraph: {
    title: "CreateVerse — Digital Marketing Agency in Karnal, India",
    description:
      "Turn digital attention into real revenue. Specialized acquisition systems for real estate developers, immigration consultancies, political campaigns, and high-growth brands.",
    url: "https://www.createverse.in",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFaqJsonLd(homeFaqs, "https://www.createverse.in/")),
        }}
      />
      <Hero />
      <PracticeAreas />
      <LeadFlow />
      <ServicesExplorer />
      <StatsStrip />
      <OurClients />
      <PoliticalClients />
      <ProcessSection />
      <LocalPresence />
      <FinalCTA />
    </>
  );
}
