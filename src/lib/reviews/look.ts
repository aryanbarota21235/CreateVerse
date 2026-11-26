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
export const ROOT = `${poppins.className} cv-tool min-h-[100dvh] bg-[#F3F6FA] text-[14px] leading-normal text-slate-800 antialiased [font-variant-numeric:tabular-nums]`;

export const CARD =
  "rounded-[20px] bg-white ring-1 ring-[#102A43]/[0.06] shadow-[0_1px_2px_rgba(16,42,67,0.04),0_12px_32px_-20px_rgba(16,42,67,0.18)]";

// Same field look as the website's sign-up form: soft rounded box, gentle border, blue focus glow.
export const FIELD =
  "min-h-11 w-full rounded-xl border border-[#102A43]/10 bg-white px-3.5 py-2.5 text-[14px] text-[#102A43] placeholder:text-[#102A43]/35 transition hover:border-[#102A43]/20 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10 [@media(pointer:coarse)]:text-[16px]";

export const LABEL = "mb-1.5 block text-[13px] font-semibold text-[#102A43]";

const BTN = "inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap transition disabled:pointer-events-none disabled:opacity-50";
export const PRIMARY = `${BTN} h-10 px-4 text-sm bg-accent text-white shadow-[0_8px_18px_-10px_rgba(2,132,199,0.8)] hover:bg-accent-dim`;
export const PLAIN = `${BTN} h-10 px-4 text-sm text-[#102A43]/80 hover:bg-[#102A43]/[0.05] hover:text-[#102A43]`;
export const QUIET_SM = `${BTN} h-8 bg-white px-3 text-xs font-semibold text-[#102A43]/80 ring-1 ring-[#102A43]/10 hover:ring-[#102A43]/20 hover:text-[#102A43]`;
export const EYEBROW = "text-xs font-bold uppercase tracking-wider text-stone-500";
