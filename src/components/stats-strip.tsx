import Reveal from "@/components/reveal";

const stats = [
  { value: "1M+", label: "Leads Generated", note: "Across client campaigns" },
  { value: "500+", label: "Campaigns Managed", note: "Across industries & regions" },
  { value: "10+", label: "Industries Served", note: "Real estate, immigration, political & more" },
  { value: "₹Cr+", label: "Ad Spend Managed", note: "Across Google & Meta ecosystems" },
];

export default function StatsStrip() {
  return (
    <section className="border-y border-paper-line bg-white">
      <div className="container-site py-14 lg:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <p className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                {s.value.replace("+", "")}
                <span className="text-brand-orange">+</span>
              </p>
              <p className="mt-2 text-sm font-semibold text-ink/80">{s.label}</p>
              <p className="mt-1 text-xs text-ink/40">{s.note}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.35}>
          <p className="mt-10 text-[11px] leading-relaxed text-ink/30">
            * Figures shown are placeholders pending verified client data — replace with audited
            numbers before public launch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
