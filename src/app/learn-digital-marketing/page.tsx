import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Target,
  TrendingUp,
  Megaphone,
  Code2,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  Briefcase,
  Layers,
  ChevronRight,
  Flame,
  Clock,
  Terminal,
  Cpu,
  BadgeCheck,
  Check,
  X,
  Compass,
} from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";
import Faq from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import AcademyApplicationForm from "@/components/academy-application-form";
import AcademyCurriculumTabs from "@/components/academy-curriculum-tabs";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export const metadata: Metadata = {
  title: "Learn Digital Marketing & Performance Advertising | CreateVerse Academy",
  description:
    "Master practical digital marketing on live client ad accounts. Real-world training in Meta ads, Google search campaigns, high-ticket real estate lead generation, and political war room operations.",
  keywords: [
    "learn digital marketing",
    "digital marketing course",
    "performance marketing training India",
    "meta ads masterclass",
    "google ads training agency",
    "real estate lead generation training",
    "digital marketing institute Karnal",
    "practical marketing training Haryana",
    "CreateVerse digital marketing academy",
  ],
  alternates: {
    canonical: "https://createverse.in/learn-digital-marketing",
  },
  openGraph: {
    title: "Learn Digital Marketing & Performance Advertising — CreateVerse",
    description:
      "Master real-world digital marketing with live ad accounts. Practical agency training in Meta ads, Google ads, and high-ticket lead funnels.",
    url: "https://createverse.in/learn-digital-marketing",
    siteName: "CreateVerse",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Learn Digital Marketing CreateVerse" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Digital Marketing & Performance Advertising — CreateVerse",
    description:
      "Master real-world digital marketing on live ad accounts. Practical training in performance marketing & lead generation.",
    images: ["/logo.png"],
  },
};

const liveStats = [
  { value: "₹10.4 Cr+", label: "Ad Spend Analyzed", sub: "Live multi-crore ad accounts" },
  { value: "Max 12", label: "Selected Batch Size", sub: "Strictly limited cohort" },
  { value: "1-on-1", label: "Director Mentorship", sub: "Senior practitioners, no tutors" },
  { value: "100%", label: "Live War Room", sub: "Zero theoretical dummy decks" },
];

const liveClientDossiers = [
  {
    category: "High-Ticket Property",
    title: "Luxury High-Rise Real Estate Launch",
    metric: "₹48.6 Cr Inventory Booked",
    description:
      "You will analyze and execute geo-targeted Meta campaigns, automated WhatsApp HNI qualification bots, and real-time CRM handoff for luxury residential townships.",
    takeaway: "Learn how to generate ₹2 Cr+ unit buyer inquiries at predictable cost per verified site visit.",
    icon: Building2Icon,
    tag: "Real Estate Acquisition",
  },
  {
    category: "Electoral & Public Affairs",
    title: "State Assembly & Parliamentary War Room",
    metric: "14.2M+ Verified Voter Reach",
    description:
      "You will learn 24/7 digital war room operations — booth-level micro-targeting, rapid counter-narrative deflection within 30 minutes, and viral regional video distribution.",
    takeaway: "Understand how public perception, ground sentiment mapping, and election narrative are engineered.",
    icon: Megaphone,
    tag: "Political Campaign Desk",
  },
  {
    category: "International Services",
    title: "Global Visa & Immigration Funnels",
    metric: "3,850+ Intake Inquiries",
    description:
      "You will build automated country eligibility filters that weed out ineligible candidates and pre-qualify serious applicants for Canadian and European study/PR consultancies.",
    takeaway: "Master multi-step lead qualification architectures that drive 84%+ counselor show-up rates.",
    icon: TrendingUp,
    tag: "High-Ticket Funnel",
  },
];

function Building2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}

const techStack = [
  { name: "Meta Ads Manager", role: "Advantage+ CBO Scaling & ABO Matrix", category: "Social Paid" },
  { name: "Google Ads & PMax", role: "Search Intent & Conversion Value Bidding", category: "Search & Video" },
  { name: "Meta Conversions API", role: "Server-Side Tracking bypassing iOS blockers", category: "Tracking" },
  { name: "Google Tag Manager", role: "Custom Data Layers & Client Event Triggers", category: "Analytics" },
  { name: "Google Analytics 4", role: "Exploration Funnels & Multi-touch Attribution", category: "Data" },
  { name: "WhatsApp Cloud API", role: "Automated Conversational Qualification Bots", category: "Automation" },
  { name: "Microsoft Clarity", role: "Heatmaps, Dead Clicks & Session Replay Audits", category: "CRO" },
  { name: "Google Looker Studio", role: "Real-Time Executive Client KPI Dashboards", category: "Reporting" },
];

const roadmap = [
  {
    phase: "Phase 01",
    weeks: "Weeks 1 & 2",
    title: "Direct-Response Psychology & Creative Testing Engine",
    desc: "Deconstruct what makes humans click and buy. Build scroll-stopping visual hooks, high-ticket ad copy frameworks, and systematic dynamic creative testing matrices.",
    deliverable: "10 high-converting ad creative scripts & live Meta ABO testing campaign.",
  },
  {
    phase: "Phase 02",
    weeks: "Weeks 3 & 4",
    title: "Algorithmic Paid Traffic Domination (Meta & Google)",
    desc: "Master algorithmic bidding algorithms. Learn budget pacing, CBO scaling, broad targeting stability, Google high-intent search sculpting, and Performance Max asset groups.",
    deliverable: "Live Google Search & Meta campaign structure scaling with positive ROAS.",
  },
  {
    phase: "Phase 03",
    weeks: "Weeks 5 & 6",
    title: "High-Ticket Lead Funnels & War Room Operations",
    desc: "Build acquisition systems for real estate and visa clients. Engineer multi-step intake funnels, automated WhatsApp qualification bots, and instant CRM handoffs.",
    deliverable: "An end-to-end automated qualification funnel generating phone-answering leads.",
  },
  {
    phase: "Phase 04",
    weeks: "Weeks 7 & 8",
    title: "Landing Page CRO, Server-Side Tracking & Capstone",
    desc: "Set up Meta CAPI, GTM server-side containers, GA4 custom funnels, and sub-second Next.js landing pages. Present your live client strategy audit to agency directors.",
    deliverable: "Complete technical tracking architecture + agency graduation certification.",
  },
];

const comparisonTable = [
  {
    metric: "Instruction Mode",
    institute: "Theoretical lectures by salaried teachers who don't run ads",
    createverse: "Direct war room sessions with active agency managing directors",
  },
  {
    metric: "Ad Budget Exposure",
    institute: "₹0 or ₹500 dummy exercises on personal accounts",
    createverse: "Real exposure to active multi-crore client budgets & campaigns",
  },
  {
    metric: "Curriculum Modernity",
    institute: "5-year-old slides focusing on basic Facebook posts and hashtags",
    createverse: "Cutting-edge algorithmic scaling, CAPI tracking & WhatsApp AI funnels",
  },
  {
    metric: "Cohort Culture",
    institute: "40–100 students in crowded halls with zero individual feedback",
    createverse: "Exclusive 10–12 person cohort with rigorous 1-on-1 campaign reviews",
  },
  {
    metric: "Target Outcome",
    institute: "A generic printed certificate that agencies ignore",
    createverse: "A live portfolio of real campaign metrics + agency internship eligibility",
  },
];

const studentProfiles = [
  {
    badge: "Students & Fresh Graduates",
    title: "Fast-Track Into High-Paying Agency Careers",
    desc: "Bypass entry-level minimum wage jobs. Walk into agency interviews with a portfolio showing real client ad spend, CPA reduction, and verified pipeline numbers.",
  },
  {
    badge: "Freelancers & Solopreneurs",
    title: "Scale From ₹15,000 Gigs to ₹60,000+ Monthly Retainers",
    desc: "Stop doing low-margin graphic design or basic social media posting. Position yourself as an acquisition partner delivering verified commercial leads.",
  },
  {
    badge: "Business & Real Estate Owners",
    title: "Take Full Command of Your Customer Acquisition Math",
    desc: "Stop wasting marketing budgets on agencies that send vanity metrics. Learn the exact architecture to generate qualified buyers in-house.",
  },
  {
    badge: "Working Marketers Seeking Mastery",
    title: "Upgrade from Organic Social to Paid Algorithmic Traffic",
    desc: "Transition from basic community management to high-stakes performance marketing, server-side attribution, and enterprise CRM engineering.",
  },
];

const academyFaqs = [
  {
    q: "Is this program suitable for beginners with zero prior experience?",
    a: "Yes. While we dive into advanced algorithmic concepts, we build up methodically from foundational marketing psychology and economics. All you need is strong dedication, analytical thinking, and basic computer comfort.",
  },
  {
    q: "Do I get to work on active client ad accounts?",
    a: "Yes. This is not a slide-show course. You will sit inside real Meta Ads Managers, Google Ads consoles, GA4 properties, and CRM dashboards managing actual capital for builders, politicians, and businesses.",
  },
  {
    q: "What is the format and duration of the cohort?",
    a: "The program spans 8 intensive weeks. It is delivered in a hybrid format: live in-studio sessions at our Karnal headquarters plus interactive online war room debriefs with screen-share code/campaign walkthroughs.",
  },
  {
    q: "What happens after I graduate?",
    a: "Top performers from each batch are offered paid agency internship opportunities directly at CreateVerse or placed across our network of real estate developers, immigration brands, and commercial partners. You also receive lifetime community access for campaign audits.",
  },
  {
    q: "How many students are accepted per batch?",
    a: "To ensure that every single student receives personal attention and live account reviews, we strictly cap every cohort at a maximum of 10 to 12 students. Admissions are based on application review and an intake screening call.",
  },
  {
    q: "How can I apply or check fee details?",
    a: "Fill out the application form on this page or message us directly on WhatsApp. Our admissions coordinator will share the detailed syllabus PDF, fee schedule, and schedule your 1-on-1 counseling call.",
  },
];

export default function LearnDigitalMarketingPage() {
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": "https://createverse.in/learn-digital-marketing#course",
        name: "Practical Digital Marketing & Performance Acquisition Cohort",
        description:
          "Practical digital marketing training with real client ad account exposure, Meta ads, Google ads, high-ticket lead funnels, and political campaign digital war room operations.",
        provider: {
          "@type": "Organization",
          name: "CreateVerse",
          url: "https://createverse.in",
          logo: "https://createverse.in/logo.png",
        },
        educationalCredentialAwarded: "Certificate of Performance Marketing Mastery",
        occupationalCategory: "13-1161.00 - Market Research Analysts and Marketing Specialists",
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: ["online", "onsite"],
          courseWorkload: "PT8W",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://createverse.in/learn-digital-marketing#faq",
        mainEntity: academyFaqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  const whatsappInquiryUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello CreateVerse, I want to join the Digital Marketing Practical Cohort. Please share batch details, fees, and next starting date."
  )}`;

  return (
    <>
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />

      {/* =========================================================================
          HERO: Distinctive Obsidian & Electric Cyan Atmosphere
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#070A12] text-white pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-white/10">
        {/* Ambient Grid & Glow textures */}
        <div className="grid-texture absolute inset-0 opacity-30 pointer-events-none" />
        <div className="absolute -left-32 top-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(2,132,199,0.35)_0%,rgba(2,132,199,0.08)_45%,transparent_70%)] pointer-events-none" />
        <div className="absolute -right-32 top-1/4 h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle,rgba(234,88,12,0.25)_0%,rgba(234,88,12,0.05)_45%,transparent_70%)] pointer-events-none" />
        <div className="absolute left-1/2 -top-24 -translate-x-1/2 h-[450px] w-[800px] rounded-full bg-[radial-gradient(ellipse_at_top,rgba(2,132,199,0.3)_0%,transparent_70%)] pointer-events-none" />

        <div className="container-site relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-stone-400 uppercase tracking-wider mb-5 sm:mb-7" aria-label="Breadcrumb">
            <Link href="/" prefetch={true} className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-stone-600" />
            <span className="text-white font-bold">CreateVerse Academy</span>
          </nav>

          <div className="max-w-4xl">
            {/* Live pulsating cohort status badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/[0.08] px-3.5 py-1.5 text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.18em] text-emerald-400 mb-4 sm:mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Live War Room Apprenticeship • Cohort 04 Open</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-balance font-display text-3xl sm:text-5xl md:text-6xl lg:text-[66px] font-bold tracking-tightest leading-[1.1] sm:leading-[1.06] text-white">
              Don’t Learn from Tutors.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-200 to-amber-300">
                Apprentice in an Active War Room.
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-stone-300 font-normal leading-relaxed max-w-3xl">
              Forget outdated slide decks and dummy mock campaigns. Master multi-crore Meta algorithms, high-intent Google Search, political election war rooms, and conversion funnels by working directly inside active client accounts.
            </p>

            {/* Direct Hero Action Buttons */}
            <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#apply"
                className="pressable group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-accent/30 transition-all hover:bg-sky-400 hover:shadow-xl cursor-pointer"
              >
                <span>Apply for Cohort 04</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pressable inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-md px-5 py-3.5 sm:px-7 sm:py-4 text-xs sm:text-sm font-bold text-white transition-all hover:bg-white/12 hover:border-[#25D366] hover:text-[#25D366] cursor-pointer"
              >
                <WhatsAppIcon className="h-4 w-4 fill-current text-[#25D366]" />
                <span>Ask Batch Details on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* 4 Floating Glass Stats Cards */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-white/10">
            {liveStats.map((st) => (
              <div
                key={st.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 backdrop-blur-xs hover:border-accent/40 transition-all"
              >
                <p className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-none">
                  {st.value}
                </p>
                <p className="mt-2 text-xs sm:text-sm font-bold text-sky-400">{st.label}</p>
                <p className="mt-0.5 text-[11px] text-stone-400 font-normal">{st.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: Real Client Accounts You Will Directly Audit
          ========================================================================= */}
      <section className="bg-paper py-14 sm:py-24 border-b border-stone-200">
        <div className="container-site">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.2em] text-accent mb-3">
                <Compass className="h-3.5 w-3.5" />
                <span>Live Account Access</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-tight">
                Real Client Portals. <span className="text-accent">Not Hypothetical Slides.</span>
              </h2>
              <p className="mt-3 text-xs sm:text-base text-stone-600 font-normal leading-relaxed">
                You will dissect and build actual campaigns across high-stakes verticals where performance marketing dictates millions in business revenue.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-8 lg:grid-cols-3">
            {liveClientDossiers.map((cd, idx) => {
              const Icon = cd.icon;
              return (
                <Reveal key={cd.title} delay={idx * 0.08} className="h-full">
                  <div className="h-full flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-card hover:border-accent transition-all duration-300 hover:-translate-y-1">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded-full bg-paper border border-stone-200 px-3 py-1 text-[11px] font-bold text-accent">
                          {cd.category}
                        </span>
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-stone-100 text-ink">
                          <Icon className="h-4 w-4" />
                        </span>
                      </div>

                      <h3 className="mt-4 font-display text-lg sm:text-xl font-bold text-ink leading-snug">
                        {cd.title}
                      </h3>

                      <div className="mt-2.5 inline-block rounded-lg bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 text-xs font-bold text-emerald-800">
                        {cd.metric}
                      </div>

                      <p className="mt-3 text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                        {cd.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-stone-100">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-ink/75 mb-1">
                        Core Practical Takeaway:
                      </p>
                      <p className="text-xs text-stone-700 font-medium leading-relaxed">
                        {cd.takeaway}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: The Interactive Curriculum Explorer
          ========================================================================= */}
      <section className="bg-white py-14 sm:py-24 border-b border-stone-200">
        <div className="container-site">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.2em] text-accent mb-3">
                <Layers className="h-3.5 w-3.5" />
                <span>6 Core War Room Modules</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
                The Practitioner <span className="text-accent">Curriculum.</span>
              </h2>
              <p className="mt-3 text-xs sm:text-base text-stone-600 font-normal leading-relaxed">
                Click across the modules below to inspect the exact systems, algorithms, and agency deliverables you will construct.
              </p>
            </div>
          </Reveal>

          {/* Tabbed Interactive Curriculum Component */}
          <AcademyCurriculumTabs />
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: The 8-Week Live Apprenticeship Roadmap
          ========================================================================= */}
      <section className="bg-[#090D15] text-white py-14 sm:py-24 border-b border-white/10">
        <div className="container-site">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.08] px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.2em] text-accent mb-3">
                <Clock className="h-3.5 w-3.5" />
                <span>8-Week Track</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                How You Transform: <span className="text-accent">The 4-Phase Roadmap</span>
              </h2>
              <p className="mt-3 text-xs sm:text-base text-stone-400 font-normal leading-relaxed">
                A disciplined, sprint-based journey designed to turn anyone into an autonomous, revenue-producing media buyer and growth engineer.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {roadmap.map((step, i) => (
              <Reveal key={step.phase} delay={i * 0.08} className="h-full">
                <div className="h-full flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-xs hover:border-accent/40 transition-all">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className="font-display text-xs font-bold uppercase tracking-wider text-accent">
                        {step.phase}
                      </span>
                      <span className="text-[11px] font-semibold text-stone-400">
                        {step.weeks}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-base font-bold text-white leading-snug">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs text-stone-400 font-normal leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10">
                    <p className="text-[10.5px] font-bold uppercase tracking-wider text-accent mb-1">
                      Target Milestone:
                    </p>
                    <p className="text-xs text-stone-200 font-medium leading-tight">
                      {step.deliverable}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: The Complete Agency Tech Stack You Operate
          ========================================================================= */}
      <section className="bg-paper py-14 sm:py-20 border-b border-stone-200">
        <div className="container-site">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                The Physical <span className="text-accent">Tool Stack</span> You Will Operate
              </h2>
              <p className="mt-2 text-xs sm:text-base text-stone-600 font-normal leading-relaxed">
                Zero theoretical abstractions. You get hands-on experience across the exact software stack used by high-performance growth agencies.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {techStack.map((tool, idx) => (
              <Reveal key={tool.name} delay={idx * 0.04}>
                <div className="rounded-xl border border-stone-200 bg-white p-4 sm:p-5 shadow-xs hover:border-accent/50 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/[0.08] px-2 py-0.5 rounded-md">
                      {tool.category}
                    </span>
                    <Terminal className="h-3.5 w-3.5 text-stone-400" />
                  </div>
                  <h4 className="mt-3 font-display text-sm sm:text-base font-bold text-ink">
                    {tool.name}
                  </h4>
                  <p className="mt-1 text-xs text-stone-500 font-normal leading-snug">
                    {tool.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: Side-By-Side Comparison Table
          ========================================================================= */}
      <section className="bg-white py-14 sm:py-24 border-b border-stone-200">
        <div className="container-site">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.12] bg-paper px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.2em] text-ink mb-3">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                <span>The Unfair Advantage</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
                CreateVerse vs. <span className="text-accent">Traditional Coaching Centers</span>
              </h2>
              <p className="mt-3 text-xs sm:text-base text-stone-600 font-normal leading-relaxed">
                Why generic computer institutes fail you, and why real agency apprenticeships build careers.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 sm:mt-14 max-w-4xl mx-auto overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-200 shadow-card bg-white">
            <div className="grid grid-cols-12 bg-[#090D15] text-white p-4 sm:p-5 font-display text-xs sm:text-sm font-bold uppercase tracking-wider">
              <div className="col-span-4">Evaluation Metric</div>
              <div className="col-span-4 text-stone-400">Typical Computer Coaching</div>
              <div className="col-span-4 text-accent">CreateVerse War Room</div>
            </div>

            <div className="divide-y divide-stone-200">
              {comparisonTable.map((row, i) => (
                <div
                  key={row.metric}
                  className={`grid grid-cols-12 p-4 sm:p-5 text-xs sm:text-sm items-start ${
                    i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"
                  }`}
                >
                  <div className="col-span-4 font-bold text-ink pr-2">
                    {row.metric}
                  </div>
                  <div className="col-span-4 text-stone-500 font-normal pr-2 flex items-start gap-1.5">
                    <X className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{row.institute}</span>
                  </div>
                  <div className="col-span-4 font-semibold text-ink flex items-start gap-1.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{row.createverse}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: Who Is This For?
          ========================================================================= */}
      <section className="bg-paper py-14 sm:py-20 border-b border-stone-200">
        <div className="container-site">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Who Gets <span className="text-accent">Selected?</span>
              </h2>
              <p className="mt-2 text-xs sm:text-base text-stone-600 font-normal leading-relaxed">
                We accept only 12 candidates per cohort who are committed to rigorous practical execution.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {studentProfiles.map((item, idx) => (
              <Reveal key={item.badge} delay={idx * 0.06} className="h-full">
                <div className="h-full flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-card hover:border-accent transition-all">
                  <div>
                    <span className="rounded-full bg-accent/[0.08] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent inline-block mb-3">
                      {item.badge}
                    </span>
                    <h3 className="font-display text-sm sm:text-base font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-stone-600 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: Cohort Application & Seat Reservation Desk
          ========================================================================= */}
      <section id="apply" className="scroll-mt-20 bg-white py-14 sm:py-24 border-b border-stone-200">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Details & Guarantees */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.18em] text-accent">
                  <Sparkles className="h-3 w-3" />
                  <span>Cohort 04 Admissions Open</span>
                </div>
                <h2 className="mt-3 font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink leading-tight">
                  Reserve Your Seat in the <span className="text-accent">Next Cohort.</span>
                </h2>
                <p className="mt-3 text-xs sm:text-base text-stone-600 font-normal leading-relaxed">
                  Every batch is strictly capped at 10 to 12 students to guarantee personal campaign audits, direct director feedback, and real war room collaboration.
                </p>
              </Reveal>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 rounded-xl border border-stone-200 bg-[#F8FAFC] p-3.5">
                  <BadgeCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-ink">Direct Live Account Exposure</h4>
                    <p className="text-[11px] text-stone-500 font-normal">Operate live Meta, Google & CRM tools inside active campaigns.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-stone-200 bg-[#F8FAFC] p-3.5">
                  <BadgeCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-ink">Agency Internship Opportunity</h4>
                    <p className="text-[11px] text-stone-500 font-normal">Top performers receive paid agency internships and builder placement leads.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-stone-200 bg-[#F8FAFC] p-3.5">
                  <BadgeCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-ink">1-on-1 Director Mentorship</h4>
                    <p className="text-[11px] text-stone-500 font-normal">Weekly 1-on-1 feedback on your ad creatives, copy, and tracking setups.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#25D366]/30 bg-[#25D366]/[0.04] p-4 sm:p-5">
                <p className="text-xs font-bold text-ink mb-1">Want immediate syllabus PDF or batch timing?</p>
                <p className="text-xs text-stone-600 font-normal mb-3">Connect directly with our admissions desk on WhatsApp:</p>
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pressable inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#1EBE5D] transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="h-4 w-4 fill-current" />
                  <span>Chat on WhatsApp: {site.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Application Form */}
            <div className="lg:col-span-7">
              <AcademyApplicationForm />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: Frequently Asked Questions
          ========================================================================= */}
      <section className="bg-paper py-14 sm:py-20 border-b border-stone-200">
        <div className="container-site">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Frequently Asked <span className="text-accent">Questions</span>
              </h2>
              <p className="mt-2 text-xs sm:text-base text-stone-600 font-normal">
                Everything you need to know about joining the CreateVerse Practical Digital Marketing Cohort.
              </p>
            </div>
          </Reveal>

          <div className="max-w-3xl mx-auto">
            <Faq items={academyFaqs} />
          </div>
        </div>
      </section>

      {/* Final Action CTA */}
      <FinalCTA />
    </>
  );
}
