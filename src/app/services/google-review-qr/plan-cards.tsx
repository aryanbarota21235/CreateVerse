"use client";

import { Check } from "lucide-react";
import { inr, period, type PublicPlan } from "./plan-format";

/*
 * Google Review QR pricing cards, used on the service page and in the plans pop-up.
 * Ink and sky only (no yellow): the popular plan is a deep navy card with a soft glow,
 * the others are white with a hairline.
 */
export default function PlanCards({ plans, onChoose, compact = false }: { plans: PublicPlan[]; onChoose: (id: string) => void; compact?: boolean }) {
  const cols = plans.length >= 3 ? "md:grid-cols-3" : plans.length === 2 ? `sm:grid-cols-2 ${compact ? "" : "max-w-4xl"}` : "mx-auto w-full max-w-md";
  return (
    <div className={`grid items-stretch gap-4 sm:gap-5 ${cols}`}>
      {plans.map((p) => {
        const hot = p.popular;
        return (
          <div
            key={p.id}
            className={`relative flex flex-col overflow-hidden rounded-[26px] ${compact ? "p-6 sm:p-7" : "p-7 sm:p-9"} ${
              hot
                ? "bg-gradient-to-b from-[#132F4C] to-[#0B1B2E] text-white shadow-[0_30px_60px_-28px_rgba(11,27,46,0.75)] ring-1 ring-white/10"
                : "bg-white text-[#102A43] shadow-[0_1px_2px_rgba(16,42,67,0.05),0_18px_40px_-28px_rgba(16,42,67,0.35)] ring-1 ring-[#102A43]/[0.08]"
            }`}
          >
            {hot && (
              <span
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(closest-side,rgba(56,189,248,0.35),transparent)]"
                aria-hidden
              />
            )}
            <div className="relative flex items-center justify-between gap-3">
              <h3 className="font-display text-[17px] font-semibold tracking-tight">{p.name}</h3>
              {hot && (
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-sky-100 ring-1 ring-white/15">
                  Most popular
                </span>
              )}
            </div>
            {p.description && <p className={`relative mt-1.5 text-sm ${hot ? "text-white/60" : "text-[#102A43]/55"}`}>{p.description}</p>}

            <div className={`relative ${compact ? "mt-5" : "mt-7"} flex items-baseline gap-1.5`}>
              <span className={`font-display ${compact ? "text-[40px]" : "text-[46px] sm:text-[52px]"} font-semibold leading-none tracking-[-0.04em]`}>
                {inr(p.priceInr)}
              </span>
              <span className={`text-sm ${hot ? "text-white/55" : "text-[#102A43]/50"}`}>/ {period(p.months)}</span>
            </div>
            <p className={`relative mt-2 h-5 text-[13px] ${hot ? "text-sky-200/80" : "text-[#0369A1]"}`}>
              {p.months > 1 ? `Just ${inr(Math.round(p.priceInr / p.months))} a month` : ""}
            </p>

            <div className={`relative my-5 h-px ${hot ? "bg-white/10" : "bg-[#102A43]/[0.08]"}`} />

            {p.features.length > 0 && (
              <ul className="relative space-y-3 text-[14.5px]">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className={`mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full ${hot ? "bg-sky-400/15 text-sky-300" : "bg-sky-50 text-[#0284C7]"}`}>
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    <span className={hot ? "text-white/85" : "text-[#102A43]/80"}>{f}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className={`relative mt-auto ${compact ? "pt-6" : "pt-8"}`}>
              <button
                onClick={() => onChoose(p.id)}
                className={`w-full rounded-full py-3.5 text-sm font-semibold transition ${
                  hot ? "bg-white text-[#0B1B2E] hover:bg-sky-50" : "bg-[#102A43] text-white hover:bg-[#0B1B2E]"
                }`}
              >
                {`Choose ${p.name}`}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
