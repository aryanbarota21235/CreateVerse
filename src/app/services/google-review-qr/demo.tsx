"use client";

import { useEffect, useState } from "react";
import { Shuffle, Star } from "lucide-react";
import { templateReviews } from "@/lib/reviews/templates";

/*
 * The hero's demo: the real customer page, shrunk into a phone, at 5 stars.
 * Visitors switch business type and language and see the suggestions change.
 */

const SAMPLES = [
  { label: "Restaurant", name: "Sharma Dhaba", category: "Restaurant", highlights: "dal makhani, tandoori roti" },
  { label: "Clinic", name: "City Care Clinic", category: "Clinic", highlights: "" },
  { label: "Dentist", name: "Smile Dental", category: "Dental Clinic", highlights: "" },
  { label: "Salon", name: "Glow Salon", category: "Salon", highlights: "hair spa" },
  { label: "Gym", name: "Iron Fitness", category: "Gym", highlights: "" },
]
const LANGS = ["English", "Hindi", "Hinglish", "Punjabi"];

export default function Demo() {
  const [sample, setSample] = useState(0);
  const [lang, setLang] = useState("English");
  const [picked, setPicked] = useState(0);
  const [reviews, setReviews] = useState<string[]>([]);

  const s = SAMPLES[sample];
  const refresh = () => {
    setReviews(templateReviews({ name: s.name, category: s.category, highlights: s.highlights, language: lang }, 5, 3));
    setPicked(0);
  };
  // Random text, so it is written after mount (server and browser would disagree otherwise).
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(refresh, [sample, lang]);

  const chip = (on: boolean, gold = false) =>
    `shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
      on ? (gold ? "bg-[#0284C7] text-white" : "bg-[#102A43] text-white") : "bg-white text-[#102A43]/70 ring-1 ring-[#102A43]/10 hover:text-[#102A43]"
    }`;

  return (
    <div className="relative mx-auto w-full min-w-0 max-w-[360px]">
      {/* Controls */}
      <div className="mb-4 space-y-2">
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Business type">
          {SAMPLES.map((x, i) => (
            <button key={x.label} onClick={() => setSample(i)} aria-pressed={sample === i} className={chip(sample === i)}>
              {x.label}
            </button>
          ))}
          <span className="shrink-0 rounded-full px-2 py-1.5 text-xs font-semibold text-[#102A43]/55">and more</span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Review language">
          {LANGS.map((l) => (
            <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l} className={chip(lang === l, true)}>
              {l}
            </button>
          ))}
          <span className="shrink-0 rounded-full px-2 py-1.5 text-xs font-semibold text-[#102A43]/55">and many more</span>
        </div>
      </div>

      {/* Phone: same look as the real customer page, in a real phone's shape (about 9 by 19.5) */}
      <div className="relative mx-auto w-full max-w-[318px] sm:max-w-[336px]">
        {/* Side buttons */}
        <span className="absolute -left-[3px] top-[18%] h-8 w-[3px] rounded-l bg-[#0B1B2E]" aria-hidden="true" />
        <span className="absolute -left-[3px] top-[26%] h-14 w-[3px] rounded-l bg-[#0B1B2E]" aria-hidden="true" />
        <span className="absolute -right-[3px] top-[24%] h-20 w-[3px] rounded-r bg-[#0B1B2E]" aria-hidden="true" />
        <div className="rounded-[54px] bg-gradient-to-b from-[#3A4C63] via-[#1A2E45] to-[#0B1B2E] p-[3px] shadow-[0_40px_80px_-30px_rgba(11,27,46,0.65)]">
          <div className="rounded-[51px] bg-[#0B1B2E] p-[9px]">
            <div
              className="relative flex aspect-[9/19.5] flex-col overflow-hidden rounded-[42px]"
              style={{ backgroundImage: "linear-gradient(180deg, #E3F0FA 0%, #F4F7FA 42%)" }}
            >
              {/* Status bar and Dynamic Island */}
              <div className="flex items-center justify-between px-7 pt-3.5 text-[12px] font-semibold text-slate-900" aria-hidden="true">
                <span>9:41</span>
                <span className="h-[26px] w-[92px] rounded-full bg-[#0B1B2E]" />
                <span className="flex items-center gap-1">
                  <span className="flex items-end gap-[2px]">
                    <span className="h-[4px] w-[3px] rounded-sm bg-slate-900" />
                    <span className="h-[6px] w-[3px] rounded-sm bg-slate-900" />
                    <span className="h-[8px] w-[3px] rounded-sm bg-slate-900" />
                    <span className="h-[10px] w-[3px] rounded-sm bg-slate-900" />
                  </span>
                  <span className="ml-1 flex h-[11px] w-[22px] items-center rounded-[3px] border border-slate-900/40 p-[1.5px]">
                    <span className="h-full w-[75%] rounded-[1.5px] bg-slate-900" />
                  </span>
                </span>
              </div>

              <div className="flex min-h-0 flex-1 flex-col px-3.5 pb-2 pt-4">
                <div className="flex flex-col items-center text-center">
                  <p className="text-[17px] font-semibold tracking-tight text-slate-900">{s.name}</p>
                  <p className="text-[11px] text-slate-500">{s.label}</p>
                </div>

                <div className="mt-3 flex min-h-0 flex-1 flex-col overflow-hidden rounded-[22px] bg-white shadow-[0_10px_30px_-18px_rgba(15,23,42,0.3)]">
                  <div className="px-4 pb-3 pt-4 text-center">
                    <p className="text-[13px] font-semibold text-slate-900">How was your visit?</p>
                    <div className="mt-2 flex justify-center gap-1" aria-label="5 stars">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star key={i} size={25} strokeWidth={1.4} className="fill-[#FBBC04] text-[#FBBC04]" />
                      ))}
                    </div>
                    <p className="mt-1 text-[11px] font-semibold text-emerald-700">Excellent</p>
                  </div>
                  <div className="flex min-h-0 flex-1 flex-col border-t border-slate-100 px-2.5 pb-2.5 pt-2.5">
                    <div className="flex items-center justify-between px-1">
                      <span className="text-[11px] font-semibold text-slate-900">Pick what fits, then edit</span>
                      <button onClick={refresh} aria-label="Show other suggestions" className="text-slate-500 hover:text-slate-900">
                        <Shuffle size={13} />
                      </button>
                    </div>
                    <div className="mt-1.5 min-h-0 flex-1 space-y-1.5 overflow-hidden" aria-live="polite">
                      {reviews.map((r, i) => (
                        <button
                          key={r}
                          onClick={() => setPicked(i)}
                          className={`block w-full rounded-xl px-3 py-2 text-left text-[12px] leading-snug ${
                            picked === i ? "bg-sky-50 text-slate-900 ring-2 ring-[#0284C7]" : "bg-slate-50 text-slate-700"
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-3 rounded-2xl bg-slate-900 py-3 text-center text-[13px] font-semibold text-white">Copy and post on Google</div>
                <p className="mt-2 text-center text-[10px] text-slate-400">Powered by CreateVerse</p>
              </div>
              {/* Home indicator */}
              <span className="mx-auto mb-2 h-[5px] w-[120px] shrink-0 rounded-full bg-slate-900/80" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-[#102A43]/55">This is the page your customers see after scanning.</p>
    </div>
  );
}
