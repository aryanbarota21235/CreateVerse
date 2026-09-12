"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/services";

const inputCls =
  "w-full rounded-xl border border-white/12 bg-white/[0.05] px-4 py-3.5 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-accent/70 focus:bg-white/[0.08]";

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // No backend wired yet — simulate capture and confirm.
    const data = new FormData(e.currentTarget);
    console.log("CreateVerse lead:", Object.fromEntries(data.entries()));
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 600);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-accent/30 bg-accent/10 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent" />
        <h3 className="mt-4 font-display text-2xl font-semibold text-white">Request received.</h3>
        <p className="mt-2 max-w-sm text-sm text-white/55">
          Our team will reach out shortly to schedule your growth strategy conversation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-ink-soft p-6 shadow-lift sm:p-8">
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
          <option value="" disabled className="bg-ink">I&apos;m interested in…</option>
          {services.filter((s) => s.priority).map((s) => (
            <option key={s.slug} value={s.slug} className="bg-ink">{s.name}</option>
          ))}
          <option value="other" className="bg-ink">Something else</option>
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
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-brand-orangedark disabled:opacity-60"
      >
        {sending ? "Sending…" : "Request My Growth Strategy"}
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </button>
      <p className="mt-4 text-center text-[11px] text-white/35">
        No spam, no obligation. Your details stay with CreateVerse.
      </p>
    </form>
  );
}
