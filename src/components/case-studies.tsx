import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/reveal";

export const caseStudies = [
  {
    slug: "real-estate-lead-generation",
    category: "Real Estate Lead Generation",
    title: "Filling a project launch pipeline with verified buyers",
    summary:
      "A launch-phase funnel combining hyperlocal Meta campaigns, project landing pages and qualification flows to drive site visits.",
    metrics: ["Cost per qualified lead", "Site-visit rate", "Booking conversion"],
  },
  {
    slug: "immigration-lead-generation",
    category: "Immigration Lead Generation",
    title: "Building a weekly inquiry engine for a visa consultancy",
    summary:
      "Program-specific funnels with eligibility pre-screening, producing consistent consultation bookings across intake cycles.",
    metrics: ["Qualified applicants / week", "Consultation bookings", "Cost per eligible lead"],
  },
  {
    slug: "political-management",
    category: "Political Campaign",
    title: "Running a digital war room for a constituency campaign",
    summary:
      "Narrative strategy, daily content operations and voter outreach executed at constituency scale in regional languages.",
    metrics: ["Reach & engagement growth", "Volunteer signups", "Sentiment trend"],
  },
  {
    slug: "lead-generation",
    category: "Performance Marketing",
    title: "Rebuilding paid acquisition for a growth-stage business",
    summary:
      "Full-funnel Google & Meta restructure with landing-page CRO — shifting the account from spend to measurable pipeline.",
    metrics: ["Cost per acquisition", "Pipeline generated", "ROAS trend"],
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Case Studies & Results"
          title="Proof, presented honestly."
          description="Detailed case studies are being prepared with client data. Until then, here is the shape of the work we take on — with clearly marked placeholders, not invented numbers."
        />

        <Stagger className="mt-16 grid gap-6 md:grid-cols-2" delayChildren={0.1}>
          {caseStudies.map((c, i) => (
            <StaggerItem key={c.category}>
              <Link
                href={`/services/${c.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-paper-line bg-paper p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-10"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${i % 2 === 0 ? "text-accent" : "text-brand-orange"}`}>
                    {c.category}
                  </p>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-ink/25 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold leading-snug tracking-tight text-ink">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/55">{c.summary}</p>
                <div className="mt-auto pt-8">
                  <div className="grid grid-cols-3 gap-3 border-t border-paper-line pt-6">
                    {c.metrics.map((m) => (
                      <div key={m}>
                        <p className="font-display text-xl font-semibold text-ink/20">—</p>
                        <p className="mt-1 text-[11px] leading-tight text-ink/45">{m}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-[11px] italic text-ink/30">
                    Metrics pending client approval — placeholder, not a claim.
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
