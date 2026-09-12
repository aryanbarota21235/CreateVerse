"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { site } from "@/lib/site";

export default function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 rounded-2xl border border-paper-line bg-white/95 px-3.5 py-2 shadow-xl backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <div className="text-xs">
            <p className="font-semibold text-ink">Chat on WhatsApp</p>
            <p className="text-[11px] text-ink/50">{site.phone}</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="ml-1 text-ink/30 hover:text-ink"
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
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_32px_rgba(37,211,102,0.5)]"
        aria-label="Chat with CreateVerse on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-white text-[9px] font-bold text-emerald-600 items-center justify-center">
            1
          </span>
        </span>
        <svg
          className="h-7 w-7 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.971.531 1.769.817 2.796.817 3.18 0 5.766-2.587 5.767-5.767.001-3.18-2.585-5.767-5.767-5.767zm3.394 8.172c-.144.405-.837.774-1.17.824-.312.045-.694.075-2.007-.468-1.574-.652-2.58-2.259-2.658-2.363-.078-.104-.636-.848-.636-1.616 0-.769.403-1.147.546-1.303.143-.156.312-.195.416-.195.104 0 .208.001.299.006.095.004.223-.036.349.266.126.303.431 1.05.469 1.127.039.078.065.169.013.273-.052.104-.078.169-.156.26-.078.091-.164.203-.234.273-.078.078-.159.162-.068.318.091.156.403.665.865 1.077.595.531 1.097.695 1.253.773.156.078.247.065.338-.039.091-.104.39-.455.494-.611.104-.156.208-.13.349-.078.143.052.908.428 1.064.506.156.078.26.117.299.182.039.065.039.377-.105.782zM12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5L2 22l5.14-1.31C8.59 21.49 10.24 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.63 0-3.15-.49-4.43-1.32l-.32-.21-3.08.79.82-2.99-.23-.34A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      </a>
    </div>
  );
}
