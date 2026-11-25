"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Star, Shuffle, Check, PenLine } from "lucide-react";
import { poppins } from "@/lib/reviews/look";

/*
 * The page a customer sees after scanning. One card, one question at a time:
 * tap the stars, tap a suggestion (it becomes editable right there), press the button
 * pinned to the bottom. Low ratings get honest wording; the button works for every rating.
 */

const WORDS = ["", "Poor", "Below average", "Average", "Good", "Excellent"];
const WORD_COLOR = ["", "text-rose-600", "text-orange-600", "text-amber-600", "text-lime-700", "text-emerald-700"];
const WRITE_OWN = -1;

interface Props {
  slug: string;
  name: string;
  category: string;
  googleUrl: string;
  languages: string[];
  /** Saved suggestions sent with the page, by language then star rating */
  pools: Record<string, Record<number, string[]>>;
}

/** Four drafts from a pool, preferring different openings. */
function pickFour(pool: string[]): string[] {
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const opening = (r: string) => r.split(/\s+/).slice(0, 3).join(" ").toLowerCase();
  const out: string[] = [];
  const seen = new Set<string>();
  for (const r of shuffled) if (out.length < 4 && !seen.has(opening(r))) (seen.add(opening(r)), out.push(r));
  for (const r of shuffled) if (out.length < 4 && !out.includes(r)) out.push(r);
  return out;
}

export default function ReviewFlow({ slug, name, category, googleUrl, languages, pools }: Props) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [lang, setLang] = useState(languages[0] ?? "English");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [picked, setPicked] = useState<number | null>(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const rated = useRef(false);
  // The site's page wrapper animates with a transform, which breaks position:fixed inside it,
  // so the pinned button is portalled to <body>.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reqId = useRef(0);
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  async function load(r: number, language = lang) {
    const id = ++reqId.current;
    setError("");
    setPicked(null);
    setText("");

    // Saved suggestions came with the page: show them instantly, count the rating in the background.
    const saved = pools[language]?.[r];
    if (saved && saved.length) {
      setLoading(false);
      setSuggestions(pickFour(saved));
      if (!rated.current) {
        rated.current = true;
        fetch("/api/reviews/event", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug, rating: r, type: "rated" }),
          keepalive: true,
        }).catch(() => {});
      }
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/reviews/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, rating: r, language, first: !rated.current }),
      });
      rated.current = true;
      const data = await res.json();
      if (id !== reqId.current) return;
      if (!res.ok) throw new Error(data.error || "Couldn't load suggestions. You can still write your own.");
      setSuggestions(data.suggestions ?? []);
    } catch (e) {
      if (id === reqId.current) setError(e instanceof Error ? e.message : "Couldn't load suggestions. You can still write your own.");
    } finally {
      if (id === reqId.current) setLoading(false);
    }
  }

  function rate(r: number) {
    const first = rating === 0;
    setRating(r);
    load(r);
    if (first) setTimeout(() => listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
  }

  function pick(i: number) {
    setPicked(i);
    setText(i === WRITE_OWN ? "" : suggestions[i]);
  }

  // Grow the editor with its text, and focus it when "write my own" is picked.
  useEffect(() => {
    const el = editorRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, [text, picked]);
  useEffect(() => {
    if (picked === WRITE_OWN) editorRef.current?.focus();
  }, [picked]);

  async function copyAndGo() {
    const value = text.trim();
    if (!value) return;
    let ok = false;
    try {
      await navigator.clipboard.writeText(value);
      ok = true;
    } catch {
      // Older in-app browsers: select the editor's text and copy
      const el = editorRef.current;
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
    // Same hand-off RevmeAI uses: copy, then open Google's review link in this tab after half a second.
    setTimeout(() => window.open(googleUrl, "_self"), ok ? 500 : 2000);
  }

  const shown = hover || rating;
  const ready = text.trim().length > 0;

  return (
    <div className="mx-auto w-full max-w-[25rem] pb-40">
      {/* Business */}
      <header className="flex flex-col items-center pt-2 text-center">
        <h1 className="text-[24px] font-semibold leading-tight tracking-[-0.02em] text-slate-900">{name}</h1>
        <p className="mt-0.5 text-[13px] text-slate-500">{category}</p>
      </header>

      {languages.length > 1 && (
        <div className="mt-4 flex justify-center">
          <div className="inline-flex rounded-full bg-white p-1 shadow-[0_1px_2px_rgba(15,23,42,0.06),0_0_0_1px_rgba(15,23,42,0.06)]" role="group" aria-label="Review language">
            {languages.map((l) => (
              <button
                key={l}
                type="button"
                aria-pressed={lang === l}
                onClick={() => {
                  setLang(l);
                  if (rating) load(rating, l);
                }}
                className={`h-8 rounded-full px-3.5 text-[13px] font-medium transition-colors ${lang === l ? "bg-slate-900 text-white" : "text-slate-600"}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}

      <main className="mt-5 overflow-hidden rounded-[28px] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_50px_-24px_rgba(15,23,42,0.25)]">
        {/* Rating */}
        <section className="px-6 pb-6 pt-7 text-center">
          <h2 className="text-[19px] font-semibold tracking-[-0.01em] text-slate-900">How was your visit?</h2>
          <div className="mt-5 flex justify-center gap-2" onMouseLeave={() => setHover(0)} role="radiogroup" aria-label="Your rating">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                role="radio"
                aria-checked={rating === n}
                aria-label={`${n} star${n > 1 ? "s" : ""}`}
                onMouseEnter={() => setHover(n)}
                onClick={() => rate(n)}
                className="rounded-full p-1 transition-transform duration-150 active:scale-90 motion-reduce:transition-none"
              >
                <Star
                  size={42}
                  strokeWidth={1.4}
                  className={`transition-colors ${n <= shown ? "fill-[#FBBC04] text-[#FBBC04]" : "fill-slate-100 text-slate-300"} ${n === rating ? "scale-110" : ""}`}
                />
              </button>
            ))}
          </div>
          <p className={`mt-2 h-5 text-sm font-semibold ${shown ? WORD_COLOR[shown] : "text-slate-400"}`}>{shown ? WORDS[shown] : "Tap a star to rate"}</p>
        </section>

        {/* Suggestions */}
        {rating > 0 && (
          <section ref={listRef} className="scroll-mt-4 border-t border-slate-100 px-4 pb-4 pt-5">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-[15px] font-semibold text-slate-900">Pick what fits, then edit</h2>
              <button
                type="button"
                onClick={() => load(rating)}
                disabled={loading}
                aria-label="Show other suggestions"
                className="flex size-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 disabled:opacity-40"
              >
                <Shuffle size={17} className={loading ? "animate-pulse" : ""} />
              </button>
            </div>

            <div className="mt-3 space-y-2" aria-live="polite">
              {loading &&
                [0, 1, 2].map((i) => (
                  <div key={i} className="space-y-2 rounded-2xl bg-slate-50 px-4 py-4">
                    <div className="h-3 w-11/12 animate-pulse rounded-full bg-slate-200/80" />
                    <div className="h-3 w-2/3 animate-pulse rounded-full bg-slate-200/80" />
                  </div>
                ))}

              {error && <p className="rounded-2xl bg-rose-50 px-4 py-3 text-[13px] text-rose-700">{error}</p>}

              {!loading &&
                suggestions.map((s, i) =>
                  picked === i ? (
                    <Editor key={i} refEl={editorRef} value={text} onChange={setText} />
                  ) : (
                    <button
                      key={i}
                      type="button"
                      onClick={() => pick(i)}
                      className="block w-full rounded-2xl bg-slate-50 px-4 py-3.5 text-left text-[15px] leading-relaxed text-slate-700 transition-colors hover:bg-slate-100 active:bg-slate-100"
                    >
                      {s}
                    </button>
                  ),
                )}

              {!loading &&
                (picked === WRITE_OWN ? (
                  <Editor refEl={editorRef} value={text} onChange={setText} placeholder="Write about your visit in your own words" />
                ) : (
                  <button
                    type="button"
                    onClick={() => pick(WRITE_OWN)}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 px-4 py-3 text-sm font-medium text-slate-600 hover:border-slate-400 hover:text-slate-900"
                  >
                    <PenLine size={15} /> Write my own
                  </button>
                ))}
            </div>
          </section>
        )}
      </main>

      <a href="https://www.createverse.in/services/google-review-qr" className="mt-8 flex flex-col items-center gap-1 text-[11px] text-slate-400">
        Powered by
        <Image src="/logo.png" alt="CreateVerse" width={88} height={36} className="h-auto w-[88px] opacity-80" />
      </a>

      {/* Pinned action */}
      {rating > 0 && mounted && createPortal(
        <div className={`${poppins.className} fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/70 bg-white/90 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur`}>
          <div className="mx-auto max-w-[25rem]">
            <button
              type="button"
              onClick={copyAndGo}
              disabled={!ready || copied}
              className={`flex h-14 w-full items-center justify-center gap-2 rounded-2xl text-base font-semibold text-white transition-colors ${
                copied ? "bg-emerald-600" : ready ? "bg-slate-900 hover:bg-slate-800" : "bg-slate-300"
              }`}
            >
              {copied ? (
                <>
                  <Check size={20} /> Copied, opening Google
                </>
              ) : ready ? (
                "Copy and post on Google"
              ) : (
                "Pick a review above"
              )}
            </button>
            {copied ? (
              <p className="mt-2 text-center text-sm font-semibold text-slate-900">
                On Google: tap the stars, then hold the review box and tap <span className="text-emerald-700">Paste</span>.
              </p>
            ) : (
              <p className="mt-2 text-center text-xs text-slate-500">Your review is copied, then Google opens. Paste it there and press Post.</p>
            )}
          </div>
        </div>
      , document.body)}
    </div>
  );
}

function Editor({
  refEl,
  value,
  onChange,
  placeholder,
}: {
  refEl: React.RefObject<HTMLTextAreaElement | null>;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="rounded-2xl bg-sky-50 px-4 pb-2 pt-3.5 ring-2 ring-[#0284C7]">
      <label htmlFor="review-text" className="sr-only">
        Your review
      </label>
      <textarea
        id="review-text"
        ref={refEl}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        placeholder={placeholder}
        className="block w-full resize-none overflow-hidden bg-transparent text-[16px] leading-relaxed text-slate-900 outline-none placeholder:text-slate-400"
      />
      <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-[#0369A1]">
        <PenLine size={11} /> Tap to change anything
      </p>
    </div>
  );
}
