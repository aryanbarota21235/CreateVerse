import Reveal from "@/components/reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-paper pt-[76px]">
      <div className="dot-texture absolute inset-0" />
      <div className="absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-brand-sky blur-3xl" />
      <div className="absolute -left-40 top-40 h-[320px] w-[320px] rounded-full bg-brand-sun blur-3xl" />
      <div className="container-site relative pb-20 pt-16 sm:pt-24 lg:pt-28">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
          <h1 className="text-balance mt-4 max-w-3xl font-display text-5xl font-bold tracking-tightest text-ink sm:text-6xl">
            {title}
          </h1>
          {description && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80 font-normal">{description}</p>}
        </Reveal>
      </div>
    </section>
  );
}
