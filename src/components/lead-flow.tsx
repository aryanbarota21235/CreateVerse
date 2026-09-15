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
          <div className="grid grid-cols-2 gap-3.5 sm:gap-6 lg:grid-cols-6 lg:gap-4 relative">
            {stages.map((s, i) => {
              const isLast = i === stages.length - 1;
              const isLeftColumn = i % 2 === 0;
              const isRightColumn = i % 2 === 1;

              return (
                <Reveal key={s.title} delay={i * 0.08} className="relative h-full">
                  <div className="group relative h-full flex flex-col justify-between p-3.5 sm:p-5 rounded-2xl border border-stone-200/90 bg-[#F8FAFC] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-white hover:shadow-card">
                    {/* Top Row: Stage Tag + Arrow Indicator */}
                    <div className="flex items-center justify-between w-full mb-2.5">
                      <span className="inline-flex items-center gap-1 rounded-md bg-accent/[0.08] px-2 py-0.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-accent">
                        Stage 0{i + 1}
                      </span>
                      {!isLast ? (
                        <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-stone-100 text-stone-500 group-hover:bg-accent group-hover:text-white transition-all">
                          <ArrowRight className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[9.5px] sm:text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                          <CheckCircle2 className="h-3 w-3" />
                          <span>Goal</span>
                        </span>
                      )}
                    </div>

                    {/* Middle: Icon & Title */}
                    <div>
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-stone-200/90 bg-white text-accent shadow-xs group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all">
                        <s.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <h3 className="mt-2.5 sm:mt-3 font-display text-xs sm:text-base font-bold text-ink leading-snug group-hover:text-accent transition-colors">
                        {s.title}
                      </h3>
                      <p className="mt-1 sm:mt-1.5 text-[10.5px] sm:text-xs leading-relaxed text-stone-600 font-normal line-clamp-3 sm:line-clamp-none">
                        {s.desc}
                      </p>
                    </div>

                    {/* Desktop Connector Arrow between stages */}
                    {!isLast && (
                      <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 h-6 w-6 items-center justify-center rounded-full bg-white border border-stone-200 text-accent shadow-xs">
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    )}

                    {/* Mobile Connector Arrow across columns (left to right) */}
                    {isLeftColumn && (
                      <div className="lg:hidden absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-white border border-stone-200 text-accent shadow-xs">
                        <ArrowRight className="h-2.5 w-2.5" />
                      </div>
                    )}

                    {/* Mobile Connector Arrow across rows (right column down to next row) */}
                    {isRightColumn && !isLast && (
                      <div className="lg:hidden absolute -bottom-2.5 left-1/2 -translate-x-1/2 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-white border border-stone-200 text-accent shadow-xs">
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
