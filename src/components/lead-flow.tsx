"use client";

import { ArrowRight, Globe, LayoutTemplate, MousePointerClick, CheckCircle2, MessageSquare, Handshake } from "lucide-react";
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
          <div className="absolute left-0 right-0 top-[34px] hidden h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent lg:block" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-6 sm:gap-6 lg:gap-4">
            {stages.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="group relative text-center lg:text-left h-full flex flex-col items-center lg:items-start p-3.5 sm:p-0 rounded-2xl sm:rounded-none bg-[#F8FAFC]/70 sm:bg-transparent border border-stone-200/80 sm:border-0">
                  <div className="relative mx-auto flex h-12 w-12 sm:h-[68px] sm:w-[68px] items-center justify-center rounded-xl sm:rounded-2xl border border-black/[0.1] sm:border-black/[0.12] bg-white sm:bg-[#F8FAFC] shadow-xs sm:shadow-card transition-all duration-300 group-hover:-translate-y-1 hover:border-accent group-hover:shadow-lift lg:mx-0">
                    <s.icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    <span className="absolute -right-1.5 -top-1.5 sm:-right-2 sm:-top-2 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-brand-orange font-display text-[10px] sm:text-[11px] font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-3 sm:mt-5 font-display text-sm sm:text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-1 sm:mt-2 text-[11px] sm:text-[13px] leading-relaxed text-ink/80 font-normal line-clamp-3 sm:line-clamp-none">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} className="mt-8 sm:mt-16 text-center">
          <button
            onClick={() => openEnquiry("Lead Generation")}
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-accent px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white shadow-lift transition-all hover:bg-accent-dim"
          >
            <span>Build My Lead Generation System</span>
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
