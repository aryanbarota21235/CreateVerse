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
        {/* A single timeline rail with a node per step, instead of four boxes */}
        <Stagger className="mt-10 sm:mt-16 grid grid-cols-2 gap-y-9 lg:grid-cols-4" delayChildren={0.12}>
          {steps.map((s, i) => (
            <StaggerItem key={s.num}>
              <div className="group relative h-full border-t border-ink/10 pr-5 pt-6 sm:pr-10 sm:pt-9">
                <span
                  className={`absolute -top-[5px] left-0 h-[9px] w-[9px] rounded-full ring-4 ring-paper transition-transform duration-300 group-hover:scale-150 ${
                    i % 2 === 0 ? "bg-accent" : "bg-brand-orange"
                  }`}
                />
                <span
                  className={`block font-display text-5xl sm:text-7xl font-bold leading-none tracking-tight ${
                    i % 2 === 0 ? "text-accent" : "text-brand-orange"
                  }`}
                >
                  {s.num}
                </span>
                <h3 className="mt-4 sm:mt-7 font-display text-lg sm:text-2xl font-bold tracking-tight text-ink leading-snug">{s.title}</h3>
                <p className="mt-1.5 sm:mt-3 text-[13px] sm:text-sm leading-relaxed text-ink/70 font-normal">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
