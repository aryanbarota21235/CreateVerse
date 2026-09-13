import Reveal from "@/components/reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}) {
  return (
    <section className={`relative overflow-hidden bg-paper pt-[76px] ${className}`}>
      <div className="dot-texture absolute inset-0 opacity-80" />
      <div className="pointer-events-none absolute -left-28 top-16 h-[450px] w-[450px] rounded-full bg-brand-sun/70 blur-[100px]" />
      <div className="pointer-events-none absolute -right-28 top-12 h-[450px] w-[450px] rounded-full bg-brand-sky/60 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-paper" />
      <div className="container-site relative pb-6 sm:pb-8 pt-12 sm:pt-16 lg:pt-20">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
          <h1 className="text-balance mt-3 max-w-3xl font-display text-4xl font-bold tracking-tightest text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-ink/80 font-normal">{description}</p>}
        </Reveal>
      </div>
    </section>
  );
}
