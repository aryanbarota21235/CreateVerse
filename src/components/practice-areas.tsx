"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Collapse from "@/components/collapse";
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
  MessagesSquare,
  Newspaper,
  PenTool,
} from "lucide-react";
import Reveal from "@/components/reveal";
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
  {
    num: "14",
    tag: "Content & Community",
    title: "Social Media Marketing",
    desc: "Strategic content, monthly calendars, and community management that build brands people remember and trust.",
    metric: "Audience Trust That Compounds",
    href: "/services/social-media-marketing",
    icon: MessagesSquare,
  },
  {
    num: "15",
    tag: "Premium Publishers",
    title: "Native Advertising",
    desc: "Native placements on premium publishers and content networks that earn attention without ad fatigue.",
    metric: "Attention Without Ad Blindness",
    href: "/services/native-advertising",
    icon: Newspaper,
  },
  {
    num: "16",
    tag: "Visual Credibility",
    title: "Graphic Design",
    desc: "Brand identity, campaign creatives, brochures, and social design packs — produced in-house for a premium look everywhere.",
    metric: "Consistent Visuals Across Channels",
    href: "/services/graphic-design",
    icon: PenTool,
  },
];

const primaryPillars = allAcquisitionPillars.slice(0, 4);
const secondaryPillars = allAcquisitionPillars.slice(4);

/** The 16-service practice-area panel that used to sit inside the homepage hero. */
export default function PracticeAreas() {
  const { openEnquiry } = useEnquiry();
  const [showAllServices, setShowAllServices] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        return sessionStorage.getItem("cv_services_expanded") === "true";
      } catch {}
    }
    return false;
  });
  const originalScrollY = React.useRef<number | null>(null);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (showAllServices) {
        sessionStorage.setItem("cv_services_expanded", "true");
      } else {
        sessionStorage.removeItem("cv_services_expanded");
      }
    } catch {}
  }, [showAllServices]);

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

  // Cells share one panel and are separated by hairlines instead of each being its own box
  const cellDividers =
    "border-stone-200/70 border-l max-lg:[&:nth-child(odd)]:border-l-0 lg:[&:nth-child(4n+1)]:border-l-0 max-lg:[&:nth-child(n+3)]:border-t lg:[&:nth-child(n+5)]:border-t";

  const renderCard = (p: PillarItem) => {
    const Icon = p.icon;
    return (
      <Link
        key={p.num}
        href={p.href}
        prefetch={true}
        className={`group relative flex flex-col justify-between p-3.5 min-[390px]:p-5 sm:p-7 lg:p-8 transition-colors duration-300 sm:hover:bg-brand-sky/40 active:bg-brand-sky/40 ${cellDividers}`}
      >
        <div>
          <div className="flex items-start justify-between">
            <span className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-sky to-white text-accent ring-1 ring-accent/10 transition-all duration-300 sm:group-hover:from-accent sm:group-hover:to-accent sm:group-hover:text-white">
              <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <span className="font-display text-xs sm:text-sm font-semibold tabular-nums text-ink/30">
              {p.num}
            </span>
          </div>

          <span className="mt-4 sm:mt-6 block text-[9.5px] min-[390px]:text-[10px] font-bold uppercase tracking-[0.08em] sm:tracking-[0.14em] text-ink/55 truncate">
            {p.tag}
          </span>
          <h3 className="mt-1 font-display text-[15px] min-[390px]:text-base sm:text-xl font-bold text-ink leading-tight sm:leading-snug tracking-tight transition-colors sm:group-hover:text-accent line-clamp-2">
            {p.title}
          </h3>
          <p className="hidden sm:block mt-2 text-[13px] leading-relaxed text-ink/70 font-normal">
            {p.desc}
          </p>

          {/* Metric */}
          <div className="mt-2.5 sm:mt-4 flex items-start gap-2 text-[10.5px] min-[390px]:text-[11px] sm:text-xs font-semibold leading-snug text-ink/80">
            <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
            <span>{p.metric}</span>
          </div>
        </div>

        {/* Bottom CTA: ENQUIRE */}
        <div className="mt-3.5 sm:mt-6">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const serviceSlug = p.href.replace("/services/", "");
              openEnquiry(serviceSlug || p.title);
            }}
            className="pressable inline-flex items-center gap-1.5 text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-accent cursor-pointer"
          >
            <span>Enquire</span>
            <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-300 sm:group-hover:translate-x-1" />
          </button>
        </div>
      </Link>
    );
  };

  return (
    <section className="relative bg-paper pb-12 sm:pb-16 lg:pb-20">
      <div className="container-site">
        <Reveal>
          <div ref={sectionRef}>
            <div className="mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4">
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ink/60 shrink-0">
                Specialized Acquisition Practice Areas
              </p>
              <span className="h-px grow bg-gradient-to-r from-ink/15 to-transparent" />
            </div>

            {/* One soft panel, hairline-divided cells */}
            <div className="overflow-hidden rounded-[24px] sm:rounded-[36px] bg-white/90 shadow-soft ring-1 ring-black/[0.04]">
              {/* Primary 4 practice areas */}
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {primaryPillars.map((p) => renderCard(p))}
              </div>

              {/* In-place dropdown animation with identical cells */}
              <Collapse open={showAllServices}>
                <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-stone-200/70">
                  {secondaryPillars.map((p) => renderCard(p))}
                </div>
              </Collapse>
            </div>

            {/* Button shifts downwards when dropdown expands */}
            <div className="mt-6 sm:mt-10 flex flex-col items-center justify-center">
              <button
                type="button"
                onClick={toggleServices}
                className="pressable group inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 sm:px-7 sm:py-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-ink shadow-soft ring-1 ring-black/[0.06] transition-all duration-150 hover:-translate-y-0.5 hover:ring-accent hover:text-accent cursor-pointer"
              >
                <span>{showAllServices ? "Collapse Services" : "Browse All 16 Services"}</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 ${
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
