import type { Metadata } from "next";
import { Lock, ShieldCheck } from "lucide-react";
import PageHero from "@/components/page-hero";
import CaseStudies from "@/components/case-studies";
import PoliticalClients from "@/components/political-clients";
import FinalCTA from "@/components/final-cta";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "Clients & Case Studies — Verified Results Across Core Sectors",
  description:
    "Explore CreateVerse clients, partners, and case studies across real estate acquisition, immigration marketing, political campaigns, and high-growth performance marketing.",
};

const clientStats = [
  { value: "₹48.6 Cr+", label: "Real Estate Value Closed", desc: "Verified commercial & plotted inventory" },
  { value: "14.2M+", label: "Political Voter Reach", desc: "Constituency-level digital war room operations" },
  { value: "3,850+", label: "Visa Consultations Booked", desc: "Pre-screened applicants with 84% walk-in rate" },
  { value: "4.2x", label: "Blended Capital ROAS", desc: "Performance marketing return on deployed capital" },
];

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients & Verified Impact"
        title={
          <>
            Results engineered across <span className="text-accent">core sectors.</span>
          </>
        }
        description="Acquisition systems, verified inquiries, and strategic campaigns executed with precision. We partner with industry leaders where pipeline quality dictates commercial success."
      />

      {/* 4 High-Impact Client Metrics */}
      <section className="bg-paper pb-10 sm:pb-16 -mt-2 sm:-mt-4">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {clientStats.map((s, idx) => (
              <Reveal key={s.label} delay={idx * 0.08}>
                <div className="rounded-2xl border border-stone-200/90 bg-white p-4 sm:p-6 shadow-card hover:border-accent/40 transition-all duration-200 hover:-translate-y-0.5">
                  <span className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-accent">
                    {s.value}
                  </span>
                  <p className="mt-1 font-display text-xs sm:text-sm font-bold text-ink">{s.label}</p>
                  <p className="mt-0.5 text-[11px] sm:text-xs text-stone-500 font-normal">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CaseStudies className="pt-2 sm:pt-4 pb-14 sm:pb-20 lg:pb-28" />

      {/* Air-Gapped Confidentiality & Integrity Banner */}
      <section className="relative bg-[#090D15] py-14 sm:py-20 text-white">
        <div className="container-site">
          <Reveal>
            <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-12 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pb-6 border-b border-white/10">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-accent/20 text-accent border border-accent/30 shrink-0">
                  <Lock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-3xl font-bold text-white">
                    Client Confidentiality &amp; Proprietary Integrity
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-stone-400 font-normal">
                    We maintain strict NDA agreements and never disclose proprietary competitor data or voter intelligence.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm text-stone-300 font-normal">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Sector Exclusivity: We limit client roster per geographic micro-market.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Direct CRM Ownership: All lead data flows directly into your private CRM.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Real-Time Reporting: Unfiltered live dashboards with verified attribution.</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <PoliticalClients />
      <FinalCTA />
    </>
  );
}
