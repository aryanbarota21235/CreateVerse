"use client";

import Link from "next/link";
import { ArrowRight, ArrowDown, Building2, Plane, Megaphone, TrendingUp, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/reveal";
import { site } from "@/lib/site";
import { useEnquiry } from "@/context/enquiry-context";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

const acquisitionPillars = [
  {
    num: "01",
    tag: "High-Ticket Property",
    title: "Real Estate Acquisition",
    desc: "End-to-end buyer funnels, geo-targeted ads for site visits, and instant WhatsApp qualification for developers and brokers.",
    metric: "₹48.6 Cr+ Inventory Closed",
    href: "/services/real-estate-lead-generation",
    icon: Building2,
  },
  {
    num: "02",
    tag: "Intake Pipelines",
    title: "Immigration & Visa Funnels",
    desc: "Pre-screened applicant funnels for study visa, PR and visitor visa consultancies — filtering serious applicants before counselor calls.",
    metric: "3,850+ Consultations Booked",
    href: "/services/immigration-lead-generation",
    icon: Plane,
  },
  {
    num: "03",
    tag: "War Room Operations",
    title: "Political Campaign Ops",
    desc: "Constituency narrative strategy, rapid video content operations, and grassroots voter mobilization executed at regional scale.",
    metric: "14.2M+ Targeted Voter Reach",
    href: "/services/political-management",
    icon: Megaphone,
  },
  {
    num: "04",
    tag: "Full-Funnel Scale",
    title: "Performance Marketing",
    desc: "Omnichannel Google Search & Meta paid advertising paired with conversion-first landing pages built to deliver measurable commercial pipeline.",
    metric: "4.2x Average Account ROAS",
    href: "/services/lead-generation",
    icon: TrendingUp,
  },
];

export default function Hero() {
  const { openEnquiry } = useEnquiry();

  return (
    <section className="relative overflow-hidden bg-paper pt-36 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28">
      {/* Ambient background glow */}
      <div className="dot-texture absolute inset-0 opacity-50" />
      <div className="absolute left-1/2 -top-44 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gradient-to-b from-brand-sky/60 via-brand-sun/30 to-transparent blur-3xl pointer-events-none" />

      <div className="container-site relative">
        {/* Main Editorial Agency Headline */}
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-paper-line bg-white/95 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-ink/75 shadow-xs backdrop-blur-md">
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
              visa consultancies, political campaigns and high-growth brands — delivering verified
              inquiries and predictable commercial pipeline.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {/* Grand Enquire Button */}
              <button
                onClick={() => openEnquiry()}
                className="group inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink bg-ink px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-md transition-all duration-300 hover:bg-accent hover:border-accent hover:shadow-lg sm:text-xs"
              >
                <span>Enquire Now</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* WhatsApp Direct Action */}
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-paper-line bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-ink shadow-xs transition-all duration-300 hover:border-accent hover:text-accent sm:text-xs"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                <span>WhatsApp ({site.phone})</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* 4 Core Acquisition Pillars */}
        <Reveal delay={0.4}>
          <div className="mt-16 sm:mt-20">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink/40">
                Specialized Acquisition Practice Areas
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {acquisitionPillars.map((p) => {
                const Icon = p.icon;
                return (
                  <Link
                    key={p.num}
                    href={p.href}
                    className="group relative flex flex-col justify-between rounded-3xl border border-paper-line bg-white/90 p-6 sm:p-7 shadow-xs backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white hover:shadow-lift"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
                          {p.num}
                        </span>
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-paper text-ink/60 transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                          <Icon className="h-4 w-4" />
                        </span>
                      </div>

                      <span className="mt-4 block text-[10px] font-semibold uppercase tracking-wider text-ink/40">
                        {p.tag}
                      </span>
                      <h3 className="mt-1 font-display text-lg font-bold text-ink group-hover:text-accent transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-ink/60">
                        {p.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-paper-line/70 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-emerald-700">
                        {p.metric}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-ink/30 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Placed at the bottom as requested: smooth scroll to all services below */}
            <div className="mt-10 flex items-center justify-center">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-full border border-paper-line bg-white px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-ink shadow-xs transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-card"
              >
                <span>Browse All 13+ Services</span>
                <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
