"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const servicesList = [
  {
    slug: "real-estate-lead-generation",
    name: "Real Estate Lead Generation",
    shortName: "Real Estate Leads",
  },
  {
    slug: "immigration-lead-generation",
    name: "Immigration & Visa Marketing",
    shortName: "Immigration Leads",
  },
  {
    slug: "political-management",
    name: "Political Campaign Management",
    shortName: "Political Campaigns",
  },
  {
    slug: "google-ads",
    name: "Google Ads Management",
    shortName: "Google Ads",
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
    shortName: "Performance Mktg",
  },
  {
    slug: "social-media-paid-ads",
    name: "Social Media Paid Ads",
    shortName: "Paid Social Ads",
  },
  {
    slug: "lead-generation",
    name: "B2B & Commercial Lead Gen",
    shortName: "B2B Lead Gen",
  },
  {
    slug: "web-development",
    name: "Conversion Web Development",
    shortName: "Web Development",
  },
  {
    slug: "creative-services",
    name: "Creative & Brand Design",
    shortName: "Creative & Brand",
  },
  {
    slug: "social-media-management",
    name: "Social Media & Content Ops",
    shortName: "Social Media Ops",
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    shortName: "Social Marketing",
  },
  {
    slug: "social-media-optimization",
    name: "Social Media Optimization (SMO)",
    shortName: "SMO & Profiles",
  },
  {
    slug: "content-marketing",
    name: "Content Marketing",
    shortName: "Content Marketing",
  },
  {
    slug: "influencer-marketing",
    name: "Influencer Marketing",
    shortName: "Influencer Marketing",
  },
  {
    slug: "native-advertising",
    name: "Native Advertising",
    shortName: "Native Advertising",
  },
  {
    slug: "graphic-design",
    name: "Graphic Design & Branding",
    shortName: "Graphic Design",
  },
];

import { useEnquiry } from "@/context/enquiry-context";

export default function ServicesExplorer() {
  const { openEnquiry } = useEnquiry();

  return (
    <section className="bg-paper py-14 sm:py-20 lg:py-28 scroll-mt-20" id="services">
      <div className="container-site">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent">
            <span className="hidden sm:block h-px w-6 bg-current opacity-60" />
            Acquisition Architecture &amp; Core Practices
          </p>
          <h2 className="text-balance mt-2.5 sm:mt-3 font-display text-[28px] leading-[1.1] sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
            Everything growth needs, <span className="text-accent">under one roof.</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-[13px] sm:text-base leading-relaxed text-ink/70 font-normal">
            Explore our 16 specialized growth practices. Click any practice to view deliverables, acquisition process and past case results.
          </p>
        </div>

        {/* Editorial index: hairline rows instead of capsules */}
        <div className="mt-6 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-x-5 sm:gap-x-8 lg:gap-x-10 border-t border-ink/10">
          {servicesList.map((item, i) => (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              prefetch={true}
              className="group flex items-center justify-between gap-2 border-b border-ink/10 py-3 sm:py-4 text-[12px] sm:text-sm xl:text-[15px] font-semibold text-ink/85 transition-colors duration-200 hover:border-accent hover:text-accent select-none cursor-pointer"
            >
              <span className="flex min-w-0 items-baseline gap-2 sm:gap-3">
                <span className="font-display text-[10px] sm:text-xs font-semibold tabular-nums text-ink/30 transition-colors group-hover:text-accent/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="truncate tracking-tight sm:hidden">{item.shortName}</span>
                <span className="truncate tracking-tight hidden sm:inline">{item.name}</span>
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-ink/25 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </Link>
          ))}
        </div>

        {/* Bottom CTA / Scope Browser with Enquire Now button */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-[13px] sm:text-base font-medium text-ink/70 text-center sm:text-left">
            Need a custom acquisition engine combining multiple practices?
          </p>
          <div className="flex items-center gap-2 sm:gap-2.5 w-full sm:w-auto shrink-0">
            <button
              type="button"
              onClick={() => openEnquiry("Custom Acquisition Engine")}
              className="pressable flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-3.5 sm:px-5 py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white hover:bg-accent-dim shadow-sm transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Enquire Now</span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0" />
            </button>
            <Link
              href="/services"
              className="pressable flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-full border border-stone-300 bg-white sm:bg-transparent px-3 sm:px-4 py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-ink hover:text-accent hover:border-accent transition-colors shrink-0 whitespace-nowrap"
            >
              <span className="hidden sm:inline whitespace-nowrap">Browse Scopes</span>
              <span className="sm:hidden whitespace-nowrap">All Scopes</span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
