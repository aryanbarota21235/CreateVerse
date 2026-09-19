"use client";

import React, { useState } from "react";
import {
  Megaphone,
  Target,
  TrendingUp,
  Users,
  Code2,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface ModuleData {
  id: string;
  badge: string;
  week: string;
  title: string;
  icon: React.ElementType;
  tag: string;
  highlight: string;
  outcome: string;
  skills: string[];
  deliverable: string;
  tools: string[];
}

const modulesData: ModuleData[] = [
  {
    id: "meta-ads",
    badge: "Module 01",
    week: "Weeks 1 & 2",
    title: "Meta & Instagram Paid Performance Architecture",
    icon: Megaphone,
    tag: "Social Acquisition",
    highlight: "Scale from ₹1,000/day to ₹50,000/day without algorithmic fatigue",
    outcome: "Command Meta's modern machine learning algorithms and master creative testing systems.",
    skills: [
      "Advantage+ Shopping & Lead campaigns vs Manual CBO/ABO structures",
      "Dynamic creative testing: Hook, Hold-rate, Body & CTA psychological matrix",
      "First-party customer list hashing & high-value Lookalike architectures",
      "Broad targeting optimization and cost-per-acquisition (CPA) stabilization",
      "High-ticket ad copy engineering that stops the scroll and filters tire-kickers",
    ],
    deliverable: "A battle-tested Meta campaign structure ready to deploy live client budgets.",
    tools: ["Meta Ads Manager", "Meta Business Suite", "Canva Pro", "Ad Library"],
  },
  {
    id: "google-ads",
    badge: "Module 02",
    week: "Weeks 3 & 4",
    title: "High-Intent Google Ads & Performance Max",
    icon: Target,
    tag: "Search Intent",
    highlight: "Capture customers at the exact millisecond they search with purchasing intent",
    outcome: "Own top-of-page Google Search placement without wasting budget on irrelevant clicks.",
    skills: [
      "High-intent keyword taxonomy: Commercial vs Informational keyword sculpting",
      "Exact match vs Phrase match architectures paired with aggressive negative keyword lists",
      "Smart bidding mechanics: Target CPA, Target ROAS & Maximize Conversion Value",
      "Performance Max campaigns with verified audience signals and asset groups",
      "Competitor conquesting strategies that siphon high-intent buyer traffic legally",
    ],
    deliverable: "A complete Google Search & PMax campaign hierarchy with conversion value bidding.",
    tools: ["Google Ads Manager", "Keyword Planner", "Google Trends", "SpyFu"],
  },
  {
    id: "lead-funnels",
    badge: "Module 03",
    week: "Week 5",
    title: "High-Ticket Lead Generation & Funnel Engineering",
    icon: TrendingUp,
    tag: "Lead Funnels",
    highlight: "Generate phone-answering, verified inquiries for real estate, visa & B2B",
    outcome: "Stop generating junk leads. Build multi-step qualification funnels with automated qualification.",
    skills: [
      "Multi-step lead qualification forms that filter out non-serious applicants",
      "WhatsApp Business API chatbots with automated eligibility questionnaire routing",
      "Real estate project launch funnels engineered for site visits and HNI buyers",
      "Immigration & study visa intake funnels across Canada, UK and European programs",
      "CRM pipeline automation via Webhooks, Zapier, Make, and Google Sheets",
    ],
    deliverable: "An end-to-end automated lead capture, qualification, and sales CRM pipeline.",
    tools: ["WhatsApp Cloud API", "Zapier", "Make.com", "HubSpot / Zoho CRM"],
  },
  {
    id: "political-war-room",
    badge: "Module 04",
    week: "Week 6",
    title: "Political Campaign & Digital War Room Execution",
    icon: Users,
    tag: "War Room Operations",
    highlight: "Learn 24/7 digital operations powering state MLAs and electoral candidates",
    outcome: "Understand how public perception, booth-level voter mobilization, and narrative defense work.",
    skills: [
      "Constituency-level micro-targeting by demographic, age group, and local issues",
      "The 30-Minute Counter-Response Protocol: Fact-checking and narrative deflection",
      "Regional short-form video production formats engineered for WhatsApp virality",
      "Voter sentiment pulse tracking & daily war room intelligence reporting",
      "Air-gapped digital security, crisis management, and rumor mitigation",
    ],
    deliverable: "A mock constituency digital election war room strategy and 7-day battle playbook.",
    tools: ["Meta Ad Library", "Twitter/X Trends", "WhatsApp Broadcasts", "Canva / Premiere"],
  },
  {
    id: "cro-landing-pages",
    badge: "Module 05",
    week: "Week 7",
    title: "Landing Page CRO & Conversion Science",
    icon: Code2,
    tag: "Web & CRO",
    highlight: "Double your ad conversion rate before touching a single bidding button",
    outcome: "Design sub-second, mobile-first landing pages that turn cold clicks into paying inquiries.",
    skills: [
      "The Hook-Story-Offer above-the-fold wireframe that prevents immediate bounce",
      "Sub-second load speed optimization for mobile 4G networks across Tier-2/3 cities",
      "Eliminating conversion friction: Mobile form UX, trust seals, and social proof anchors",
      "User session recording analysis and click heatmaps using Microsoft Clarity",
      "Formulating high-confidence A/B split-tests for headlines, pricing, and button CTA",
    ],
    deliverable: "A production-grade, conversion-optimized mobile landing page wireframe & copy draft.",
    tools: ["Microsoft Clarity", "Figma", "Next.js / HTML", "PageSpeed Insights"],
  },
  {
    id: "tracking-attribution",
    badge: "Module 06",
    week: "Week 8",
    title: "Analytics, Server-Side Tracking & Full Attribution",
    icon: BarChart3,
    tag: "Data & Attribution",
    highlight: "Bypass iOS tracking loss with server-side CAPI and enterprise GA4 setups",
    outcome: "Track every single rupee spent with complete attribution confidence.",
    skills: [
      "Google Tag Manager (GTM) custom event trigger configurations and data layers",
      "Meta Conversions API (CAPI) server-side event tracking to bypass iOS 14.5+ ad blocking",
      "Google Analytics 4 (GA4) custom exploration reports and multi-channel attribution funnels",
      "Blended ROAS vs In-Platform ROAS: Managing overall client marketing return",
      "Building automated executive client reporting dashboards in Google Looker Studio",
    ],
    deliverable: "A live GTM & Meta CAPI server-side event setup with automated Looker Studio dashboard.",
    tools: ["Google Tag Manager", "Meta CAPI", "Google Analytics 4", "Looker Studio"],
  },
];

export default function AcademyCurriculumTabs() {
  const [activeTab, setActiveTab] = useState<string>("meta-ads");
  const current = modulesData.find((m) => m.id === activeTab) || modulesData[0];
  const IconComp = current.icon;

  return (
    <div className="mt-8 sm:mt-12 rounded-2xl sm:rounded-3xl border border-stone-200 bg-white p-4 sm:p-8 shadow-card">
      {/* Module Selector Pill Bar */}
      <div className="flex gap-2 overflow-x-auto pb-3 sm:pb-4 no-scrollbar border-b border-stone-100">
        {modulesData.map((m) => {
          const TabIcon = m.icon;
          const isActive = m.id === activeTab;
          return (
            <button
              key={m.id}
              onClick={() => setActiveTab(m.id)}
              className={`pressable shrink-0 flex items-center gap-2 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#090D15] text-white shadow-md"
                  : "bg-stone-100/80 text-stone-600 hover:bg-stone-200/80 hover:text-ink"
              }`}
            >
              <TabIcon className={`h-4 w-4 ${isActive ? "text-accent" : "text-stone-500"}`} />
              <span>{m.badge}</span>
              <span className="hidden sm:inline text-xs font-normal opacity-80">({m.tag})</span>
            </button>
          );
        })}
      </div>

      {/* Active Module Detailed View */}
      <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
        {/* Left 7 Cols: Overview, Highlight, & Skills */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className="rounded-full bg-accent/[0.08] border border-accent/20 px-3 py-1 text-[11px] font-bold text-accent">
                {current.week}
              </span>
              <span className="rounded-full bg-stone-100 px-3 py-1 text-[11px] font-semibold text-stone-600">
                {current.tag}
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-ink leading-snug">
              {current.title}
            </h3>

            <p className="mt-2.5 text-xs sm:text-base text-accent font-semibold flex items-center gap-2">
              <Zap className="h-4 w-4 shrink-0" />
              <span>{current.highlight}</span>
            </p>

            <p className="mt-2 text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
              {current.outcome}
            </p>
          </div>

          <div className="rounded-xl border border-stone-200 bg-[#F8FAFC] p-4 sm:p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-3">
              What You Will Physically Execute:
            </h4>
            <ul className="space-y-2.5">
              {current.skills.map((skill, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span className="leading-snug">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right 5 Cols: Deliverable, Tools & Assessment */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl border border-accent/30 bg-accent/[0.03] p-5 sm:p-6">
            <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-wider mb-2">
              <ShieldCheck className="h-4 w-4" />
              <span>Real Agency Deliverable</span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-ink leading-relaxed">
              {current.deliverable}
            </p>
            <p className="mt-2 text-[11px] text-stone-500 font-normal">
              Every student must build and defend this asset in front of senior directors to complete the module.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
              Tools &amp; Platforms You Master in This Module:
            </h4>
            <div className="flex flex-wrap gap-2">
              {current.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs font-semibold text-stone-700 shadow-2xs"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-[#090D15] p-5 text-white">
            <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">War Room Live Practice</p>
            <p className="mt-1 text-xs sm:text-sm font-medium text-stone-200 leading-relaxed">
              You will sit side-by-side with our media buyers during real ad spend scaling sessions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
