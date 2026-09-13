import Hero from "@/components/hero";
import LeadFlow from "@/components/lead-flow";
import ServicesExplorer from "@/components/services-explorer";
import StatsStrip from "@/components/stats-strip";
import PoliticalClients from "@/components/political-clients";
import ProcessSection from "@/components/process-section";
import CaseStudies from "@/components/case-studies";
import WhyCreateVerse from "@/components/why-createverse";
import FinalCTA from "@/components/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LeadFlow />
      <ServicesExplorer />
      <StatsStrip />
      <PoliticalClients />
      <ProcessSection />
      <CaseStudies showHeading={true} />
      <WhyCreateVerse />
      <FinalCTA />
    </>
  );
}
