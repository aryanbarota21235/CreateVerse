"use client";

import { ArrowRight, Phone } from "lucide-react";
import { useEnquiry } from "@/context/enquiry-context";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

interface LocationHeroButtonsProps {
  locationName: string;
}

export default function LocationHeroButtons({ locationName }: LocationHeroButtonsProps) {
  const { openEnquiry } = useEnquiry();

  const whatsappUrl = `https://wa.me/${site.phoneRaw.replace("+", "")}?text=${encodeURIComponent(
    `Hi CreateVerse, I would like to schedule a strategy consultation for our business in ${locationName}.`
  )}`;

  return (
    <div className="mt-6 sm:mt-9 flex flex-wrap items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto">
      <button
        type="button"
        onClick={() => openEnquiry(`Digital Marketing in ${locationName}`)}
        className="pressable group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-bold text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-accent-dim shadow-md hover:shadow-lg hover:shadow-accent/25 cursor-pointer whitespace-nowrap"
      >
        <span>Get {locationName} Growth Strategy</span>
        <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
      </button>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pressable flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-bold text-ink shadow-xs transition-all duration-150 hover:-translate-y-0.5 hover:border-[#25D366] hover:text-emerald-700 whitespace-nowrap"
      >
        <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#25D366]" />
        <span>WhatsApp Desk</span>
      </a>

      <a
        href={`tel:${site.phoneRaw}`}
        className="pressable hidden md:inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-paper-subtle px-4 py-3 sm:px-5 sm:py-3.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-ink hover:border-stone-300 transition-all"
      >
        <Phone className="h-3.5 w-3.5 text-stone-500" />
        <span>Direct Call: {site.phone}</span>
      </a>
    </div>
  );
}
