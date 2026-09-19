import type { Metadata } from "next";
import Link from "next/link";
import {
  Megaphone,
  Target,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Code2,
  Users,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";
import Faq from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import AcademyApplicationForm from "@/components/academy-application-form";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export const metadata: Metadata = {
  title: "Learn Practical Digital Marketing | CreateVerse",
  description:
    "Hands-on training in performance marketing, Meta ads, Google campaigns, lead funnels, and tracking — taught directly by practitioners working on active client accounts at CreateVerse.",
  keywords: [
    "learn digital marketing",
    "digital marketing training",
    "meta ads training India",
    "google ads training agency",
    "practical digital marketing Karnal",
    "lead generation course",
    "performance marketing Haryana",
    "CreateVerse training",
  ],
  alternates: {
    canonical: "https://createverse.in/learn-digital-marketing",
  },
  openGraph: {
    title: "Learn Practical Digital Marketing — CreateVerse",
    description:
      "Hands-on training in performance marketing, Meta ads, Google campaigns, lead funnels, and tracking — taught directly by practitioners working on active client accounts.",
    url: "https://createverse.in/learn-digital-marketing",
    siteName: "CreateVerse",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Learn Digital Marketing CreateVerse" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Practical Digital Marketing — CreateVerse",
    description:
      "Hands-on training in performance marketing, Meta ads, Google campaigns, lead funnels, and tracking.",
    images: ["/logo.png"],
  },
};

const modules = [
  {
    num: "01",
    title: "Meta & Instagram Paid Ads",
    icon: Megaphone,
    tag: "Paid Social",
    summary:
      "Master the science of scaling Facebook & Instagram ads profitably without creative or budget fatigue.",
    skills: [
      "Advantage+ campaigns vs manual CBO and ABO budgeting",
      "Dynamic creative testing: Hook, body copy & visual testing matrix",
      "Custom & Lookalike audience architecture from customer lists",
      "Broad targeting optimization and stabilizing cost-per-lead",
    ],
  },
  {
    num: "02",
    title: "Google Search & Performance Max",
    icon: Target,
    tag: "Search Intent",
    summary:
      "Capture high-intent searches the moment customers look for services. Own top-of-page Google placement.",
    skills: [
      "High-intent keyword research & negative keyword sculpting",
      "Exact match vs phrase match campaign structures",
      "Smart bidding mechanics: Target CPA & Maximize Conversion Value",
      "Performance Max campaigns with audience signals & clean asset groups",
    ],
  },
  {
    num: "03",
    title: "Lead Generation & Funnels",
    icon: TrendingUp,
    tag: "Lead Funnels",
    summary:
      "Build qualification funnels that generate verified, phone-answering inquiries for real estate, visa & B2B.",
    skills: [
      "Multi-step qualification forms filtering out non-serious applicants",
      "Automated WhatsApp qualification bots and instant follow-ups",
      "Real estate project launch funnels & site-visit scheduling",
      "CRM pipeline handoff via Webhooks, Zapier, and Make",
    ],
  },
  {
    num: "04",
    title: "Political Campaign & War Room Strategy",
    icon: Users,
    tag: "War Room Media",
    summary:
      "Learn how public perception, booth-level voter mobilization, and rapid-response digital deflection work.",
    skills: [
      "Constituency-level micro-targeting by demographic and local issues",
      "Rapid counter-response desk & real-time narrative shaping",
      "Regional short-form video virality strategies & hook formulas",
      "Voter sentiment tracking & grassroots volunteer coordination",
    ],
  },
  {
    num: "05",
    title: "Landing Page CRO & Conversion Science",
    icon: Code2,
    tag: "Conversion Web",
    summary:
      "Design and structure mobile-first landing pages that turn cold visitors into paying leads.",
    skills: [
      "The Hook-Story-Offer above-the-fold wireframing framework",
      "Sub-second mobile speed optimization and clean conversion UX",
      "Heatmaps and session recording analysis using Microsoft Clarity",
      "A/B split-testing headlines, copy, trust badges, and CTA buttons",
    ],
  },
  {
    num: "06",
    title: "Analytics, Server-Side Tracking & CAPI",
    icon: BarChart3,
    tag: "Tracking & Data",
    summary:
      "Measure every rupee spent. Master Google Analytics 4, Meta CAPI, and complete revenue attribution.",
    skills: [
      "Google Tag Manager (GTM) custom event trigger configurations",
      "Meta Conversions API (CAPI) server-side tracking setup",
      "Google Analytics 4 (GA4) custom funnels & conversion events",
      "Building client reporting dashboards in Google Looker Studio",
    ],
  },
];

const highlights = [
  "Hands-on learning on live client ad accounts, not dummy slides",
  "1-on-1 practical guidance directly from senior agency practitioners",
  "Available both in-person at our Karnal studio and live interactive online",
  "Real skills focused on getting high-paying jobs, freelancing, or scaling your own business",
];

const faqs = [
  {
    q: "Who is this training suitable for?",
    a: "Anyone looking to master practical digital marketing — students seeking high-paying agency jobs, freelancers wanting to offer high-ticket lead generation, and business owners looking to run their own customer acquisition.",
  },
  {
    q: "Is prior marketing or coding experience required?",
    a: "No prior experience is required. We start with foundational advertising psychology before moving step-by-step into live campaign setups and performance tracking.",
  },
  {
    q: "Is this training online or offline?",
    a: "We offer both options: in-person sessions at our office in Karnal, Haryana, as well as live interactive online sessions.",
  },
  {
    q: "How do I get started or know the fee details?",
    a: "Simply fill out the enquiry form below or message us directly on WhatsApp. Our team will share the complete details, syllabus, and answer any questions.",
  },
];

export default function LearnDigitalMarketingPage() {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello CreateVerse, I would like to know details about your practical digital marketing training."
  )}`;

  return (
    <>
      {/* =========================================================================
          HERO: Centered Middle Layout
          ========================================================================= */}
      <section className="relative overflow-hidden bg-paper pt-[72px] sm:pt-[84px] pb-12 sm:pb-20 border-b border-stone-200">
        <div className="dot-texture absolute inset-0 opacity-80 pointer-events-none" />
        <div className="hidden sm:block pointer-events-none absolute -left-28 top-16 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,237,213,0.7)_0%,rgba(255,237,213,0.2)_40%,transparent_70%)]" />
        <div className="hidden sm:block pointer-events-none absolute -right-28 top-12 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(224,242,254,0.6)_0%,rgba(224,242,254,0.2)_40%,transparent_70%)]" />
        <div className="hidden sm:block pointer-events-none absolute left-1/2 -top-24 -translate-x-1/2 h-[450px] w-[800px] rounded-full bg-[radial-gradient(ellipse_at_top,rgba(224,242,254,0.5)_0%,transparent_70%)]" />

        <div className="container-site relative pt-6 sm:pt-10">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              {/* Centered Breadcrumb */}
              <nav className="inline-flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider mb-4 sm:mb-6" aria-label="Breadcrumb">
                <Link href="/" prefetch={true} className="hover:text-accent transition-colors">
                  Home
                </Link>
                <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
                <span className="text-ink font-bold">Learn Digital Marketing</span>
              </nav>

              {/* Eyebrow Pill */}
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/[0.06] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-accent mb-3 sm:mb-4">
                  <Sparkles className="h-3 w-3" />
                  <span>Practical Training &amp; Mentorship</span>
                </span>
              </div>

              {/* Centered Main Title */}
              <h1 className="text-balance font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.14] sm:leading-tight">
                Learn Practical <span className="text-accent">Digital Marketing.</span>
              </h1>

              {/* Centered Description */}
              <p className="mx-auto mt-3.5 sm:mt-5 max-w-2xl text-xs sm:text-lg leading-relaxed text-stone-600 font-normal">
                Hands-on training in performance marketing, Meta ads, Google campaigns, lead funnels, and tracking — taught directly by practitioners working on active client accounts.
              </p>

              {/* Action Buttons Centered */}
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <a
                  href="#enquiry"
                  className="pressable group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-white shadow-md transition-all hover:bg-accent hover:shadow-lg cursor-pointer"
                >
                  <span>Enquire for Training</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pressable inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3.5 sm:px-7 sm:py-4 text-xs sm:text-sm font-bold text-ink shadow-xs hover:border-[#25D366] hover:text-[#1EBE5D] transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="h-4 w-4 fill-current text-[#25D366]" />
                  <span>Talk on WhatsApp</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MODULES SECTION: 6 Core Comprehensive Modules
          ========================================================================= */}
      <section className="bg-white py-14 sm:py-24 border-b border-stone-200">
        <div className="container-site">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                What You Will <span className="text-accent">Learn &amp; Master</span>
              </h2>
              <p className="mt-2 text-xs sm:text-base text-stone-600 font-normal">
                Comprehensive practical modules structured around real commercial advertising outcomes.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((m, idx) => {
              const IconComp = m.icon;
              return (
                <Reveal key={m.num} delay={idx * 0.06} className="h-full">
                  <div className="h-full flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-[#F8FAFC] p-5 sm:p-7 shadow-xs hover:border-accent hover:bg-white hover:shadow-card transition-all duration-200">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-display text-[11px] font-bold uppercase tracking-wider text-accent bg-accent/[0.08] px-2.5 py-0.5 rounded-full">
                          Module {m.num}
                        </span>
                        <span className="text-[11px] font-semibold text-stone-500 bg-white border border-stone-200 px-2.5 py-0.5 rounded-full">
                          {m.tag}
                        </span>
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-stone-200 text-accent">
                          <IconComp className="h-5 w-5" />
                        </div>
                        <h3 className="font-display text-base sm:text-lg font-bold text-ink leading-snug">
                          {m.title}
                        </h3>
                      </div>

                      <p className="mt-2.5 text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                        {m.summary}
                      </p>

                      <div className="mt-4 pt-3.5 border-t border-stone-200/70">
                        <p className="text-[10.5px] font-bold uppercase tracking-wider text-ink/70 mb-2">
                          Key Topics Covered:
                        </p>
                        <ul className="space-y-1.5 text-xs text-stone-600">
                          {m.skills.map((skill, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                              <span className="leading-snug">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Highlights checklist */}
          <div className="mt-12 rounded-2xl sm:rounded-3xl border border-stone-200 bg-[#F8FAFC] p-6 sm:p-8">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-ink mb-4">
              Why Learn With CreateVerse:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-stone-700">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span className="font-medium">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ENQUIRY & CONTACT SECTION
          ========================================================================= */}
      <section id="enquiry" className="scroll-mt-16 bg-paper py-14 sm:py-20 border-b border-stone-200">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 space-y-5">
              <Reveal>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                  Start Your <span className="text-accent">Training Journey</span>
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                  Send us an enquiry to get complete details regarding the training structure, schedule, and fees. Our team will contact you directly.
                </p>
              </Reveal>

              <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
                <p className="text-xs font-bold text-ink mb-1">Prefer to talk directly?</p>
                <p className="text-xs text-stone-600 font-normal mb-3">
                  Reach out directly to us on WhatsApp:
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pressable inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#1EBE5D] transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="h-4 w-4 fill-current" />
                  <span>Chat on WhatsApp: {site.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Clean Form */}
            <div className="lg:col-span-7">
              <AcademyApplicationForm />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQS SECTION
          ========================================================================= */}
      <section className="bg-white py-14 sm:py-20 border-b border-stone-200">
        <div className="container-site">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                Frequently Asked Questions
              </h2>
            </div>
          </Reveal>

          <div className="max-w-3xl mx-auto">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
