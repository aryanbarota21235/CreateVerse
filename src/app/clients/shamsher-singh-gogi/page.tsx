import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Quote,
  ChevronRight,
  Info,
} from "lucide-react";
import Reveal from "@/components/reveal";
import { FacebookIcon } from "@/components/social-icons";
import ProfileBottomCTA from "@/components/profile-bottom-cta";

export const metadata: Metadata = {
  title: "Shamsher Singh Gogi (शमशेर सिंह गोगी) — Ex-MLA Assandh | Senior Congress Leader Haryana",
  description:
    "Official profile and legislative record of Shamsher Singh Gogi (शमशेर गोगी), former Member of the Haryana Legislative Assembly for Assandh and senior Indian National Congress leader.",
  keywords: [
    "Shamsher Singh Gogi",
    "Shamsher Gogi",
    "samser gogi",
    "शमशेर सिंह गोगी",
    "शमशेर गोगी असंध",
    "MLA Assandh",
    "Ex MLA Assandh",
    "Assandh Vidhan Sabha",
    "Karnal Congress",
    "District Congress Committee Karnal President",
    "Haryana Legislative Assembly",
    "Indian National Congress",
    "Shamsher Gogi news",
    "Shamsher Singh Gogi official profile",
    "असंध विधायक शमशेर गोगी",
    "CreateVerse political clients",
  ],
  alternates: {
    canonical: "https://www.createverse.in/clients/shamsher-singh-gogi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Shamsher Singh Gogi (शमशेर सिंह गोगी) — Ex-MLA Assandh | Congress Leader",
    description:
      "Official profile of Shamsher Singh Gogi, former Member of the Haryana Legislative Assembly for Assandh (Karnal) representing Indian National Congress.",
    url: "https://www.createverse.in/clients/shamsher-singh-gogi",
    siteName: "CreateVerse",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "https://www.createverse.in/politicians/shamsher-singh-gogi.webp",
        width: 800,
        height: 800,
        alt: "Shamsher Singh Gogi — Ex-MLA Assandh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shamsher Singh Gogi — Ex-MLA Assandh | Senior Congress Leader Haryana",
    description:
      "Former Member of the Haryana Legislative Assembly from Assandh (2019–2024) & Senior INC Leader.",
    images: ["https://www.createverse.in/politicians/shamsher-singh-gogi.webp"],
  },
};

const keyMilestones = [
  "Elected Member of the Haryana Legislative Assembly (MLA) from Assandh — 2019 to 2024",
  "Former President, District Congress Committee (DCC), Karnal",
  "Senior Leader, Haryana Pradesh Congress Committee (HPCC)",
  "Champion of Farmers' Rights, Mandi MSP Reforms & Agrarian Welfare in Karnal",
  "Key Infrastructure Advocate: Assandh Bypass, Rural Canal Irrigation, and Modern Sub-Divisional Hospital",
  "Grassroots Mobilization Leader with Decades of Public Service in Central Haryana",
];

const priorityAreas = [
  {
    title: "Agrarian Welfare & Farmers' Voice",
    desc: "Vocal champion inside and outside the Haryana Assembly advocating for timely crop compensation, fair MSP procurement, and irrigation water rights.",
  },
  {
    title: "Constituency Infrastructure",
    desc: "Pioneered development initiatives including highway bypass corridors, rural road widening, drainage upgradation, and educational facilities in Assandh.",
  },
  {
    title: "Grassroots Organisational Strength",
    desc: "Strengthened party booth architecture and youth cadres across Karnal district through extensive rural yatras and mass contact programmes.",
  },
];

const atAGlance = [
  { label: "Name", value: "Shamsher Singh Gogi (शमशेर सिंह गोगी)" },
  { label: "Public Role", value: "Former Member of Haryana Legislative Assembly" },
  { label: "Constituency", value: "Assandh, District Karnal, Haryana" },
  { label: "Party", value: "Indian National Congress (INC)" },
  { label: "Assembly Tenure", value: "2019–2024 (14th Haryana Vidhan Sabha)" },
  { label: "Organisational Roles", value: "Former President, DCC Karnal" },
  { label: "Core Focus", value: "Farmer Rights, Rural Infrastructure, Civic Development" },
  { label: "State", value: "Haryana, India" },
];

const faqs = [
  {
    question: "Who is Shamsher Singh Gogi (शमशेर सिंह गोगी)?",
    answer:
      "Shamsher Singh Gogi is a senior political leader of the Indian National Congress in Haryana. He represented the Assandh Assembly constituency in Karnal district as an elected Member of the Legislative Assembly (MLA) in the 14th Haryana Vidhan Sabha (2019–2024).",
  },
  {
    question: "Which constituency did Shamsher Singh Gogi represent in the Haryana Assembly?",
    answer:
      "Shamsher Singh Gogi represented the Assandh Vidhan Sabha constituency in District Karnal, Haryana. During his term from 2019 to 2024, he was recognized as an active and fearless voice on agricultural policies and local constituency welfare.",
  },
  {
    question: "What organisational positions has Shamsher Singh Gogi held within the Congress party?",
    answer:
      "Shamsher Singh Gogi has served in several prominent organizational posts, most notably as the President of the District Congress Committee (DCC) Karnal, leading mass movements and worker training campaigns throughout the district.",
  },
  {
    question: "How does CreateVerse support leaders like Shamsher Singh Gogi?",
    answer:
      "CreateVerse Political Campaign Division provides high-impact constituency campaign strategy, digital war room setup, narrative counter-messaging, and booth-level WhatsApp mobilization for distinguished political figures.",
  },
  {
    question: "Where can I follow Shamsher Singh Gogi's public updates?",
    answer:
      "Official updates and public messages from Shamsher Singh Gogi are available on his verified Facebook page at facebook.com/ssgogiofficial.",
  },
];

export default function ShamsherSinghGogiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.createverse.in/clients/shamsher-singh-gogi#person",
        name: "Shamsher Singh Gogi",
        alternateName: [
          "शमशेर सिंह गोगी",
          "शमशेर गोगी",
          "Shamsher Gogi",
          "samser gogi",
          "MLA Shamsher Singh Gogi Assandh",
        ],
        jobTitle: "Former MLA, Assandh (Haryana Legislative Assembly)",
        description:
          "Shamsher Singh Gogi is an Indian politician and senior leader of the Indian National Congress, former Member of the Legislative Assembly for Assandh (Karnal, Haryana).",
        image: "https://www.createverse.in/politicians/shamsher-singh-gogi.webp",
        url: "https://www.createverse.in/clients/shamsher-singh-gogi",
        sameAs: ["https://www.facebook.com/ssgogiofficial"],
        affiliation: {
          "@type": "PoliticalParty",
          name: "Indian National Congress",
          alternateName: ["INC", "Congress", "भारतीय राष्ट्रीय कांग्रेस"],
        },
        knowsAbout: [
          "Haryana Politics",
          "Assandh Constituency Development",
          "Agricultural & Mandi Governance",
          "Grassroots Mass Mobilization",
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": "https://www.createverse.in/clients/shamsher-singh-gogi#webpage",
        url: "https://www.createverse.in/clients/shamsher-singh-gogi",
        name: "Shamsher Singh Gogi (शमशेर सिंह गोगी) — Official Client Profile | CreateVerse",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.createverse.in/#website",
          name: "CreateVerse",
          url: "https://www.createverse.in",
        },
        about: {
          "@id": "https://www.createverse.in/clients/shamsher-singh-gogi#person",
        },
        mainEntity: {
          "@id": "https://www.createverse.in/clients/shamsher-singh-gogi#person",
        },
        publisher: {
          "@type": "Organization",
          name: "CreateVerse",
          url: "https://www.createverse.in",
          logo: {
            "@type": "ImageObject",
            url: "https://www.createverse.in/logo.png",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.createverse.in/clients/shamsher-singh-gogi#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.createverse.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Clients",
            item: "https://www.createverse.in/clients",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Shamsher Singh Gogi",
            item: "https://www.createverse.in/clients/shamsher-singh-gogi",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.createverse.in/clients/shamsher-singh-gogi#faq",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-paper text-ink selection:bg-accent selection:text-white">
        {/* ==========================================================================
            HERO SECTION: Clean, authoritative profile header
            ========================================================================== */}
        <section className="relative overflow-hidden bg-paper pt-[76px] sm:pt-[84px] border-b border-stone-200">
          <div className="dot-texture absolute inset-0 opacity-70" />
          <div className="hidden sm:block pointer-events-none absolute -left-28 top-16 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,237,213,0.7)_0%,transparent_70%)]" />
          <div className="hidden sm:block pointer-events-none absolute -right-28 top-12 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(224,242,254,0.6)_0%,transparent_70%)]" />

          <div className="container-site relative pt-6 sm:pt-10 pb-10 sm:pb-16">
            {/* Breadcrumb */}
            <Reveal>
              <nav className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider mb-6 sm:mb-8">
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
                <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
                <Link href="/clients" className="hover:text-accent transition-colors">
                  Clients
                </Link>
                <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
                <span className="text-ink font-bold">Shamsher Singh Gogi</span>
              </nav>
            </Reveal>

            {/* Main Header Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Details */}
              <div className="lg:col-span-8 order-2 lg:order-1">
                <Reveal>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-600 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-xs mb-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    Indian National Congress
                  </div>

                  <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-tight">
                    Shamsher Singh Gogi
                  </h1>

                  <p className="mt-2.5 sm:mt-3 font-display text-base sm:text-xl font-semibold text-accent leading-snug">
                    Ex-MLA, Assandh (Haryana Legislative Assembly) | Senior Congress Leader
                  </p>

                  <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-ink/85 font-normal">
                    Shamsher Singh Gogi (शमशेर सिंह गोगी) is a senior leader of the Indian National Congress and former Member of the Haryana Legislative Assembly representing Assandh in Karnal district (2019–2024). A stalwart grassroots organizer and former District Congress Committee President, he has spent his career fighting for farmers&apos; rights, rural canal infrastructure, and public health in Haryana.
                  </p>

                  {/* Clean Official Social Links */}
                  <div className="mt-6 flex items-center gap-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 mr-1">
                      Official:
                    </span>
                    <a
                      href="https://www.facebook.com/ssgogiofficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/[0.05] transition-all shadow-2xs hover:scale-110"
                      aria-label="Shamsher Singh Gogi Facebook"
                    >
                      <FacebookIcon className="h-4 w-4" />
                    </a>
                  </div>
                </Reveal>
              </div>

              {/* Right Portrait */}
              <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
                <Reveal>
                  <div className="relative">
                    <div className="relative h-60 w-60 sm:h-72 sm:w-72 lg:h-84 lg:w-84 rounded-full p-2 border-[3px] border-stone-200/90 bg-white shadow-xl">
                      <div className="relative h-full w-full overflow-hidden rounded-full bg-stone-100">
                        <Image
                          src="/politicians/shamsher-singh-gogi.webp"
                          alt="Shamsher Singh Gogi"
                          width={400}
                          height={400}
                          priority
                          quality={90}
                          className="h-full w-full object-cover scale-[1.05]"
                        />
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION: Legislative Journey & Service
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="max-w-3xl">
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  Grassroots Representation &amp; Public Advocacy
                </h2>
                <div className="mt-4 text-sm sm:text-base leading-relaxed text-stone-700 space-y-3 font-normal">
                  <p>
                    Throughout his tenure as MLA for Assandh, Shamsher Singh Gogi distinguished himself as an articulate and forthright voice inside the Haryana Vidhan Sabha. He persistently raised questions regarding agrarian distress, equitable distribution of irrigation waters, and quality government education in rural belts.
                  </p>
                  <p>
                    Having served as District Congress Committee President in Karnal, he possesses an encyclopedic understanding of local panchayats, mandi operations, and constituency-level voter dynamics.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==========================================================================
            SECTION: Key Milestones
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-paper border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Key Accomplishments &amp; Public Milestones
              </h2>
            </Reveal>

            <div className="mt-8 max-w-4xl">
              <Reveal>
                <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs">
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-ink mb-4">
                    Public Service Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {keyMilestones.map((milestone) => (
                      <div
                        key={milestone}
                        className="flex items-center gap-2.5 rounded-xl border border-stone-200 bg-[#F8FAFC] p-3 text-xs sm:text-sm font-semibold text-ink"
                      >
                        <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0" />
                        <span>{milestone}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION: Priority Focus Areas
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Core Priorities &amp; Initiatives
              </h2>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {priorityAreas.map((item) => (
                <Reveal key={item.title}>
                  <div className="h-full rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-[#F8FAFC] p-6 shadow-xs">
                    <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-stone-600 font-normal">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION: At A Glance
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-paper border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Shamsher Singh Gogi — At a Glance
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-stone-600">
                Key leadership background and legislative profile.
              </p>
            </Reveal>

            <div className="mt-8 max-w-4xl">
              <Reveal>
                <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {atAGlance.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl border border-stone-200 bg-[#F8FAFC] p-3.5 flex items-center justify-between gap-3"
                      >
                        <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                          {item.label}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-ink text-right">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION: Connect
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Connect With Shamsher Singh Gogi
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-stone-600">
                Follow updates on legislative initiatives, public hearings, and community programs.
              </p>
            </Reveal>

            <div className="mt-6 max-w-md">
              <Reveal>
                <a
                  href="https://www.facebook.com/ssgogiofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-stone-200/90 bg-[#F8FAFC] p-4 text-ink hover:border-[#1877F2]/40 hover:text-[#1877F2] transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1877F2]/10 text-[#1877F2]">
                    <FacebookIcon className="h-5 w-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold">Facebook</p>
                    <span className="text-[11px] text-stone-500 truncate block">facebook.com/ssgogiofficial</span>
                  </div>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION: Quote & Declaration
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-stone-900 to-[#0B0F19] text-white">
          <div className="container-site text-center">
            <Reveal>
              <Quote className="mx-auto h-8 w-8 text-accent mb-4" />
              <blockquote className="font-display text-xl sm:text-3xl font-bold text-white max-w-2xl mx-auto leading-snug">
                &ldquo;True leadership stands unconditionally with the farmers, workers, and rural communities.&rdquo;
              </blockquote>

              <div className="mt-6">
                <p className="font-display text-base sm:text-lg font-bold text-white">
                  Shamsher Singh Gogi
                </p>
                <p className="text-xs sm:text-sm text-sky-400 font-medium">
                  Former Member of the Haryana Legislative Assembly, Assandh
                </p>
                <p className="text-xs text-stone-400 mt-0.5">
                  Senior Leader, Indian National Congress
                </p>
              </div>

              <p className="mt-6 text-xs uppercase tracking-[0.2em] font-bold text-stone-400">
                Stay Connected. Stay Informed.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ==========================================================================
            SECTION: Frequently Asked Questions (Google Rich Snippet Qualification)
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="max-w-3xl mb-8">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent mb-2.5">
                  Frequently Asked Questions
                </div>
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  Everything You Need to Know About Shamsher Singh Gogi
                </h2>
                <p className="mt-2 text-sm sm:text-base text-stone-600">
                  Authoritative information covering Assandh representation, farmer advocacy, and Congress leadership.
                </p>
              </div>
            </Reveal>

            <div className="max-w-4xl space-y-4">
              {faqs.map((faq, idx) => (
                <Reveal key={faq.question}>
                  <div className="rounded-2xl border border-stone-200/90 bg-[#F8FAFC] p-5 sm:p-6 transition-all hover:border-accent/40 hover:bg-white hover:shadow-xs">
                    <h3 className="font-display text-base sm:text-lg font-bold text-ink flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                        {idx + 1}
                      </span>
                      <span>{faq.question}</span>
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed pl-9">
                      {faq.answer}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION: Verification Disclaimer Note
            ========================================================================== */}
        <section className="py-6 sm:py-8 bg-[#F8FAFC] border-t border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="rounded-2xl border border-stone-200/80 bg-white p-4 sm:p-5 text-xs text-stone-500 leading-relaxed max-w-4xl mx-auto flex items-start gap-3">
                <Info className="h-4 w-4 text-stone-400 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-stone-700 font-semibold">Note:</strong> The biographical details above are based on publicly verified records and leader profile data. For a public-facing political platform, dates, titles and ongoing responsibilities are periodically updated and verified.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==========================================================================
            SECTION: CreateVerse Political Campaign Division & Bottom CTAs
            ========================================================================== */}
        <section className="py-12 sm:py-18 bg-white border-t border-stone-200">
          <div className="container-site">
            <div className="rounded-3xl border border-stone-200/90 bg-[#F8FAFC] p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl text-center lg:text-left">
                <div className="inline-flex items-center rounded-full bg-accent/[0.08] border border-accent/20 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-accent mb-3">
                  <span>CreateVerse Political Campaign Division</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-ink tracking-tight">
                  High-Stakes Political Strategy &amp; 24/7 War Rooms
                </h3>
                <p className="mt-3 text-xs sm:text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                  CreateVerse is India&apos;s leading political growth and acquisition partner. We architect 24/7 digital war rooms, booth-level WhatsApp voter mobilization systems, rapid narrative crisis management, and data-driven election campaigns for distinguished leaders and political offices.
                </p>
              </div>

              <div className="shrink-0 w-full lg:w-auto">
                <ProfileBottomCTA />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
