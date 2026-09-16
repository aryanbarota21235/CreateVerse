"use client";

import { MessageSquare, ArrowRight } from "lucide-react";
import { useEnquiry } from "@/context/enquiry-context";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

interface PoliticalHeroButtonsProps {
  center?: boolean;
}

export default function PoliticalHeroButtons({ center = false }: PoliticalHeroButtonsProps) {
  const { openEnquiry } = useEnquiry();

  return (
    <div className={`mt-6 sm:mt-8 flex flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto ${center ? "justify-center" : ""}`}>
      <button
        onClick={() => openEnquiry("political-management")}
        className="pressable group flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-accent px-2.5 py-2.5 sm:px-8 sm:py-3.5 text-[11px] sm:text-sm font-bold text-white shadow-md transition-all duration-150 hover:-translate-y-0.5 hover:bg-accent-dim hover:shadow-lg hover:shadow-accent/25 cursor-pointer whitespace-nowrap"
      >
        <MessageSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
        <span className="hidden min-[380px]:inline">Initiate Consultation</span>
        <span className="min-[380px]:hidden">Consultation</span>
        <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
      </button>

      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pressable flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-stone-300 bg-white px-2.5 py-2.5 sm:px-6 sm:py-3.5 text-[11px] sm:text-sm font-bold text-ink shadow-xs transition-all duration-150 hover:-translate-y-0.5 hover:border-[#25D366] hover:text-emerald-700 whitespace-nowrap"
      >
        <WhatsAppIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-[#25D366]" />
        <span>Talk on WhatsApp</span>
      </a>
    </div>
  );
}
