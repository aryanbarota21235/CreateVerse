import Hero from "@/components/hero";
import StatsStrip from "@/components/stats-strip";
import WhatWeDo from "@/components/what-we-do";
import IndustriesSection from "@/components/industries-section";
import LeadFlow from "@/components/lead-flow";
import ServicesExplorer from "@/components/services-explorer";
import ProcessSection from "@/components/process-section";
import CaseStudies from "@/components/case-studies";
import WhyCreateVerse from "@/components/why-createverse";
import FinalCTA from "@/components/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesExplorer />
      <StatsStrip />
      <WhatWeDo />
      <IndustriesSection />
      <LeadFlow />
      <ProcessSection />
      <CaseStudies />
      <WhyCreateVerse />
      <FinalCTA />
    </>
  );
}
