"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Plane,
  Megaphone,
  TrendingUp,
  MessageCircle,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import { site } from "@/lib/site";
import { useEnquiry } from "@/context/enquiry-context";

const showcaseCategories = [
  {
    id: "real-estate",
    title: "Luxury Real Estate",
    icon: Building2,
    badge: "High-Ticket Property Acquisition",
    headline: "Gurugram Luxury High-Rise Launch",
    subtext: "Hyper-targeted HNI buyer acquisition with instant WhatsApp verification.",
    primaryMetric: "₹48.6 Cr",
    primaryLabel: "Inventory Booked",
    secondaryMetric: "1,420+",
    secondaryLabel: "Verified Site Visits",
    whatsappProof: {
      sender: "Amit Khurana (HNI Investor)",
      message: "Hi, want to confirm site visit for 4BHK DLF Phase 5 on Sunday. Please share floor plans.",
      time: "2 mins ago",
    },
    funnel: "Meta Ads → WhatsApp Bot → Site Visit Sync",
  },
  {
    id: "immigration",
    title: "Immigration & Visa",
    icon: Plane,
    badge: "Predictable Visa Pipeline",
    headline: "Canada & UK Study / PR Intake",
    subtext: "Automated eligibility filtering so counselors only talk to qualified candidates.",
    primaryMetric: "3,850+",
    primaryLabel: "Consultations Booked",
    secondaryMetric: "91.4%",
    secondaryLabel: "Show-Up Rate",
    whatsappProof: {
      sender: "Rhea Malhotra (Study Visa)",
      message: "I completed the eligibility form. IELTS score is 7.5. Can we schedule consultation today?",
      time: "5 mins ago",
    },
    funnel: "Intake Qualifier → Document Check → Calendar Sync",
  },
  {
    id: "political",
    title: "Political Campaigns",
    icon: Megaphone,
    badge: "24/7 Digital War Room",
    headline: "Constituency Narrative & Outreach",
    subtext: "War room content ops, sentiment monitoring, and grassroots voter mobilization.",
    primaryMetric: "14.2M+",
    primaryLabel: "Target Impressions",
    secondaryMetric: "180K+",
    secondaryLabel: "Grassroots Supporters",
    whatsappProof: {
      sender: "Constituency Coordinator",
      message: "Ward 14 video narrative reached 94k views in 6 hours. Volunteer registrations up 40%.",
      time: "Just now",
    },
    funnel: "Sentiment Mapping → Geo Ads → Ground Mobilization",
  },
  {
    id: "performance",
    title: "Brands & B2B",
    icon: TrendingUp,
    badge: "Full-Funnel Performance",
    headline: "Omnichannel Acquisition Rebuild",
    subtext: "High-converting CRO landing pages paired with Google Search & Meta scale.",
    primaryMetric: "4.2x",
    primaryLabel: "Blended ROAS",
    secondaryMetric: "-52%",
    secondaryLabel: "Lower Customer CPA",
    whatsappProof: {
      sender: "Managing Director",
      message: "Our cost per qualified lead dropped to ₹210 this month. Excellent pipeline quality.",
      time: "10 mins ago",
    },
    funnel: "Search Intent → Custom CRO Pages → CRM Pipeline",
  },
];

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState(showcaseCategories[0]);
  const { openEnquiry } = useEnquiry();

  return (
    <div className="relative">
      {/* Background atmospheric glow */}
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-accent/15 via-brand-orange/10 to-transparent blur-3xl" />

      {/* Main Agency Portfolio Card */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-paper-line bg-white shadow-[0_20px_50px_rgba(13,20,32,0.08)]">
        {/* Industry Pill Selector Header */}
        <div className="border-b border-paper-line/70 bg-paper/50 p-2.5 sm:p-3">
          <div className="flex gap-1 overflow-x-auto no-scrollbar">
            {showcaseCategories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeTab.id === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat)}
                  className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-ink text-white shadow-sm"
                      : "text-ink/60 hover:bg-white hover:text-ink"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Agency Showcase Content */}
        <div className="p-5 sm:p-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-5"
            >
              {/* Campaign Header */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {activeTab.badge}
                  </span>
                  <span className="text-[11px] font-medium text-ink/40">
                    Live Client System
                  </span>
                </div>
                <h3 className="mt-2.5 font-display text-xl font-bold text-ink sm:text-2xl">
                  {activeTab.headline}
                </h3>
                <p className="mt-1 text-xs text-ink/60 sm:text-sm">
                  {activeTab.subtext}
                </p>
              </div>

              {/* Two High-Impact Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-paper-line bg-paper/40 p-4">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-ink/45">
                    {activeTab.primaryLabel}
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
                    {activeTab.primaryMetric}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold text-emerald-600">
                    ✓ Verified Result
                  </p>
                </div>

                <div className="rounded-2xl border border-paper-line bg-paper/40 p-4">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-ink/45">
                    {activeTab.secondaryLabel}
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-brand-orange sm:text-3xl">
                    {activeTab.secondaryMetric}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold text-accent">
                    High Conversion Intent
                  </p>
                </div>
              </div>

              {/* Real WhatsApp Lead Proof Box */}
              <div className="rounded-2xl border border-emerald-500/25 bg-emerald-50/50 p-3.5 sm:p-4">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xs">
                      <MessageCircle className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-bold text-emerald-950">
                      {activeTab.whatsappProof.sender}
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-700/60 font-medium">
                    {activeTab.whatsappProof.time}
                  </span>
                </div>
                <div className="mt-2.5 rounded-xl bg-white p-3 text-xs text-ink/80 shadow-xs border border-emerald-500/10">
                  <p className="italic leading-relaxed">
                    &ldquo;{activeTab.whatsappProof.message}&rdquo;
                  </p>
                </div>
              </div>

              {/* Bottom Execution Funnel Strip + CTA */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-paper-line/80 pt-4">
                <div className="text-xs text-ink/50">
                  <span className="font-semibold text-ink">Architecture:</span>{" "}
                  {activeTab.funnel}
                </div>

                <button
                  onClick={() => openEnquiry(activeTab.title)}
                  className="group inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline"
                >
                  <span>Build This System</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
