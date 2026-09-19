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
  FileCheck,
  Phone,
  Laptop,
  Flame,
} from "lucide-react";
import PageHero from "@/components/page-hero";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";
import Faq from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import AcademyApplicationForm from "@/components/academy-application-form";
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

const proofStats = [
  { value: "100%", label: "Live Ad Accounts", desc: "No dummy slides. Work directly inside real business ad managers." },
  { value: "₹10 Cr+", label: "Real Spend Managed", desc: "Learn strategies tested across multi-crore campaign budgets." },
  { value: "1-on-1", label: "Direct Mentorship", desc: "Mentored directly by senior agency practitioners, not hired tutors." },
  { value: "100%", label: "Job & Project Support", desc: "Agency internship opportunities and interview portfolio prep." },
];

const modules = [
  {
    num: "01",
    title: "Meta & Instagram Paid Performance Architecture",
    icon: Megaphone,
    tag: "Social Ads",
    summary:
      "Master the science of scaling profitable Facebook & Instagram ads from ₹500/day to ₹50,000/day without breaking your cost-per-acquisition.",
    topics: [
      "Advantage+ & Manual CBO vs ABO budgeting architectures",
      "Creative Testing Engine: Hook, Body & CTA psychological testing",
      "Custom & Lookalike Audiences from first-party customer lists",
      "Anti-fatigue ad refresh cycles & broad targeting mastery",
      "Ad copy engineering for high-ticket emotional triggers",
    ],
  },
  {
    num: "02",
    title: "High-Intent Google Ads & Performance Max",
    icon: Target,
    tag: "Search & Intent",
    summary:
      "Capture customers the exact second they search for high-value services. Build bulletproof Google Search, YouTube, and PMax campaigns.",
    topics: [
      "High-intent keyword taxonomy & negative keyword sculpting",
      "Target CPA & Target ROAS smart bidding algorithmic mechanics",
      "Performance Max setup with clean asset groups and audience signals",
      "Competitor ad conquesting without triggering bidding wars",
      "Click fraud prevention & conversion value optimization",
    ],
  },
  {
    num: "03",
    title: "High-Ticket Lead Generation & Funnel Engineering",
    icon: TrendingUp,
    tag: "Lead Funnels",
    summary:
      "How to generate verified, phone-answering inquiries for luxury real estate, immigration consultancies, and high-ticket B2B clients.",
    topics: [
      "Multi-step lead qualification forms that filter out time-wasters",
      "Instant WhatsApp automated chatbot routing & nurture flows",
      "Real estate project launch funnels & site-visit booking math",
      "Visa & immigration intake pre-screening architectures",
      "CRM pipeline handoff via Webhooks, Zapier, and Make",
    ],
  },
  {
    num: "04",
    title: "Political Campaign & Digital War Room Execution",
    icon: Users,
    tag: "Political & Narrative",
    summary:
      "Inside the 24/7 digital war room: Learn how elections and public leadership reputations are engineered with surgical digital targeting.",
    topics: [
      "Constituency-level micro-targeting & demographic voter segmentation",
      "Rapid counter-response desk & real-time narrative shaping",
      "Regional short-form video virality strategies & hook formulas",
      "Voter sentiment tracking & grassroots volunteer coordination",
      "Crisis management protocols during high-stakes campaign cycles",
    ],
  },
  {
    num: "05",
    title: "Landing Page CRO & Conversion Science",
    icon: Code2,
    tag: "Web & CRO",
    summary:
      "An ad is only as good as the page it sends traffic to. Learn how to design landing pages that convert cold traffic into paid customers.",
    topics: [
      "Above-the-fold wireframing: Value propositions that stop the bounce",
      "Sub-second load times & mobile-first conversion UX principles",
      "Friction removal: Form UX, trust seals, and social proof placement",
      "Heatmaps & session recordings analysis using Microsoft Clarity",
      "A/B split-testing headlines, offers, and page layouts",
    ],
  },
  {
    num: "06",
    title: "Analytics, Server-Side Tracking & Full-Funnel Attribution",
    icon: BarChart3,
    tag: "Tracking & Data",
    summary:
      "Measure every single rupee spent. Master Google Analytics 4, Meta Conversions API (CAPI), and accurate blended revenue attribution.",
    topics: [
      "Google Tag Manager (GTM) custom event trigger configurations",
      "Meta CAPI (Conversions API) server-side tracking setup",
      "Google Analytics 4 (GA4) custom funnels & conversion pathways",
      "Blended ROAS vs Platform ROAS calculation models",
      "Building automated executive client reporting dashboards",
    ],
  },
];

const comparisons = [
  {
    feature: "Training Environment",
    generic: "Recorded PPT slides and 5-year-old dummy examples",
    createverse: "Live agency war room on active multi-crore ad accounts",
  },
  {
    feature: "Instructors",
    generic: "College teachers or theoretical trainers with zero active clients",
    createverse: "Active agency practitioners managing real client campaigns daily",
  },
  {
    feature: "Ad Spend Exposure",
    generic: "₹0 or small ₹500 dummy test ads",
    createverse: "Multi-crore real budgets in real estate, visa & political campaigns",
  },
  {
    feature: "Focus Area",
    generic: "Vanity metrics (likes, shares, followers, superficial canva designs)",
    createverse: "Hard commercial revenue (leads, CPA, ROAS, pipeline closed)",
  },
  {
    feature: "Batch Size",
    generic: "Crowded batches of 50–100 students where nobody knows your name",
    createverse: "Strictly limited cohorts (maximum 10–12 seats) for personal 1-on-1 attention",
  },
  {
    feature: "Career Outcome",
    generic: "Unverified paper certificate with generic job board links",
    createverse: "Verifiable portfolio with real case metrics + agency internship referral",
  },
];

const whoIsThisFor = [
  {
    title: "Aspiring Performance Marketers & Students",
    desc: "Skip months of confusing trial-and-error. Build a bulletproof portfolio backed by real metrics to land high-paying roles in top digital agencies.",
    icon: GraduationCap,
  },
  {
    title: "Freelancers & Solopreneurs",
    desc: "Stop competing for low-ticket ₹10,000 design jobs. Upgrade your skills to high-ticket performance lead generation and charge ₹50,000+ retainers.",
    icon: Briefcase,
  },
  {
    title: "Business Owners & Real Estate Developers",
    desc: "Understand the exact math behind customer acquisition. Stop relying blindly on external agencies and take complete command of your marketing ROI.",
    icon: Flame,
  },
  {
    title: "Marketing Professionals Seeking Upskill",
    desc: "Transition from traditional social media handling or basic SEO to algorithmic performance ads, conversion rate optimization, and server-side tracking.",
    icon: Laptop,
  },
];

const academyFaqs = [
  {
    q: "Is this training suitable for complete beginners?",
    a: "Yes. We start with foundational advertising psychology and system thinking before advancing into complex bidding algorithms and technical tracking. All you need is basic computer literacy, curiosity, and a willingness to put in real hours.",
  },
  {
    q: "Will I get to work on live, active ad accounts?",
    a: "Absolutely. The entire philosophy of CreateVerse is practical learning. You will see real campaign structures, live ad budget allocation, real conversion data, and client war room debriefs.",
  },
  {
    q: "What is the duration and mode of the cohort?",
    a: "The program spans 8 intensive weeks featuring live practical masterclasses, weekend war room workshops, hands-on assignments, and dedicated weekday doubt-clearing sessions. Available in both offline (Karnal studio) and live interactive online cohort formats.",
  },
  {
    q: "Do you guarantee jobs or internships?",
    a: "Top performers in each batch are offered paid agency internship opportunities directly at CreateVerse or recommended to our partner network of builders, visa consultancies, and growth brands. We also assist with resume sculpting, portfolio building, and mock technical interviews.",
  },
  {
    q: "How is CreateVerse different from typical digital marketing institutes?",
    a: "Most institutes are run by trainers who have never spent their own money on ads or managed a real client account. CreateVerse is an active growth agency managing multi-crore accounts for State MLAs, Tier-1 real estate developers, and international consultancies. You learn directly from the war room.",
  },
  {
    q: "What tools and platforms will I master?",
    a: "Meta Ads Manager, Google Ads & Performance Max, Google Tag Manager (GTM), Google Analytics 4 (GA4), Meta CAPI, Microsoft Clarity, WhatsApp API bots, Zapier/Make automation, and high-converting Next.js landing page architectures.",
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
    "Hello CreateVerse, I want to learn digital marketing with your practical cohort. Please share batch details, fees, and next starting date."
  )}`;

  return (
    <>
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />

      {/* Page Hero */}
      <PageHero
        breadcrumb="Learn Digital Marketing"
        eyebrow="CreateVerse Practical Academy"
        title={
          <>
            Master Real-World <span className="text-accent">Digital Marketing.</span> Directly from the Agency War Room.
          </>
        }
        description="Stop memorizing outdated slides and watching passive YouTube videos. Learn high-ticket lead generation, multi-crore Meta & Google ad management, political war room operations, and conversion funnels directly from practitioners running active client campaigns."
      />

      {/* Direct Action Bar below hero */}
      <section className="bg-paper pb-8 sm:pb-12 border-b border-stone-200">
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-4">
            <a
              href="#apply"
              className="pressable group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-white shadow-md transition-all hover:bg-accent hover:shadow-lg"
            >
              <span>Apply for Upcoming Batch</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pressable inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold text-ink shadow-xs hover:border-[#25D366] hover:text-[#1EBE5D] transition-all"
            >
              <WhatsAppIcon className="h-4 w-4 fill-current text-[#25D366]" />
              <span>Ask Batch Details on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars of Proof */}
      <section className="bg-white py-12 sm:py-16 border-b border-stone-200">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4 items-stretch">
            {proofStats.map((s, idx) => (
              <Reveal key={s.label} delay={idx * 0.08} className="h-full">
                <div className="h-full flex flex-col justify-start rounded-2xl border border-stone-200/90 bg-[#F8FAFC] p-4 sm:p-6 shadow-xs hover:border-accent/40 transition-all">
                  <span className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-accent leading-none">
                    {s.value}
                  </span>
                  <p className="mt-2 font-display text-xs sm:text-sm font-bold text-ink leading-snug">
                    {s.label}
                  </p>
                  <p className="mt-1 text-[11px] sm:text-xs text-stone-500 font-normal leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Core Curriculum Modules */}
      <section className="bg-paper py-14 sm:py-24 border-b border-stone-200">
        <div className="container-site">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.2em] text-accent mb-3">
                <Layers className="h-3.5 w-3.5" />
                <span>Practitioner Curriculum</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
                What You Will Actually <span className="text-accent">Learn &amp; Master</span>
              </h2>
              <p className="mt-3 text-xs sm:text-base text-stone-600 font-normal leading-relaxed">
                Every single module is engineered around real commercial outcomes: how to spend capital profitably, attract paying customers, and deliver undeniable ROI for clients.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((m, idx) => {
              const IconComp = m.icon;
              return (
                <Reveal key={m.num} delay={idx * 0.06} className="h-full">
                  <div className="h-full flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-5 sm:p-8 shadow-card hover:border-accent transition-all duration-200 hover:-translate-y-1 hover:shadow-lift">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-display text-xs font-bold uppercase tracking-wider text-accent bg-accent/[0.08] px-2.5 py-1 rounded-full">
                          Module {m.num}
                        </span>
                        <span className="text-[11px] font-bold text-stone-500 bg-stone-100 border border-stone-200 px-2.5 py-0.5 rounded-full">
                          {m.tag}
                        </span>
                      </div>

                      <div className="mt-4 flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-ink">
                          <IconComp className="h-5 w-5" />
                        </div>
                        <h3 className="font-display text-base sm:text-lg font-bold text-ink leading-snug">
                          {m.title}
                        </h3>
                      </div>

                      <p className="mt-3 text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                        {m.summary}
                      </p>

                      <div className="mt-5 border-t border-stone-100 pt-4">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-ink/75 mb-2.5">
                          Key Skills &amp; Frameworks:
                        </p>
                        <ul className="space-y-2 text-xs text-stone-600">
                          {m.topics.map((t, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                              <span className="leading-snug">{t}</span>
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
        </div>
      </section>

      {/* Side-by-Side Comparison: CreateVerse vs Traditional Institutes */}
      <section className="bg-white py-14 sm:py-24 border-b border-stone-200">
        <div className="container-site">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.12] bg-paper px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.2em] text-ink mb-3">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                <span>The Unfair Advantage</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
                Why Learn From An <span className="text-accent">Active Agency?</span>
              </h2>
              <p className="mt-3 text-xs sm:text-base text-stone-600 font-normal leading-relaxed">
                Generic computer coaching centers teach textbook definitions that were obsolete three years ago. We teach what is actively winning in our war room today.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 sm:mt-14 max-w-4xl mx-auto overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-200 shadow-card bg-white">
            <div className="grid grid-cols-12 bg-[#090D15] text-white p-4 sm:p-5 font-display text-xs sm:text-sm font-bold uppercase tracking-wider">
              <div className="col-span-4 sm:col-span-4">Criteria</div>
              <div className="col-span-4 sm:col-span-4 text-stone-400">Generic Institutes</div>
              <div className="col-span-4 sm:col-span-4 text-accent">CreateVerse Academy</div>
            </div>

            <div className="divide-y divide-stone-200">
              {comparisons.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-12 p-4 sm:p-5 text-xs sm:text-sm items-start ${
                    i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"
                  }`}
                >
                  <div className="col-span-4 sm:col-span-4 font-bold text-ink pr-2">
                    {row.feature}
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-stone-500 font-normal pr-2">
                    {row.generic}
                  </div>
                  <div className="col-span-4 sm:col-span-4 font-semibold text-ink flex items-start gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>{row.createverse}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for? */}
      <section className="bg-paper py-14 sm:py-20 border-b border-stone-200">
        <div className="container-site">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Who Is This Program <span className="text-accent">Designed For?</span>
              </h2>
              <p className="mt-2 text-xs sm:text-base text-stone-600 font-normal leading-relaxed">
                Whether your goal is landing a high-paying agency role or generating leads for your own business, this program eliminates guesswork.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {whoIsThisFor.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={idx * 0.06} className="h-full">
                  <div className="h-full flex flex-col justify-between rounded-2xl border border-stone-200/90 bg-white p-5 sm:p-6 shadow-card hover:border-accent transition-all">
                    <div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/[0.08] text-accent mb-4">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-sm sm:text-base font-bold text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs text-stone-600 font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cohort Application & Seat Reservation Section */}
      <section id="apply" className="scroll-mt-20 bg-white py-14 sm:py-24 border-b border-stone-200">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Details & Guarantees */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.18em] text-accent">
                  <Sparkles className="h-3 w-3" />
                  <span>Admissions Open • Next Batch</span>
                </div>
                <h2 className="mt-3 font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink leading-tight">
                  Reserve Your Seat in the <span className="text-accent">Next Cohort.</span>
                </h2>
                <p className="mt-3 text-xs sm:text-base text-stone-600 font-normal leading-relaxed">
                  We limit every batch to a maximum of 10 to 12 students to guarantee personal mentorship, individual ad account reviews, and real war room collaboration.
                </p>
              </Reveal>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 rounded-xl border border-stone-200 bg-[#F8FAFC] p-3.5">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-ink">Live Campaign Access</h4>
                    <p className="text-[11px] text-stone-500 font-normal">Direct exposure to active Meta, Google & CRM setups.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-stone-200 bg-[#F8FAFC] p-3.5">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-ink">Agency Internship Eligibility</h4>
                    <p className="text-[11px] text-stone-500 font-normal">Top performers receive paid agency internship opportunities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-stone-200 bg-[#F8FAFC] p-3.5">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-ink">Direct WhatsApp Support</h4>
                    <p className="text-[11px] text-stone-500 font-normal">Ongoing community access for campaign audits and career guidance.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#25D366]/30 bg-[#25D366]/[0.04] p-4 sm:p-5">
                <p className="text-xs font-bold text-ink mb-1">Prefer to talk directly before applying?</p>
                <p className="text-xs text-stone-600 font-normal mb-3">Connect directly with our training director on WhatsApp:</p>
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pressable inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#1EBE5D] transition-all"
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

      {/* Frequently Asked Questions */}
      <section className="bg-paper py-14 sm:py-20 border-b border-stone-200">
        <div className="container-site">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Frequently Asked <span className="text-accent">Questions</span>
              </h2>
              <p className="mt-2 text-xs sm:text-base text-stone-600 font-normal">
                Everything you need to know about the CreateVerse Practical Digital Marketing Cohort.
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
