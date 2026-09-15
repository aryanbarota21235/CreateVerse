"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEnquiry } from "@/context/enquiry-context";

const servicesList = [
  {
    slug: "real-estate-lead-generation",
    name: "Real Estate Lead Generation",
  },
  {
    slug: "immigration-lead-generation",
    name: "Immigration & Visa Marketing",
  },
  {
    slug: "political-management",
    name: "Political Campaign Management",
  },
  {
    slug: "google-ads",
    name: "Google Ads Management",
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
  },
  {
    slug: "paid-social",
    name: "Paid Social Advertising",
  },
  {
    slug: "lead-generation",
    name: "B2B & Commercial Lead Gen",
  },
  {
    slug: "web-development",
    name: "Conversion Web Development",
  },
  {
    slug: "creative-services",
    name: "Creative & Brand Design",
  },
  {
    slug: "social-media-management",
    name: "Social Media & Content Ops",
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
  },
  {
    slug: "social-media-optimization",
    name: "Social Media Optimization (SMO)",
  },
  {
    slug: "content-marketing",
    name: "Content Marketing",
  },
  {
    slug: "influencer-marketing",
    name: "Influencer Marketing",
  },
  {
    slug: "native-advertising",
    name: "Native Advertising",
  },
  {
    slug: "graphic-design",
    name: "Graphic Design & Branding",
  },
];

export default function ServicesExplorer() {
  const { openEnquiry } = useEnquiry();

  return (
    <section className="bg-paper py-20 lg:py-28 scroll-mt-20 border-t border-stone-200" id="services">
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-stone-200">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
              Acquisition Architecture &amp; Core Practices
            </p>
            <h2 className="text-balance mt-3 max-w-2xl font-display text-4xl font-bold tracking-tightest text-ink sm:text-5xl">
              Everything growth needs, under one roof.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/80 font-normal">
              Explore our 16 specialized growth practices. Click any practice to view deliverables, acquisition process and past case results.
            </p>
          </div>

          <button
            onClick={() => openEnquiry()}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-md transition-all hover:bg-accent hover:shadow-lg shrink-0 active:scale-95"
          >
            <span>Enquire For Services</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* 4-Column Capsule Pill Tiles Grid (Caps & Pills style) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {servicesList.map((item) => (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              prefetch={true}
              className="group flex items-center justify-center rounded-full border border-stone-200/90 bg-white px-5 py-3 sm:py-3.5 text-center text-xs sm:text-sm font-semibold text-ink shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_8px_22px_rgba(0,0,0,0.09)] active:translate-y-0.5 active:scale-[0.95] cursor-pointer select-none"
            >
              <span className="truncate tracking-tight transition-colors">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom CTA / Scope Browser */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-stone-200 bg-white/70 backdrop-blur-sm px-6 py-4 shadow-sm">
          <p className="text-xs font-medium text-stone-600 text-center sm:text-left">
            Need a custom acquisition engine combining multiple practices?
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink hover:text-accent transition-colors"
            >
              <span>Browse Full Scopes</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <button
              onClick={() => openEnquiry()}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent hover:underline"
            >
              <span>Request Custom Scope</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
