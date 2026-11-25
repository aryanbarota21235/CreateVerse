"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Star, RefreshCw, ArrowUpRight, Check, Store } from "lucide-react";
import { CARD, EYEBROW, FIELD, PRIMARY } from "@/lib/reviews/look";

const LABELS = ["", "Poor", "Below average", "Average", "Good", "Excellent"];

interface Props {
  slug: string;
  name: string;
  category: string;
  googleUrl: string;
}

export default function ReviewFlow({ slug, name, category, googleUrl }: Props) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [picked, setPicked] = useState<number | null>(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const rated = useRef(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const reqId = useRef(0);

  async function load(r: number) {
    const id = ++reqId.current;
    setLoading(true);
    setError("");
    setSuggestions([]);
    setPicked(null);
    try {
      const res = await fetch("/api/reviews/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, rating: r, first: !rated.current }),
      });
      rated.current = true;
      const data = await res.json();
      if (id !== reqId.current) return;
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setSuggestions(data.suggestions ?? []);
    } catch (e) {
      if (id === reqId.current) setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      if (id === reqId.current) setLoading(false);
    }
  }

  function choose(r: number) {
    setRating(r);
    setText("");
    load(r);
  }

  function pick(i: number) {
    setPicked(i);
    setText(suggestions[i]);
  }

  async function copyAndGo() {
    const value = text.trim();
    if (!value) return;
    let ok = false;
    try {
      await navigator.clipboard.writeText(value);
      ok = true;
    } catch {
      // Older in-app browsers: fall back to selecting the textarea and copying
      const el = textareaRef.current;
      if (el) {
        el.select();
        ok = document.execCommand("copy");
      }
    }
    setCopied(ok);
    fetch("/api/reviews/event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, rating }),
      keepalive: true,
    }).catch(() => {});
    setTimeout(() => {
      window.location.href = googleUrl;
    }, ok ? 700 : 1800);
  }

  const shown = hover || rating;

  return (
    <div className="mx-auto w-full max-w-[26rem]">
      {/* Who is being reviewed */}
      <div className={`${CARD} flex items-center gap-3 p-4`}>
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-accent-dim">
          <Store size={20} strokeWidth={1.8} />
        </span>
        <div className="min-w-0">
          <h1 className="truncate text-[17px] font-semibold leading-tight tracking-tight text-slate-900">{name}</h1>
          <p className="text-[13px] text-slate-500">{category}</p>
        </div>
      </div>

      {/* Rating */}
      <section className={`${CARD} mt-3 p-5`}>
        <h2 className={EYEBROW}>Rate your visit</h2>
        <div
          className="mt-3 flex justify-between gap-1"
          onMouseLeave={() => setHover(0)}
          role="radiogroup"
          aria-label="Rating"
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={rating === n}
              aria-label={`${n} star${n > 1 ? "s" : ""}`}
              onMouseEnter={() => setHover(n)}
              onClick={() => choose(n)}
              className={`flex aspect-square flex-1 items-center justify-center rounded-xl border transition active:scale-95 ${
                n <= shown ? "border-amber-200 bg-amber-50" : "border-slate-200 bg-white hover:bg-slate-50"
              }`}
            >
              <Star
                size={26}
                strokeWidth={1.6}
                className={n <= shown ? "fill-amber-400 text-amber-400" : "text-slate-300"}
              />
            </button>
          ))}
        </div>
        <p className="mt-2 h-5 text-center text-[13px] font-medium text-slate-600">
          {LABELS[shown] || "Tap a star"}
        </p>
      </section>

      {/* Suggestions + text */}
      {rating > 0 && (
        <section className={`${CARD} mt-3 overflow-hidden`}>
          <div className="flex min-h-12 items-center justify-between gap-2 border-b border-slate-100 px-5 py-2.5">
            <h2 className="text-sm font-semibold tracking-tight text-slate-900">Pick a review</h2>
            <button
              type="button"
              onClick={() => load(rating)}
              disabled={loading}
              className="inline-flex h-8 items-center gap-1.5 rounded-lg px-2 text-xs font-semibold text-accent-dim hover:bg-sky-50 disabled:opacity-40"
            >
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} /> New ideas
            </button>
          </div>

          <div className="p-3" aria-live="polite">
            {loading &&
              [0, 1, 2].map((i) => (
                <div key={i} className="mb-2 space-y-2 rounded-xl border border-slate-100 p-3.5 last:mb-0">
                  <div className="h-3 w-11/12 animate-pulse rounded bg-slate-100" />
                  <div className="h-3 w-3/4 animate-pulse rounded bg-slate-100" />
                </div>
              ))}

            {error && (
              <p className="rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-3 text-[13px] text-rose-700">{error}</p>
            )}

            {!loading &&
              suggestions.map((s, i) => {
                const on = picked === i;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => pick(i)}
                    aria-pressed={on}
                    className={`mb-2 flex w-full items-start gap-3 rounded-xl border p-3.5 text-left text-[14px] leading-relaxed transition last:mb-0 ${
                      on
                        ? "border-accent bg-sky-50/70 ring-2 ring-sky-100"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border ${
                        on ? "border-accent bg-accent text-white" : "border-slate-300"
                      }`}
                    >
                      {on && <Check size={12} strokeWidth={3} />}
                    </span>
                    <span className="text-slate-800">{s}</span>
                  </button>
                );
              })}
          </div>

          <div className="border-t border-slate-100 p-5">
            <label htmlFor="review-text" className="mb-1 block text-xs font-semibold text-slate-600">
              Your review <span className="font-normal text-slate-400">(edit freely)</span>
            </label>
            <textarea
              id="review-text"
              ref={textareaRef}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                setPicked(null);
              }}
              rows={4}
              placeholder="Pick one above or write your own…"
              className={`${FIELD} resize-none leading-relaxed`}
            />

            <button
              type="button"
              onClick={copyAndGo}
              disabled={!text.trim() || copied}
              className={`${PRIMARY} mt-4 h-12 w-full text-[15px] ${copied ? "!bg-emerald-600 !opacity-100" : ""}`}
            >
              {copied ? (
                <>
                  <Check size={18} /> Copied — opening Google
                </>
              ) : (
                <>
                  Copy &amp; post on Google <ArrowUpRight size={18} />
                </>
              )}
            </button>
            <ol className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] leading-tight text-slate-500">
              {["Text is copied", "Google opens", "Paste & tap Post"].map((step, i) => (
                <li key={step} className="rounded-lg bg-slate-50 px-1.5 py-2">
                  <span className="mb-0.5 block text-xs font-semibold text-slate-700">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <a
        href="https://www.createverse.in/services/google-review-qr"
        className="mt-6 flex flex-col items-center gap-1 text-[11px] text-slate-400 hover:text-slate-500"
      >
        Powered by
        <Image src="/logo.png" alt="CreateVerse" width={96} height={40} className="h-auto w-24 opacity-90" />
      </a>
    </div>
  );
}
