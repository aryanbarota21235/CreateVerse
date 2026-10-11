"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "@/components/reveal";
import Collapse from "@/components/collapse";
import { politicalFaqs } from "@/lib/political-faqs";


export default function PoliticalFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-white py-14 sm:py-20 border-t border-stone-200">
      <div className="container-site max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Operational Protocols
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-xs sm:text-base text-stone-600 font-normal">
              Key operational, legal, and compliance details regarding our political management retainers.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="divide-y divide-stone-200 overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-200 bg-white shadow-card">
            {politicalFaqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-5 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-sm sm:text-base font-bold text-ink">
                      {f.q}
                    </span>
                    <Plus
                      className={`h-4 w-4 sm:h-5 sm:w-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-accent" : "text-stone-400"
                      }`}
                    />
                  </button>
                  <Collapse open={isOpen} keepMounted>
                    <p className="px-5 pb-5 sm:px-8 sm:pb-6 text-xs sm:text-sm leading-relaxed text-stone-600 font-normal">
                      {f.a}
                    </p>
                  </Collapse>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
