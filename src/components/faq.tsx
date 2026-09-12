"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import type { FAQ } from "@/lib/services";

export default function Faq({ items, dark = false }: { items: FAQ[]; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div
      className={`divide-y overflow-hidden rounded-2xl border ${
        dark ? "divide-white/15 border-white/20 bg-ink-soft" : "divide-stone-200 border-stone-200 bg-white shadow-card"
      }`}
    >
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-8"
              aria-expanded={isOpen}
            >
              <span className={`font-display text-base font-bold sm:text-lg ${dark ? "text-white" : "text-ink"}`}>
                {f.q}
              </span>
              <Plus
                className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-45 text-brand-orange" : dark ? "text-white/70" : "text-ink/70"
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className={`px-6 pb-6 text-sm leading-relaxed sm:px-8 ${dark ? "text-white/80" : "text-ink/80 font-normal"}`}>
                    {f.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
