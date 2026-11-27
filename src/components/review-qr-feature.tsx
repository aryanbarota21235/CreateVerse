"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowRight, QrCode, Star } from "lucide-react";
import ReviewQrPlans, { loadPlans } from "@/components/review-qr-plans";

/*
 * Homepage feature for the Google Review QR service, above the practice-area panel.
 * Same soft panel as the practice areas; the right side is drawn in HTML/CSS: the printed
 * QR stand behind, the customer's phone in front, and a "new review" toast. Motion is CSS only
 * (float-soft, star-pop, node-ring), which art-pauser stops when it's off screen.
 */

const POINTS = ["Review ready in about 30 seconds", "AI-written, never repeated", "Print-ready QR poster included"];

export default function ReviewQrFeature() {
  const [plansOpen, setPlansOpen] = useState(false);
  const closePlans = useCallback(() => setPlansOpen(false), []);

  return (
    <div className="mb-10 sm:mb-14 lg:mb-16">
      <div className="mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4">
        <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ink/60 shrink-0">
          New: Reputation Growth
        </p>
        <span className="h-px grow bg-gradient-to-r from-ink/15 to-transparent" />
      </div>

      <div className="overflow-hidden rounded-[24px] sm:rounded-[36px] bg-white/90 shadow-soft ring-1 ring-black/[0.04] lg:grid lg:grid-cols-[1.05fr_1fr]">
        {/* Copy */}
        <div className="flex flex-col justify-center p-5 min-[390px]:p-6 sm:p-10 lg:p-12 xl:p-14">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-sky to-white text-accent ring-1 ring-accent/10">
              <QrCode className="h-5 w-5" />
            </span>
            <span className="rounded-full bg-brand-orange/10 px-2.5 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-brand-orange">
              New service
            </span>
          </div>

          <span className="mt-5 sm:mt-7 block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-ink/55">
            Google Review QR
          </span>
          <h3 className="mt-1.5 font-display text-[26px] min-[390px]:text-[28px] sm:text-[36px] xl:text-[40px] font-bold leading-[1.08] tracking-[-0.03em] text-ink">
            Turn every happy customer into a <span className="text-accent">Google review.</span>
          </h3>
          <p className="mt-3 sm:mt-4 max-w-[34rem] text-[14px] sm:text-[15.5px] leading-relaxed text-ink/70">
            One QR on your counter. Customers scan, tap the stars, pick a ready review about what they got done, and post it on
            Google in one tap. More reviews, better ranking for &ldquo;best in your city&rdquo; searches.
          </p>

          <ul className="mt-4 sm:mt-6 grid gap-2 sm:gap-2.5">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-2 text-[12.5px] sm:text-[13.5px] font-semibold leading-snug text-ink/80">
                <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <button
              type="button"
              onClick={() => setPlansOpen(true)}
              onPointerEnter={() => loadPlans()}
              onFocus={() => loadPlans()}
              className="pressable group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[13.5px] sm:text-sm font-semibold text-white transition-colors hover:bg-accent cursor-pointer"
            >
              See plans and sign up
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <Link
              href="/services/google-review-qr"
              prefetch
              className="pressable group inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-accent"
            >
              Try the live demo
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Drawing */}
        <div className="relative h-[430px] min-[390px]:h-[460px] sm:h-[560px] lg:h-auto lg:min-h-[580px] overflow-hidden border-t border-stone-200/70 lg:border-t-0 lg:border-l bg-gradient-to-br from-brand-sky/70 via-white to-white">
          <div className="absolute inset-0 [background-image:radial-gradient(rgba(16,42,67,0.07)_1px,transparent_1px)] [background-size:18px_18px]" aria-hidden />
          <ReviewQrArt />
        </div>
      </div>
      {plansOpen && <ReviewQrPlans onClose={closePlans} />}
    </div>
  );
}

function ReviewQrArt() {
  return (
    <div className="absolute inset-0" aria-hidden>
      {/* Printed QR stand, behind */}
      <div className="absolute left-[5%] top-[12%] w-[46%] max-w-[250px] -rotate-[6deg] rounded-[18px] bg-white p-3 sm:p-5 shadow-[0_24px_50px_-24px_rgba(16,42,67,0.45)] ring-1 ring-black/[0.05]">
        <p className="text-center font-display text-[12px] sm:text-[16px] font-bold tracking-tight text-ink">Sharma Sweets</p>
        <div className="mt-1 flex justify-center gap-0.5 text-[#FBBC04]">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 fill-current" />
          ))}
        </div>
        <div className="mx-auto mt-2 sm:mt-3 w-[80%] rounded-lg bg-white p-1 ring-1 ring-ink/10">
          <QrMark />
        </div>
        <p className="mt-2 sm:mt-3 text-center text-[8px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-accent">Scan to review</p>
      </div>

      {/* Customer's phone, front: a real phone shape (about 9 by 19.5) */}
      <div className="absolute right-[6%] top-1/2 -translate-y-1/2 sm:right-[8%]">
        <div className="float-soft w-[172px] min-[390px]:w-[186px] sm:w-[236px] xl:w-[252px]">
          <div className="aspect-[9/19.5] rounded-[30px] sm:rounded-[40px] bg-ink p-[5px] sm:p-[7px] shadow-[0_34px_70px_-26px_rgba(16,42,67,0.6)]">
            <div className="flex h-full flex-col overflow-hidden rounded-[25px] sm:rounded-[33px] bg-[#EEF4FA]">
              {/* Status bar */}
              <div className="flex items-center justify-between px-4 sm:px-5 pt-2 sm:pt-2.5 text-[7.5px] sm:text-[9.5px] font-semibold text-ink">
                <span>9:41</span>
                <span className="h-[13px] w-[52px] sm:h-[17px] sm:w-[64px] rounded-full bg-ink" />
                <span className="flex items-end gap-[1.5px]">
                  <span className="h-[4px] w-[2px] rounded-sm bg-ink" />
                  <span className="h-[6px] w-[2px] rounded-sm bg-ink" />
                  <span className="h-[8px] w-[2px] rounded-sm bg-ink" />
                </span>
              </div>

              <div className="flex flex-1 flex-col px-2.5 sm:px-3.5 pb-2.5 sm:pb-3.5 pt-3 sm:pt-4">
                <p className="text-center font-display text-[12px] sm:text-[15px] font-bold tracking-tight text-ink">Sharma Sweets</p>
                <p className="text-center text-[7.5px] sm:text-[9.5px] text-ink/50">Sweets &amp; Namkeen, Karnal</p>

                <div className="mt-2.5 sm:mt-3.5 rounded-[16px] sm:rounded-[20px] bg-white px-2 sm:px-2.5 py-3 sm:py-3.5 text-center shadow-[0_8px_20px_-14px_rgba(16,42,67,0.4)]">
                  <p className="text-[9.5px] sm:text-[12px] font-semibold text-ink">How was your visit?</p>
                  <div className="mt-1.5 sm:mt-2 flex justify-center gap-0.5 sm:gap-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        className="star-pop h-4 w-4 sm:h-5 sm:w-5 fill-[#FBBC04] text-[#FBBC04]"
                        style={{ animationDelay: `${i * 0.18}s` }}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-[8px] sm:text-[10px] font-semibold text-emerald-700">Excellent</p>

                  <p className="mt-2.5 sm:mt-3 inline-block rounded-full bg-sky-50 px-2 py-0.5 text-[7px] sm:text-[9px] text-[#0369A1]">
                    About: <b>Kaju katli</b>
                  </p>
                  <div className="mt-1.5 sm:mt-2 space-y-1.5 text-left text-[7.5px] sm:text-[9.5px] leading-snug">
                    <div className="rounded-xl bg-sky-50 px-2 py-1.5 sm:py-2 text-ink/85 ring-[1.5px] ring-accent">
                      Best sweet shop in Karnal. The kaju katli was fresh and soft, and the staff packed our box neatly.
                    </div>
                    <div className="rounded-xl bg-slate-100 px-2 py-1.5 sm:py-2 text-ink/50">
                      Ordered for a family function and everyone asked where the sweets were from...
                    </div>
                    <div className="hidden min-[390px]:block rounded-xl bg-slate-100 px-2 py-1.5 sm:py-2 text-ink/50">
                      Pure taste, fair prices and very polite staff...
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-2">
                  <div className="rounded-xl sm:rounded-2xl bg-ink py-2 sm:py-2.5 text-center text-[8.5px] sm:text-[11px] font-semibold text-white">
                    Copy and post on Google
                  </div>
                  <p className="mt-1.5 text-center text-[6.5px] sm:text-[8px] text-ink/40">Powered by CreateVerse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New review toast */}
      <div className="absolute bottom-[7%] left-[5%] hidden sm:flex items-center gap-2.5 rounded-2xl bg-white px-3 py-2.5 sm:px-4 sm:py-3 shadow-[0_18px_40px_-20px_rgba(16,42,67,0.45)] ring-1 ring-black/[0.05]">
        <span className="relative flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <span className="node-ring absolute inset-0 rounded-full bg-emerald-400/40" />
          <Star className="relative h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" />
        </span>
        <span>
          <span className="block font-display text-[11.5px] sm:text-[14px] font-bold tracking-tight text-ink">New 5-star review</span>
          <span className="block text-[10px] sm:text-[12px] text-ink/55">Posted on Google just now</span>
        </span>
      </div>
    </div>
  );
}

/** A QR-style mark (decorative, not scannable): three finder squares and a fixed module pattern. */
function QrMark() {
  const N = 21;
  const finder = (x: number, y: number) => x < 7 && y < 7;
  const inFinder = (x: number, y: number) => finder(x, y) || finder(N - 1 - x, y) || finder(x, N - 1 - y);
  const cells: [number, number][] = [];
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (inFinder(x, y)) continue;
      // Fixed pseudo-random pattern, the same on server and browser
      if (((x * 7 + y * 13 + x * y * 3) % 5) < 2) cells.push([x, y]);
    }
  }
  const Finder = ({ x, y }: { x: number; y: number }) => (
    <g>
      <rect x={x} y={y} width={7} height={7} rx={1.4} fill="#102A43" />
      <rect x={x + 1} y={y + 1} width={5} height={5} rx={1} fill="#fff" />
      <rect x={x + 2} y={y + 2} width={3} height={3} rx={0.6} fill="#102A43" />
    </g>
  );
  return (
    <svg viewBox={`0 0 ${N} ${N}`} className="block h-auto w-full" shapeRendering="crispEdges">
      {cells.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill="#102A43" />
      ))}
      <Finder x={0} y={0} />
      <Finder x={N - 7} y={0} />
      <Finder x={0} y={N - 7} />
    </svg>
  );
}
