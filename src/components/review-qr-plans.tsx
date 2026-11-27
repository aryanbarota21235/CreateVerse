"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, Check, X } from "lucide-react";
import SignupForm from "@/app/services/google-review-qr/signup-form";
import { inr, period, type PublicPlan } from "@/app/services/google-review-qr/plan-format";

/*
 * Google Review QR plans in a pop-up, opened from the homepage: live plans from the admin,
 * "Choose" swaps the pop-up to the sign-up form with that plan picked. Two taps from the
 * homepage to the form, without leaving the page.
 */

type Data = { plans: PublicPlan[]; categories: string[] };
let cache: Promise<Data> | null = null;
/** Starts loading the plans (on hover or first open), once per page view. */
export const loadPlans = () =>
  (cache ??= fetch("/api/reviews/plans")
    .then((r) => r.json() as Promise<Data>)
    .catch(() => {
      cache = null;
      return { plans: [], categories: [] };
    }));

export default function ReviewQrPlans({ onClose }: { onClose: () => void }) {
  const [data, setData] = useState<Data | null>(null);
  const [step, setStep] = useState<"plans" | "form">("plans");
  const [planId, setPlanId] = useState("");

  useEffect(() => {
    let live = true;
    loadPlans().then((d) => {
      if (!live) return;
      setData(d);
      // No plans set up: straight to the form ("we'll share pricing on the call").
      if (!d.plans.length) setStep("form");
      else setPlanId(d.plans.find((p) => p.popular)?.id ?? "");
    });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      live = false;
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  const plans = data?.plans ?? [];
  const choose = (id: string) => {
    setPlanId(id);
    setStep("form");
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-[#102A43]/55 sm:items-center sm:p-4 sm:backdrop-blur-sm"
      onMouseDown={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={step === "plans" ? "Google Review QR plans" : "Sign up for Google Review QR"}
        onMouseDown={(e) => e.stopPropagation()}
        className={`relative max-h-[94dvh] w-full overflow-y-auto overscroll-contain rounded-t-[28px] bg-[#EAF2F8] text-[#102A43] sm:rounded-[28px] ${
          step === "plans" && plans.length >= 3 ? "max-w-5xl" : step === "plans" && plans.length === 2 ? "max-w-3xl" : "max-w-xl"
        }`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-2 bg-[#EAF2F8]/95 px-4 pb-2 pt-4 sm:px-5">
          {step === "form" && plans.length > 0 ? (
            <button
              onClick={() => setStep("plans")}
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-white/80 px-3 text-sm font-semibold hover:bg-white"
            >
              <ArrowLeft size={16} /> All plans
            </button>
          ) : (
            <span />
          )}
          <button onClick={onClose} aria-label="Close" className="flex size-9 items-center justify-center rounded-full bg-white/80 hover:bg-white">
            <X size={18} />
          </button>
        </div>

        {!data ? (
          <div className="grid gap-4 px-6 pb-8 pt-2 sm:grid-cols-3 sm:px-8">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-72 animate-pulse rounded-[24px] bg-white/70" />
            ))}
          </div>
        ) : step === "form" ? (
          <div className="-mt-6">
            <SignupForm plans={plans} categories={data.categories} planId={planId} onPlanChange={setPlanId} />
          </div>
        ) : (
          <div className="px-5 pb-6 sm:px-8 sm:pb-9">
            <h2 className="font-display text-[28px] font-bold leading-tight tracking-[-0.03em] sm:text-4xl">Pick a plan. Pay after we call.</h2>
            <p className="mt-2 max-w-xl text-[14px] text-[#102A43]/65 sm:text-[15px]">
              Choose a plan and send the short form. We confirm on a call, you pay by UPI or bank transfer, and your QR goes live.
            </p>
            <div className={`mt-6 grid items-stretch gap-4 sm:mt-8 ${plans.length >= 3 ? "md:grid-cols-3" : plans.length === 2 ? "sm:grid-cols-2" : ""}`}>
              {plans.map((p) => {
                const hot = p.popular;
                return (
                  <div
                    key={p.id}
                    className={`relative flex flex-col rounded-[24px] p-6 sm:p-7 ${
                      hot ? "bg-[#102A43] text-white shadow-[0_24px_50px_-24px_rgba(16,42,67,0.65)]" : "bg-white ring-1 ring-[#102A43]/10"
                    }`}
                  >
                    {hot && (
                      <span className="absolute -top-3 left-6 rounded-full bg-[#F6B500] px-3 py-1 text-xs font-bold text-[#102A43]">Most popular</span>
                    )}
                    <h3 className="font-display text-lg font-bold">{p.name}</h3>
                    {p.description && <p className={`mt-1 text-sm ${hot ? "text-white/65" : "text-[#102A43]/60"}`}>{p.description}</p>}
                    <p className="mt-4 flex items-baseline gap-1.5">
                      <span className="font-display text-4xl font-extrabold tracking-[-0.03em]">{inr(p.priceInr)}</span>
                      <span className={`text-sm ${hot ? "text-white/60" : "text-[#102A43]/55"}`}>/ {period(p.months)}</span>
                    </p>
                    {p.months > 1 && (
                      <p className={`mt-0.5 text-sm ${hot ? "text-white/60" : "text-[#102A43]/55"}`}>That&apos;s {inr(Math.round(p.priceInr / p.months))} a month</p>
                    )}
                    {p.features.length > 0 && (
                      <ul className="mt-5 space-y-2.5 text-[14px]">
                        {p.features.map((f) => (
                          <li key={f} className="flex gap-2.5">
                            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${hot ? "text-[#F6B500]" : "text-[#0284C7]"}`} strokeWidth={3} />
                            <span className={hot ? "text-white/90" : ""}>{f}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-auto pt-6">
                      <button
                        onClick={() => choose(p.id)}
                        className={`w-full rounded-full py-3.5 text-sm font-bold transition ${
                          hot ? "bg-[#F6B500] text-[#102A43] hover:bg-[#ffc61a]" : "bg-[#102A43] text-white hover:bg-[#1b3a57]"
                        }`}
                      >
                        {`Choose ${p.name}`}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
