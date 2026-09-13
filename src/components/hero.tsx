"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Building2,
  Plane,
  Megaphone,
  TrendingUp,
  Target,
  Zap,
  Code2,
  Filter,
  Palette,
  Share2,
  UserCheck,
  PenLine,
  Users,
} from "lucide-react";
import Reveal from "@/components/reveal";
import { site } from "@/lib/site";
import { useEnquiry } from "@/context/enquiry-context";

interface PillarItem {
  num: string;
  tag: string;
  title: string;
  desc: string;
  metric: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const allAcquisitionPillars: PillarItem[] = [
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
    href: "/services/performance-marketing",
    icon: TrendingUp,
  },
  {
    num: "05",
    tag: "Search Intent",
    title: "Google Ads Management",
    desc: "High-intent Search, YouTube, and Performance Max campaigns optimized for cost per qualified conversion, not vanity clicks.",
    metric: "Top-3 Search Placement",
    href: "/services/google-ads",
    icon: Target,
  },
  {
    num: "06",
    tag: "Paid Social",
    title: "Social Media Paid Ads",
    desc: "Creative-led Meta and Instagram campaigns built to stop the scroll, qualify interest, and generate sales pipeline.",
    metric: "3.8x ROAS Multiplier",
    href: "/services/social-media-paid-ads",
    icon: Zap,
  },
  {
    num: "07",
    tag: "High-Speed Web",
    title: "Web Development",
    desc: "Sub-second, conversion-first digital experiences, landing pages, and web apps built to maximize ad ROI and organic traffic.",
    metric: "<800ms Sub-Second Load",
    href: "/services/web-development",
    icon: Code2,
  },
  {
    num: "08",
    tag: "Full-Funnel Pipeline",
    title: "Lead Generation Systems",
    desc: "Complete inbound inquiry architectures connecting paid ads, qualification logic, CRM routing, and automated follow-ups.",
    metric: "Verified Prospect Handoff",
    href: "/services/lead-generation",
    icon: Filter,
  },
  {
    num: "09",
    tag: "Brand Identity",
    title: "Creative & Brand Design",
    desc: "Bespoke visual identity, typography, performance ad creatives, brochures, and luxury brand design assets that command authority.",
    metric: "Bespoke Design Systems",
    href: "/services/creative-services",
    icon: Palette,
  },
  {
    num: "10",
    tag: "Community Growth",
    title: "Social Media Management",
    desc: "Platform-native content calendars, reels, and active community management that build loyal followings and compound brand trust.",
    metric: "Daily Content Operations",
    href: "/services/social-media-management",
    icon: Share2,
  },
  {
    num: "11",
    tag: "Profile Optimization",
    title: "Social Media Optimization",
    desc: "Strategic bio engineering, highlight funnels, and discoverability enhancements converting profile visits into leads.",
    metric: "Profile-to-Lead Conversion",
    href: "/services/social-media-optimization",
    icon: UserCheck,
  },
  {
    num: "12",
    tag: "Compounding Demand",
    title: "Content Marketing & SEO",
    desc: "Long-form editorial guides, SEO thought leadership, and email sequences that create sustainable organic customer demand.",
    metric: "Top-Ranked Search Equity",
    href: "/services/content-marketing",
    icon: PenLine,
  },
  {
    num: "13",
    tag: "Creator Networks",
    title: "Influencer Marketing",
    desc: "Vetted influencer sourcing, campaign briefing, and creator collaborations that lend third-party trust to your offers.",
    metric: "Authentic Creator Reach",
    href: "/services/influencer-marketing",
    icon: Users,
  },
];

const primaryPillars = allAcquisitionPillars.slice(0, 4);
const secondaryPillars = allAcquisitionPillars.slice(4);

export default function Hero() {
  const { openEnquiry } = useEnquiry();
  const [showAllServices, setShowAllServices] = useState(false);
  const originalScrollY = React.useRef<number | null>(null);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  const toggleServices = () => {
    if (!showAllServices) {
      originalScrollY.current = window.scrollY;
      setShowAllServices(true);
    } else {
      const targetY = sectionRef.current
        ? sectionRef.current.getBoundingClientRect().top + window.scrollY - 85
        : (originalScrollY.current ?? 0);

      const isScrolledPastTop = window.scrollY > targetY + 80;

      if (isScrolledPastTop) {
        let hasCollapsed = false;
        const doCollapse = () => {
          if (!hasCollapsed) {
            hasCollapsed = true;
            setShowAllServices(false);
          }
        };

        // Smoothly glide up to the top of the practice areas section first
        window.scrollTo({ top: targetY, behavior: "smooth" });

        const onScrollEnd = () => {
          window.removeEventListener("scrollend", onScrollEnd);
          doCollapse();
        };

        window.addEventListener("scrollend", onScrollEnd, { once: true });

        // Fallback timer once viewport glides to the top
        setTimeout(() => {
          window.removeEventListener("scrollend", onScrollEnd);
          doCollapse();
        }, 300);
      } else {
        // If user is already near the top, collapse immediately in place
        setShowAllServices(false);
      }
    }
  };

  const renderCard = (p: PillarItem) => {
    const Icon = p.icon;
    return (
      <Link
        key={p.num}
        href={p.href}
        prefetch={true}
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
          <p className="mt-2 text-xs leading-relaxed text-ink/80 font-normal">
            {p.desc}
          </p>

          {/* Number written with '-' inside the box as requested */}
          <div className="mt-3.5 flex items-center gap-1.5 text-xs font-bold text-ink/90 bg-[#F8FAFC] border border-stone-200/80 rounded-xl px-3 py-1.5">
            <span className="text-accent font-extrabold">-</span>
            <span>{p.metric}</span>
          </div>
        </div>

        {/* Bottom CTA: ENQUIRE matching the user uploaded reference photo */}
        <div className="mt-5 pt-3.5 border-t border-stone-200/90 flex items-center justify-center">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const serviceSlug = p.href.replace("/services/", "");
              openEnquiry(serviceSlug || p.title);
            }}
            className="pressable w-full py-1 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#334155] hover:text-accent transition-colors cursor-pointer"
          >
            ENQUIRE
          </button>
        </div>
      </Link>
    );
  };

  return (
    <section className="relative overflow-hidden bg-paper pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
      {/* Clean Ambient Background with Sitewide Uniform Glows */}
      <div className="dot-texture absolute inset-0 opacity-50 pointer-events-none" />
      <div className="grid-texture-light absolute inset-0 opacity-40 pointer-events-none" />
      <div className="absolute -left-28 top-16 h-[450px] w-[450px] rounded-full bg-brand-sun/70 blur-[100px] pointer-events-none" />
      <div className="absolute -right-28 top-1/3 h-[500px] w-[500px] rounded-full bg-brand-sky/60 blur-[120px] pointer-events-none" />
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
                className="pressable group inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink bg-ink px-9 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-md transition-all duration-300 hover:bg-accent hover:border-accent hover:shadow-lg"
              >
                <span>Enquire Now</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Specialized Acquisition Practice Areas */}
        <Reveal delay={0.4}>
          <div ref={sectionRef} className="mt-8 sm:mt-10">
            <div className="mb-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-ink/75">
                Specialized Acquisition Practice Areas
              </p>
            </div>

            {/* Primary 4 Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {primaryPillars.map((p) => renderCard(p))}
            </div>

            {/* In-place dropdown animation with identical card boxes */}
            <AnimatePresence>
              {showAllServices && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto", transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] } }}
                  exit={{ opacity: 0, height: 0, transition: { duration: 0.26, ease: [0.16, 1, 0.3, 1] } }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-4">
                    {secondaryPillars.map((p) => renderCard(p))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Button shifts downwards when dropdown expands */}
            <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center">
              <button
                type="button"
                onClick={toggleServices}
                className="pressable group inline-flex items-center gap-2 rounded-full border border-black/[0.14] bg-white px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-ink shadow-card transition-all duration-300 hover:border-accent hover:text-accent cursor-pointer"
              >
                <span>{showAllServices ? "Collapse Services" : "Browse All 13+ Services"}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    showAllServices ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
