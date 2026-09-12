"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Plane,
  Megaphone,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Sparkles,
} from "lucide-react";

interface TabData {
  id: string;
  label: string;
  icon: typeof Building2;
  title: string;
  metric1: { label: string; value: string; sub: string };
  metric2: { label: string; value: string; sub: string };
  metric3: { label: string; value: string; sub: string };
  funnelSteps: string[];
  recentActivity: string;
  tag: string;
}

const tabs: TabData[] = [
  {
    id: "real-estate",
    label: "Real Estate",
    icon: Building2,
    title: "High-Ticket Luxury Property Acquisition",
    metric1: { label: "Inventory Booked", value: "₹48.6 Cr", sub: "+38% vs target" },
    metric2: { label: "Site Visits", value: "1,420+", sub: "Verified HNIs" },
    metric3: { label: "Cost / Qualified Lead", value: "₹240", sub: "-42% lower CPA" },
    funnelSteps: [
      "Hyperlocal Meta & Google Ads",
      "Budget & Timeline Filter Bot",
      "Site-Visit CRM Sync",
    ],
    recentActivity: "4BHK Luxury Site Visit Confirmed · Budget ₹4.5 Cr+",
    tag: "Luxury Residential & Commercial",
  },
  {
    id: "immigration",
    label: "Immigration",
    icon: Plane,
    title: "Predictable Visa & Study Pipeline",
    metric1: { label: "Consultations", value: "3,850+", sub: "Pre-screened" },
    metric2: { label: "Attendance Rate", value: "91.4%", sub: "Automated SMS/WhatsApp" },
    metric3: { label: "Cost / Eligible Inquiry", value: "₹185", sub: "Optimized ROAS" },
    funnelSteps: [
      "Country-Specific Intake Funnels",
      "Eligibility Pre-Screening Flow",
      "Counselor Calendar Auto-Book",
    ],
    recentActivity: "Canada Express Entry Consultation Booked · CRS 485",
    tag: "Study Visa & PR Consultancies",
  },
  {
    id: "political",
    label: "Political",
    icon: Megaphone,
    title: "Constituency Digital War Room",
    metric1: { label: "Target Reach", value: "14.2M+", sub: "100% Geo-fenced" },
    metric2: { label: "Supporters Mobilized", value: "180K+", sub: "Direct WhatsApp opt-in" },
    metric3: { label: "Daily Content Ops", value: "24/7", sub: "Real-time counter narrative" },
    funnelSteps: [
      "Constituency Sentiment Mapping",
      "Micro-Targeted Video Narratives",
      "Grassroots Mobilization Engine",
    ],
    recentActivity: "Youth Voter Drive: 1,840 Volunteer Signups in 24 hrs",
    tag: "Elections & Narrative Strategy",
  },
  {
    id: "performance",
    label: "Brands & B2B",
    icon: TrendingUp,
    title: "Revenue & Performance Engine",
    metric1: { label: "Avg Account ROAS", value: "4.2x", sub: "Blended omni-channel" },
    metric2: { label: "Pipeline Generated", value: "₹18.4 Cr", sub: "High-ticket deals" },
    metric3: { label: "CAC Reduction", value: "-52%", sub: "Via high-converting CRO" },
    funnelSteps: [
      "Full-Funnel Paid Acquisition",
      "Conversion-First Landing Pages",
      "Retention & Re-targeting Loops",
    ],
    recentActivity: "B2B SaaS: ₹38L ARR Pipeline closed in 30 days",
    tag: "High-Growth Businesses",
  },
];

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState<TabData>(tabs[0]);

  return (
    <div className="relative">
      {/* Subtle background glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-accent/15 via-brand-orange/10 to-transparent blur-2xl" />

      {/* Main Console Box */}
      <div className="relative rounded-3xl border border-paper-line bg-white shadow-[0_16px_48px_rgba(13,20,32,0.08)]">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-paper-line/70 px-5 py-3.5 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-ink text-white">
              <Zap className="h-3.5 w-3.5 text-brand-orange" />
            </div>
            <div>
              <p className="text-xs font-semibold text-ink">Growth Engine Console</p>
              <p className="text-[10px] text-ink/40">Real-time Acquisition Architecture</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Live Performance
            </span>
          </div>
        </div>

        {/* Industry Tabs */}
        <div className="flex border-b border-paper-line/70 bg-paper/40 p-1.5 sm:p-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab.id === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`group relative flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-medium transition-all sm:text-xs ${
                  isSelected
                    ? "bg-white text-ink shadow-sm ring-1 ring-black/[0.04]"
                    : "text-ink/55 hover:text-ink hover:bg-white/50"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 transition-colors ${isSelected ? "text-accent" : "text-ink/40 group-hover:text-ink"}`} />
                <span className="hidden sm:inline">{tab.label}</span>
                {isSelected && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 rounded-xl ring-1 ring-black/[0.06]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Body */}
        <div className="p-5 sm:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-5"
            >
              {/* Header Title + Tag */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                    {activeTab.tag}
                  </span>
                  <h4 className="text-base font-semibold text-ink sm:text-lg">
                    {activeTab.title}
                  </h4>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-paper px-2.5 py-1 text-[11px] font-medium text-ink/60">
                  <ShieldCheck className="h-3 w-3 text-accent" /> Verified System
                </span>
              </div>

              {/* KPI Cards Grid */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                <div className="rounded-2xl border border-paper-line bg-paper/50 p-3 sm:p-3.5">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-ink/45">
                    {activeTab.metric1.label}
                  </p>
                  <p className="mt-1 font-display text-lg font-bold text-ink sm:text-xl">
                    {activeTab.metric1.value}
                  </p>
                  <p className="mt-0.5 text-[10px] font-semibold text-emerald-600">
                    {activeTab.metric1.sub}
                  </p>
                </div>

                <div className="rounded-2xl border border-paper-line bg-paper/50 p-3 sm:p-3.5">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-ink/45">
                    {activeTab.metric2.label}
                  </p>
                  <p className="mt-1 font-display text-lg font-bold text-ink sm:text-xl">
                    {activeTab.metric2.value}
                  </p>
                  <p className="mt-0.5 text-[10px] font-medium text-ink/50">
                    {activeTab.metric2.sub}
                  </p>
                </div>

                <div className="rounded-2xl border border-paper-line bg-paper/50 p-3 sm:p-3.5">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-ink/45">
                    {activeTab.metric3.label}
                  </p>
                  <p className="mt-1 font-display text-lg font-bold text-brand-orange sm:text-xl">
                    {activeTab.metric3.value}
                  </p>
                  <p className="mt-0.5 text-[10px] font-semibold text-accent">
                    {activeTab.metric3.sub}
                  </p>
                </div>
              </div>

              {/* Funnel Pipeline Architecture */}
              <div className="rounded-2xl border border-paper-line/80 bg-white p-3.5 shadow-sm sm:p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-ink/50">
                  Execution Pipeline
                </p>
                <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2">
                  {activeTab.funnelSteps.map((step, idx) => (
                    <div key={step} className="flex flex-1 items-center gap-2">
                      <div className="flex flex-1 items-center gap-2 rounded-xl border border-paper-line bg-paper/60 px-2.5 py-2 text-xs font-medium text-ink">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-[10px] font-bold text-white">
                          0{idx + 1}
                        </span>
                        <span className="truncate">{step}</span>
                      </div>
                      {idx < activeTab.funnelSteps.length - 1 && (
                        <span className="hidden text-ink/30 sm:inline">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Ticker Feed */}
              <div className="flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-50/70 px-3.5 py-2.5 text-xs text-emerald-900">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                <span className="truncate font-medium">{activeTab.recentActivity}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
