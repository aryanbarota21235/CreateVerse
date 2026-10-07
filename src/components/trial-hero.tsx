"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, TrendingUp, UserCheck } from "lucide-react";
import { useEnquiry } from "@/context/enquiry-context";

// Illustrative numbers only — the dashboard is a representation of the systems we build,
// not a client claim (the card says so in its footer).
const funnel = [
  { label: "Visitors", value: "48.2K", width: "100%", from: "#0EA5E9", to: "#F59E0B" },
  { label: "Leads", value: "3,140", width: "74%", from: "#0EA5E9", to: "#F59E0B" },
  { label: "Qualified", value: "1,208", width: "52%", from: "#0284C7", to: "#F59E0B" },
  { label: "Converted", value: "312", width: "34%", from: "#0284C7", to: "#F59E0B" },
];

const bars = [34, 46, 42, 60, 56, 70, 66, 100];

const industries = [
  { name: "Real Estate", color: "bg-accent" },
  { name: "Immigration", color: "bg-amber-500" },
  { name: "Political Campaigns", color: "bg-sky-500" },
  { name: "Performance Marketing", color: "bg-brand-orange" },
];

export default function TrialHero() {
  const { openEnquiry } = useEnquiry();

  return (
    <section className="relative overflow-hidden bg-[#FBFAF7] pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28">
      {/* Ambient: dot grid, warm glow left, sky glow right */}
      <div className="dot-texture fade-bottom absolute inset-x-0 top-0 h-[720px] opacity-70 pointer-events-none" />
      <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,237,213,0.9)_0%,rgba(255,237,213,0.3)_40%,transparent_70%)] pointer-events-none" />
      <div className="absolute -right-40 top-1/4 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(224,242,254,0.85)_0%,rgba(224,242,254,0.3)_40%,transparent_70%)] pointer-events-none" />

      <div className="container-site relative">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-12 xl:gap-16">
          {/* ---------------- Left: copy ---------------- */}
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2 text-[12.5px] sm:text-[13.5px] font-medium text-ink/75 shadow-xs ring-1 ring-black/[0.05]">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              <span>Growth &amp; Digital Acquisition Partner</span>
            </div>

            <h1 className="mt-7 sm:mt-8 font-display text-[42px] leading-[1.0] min-[400px]:text-[46px] sm:text-[58px] lg:text-[60px] xl:text-[68px] 2xl:text-[76px] font-bold tracking-[-0.04em] text-ink">
              Turn digital attention into{" "}
              <span className="whitespace-nowrap bg-gradient-to-r from-[#0EA5E9] via-[#7FA05C] to-[#F59E0B] bg-clip-text text-transparent">
                real business.
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 max-w-[600px] text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.6] text-ink/65">
              CreateVerse builds digital growth systems for real estate, immigration, political
              campaigns and ambitious businesses — generating qualified leads, acquiring customers
              and scaling campaigns that perform.
            </p>

            <div className="mt-9 sm:mt-11 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:gap-4">
              <button
                type="button"
                onClick={() => openEnquiry()}
                className="pressable group inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-8 py-[18px] text-[16px] lg:text-[17px] font-semibold tracking-[-0.01em] text-white shadow-lift transition-all duration-150 hover:-translate-y-0.5 hover:bg-accent cursor-pointer"
              >
                <span>Get a Growth Strategy</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <Link
                href="/services"
                prefetch={true}
                className="pressable group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-[18px] text-[16px] lg:text-[17px] font-semibold tracking-[-0.01em] text-ink shadow-xs ring-1 ring-black/[0.08] transition-all duration-150 hover:-translate-y-0.5 hover:ring-accent hover:text-accent"
              >
                <span>Explore Our Services</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <ul className="mt-11 sm:mt-14 flex flex-wrap gap-x-6 gap-y-3 text-[14px] text-ink/60">
              {industries.map((i) => (
                <li key={i.name} className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${i.color}`} />
                  <span>{i.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------------- Right: layered dashboard ---------------- */}
          <div className="relative mx-auto w-full max-w-[640px] lg:max-w-none">
            {/* Growth card (front, top-left) */}
            <div className="relative z-10 mb-4 w-full rounded-[22px] bg-white p-5 shadow-soft ring-1 ring-black/[0.05] sm:absolute sm:-top-8 sm:left-0 sm:mb-0 sm:w-[58%] sm:max-w-[300px] sm:p-6 lg:top-0">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/45">
                  Growth
                </p>
                <TrendingUp className="h-4 w-4 text-amber-500" />
              </div>
              <div className="mt-5 flex h-24 items-end gap-1.5 sm:gap-2">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className={`grow rounded-t-md rounded-b-sm ${
                      i === bars.length - 1 ? "bg-amber-500" : "bg-sky-200"
                    }`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-[12px]">
                <span className="text-ink/50">Last 8 weeks</span>
                <span className="inline-flex items-center gap-1 font-semibold text-sky-600">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                  +158%
                </span>
              </div>
            </div>

            {/* Main funnel card */}
            <div className="relative w-full sm:ml-auto sm:w-[82%] rounded-[28px] bg-white px-6 pt-7 pb-16 sm:px-8 sm:pt-8 sm:pb-14 shadow-soft ring-1 ring-black/[0.04] lg:mt-16">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/45">
                    Acquisition funnel
                  </p>
                  <p className="mt-1 font-display text-lg font-bold tracking-tight text-ink">
                    This month
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-[11px] font-semibold text-sky-700">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-500" />
                  </span>
                  Live
                </span>
              </div>

              <div className="mt-7 space-y-[18px]">
                {funnel.map((row) => (
                  <div key={row.label} className="flex items-center gap-4">
                    <span className="w-20 shrink-0 text-[13.5px] text-ink/55">{row.label}</span>
                    <div className="h-2 grow rounded-full bg-stone-200/80">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: row.width,
                          backgroundImage: `linear-gradient(90deg, ${row.from}, ${row.to})`,
                        }}
                      />
                    </div>
                    <span className="w-14 shrink-0 text-right font-display text-[16px] font-bold tabular-nums tracking-tight text-ink">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-7 border-t border-stone-200/80 pt-4 text-[11.5px] leading-relaxed text-ink/40">
                Illustrative dashboard — representative of the systems we build, not a client claim.
              </p>
            </div>

            {/* New lead toast (front, bottom-right) */}
            <div className="absolute z-10 -bottom-7 right-0 flex w-[78%] max-w-[420px] items-center gap-4 rounded-[20px] bg-white p-4 shadow-soft ring-1 ring-black/[0.05] sm:-bottom-8 sm:p-5 lg:-right-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <UserCheck className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-[15px] font-bold tracking-tight text-ink">
                  New qualified lead
                </p>
                <p className="mt-0.5 truncate text-[12.5px] text-ink/55">
                  Real estate inquiry · Budget verified · Site visit booked
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
