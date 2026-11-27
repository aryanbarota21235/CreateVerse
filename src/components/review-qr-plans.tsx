"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, X } from "lucide-react";
import SignupForm from "@/app/services/google-review-qr/signup-form";
import PlanCards from "@/app/services/google-review-qr/plan-cards";
import type { PublicPlan } from "@/app/services/google-review-qr/plan-format";

/*
 * Google Review QR plans in a pop-up, on the service page: the plans, then "Choose" swaps the
 * pop-up to the sign-up form with that plan picked. The page passes its plans in; without them
 * they are loaded from /api/reviews/plans.
 */

export type Data = { plans: PublicPlan[]; categories: string[] };
let cache: Promise<Data> | null = null;
/** Starts loading the plans (on hover or first open), once per page view. */
export const loadPlans = () =>
  (cache ??= fetch("/api/reviews/plans")
    .then((r) => r.json() as Promise<Data>)
    .catch(() => {
      cache = null;
      return { plans: [], categories: [] };
    }));

export default function ReviewQrPlans({
  onClose,
  initial,
  startPlanId,
}: {
  onClose: () => void;
  initial?: Data;
  /** Open straight on the form with this plan picked ("" = form without a plan) */
  startPlanId?: string;
}) {
  const [data, setData] = useState<Data | null>(initial ?? null);
  const [step, setStep] = useState<"plans" | "form">(startPlanId !== undefined || (initial && !initial.plans.length) ? "form" : "plans");
  const [planId, setPlanId] = useState(startPlanId ?? initial?.plans.find((p) => p.popular)?.id ?? "");

  useEffect(() => {
    let live = true;
    if (!initial) {
      loadPlans().then((d) => {
        if (!live) return;
        setData(d);
        // No plans set up: straight to the form ("we'll share pricing on the call").
        if (!d.plans.length) setStep("form");
        else setPlanId((cur) => cur || (d.plans.find((p) => p.popular)?.id ?? ""));
      });
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      live = false;
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose, initial]);

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
        className={`relative max-h-[94dvh] w-full overflow-y-auto overscroll-contain rounded-t-[28px] bg-[#F3F7FB] text-[#102A43] sm:rounded-[28px] ${
          step === "plans" && plans.length >= 3 ? "max-w-5xl" : step === "plans" && plans.length === 2 ? "max-w-3xl" : step === "plans" ? "max-w-3xl" : "max-w-xl"
        }`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-2 bg-[#F3F7FB]/95 px-4 pb-2 pt-4 sm:px-5">
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
            <h2 className={`font-display text-[26px] font-bold leading-tight tracking-[-0.03em] sm:text-[34px] ${plans.length === 1 ? "text-center" : ""}`}>
              {plans.length === 1 ? "One plan. Pay after we call." : "Pick a plan. Pay after we call."}
            </h2>
            <p className={`mt-2 max-w-xl text-[14px] text-[#102A43]/65 sm:text-[15px] ${plans.length === 1 ? "mx-auto text-center" : ""}`}>
              Send the short form. We confirm on a call, you pay by UPI or bank transfer, and your QR goes live.
            </p>
            <div className="mt-5 sm:mt-6">
              <PlanCards plans={plans} onChoose={choose} compact />
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
