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
import { InstagramIcon, FacebookIcon } from "@/components/social-icons";
import ProfileBottomCTA from "@/components/profile-bottom-cta";

export const metadata: Metadata = {
  title: "Gurkirat Singh Kotli (गुरकीरत सिंह कोटली) — Former Cabinet Minister Punjab | 2-Term MLA Khanna",
  description:
    "Official profile and political milestones of Gurkirat Singh Kotli (ਗੁਰਕੀਰਤ ਸਿੰਘ ਕੋਟਲੀ), Former Cabinet Minister for Industries & IT, Punjab and 2-term MLA Khanna representing Indian National Congress.",
  keywords: [
    "Gurkirat Singh Kotli",
    "Gurkirat Kotli",
    "gurkeerat singh kotli",
    "गुरकीरत सिंह कोटली",
    "ਗੁਰਕੀਰਤ ਸਿੰਘ ਕੋਟਲੀ",
    "Gurkirat Singh Khanna",
    "Former Cabinet Minister Punjab",
    "Industries Minister Punjab",
    "MLA Khanna",
    "Khanna Vidhan Sabha",
    "Punjab Pradesh Congress Committee",
    "Indian National Congress",
    "Beant Singh grandson",
    "Gurkirat Kotli news",
    "Gurkirat Singh Kotli official profile",
    "ਗੁਰਕੀਰਤ ਕੋਟਲੀ ਖੰਨਾ",
    "CreateVerse political clients",
  ],
  alternates: {
    canonical: "https://createverse.in/clients/gurkirat-singh-kotli",
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
    title: "Gurkirat Singh Kotli (गुरकीरत सिंह कोटली) — Former Cabinet Minister, Punjab",
    description:
      "Official profile of Gurkirat Singh Kotli, Former Cabinet Minister for Industries & IT and 2-term MLA from Khanna (INC).",
    url: "https://createverse.in/clients/gurkirat-singh-kotli",
    siteName: "CreateVerse",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "https://createverse.in/politicians/gurkirat-singh-kotli.webp",
        width: 800,
        height: 800,
        alt: "Gurkirat Singh Kotli — Former Cabinet Minister Punjab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gurkirat Singh Kotli — Former Cabinet Minister, Punjab | MLA Khanna",
    description:
      "Former Cabinet Minister for Industries, IT & Science & Technology, Punjab. 2-term MLA from Khanna representing INC.",
    images: ["https://createverse.in/politicians/gurkirat-singh-kotli.webp"],
  },
};

const keyMilestones = [
  "Cabinet Minister, Industries & Commerce, IT, Science & Technology — Government of Punjab",
  "Elected MLA from Khanna Assembly Constituency — 2012 to 2017",
  "Re-elected MLA from Khanna Assembly Constituency — 2017 to 2022",
  "Senior Leader, Punjab Pradesh Congress Committee (PPCC)",
  "Grandson of former Chief Minister of Punjab, S. Beant Singh",
  "Architect of Industrial Reform & MSME Growth Initiatives in Khanna & Ludhiana Region",
];

const portfolioHighlights = [
  "Industries & Commerce",
  "Information Technology",
  "Science & Technology",
  "Industrial Infrastructure & Focal Points",
  "MSME Investment Promotion",
  "Export Facilitation & Grain Market Modernization",
];

const atAGlance = [
  { label: "Name", value: "Gurkirat Singh Kotli (ਗੁਰਕੀਰਤ ਸਿੰਘ ਕੋਟਲੀ)" },
  { label: "Public Role", value: "Former Cabinet Minister & 2-Term MLA" },
  { label: "Constituency", value: "Khanna, District Ludhiana, Punjab" },
  { label: "Party", value: "Indian National Congress (INC)" },
  { label: "Ministerial Portfolios", value: "Industries & Commerce, IT, Science & Tech" },
  { label: "Assembly Terms", value: "2012–2017, 2017–2022" },
  { label: "Political Heritage", value: "Grandson of S. Beant Singh (Former CM Punjab)" },
  { label: "State", value: "Punjab, India" },
];

const faqs = [
  {
    question: "Who is Gurkirat Singh Kotli (गुरकीरत सिंह कोटली / ਗੁਰਕੀਰਤ ਸਿੰਘ ਕੋਟਲੀ)?",
    answer:
      "Gurkirat Singh Kotli is a senior political leader of the Indian National Congress in Punjab. He has served as a Cabinet Minister for Industries & Commerce, Information Technology, and Science & Technology in the Punjab Government, and was a two-term elected Member of the Legislative Assembly (MLA) from Khanna.",
  },
  {
    question: "What is Gurkirat Singh Kotli's legislative and ministerial record?",
    answer:
      "Elected to the Punjab Vidhan Sabha from Khanna in 2012 and re-elected in 2017, Gurkirat Singh Kotli served a decade representing Asia's largest grain market hub. As Cabinet Minister, he championed industrial incentives, startup ecosystems, and IT park expansions across Punjab.",
  },
  {
    question: "What is Gurkirat Singh Kotli's family background?",
    answer:
      "Gurkirat Singh Kotli carries forward a prominent political legacy as the grandson of Sardar Beant Singh, the legendary former Chief Minister of Punjab who played a historic role in restoring peace and stability in the state.",
  },
  {
    question: "How does CreateVerse support leaders like Gurkirat Singh Kotli?",
    answer:
      "CreateVerse Political Campaign Division provides high-velocity digital campaign infrastructure, 24/7 war rooms, localized voter analytics, and multi-channel public narrative engineering for legislative leaders across India.",
  },
  {
    question: "Where can I follow Gurkirat Singh Kotli online?",
    answer:
      "Gurkirat Singh Kotli connects with constituents and followers via Instagram at @gurkiratskotli and Facebook at facebook.com/gurkiratskotliofficial.",
  },
];

export default function GurkiratSinghKotliPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://createverse.in/clients/gurkirat-singh-kotli#person",
        name: "Gurkirat Singh Kotli",
        alternateName: [
          "गुरकीरत सिंह कोटली",
          "ਗੁਰਕੀਰਤ ਸਿੰਘ ਕੋਟਲੀ",
          "Gurkirat Kotli",
          "gurkeerat singh kotli",
          "MLA Gurkirat Singh Kotli Khanna",
        ],
        jobTitle: "Former Cabinet Minister, Punjab & 2-Term MLA Khanna",
        description:
          "Gurkirat Singh Kotli is an Indian politician and senior leader of the Indian National Congress in Punjab, former Cabinet Minister for Industries & IT, and two-term MLA from Khanna.",
        image: "https://createverse.in/politicians/gurkirat-singh-kotli.webp",
        url: "https://createverse.in/clients/gurkirat-singh-kotli",
        sameAs: [
          "https://en.wikipedia.org/wiki/Gurkirat_Singh_Kotli",
          "https://www.instagram.com/gurkiratskotli",
          "https://www.facebook.com/gurkiratskotliofficial",
        ],
        affiliation: {
          "@type": "PoliticalParty",
          name: "Indian National Congress",
          alternateName: ["INC", "Congress", "भारतीय राष्ट्रीय कांग्रेस"],
        },
        knowsAbout: [
          "Punjab Industrial Policy",
          "Khanna Constituency Development",
          "Commerce & Technology Administration",
          "Electoral Campaign Strategy",
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": "https://createverse.in/clients/gurkirat-singh-kotli#webpage",
        url: "https://createverse.in/clients/gurkirat-singh-kotli",
        name: "Gurkirat Singh Kotli (गुरकीरत सिंह कोटली) — Official Client Profile | CreateVerse",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://createverse.in/#website",
          name: "CreateVerse",
          url: "https://createverse.in",
        },
        about: {
          "@id": "https://createverse.in/clients/gurkirat-singh-kotli#person",
        },
        mainEntity: {
          "@id": "https://createverse.in/clients/gurkirat-singh-kotli#person",
        },
        publisher: {
          "@type": "Organization",
          name: "CreateVerse",
          url: "https://createverse.in",
          logo: {
            "@type": "ImageObject",
            url: "https://createverse.in/logo.png",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://createverse.in/clients/gurkirat-singh-kotli#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://createverse.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Clients",
            item: "https://createverse.in/clients",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Gurkirat Singh Kotli",
            item: "https://createverse.in/clients/gurkirat-singh-kotli",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://createverse.in/clients/gurkirat-singh-kotli#faq",
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
                <span className="text-ink font-bold">Gurkirat Singh Kotli</span>
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
                    Gurkirat Singh Kotli
                  </h1>

                  <p className="mt-2.5 sm:mt-3 font-display text-base sm:text-xl font-semibold text-accent leading-snug">
                    Former Cabinet Minister, Punjab | 2-Term MLA, Khanna
                  </p>

                  <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-ink/85 font-normal">
                    Gurkirat Singh Kotli (ਗੁਰਕੀਰਤ ਸਿੰਘ ਕੋਟਲੀ / गुरकीरत सिंह कोटली) is a senior leader of the Indian National Congress in Punjab. Having represented the vital Khanna constituency in the Punjab Legislative Assembly for two consecutive terms (2012–2022) and served as Cabinet Minister for Industries &amp; Commerce, IT, and Science &amp; Technology, he has been a stalwart advocate for regional economic empowerment and grassroots governance.
                  </p>

                  {/* Clean Official Social Links */}
                  <div className="mt-6 flex items-center gap-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 mr-1">
                      Official:
                    </span>
                    <a
                      href="https://www.instagram.com/gurkiratskotli"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/[0.05] transition-all shadow-2xs hover:scale-110"
                      aria-label="Gurkirat Singh Kotli Instagram"
                    >
                      <InstagramIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.facebook.com/gurkiratskotliofficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/[0.05] transition-all shadow-2xs hover:scale-110"
                      aria-label="Gurkirat Singh Kotli Facebook"
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
                          src="/politicians/gurkirat-singh-kotli.webp"
                          alt="Gurkirat Singh Kotli"
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
            SECTION: Legislative Leadership & Public Service
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="max-w-3xl">
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  A Dedicated Legacy in Punjab Governance
                </h2>
                <div className="mt-4 text-sm sm:text-base leading-relaxed text-stone-700 space-y-3 font-normal">
                  <p>
                    Gurkirat Singh Kotli comes from a revered political lineage committed to the peace, integrity, and development of Punjab. As the grandson of former Punjab Chief Minister S. Beant Singh, he has dedicated decades to public service, grassroots empowerment, and state-wide industrial growth.
                  </p>
                  <p>
                    During his ministerial responsibility, he spearheaded key policy reforms to boost Punjab&apos;s manufacturing competitiveness, supporting micro, small, and medium enterprises (MSMEs) and driving digital governance initiatives.
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
                Key Accomplishments &amp; Portfolios
              </h2>
            </Reveal>

            <div className="mt-8 max-w-4xl space-y-6">
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

              <Reveal>
                <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs">
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-ink mb-4">
                    Ministerial Portfolios &amp; Responsibilities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {portfolioHighlights.map((portfolio) => (
                      <div
                        key={portfolio}
                        className="flex items-center gap-2 rounded-xl border border-stone-200 bg-[#F8FAFC] p-3 text-xs sm:text-sm font-semibold text-ink"
                      >
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                        <span>{portfolio}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION: At A Glance
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Gurkirat Singh Kotli — At a Glance
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-stone-600">
                Key leadership background and legislative overview.
              </p>
            </Reveal>

            <div className="mt-8 max-w-4xl">
              <Reveal>
                <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-[#F8FAFC] p-6 sm:p-8 shadow-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {atAGlance.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl border border-stone-200 bg-white p-3.5 flex items-center justify-between gap-3"
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
        <section className="py-12 sm:py-16 bg-paper border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Connect With Gurkirat Singh Kotli
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-stone-600">
                Follow updates on legislative initiatives, public meetings, and social engagements.
              </p>
            </Reveal>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <Reveal>
                <a
                  href="https://www.instagram.com/gurkiratskotli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-stone-200/90 bg-white p-4 text-ink hover:border-[#E4405F]/40 hover:text-[#E4405F] transition-colors shadow-2xs"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E4405F]/10 text-[#E4405F]">
                    <InstagramIcon className="h-5 w-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold">Instagram</p>
                    <span className="text-[11px] text-stone-500 truncate block">@gurkiratskotli</span>
                  </div>
                </a>
              </Reveal>

              <Reveal>
                <a
                  href="https://www.facebook.com/gurkiratskotliofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-stone-200/90 bg-white p-4 text-ink hover:border-[#1877F2]/40 hover:text-[#1877F2] transition-colors shadow-2xs"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1877F2]/10 text-[#1877F2]">
                    <FacebookIcon className="h-5 w-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold">Facebook</p>
                    <span className="text-[11px] text-stone-500 truncate block">facebook.com/gurkiratskotliofficial</span>
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
              <Quote className="mx-auto h-8 w-8 text-sky-400 mb-4" />
              <blockquote className="font-display text-xl sm:text-3xl font-bold text-white max-w-2xl mx-auto leading-snug">
                &ldquo;Service to the people and continuous commitment to Punjab&apos;s peace and progress remains our utmost priority.&rdquo;
              </blockquote>

              <div className="mt-6">
                <p className="font-display text-base sm:text-lg font-bold text-white">
                  Gurkirat Singh Kotli
                </p>
                <p className="text-xs sm:text-sm text-sky-400 font-medium">
                  Former Cabinet Minister, Government of Punjab
                </p>
                <p className="text-xs text-stone-400 mt-0.5">
                  2-Term Member of the Punjab Legislative Assembly, Khanna
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
                  Everything You Need to Know About Gurkirat Singh Kotli
                </h2>
                <p className="mt-2 text-sm sm:text-base text-stone-600">
                  Authoritative information covering ministerial tenures, Khanna representation, and political history.
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
