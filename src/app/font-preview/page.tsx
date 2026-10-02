// TEMPORARY: heading-font comparison sheet. Local development only (404 in production).
// Delete this folder once a heading font has been picked.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Inter_Tight,
  Manrope,
  Plus_Jakarta_Sans,
  Red_Hat_Display,
  Poppins,
  Montserrat,
  Playfair_Display,
  Space_Grotesk,
} from "next/font/google";

const interTight = Inter_Tight({ subsets: ["latin"], display: "swap" });
const manrope = Manrope({ subsets: ["latin"], display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });
const redHat = Red_Hat_Display({ subsets: ["latin"], display: "swap" });
const poppins = Poppins({ subsets: ["latin"], display: "swap", weight: ["600", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Heading font options",
  robots: { index: false, follow: false },
};

const options = [
  { name: "Inter Tight", note: "Clean, sharp — Apple / Linear style", font: interTight, weight: 700, tracking: "-0.035em" },
  { name: "Manrope", note: "Modern, soft-geometric — fintech style", font: manrope, weight: 800, tracking: "-0.035em" },
  { name: "Plus Jakarta Sans", note: "Friendly premium — startup style", font: jakarta, weight: 800, tracking: "-0.035em" },
  { name: "Red Hat Display", note: "Bold, confident — brand style", font: redHat, weight: 800, tracking: "-0.025em" },
  { name: "Poppins", note: "Round, familiar — very popular in India", font: poppins, weight: 700, tracking: "-0.03em" },
  { name: "Montserrat", note: "Wide, classic — luxury real-estate style", font: montserrat, weight: 800, tracking: "-0.035em" },
  { name: "Playfair Display", note: "Serif (upright, not italic) — editorial luxury", font: playfair, weight: 700, tracking: "-0.015em" },
  { name: "Space Grotesk", note: "The original font the site started with", font: spaceGrotesk, weight: 700, tracking: "-0.04em" },
];

export default function FontPreviewPage() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <section className="bg-paper pt-28 pb-20">
      <div className="container-site">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Heading font options</p>
        <p className="mt-2 max-w-xl text-sm text-ink/70">
          Same headline in eight fonts. Body text stays Inter in all of them. Pick a number.
        </p>

        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {options.map((o, i) => (
            <div key={o.name} className="grid gap-4 py-8 sm:py-10 lg:grid-cols-[220px_1fr] lg:gap-10">
              <div>
                <p className="text-3xl font-bold text-ink/25">{i + 1}</p>
                <p className="mt-1 text-sm font-bold text-ink">{o.name}</p>
                <p className="mt-0.5 text-xs text-ink/60">{o.note}</p>
              </div>
              <div className={o.font.className} style={{ fontWeight: o.weight, letterSpacing: o.tracking }}>
                <p className="text-[32px] leading-[1.08] text-ink sm:text-6xl sm:leading-[1.05]">
                  Turn Digital Attention into <span className="text-accent">Real Revenue.</span>
                </p>
                <div className="mt-5 flex flex-wrap items-baseline gap-x-10 gap-y-3 text-ink">
                  <span className="text-2xl sm:text-4xl">Four steps. No mystery.</span>
                  <span className="text-lg sm:text-xl">Real Estate Acquisition</span>
                  <span className="text-2xl text-accent sm:text-4xl">₹65 Cr+ · 3.8x</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
