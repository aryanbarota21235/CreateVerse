"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Code2,
  Filter,
  Megaphone,
  Newspaper,
  Palette,
  PenLine,
  Plane,
  Share2,
  Target,
  UserCheck,
  Users,
  Zap,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/section-heading";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";
import { services, type Service } from "@/lib/services";
import { useEnquiry } from "@/context/enquiry-context";

export const iconMap: Record<string, LucideIcon> = {
  Building2,
  Plane,
  Megaphone,
  Target,
  Zap,
  Code2,
  Filter,
  Share2,
  UserCheck,
  PenLine,
  Users,
  Newspaper,
  Palette,
};

type CategoryFilter = "all" | Service["category"];

const categories: { label: string; value: CategoryFilter }[] = [
  { label: "All Practices", value: "all" },
  { label: "Lead Acquisition", value: "Acquisition" },
  { label: "Paid Advertising", value: "Advertising" },
  { label: "Political Campaigns", value: "Campaigns" },
  { label: "Technology & CRO", value: "Technology" },
  { label: "Creative & Content", value: "Creative" },
];

export default function ServicesGrid({ showHeading = true }: { showHeading?: boolean }) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const { openEnquiry } = useEnquiry();

  const filteredServices = useMemo(() => {
    if (activeCategory === "all") return services;
    return services.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      className={`relative overflow-hidden bg-paper ${
        showHeading
          ? "py-20 lg:py-28 border-t border-stone-200"
          : "pt-2 sm:pt-4 pb-20 lg:pb-28 border-t-0"
      }`}
    >
      <div className="dot-texture absolute inset-0 opacity-80 pointer-events-none" />
      <div className="hidden sm:block absolute -right-44 top-1/2 h-[420px] w-[420px] rounded-full bg-brand-sky/25 blur-3xl pointer-events-none" />
      <div className="container-site relative">
        {showHeading && (
          <SectionHeading
            eyebrow="Capabilities & Practices"
            title="A complete growth stack — led by what drives revenue."
            description="Lead generation, paid media and political management lead our practice, backed by full creative and technology capability."
          />
        )}

        {/* Filter Navigation Tabs - Horizontal swipe on mobile, wrapped on desktop */}
        <div className={`flex items-center gap-1.5 sm:gap-3 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center no-scrollbar -mx-4 px-4 sm:mx-0 ${showHeading ? "mt-8 sm:mt-12" : "mb-6 sm:mb-14"}`}>
          {categories.map((cat) => {
            const count =
              cat.value === "all"
                ? services.length
                : services.filter((s) => s.category === cat.value).length;
            const active = activeCategory === cat.value;

            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`inline-flex shrink-0 items-center gap-1.5 sm:gap-2 rounded-full px-3.5 py-1.5 sm:px-5 sm:py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xs select-none ${
                  active
                    ? "bg-ink text-white shadow-md scale-102"
                    : "bg-white text-ink/75 border border-stone-200 hover:border-accent hover:text-accent hover:bg-stone-50"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`flex h-3.5 min-w-3.5 sm:h-4 sm:min-w-4 items-center justify-center rounded-full px-1 text-[9px] sm:text-[10px] font-extrabold ${
                    active ? "bg-accent text-white" : "bg-stone-100 text-ink/60"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Clean Luxury White Cards Grid - 2-Col Compact on Mobile */}
        <Stagger
          key={activeCategory}
          className="grid grid-cols-2 gap-2.5 sm:gap-6 lg:grid-cols-3 items-stretch"
          delayChildren={0.06}
        >
          {filteredServices.map((s) => {
            const Icon = iconMap[s.icon] ?? Target;
            const topDeliverables = s.deliverables.slice(0, 3);

            return (
              <StaggerItem key={s.slug} className="h-full">
                <Link
                  href={`/services/${s.slug}`}
                  prefetch={true}
                  className="group relative flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-3 sm:p-7 lg:p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-lift cursor-pointer"
                >
                  <div>
                    {/* Top Row: Category badge & Enquire Action */}
                    <div className="flex items-center justify-between gap-1">
                      <span className="inline-flex rounded-full bg-paper px-2 py-0.5 sm:px-3 sm:py-1 text-[9.5px] sm:text-[11px] font-bold text-accent border border-stone-200 truncate max-w-[95px] sm:max-w-none">
                        {s.category}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          openEnquiry(s.slug || s.name);
                        }}
                        className="relative z-10 text-[9.5px] sm:text-[11px] font-bold uppercase tracking-wider text-ink/60 transition-colors hover:text-accent shrink-0"
                      >
                        Enquire
                      </button>
                    </div>

                    {/* Icon & Title */}
                    <div className="mt-2.5 sm:mt-6 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                      <div className="flex h-8 w-8 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-paper border border-stone-200 text-ink shadow-xs transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:border-accent">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-xs sm:text-xl font-bold tracking-tight text-ink transition-colors group-hover:text-accent leading-snug line-clamp-2 sm:line-clamp-none">
                          {s.name}
                        </h3>
                        <p className="mt-0.5 sm:mt-1 text-[10.5px] sm:text-xs leading-relaxed text-ink/75 font-normal line-clamp-2 sm:line-clamp-none hidden sm:block">
                          {s.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Deliverables / Scope Preview */}
                    <div className="mt-2.5 sm:mt-6 border-t border-stone-100 pt-2 sm:pt-5">
                      <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-ink/50 mb-1.5 sm:mb-3">
                        Core Capabilities
                      </p>
                      <ul className="space-y-1 sm:space-y-2">
                        {topDeliverables.slice(0, 2).map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-1 sm:gap-2 text-[10px] sm:text-xs font-medium text-ink/80"
                          >
                            <CheckCircle2 className="mt-0.5 h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 shrink-0 text-accent" />
                            <span className="line-clamp-1">{d}</span>
                          </li>
                        ))}
                        {topDeliverables[2] && (
                          <li
                            key={topDeliverables[2]}
                            className="hidden sm:flex items-start gap-2 text-xs font-medium text-ink/80"
                          >
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                            <span className="line-clamp-1">{topDeliverables[2]}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Row: Direct Link */}
                  <div className="mt-3 sm:mt-8 pt-2 sm:pt-5 border-t border-stone-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold text-accent transition-colors group-hover:text-accent-dim">
                      <span className="hidden sm:inline">Explore Practice Architecture</span>
                      <span className="sm:hidden">Explore</span>
                      <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>

                    <span
                      className="flex h-6 w-6 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-paper border border-stone-200 text-ink/70 shadow-xs transition-all group-hover:bg-accent group-hover:text-white group-hover:border-accent"
                    >
                      <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
