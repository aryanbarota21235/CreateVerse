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
    <section className={`relative overflow-hidden bg-paper pt-[68px] sm:pt-[76px] ${className}`}>
      <div className="dot-texture absolute inset-0 opacity-80" />
      <div className="hidden sm:block pointer-events-none absolute -left-28 top-16 h-[350px] sm:h-[450px] w-[350px] sm:w-[450px] rounded-full bg-[radial-gradient(circle,rgba(255,237,213,0.7)_0%,rgba(255,237,213,0.2)_40%,transparent_70%)]" />
      <div className="hidden sm:block pointer-events-none absolute -right-28 top-12 h-[350px] sm:h-[450px] w-[350px] sm:w-[450px] rounded-full bg-[radial-gradient(circle,rgba(224,242,254,0.6)_0%,rgba(224,242,254,0.2)_40%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-b from-transparent to-paper" />
      <div className="container-site relative pb-5 sm:pb-8 pt-7 sm:pt-16 lg:pt-20">
        <Reveal>
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-accent">{eyebrow}</p>
          <h1 className="text-balance mt-2.5 sm:mt-3 max-w-3xl font-display text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.18] sm:leading-tight">
            {title}
          </h1>
          {description && <p className="mt-2.5 sm:mt-4 max-w-2xl text-xs sm:text-lg leading-relaxed text-ink/80 font-normal">{description}</p>}
        </Reveal>
      </div>
    </section>
  );
}
