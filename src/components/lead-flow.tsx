"use client";

import { ArrowRight, Globe, LayoutTemplate, MousePointerClick, CheckCircle2, MessageSquare, Handshake } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { PulseRail } from "@/components/illustrations";
import { useEnquiry } from "@/context/enquiry-context";

const stages = [
  { icon: Globe, title: "Traffic", desc: "Targeted ads on Google & Meta put your offer in front of the right audience." },
  { icon: LayoutTemplate, title: "Landing Page", desc: "A fast, conversion-first page built to turn visits into action." },
  { icon: MousePointerClick, title: "Lead Capture", desc: "Forms, WhatsApp and calls — friction-free capture at peak intent." },
  { icon: CheckCircle2, title: "Qualification", desc: "Budget, timeline and intent filters separate prospects from noise." },
  { icon: MessageSquare, title: "Follow-up", desc: "Automated WhatsApp, email and call sequences that never let leads go cold." },
  { icon: Handshake, title: "Conversion", desc: "Sales-ready handoff with full tracking from first click to closed deal." },
];

export default function LeadFlow() {
  const { openEnquiry } = useEnquiry();

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-32">
      <div className="container-site relative">
        <SectionHeading
          eyebrow="Lead Generation Systems"
          title="From stranger to signed deal — one engineered pipeline."
          description="Most agencies run ads and stop. We build the whole machine: traffic, conversion, qualification, follow-up and handoff — tracked end to end."
          align="center"
        />

        <div className="relative mx-auto mt-10 max-w-md sm:mt-16 lg:mt-20 lg:max-w-none">
          {/* Desktop: a flowing pipeline running behind the stage nodes */}
          <svg
            viewBox="0 0 1200 72"
            fill="none"
            aria-hidden="true"
            preserveAspectRatio="none"
            className="absolute inset-x-0 top-0 hidden h-[72px] w-full lg:block"
          >
            <defs>
              <linearGradient id="flow-stroke" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0284C7" stopOpacity="0" />
                <stop offset="0.06" stopColor="#0284C7" stopOpacity="0.7" />
                <stop offset="0.7" stopColor="#0284C7" stopOpacity="0.5" />
                <stop offset="1" stopColor="#EA580C" stopOpacity="0.75" />
              </linearGradient>
            </defs>
            <path
              d="M0 36 C 50 12 150 12 200 36 S 350 60 400 36 S 550 12 600 36 S 750 60 800 36 S 950 12 1000 36 S 1150 60 1200 36"
              stroke="url(#flow-stroke)"
              strokeWidth={1.5}
              strokeDasharray="5 9"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              className="flow-dash"
            />
          </svg>

          {/* Mobile: a vertical rail linking the nodes */}
          <PulseRail className="absolute bottom-6 left-[21px] top-6 h-[calc(100%-3rem)] w-0.5 sm:left-[25px] lg:hidden" />

          <div className="relative grid grid-cols-1 gap-6 sm:gap-7 lg:grid-cols-6 lg:gap-4">
            {stages.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} className="relative h-full">
                <div className="group relative flex h-full items-start gap-4 lg:block">
                  {/* Stage node */}
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-accent shadow-soft ring-1 ring-accent/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-accent group-hover:text-white sm:h-[52px] sm:w-[52px] lg:h-[72px] lg:w-[72px]">
                    <s.icon className="h-5 w-5 lg:h-7 lg:w-7" strokeWidth={1.6} />
                    <span className="absolute -right-1 -top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-brand-orange font-display text-[10px] font-bold text-white ring-2 ring-white lg:-right-0.5 lg:-top-0.5 lg:h-6 lg:w-6 lg:text-[11px]">
                      {i + 1}
                    </span>
                  </div>

                  <div className="pt-0.5 lg:pt-0">
                    <h3 className="font-display text-base font-bold leading-snug tracking-tight text-ink lg:mt-6 lg:text-xl">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink/70 font-normal lg:mt-2">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Guaranteed Single Line CTA Button on Mobile */}
        <Reveal delay={0.2} className="mt-10 sm:mt-16 text-center">
          <button
            onClick={() => openEnquiry("Lead Generation")}
            className="pressable group inline-flex max-w-full items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-accent px-4 sm:px-8 py-3 sm:py-4 text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.06em] sm:tracking-[0.2em] text-white shadow-lift transition-all hover:bg-accent-dim cursor-pointer whitespace-nowrap"
          >
            <span className="whitespace-nowrap">Build My Lead Generation System</span>
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1 shrink-0" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
