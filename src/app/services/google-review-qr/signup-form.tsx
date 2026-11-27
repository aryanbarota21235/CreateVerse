"use client";

import { FormEvent, useState } from "react";
import { Check, CheckCircle2, ChevronDown } from "lucide-react";
import { site } from "@/lib/site";
import { inr, period, type PublicPlan } from "./plan-format";

const field =
  "w-full rounded-2xl border border-[#102A43]/10 bg-white px-4 py-3 text-base text-[#102A43] placeholder:text-[#102A43]/35 outline-none transition focus:border-[#0284C7] focus:ring-4 focus:ring-[#0284C7]/10 sm:text-[15px]";
// Native dropdown arrows sit at the very edge; hide it and draw our own, inset like the text.
const select = `${field} cursor-pointer appearance-none pr-11`;
const label = "mb-1.5 block text-sm font-semibold text-[#102A43]";

export default function SignupForm({
  plans,
  categories,
  planId,
  onPlanChange,
}: {
  plans: PublicPlan[];
  categories: string[];
  planId: string;
  onPlanChange: (id: string) => void;
}) {
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
      if (!res.ok) throw new Error(json.error || "Couldn't send the form. Try again, or message us on WhatsApp.");
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Couldn't send the form. Try again, or message us on WhatsApp.");
    } finally {
      setSending(false);
    }
  }

  const whatsapp = `${site.whatsappUrl.split("?")[0]}?text=${encodeURIComponent("Hi CreateVerse, I just signed up for the Google Review QR service.")}`;

  if (done) {
    return (
      <div className="flex flex-col items-start p-8 sm:p-10">
        <CheckCircle2 className="h-10 w-10 text-[#0284C7]" />
        <h3 className="mt-4 font-display text-3xl font-bold tracking-[-0.02em] text-[#102A43]">Form sent. We&apos;ll call you soon.</h3>
        <p className="mt-2 max-w-md text-[#102A43]/70">
          We usually call back the same working day to confirm your plan. Once you&apos;ve paid, your QR code and poster arrive on WhatsApp.
        </p>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-6 rounded-full bg-[#102A43] px-6 py-3 text-sm font-bold text-white hover:bg-[#1b3a57]">
          Message us on WhatsApp
        </a>
      </div>
    );
  }

  const chosen = plans.find((p) => p.id === planId);

  return (
    <form onSubmit={onSubmit} className="p-6 pt-8 sm:p-9">
      <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-[#102A43]">Get your QR code</h2>
      <p className="mb-6 mt-1.5 text-sm text-[#102A43]/65">No payment now. We call you, you pay by UPI or bank transfer, and your QR and poster arrive on WhatsApp.</p>
      {plans.length > 0 && (
        <fieldset>
          <legend className={label}>Your plan</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {plans.map((p) => {
              const on = p.id === planId;
              return (
                <button
                  type="button"
                  key={p.id}
                  onClick={() => onPlanChange(on ? "" : p.id)}
                  aria-pressed={on}
                  className={`relative rounded-2xl px-4 py-3 text-left transition ${
                    on ? "bg-[#102A43] text-white shadow-[0_10px_24px_-12px_rgba(16,42,67,0.7)]" : "bg-white text-[#102A43] ring-1 ring-[#102A43]/10 hover:ring-[#102A43]/25"
                  }`}
                >
                  <span className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold">{p.name}</span>
                    {on && (
                      <span className="flex size-5 items-center justify-center rounded-full bg-white text-[#102A43]">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                    )}
                  </span>
                  <span className="mt-0.5 block font-display text-xl font-bold">
                    {inr(p.priceInr)}
                    <span className={`text-xs font-medium ${on ? "text-white/60" : "text-[#102A43]/50"}`}> / {period(p.months)}</span>
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-sm text-[#102A43]/60">
            {chosen ? `Nothing to pay now. We confirm ${chosen.name} with you on the call.` : "Not sure? Send the form and we'll help you choose."}
          </p>
        </fieldset>
      )}

      <div className={`grid gap-4 sm:grid-cols-2 ${plans.length ? "mt-6" : ""}`}>
        <div className="sm:col-span-2">
          <label htmlFor="su-biz" className={label}>Business name</label>
          <input id="su-biz" name="businessName" required className={field} placeholder="Sharma Sweets" />
        </div>
        <div>
          <label htmlFor="su-cat" className={label}>Type of business</label>
          <div className="relative">
            <select id="su-cat" name="category" defaultValue="" className={select}>
              <option value="" disabled>Choose one</option>
              {categories.map((c) => <option key={c}>{c}</option>)}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-[18px] -translate-y-1/2 text-[#102A43]/60" aria-hidden="true" />
          </div>
        </div>
        <div>
          <label htmlFor="su-city" className={label}>City</label>
          <input id="su-city" name="city" className={field} placeholder="Karnal" />
        </div>
        <div>
          <label htmlFor="su-name" className={label}>Your name</label>
          <input id="su-name" name="contactName" required className={field} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="su-phone" className={label}>Mobile / WhatsApp</label>
          <input id="su-phone" name="phone" required type="tel" inputMode="tel" className={field} autoComplete="tel" placeholder="98xxxxxxxx" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="su-email" className={label}>Email <span className="font-normal text-[#102A43]/45">(optional)</span></label>
          <input id="su-email" name="email" type="email" className={field} autoComplete="email" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="su-maps" className={label}>Google Maps link <span className="font-normal text-[#102A43]/45">(optional)</span></label>
          <input id="su-maps" name="mapsLink" type="url" className={field} placeholder="Google Maps → your business → Share → Copy link" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="su-msg" className={label}>Anything else? <span className="font-normal text-[#102A43]/45">(optional)</span></label>
          <textarea id="su-msg" name="message" rows={3} className={`${field} resize-none`} placeholder="Best time to call, questions" />
        </div>
        {/* Hidden from people; bots fill it */}
        <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      </div>

      {error && <p className="mt-5 rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700 ring-1 ring-rose-200">{error}</p>}

      <button
        type="submit"
        disabled={sending}
        className="mt-6 w-full rounded-full bg-[#0284C7] py-4 text-[15px] font-bold text-white shadow-[0_10px_24px_-10px_rgba(2,132,199,0.7)] transition hover:bg-[#0369A1] disabled:opacity-60"
      >
        {sending ? "Sending…" : "Send and get a call back"}
      </button>
    </form>
  );
}
