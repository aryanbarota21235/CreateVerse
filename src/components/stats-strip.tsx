import Reveal from "@/components/reveal";

const stats = [
  { value: "₹65", suffix: " Cr+", label: "Client Pipeline Generated", note: "Across luxury real estate, visa & brands" },
  { value: "1.2", suffix: "M+", label: "Verified Inquiries", note: "Pre-screened with high conversion intent" },
  { value: "500", suffix: "+", label: "Campaigns Scaled", note: "Across Google, Meta & omnichannel ecosystems" },
  { value: "3.8", suffix: "x", label: "Average Account ROAS", note: "Measurable acquisition & revenue return" },
];

export default function StatsStrip() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(2,132,199,0.35)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-48 -right-32 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(234,88,12,0.28)_0%,transparent_70%)]" />
      <div
        className="fade-edges-y pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="container-site relative py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-2 gap-x-5 gap-y-9 lg:grid-cols-4 lg:gap-x-0 lg:divide-x lg:divide-white/10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
              <p className="font-display text-4xl font-bold leading-none tracking-tight sm:text-5xl lg:text-6xl">
                {s.value}
                <span className="text-sky-400">{s.suffix}</span>
              </p>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-semibold text-white">{s.label}</p>
              <p className="mt-1 text-[11px] sm:text-xs font-medium leading-snug text-white/55">{s.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
