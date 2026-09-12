"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import Reveal from "@/components/reveal";
import { priorityServices } from "@/lib/services";
import { iconMap } from "@/components/services-grid";
import { site } from "@/lib/site";
import { useEnquiry } from "@/context/enquiry-context";

const heroPillars = [
  { label: "Real Estate Acquisition", desc: "Site-visit pipelines & HNI buyer funnels for high-ticket projects" },
  { label: "Immigration & Visa", desc: "Pre-screened student & PR consultation engines across intake cycles" },
  { label: "Political War Room", desc: "Constituency narrative, video operations & voter mobilization" },
  { label: "Performance Marketing", desc: "Omnichannel Google & Meta acquisition scaled to revenue" },
];

export default function Hero() {
  const { openEnquiry } = useEnquiry();

  return (
    <section className="relative overflow-hidden bg-paper pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
      {/* Ambient background glow */}
      <div className="dot-texture absolute inset-0 opacity-60" />
      <div className="absolute left-1/2 -top-40 -translate-x-1/2 h-[560px] w-[800px] rounded-full bg-gradient-to-b from-brand-sky/60 via-brand-sun/40 to-transparent blur-3xl pointer-events-none" />

      <div className="container-site relative">
        {/* Centered Grand Editorial Content */}
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-paper-line bg-white/90 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-ink/75 shadow-xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>CreateVerse • Digital Acquisition Partner</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-balance mt-8 font-display text-5xl font-bold leading-[1.04] tracking-tightest text-ink sm:text-6xl md:text-7xl lg:text-[76px]">
              Turn Digital Attention into{" "}
              <span className="text-brand-gradient">Real Revenue.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/65 sm:text-lg lg:text-xl">
              We design and execute bespoke acquisition systems for luxury real estate developers,
              visa consultancies, political campaigns and high-growth brands — engineered for verified
              inquiries and predictable commercial pipeline.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {/* Grand Enquire Button */}
              <button
                onClick={() => openEnquiry()}
                className="group inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink bg-ink px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-md transition-all duration-300 hover:bg-transparent hover:text-ink sm:text-xs"
              >
                <span>Enquire Now</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* WhatsApp Direct Action */}
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800 shadow-xs transition-all duration-300 hover:bg-emerald-50 hover:border-emerald-500/60 sm:text-xs"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                <span>WhatsApp ({site.phone})</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Industry Pillars Grid - Refined Luxury Aesthetic */}
        <Reveal delay={0.4}>
          <div className="mt-16 sm:mt-20 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {heroPillars.map((p, i) => (
              <div
                key={p.label}
                className="group relative rounded-2xl border border-paper-line bg-white/85 p-5 shadow-xs backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-accent/40"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                    0{i + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors" />
                </div>
                <h3 className="mt-3 font-display text-base font-bold text-ink">
                  {p.label}
                </h3>
                <p className="mt-1 text-xs text-ink/55 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Core Capabilities Navigation */}
        <Reveal delay={0.5}>
          <div className="mt-14 sm:mt-16">
            <div className="flex items-center justify-between border-b border-paper-line pb-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-ink/45">
                Acquisition Capabilities &amp; Services
              </p>
              <Link href="/services" className="text-xs font-bold uppercase tracking-[0.16em] text-accent hover:underline">
                View All Services →
              </Link>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:gap-3">
              {priorityServices.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-2.5 rounded-2xl border border-paper-line bg-white/90 p-3 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-paper text-ink transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                      {Icon && <Icon className="h-4 w-4" />}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[12px] font-semibold leading-tight text-ink group-hover:text-accent">
                        {s.shortName ?? s.name}
                      </span>
                      <span className="block truncate text-[10px] uppercase tracking-wider text-ink/40">
                        {s.category}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
