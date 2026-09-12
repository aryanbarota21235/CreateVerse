import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/reveal";
import { industries } from "@/lib/site";

const tints = [
  { chip: "bg-brand-sky text-accent", bar: "bg-accent" },
  { chip: "bg-brand-sun text-brand-orange", bar: "bg-brand-orange" },
];

export default function IndustriesSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Industry Expertise"
          title="Deep focus where growth matters most."
          description="We don't spread thin across every industry. We go deep in four arenas — building acquisition systems shaped by how each one actually buys, decides and converts."
        />

        <Stagger className="mt-16 grid gap-6 lg:grid-cols-2" delayChildren={0.1}>
          {industries.map((ind, i) => {
            const tint = tints[i % 2];
            return (
              <StaggerItem key={ind.slug}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/[0.12] bg-[#F8FAFC] p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-white hover:shadow-lift sm:p-10">
                  <span className={`absolute left-0 top-0 h-1.5 w-full ${tint.bar}`} />
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full px-3 py-1 text-xs font-bold tracking-wide ${tint.chip}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink">{ind.name}</h3>
                  <p className="mt-3 text-lg font-bold leading-snug text-ink">{ind.headline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink/80 font-normal">{ind.description}</p>
                  <ul className="mt-6 space-y-2.5">
                    {ind.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm font-medium text-ink/90">
                        <span className={`mt-[7px] h-1 w-4 shrink-0 rounded-full ${tint.bar}`} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={ind.cta.href}
                    className="mt-8 inline-flex items-center gap-2 pt-2 text-sm font-bold text-ink transition-colors hover:text-accent"
                  >
                    {ind.cta.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
