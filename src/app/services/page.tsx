import type { Metadata } from "next";
import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";
import ServicesGrid from "@/components/services-grid";
import PoliticalClients from "@/components/political-clients";
import FinalCTA from "@/components/final-cta";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "Services & Practices — Lead Generation, Paid Ads & Political Management | CreateVerse",
  description:
    "Explore CreateVerse specialized practices: real estate lead generation, immigration funnels, Google Ads, paid social, 24/7 political war rooms, conversion web development, and full-funnel acquisition systems.",
  keywords: [
    "digital marketing services India",
    "real estate lead generation services",
    "immigration visa marketing",
    "political management services",
    "Google Ads management agency",
    "Meta ads paid social",
    "web development services",
    "SEO services India",
    "performance marketing practices",
  ],
  alternates: {
    canonical: "https://createverse.in/services",
  },
  openGraph: {
    title: "Services & Practices — CreateVerse",
    description:
      "Everything growth needs, under one roof. Acquisition, advertising, creative, and technology engineered for verified revenue.",
    url: "https://createverse.in/services",
    siteName: "CreateVerse",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "CreateVerse Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Practices — CreateVerse",
    description: "Everything growth needs, under one roof. Acquisition, advertising, creative, and technology.",
    images: ["/logo.png"],
  },
};

const serviceStats = [
  { value: "₹48.6 Cr+", label: "Property Inventory Closed", desc: "Real estate buyer & investor acquisition" },
  { value: "14.2M+", label: "Voter Attention Reached", desc: "Constituency-level political war rooms" },
  { value: "3,850+", label: "Pre-Screened Visa Leads", desc: "High-attendance immigration consultations" },
  { value: "4.2x", label: "Blended Capital ROAS", desc: "Verified performance marketing efficiency" },
];

const globalPlaybook = [
  {
    phase: "Phase 01",
    timeline: "Days 1 - 10",
    title: "Market Audit & Deep Intelligence",
    desc: "Rigorous analysis of competitor spend, target demographics, and historic acquisition drop-offs.",
  },
  {
    phase: "Phase 02",
    timeline: "Days 11 - 25",
    title: "Funnel & Creative Engineering",
    desc: "High-retention ad creative production, landing pages, qualification logic, and instant CRM webhooks.",
  },
  {
    phase: "Phase 03",
    timeline: "Days 26 - 60",
    title: "Multi-Channel Launch & Scaling",
    desc: "Systematic campaign deployment across Google, Meta, and localized networks with strict CPL caps.",
  },
  {
    phase: "Phase 04",
    timeline: "Day 61 Onwards",
    title: "CRO & Compounding Pipeline",
    desc: "Weekly conversion rate optimization, creative variation testing, and scaling verified return on capital.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services & Practices"
        title={<>Everything growth needs, <span className="text-accent">under one roof.</span></>}
        description="Acquisition, advertising, creative, and technology — engineered so every service feeds the same goal: verified revenue, not just clicks."
      />

      {/* 4 High-Impact Practice Benchmark Metrics */}
      <section className="bg-paper pb-10 sm:pb-16 -mt-2 sm:-mt-4">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-2.5 sm:gap-6 lg:grid-cols-4 items-stretch">
            {serviceStats.map((s, idx) => (
              <Reveal key={s.label} delay={idx * 0.08} className="h-full">
                <div className="h-full flex flex-col justify-start min-h-[160px] sm:min-h-[190px] rounded-2xl border border-stone-200/90 bg-white p-3.5 sm:p-6 shadow-card hover:border-accent/40 transition-all duration-200 hover:-translate-y-0.5">
                  <span className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-accent leading-none">
                    {s.value}
                  </span>
                  <p className="mt-2 font-display text-xs sm:text-sm font-bold text-ink leading-snug min-h-[32px] sm:min-h-[38px] flex items-start">
                    {s.label}
                  </p>
                  <p className="mt-1 text-[10.5px] sm:text-xs text-stone-500 font-normal leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid with Practice Filters */}
      <ServicesGrid showHeading={false} />

      {/* The 4-Phase Deployment Playbook */}
      <section className="relative bg-white py-14 sm:py-20 lg:py-28 border-t border-stone-200">
        <div className="container-site">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Standard of Execution
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
                The 4-Phase Deployment Playbook
              </h2>
              <p className="mt-3 text-xs sm:text-base leading-relaxed text-ink/80 font-normal">
                How we ramp up campaigns, eliminate wasted spend, and scale commercial outcomes across all client practices.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 sm:mt-16 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {globalPlaybook.map((p, idx) => (
              <Reveal key={p.phase} delay={idx * 0.08}>
                <div className="h-full rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-[#F8FAFC] p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:border-accent/50 transition-all hover:bg-white">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xs font-bold uppercase tracking-widest text-accent">
                        {p.phase}
                      </span>
                      <span className="text-[10px] font-semibold text-stone-500 bg-white border border-stone-200 px-2 py-0.5 rounded-full">
                        {p.timeline}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-sm sm:text-base font-bold text-ink">
                      {p.title}
                    </h3>

                    <p className="mt-2 text-xs text-stone-600 font-normal leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center gap-1.5 text-[10.5px] font-semibold text-emerald-700">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                    <span>Quality Verification Gate</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Air-Gapped Security & Performance Governance Banner */}
      <section className="relative bg-[#090D15] py-14 sm:py-20 text-white">
        <div className="container-site">
          <Reveal>
            <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-12">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pb-6 border-b border-white/10">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-accent/20 text-accent border border-accent/30 shrink-0">
                  <Lock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-3xl font-bold text-white">
                    Strict Performance SLAs &amp; Governance
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-stone-400 font-normal">
                    Zero lock-ins, zero black boxes. Complete transparency from ad account to qualified customer.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm text-stone-300 font-normal">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Legally binding NDAs signed prior to account audits and campaign onboarding.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>100% Client Data Ownership: You own your ad accounts, pixel data, and CRM lists.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Dedicated Senior Practice Director leading weekly strategy reviews and CRO sprints.</span>
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
