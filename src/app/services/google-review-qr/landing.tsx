"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Minus, Plus, Star } from "lucide-react";
import Demo from "./demo";
import PlanCards from "./plan-cards";
import ReviewQrPlans from "@/components/review-qr-plans";
import type { PublicPlan } from "./plan-format";

export type { PublicPlan };


const DISPLAY = "font-display";
const INK = "text-[#102A43]";

const STEPS = [
  { title: "Scan", body: "Your QR stands on the counter, table or reception. Any phone camera opens it. No app." },
  { title: "Tap the stars", body: "The customer rates you and picks a review that fits your business, or writes their own." },
  { title: "Post on Google", body: "The review is copied, Google opens, they paste and tap Post. Under a minute." },
];

const FAQS = [
  {
    q: "Does the customer post the review themselves?",
    a: "Yes. They choose the stars, pick or edit a suggested review, and post it from their own Google account. Nobody posts on their behalf.",
  },
  {
    q: "Which languages are the suggestions in?",
    a: "English, Hindi, Hinglish, Punjabi, Haryanvi, Marathi, Gujarati, Tamil, Telugu and more. You pick the languages for your business, customers choose theirs on the review page, and they can always edit the text.",
  },
  {
    q: "How do I pay?",
    a: "No payment on this page. Our team calls you to confirm the plan, then you pay by UPI or bank transfer. Your QR code goes live as soon as payment is received.",
  },
  {
    q: "I have more than one branch.",
    a: "Each branch gets its own QR code linked to its own Google listing. Tell us on the call and we'll set them all up.",
  },
];

export default function Landing({ plans, categories }: { plans: PublicPlan[]; categories: string[] }) {
  const data = useMemo(() => ({ plans, categories }), [plans, categories]);
  // null = closed; "plans" = the plans step; any other string = the form with that plan ("" = none)
  const [popup, setPopup] = useState<string | null>(null);
  const close = useCallback(() => setPopup(null), []);

  // Arriving from the homepage's "See plans" (?plans): open the plans pop-up straight away.
  useEffect(() => {
    const url = new URL(window.location.href);
    if (!url.searchParams.has("plans")) return;
    setPopup("plans");
    url.searchParams.delete("plans");
    window.history.replaceState(window.history.state, "", url.pathname + url.search + url.hash);
  }, []);

  const choose = (id: string) => setPopup(id);

  return (
    <div className={`${INK} bg-white`}>
      {/* Hero: the working demo is the point */}
      <section className="relative overflow-hidden bg-[#EAF2F8] pt-[84px] sm:pt-[96px]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:radial-gradient(#102A43_0.6px,transparent_0.6px)] [background-size:18px_18px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
          aria-hidden="true"
        />
        <div className="container-site relative grid items-start gap-12 pb-16 pt-6 sm:pb-24 lg:pt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
          <div className="max-w-xl lg:pt-16">
            <div className="flex items-center gap-1" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-[#F6B500] text-[#F6B500]" />
              ))}
            </div>
            <h1 className={`${DISPLAY} mt-5 text-[44px] font-extrabold leading-[0.98] tracking-[-0.035em] sm:text-[64px] lg:text-[76px]`}>
              Your happy customers, on Google.
            </h1>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-relaxed text-[#102A43]/75 sm:text-lg">
              A QR code for your counter. Customers scan it, tap the stars, pick a review that fits your business and post it.
              It takes them under a minute and needs no app.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#plans"
                onClick={(e) => {
                  e.preventDefault();
                  setPopup("plans");
                }}
                className="inline-flex items-center rounded-full bg-[#0284C7] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_-10px_rgba(2,132,199,0.7)] transition hover:bg-[#0369A1]"
              >
                See plans
              </a>
              <a
                href="#how"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("how")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center rounded-full px-5 py-3.5 text-sm font-bold text-[#102A43] ring-1 ring-[#102A43]/15 transition hover:bg-white">
                How it works
              </a>
            </div>
            <ul className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-[#102A43]/10 pt-6 sm:gap-5">
              {[
                ["<1 min", "to post a review"],
                ["12+", "Indian languages"],
                ["No app", "just the camera"],
              ].map(([big, small]) => (
                <li key={big}>
                  <p className={`${DISPLAY} text-[22px] font-bold leading-tight sm:text-2xl`}>{big}</p>
                  <p className="mt-0.5 text-[13px] leading-snug text-[#102A43]/60 sm:text-sm">{small}</p>
                </li>
              ))}
            </ul>
          </div>
          <Demo />
        </div>
      </section>

      {/* How it works: a real sequence, so it is numbered */}
      <section id="how" className="scroll-mt-24 py-20 sm:py-28">
        <div className="container-site">
          <h2 className={`${DISPLAY} max-w-2xl text-4xl font-bold tracking-[-0.03em] sm:text-5xl`}>Three taps from your counter to your Google listing.</h2>
          <ol className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {STEPS.map((s, i) => (
              <li key={s.title} className="border-t-2 border-[#102A43] pt-6">
                <span className={`${DISPLAY} flex size-10 items-center justify-center rounded-full bg-[#102A43] text-lg font-bold text-white`} aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className={`${DISPLAY} mt-4 text-2xl font-bold`}>{s.title}</h3>
                <p className="mt-2 max-w-xs leading-relaxed text-[#102A43]/70">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing */}
      <section id="plans" className="bg-[#EAF2F8] py-16 sm:py-20">
        <div className="container-site">
          <div className="max-w-2xl">
            <h2 className={`${DISPLAY} text-4xl font-bold tracking-[-0.03em] sm:text-5xl`}>Simple plans. Pay after we call you.</h2>
            <p className="mt-4 text-[#102A43]/70">Pick a plan and send the form. We confirm on a call, you pay by UPI or bank transfer, and your QR code goes live.</p>
          </div>

          {plans.length === 0 ? (
            <div className="mt-10 rounded-3xl bg-white p-8 ring-1 ring-[#102A43]/10">
              <p className={`${DISPLAY} text-2xl font-bold`}>Pricing on a quick call</p>
              <p className="mt-2 text-[#102A43]/70">Send the form below and we&apos;ll share plans for your business.</p>
              <button onClick={() => choose("")} className="mt-5 rounded-full bg-[#0284C7] px-6 py-3 text-sm font-bold text-white hover:bg-[#0369A1]">
                Go to the form
              </button>
            </div>
          ) : (
            <div id="plan-cards" className="mt-10">
              <PlanCards plans={plans} onChoose={choose} />
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#102A43]/10 py-20 sm:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <h2 className={`${DISPLAY} text-4xl font-bold tracking-[-0.03em] sm:text-5xl`}>Questions owners ask.</h2>
          <div className="divide-y divide-[#102A43]/10 border-y border-[#102A43]/10">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus className="h-5 w-5 shrink-0 group-open:hidden" />
                  <Minus className="hidden h-5 w-5 shrink-0 group-open:block" />
                </summary>
                <p className="mt-3 max-w-2xl leading-relaxed text-[#102A43]/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {popup !== null && <ReviewQrPlans onClose={close} initial={data} startPlanId={popup === "plans" ? undefined : popup} />}
    </div>
  );
}
