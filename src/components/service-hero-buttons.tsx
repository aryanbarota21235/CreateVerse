"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { useEnquiry } from "@/context/enquiry-context";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

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

  const whatsappUrl = `${site.whatsappUrl}&text=${encodeURIComponent(
    `Hi CreateVerse, I would like to enquire about your ${serviceName} services.`
  )}`;

  return (
    <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={() => openEnquiry(serviceName)}
        className="pressable group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-bold text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-accent-dim shadow-md hover:shadow-lg hover:shadow-accent/25 cursor-pointer"
      >
        <span>Get a Growth Strategy</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pressable inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-bold text-ink shadow-xs transition-all duration-150 hover:-translate-y-0.5 hover:border-[#25D366] hover:text-emerald-700"
      >
        <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
        <span>Direct Strategy Hotline</span>
      </a>

      <button
        type="button"
        onClick={scrollToHowWeWork}
        className="pressable group inline-flex items-center justify-center gap-1.5 rounded-full border border-stone-200 bg-[#F8FAFC] px-4 py-3 text-xs sm:text-sm font-bold text-ink/80 transition-all duration-150 hover:border-accent hover:text-accent cursor-pointer"
      >
        <span>See How We Work</span>
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
      </button>
    </div>
  );
}
