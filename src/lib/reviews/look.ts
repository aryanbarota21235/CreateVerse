import { Poppins } from "next/font/google";

/*
 * The review tool's look, taken from the crmnew app (apps/web/src/styles.css + ui.tsx):
 * Poppins, slate text on a pale grey-green ground, white cards with a fine slate border,
 * CreateVerse's sky blue (accent #0284C7) for everything you press, 40px fields with 8px corners.
 * Kept separate from the marketing site's look on purpose.
 */
export const poppins = Poppins({
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/** Page background + base text, applied on each page's root. */
export const ROOT = `${poppins.className} min-h-[100dvh] bg-[#f5f8f6] text-[14px] leading-normal text-slate-800 antialiased [font-variant-numeric:tabular-nums]`;

export const CARD = "rounded-2xl border border-slate-200/90 bg-white shadow-2xs";

export const FIELD =
  "min-h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-[14px] text-slate-900 placeholder:text-slate-400 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-sky-100 [@media(pointer:coarse)]:text-[16px]";

export const LABEL = "mb-1 block text-xs font-semibold text-slate-600";

const BTN = "inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50";
export const PRIMARY = `${BTN} h-10 px-4 text-sm bg-accent text-white shadow-sm hover:bg-accent-dim`;
export const PLAIN = `${BTN} h-10 px-4 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900`;
export const QUIET_SM = `${BTN} h-8 border border-slate-200 bg-white px-3 text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50`;
export const EYEBROW = "text-xs font-bold uppercase tracking-wider text-stone-500";
