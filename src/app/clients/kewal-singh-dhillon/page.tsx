import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Quote,
  ChevronRight,
  Info,
  Building2,
  Award,
  Briefcase,
} from "lucide-react";
import Reveal from "@/components/reveal";
import { FacebookIcon } from "@/components/social-icons";
import ProfileBottomCTA from "@/components/profile-bottom-cta";

export const metadata: Metadata = {
  title: "Kewal Singh Dhillon (केवल सिंह ढिल्लों) — BJP President Punjab | Former MLA Barnala",
  description:
    "Official profile and political milestones of Kewal Singh Dhillon (ਕੇਵਲ ਸਿੰਘ ਢਿੱਲੋਂ), BJP President Punjab, Senior Leader of Bharatiya Janata Party, 2-term MLA Barnala & Industrialist.",
  keywords: [
    "Kewal Singh Dhillon",
    "Kewal Dhillon",
    "keval singh dhillon",
    "केवल सिंह ढिल्लों",
    "केवाल सिंह ढिल्लों",
    "ਕੇਵਲ ਸਿੰਘ ਢਿੱਲੋਂ",
    "Kewal Singh Dhillon BJP",
    "BJP President Punjab",
    "Kewal Singh Dhillon BJP President Punjab",
    "Senior Leader BJP Punjab",
    "MLA Barnala",
    "Barnala Vidhan Sabha",
    "Sangrur Lok Sabha BJP",
    "Kewal Dhillon news",
    "Kewal Singh Dhillon official profile",
    "Dhillon Group",
    "Punjab Industrial Development",
    "CreateVerse political clients",
  ],
  alternates: {
    canonical: "https://createverse.in/clients/kewal-singh-dhillon",
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
    title: "Kewal Singh Dhillon (केवल सिंह ढिल्लों) — BJP President Punjab",
    description:
      "Official profile of Kewal Singh Dhillon, BJP President Punjab, Senior Leader of Bharatiya Janata Party and Former 2-term MLA from Barnala.",
    url: "https://createverse.in/clients/kewal-singh-dhillon",
    siteName: "CreateVerse",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "https://createverse.in/politicians/kewal-singh-dhillon.webp",
        width: 800,
        height: 800,
        alt: "Kewal Singh Dhillon — BJP President Punjab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kewal Singh Dhillon — BJP President Punjab | Former MLA Barnala",
    description:
      "BJP President Punjab, Senior Leader of Bharatiya Janata Party (BJP) & 2-term MLA from Barnala.",
    images: ["https://createverse.in/politicians/kewal-singh-dhillon.webp"],
  },
};

const keyMilestones = [
  "Elected MLA from Barnala Constituency — 2007 to 2012",
  "Re-elected MLA from Barnala Constituency — 2012 to 2017",
  "Senior Leadership Role, Bharatiya Janata Party (BJP Punjab)",
  "BJP Candidate for Sangrur Lok Sabha By-Election (2022)",
  "Chairman, Dhillon Group of Companies & Philanthropist",
  "Champion of Industrial Revitalization & Infrastructure in Malwa Region",
];

const leadershipPillars = [
  {
    title: "Industrial & Economic Growth",
    desc: "Leveraging decades of business leadership to advocate for massive manufacturing and capital investments across Punjab.",
  },
  {
    title: "Constituency Transformation",
    desc: "Spearheaded landmark infrastructure, modern road connectivity, and healthcare expansion in Barnala and Sangrur.",
  },
  {
    title: "Agrarian Welfare & Modernization",
    desc: "Advocating high-value agro-processing industries and modern food parks to ensure sustainable prosperity for Punjab farmers.",
  },
];

const atAGlance = [
  { label: "Name", value: "Kewal Singh Dhillon (ਕੇਵਲ ਸਿੰਘ ਢਿੱਲੋਂ)" },
  { label: "Current Role", value: "Senior Leader, BJP Punjab" },
  { label: "Party", value: "Bharatiya Janata Party (BJP)" },
  { label: "Legislative Record", value: "2-Term MLA, Barnala (2007–2017)" },
  { label: "Key Constituency", value: "Barnala / Sangrur, Punjab" },
  { label: "Corporate Background", value: "Chairman, Dhillon Group" },
  { label: "Focus Areas", value: "Industrial Growth, Employment, Civic Infrastructure" },
  { label: "State", value: "Punjab, India" },
];

const faqs = [
  {
    question: "Who is Kewal Singh Dhillon (केवल सिंह ढिल्लों / ਕੇਵਲ ਸਿੰਘ ਢਿੱਲੋਂ)?",
    answer:
      "Kewal Singh Dhillon is a senior Indian politician and prominent industrialist from Punjab. He is a senior leader of the Bharatiya Janata Party (BJP) and served two consecutive terms as a Member of the Punjab Legislative Assembly (MLA) representing the Barnala constituency.",
  },
  {
    question: "Which legislative terms did Kewal Singh Dhillon serve in the Punjab Assembly?",
    answer:
      "Kewal Singh Dhillon was elected as Member of the Legislative Assembly (MLA) from Barnala in 2007 and was re-elected in 2012, serving actively until 2017. During his tenure, he played a central role in urban infrastructure and industrial advocacy in the Malwa belt.",
  },
  {
    question: "What is Kewal Singh Dhillon's political affiliation?",
    answer:
      "Kewal Singh Dhillon is a senior leader in the Bharatiya Janata Party (BJP) Punjab. He contested the high-stakes Sangrur Lok Sabha by-election as the BJP candidate in 2022.",
  },
  {
    question: "How does CreateVerse collaborate with political leaders like Kewal Singh Dhillon?",
    answer:
      "CreateVerse Political Campaign Division provides 24/7 digital war room operations, data-driven voter micro-targeting, narrative architecture, and booth-level WhatsApp mobilization for distinguished political leadership across India.",
  },
  {
    question: "What are Kewal Singh Dhillon's official communication channels?",
    answer:
      "Updates on Kewal Singh Dhillon's political activities, constituency outreach, and development vision can be accessed via his official Facebook page at facebook.com/kewalsinghdhillon.",
  },
];

export default function KewalSinghDhillonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://createverse.in/clients/kewal-singh-dhillon#person",
        name: "Kewal Singh Dhillon",
        alternateName: [
          "केवल सिंह ढिल्लों",
          "केवाल सिंह ढिल्लों",
          "ਕੇਵਲ ਸਿੰਘ ਢਿੱਲੋਂ",
          "Kewal Dhillon",
          "keval singh dhillon",
          "MLA Kewal Singh Dhillon Barnala",
        ],
        jobTitle: "Senior Leader, BJP Punjab & Former MLA Barnala",
        description:
          "Kewal Singh Dhillon is a senior Indian politician and industrialist from Punjab, senior leader of the Bharatiya Janata Party (BJP), and former 2-term MLA from Barnala.",
        image: "https://createverse.in/politicians/kewal-singh-dhillon.webp",
        url: "https://createverse.in/clients/kewal-singh-dhillon",
        sameAs: [
          "https://en.wikipedia.org/wiki/Kewal_Singh_Dhillon",
          "https://www.facebook.com/kewalsinghdhillon/",
        ],
        affiliation: {
          "@type": "PoliticalParty",
          name: "Bharatiya Janata Party",
          alternateName: ["BJP", "भारतीय जनता पार्टी"],
        },
        knowsAbout: [
          "Punjab Politics",
          "Industrial Policy",
          "Barnala Constituency Development",
          "Economic Revival of Punjab",
          "Electoral Campaign Management",
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": "https://createverse.in/clients/kewal-singh-dhillon#webpage",
        url: "https://createverse.in/clients/kewal-singh-dhillon",
        name: "Kewal Singh Dhillon (केवल सिंह ढिल्लों) — Senior BJP Leader | Official Client Profile",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://createverse.in/#website",
          name: "CreateVerse",
          url: "https://createverse.in",
        },
        about: {
          "@id": "https://createverse.in/clients/kewal-singh-dhillon#person",
        },
        mainEntity: {
          "@id": "https://createverse.in/clients/kewal-singh-dhillon#person",
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
        "@id": "https://createverse.in/clients/kewal-singh-dhillon#breadcrumb",
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
            name: "Kewal Singh Dhillon",
            item: "https://createverse.in/clients/kewal-singh-dhillon",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://createverse.in/clients/kewal-singh-dhillon#faq",
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
          <div className="hidden sm:block pointer-events-none absolute -right-28 top-12 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(254,243,199,0.6)_0%,transparent_70%)]" />

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
                <span className="text-ink font-bold">Kewal Singh Dhillon</span>
              </nav>
            </Reveal>

            {/* Main Header Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Details */}
              <div className="lg:col-span-8 order-2 lg:order-1">
                <Reveal>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-xs mb-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    Bharatiya Janata Party (BJP)
                  </div>

                  <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-tight">
                    Kewal Singh Dhillon
                  </h1>

                  <p className="mt-2.5 sm:mt-3 font-display text-base sm:text-xl font-semibold text-accent leading-snug">
                    Senior Leader, BJP Punjab | Former 2-Term MLA, Barnala | Prominent Industrialist
                  </p>

                  <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-ink/85 font-normal">
                    Kewal Singh Dhillon (ਕੇਵਲ ਸਿੰਘ ਢਿੱਲੋਂ / केवल सिंह ढिल्लों) is one of Punjab&apos;s most respected political and industrial leaders. Known for transforming the civic and economic landscape of Barnala during his two consecutive tenures as Member of the Legislative Assembly (2007–2017), he serves as a senior leader in the Bharatiya Janata Party, championing industrial revival, capital investment, and youth employment across Punjab.
                  </p>

                  {/* Clean Official Social Links */}
                  <div className="mt-6 flex items-center gap-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 mr-1">
                      Official:
                    </span>
                    <a
                      href="https://www.facebook.com/kewalsinghdhillon/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/[0.05] transition-all shadow-2xs hover:scale-110"
                      aria-label="Kewal Singh Dhillon Facebook"
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
                    <div className="relative h-60 w-60 sm:h-72 sm:w-72 lg:h-84 lg:w-84 rounded-full p-2 border-[3px] border-amber-200/90 bg-white shadow-xl">
                      <div className="relative h-full w-full overflow-hidden rounded-full bg-stone-100">
                        <Image
                          src="/politicians/kewal-singh-dhillon.webp"
                          alt="Kewal Singh Dhillon"
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
            SECTION: Vision for Punjab's Economic Renaissance
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="max-w-3xl">
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  A Legacy of Public Service &amp; Industrial Leadership
                </h2>
                <div className="mt-4 text-sm sm:text-base leading-relaxed text-stone-700 space-y-3 font-normal">
                  <p>
                    Combining the acumen of a successful industrialist with deep grassroots public service, Kewal Singh Dhillon has consistently placed Punjab&apos;s development at the forefront of his political career.
                  </p>
                  <p>
                    As a two-term MLA from Barnala, he initiated transformational infrastructure works, including modern judicial complexes, upgraded civil hospital facilities, expansive sewage systems, and improved highway connectivity that put Barnala on the industrial map of Punjab.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==========================================================================
            SECTION: Key Milestones & Legislative Record
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-paper border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Political &amp; Public Milestones
              </h2>
            </Reveal>

            <div className="mt-8 max-w-4xl">
              <Reveal>
                <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs">
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-ink mb-4">
                    Key Highlights &amp; Accomplishments
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {keyMilestones.map((milestone) => (
                      <div
                        key={milestone}
                        className="flex items-center gap-2.5 rounded-xl border border-stone-200 bg-[#F8FAFC] p-3 text-xs sm:text-sm font-semibold text-ink"
                      >
                        <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
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
            SECTION: Strategic Pillars
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Pillars of Leadership &amp; Growth
              </h2>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {leadershipPillars.map((item) => (
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
                Kewal Singh Dhillon — At a Glance
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-stone-600">
                Key leadership background and public profile overview.
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
                Connect With Kewal Singh Dhillon
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-stone-600">
                Follow updates on political initiatives, constituency engagements, and public messages.
              </p>
            </Reveal>

            <div className="mt-6 max-w-md">
              <Reveal>
                <a
                  href="https://www.facebook.com/kewalsinghdhillon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-stone-200/90 bg-[#F8FAFC] p-4 text-ink hover:border-[#1877F2]/40 hover:text-[#1877F2] transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1877F2]/10 text-[#1877F2]">
                    <FacebookIcon className="h-5 w-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold">Facebook</p>
                    <span className="text-[11px] text-stone-500 truncate block">facebook.com/kewalsinghdhillon</span>
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
              <Quote className="mx-auto h-8 w-8 text-amber-400 mb-4" />
              <blockquote className="font-display text-xl sm:text-3xl font-bold text-white max-w-2xl mx-auto leading-snug">
                &ldquo;Industrial progress and civic welfare are the dual engines that will build a stronger, prosperous Punjab.&rdquo;
              </blockquote>

              <div className="mt-6">
                <p className="font-display text-base sm:text-lg font-bold text-white">
                  Kewal Singh Dhillon
                </p>
                <p className="text-xs sm:text-sm text-amber-400 font-medium">
                  Senior Leader, Bharatiya Janata Party (BJP Punjab)
                </p>
                <p className="text-xs text-stone-400 mt-0.5">
                  Former 2-Term MLA, Barnala
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
                  Everything You Need to Know About Kewal Singh Dhillon
                </h2>
                <p className="mt-2 text-sm sm:text-base text-stone-600">
                  Comprehensive details on political roles, Barnala representation, and BJP leadership.
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
                  <strong className="text-stone-700 font-semibold">Note:</strong> The biographical details above are based on publicly verified records and leader profile data. For a public-facing political platform, titles, affiliations, and ongoing responsibilities are periodically maintained.
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
