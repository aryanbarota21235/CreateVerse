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
          <Stagger className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-10 lg:col-span-8" delayChildren={0.08}>
            {reasons.map((r, i) => (
              <StaggerItem key={r.title} className="h-full">
                <div className="group h-full flex flex-col justify-start p-3.5 sm:p-0 rounded-2xl sm:rounded-none bg-white sm:bg-transparent border border-stone-200/90 sm:border-0 shadow-xs sm:shadow-none">
                  <span className={`flex h-8 w-8 sm:h-11 sm:w-11 items-center justify-center rounded-lg sm:rounded-xl text-white transition-transform duration-300 group-hover:scale-105 shrink-0 ${i % 2 === 0 ? "bg-accent" : "bg-brand-orange"}`}>
                    <r.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <h3 className="mt-2.5 sm:mt-5 font-display text-xs sm:text-xl font-bold text-ink leading-snug">{r.title}</h3>
                  <p className="mt-1 sm:mt-2 text-[10.5px] sm:text-sm leading-relaxed text-ink/80 font-normal line-clamp-3 sm:line-clamp-none">{r.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
