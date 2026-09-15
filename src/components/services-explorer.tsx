"use client";

import Link from "next/link";
import {
  Building2,
  Plane,
  Megaphone,
  Zap,
  Target,
  Share2,
  Filter,
  Code2,
  Palette,
  PenLine,
  UserCheck,
  Users,
  Newspaper,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import { useEnquiry } from "@/context/enquiry-context";

const servicesList = [
  {
    slug: "real-estate-lead-generation",
    name: "Real Estate Lead Generation",
    icon: Building2,
  },
  {
    slug: "immigration-lead-generation",
    name: "Immigration & Visa Marketing",
    icon: Plane,
  },
  {
    slug: "political-management",
    name: "Political Campaign Management",
    icon: Megaphone,
  },
  {
    slug: "google-ads",
    name: "Google Ads Management",
    icon: Zap,
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
    icon: Target,
  },
  {
    slug: "paid-social",
    name: "Paid Social Advertising",
    icon: Share2,
  },
  {
    slug: "lead-generation",
    name: "B2B & Commercial Lead Gen",
    icon: Filter,
  },
  {
    slug: "web-development",
    name: "Conversion Web Development",
    icon: Code2,
  },
  {
    slug: "creative-services",
    name: "Creative & Brand Design",
    icon: Palette,
  },
  {
    slug: "social-media-management",
    name: "Social Media & Content Ops",
    icon: PenLine,
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    icon: Share2,
  },
  {
    slug: "social-media-optimization",
    name: "Social Media Optimization (SMO)",
    icon: UserCheck,
  },
  {
    slug: "content-marketing",
    name: "Content Marketing",
    icon: PenLine,
  },
  {
    slug: "influencer-marketing",
    name: "Influencer Marketing",
    icon: Users,
  },
  {
    slug: "native-advertising",
    name: "Native Advertising",
    icon: Newspaper,
  },
  {
    slug: "graphic-design",
    name: "Graphic Design & Branding",
    icon: Palette,
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

        {/* 4-Column Slim Tiles Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {servicesList.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                prefetch={true}
                className="group relative flex items-center justify-between gap-3 rounded-xl border border-stone-200/90 bg-white px-4 py-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] active:scale-[0.98] cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-stone-100/90 text-ink/75 transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-ink group-hover:text-accent transition-colors duration-200 leading-snug line-clamp-2">
                    {item.name}
                  </span>
                </div>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-stone-400 transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
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
