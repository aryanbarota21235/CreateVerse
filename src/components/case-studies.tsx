import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/reveal";

export const caseStudies = [
  {
    slug: "real-estate-lead-generation",
    category: "Real Estate Acquisition",
    title: "Filling a luxury high-rise project launch with verified HNI buyers",
    summary:
      "Engineered an end-to-end acquisition funnel combining geo-targeted Meta campaigns, WhatsApp qualification bots, and instant sales CRM handoff.",
    stats: [
      { label: "Inventory Booked", value: "₹48.6 Cr" },
      { label: "Verified Site Visits", value: "1,420" },
      { label: "Cost / Site Visit", value: "₹240" },
    ],
    tag: "Luxury Residential",
  },
  {
    slug: "immigration-lead-generation",
    category: "Immigration & Visa",
    title: "Scaling a predictable consultation pipeline across intake cycles",
    summary:
      "Built country-specific intake funnels with automated eligibility pre-screening, filtering out non-qualified inquiries and booking direct counselor calls.",
    stats: [
      { label: "Consultations", value: "3,850+" },
      { label: "Show-Up Rate", value: "91.4%" },
      { label: "Pipeline Velocity", value: "3.4x" },
    ],
    tag: "Study & PR Programs",
  },
  {
    slug: "political-management",
    category: "Political Campaign",
    title: "Running a 24/7 digital war room & voter mobilization engine",
    summary:
      "Hyperlocal narrative strategy, dynamic video content operations, and grassroots voter mobilization executed at constituency scale across regional languages.",
    stats: [
      { label: "Target Reach", value: "14.2M+" },
      { label: "Supporters Mobilized", value: "180K+" },
      { label: "Rapid Response", value: "< 30 mins" },
    ],
    tag: "Constituency Operations",
  },
  {
    slug: "lead-generation",
    category: "Performance Marketing",
    title: "Rebuilding omnichannel paid acquisition for high-ticket growth",
    summary:
      "Full-funnel Google Search and Meta ads restructure paired with high-converting custom landing pages — shifting the business from ad spend to compound pipeline.",
    stats: [
      { label: "Blended ROAS", value: "4.2x" },
      { label: "CAC Reduction", value: "-48%" },
      { label: "Pipeline Created", value: "₹18.4 Cr" },
    ],
    tag: "D2C & B2B Scale",
  },
];

export default function CaseStudies({
  className = "",
  showHeading = false,
}: {
  className?: string;
  showHeading?: boolean;
}) {
  return (
    <section className={`relative overflow-hidden bg-paper ${className || "py-14 sm:py-20 lg:py-28"}`}>
      <div className="dot-texture absolute inset-0 opacity-40 pointer-events-none" />
      <div className="absolute -right-40 top-40 h-[380px] w-[380px] rounded-full bg-brand-sky/25 blur-3xl pointer-events-none" />
      <div className="container-site relative">
        {showHeading && (
          <SectionHeading
            eyebrow="Case Studies"
            title="Results engineered across core sectors."
            description="Acquisition systems, verified inquiries, and strategic campaigns executed with precision."
          />
        )}

        <Stagger className={`${showHeading ? "mt-6 sm:mt-16" : "mt-2 sm:mt-4"} grid gap-3 sm:gap-6 md:grid-cols-2`} delayChildren={0.1}>
          {caseStudies.map((c, i) => (
            <StaggerItem key={c.category}>
              <Link
                href={`/services/${c.slug}`}
                prefetch={true}
                className="group flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-3.5 sm:p-8 lg:p-10 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-paper border border-black/[0.08] px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold text-accent shadow-xs">
                      {c.category}
                    </span>
                    <span className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-paper border border-black/[0.08] text-ink/70 shadow-xs transition-all group-hover:bg-accent group-hover:text-white group-hover:border-accent">
                      <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  <h3 className="mt-2.5 sm:mt-6 font-display text-sm sm:text-2xl font-bold leading-snug tracking-tight text-ink group-hover:text-accent transition-colors">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-ink/80 font-normal line-clamp-2">{c.summary}</p>
                </div>

                <div className="mt-3.5 sm:mt-8 border-t border-stone-200 pt-3 sm:pt-6">
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-4">
                    {c.stats.map((s) => (
                      <div key={s.label} className="rounded-lg sm:rounded-xl border border-stone-200/90 bg-paper p-1.5 sm:p-3 shadow-xs text-center sm:text-left">
                        <p className="font-display text-xs sm:text-xl font-bold text-ink leading-tight">{s.value}</p>
                        <p className="mt-0.5 text-[9px] sm:text-[11px] font-semibold leading-tight text-ink/75 truncate">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
