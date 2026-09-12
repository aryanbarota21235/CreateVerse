import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/reveal";
import HeroVisual from "@/components/hero-visual";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pt-[76px]">
      <div className="dot-texture absolute inset-0" />
      <div className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-brand-sky blur-3xl" />
      <div className="absolute -left-40 top-64 h-[380px] w-[380px] rounded-full bg-brand-sun blur-3xl" />

      <div className="container-site relative pb-28 pt-14 sm:pt-20 lg:pb-36 lg:pt-28">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-paper-line bg-white px-4 py-1.5 text-xs font-medium tracking-wide text-ink/60 shadow-card">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                Growth &amp; Digital Acquisition Partner
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-balance mt-7 font-display text-5xl font-semibold leading-[1.02] tracking-tightest text-ink sm:text-6xl lg:text-7xl">
                Turn digital attention into{" "}
                <span className="text-brand-gradient">real business.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/60">
                CreateVerse builds digital growth systems for real estate, immigration, political
                campaigns and ambitious businesses — generating qualified leads, acquiring customers
                and scaling campaigns that perform.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-accent"
                >
                  Get a Growth Strategy
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-3.5 text-base font-semibold text-ink transition-all hover:border-accent hover:text-accent"
                >
                  Explore Our Services
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-ink/50">
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Real Estate</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-orange" /> Immigration</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Political Campaigns</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-orange" /> Performance Marketing</span>
              </div>
            </Reveal>
          </div>

          <div className="pb-10 lg:col-span-5 lg:pb-0">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
