"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check, CheckCircle2 } from "lucide-react";
import { REVIEW_CATEGORIES } from "@/lib/reviews/types";
import { site } from "@/lib/site";

type PublicPlan = { id: string; name: string; priceInr: number; months: number; description: string };

// Same field look as the site's lead form (components/lead-form.tsx)
const inputCls =
  "w-full rounded-xl border border-stone-200 bg-[#F8FAFC] px-3.5 py-2.5 sm:px-4 sm:py-3 text-base sm:text-sm text-ink placeholder:text-ink/40 outline-none transition-all duration-200 hover:border-stone-300 focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/15 font-medium";
const labelCls = "mb-1.5 block text-xs font-bold text-ink/80";

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
const period = (m: number) => (m === 12 ? "year" : m === 1 ? "month" : `${m} months`);

export default function SignupForm({ plans }: { plans: PublicPlan[] }) {
  const [planId, setPlanId] = useState(plans.length === 1 ? plans[0].id : "");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/reviews/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, planId }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Could not submit. Please try again.");
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div className="flex flex-col items-center rounded-3xl bg-white p-8 sm:p-12 text-center shadow-soft ring-1 ring-black/[0.04]">
        <CheckCircle2 className="h-12 w-12 text-accent" />
        <h2 className="mt-4 font-display text-2xl font-bold text-ink">Thanks, we&apos;ve got your details.</h2>
        <p className="mt-2 max-w-sm text-sm text-ink/70">
          Our team will call you shortly to confirm your plan and payment. Once it&apos;s done, we&apos;ll send your QR code and poster.
        </p>
        <a
          href={`${site.whatsappUrl.split("?")[0]}?text=${encodeURIComponent("Hi CreateVerse, I just signed up for the Google Review QR service.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-bold text-ink hover:border-[#25D366] hover:text-emerald-700"
        >
          Message us on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl sm:rounded-[32px] bg-white p-5 sm:p-8 shadow-soft ring-1 ring-black/[0.04] text-ink">
      {plans.length > 0 && (
        <fieldset>
          <legend className={labelCls}>Choose a plan</legend>
          <div className={`grid gap-3 ${plans.length > 1 ? "sm:grid-cols-2" : ""}`}>
            {plans.map((p) => {
              const on = planId === p.id;
              return (
                <button
                  type="button"
                  key={p.id}
                  onClick={() => setPlanId(p.id)}
                  aria-pressed={on}
                  className={`relative rounded-2xl border p-4 text-left transition-all ${
                    on ? "border-accent bg-brand-sky/40 ring-2 ring-accent/20" : "border-stone-200 hover:border-stone-300"
                  }`}
                >
                  {on && (
                    <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                  )}
                  <p className="text-sm font-bold text-ink">{p.name}</p>
                  <p className="mt-1 font-display text-2xl font-bold text-ink">
                    {inr(p.priceInr)}
                    <span className="text-sm font-medium text-ink/50"> / {period(p.months)}</span>
                  </p>
                  {p.description && <p className="mt-1.5 text-xs leading-relaxed text-ink/65">{p.description}</p>}
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-ink/55">No payment now. We confirm the plan with you on a call first.</p>
        </fieldset>
      )}

      <div className={`grid gap-3 sm:gap-4 sm:grid-cols-2 ${plans.length ? "mt-6" : ""}`}>
        <div className="sm:col-span-2">
          <label htmlFor="su-biz" className={labelCls}>Business name *</label>
          <input id="su-biz" name="businessName" required className={inputCls} placeholder="e.g. Sharma Sweets" />
        </div>
        <div>
          <label htmlFor="su-cat" className={labelCls}>Type of business</label>
          <select id="su-cat" name="category" defaultValue="" className={`${inputCls} cursor-pointer`}>
            <option value="" disabled>Select</option>
            {REVIEW_CATEGORIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="su-city" className={labelCls}>City</label>
          <input id="su-city" name="city" className={inputCls} placeholder="Karnal" />
        </div>
        <div>
          <label htmlFor="su-name" className={labelCls}>Your name *</label>
          <input id="su-name" name="contactName" required className={inputCls} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="su-phone" className={labelCls}>Mobile / WhatsApp *</label>
          <input id="su-phone" name="phone" required type="tel" className={inputCls} autoComplete="tel" placeholder="98xxxxxxxx" />
        </div>
        <div>
          <label htmlFor="su-email" className={labelCls}>Email</label>
          <input id="su-email" name="email" type="email" className={inputCls} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="su-branches" className={labelCls}>Number of branches</label>
          <input id="su-branches" name="branches" type="number" min={1} max={100} defaultValue={1} className={inputCls} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="su-maps" className={labelCls}>Google Maps link of your business</label>
          <input id="su-maps" name="mapsLink" type="url" className={inputCls} placeholder="Paste the link from Google Maps → Share" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="su-msg" className={labelCls}>Anything else?</label>
          <textarea id="su-msg" name="message" rows={3} className={`${inputCls} resize-none`} placeholder="Best time to call, questions…" />
        </div>
        {/* Honeypot: hidden from people, bots fill it */}
        <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      </div>

      {plans.length > 1 && !planId && <p className="mt-4 text-xs font-semibold text-amber-700">Pick a plan above, or submit and we&apos;ll help you choose.</p>}
      {error && <p className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p>}

      <button
        type="submit"
        disabled={sending}
        className="group mt-5 sm:mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 sm:py-4 text-sm font-bold text-white transition-all duration-200 hover:bg-accent-dim hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 disabled:opacity-60 shadow-md"
      >
        {sending ? "Sending…" : "Sign up for Google Review QR"}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
      <p className="mt-3 text-center text-[11px] sm:text-xs font-medium text-ink/55">Our team calls you back, usually the same working day.</p>
    </form>
  );
}
