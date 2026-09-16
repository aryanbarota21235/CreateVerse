"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export default function WhatsAppWidget() {
  const pathname = usePathname();
  const [showTooltip, setShowTooltip] = useState(true);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2">
      {showTooltip && (
        <div className="flex items-center gap-2 rounded-2xl border border-stone-200/90 sm:border-black/[0.12] bg-white px-3 py-1.5 sm:px-3.5 sm:py-2 shadow-xl">
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <div className="text-xs">
              <p className="font-bold text-ink group-hover:text-emerald-600 transition-colors">Chat on WhatsApp</p>
              <p className="text-[11px] font-medium text-ink/80">{site.phone}</p>
            </div>
          </a>
          <button
            onClick={() => setShowTooltip(false)}
            className="ml-1 text-ink/50 hover:text-ink cursor-pointer p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_32px_rgba(37,211,102,0.5)]"
        aria-label="Chat with CreateVerse on WhatsApp"
      >
        <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 flex h-3.5 w-3.5 sm:h-4 sm:w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-white text-[8px] sm:text-[9px] font-bold text-emerald-600 items-center justify-center shadow-xs">
            1
          </span>
        </span>
        <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
      </a>
    </div>
  );
}
