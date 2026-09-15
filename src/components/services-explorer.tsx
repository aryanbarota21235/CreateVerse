"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
  return (
    <section className="bg-paper py-20 lg:py-28 scroll-mt-20 border-t border-stone-200" id="services">
      <div className="container-site">
        <div className="max-w-3xl pb-10 border-b border-stone-200">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
            Acquisition Architecture &amp; Core Practices
          </p>
          <h2 className="text-balance mt-3 font-display text-4xl font-bold tracking-tightest text-ink sm:text-5xl">
            Everything growth needs, under one roof.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink/80 font-normal">
            Explore our 16 specialized growth practices. Click any practice to view deliverables, acquisition process and past case results.
          </p>
        </div>

        {/* 4-Column Balanced Capsule Pill Tiles Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-3.5">
          {servicesList.map((item) => (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              prefetch={true}
              className="group flex items-center justify-center rounded-full border border-black/[0.09] bg-white px-5 py-3 text-center text-xs sm:text-sm font-semibold text-ink shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-lift active:translate-y-0.5 active:scale-[0.96] cursor-pointer select-none"
            >
              <span className="truncate tracking-tight transition-colors">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom CTA / Scope Browser */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-stone-200 bg-white/70 backdrop-blur-sm px-6 py-4 shadow-sm">
          <p className="text-xs sm:text-sm font-medium text-stone-600 text-center sm:text-left">
            Need a custom acquisition engine combining multiple practices?
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-ink hover:text-accent transition-colors shrink-0"
          >
            <span>Browse Full Practice Scopes</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
