import Reveal from "@/components/reveal";
import LeadForm from "@/components/lead-form";
import { Check } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-paper border-t border-stone-200/80 pt-12 pb-10 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
      <div className="grid-texture-light absolute inset-0 opacity-40 pointer-events-none" />
      <div className="hidden sm:block absolute -left-32 top-0 h-[380px] w-[380px] rounded-full bg-brand-sun/20 blur-3xl pointer-events-none" />
      <div className="hidden sm:block absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-accent/15 blur-3xl pointer-events-none" />
      <div className="container-site relative">
        <div className="grid items-center gap-8 sm:gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-accent">Let&apos;s Talk</p>
            <h2 className="text-balance mt-2.5 sm:mt-4 font-display text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tightest text-ink">
              Ready to build your next{" "}
              <span className="text-accent">growth engine?</span>
            </h2>
            <p className="mt-3 sm:mt-6 max-w-lg text-sm sm:text-lg leading-relaxed text-stone-600 font-normal">
              Tell us where you want to grow. We&apos;ll come back with a clear point of view on the
              funnel, channels and budget it takes to get there.
            </p>
            <ul className="mt-5 sm:mt-8 space-y-2.5 sm:space-y-3 text-xs sm:text-sm font-medium text-stone-700">
              {[
                "Free 30-minute strategy conversation",
                "Honest assessment — even if we're not a fit",
                "Clear next steps within 48 hours",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2.5 sm:gap-3">
                  <span className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-accent/10 border border-accent/20 shrink-0">
                    <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-accent" />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <LeadForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
