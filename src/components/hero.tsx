import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import Reveal from "@/components/reveal";
import HeroVisual from "@/components/hero-visual";
import { priorityServices } from "@/lib/services";
import { iconMap } from "@/components/services-grid";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pt-24 sm:pt-28 lg:pt-32">
      {/* Texture & ambient glow */}
      <div className="dot-texture absolute inset-0 opacity-80" />
      <div className="absolute -right-32 -top-20 h-[500px] w-[500px] rounded-full bg-brand-sky/70 blur-3xl" />
      <div className="absolute -left-32 top-60 h-[400px] w-[400px] rounded-full bg-brand-sun/60 blur-3xl" />

      <div className="container-site relative pb-20 pt-6 sm:pb-28 lg:pb-32 lg:pt-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-paper-line bg-white/90 px-4 py-1.5 text-xs font-semibold tracking-wide text-ink/70 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>Accepting Select Client Partnerships · Q3/Q4</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-balance mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tightest text-ink sm:text-6xl lg:text-7xl">
                Turn digital attention into{" "}
                <span className="text-brand-gradient">predictable revenue.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
                CreateVerse builds bespoke digital acquisition engines for real estate developers,
                visa consultancies, political campaigns and high-growth brands — engineered for
                verified leads, lower CAC and measurable pipeline.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-accent hover:shadow-lg hover:shadow-accent/25 sm:px-7 sm:py-3.5 sm:text-base"
                >
                  <span>Build Your Growth System</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink shadow-sm transition-all hover:border-accent hover:text-accent sm:px-7 sm:py-3.5 sm:text-base"
                >
                  <span>View All Services</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs font-medium text-ink/55 sm:text-sm">
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Real Estate</span>
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-brand-orange" /> Immigration &amp; Visa</span>
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Political Management</span>
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-brand-orange" /> Performance Marketing</span>
              </div>
            </Reveal>
          </div>

          <div className="pb-6 lg:col-span-5 lg:pb-0">
            <HeroVisual />
          </div>
        </div>

        {/* Services quick-strip — visible on first screen */}
        <Reveal delay={0.5}>
          <div className="mt-14 sm:mt-16 lg:mt-20">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/40">
                Core Acquisition Capabilities
              </p>
              <Link href="/services" className="text-xs font-semibold text-accent hover:underline">
                Explore all capabilities →
              </Link>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:gap-3">
              {priorityServices.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-2.5 rounded-2xl border border-paper-line bg-white/90 p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md backdrop-blur-sm"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-paper text-ink transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                      {Icon && <Icon className="h-4 w-4" />}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[13px] font-semibold leading-tight text-ink group-hover:text-accent">
                        {s.shortName ?? s.name}
                      </span>
                      <span className="block truncate text-[10px] uppercase tracking-wide text-ink/40">
                        {s.category}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
