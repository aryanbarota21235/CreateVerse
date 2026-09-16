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
    <div className={`mt-6 sm:mt-8 flex flex-wrap items-center gap-3 ${center ? "justify-center" : ""}`}>
      <button
        onClick={() => openEnquiry("political-management")}
        className="pressable group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-150 hover:-translate-y-0.5 hover:bg-accent-dim hover:shadow-lg hover:shadow-accent/25 cursor-pointer"
      >
        <MessageSquare className="h-4 w-4" />
        <span>Initiate War Room Consultation</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>

      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pressable inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-bold text-ink shadow-xs transition-all duration-150 hover:-translate-y-0.5 hover:border-[#25D366] hover:text-emerald-700"
      >
        <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
        <span>Direct Strategy Hotline</span>
      </a>
    </div>
  );
}
