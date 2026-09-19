"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useEnquiry } from "@/context/enquiry-context";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export default function AcademyHeroButtons({
  className = "",
}: {
  className?: string;
}) {
  const { openEnquiry } = useEnquiry();

  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello CreateVerse, I would like to know details about your practical digital marketing training."
  )}`;

  return (
    <div className={`flex flex-wrap items-center gap-3 sm:gap-4 ${className}`}>
      <button
        onClick={() => openEnquiry("Digital Marketing Training")}
        className="pressable group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-white shadow-md transition-all hover:bg-accent hover:shadow-lg cursor-pointer"
      >
        <span>Enquire for Training</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pressable inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold text-ink shadow-xs hover:border-[#25D366] hover:text-[#1EBE5D] transition-all cursor-pointer"
      >
        <WhatsAppIcon className="h-4 w-4 fill-current text-[#25D366]" />
        <span>Talk on WhatsApp</span>
      </a>
    </div>
  );
}
