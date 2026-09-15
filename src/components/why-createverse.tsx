import { Compass, LineChart, Layers, Lightbulb, Eye, Crosshair } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/reveal";

const reasons = [
  { icon: Compass, title: "Strategy + Execution", desc: "One team owns the plan and the doing — no handoffs, no blame games, no drift." },
  { icon: LineChart, title: "Performance-Driven", desc: "Every campaign is managed to cost-per-result. If it doesn't convert, it doesn't run." },
  { icon: Crosshair, title: "Industry-Specific Expertise", desc: "Real estate, immigration and political playbooks built from campaigns in those exact arenas." },
  { icon: Layers, title: "Creative + Technology, One Roof", desc: "Designers, media buyers and developers in one team — funnels ship whole, not in pieces." },
  { icon: Eye, title: "Transparent Reporting", desc: "Weekly reports that show spend, leads, quality and pipeline — numbers you can act on." },
  { icon: Lightbulb, title: "Conversion-Focused", desc: "We optimize for customers acquired, not impressions served. Revenue is the brief." },
];

export default function WhyCreateVerse() {
  return (
    <section className="bg-paper py-14 sm:py-24 lg:py-32">
      <div className="container-site">
        <div className="grid gap-8 sm:gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Why CreateVerse"
              title="Built for businesses that count results."
              description="We are deliberately not a generic agency. Everything about how we work is designed around one outcome: measurable growth."
            />
          </div>
          {/* Desktop View - 100% Exact Original Design & Markup */}
          <Stagger className="hidden sm:grid gap-10 sm:grid-cols-2 lg:col-span-8" delayChildren={0.08}>
            {reasons.map((r, i) => (
              <StaggerItem key={r.title}>
                <div className="group">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-105 ${i % 2 === 0 ? "bg-accent" : "bg-brand-orange"}`}>
                    <r.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/80 font-normal">{r.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Mobile View - Compact 2-Column Cards */}
          <Stagger className="grid grid-cols-2 gap-2.5 sm:hidden" delayChildren={0.08}>
            {reasons.map((r, i) => (
              <StaggerItem key={r.title} className="h-full">
                <div className="h-full flex flex-col justify-start p-3.5 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
                  <span className={`flex h-8 w-8 items-center justify-center rounded-lg text-white shrink-0 ${i % 2 === 0 ? "bg-accent" : "bg-brand-orange"}`}>
                    <r.icon className="h-4 w-4" />
                  </span>
                  <h3 className="mt-2.5 font-display text-xs font-bold text-ink leading-snug">{r.title}</h3>
                  <p className="mt-1 text-[10.5px] leading-relaxed text-ink/80 font-normal line-clamp-3">{r.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
