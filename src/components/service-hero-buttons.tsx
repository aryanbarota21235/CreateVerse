"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { useEnquiry } from "@/context/enquiry-context";

interface ServiceHeroButtonsProps {
  serviceName: string;
}

export default function ServiceHeroButtons({ serviceName }: ServiceHeroButtonsProps) {
  const { openEnquiry } = useEnquiry();

  const scrollToHowWeWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("how-we-work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mt-9 flex flex-wrap items-center gap-4">
      <button
        type="button"
        onClick={() => openEnquiry(serviceName)}
        className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-bold text-white transition-all duration-300 hover:bg-accent shadow-sm hover:shadow-md hover:shadow-accent/20"
      >
        <span>Get a Growth Strategy</span>
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </button>

      <button
        type="button"
        onClick={scrollToHowWeWork}
        className="group inline-flex items-center gap-2 rounded-full border border-black/[0.15] bg-white px-7 py-3.5 text-base font-bold text-ink shadow-sm transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-sm"
      >
        <span>See How We Work</span>
        <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5 text-ink/70 group-hover:text-accent" />
      </button>
    </div>
  );
}
