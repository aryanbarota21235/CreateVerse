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

export default function CaseStudies() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Case Studies & Impact"
          title="Proven architectures. Measurable outcomes."
          description="We evaluate every partnership by one standard: revenue delivered vs. capital deployed. Here is how our growth systems perform in the field."
        />

        <Stagger className="mt-16 grid gap-6 md:grid-cols-2" delayChildren={0.1}>
          {caseStudies.map((c, i) => (
            <StaggerItem key={c.category}>
              <Link
                href={`/services/${c.slug}`}
                className="group flex h-full flex-col justify-between rounded-3xl border border-paper-line bg-paper/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white hover:shadow-lift sm:p-10"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-accent shadow-sm">
                      {c.category}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink/40 shadow-sm transition-all group-hover:bg-accent group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-semibold leading-snug tracking-tight text-ink group-hover:text-accent transition-colors">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{c.summary}</p>
                </div>

                <div className="mt-8 border-t border-paper-line/80 pt-6">
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    {c.stats.map((s) => (
                      <div key={s.label} className="rounded-xl bg-white/80 p-3 shadow-xs">
                        <p className="font-display text-lg font-bold text-ink sm:text-xl">{s.value}</p>
                        <p className="mt-0.5 text-[11px] font-medium leading-tight text-ink/50">{s.label}</p>
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
