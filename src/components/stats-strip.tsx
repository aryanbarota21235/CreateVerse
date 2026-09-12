import Reveal from "@/components/reveal";

const stats = [
  { value: "₹65 Cr+", label: "Client Pipeline Generated", note: "Across luxury real estate, visa & brands" },
  { value: "1.2M+", label: "Verified Inquiries", note: "Pre-screened with high conversion intent" },
  { value: "500+", label: "Campaigns Scaled", note: "Across Google, Meta & omnichannel ecosystems" },
  { value: "3.8x", label: "Average Account ROAS", note: "Measurable acquisition & revenue return" },
];

export default function StatsStrip() {
  return (
    <section className="border-y border-stone-200 bg-white">
      <div className="container-site py-12 lg:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="relative pl-0 lg:pl-6 lg:border-l lg:border-stone-200">
                <p className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm font-bold text-ink">{s.label}</p>
                <p className="mt-1 text-xs font-medium text-ink/75">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
