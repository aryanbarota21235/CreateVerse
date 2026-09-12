"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, UserCheck } from "lucide-react";

const ease = [0.21, 0.65, 0.35, 1] as const;

function PipelineCard() {
  const stages = [
    { label: "Traffic", value: "48.2K", w: 100 },
    { label: "Leads", value: "3,140", w: 74 },
    { label: "Qualified", value: "1,208", w: 52 },
    { label: "Converted", value: "312", w: 34 },
  ];
  return (
    <div className="rounded-3xl border border-paper-line bg-white p-6 shadow-lift sm:p-7">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/40">Lead Pipeline</p>
        <span className="flex items-center gap-1.5 rounded-full border border-accent/20 bg-brand-sky px-2.5 py-1 text-[11px] font-medium text-accent">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent" /> Live
        </span>
      </div>
      <div className="mt-5 space-y-3.5">
        {stages.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.6, ease }}
            className="flex items-center gap-3"
          >
            <span className="w-20 text-xs font-medium text-ink/50">{s.label}</span>
            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-paper-soft">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent to-brand-orange"
                initial={{ width: 0 }}
                animate={{ width: `${s.w}%` }}
                transition={{ delay: 0.7 + i * 0.15, duration: 0.9, ease }}
              />
            </div>
            <span className="w-14 text-right font-display text-sm font-semibold text-ink">{s.value}</span>
          </motion.div>
        ))}
      </div>
      <p className="mt-5 border-t border-paper-line pt-4 text-[11px] leading-relaxed text-ink/35">
        Illustrative dashboard — representative of the systems we build, not a client claim.
      </p>
    </div>
  );
}

function ChartCard() {
  const bars = [34, 48, 41, 62, 55, 74, 68, 88];
  return (
    <div className="rounded-2xl border border-paper-line bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/40">Growth</p>
        <TrendingUp className="h-4 w-4 text-brand-orange" />
      </div>
      <div className="mt-4 flex h-24 items-end gap-1.5">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className={`flex-1 rounded-t-md ${i === bars.length - 1 ? "bg-brand-orange" : "bg-accent/25"}`}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: 0.6 + i * 0.08, duration: 0.7, ease }}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between text-[11px] text-ink/40">
        <span>Last 8 weeks</span>
        <span className="flex items-center gap-1 font-semibold text-accent">
          <ArrowUpRight className="h-3.5 w-3.5" /> +158%
        </span>
      </div>
    </div>
  );
}

function LeadToast() {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-paper-line bg-white p-4 shadow-card">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-sun text-brand-orange">
        <UserCheck className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-ink">New qualified lead</p>
        <p className="truncate text-xs text-ink/45">Real estate inquiry · Budget verified · Site visit requested</p>
      </div>
    </div>
  );
}

export default function HeroVisual() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-brand-sky via-transparent to-brand-sun" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.9, ease }}
        className="relative"
      >
        <PipelineCard />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease }}
          className="absolute -left-3 -top-10 w-48 sm:-left-8 sm:w-56"
        >
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
            <ChartCard />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease }}
          className="absolute -bottom-10 -right-2 w-72 sm:-right-6 sm:w-80"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <LeadToast />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
