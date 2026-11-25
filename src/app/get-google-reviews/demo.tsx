"use client";

import { useEffect, useState } from "react";
import { Check, RefreshCw, Star } from "lucide-react";
import { templateReviews } from "@/lib/reviews/templates";
import type { ReviewLanguage } from "@/lib/reviews/types";

/* The hero's working demo: the real review page, shrunk into a phone, using the free review writer. */

const SAMPLES = [
  { label: "Restaurant", name: "Sharma Dhaba", category: "Restaurant / Café", highlights: "dal makhani, tandoori roti" },
  { label: "Clinic", name: "City Dental Care", category: "Dental Clinic", highlights: "" },
  { label: "Salon", name: "Glow Salon", category: "Salon / Spa", highlights: "hair spa" },
  { label: "Gym", name: "Iron Fitness", category: "Gym / Fitness", highlights: "" },
];
const LANGS: ReviewLanguage[] = ["English", "Hinglish", "Hindi"];
const WORDS = ["", "Poor", "Below average", "Average", "Good", "Excellent"];

export default function Demo() {
  const [sample, setSample] = useState(0);
  const [lang, setLang] = useState<ReviewLanguage>("English");
  const [rating, setRating] = useState(5);
  const [picked, setPicked] = useState(0);
  const [reviews, setReviews] = useState<string[]>([]);

  const s = SAMPLES[sample];
  const refresh = () => {
    setReviews(templateReviews({ name: s.name, category: s.category, highlights: s.highlights, language: lang }, rating, 3));
    setPicked(0);
  };
  // Random text, so it is written after mount (server and browser would disagree otherwise).
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(refresh, [sample, lang, rating]);

  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      {/* Controls */}
      <div className="mb-4 space-y-2">
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Business type">
          {SAMPLES.map((x, i) => (
            <button
              key={x.label}
              onClick={() => setSample(i)}
              aria-pressed={sample === i}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                sample === i ? "bg-[#102A43] text-white" : "bg-white text-[#102A43]/70 ring-1 ring-[#102A43]/10 hover:text-[#102A43]"
              }`}
            >
              {x.label}
            </button>
          ))}
        </div>
        <div className="flex gap-1.5" role="group" aria-label="Review language">
          {LANGS.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                lang === l ? "bg-[#F6B500] text-[#102A43]" : "bg-white text-[#102A43]/70 ring-1 ring-[#102A43]/10 hover:text-[#102A43]"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Phone */}
      <div className="rounded-[44px] bg-[#102A43] p-2.5 shadow-[0_30px_60px_-20px_rgba(16,42,67,0.45)]">
        <div className="relative overflow-hidden rounded-[36px] bg-[#F5F8F6] px-4 pb-5 pt-9">
          <div className="absolute left-1/2 top-2.5 h-5 w-24 -translate-x-1/2 rounded-full bg-[#102A43]" aria-hidden="true" />
          <div className="rounded-2xl bg-white px-4 py-3 ring-1 ring-slate-200">
            <p className="font-semibold text-slate-900">{s.name}</p>
            <p className="text-xs text-slate-500">{s.category}</p>
          </div>

          <div className="mt-3 rounded-2xl bg-white p-3 ring-1 ring-slate-200">
            <div className="flex justify-between gap-1" role="radiogroup" aria-label="Try a rating">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  role="radio"
                  aria-checked={rating === n}
                  aria-label={`${n} star${n > 1 ? "s" : ""}`}
                  onClick={() => setRating(n)}
                  className={`flex aspect-square flex-1 items-center justify-center rounded-lg border transition ${
                    n <= rating ? "border-amber-200 bg-amber-50" : "border-slate-200"
                  }`}
                >
                  <Star size={18} strokeWidth={1.6} className={n <= rating ? "fill-[#F6B500] text-[#F6B500]" : "text-slate-300"} />
                </button>
              ))}
            </div>
            <p className="mt-1.5 text-center text-xs font-medium text-slate-600">{WORDS[rating]}</p>
          </div>

          <div className="mt-3 rounded-2xl bg-white ring-1 ring-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2">
              <span className="text-xs font-semibold text-slate-900">Pick a review</span>
              <button onClick={refresh} className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0369A1]">
                <RefreshCw size={11} /> New ideas
              </button>
            </div>
            <div className="space-y-1.5 p-2" aria-live="polite">
              {reviews.map((r, i) => (
                <button
                  key={r}
                  onClick={() => setPicked(i)}
                  className={`flex w-full items-start gap-2 rounded-lg border p-2 text-left text-[12px] leading-snug text-slate-800 ${
                    picked === i ? "border-[#0284C7] bg-sky-50/70" : "border-slate-200"
                  }`}
                >
                  <span className={`mt-0.5 flex size-3.5 shrink-0 items-center justify-center rounded-full border ${picked === i ? "border-[#0284C7] bg-[#0284C7] text-white" : "border-slate-300"}`}>
                    {picked === i && <Check size={9} strokeWidth={3} />}
                  </span>
                  {r}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-3 rounded-xl bg-[#0284C7] py-2.5 text-center text-[13px] font-semibold text-white">Copy &amp; post on Google</div>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-[#102A43]/55">Tap the stars: this is the page your customers see.</p>
    </div>
  );
}
