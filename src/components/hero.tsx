"use client";

import Link from "next/link";
import { ArrowRight, ArrowDown, Building2, Plane, Megaphone, TrendingUp, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/reveal";
import { site } from "@/lib/site";
import { useEnquiry } from "@/context/enquiry-context";

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
    tag: "Voter Mobilization",
    title: "Political Management",
    desc: "24/7 digital war room operations — constituency-level voter outreach, rapid response desk, and narrative building.",
    metric: "14.2M+ Targeted Reach",
    href: "/services/political-management",
    icon: Megaphone,
  },
  {
    num: "04",
    tag: "High-ROI Scaling",
    title: "Performance Marketing",
    desc: "Full-funnel Google and Meta acquisition architecture designed around one North Star: verified revenue vs. capital deployed.",
    metric: "4.2x Blended ROAS Delivered",
    href: "/services/lead-generation",
    icon: TrendingUp,
  },
];

export default function Hero() {
  const { openEnquiry } = useEnquiry();

  return (
    <section className="relative overflow-hidden bg-paper pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
      {/* Clean Blueish Ambient Background */}
      <div className="dot-texture absolute inset-0 opacity-50 pointer-events-none" />
      <div className="grid-texture-light absolute inset-0 opacity-40 pointer-events-none" />
      <div className="absolute -left-28 top-1/4 h-[450px] w-[450px] rounded-full bg-accent/12 blur-[100px] pointer-events-none" />
      <div className="absolute -right-28 top-1/3 h-[500px] w-[500px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" />
      <div className="absolute left-1/2 -top-28 -translate-x-1/2 h-[500px] w-[850px] rounded-full bg-gradient-to-b from-brand-sky/60 via-brand-sky/20 to-transparent blur-3xl pointer-events-none" />

      <div className="container-site relative">
        {/* Main Editorial Agency Headline */}
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.12] bg-white px-3.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-ink shadow-xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>CreateVerse • Digital Acquisition Partner</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-balance mt-3 sm:mt-4 font-display text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.08] tracking-tightest text-ink">
              Turn Digital Attention into{" "}
              <span className="text-accent">Real Revenue.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm leading-relaxed text-ink/85 sm:text-lg font-normal">
              We design and execute bespoke acquisition systems for luxury real estate developers,
              visa consultancies, political campaigns and high-growth brands — delivering verified
              inquiries and predictable commercial pipeline.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-6 flex items-center justify-center">
              {/* Grand Enquire Button */}
              <button
                onClick={() => openEnquiry()}
                className="group inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink bg-ink px-9 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-md transition-all duration-300 hover:bg-accent hover:border-accent hover:shadow-lg"
              >
                <span>Enquire Now</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* 4 Core Acquisition Pillars - Brought above the fold */}
        <Reveal delay={0.4}>
          <div className="mt-8 sm:mt-10">
            <div className="mb-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-ink/75">
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
                    className="group relative flex flex-col justify-between rounded-3xl border border-black/[0.12] bg-white p-6 sm:p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
                          {p.num}
                        </span>
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#F1F5F9] text-ink transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                          <Icon className="h-4 w-4" />
                        </span>
                      </div>

                      <span className="mt-4 block text-[10px] font-bold uppercase tracking-wider text-ink/70">
                        {p.tag}
                      </span>
                      <h3 className="mt-1 font-display text-lg font-bold text-ink group-hover:text-accent transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-ink/80">
                        {p.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-emerald-700">
                        {p.metric}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-ink/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Placed at the bottom as requested: smooth scroll to all services below with slight lower landing */}
            <div className="mt-8 sm:mt-10 flex items-center justify-center">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("services");
                  if (el) {
                    const navOffset = 80;
                    const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
                    // Landing slightly lower into the services cards
                    const targetPosition = elementTop - navOffset + 140;
                    window.scrollTo({ top: targetPosition, behavior: "smooth" });
                  }
                }}
                className="group inline-flex items-center gap-2 rounded-full border border-black/[0.14] bg-white px-6 sm:px-7 py-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-ink shadow-card transition-all duration-300 hover:border-accent hover:text-accent active:scale-[0.99]"
              >
                <span>Browse All 13+ Services</span>
                <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
