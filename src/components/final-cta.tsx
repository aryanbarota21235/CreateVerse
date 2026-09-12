import Reveal from "@/components/reveal";
import LeadForm from "@/components/lead-form";
import { Check } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div className="grid-texture absolute inset-0" />
      <div className="absolute -left-32 top-0 h-[380px] w-[380px] rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-brand-orange/15 blur-3xl" />
      <div className="container-site relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-orange">Let&apos;s Talk</p>
            <h2 className="text-balance mt-4 font-display text-4xl font-bold tracking-tightest text-white sm:text-5xl lg:text-6xl">
              Ready to build your next{" "}
              <span className="text-accent">growth engine?</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80 font-normal">
              Tell us where you want to grow. We&apos;ll come back with a clear point of view on the
              funnel, channels and budget it takes to get there.
            </p>
            <ul className="mt-8 space-y-3 text-sm font-medium text-white/85">
              {[
                "Free 30-minute strategy conversation",
                "Honest assessment — even if we're not a fit",
                "Clear next steps within 48 hours",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/20">
                    <Check className="h-3 w-3 text-accent" />
                  </span>
                  {t}
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
