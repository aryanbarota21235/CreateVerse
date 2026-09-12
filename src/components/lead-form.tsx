"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/services";
import { saveEnquiry } from "@/lib/admin-store";

const inputCls =
  "w-full rounded-xl border border-stone-200 bg-[#F8FAFC] px-4 py-3.5 text-sm text-ink placeholder:text-ink/40 outline-none transition-all focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/15 font-medium";

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const interest = String(data.get("interest") || "");
    const message = String(data.get("message") || "");

    try {
      saveEnquiry({
        name,
        phone,
        email,
        service: interest || "General Inquiry",
        budget: "₹1L - ₹3 Lakhs",
        source: typeof window !== "undefined" ? `${window.location.pathname} (Inline Lead Form)` : "Inline Lead Form",
        channel: "Direct Traffic",
        message,
      });
    } catch (err) {
      console.error("Failed to save enquiry", err);
    }

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 600);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-accent/30 bg-white p-10 text-center shadow-2xl">
        <CheckCircle2 className="h-10 w-10 text-accent" />
        <h3 className="mt-4 font-display text-2xl font-bold text-ink">Request received.</h3>
        <p className="mt-2 max-w-sm text-sm text-ink/75 font-normal">
          Our senior directors will reach out shortly to review your requirements and schedule an intake call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-2xl sm:p-8 text-ink">
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <input name="name" required placeholder="Your name" className={inputCls} aria-label="Your name" />
        <input name="phone" required type="tel" placeholder="Phone / WhatsApp" className={inputCls} aria-label="Phone" />
        <input
          name="email"
          type="email"
          placeholder="Email address"
          className={`${inputCls} ${compact ? "" : "sm:col-span-2"}`}
          aria-label="Email"
        />
        <select name="interest" defaultValue="" required className={`${inputCls} ${compact ? "" : "sm:col-span-2"}`} aria-label="I'm interested in">
          <option value="" disabled className="bg-white text-ink/60">I&apos;m interested in…</option>
          {services.filter((s) => s.priority).map((s) => (
            <option key={s.slug} value={s.slug} className="bg-white text-ink">{s.name}</option>
          ))}
          <option value="other" className="bg-white text-ink">Something else</option>
        </select>
        <textarea
          name="message"
          rows={compact ? 3 : 4}
          placeholder="Tell us about your goals (optional)"
          className={`${inputCls} resize-none ${compact ? "" : "sm:col-span-2"}`}
          aria-label="Message"
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-bold text-white transition-all hover:bg-accent-dim disabled:opacity-60 shadow-md hover:shadow-lg hover:shadow-accent/20"
      >
        {sending ? "Submitting Inquiry..." : "Submit Growth Inquiry"}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
      <p className="mt-4 text-center text-xs text-ink/60 font-medium">
        Direct reply from our senior strategy team within 24 hours. Strictly confidential.
      </p>
    </form>
  );
}
