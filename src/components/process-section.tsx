import SectionHeading from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/reveal";

const steps = [
  { num: "01", title: "Understand", desc: "We dig into your business, market, audience and numbers before proposing anything." },
  { num: "02", title: "Strategize", desc: "We define the offer, funnel, channels, budgets and KPIs — a plan you sign off on." },
  { num: "03", title: "Execute", desc: "Creative, campaigns, pages and systems go live — built and launched by one team." },
  { num: "04", title: "Optimize", desc: "Weekly data reviews cut waste and scale what works. Improvement never stops." },
];

export default function ProcessSection() {
  return (
    <section className="bg-paper py-14 sm:py-20 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="How We Work"
          title="Four steps. No mystery."
          description="A disciplined operating rhythm that keeps strategy honest and execution fast."
        />
        <Stagger className="mt-8 sm:mt-16 grid grid-cols-2 gap-2.5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4" delayChildren={0.12}>
          {steps.map((s, i) => (
            <StaggerItem key={s.num}>
              <div className="group relative h-full rounded-xl sm:rounded-2xl border border-black/[0.1] sm:border-black/[0.12] bg-white p-3.5 sm:p-8 shadow-xs sm:shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift">
                <span className={`font-display text-2xl sm:text-5xl font-bold tracking-tight ${i % 2 === 0 ? "text-accent/40" : "text-brand-orange/45"}`}>
                  {s.num}
                </span>
                <h3 className="mt-2 sm:mt-6 font-display text-xs sm:text-2xl font-bold text-ink leading-snug">{s.title}</h3>
                <p className="mt-1 sm:mt-3 text-[10.5px] sm:text-sm leading-relaxed text-ink/80 font-normal line-clamp-3 sm:line-clamp-none">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
