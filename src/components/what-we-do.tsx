import { Building2, Code2, Filter, Megaphone, Palette, Plane, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/reveal";

const capabilities = [
  { icon: Filter, title: "Lead Generation", desc: "Full-funnel systems that turn ad spend into qualified, sales-ready inquiries.", tint: "bg-brand-sky text-accent" },
  { icon: TrendingUp, title: "Performance Marketing", desc: "Google & paid social managed to one standard: measurable cost per result.", tint: "bg-brand-sun text-brand-orange" },
  { icon: Building2, title: "Real Estate Marketing", desc: "Buyer, investor and site-visit pipelines for developers and brokerages.", tint: "bg-brand-sky text-accent" },
  { icon: Plane, title: "Immigration Marketing", desc: "Predictable, pre-screened applicant pipelines for visa consultancies.", tint: "bg-brand-sun text-brand-orange" },
  { icon: Megaphone, title: "Political Management", desc: "War-room digital operations — narrative, outreach and rapid response.", tint: "bg-brand-sky text-accent" },
  { icon: Code2, title: "Web Development", desc: "Fast, conversion-first websites and landing pages built on modern stacks.", tint: "bg-brand-sun text-brand-orange" },
  { icon: Palette, title: "Creative & Social Media", desc: "Design, content and social presence that make brands look like leaders.", tint: "bg-brand-sky text-accent" },
];

export default function WhatWeDo() {
  return (
    <section className="bg-paper py-14 sm:py-24 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="What We Do"
          title="Not a marketing agency. A growth and acquisition partner."
          description="We don't sell posts and impressions. We design, build and run the systems that produce customers — combining strategy, media, creative and technology under one roof."
        />
        <Stagger className="mt-8 sm:mt-16 grid grid-cols-2 gap-2.5 sm:gap-5 lg:grid-cols-3" delayChildren={0.08}>
          {capabilities.map((c) => (
            <StaggerItem key={c.title} className="h-full">
              <div className="group h-full flex flex-col justify-between rounded-xl sm:rounded-2xl border border-stone-200/90 bg-white p-3.5 sm:p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift">
                <div>
                  <span className={`flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl transition-transform duration-300 group-hover:scale-110 ${c.tint}`}>
                    <c.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <h3 className="mt-2.5 sm:mt-6 font-display text-xs sm:text-xl font-bold text-ink leading-snug">{c.title}</h3>
                  <p className="mt-1 sm:mt-3 text-[10.5px] sm:text-sm leading-relaxed text-ink/80 font-normal line-clamp-3 sm:line-clamp-none">{c.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
          <StaggerItem className="col-span-2 sm:col-span-1 h-full">
            <div className="flex h-full items-center justify-center rounded-xl sm:rounded-2xl border border-black bg-ink p-4 sm:p-8 shadow-card text-center">
              <p className="font-display text-xs sm:text-2xl font-bold leading-snug tracking-tight text-white">
                One partner.<br />
                <span className="text-accent">Strategy → Creative → Media → Tech.</span>
              </p>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
