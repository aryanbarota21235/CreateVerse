"use client";

import Link from "next/link";
import { ArrowUpRight, Building2, Plane, Megaphone, Target, Zap, Code2, Filter, Share2, PenLine, Palette, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { useEnquiry } from "@/context/enquiry-context";

const servicesList = [
  {
    category: "Lead Acquisition",
    items: [
      {
        slug: "real-estate-lead-generation",
        name: "Real Estate Lead Generation",
        tagline: "Qualified buyers, investors and site visits for developers and brokerages.",
        deliverable: "High-ticket buyer funnels with CRM handoff",
        icon: Building2,
      },
      {
        slug: "immigration-lead-generation",
        name: "Immigration & Visa Marketing",
        tagline: "Predictable, pre-screened consultation pipelines for visa consultancies.",
        deliverable: "Automated applicant pre-screening & calendar booking",
        icon: Plane,
      },
      {
        slug: "lead-generation",
        name: "B2B & Commercial Lead Gen",
        tagline: "Full-funnel systems converting ad spend into qualified sales opportunities.",
        deliverable: "Targeted outbound & inbound acquisition architecture",
        icon: Filter,
      },
    ],
  },
  {
    category: "Paid Advertising & Media",
    items: [
      {
        slug: "performance-marketing",
        name: "Performance Marketing",
        tagline: "Google Search and paid social managed to one standard: measurable commercial pipeline.",
        deliverable: "Omnichannel scaling & CAC optimization",
        icon: Target,
      },
      {
        slug: "google-ads",
        name: "Google Ads Management",
        tagline: "Capturing high-intent buyers at the precise moment of commercial search.",
        deliverable: "Search, Display, Performance Max & YouTube campaigns",
        icon: Zap,
      },
      {
        slug: "paid-social",
        name: "Paid Social Advertising",
        tagline: "High-impact Meta & LinkedIn campaigns designed for qualified lead generation.",
        deliverable: "Targeted video narratives & conversion ad funnels",
        icon: Share2,
      },
      {
        slug: "political-management",
        name: "Political Campaign Management",
        tagline: "24/7 digital war room operations — constituency narrative, outreach and rapid response.",
        deliverable: "Voter mobilization & sentiment monitoring at scale",
        icon: Megaphone,
      },
    ],
  },
  {
    category: "Technology & Creative",
    items: [
      {
        slug: "web-development",
        name: "Conversion Web Development",
        tagline: "Blazing fast, conversion-optimized landing pages and full websites built on modern stacks.",
        deliverable: "High-converting UX architecture & CRM integrations",
        icon: Code2,
      },
      {
        slug: "creative-services",
        name: "Creative & Brand Design",
        tagline: "Visual identity, ad creatives and brand collateral that establish category leadership.",
        deliverable: "Direct-response ad creative production & branding",
        icon: Palette,
      },
      {
        slug: "social-media-management",
        name: "Social Media & Content Ops",
        tagline: "Daily narrative building and content engines that build organic authority.",
        deliverable: "End-to-end content creation, reels & community growth",
        icon: PenLine,
      },
    ],
  },
];

export default function ServicesExplorer() {
  const { openEnquiry } = useEnquiry();

  return (
    <section className="bg-paper py-24 lg:py-32 scroll-mt-20 border-t border-stone-200" id="services">
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-stone-200">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
              Acquisition Architecture &amp; Core Practices
            </p>
            <h2 className="text-balance mt-3 max-w-2xl font-display text-4xl font-bold tracking-tightest text-ink sm:text-5xl">
              Everything growth needs, under one roof.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/80 font-normal">
              We design, build and manage the entire acquisition engine — combining strategy, paid media, direct-response creative and modern technology.
            </p>
          </div>

          <button
            onClick={() => openEnquiry()}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-md transition-all hover:bg-accent hover:shadow-lg shrink-0"
          >
            <span>Enquire For Services</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Grouped Services Showcase */}
        <div className="mt-14 space-y-16">
          {servicesList.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <h3 className="text-xs font-extrabold uppercase tracking-[0.22em] text-ink/75">
                  {group.category}
                </h3>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.slug}
                      href={`/services/${item.slug}`}
                      className="group flex flex-col justify-between rounded-3xl border border-black/[0.12] bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift cursor-pointer block"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-black/[0.08] text-ink shadow-xs transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:border-accent">
                            <Icon className="h-5 w-5" />
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              openEnquiry(item.name);
                            }}
                            className="relative z-10 text-[11px] font-bold uppercase tracking-wider text-ink/70 hover:text-accent transition-colors"
                          >
                            Enquire
                          </button>
                        </div>

                        <h4 className="mt-6 font-display text-xl font-bold text-ink group-hover:text-accent transition-colors">
                          {item.name}
                        </h4>
                        <p className="mt-2 text-xs leading-relaxed text-ink/80 font-normal">
                          {item.tagline}
                        </p>
                      </div>

                      <div className="mt-8 pt-5 border-t border-stone-200 flex items-center justify-between">
                        <span className="text-xs font-bold text-accent truncate pr-2">
                          {item.deliverable}
                        </span>
                        <span
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white border border-black/[0.08] text-ink/60 shadow-xs transition-all group-hover:bg-accent group-hover:text-white group-hover:border-accent"
                        >
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
