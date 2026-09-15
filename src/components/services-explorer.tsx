"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    slug: "paid-social",
    name: "Paid Social Advertising",
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
    <section className="bg-paper py-14 sm:py-20 lg:py-28 scroll-mt-20 border-t border-stone-200" id="services">
      <div className="container-site">
        <div className="max-w-3xl pb-6 sm:pb-10 border-b border-stone-200">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Acquisition Architecture &amp; Core Practices
          </p>
          <h2 className="text-balance mt-2.5 sm:mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
            Everything growth needs, under one roof.
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-base leading-relaxed text-ink/80 font-normal">
            Explore our 16 specialized growth practices. Click any practice to view deliverables, acquisition process and past case results.
          </p>
        </div>

        {/* Responsive Capsule Grid: 2 Columns on Mobile, 4 Columns on Desktop */}
        <div className="mt-6 sm:mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3.5">
          {servicesList.map((item) => (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              prefetch={true}
              className="capsnpills-pill group flex items-center justify-center rounded-full px-3 py-2.5 sm:px-5 sm:py-3 text-center text-[11px] sm:text-sm font-semibold select-none cursor-pointer"
            >
              <span className="truncate tracking-tight sm:hidden">
                {item.shortName}
              </span>
              <span className="truncate tracking-tight hidden sm:inline">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom CTA / Scope Browser with Enquire Now button */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 rounded-2xl border border-stone-200 bg-white/70 backdrop-blur-sm p-4 sm:px-6 sm:py-4 shadow-sm">
          <p className="text-xs sm:text-sm font-medium text-stone-600 text-center sm:text-left">
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
