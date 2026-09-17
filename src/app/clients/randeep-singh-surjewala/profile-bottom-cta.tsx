"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, ArrowRight, ArrowLeft } from "lucide-react";
import { useEnquiry } from "@/context/enquiry-context";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export default function ProfileBottomCTA() {
  const { openEnquiry } = useEnquiry();

  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
      <button
        onClick={() => openEnquiry("political-management")}
        className="pressable group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-accent-dim hover:shadow-lg hover:shadow-accent/25 cursor-pointer"
      >
        <MessageSquare className="h-4 w-4" />
        <span>Political War Room Enquiry</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pressable inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-ink hover:border-[#25D366] hover:bg-[#25D366]/[0.05] hover:text-[#25D366] transition-all shadow-2xs"
      >
        <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
        <span>WhatsApp Desk</span>
      </a>

      <Link
        href="/clients"
        className="pressable inline-flex items-center gap-1.5 rounded-full border border-stone-300 bg-white px-5 py-3 text-xs sm:text-sm font-semibold text-stone-700 hover:border-stone-400 hover:text-ink transition-all shadow-2xs"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Leaders</span>
      </Link>
    </div>
  );
}
