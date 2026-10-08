"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Rocket,
  TrendingUp,
  UserCheck,
} from "lucide-react";
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

// `short` is the phone label: all four fit on one line at 375px wide
const industries = [
  { name: "Real Estate", short: "Real Estate", color: "bg-accent", href: "/services/real-estate-lead-generation" },
  { name: "Immigration", short: "Immigration", color: "bg-amber-500", href: "/services/immigration-lead-generation" },
  { name: "Political Campaigns", short: "Political", color: "bg-sky-500", href: "/services/political-management" },
  { name: "Performance Marketing", short: "Performance Ads", color: "bg-brand-orange", href: "/services/performance-marketing" },
];

// The notification card cycles through these (CSS keyframes, staggered by index)
const alerts = [
  {
    icon: UserCheck,
    title: "New qualified lead",
    desc: "Real estate inquiry · Budget verified · Site visit booked",
    tone: "bg-amber-100 text-amber-600",
  },
  {
    icon: CalendarCheck,
    title: "Consultation booked",
    desc: "Study visa applicant · Documents pre-screened",
    tone: "bg-sky-100 text-sky-600",
  },
  {
    icon: Rocket,
    title: "Campaign scaled",
    desc: "Meta Ads · Budget +40% at 3.8x ROAS",
    tone: "bg-emerald-100 text-emerald-600",
  },
];

export default function Hero() {
  const { openEnquiry } = useEnquiry();

  return (
    <section className="relative overflow-hidden bg-paper pt-[88px] pb-14 sm:pt-28 sm:pb-24 lg:pb-28">
      {/* Ambient: dot grid, warm glow left, sky glow right */}
      <div className="dot-texture fade-bottom absolute inset-x-0 top-0 h-[720px] opacity-70 pointer-events-none" />
      <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,237,213,0.9)_0%,rgba(255,237,213,0.3)_40%,transparent_70%)] pointer-events-none" />
      <div className="absolute -right-40 top-1/4 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(224,242,254,0.85)_0%,rgba(224,242,254,0.3)_40%,transparent_70%)] pointer-events-none" />

      <div className="container-site relative">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-12 xl:gap-16">
          {/* ---------------- Left: copy ---------------- */}
          <div className="max-w-[680px]">
            {/* The local keyword lives inside the H1 (the homepage owns it); styled as the pill */}
            <h1 className="font-display text-[36px] leading-[1.02] min-[400px]:text-[40px] sm:text-[50px] sm:leading-[1.0] lg:text-[52px] xl:text-[58px] 2xl:text-[64px] font-bold tracking-[-0.04em] text-ink">
              <span className="mb-4 sm:mb-7 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 sm:px-4 sm:py-2 font-sans text-[12px] sm:text-[13px] font-medium leading-normal tracking-normal text-ink/75 shadow-xs ring-1 ring-black/[0.05]">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>Best Digital Marketing Agency in Karnal, India</span>
              </span>
              <span className="block">
                Turn digital attention into{" "}
                <span className="whitespace-nowrap bg-gradient-to-r from-[#0EA5E9] via-[#7FA05C] to-[#F59E0B] bg-clip-text text-transparent">
                  real business.
                </span>
              </span>
            </h1>

            <p className="mt-3.5 sm:mt-6 max-w-[560px] text-[14.5px] sm:text-[16px] lg:text-[17px] leading-[1.5] sm:leading-[1.6] text-ink/65">
              CreateVerse builds digital growth systems for real estate, immigration, political
              campaigns and ambitious businesses — generating qualified leads, acquiring customers
              and scaling campaigns that perform.
            </p>

            <div className="mt-5 sm:mt-9 flex flex-col items-stretch gap-3.5 sm:gap-4 sm:items-start">
              <div className="grid grid-cols-2 gap-2.5 sm:flex sm:gap-3">
                <button
                  type="button"
                  onClick={() => openEnquiry()}
                  className="pressable group inline-flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-full bg-ink px-3 py-3 sm:px-6 sm:py-3.5 text-[13px] sm:text-[15px] font-semibold tracking-[-0.01em] text-white shadow-lift transition-all duration-150 hover:-translate-y-0.5 hover:bg-accent cursor-pointer"
                >
                  <span className="sm:hidden">Growth Strategy</span>
                  <span className="hidden sm:inline">Get a Growth Strategy</span>
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <Link
                  href="/learn-digital-marketing"
                  prefetch={true}
                  className="pressable group inline-flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-full bg-amber-500 px-3 py-3 sm:px-6 sm:py-3.5 text-[13px] sm:text-[15px] font-semibold tracking-[-0.01em] text-white shadow-md shadow-amber-500/25 transition-all duration-150 hover:-translate-y-0.5 hover:bg-amber-600"
                >
                  <span className="sm:hidden">Learn Marketing</span>
                  <span className="hidden sm:inline">Learn Digital Marketing</span>
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <Link
                href="/services"
                prefetch={true}
                className="group inline-flex items-center gap-1.5 self-center text-[14px] sm:ml-6 sm:self-start sm:text-[15px] font-semibold text-ink/70 transition-colors hover:text-accent"
              >
                <span className="border-b border-ink/20 pb-px transition-colors group-hover:border-accent">
                  Explore Our Services
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <ul className="mt-6 flex justify-between whitespace-nowrap text-[11.5px] text-ink/60 sm:mt-10 sm:flex-wrap sm:justify-start sm:gap-x-6 sm:gap-y-3 sm:whitespace-normal sm:text-[14px]">
              {industries.map((i) => (
                <li key={i.name} className="shrink-0">
                  <Link
                    href={i.href}
                    prefetch={true}
                    className="group/ind inline-flex items-center gap-1.5 py-1 transition-colors hover:text-accent sm:gap-2"
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${i.color}`} />
                    <span className="border-b border-transparent transition-colors group-hover/ind:border-accent/40 sm:hidden">
                      {i.short}
                    </span>
                    <span className="hidden border-b border-transparent transition-colors group-hover/ind:border-accent/40 sm:inline">
                      {i.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------------- Right: layered dashboard ---------------- */}
          <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto lg:mr-0 lg:max-w-[520px]">
            {/* Growth card (front, top-left) */}
            <div className="relative z-10 mb-3 w-full sm:absolute sm:-top-10 sm:-left-6 sm:mb-0 sm:w-[46%] sm:max-w-[210px] lg:-top-12 lg:-left-8">
              <div
                className="float-soft rounded-[20px] bg-white p-3.5 shadow-soft ring-1 ring-black/[0.05] sm:p-4"
                style={{ animationDelay: "-2.2s" }}
              >
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/45">Growth</p>
                  <TrendingUp className="h-4 w-4 text-amber-500" />
                </div>
                <div className="mt-3 flex h-12 items-end gap-1.5 sm:h-14">
                  {bars.map((h, i) => (
                    <div
                      key={i}
                      className={`grow rounded-t-md rounded-b-sm ${
                        i === bars.length - 1 ? "bar-glow bg-amber-500" : "bg-sky-200"
                      }`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="mt-2.5 flex items-center justify-between text-[11px]">
                  <span className="text-ink/50">Last 8 weeks</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-sky-600">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                    +158%
                  </span>
                </div>
              </div>
            </div>

            {/* Main funnel card */}
            <div className="relative w-full rounded-[24px] bg-white px-5 pt-5 pb-20 sm:pb-14 shadow-soft ring-1 ring-black/[0.04] sm:ml-auto sm:w-[84%] sm:px-6 sm:pt-6 sm:mt-8 lg:mt-10">
              <div className="flex items-start justify-between sm:pl-32 lg:pl-36">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/45">
                    Acquisition funnel
                  </p>
                  <p className="mt-0.5 font-display text-[16px] font-bold tracking-tight text-ink">
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

              <div className="mt-5 space-y-3.5 sm:space-y-4">
                {funnel.map((row, i) => (
                  <div key={row.label} className="flex items-center gap-3 sm:gap-4">
                    <span className="w-[72px] shrink-0 text-[13px] text-ink/55">
                      {row.label}
                    </span>
                    <div className="h-2 grow rounded-full bg-stone-200/80">
                      <div
                        className="bar-shine h-full rounded-full"
                        style={{
                          width: row.width,
                          backgroundImage: `linear-gradient(90deg, ${row.from}, ${row.to})`,
                          animationDelay: `${i * 0.35}s`,
                        }}
                      />
                    </div>
                    <span className="w-12 shrink-0 text-right font-display text-[15px] font-bold tabular-nums tracking-tight text-ink">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-5 border-t border-stone-200/80 pt-3.5 text-[11px] leading-relaxed text-ink/40">
                Illustrative dashboard — representative of the systems we build, not a client claim.
              </p>
            </div>

            {/* Notification card (front, bottom-right): three alerts take turns */}
            <div className="absolute z-10 -bottom-6 left-3 right-3 max-w-[360px] sm:left-0 sm:right-auto sm:w-[82%] sm:-bottom-7 lg:-left-4">
              <div
                className="float-soft relative rounded-[18px] bg-white shadow-soft ring-1 ring-black/[0.05] sm:rounded-[20px]"
                style={{ animationDelay: "-4.1s" }}
              >
                {alerts.map((a, i) => {
                  const Icon = a.icon;
                  return (
                    <div
                      key={a.title}
                      className={`alert-cycle flex items-center gap-3.5 p-3.5 sm:p-4 ${
                        i === 0 ? "relative" : "absolute inset-0"
                      }`}
                      style={{ animationDelay: `${i * 4}s` }}
                    >
                      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center">
                        {i === 0 && <span className="node-ring absolute inset-0 rounded-full bg-amber-400/40" />}
                        <span
                          className={`relative flex h-10 w-10 items-center justify-center rounded-full ${a.tone}`}
                        >
                          <Icon className="h-[18px] w-[18px]" />
                        </span>
                      </span>
                      <div className="min-w-0">
                        <p className="font-display text-[14px] font-bold tracking-tight text-ink">
                          {a.title}
                        </p>
                        <p className="mt-0.5 truncate text-[12px] text-ink/55">{a.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
