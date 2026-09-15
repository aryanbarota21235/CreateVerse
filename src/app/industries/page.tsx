import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/page-hero";
import FinalCTA from "@/components/final-cta";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries — Real Estate, Immigration, Political & Business Growth",
  description:
    "CreateVerse goes deep in four arenas: real estate lead generation, immigration & visa marketing, political campaign management, and performance marketing for ambitious businesses.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Deep expertise where <span className="text-accent">growth is won.</span></>}
        description="Acquisition works when it's shaped by how an industry actually buys and decides. These are the four arenas we know cold."
      />
      <section className="bg-paper pb-16 sm:pb-24 lg:pb-32">
        <div className="container-site space-y-4 sm:space-y-6">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug}>
              <div className="grid gap-5 sm:gap-8 rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-4 sm:p-10 lg:p-12 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <span className={`rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-bold tracking-wide ${i % 2 === 0 ? "bg-brand-sky text-accent" : "bg-brand-sun text-brand-orange"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-2.5 sm:mt-4 font-display text-xl sm:text-4xl font-bold tracking-tight text-ink">
                    {ind.name}
                  </h2>
                  <p className="mt-2 sm:mt-4 text-sm sm:text-lg font-bold leading-snug text-ink">{ind.headline}</p>
                  <Link
                    href={ind.cta.href}
                    prefetch={true}
                    className="group mt-3.5 sm:mt-7 inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold text-accent transition-colors hover:text-accent-dim"
                  >
                    {ind.cta.label}
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-xs sm:text-sm leading-relaxed text-ink/80 font-normal">{ind.description}</p>
                  <Stagger className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3" delayChildren={0.06}>
                    {ind.points.map((p) => (
                      <StaggerItem key={p} className="h-full">
                        <div className="h-full flex items-start gap-2 sm:gap-3 rounded-xl border border-stone-200/80 bg-[#F8FAFC] p-2.5 sm:p-4">
                          <span className={`mt-[5px] sm:mt-[7px] h-1 w-2 sm:w-3 shrink-0 rounded-full ${i % 2 === 0 ? "bg-accent" : "bg-brand-orange"}`} />
                          <p className="text-[11px] sm:text-sm leading-snug sm:leading-relaxed text-ink/90 font-medium">{p}</p>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
