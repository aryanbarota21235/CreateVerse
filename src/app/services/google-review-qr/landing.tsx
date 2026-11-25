"use client";

import { useRef, useState } from "react";
import { Check, Minus, Plus, Star } from "lucide-react";
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
    q: "What if someone gives 1 or 2 stars?",
    a: "They can still post. The suggestions stay polite and say what needs improving, so you get honest feedback without abuse. Google doesn't allow sending only happy customers to Google, and this doesn't.",
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
    a: "Each branch gets its own QR code linked to its own Google listing, with its own numbers. Mention the number of branches in the form.",
  },
];

export default function Landing({ plans }: { plans: PublicPlan[] }) {
  const popular = plans.find((p) => p.popular)?.id;
  const [planId, setPlanId] = useState(popular ?? (plans.length === 1 ? plans[0].id : ""));
  const formRef = useRef<HTMLElement>(null);

  function choose(id: string) {
    setPlanId(id);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className={`${INK} bg-white`}>
      {/* Hero: the working demo is the point */}
      <section className="relative overflow-hidden bg-[#EAF2F8] pt-[84px] sm:pt-[96px]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:radial-gradient(#102A43_0.6px,transparent_0.6px)] [background-size:18px_18px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
          aria-hidden="true"
        />
        <div className="container-site relative grid items-center gap-12 pb-16 pt-6 sm:pb-24 lg:pt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
          <div className="max-w-xl">
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
                className="inline-flex items-center rounded-full bg-[#0284C7] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_-10px_rgba(2,132,199,0.7)] transition hover:bg-[#0369A1]"
              >
                See plans
              </a>
              <a href="#how" className="inline-flex items-center rounded-full px-5 py-3.5 text-sm font-bold text-[#102A43] ring-1 ring-[#102A43]/15 transition hover:bg-white">
                How it works
              </a>
            </div>
            <ul className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-[#102A43]/10 pt-6 text-sm">
              <li>
                <p className={`${DISPLAY} text-2xl font-bold`}>&lt;1 min</p>
                <p className="text-[#102A43]/60">for the customer</p>
              </li>
              <li>
                <p className={`${DISPLAY} text-2xl font-bold`}>12+</p>
                <p className="text-[#102A43]/60">Indian languages</p>
              </li>
              <li>
                <p className={`${DISPLAY} text-2xl font-bold`}>0</p>
                <p className="text-[#102A43]/60">apps to install</p>
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

      {/* Honest low ratings */}
      <section className="bg-[#102A43] py-20 text-white sm:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className={`${DISPLAY} text-4xl font-bold tracking-[-0.03em] sm:text-5xl`}>Every rating can be posted. Low ones stay polite.</h2>
            <p className="mt-5 max-w-lg leading-relaxed text-white/70">
              Google removes reviews and can penalise listings when only happy customers are sent to review. So everyone can post. A 1 or 2-star
              suggestion says what needs improving, credits what was fine, and never turns abusive. You get honest feedback you can act on.
            </p>
          </div>
          <figure className="rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10 sm:p-8">
            <div className="flex gap-1" aria-label="2 stars">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className={`h-5 w-5 ${i < 2 ? "fill-[#F6B500] text-[#F6B500]" : "text-white/25"}`} />
              ))}
            </div>
            <blockquote className="mt-4 text-xl leading-relaxed text-white/90">
              “The food needs some improvement this time. The staff were polite though. Hope they improve.”
            </blockquote>
            <figcaption className="mt-4 text-sm text-white/50">A typical 2-star suggestion for a restaurant</figcaption>
          </figure>
        </div>
      </section>

      {/* Pricing */}
      <section id="plans" className="scroll-mt-24 bg-[#EAF2F8] py-20 sm:py-28">
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
            <div className={`mt-12 grid items-stretch gap-5 ${plans.length === 2 ? "md:grid-cols-2 max-w-4xl" : plans.length >= 3 ? "md:grid-cols-3" : "max-w-md"}`}>
              {plans.map((p) => {
                const hot = p.popular;
                const chosen = planId === p.id;
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
                        {chosen ? "Selected" : `Choose ${p.name}`}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Sign-up */}
      <section ref={formRef} id="signup" className="scroll-mt-24 py-20 sm:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 className={`${DISPLAY} text-4xl font-bold tracking-[-0.03em] sm:text-5xl`}>Get your QR code.</h2>
            <p className="mt-4 max-w-sm leading-relaxed text-[#102A43]/70">
              Tell us about your business. We call you back, usually the same working day, then set up your QR code and send a print-ready poster.
            </p>
            <ol className="mt-8 space-y-4 text-[15px]">
              {["We call you to confirm the plan", "You pay by UPI or bank transfer", "Your QR code and poster arrive on WhatsApp"].map((t, i) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAF2F8] text-xs font-bold">{i + 1}</span>
                  {t}
                </li>
              ))}
            </ol>
          </div>
          <SignupForm plans={plans} planId={planId} onPlanChange={setPlanId} />
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
    </div>
  );
}
