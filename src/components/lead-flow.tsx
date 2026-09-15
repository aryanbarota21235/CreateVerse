"use client";

import { ArrowRight, ArrowDown, Globe, LayoutTemplate, MousePointerClick, CheckCircle2, MessageSquare, Handshake } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
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
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-32 border-t border-stone-200">
      <div className="dot-texture absolute inset-0 opacity-40" />
      <div className="container-site relative">
        <SectionHeading
          eyebrow="Lead Generation Systems"
          title="From stranger to signed deal — one engineered pipeline."
          description="Most agencies run ads and stop. We build the whole machine: traffic, conversion, qualification, follow-up and handoff — tracked end to end."
          align="center"
        />

        <div className="relative mt-10 sm:mt-16 lg:mt-20">
          {/* Original Desktop Connecting Gradient Line */}
          <div className="absolute left-0 right-0 top-[34px] hidden h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent lg:block" />

          <div className="grid grid-cols-2 gap-3.5 sm:gap-6 lg:grid-cols-6 lg:gap-4 relative">
            {stages.map((s, i) => {
              const isLast = i === stages.length - 1;
              const isLeftColumn = i % 2 === 0;
              const isRightColumn = i % 2 === 1;

              return (
                <Reveal key={s.title} delay={i * 0.08} className="relative h-full">
                  <div className="group relative h-full flex flex-col items-center lg:items-start text-center lg:text-left p-3.5 sm:p-4 lg:p-0 rounded-2xl lg:rounded-none bg-[#F8FAFC]/70 lg:bg-transparent border border-stone-200/80 lg:border-0">
                    {/* Original Circular Icon Container with Orange Number Badge */}
                    <div className="relative mx-auto flex h-12 w-12 sm:h-14 sm:w-14 lg:h-[68px] lg:w-[68px] items-center justify-center rounded-xl lg:rounded-2xl border border-black/[0.1] lg:border-black/[0.12] bg-white lg:bg-[#F8FAFC] shadow-xs lg:shadow-card transition-all duration-300 group-hover:-translate-y-1 hover:border-accent group-hover:shadow-lift lg:mx-0">
                      <s.icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                      <span className="absolute -right-1.5 -top-1.5 lg:-right-2 lg:-top-2 flex h-5 w-5 lg:h-6 lg:w-6 items-center justify-center rounded-full bg-brand-orange font-display text-[10px] lg:text-[11px] font-bold text-white">
                        {i + 1}
                      </span>
                    </div>

                    <h3 className="mt-2.5 lg:mt-5 font-display text-xs sm:text-sm lg:text-lg font-bold text-ink leading-snug">
                      {s.title}
                    </h3>
                    <p className="mt-1 lg:mt-2 text-[10.5px] sm:text-xs lg:text-[13px] leading-relaxed text-ink/80 font-normal line-clamp-3 lg:line-clamp-none">
                      {s.desc}
                    </p>

                    {/* Mobile-ONLY Connector Arrow across columns (left to right) */}
                    {isLeftColumn && (
                      <div className="lg:hidden absolute -right-2 top-1/2 -translate-y-1/2 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-white border border-stone-200 text-accent shadow-xs pointer-events-none">
                        <ArrowRight className="h-2.5 w-2.5" />
                      </div>
                    )}

                    {/* Mobile-ONLY Connector Arrow across rows (right column down to next row) */}
                    {isRightColumn && !isLast && (
                      <div className="lg:hidden absolute -bottom-2.5 left-1/2 -translate-x-1/2 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-white border border-stone-200 text-accent shadow-xs pointer-events-none">
                        <ArrowDown className="h-2.5 w-2.5" />
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Guaranteed Single Line CTA Button on Mobile */}
        <Reveal delay={0.2} className="mt-8 sm:mt-16 text-center">
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
