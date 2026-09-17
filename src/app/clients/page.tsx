import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import PoliticalClients from "@/components/political-clients";
import OtherServicesClients from "@/components/other-services-clients";
import FinalCTA from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Clients & Strategic Partners | CreateVerse",
  description:
    "Explore CreateVerse clients across political campaign management, real estate acquisitions, immigration consultancies, and performance marketing operations.",
  keywords: [
    "CreateVerse clients",
    "political clients India",
    "politician marketing clients",
    "real estate developer clients",
    "immigration consultancy clients",
    "performance marketing roster",
  ],
  alternates: {
    canonical: "https://createverse.in/clients",
  },
  openGraph: {
    title: "Clients & Strategic Partners — CreateVerse",
    description:
      "Explore CreateVerse clients across political campaign management, real estate acquisitions, immigration consultancies, and performance marketing operations.",
    url: "https://createverse.in/clients",
    siteName: "CreateVerse",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "CreateVerse Clients" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clients & Strategic Partners — CreateVerse",
    description:
      "Explore CreateVerse clients across political campaign management, real estate acquisitions, immigration consultancies, and performance marketing operations.",
    images: ["/logo.png"],
  },
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="CreateVerse Clients"
        title={
          <>
            Our <span className="text-accent">Clients</span> &amp; Strategic Partners
          </>
        }
        description="Distinguished political leadership, real estate developers, immigration consultancies, and commercial enterprises partnering with CreateVerse to engineer verified growth."
      />

      {/* Political Clients Section - Directly visible right at the top */}
      <PoliticalClients />

      {/* Other Services Practice Client Rosters */}
      <OtherServicesClients />

      <FinalCTA />
    </>
  );
}
