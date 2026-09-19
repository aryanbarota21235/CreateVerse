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
  Zap,
  ShieldCheck,
} from "lucide-react";

interface ModuleData {
  id: string;
  badge: string;
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
    title: "Meta & Instagram Paid Performance Architecture",
    icon: Megaphone,
    tag: "Social Ads",
    highlight: "Scaling campaigns from test budgets to high volume without CPA fatigue",
    outcome: "Command Meta's modern machine learning algorithms and master dynamic creative testing systems.",
    skills: [
      "Advantage+ Shopping & Lead campaigns vs manual CBO/ABO structures",
      "Dynamic creative testing: Hook, Hold-rate, Body copy & visual testing matrix",
      "First-party customer list hashing & high-value Lookalike architectures",
      "Broad targeting optimization and cost-per-acquisition (CPA) stabilization",
      "Ad copy engineering that filters tire-kickers and drives serious inquiries",
    ],
    deliverable: "A battle-tested Meta campaign structure ready to deploy live client budgets.",
    tools: ["Meta Ads Manager", "Meta Business Suite", "Canva Pro", "Ad Library"],
  },
  {
    id: "google-ads",
    badge: "Module 02",
    title: "High-Intent Google Ads & Performance Max",
    icon: Target,
    tag: "Search Intent",
    highlight: "Capture customers at the exact second they search with buying intent",
    outcome: "Own top-of-page Google Search placement without wasting budget on irrelevant clicks.",
    skills: [
      "High-intent keyword taxonomy: Commercial vs Informational keyword sculpting",
      "Exact match vs Phrase match architectures paired with negative keyword lists",
      "Smart bidding mechanics: Target CPA, Target ROAS & Maximize Conversion Value",
      "Performance Max setup with verified audience signals and clean asset groups",
      "Competitor conquesting strategies that siphon high-intent buyer traffic",
    ],
    deliverable: "A complete Google Search & PMax campaign hierarchy with conversion value bidding.",
    tools: ["Google Ads Manager", "Keyword Planner", "Google Trends", "SpyFu"],
  },
  {
    id: "lead-funnels",
    badge: "Module 03",
    title: "High-Ticket Lead Generation & Funnel Engineering",
    icon: TrendingUp,
    tag: "Lead Funnels",
    highlight: "Generate phone-answering, pre-qualified inquiries for real estate & businesses",
    outcome: "Stop generating junk leads. Build multi-step qualification funnels with automated nurturing.",
    skills: [
      "Multi-step lead qualification forms that filter out non-serious inquiries",
      "WhatsApp Business automated chatbot routing & nurture flows",
      "Real estate project launch funnels engineered for verified site visits",
      "Immigration & study visa intake funnels across international programs",
      "CRM pipeline automation via Webhooks, Zapier, and Make",
    ],
    deliverable: "An end-to-end automated lead capture, qualification, and sales CRM pipeline.",
    tools: ["WhatsApp Cloud API", "Zapier", "Make.com", "HubSpot / Zoho CRM"],
  },
  {
    id: "political-war-room",
    badge: "Module 04",
    title: "Political Campaign & Digital War Room Execution",
    icon: Users,
    tag: "War Room Media",
    highlight: "Learn 24/7 digital operations powering state leaders and electoral campaigns",
    outcome: "Understand how public perception, booth-level voter mobilization, and narrative defense work.",
    skills: [
      "Constituency-level micro-targeting by demographic and local issues",
      "The 30-Minute Counter-Response Protocol: Fact-checking and narrative deflection",
      "Regional short-form video production formats engineered for WhatsApp virality",
      "Voter sentiment pulse tracking & daily digital intelligence reporting",
      "Digital security, crisis management, and rumor mitigation protocols",
    ],
    deliverable: "A constituency digital election war room strategy and battle playbook.",
    tools: ["Meta Ad Library", "Twitter/X Trends", "WhatsApp Broadcasts", "Canva / Premiere"],
  },
  {
    id: "cro-landing-pages",
    badge: "Module 05",
    title: "Landing Page CRO & Conversion Science",
    icon: Code2,
    tag: "Conversion Web",
    highlight: "Double your ad conversion rate with high-speed landing page architecture",
    outcome: "Design sub-second, mobile-first landing pages that turn cold clicks into paying inquiries.",
    skills: [
      "The Hook-Story-Offer above-the-fold wireframe that prevents immediate bounce",
      "Sub-second load speed optimization for mobile networks",
      "Eliminating conversion friction: Mobile form UX, trust seals, and social proof",
      "User session recording analysis and click heatmaps using Microsoft Clarity",
      "Formulating high-confidence A/B split-tests for headlines, copy, and CTA buttons",
    ],
    deliverable: "A production-grade, conversion-optimized mobile landing page wireframe & copy draft.",
    tools: ["Microsoft Clarity", "Figma", "Next.js / HTML", "PageSpeed Insights"],
  },
  {
    id: "tracking-attribution",
    badge: "Module 06",
    title: "Analytics, Server-Side Tracking & Full Attribution",
    icon: BarChart3,
    tag: "Data & Attribution",
    highlight: "Bypass ad blockers and tracking loss with server-side CAPI and enterprise GA4",
    outcome: "Track every single rupee spent with complete attribution confidence.",
    skills: [
      "Google Tag Manager (GTM) custom event trigger configurations and data layers",
      "Meta Conversions API (CAPI) server-side event tracking setup",
      "Google Analytics 4 (GA4) custom exploration reports and conversion funnels",
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
    <div className="mt-8 rounded-2xl sm:rounded-3xl border border-stone-200 bg-white p-4 sm:p-8 shadow-card">
      {/* Horizontal Scroll Pill Bar */}
      <div className="flex gap-2 overflow-x-auto pb-3 sm:pb-4 no-scrollbar border-b border-stone-100">
        {modulesData.map((m) => {
          const TabIcon = m.icon;
          const isActive = m.id === activeTab;
          return (
            <button
              key={m.id}
              onClick={() => setActiveTab(m.id)}
              className={`pressable shrink-0 flex items-center gap-2 rounded-xl px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#090D15] text-white shadow-sm"
                  : "bg-stone-100/90 text-stone-600 hover:bg-stone-200/90 hover:text-ink"
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
        <div className="lg:col-span-7 space-y-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="rounded-full bg-accent/[0.08] border border-accent/20 px-3 py-0.5 text-[11px] font-bold text-accent">
                {current.badge}
              </span>
              <span className="rounded-full bg-stone-100 px-3 py-0.5 text-[11px] font-semibold text-stone-600">
                {current.tag}
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-ink leading-snug">
              {current.title}
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-accent font-semibold flex items-center gap-1.5">
              <Zap className="h-4 w-4 shrink-0" />
              <span>{current.highlight}</span>
            </p>

            <p className="mt-1.5 text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
              {current.outcome}
            </p>
          </div>

          <div className="rounded-xl border border-stone-200 bg-[#F8FAFC] p-4 sm:p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-2.5">
              Key Topics &amp; Practice:
            </h4>
            <ul className="space-y-2">
              {current.skills.map((skill, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span className="leading-snug">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right 5 Cols: Deliverable, Tools */}
        <div className="lg:col-span-5 space-y-3.5">
          <div className="rounded-xl border border-accent/30 bg-accent/[0.04] p-4 sm:p-5">
            <div className="flex items-center gap-1.5 text-accent font-bold text-xs uppercase tracking-wider mb-1.5">
              <ShieldCheck className="h-4 w-4" />
              <span>Practical Deliverable</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-ink leading-relaxed">
              {current.deliverable}
            </p>
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2.5">
              Tools Mastered:
            </h4>
            <div className="flex flex-wrap gap-2">
              {current.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs font-semibold text-stone-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
