import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lock, ShieldCheck } from "lucide-react";
import PageHero from "@/components/page-hero";
import FinalCTA from "@/components/final-cta";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Specialized Industries — Real Estate, Immigration, Political & Business | CreateVerse",
  description:
    "Deep acquisition expertise across four critical sectors: real estate lead generation, immigration & visa funnels, political campaign management, and performance marketing for high-growth businesses.",
  keywords: [
    "real estate marketing agency India",
    "immigration visa leads company",
    "political campaign digital agency",
    "performance marketing for businesses",
    "specialized growth agency India",
    "B2B industry lead generation",
  ],
  alternates: {
    canonical: "https://createverse.in/industries",
  },
  openGraph: {
    title: "Specialized Industries — CreateVerse",
    description:
      "Deep expertise where growth is won. Real estate, immigration, political campaigns, and high-growth businesses.",
    url: "https://createverse.in/industries",
    siteName: "CreateVerse",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "CreateVerse Industries" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Specialized Industries — CreateVerse",
    description:
      "Deep expertise where growth is won. Real estate, immigration, political campaigns, and high-growth businesses.",
    images: ["/logo.png"],
  },
};

const industryStats = [
  { value: "4 Core", label: "Specialized Verticals", desc: "Real estate, immigration, political & growth brands" },
  { value: "₹48.6 Cr+", label: "Real Estate Value Closed", desc: "Verified commercial, residential & plotted inventory" },
  { value: "14.2M+", label: "Voter & Citizen Reach", desc: "Constituency-level digital war room operations" },
  { value: "3,850+", label: "Visa Consultations Booked", desc: "Pre-screened applicants with 84% walk-in rate" },
];

const industryMetrics: Record<string, string> = {
  "real-estate": "₹48.6 Cr+ Inventory Closed",
  "immigration": "3,850+ Consultations Booked",
  "political": "14.2M+ Verified Voter Reach",
  "businesses": "4.2x Blended Capital ROAS",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Deep expertise where <span className="text-accent">growth is won.</span></>}
        description="Acquisition works when it's shaped by how an industry actually buys and decides. These are the four arenas we know cold."
      />

      {/* 4 High-Impact Industry Benchmark Metrics */}
      <section className="bg-paper pb-10 sm:pb-16 -mt-2 sm:-mt-4">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-2.5 sm:gap-6 lg:grid-cols-4 items-stretch">
            {industryStats.map((s, idx) => (
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

      {/* 4 Core Industry Deep-Dive Cards */}
      <section className="bg-paper pb-16 sm:pb-24 lg:pb-32">
        <div className="container-site space-y-4 sm:space-y-6">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug}>
              <div className="grid gap-5 sm:gap-8 rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-4 sm:p-10 lg:p-12 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-bold tracking-wide ${i % 2 === 0 ? "bg-brand-sky text-accent" : "bg-brand-sun text-brand-orange"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {industryMetrics[ind.slug] && (
                      <span className="rounded-full bg-stone-100 border border-stone-200/90 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10.5px] sm:text-xs font-bold text-stone-700">
                        {industryMetrics[ind.slug]}
                      </span>
                    )}
                  </div>
                  <h2 className="mt-2.5 sm:mt-4 font-display text-xl sm:text-4xl font-bold tracking-tight text-ink">
                    {ind.name}
                  </h2>
                  <p className="mt-2 sm:mt-4 text-sm sm:text-lg font-bold leading-snug text-ink">{ind.headline}</p>
                  <Link
                    href={ind.cta.href}
                    prefetch={true}
                    className="group mt-3.5 sm:mt-7 inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold text-accent transition-colors hover:text-accent-dim"
                  >
                    {ind.cta.label}
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-xs sm:text-sm leading-relaxed text-ink/80 font-normal">{ind.description}</p>
                  <Stagger className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3" delayChildren={0.06}>
                    {ind.points.map((p) => (
                      <StaggerItem key={p} className="h-full">
                        <div className="h-full flex items-start gap-2 sm:gap-3 rounded-xl border border-stone-200/80 bg-[#F8FAFC] p-2.5 sm:p-4">
                          <span className={`mt-[5px] sm:mt-[7px] h-1 w-2 sm:w-3 shrink-0 rounded-full ${i % 2 === 0 ? "bg-accent" : "bg-brand-orange"}`} />
                          <p className="text-[11px] sm:text-sm leading-snug sm:leading-relaxed text-ink/90 font-medium">{p}</p>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Air-Gapped Confidentiality & Vertical Integrity Banner */}
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
                    Vertical Exclusivity &amp; Data Integrity
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-stone-400 font-normal">
                    We maintain strict non-compete agreements and never share proprietary campaign intelligence between competing operators in the same territory.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm text-stone-300 font-normal">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Territory Protection: Strictly limited client roster per geographic micro-market.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Direct CRM Ownership: All lead and applicant data flows directly to your private CRM.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Unfiltered Attribution: 100% transparent live tracking tied directly to business revenue.</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
