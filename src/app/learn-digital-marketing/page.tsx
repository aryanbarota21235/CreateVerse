import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  CheckCircle2,
  Layers,
  Search,
  Filter,
  BarChart3,
  PenTool,
  Award,
  ArrowRight,
  ShieldCheck,
  Users,
  Building2,
  Briefcase,
} from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";
import Faq from "@/components/faq";
import AcademyHeroButtons from "@/components/academy-hero-buttons";

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
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Learn Digital Marketing CreateVerse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Practical Digital Marketing — CreateVerse",
    description:
      "Hands-on training in performance marketing, Meta ads, Google campaigns, lead funnels, and tracking.",
    images: ["/logo.png"],
  },
};

const stats = [
  { value: "100%", label: "Live Practical" },
  { value: "Real", label: "Client Ad Budgets" },
  { value: "1-on-1", label: "Agency Mentorship" },
  { value: "Karnal & Online", label: "Flexible Mode" },
];

const modules = [
  {
    number: "01",
    tag: "Paid Social",
    icon: Layers,
    title: "Meta Ads Architecture (Facebook & Instagram)",
    description:
      "Understand the modern Meta delivery algorithm, campaign structures (CBO vs ABO), audience targeting psychology, and ad set scaling.",
    deliverables: [
      "Full Business Manager & Ad Account technical setup",
      "Dynamic creative testing & winning ad identification",
      "Budget scaling methods without spikes in cost per lead",
    ],
    tools: ["Meta Ads Manager", "Meta Pixel", "Audience Insights"],
  },
  {
    number: "02",
    tag: "Search Intent",
    icon: Search,
    title: "Google Ads & High-Intent Search Systems",
    description:
      "Capture customers actively searching to buy. Master keyword intent, match types, ad relevance, quality score optimization, and automated bidding.",
    deliverables: [
      "High-intent keyword cluster structuring & research",
      "Responsive search ads & negative keyword lists",
      "Conversion tracking & target CPA bidding execution",
    ],
    tools: ["Google Ads", "Keyword Planner", "Google Search Console"],
  },
  {
    number: "03",
    tag: "Conversion Funnels",
    icon: Filter,
    title: "Landing Pages & Lead Qualification Funnels",
    description:
      "Traffic means nothing without conversions. Build high-converting landing pages that transform cold traffic into verified, qualified client inquiries.",
    deliverables: [
      "Above-the-fold value propositions & mobile UX flow",
      "Multi-step lead qualification forms that filter tire-kickers",
      "Speed optimization & conversion rate optimization (CRO)",
    ],
    tools: ["WordPress", "Elementor", "Next.js Pages"],
  },
  {
    number: "04",
    tag: "Attribution",
    icon: BarChart3,
    title: "Analytics, GA4, Meta Pixel & Server-Side CAPI",
    description:
      "Never guess which campaign made money. Implement precision attribution tracking using Google Tag Manager, GA4 custom events, and Meta Conversions API.",
    deliverables: [
      "Google Tag Manager (GTM) tag, trigger, and variable setup",
      "GA4 custom event tracking & conversion funnel reports",
      "Meta Conversions API (CAPI) server-side event tracking",
    ],
    tools: ["Google Tag Manager", "Google Analytics 4", "Meta CAPI"],
  },
  {
    number: "05",
    tag: "Direct Response",
    icon: PenTool,
    title: "Creative Strategy, Ad Copy & Hook Psychology",
    description:
      "In the modern AI algorithm era, creative is targeting. Learn how to write compelling ad copy, script viral hooks, and direct high-converting visuals.",
    deliverables: [
      "First 3-second hook formulas for short-form video ads",
      "Direct response copywriting frameworks (AIDA, PAS)",
      "High-converting static banner designs & UGC ad scripting",
    ],
    tools: ["Canva", "CapCut", "Ad Library Research"],
  },
  {
    number: "06",
    tag: "Live Execution",
    icon: Award,
    title: "Live Account Audits & Client/Career Playbook",
    description:
      "Audit real ad accounts, diagnose leaks, manage daily ad pacing, and assemble a verifiable portfolio that proves your capability to employers or clients.",
    deliverables: [
      "Real ad spend pacing & account troubleshooting audits",
      "Client reporting templates & weekly performance dashboards",
      "Portfolio setup to land agency roles or high-ticket retainers",
    ],
    tools: ["Looker Studio", "CRM Funnels", "Agency War Room"],
  },
];

const pillars = [
  {
    title: "Live Ad Budgets, Zero Dummy Theory",
    desc: "You don't practice on theoretical slides. You see how real client ad accounts with ₹5,00,000+ monthly media budgets are structured, tested, and scaled.",
  },
  {
    title: "Taught by Active Agency Media Buyers",
    desc: "No full-time theorists. Your instructors actively build and manage campaigns daily for luxury real estate, visa consultancies, and high-growth brands.",
  },
  {
    title: "End-to-End Acquisition Stack",
    desc: "Not just clicking 'Boost Post'. You learn creative hooks, direct-response copywriting, landing page funnels, tracking pixels, and CRM lead pipelines.",
  },
  {
    title: "In-Person (Karnal) & Live Online",
    desc: "Attend practical in-person sessions at our Karnal studio or join live interactive online batches with direct screen sharing and personalized doubt resolution.",
  },
];

const personas = [
  {
    icon: Briefcase,
    role: "Job Seekers & Graduates",
    outcome:
      "Skip entry-level theory. Graduate with verifiable proof of work and live ad account audits to land high-paying performance marketer roles in top agencies.",
  },
  {
    icon: Users,
    role: "Freelancers & Media Buyers",
    outcome:
      "Stop selling low-ticket ₹5,000 social media posting. Upgrade your skills to pitch and close ₹30,000–₹80,000/month performance lead generation retainers.",
  },
  {
    icon: Building2,
    role: "Founders & Business Owners",
    outcome:
      "Take complete control of your customer acquisition. Stop relying on underperforming agencies and learn how to generate qualified inbound leads predictably.",
  },
];

const faqs = [
  {
    q: "Who is this digital marketing training designed for?",
    a: "This training is built for anyone seeking practical, revenue-generating marketing skills: students and graduates targeting high-paying agency jobs, freelancers wanting to close high-ticket client retainers, and business owners who want to run their own profitable lead generation.",
  },
  {
    q: "Is prior marketing or coding experience required?",
    a: "No prior experience is necessary. We start from foundational marketing principles and consumer psychology before moving step-by-step into live campaign setup, technical pixel integration, and budget scaling.",
  },
  {
    q: "What is the training mode — online or offline?",
    a: "We offer both options: in-person sessions at our agency studio in Karnal, Haryana, as well as live interactive online batches with direct 1-on-1 mentor screen sharing.",
  },
  {
    q: "Do students get to work on real client ad accounts?",
    a: "Yes. Unlike typical coaching institutes that use PowerPoint slides and demo accounts, our curriculum is based directly on active agency client campaigns and real media spends.",
  },
  {
    q: "How can I get batch schedules, fees, and syllabus details?",
    a: "Click 'Enquire for Training' on this page to submit a quick enquiry, or message us directly on WhatsApp. Our team will share the complete curriculum, batch timings, and fee breakdown.",
  },
];

export default function LearnDigitalMarketingPage() {
  return (
    <main className="min-h-screen bg-paper text-ink selection:bg-accent selection:text-white">
      {/* ==========================================================================
          SECTION 1: HERO (CENTERED)
          ========================================================================== */}
      <section className="relative overflow-hidden bg-paper pt-[76px] sm:pt-[90px] pb-14 sm:pb-20 border-b border-stone-200 text-center">
        <div className="dot-texture absolute inset-0 opacity-70" />
        <div className="hidden sm:block pointer-events-none absolute -left-28 top-16 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,237,213,0.7)_0%,transparent_70%)]" />
        <div className="hidden sm:block pointer-events-none absolute -right-28 top-12 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(224,242,254,0.6)_0%,transparent_70%)]" />

        <div className="container-site relative pt-4 sm:pt-8">
          {/* Centered Breadcrumb */}
          <Reveal>
            <nav className="flex items-center justify-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider mb-5 sm:mb-7">
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
              <span className="text-ink font-bold">Learn Digital Marketing</span>
            </nav>
          </Reveal>

          {/* Centered Eyebrow */}
          <Reveal delay={0.05}>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-3.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-accent mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span>Agency Apprenticeship • Karnal &amp; Online</span>
            </div>
          </Reveal>

          {/* Centered H1 Title */}
          <Reveal delay={0.1}>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-tight max-w-4xl mx-auto">
              Learn Practical <span className="text-accent">Digital Marketing.</span>
            </h1>
          </Reveal>

          {/* Centered Description */}
          <Reveal delay={0.15}>
            <p className="mt-3.5 sm:mt-5 font-sans text-xs sm:text-lg leading-relaxed text-ink/85 font-normal max-w-2xl mx-auto">
              Hands-on training in performance marketing, Meta ads, Google campaigns, lead funnels, and tracking — taught directly by practitioners working on active client accounts.
            </p>
          </Reveal>

          {/* Centered Action Buttons */}
          <Reveal delay={0.2}>
            <div className="mt-7 sm:mt-9 flex justify-center">
              <AcademyHeroButtons className="justify-center" />
            </div>
          </Reveal>

          {/* Centered Quick Stats / Trust Strip */}
          <Reveal delay={0.25}>
            <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-3xl mx-auto">
              {stats.map((s, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-stone-200/80 bg-white/80 backdrop-blur-xs py-3 px-3 shadow-2xs text-center"
                >
                  <div className="font-display text-base sm:text-xl font-bold text-ink">
                    {s.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-stone-500 font-semibold uppercase tracking-wider mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 2: CORE CURRICULUM (CLEAN 6-CARD GRID)
          ========================================================================== */}
      <section className="bg-white py-14 sm:py-20 border-b border-stone-200">
        <div className="container-site">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-accent mb-2.5">
                <span>Complete Practical Syllabus</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                What You Will <span className="text-accent">Learn &amp; Execute</span>
              </h2>
              <p className="mt-2 text-xs sm:text-base text-stone-600 font-normal">
                Structured into 6 actionable pillars. Every module includes live campaign setups, real deliverables, and hands-on tool mastery.
              </p>
            </div>
          </Reveal>

          {/* 6 Structured Curriculum Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {modules.map((m, idx) => {
              const IconComponent = m.icon;
              return (
                <Reveal key={idx} delay={idx * 0.05}>
                  <div className="h-full flex flex-col justify-between rounded-2xl border border-stone-200/90 bg-[#FDFEFE] p-5 sm:p-6 shadow-2xs hover:shadow-card hover:border-accent/40 transition-all group">
                    <div>
                      {/* Card Header: Number & Tag */}
                      <div className="flex items-center justify-between gap-2 mb-3.5">
                        <div className="flex items-center gap-2">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-white font-display text-xs font-bold">
                            {m.number}
                          </span>
                          <span className="rounded-full bg-accent/[0.08] px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-accent">
                            {m.tag}
                          </span>
                        </div>
                        <IconComponent className="h-4 w-4 text-stone-400 group-hover:text-accent transition-colors" />
                      </div>

                      {/* Card Title */}
                      <h3 className="font-display text-base sm:text-lg font-bold text-ink leading-snug">
                        {m.title}
                      </h3>

                      {/* Card Description */}
                      <p className="mt-2 text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                        {m.description}
                      </p>

                      {/* Deliverables List */}
                      <div className="mt-4 pt-3.5 border-t border-stone-100">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-2">
                          Key Deliverables:
                        </p>
                        <ul className="space-y-1.5">
                          {m.deliverables.map((d, dIdx) => (
                            <li
                              key={dIdx}
                              className="flex items-start gap-2 text-xs text-stone-700 leading-snug"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tools Badges at Bottom */}
                    <div className="mt-5 pt-3 border-t border-stone-100 flex flex-wrap gap-1.5">
                      {m.tools.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="rounded-md bg-stone-100 px-2 py-0.5 text-[10px] font-semibold text-stone-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 3: WHY CHOOSE CREATEVERSE (AGENCY VS GENERIC COURSES)
          ========================================================================== */}
      <section className="bg-paper py-14 sm:py-20 border-b border-stone-200">
        <div className="container-site">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Why Learn With An <span className="text-accent">Active Agency?</span>
              </h2>
              <p className="mt-2 text-xs sm:text-base text-stone-600 font-normal">
                Generic coaching centers teach outdated theory. We teach the exact workflows we use daily to drive revenue for real clients.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {pillars.map((p, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="h-full rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-2xs">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/[0.08] text-accent mb-3.5 font-display text-sm font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display text-sm sm:text-base font-bold text-ink leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 4: WHO IS THIS FOR? (PERSONAS)
          ========================================================================== */}
      <section className="bg-white py-14 sm:py-20 border-b border-stone-200">
        <div className="container-site">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Who Is This <span className="text-accent">Training For?</span>
              </h2>
              <p className="mt-2 text-xs sm:text-base text-stone-600 font-normal">
                Designed for ambitious individuals focused on high-income marketing skills and measurable business ROI.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {personas.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <Reveal key={idx} delay={idx * 0.07}>
                  <div className="h-full rounded-2xl border border-stone-200 bg-[#FDFEFE] p-6 shadow-2xs hover:border-accent/40 transition-colors">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white mb-4">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                      {item.role}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                      {item.outcome}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 5: FREQUENTLY ASKED QUESTIONS
          ========================================================================== */}
      <section className="bg-paper py-14 sm:py-20 border-b border-stone-200">
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

      {/* ==========================================================================
          SECTION 6: FOCUSED BOTTOM ENQUIRY CARD (NO BLOATED FORM)
          ========================================================================== */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container-site">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-200 bg-[#F8FAFC] p-8 sm:p-14 text-center shadow-card">
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.08] px-3.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-accent mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  <span>Next Batch Enrolling</span>
                </div>

                <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-tight">
                  Ready to Master <span className="text-accent">Real Marketing?</span>
                </h2>

                <p className="mt-3.5 text-xs sm:text-base text-stone-600 font-normal leading-relaxed max-w-xl mx-auto">
                  Submit an enquiry to receive the complete syllabus breakdown, upcoming batch schedules, and fee details — or connect directly with our instructors on WhatsApp.
                </p>

                <div className="mt-7 flex justify-center">
                  <AcademyHeroButtons className="justify-center" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
