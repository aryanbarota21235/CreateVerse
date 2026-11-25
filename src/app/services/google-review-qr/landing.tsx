"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Check, Minus, Plus, Star, X } from "lucide-react";
import Demo from "./demo";
import SignupForm from "./signup-form";
import { inr, period, type PublicPlan } from "./plan-format";

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

export default function Landing({ plans }: { plans: PublicPlan[] }) {
  const popular = plans.find((p) => p.popular)?.id;
  const [planId, setPlanId] = useState(popular ?? (plans.length === 1 ? plans[0].id : ""));
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    if (!formOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setFormOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [formOpen]);

  // Bring the whole pricing block into view, clear of the fixed navbar.
  function scrollToPlans() {
    // Aim at the cards themselves (just under the navbar) so every card shows in full;
    // on tall screens the heading above stays in view too.
    const cards = document.getElementById("plan-cards") ?? document.getElementById("plans");
    if (!cards) return;
    const rect = cards.getBoundingClientRect();
    const navbar = 100;
    const room = window.innerHeight - navbar;
    const extra = Math.max(0, Math.min(200, (room - rect.height) / 2));
    window.scrollTo({ top: rect.top + window.scrollY - navbar - extra, behavior: "smooth" });
  }

  function choose(id: string) {
    setPlanId(id);
    setFormOpen(true);
  }

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
                  scrollToPlans();
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
            <ul className="mt-10 grid max-w-lg grid-cols-3 gap-5 border-t border-[#102A43]/10 pt-6 text-sm">
              <li>
                <p className={`${DISPLAY} text-2xl font-bold`}>&lt;1 min</p>
                <p className="mt-0.5 leading-snug text-[#102A43]/60">for a customer to post a review</p>
              </li>
              <li>
                <p className={`${DISPLAY} text-2xl font-bold`}>12+</p>
                <p className="mt-0.5 leading-snug text-[#102A43]/60">Indian languages, their choice</p>
              </li>
              <li>
                <p className={`${DISPLAY} text-2xl font-bold`}>1 scan</p>
                <p className="mt-0.5 leading-snug text-[#102A43]/60">with any phone camera, no app</p>
              </li>
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
              <li key={s.title} className="relative border-t-2 border-[#102A43] pt-6">
                <span className={`${DISPLAY} absolute -top-[2px] right-0 -translate-y-full pb-1 text-6xl font-extrabold leading-none text-[#102A43]/[0.08]`} aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className={`${DISPLAY} text-2xl font-bold`}>{s.title}</h3>
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
            <div id="plan-cards" className={`mt-10 grid items-stretch gap-5 ${plans.length === 2 ? "md:grid-cols-2 max-w-4xl" : plans.length >= 3 ? "md:grid-cols-3" : "max-w-md"}`}>
              {plans.map((p) => {
                const hot = p.popular;
                return (
                  <div
                    key={p.id}
                    className={`relative flex flex-col rounded-[28px] p-7 sm:p-8 ${
                      hot ? "bg-[#102A43] text-white shadow-[0_30px_60px_-25px_rgba(16,42,67,0.6)] md:-my-3 md:py-10" : "bg-white ring-1 ring-[#102A43]/10"
                    }`}
                  >
                    {hot && (
                      <span className="absolute -top-3 left-7 rounded-full bg-[#F6B500] px-3 py-1 text-xs font-bold text-[#102A43]">Most popular</span>
                    )}
                    <h3 className={`${DISPLAY} text-xl font-bold`}>{p.name}</h3>
                    {p.description && <p className={`mt-1 text-sm ${hot ? "text-white/65" : "text-[#102A43]/60"}`}>{p.description}</p>}
                    <p className="mt-6 flex items-baseline gap-1.5">
                      <span className={`${DISPLAY} text-5xl font-extrabold tracking-[-0.03em]`}>{inr(p.priceInr)}</span>
                      <span className={`text-sm ${hot ? "text-white/60" : "text-[#102A43]/55"}`}>/ {period(p.months)}</span>
                    </p>
                    {p.months > 1 && (
                      <p className={`mt-1 text-sm ${hot ? "text-white/60" : "text-[#102A43]/55"}`}>That&apos;s {inr(Math.round(p.priceInr / p.months))} a month</p>
                    )}
                    {p.features.length > 0 && (
                      <ul className="mt-7 space-y-3 text-[15px]">
                        {p.features.map((f) => (
                          <li key={f} className="flex gap-2.5">
                            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${hot ? "text-[#F6B500]" : "text-[#0284C7]"}`} strokeWidth={3} />
                            <span className={hot ? "text-white/90" : ""}>{f}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-auto pt-8">
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

      {/* Portalled to <body>: the site's page wrapper uses a transform, which traps position:fixed */}
      {formOpen && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-[#102A43]/50 backdrop-blur-sm sm:items-center sm:p-4"
          onMouseDown={() => setFormOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Sign up for Google Review QR"
            onMouseDown={(e) => e.stopPropagation()}
            className="relative max-h-[94dvh] w-full max-w-xl overflow-y-auto rounded-t-[28px] bg-[#EAF2F8] sm:rounded-[28px]"
          >
            <button
              onClick={() => setFormOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full bg-white/80 text-[#102A43] hover:bg-[#EAF2F8]"
            >
              <X size={18} />
            </button>
            <SignupForm plans={plans} planId={planId} onPlanChange={setPlanId} />
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
}
