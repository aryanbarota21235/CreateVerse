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
import { InstagramIcon } from "@/components/social-icons";
import ProfileBottomCTA from "./profile-bottom-cta";

export const metadata: Metadata = {
  title: "Bhupinder Lather Bhuppi (भूपिंदर लाठर) — President Jat Mahasabha Karnal | Congress Leader",
  description:
    "Official profile and community initiatives of Bhupinder Lather (Bhuppi / भूपेंद्र लाठर), President of Jat Mahasabha Karnal & senior Congress political leader in Haryana.",
  keywords: [
    "Bhupinder Lather",
    "Bhupinder Lather Bhuppi",
    "भूपिंदर लाठर",
    "भूपेंद्र लाठर",
    "भूपिंदर लाठर भुप्पी",
    "bhuppi lather",
    "Jat Mahasabha Karnal President",
    "Gharaunda Congress Leader",
    "Karnal Congress",
    "NSUI Haryana",
    "Indian National Congress",
    "Bhupinder Lather news",
    "Bhupinder Lather official profile",
    "जाट महासभा करनाल भूपिंदर लाठर",
    "CreateVerse political clients",
  ],
  alternates: {
    canonical: "https://createverse.in/clients/bhupinder-lather",
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
    title: "Bhupinder Lather (Bhuppi) — President Jat Mahasabha Karnal | Political Leader",
    description:
      "Political leader and social worker associated with the Indian National Congress. President of Jat Mahasabha Karnal.",
    url: "https://createverse.in/clients/bhupinder-lather",
    siteName: "CreateVerse",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "https://createverse.in/politicians/bhupinder-lather.webp",
        width: 800,
        height: 800,
        alt: "Bhupinder Lather (Bhuppi)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhupinder Lather (Bhuppi) — Political Leader & Social Worker | Karnal",
    description:
      "Political leader and social worker associated with the Indian National Congress. President of Jat Mahasabha Karnal.",
    images: ["https://createverse.in/politicians/bhupinder-lather.webp"],
  },
};

const journeyRoles = [
  "State General Secretary, NSUI Haryana — 2000–2002",
  "General Secretary, District Congress Committee, Karnal — 2002–2006",
  "In-charge, Membership Drive, Nilokheri Legislative Assembly",
  "Grassroots Worker, Indian National Congress",
  "AICC Observer, Karnataka Assembly Election 2023",
  "Active in Congress Organisational & Public Activities in Karnal & Haryana",
];

const familyBackground = [
  {
    title: "Public Service Heritage",
    desc: "Father Shri Joginder Lather served as President of Jat Mahasabha Karnal. Grandmother Smt. Shanti Devi Lather served as MLA from Karnal (INC).",
  },
  {
    title: "Academic & Linguistic",
    desc: "Graduate education. Fluent in Hindi, English & Punjabi.",
  },
  {
    title: "Roots in Karnal",
    desc: "Born on 28 June 1979 in Karnal. Decades of deep community and grassroots association.",
  },
];

const atAGlance = [
  { label: "Name", value: "Bhupinder Lather (Bhuppi)" },
  { label: "Role", value: "Political Leader & Social Worker" },
  { label: "Location", value: "Karnal / Gharaunda, Haryana" },
  { label: "Party", value: "Indian National Congress" },
  { label: "Community Leadership", value: "President, Jat Mahasabha Karnal (Elected Nov 2023)" },
  { label: "Date of Birth", value: "28 June 1979" },
  { label: "Education", value: "Graduate" },
  { label: "Core Focus", value: "Grassroots Organisation & Public Service" },
];

const faqs = [
  {
    question: "Who is Bhupinder Lather (भूपिंदर लाठर भुप्पी)?",
    answer:
      "Bhupinder Lather (Bhuppi) is a prominent political leader, social worker, and President of Jat Mahasabha Karnal associated with the Indian National Congress in Haryana.",
  },
  {
    question: "What leadership position does Bhupinder Lather hold in Jat Mahasabha Karnal?",
    answer:
      "In November 2023, Bhupinder Lather was unanimously elected as President of Jat Mahasabha Karnal, leading community welfare, membership drives, and educational empowerment initiatives across the district.",
  },
  {
    question: "What is Bhupinder Lather's history within the Indian National Congress?",
    answer:
      "Bhupinder Lather has served as State General Secretary of NSUI Haryana (2000–2002), General Secretary of District Congress Committee Karnal (2002–2006), and AICC Observer for the Karnataka Assembly Elections 2023.",
  },
  {
    question: "How does CreateVerse support political and grassroots leaders like Bhupinder Lather?",
    answer:
      "CreateVerse Political Campaign Division designs localized digital campaigns, community outreach networks, WhatsApp voter engagement systems, and strategic narrative campaigns for prominent leaders.",
  },
  {
    question: "Where can I follow Bhupinder Lather online?",
    answer:
      "Bhupinder Lather shares public updates, community programmes, and social initiatives on Instagram at @latherbhupi.",
  },
];

export default function BhupinderLatherPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://createverse.in/clients/bhupinder-lather#person",
        name: "Bhupinder Lather (Bhuppi)",
        alternateName: [
          "भूपिंदर लाठर",
          "भूपेंद्र लाठर",
          "भूपिंदर लाठर भुप्पी",
          "Bhupinder Lather",
          "Bhuppi Lather",
        ],
        jobTitle: "President, Jat Mahasabha Karnal & Political Leader",
        description:
          "Bhupinder Lather (Bhuppi) is a political and social worker associated with the Indian National Congress and President of Jat Mahasabha Karnal in Haryana.",
        image: "https://createverse.in/politicians/bhupinder-lather.webp",
        url: "https://createverse.in/clients/bhupinder-lather",
        sameAs: ["https://www.instagram.com/latherbhupi"],
        affiliation: {
          "@type": "PoliticalParty",
          name: "Indian National Congress",
          alternateName: ["INC", "Congress", "भारतीय राष्ट्रीय कांग्रेस"],
        },
        knowsAbout: [
          "Grassroots Political Mobilization",
          "Community Welfare",
          "Karnal Politics",
          "Haryana Public Affairs",
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": "https://createverse.in/clients/bhupinder-lather#webpage",
        url: "https://createverse.in/clients/bhupinder-lather",
        name: "Bhupinder Lather (भूपिंदर लाठर) — Official Client Profile | CreateVerse",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://createverse.in/#website",
          name: "CreateVerse",
          url: "https://createverse.in",
        },
        about: {
          "@id": "https://createverse.in/clients/bhupinder-lather#person",
        },
        mainEntity: {
          "@id": "https://createverse.in/clients/bhupinder-lather#person",
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
        "@id": "https://createverse.in/clients/bhupinder-lather#breadcrumb",
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
            name: "Bhupinder Lather",
            item: "https://createverse.in/clients/bhupinder-lather",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://createverse.in/clients/bhupinder-lather#faq",
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
            SECTION 1: HERO SECTION - Clean, accurate profile header
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
                <span className="text-ink font-bold">Bhupinder Lather</span>
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
                    Bhupinder Lather (Bhuppi)
                  </h1>

                  <p className="mt-2.5 sm:mt-3 font-display text-base sm:text-xl font-semibold text-accent leading-snug">
                    Political Leader | Social Worker | District Karnal, Haryana
                  </p>

                  <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-ink/85 font-normal">
                    Bhupinder Lather (Bhuppi) is a political and social worker associated with the Indian National Congress and based in Karnal, Haryana. He has been involved in organisational activities and public life for several years, with a background in the National Students’ Union of India (NSUI), District Congress Committee, and community organisations. He has also served in leadership roles within Jat Mahasabha Karnal. In November 2023, he was unanimously elected as President of Jat Mahasabha Karnal.
                  </p>

                  {/* Clean Official Social Links */}
                  <div className="mt-6 flex items-center gap-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 mr-1">
                      Official:
                    </span>
                    <a
                      href="https://www.instagram.com/latherbhupi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/[0.05] transition-all shadow-2xs hover:scale-110"
                      aria-label="Bhupinder Lather Instagram"
                    >
                      <InstagramIcon className="h-4 w-4" />
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
                          src="/politicians/bhupinder-lather.webp"
                          alt="Bhupinder Lather (Bhuppi)"
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
            SECTION 2: About Bhupinder Lather (White BG)
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="max-w-3xl">
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  About Bhupinder Lather
                </h2>
                <div className="mt-4 text-sm sm:text-base leading-relaxed text-stone-700 space-y-3 font-normal">
                  <p>
                    Born on 28 June 1979, Bhupinder Lather comes from a family with a longstanding association with public and social life in Karnal.
                  </p>
                  <p>
                    His father, Shri Joginder Lather, served as President of Jat Mahasabha Karnal, while his grandmother, Smt. Shanti Devi Lather, served as a Member of the Legislative Assembly from Karnal representing the Indian National Congress, according to the biographical profile provided.
                  </p>
                  <p>
                    With experience in organisational activities and grassroots engagement, Bhupinder Lather has participated in political, social and community initiatives across Karnal and Haryana.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==========================================================================
            SECTION 3: Political & Organisational Journey (Paper BG) - Structured Cards
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-paper border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Political &amp; Organisational Journey
              </h2>
            </Reveal>

            <div className="mt-8 space-y-6">
              {/* Card 1: Organisational Responsibilities */}
              <Reveal>
                <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs">
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-ink">
                    Congress Organisation &amp; Grassroots Leadership
                  </h3>
                  <div className="mt-3 text-sm sm:text-base leading-relaxed text-stone-700 space-y-2 font-normal">
                    <p>
                      Bhupinder Lather&apos;s political and organisational journey includes extensive service across student politics, district-level committees, and state-wide public engagement:
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {journeyRoles.map((role) => (
                      <div
                        key={role}
                        className="flex items-center gap-2.5 rounded-xl border border-stone-200 bg-[#F8FAFC] p-3 text-xs sm:text-sm font-semibold text-ink"
                      >
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-stone-100 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    He has continued to be publicly associated with Congress activities in Karnal. Recent media reports have identified him among senior Congress leaders in the district.
                  </div>
                </div>
              </Reveal>

              {/* Card 2: Leadership at Jat Mahasabha Karnal */}
              <Reveal>
                <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs">
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-ink">
                    Leadership at Jat Mahasabha Karnal
                  </h3>
                  <div className="mt-3 text-sm sm:text-base leading-relaxed text-stone-700 space-y-2 font-normal">
                    <p>
                      Bhupinder Lather was elected President of Jat Mahasabha Karnal in November 2023. The election was reported as unanimous following the withdrawal of another candidate.
                    </p>
                    <p>
                      Under his leadership, the organisation has undertaken membership and community-oriented activities. In 2025, Jat Mahasabha Karnal began a campaign to enrol lifelong members, with Bhupinder Lather providing information about the initiative.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Card 3: Public & Community Engagement */}
              <Reveal>
                <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs">
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-ink">
                    Public &amp; Community Engagement
                  </h3>
                  <div className="mt-3 text-sm sm:text-base leading-relaxed text-stone-700 space-y-2 font-normal">
                    <p>
                      Bhupinder Lather has remained involved in community and public activities in Karnal. His public engagements have included participation in social initiatives, organisational meetings and political programmes.
                    </p>
                    <p>
                      His involvement has also extended to humanitarian efforts. In 2016, during the unrest in Haryana, reports noted that Bhupinder Lather and his brother helped stranded travellers by providing food and lodging at their establishment on the GT Road.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Card 4: Current Public Profile */}
              <Reveal>
                <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs">
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-ink">
                    Current Public Profile
                  </h3>
                  <div className="mt-3 text-sm sm:text-base leading-relaxed text-stone-700 space-y-2 font-normal">
                    <p>
                      Bhupinder Lather continues to participate in political and community activities in Karnal. His recent public engagements include Congress organisational programmes and community initiatives.
                    </p>
                    <p>
                      In 2024, he was among Congress leaders who sought the party&apos;s nomination for the Gharaunda Assembly constituency.
                    </p>
                    <p>
                      In 2026, local media continued to identify him as a senior Congress leader involved in public programmes and organisational activities in Karnal.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION 4: Family & Background (White BG)
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="max-w-3xl">
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  Family &amp; Background
                </h2>
                <p className="mt-3 text-sm sm:text-base text-stone-600 font-medium">
                  His family has been associated with public service and community organisations in Karnal for several decades:
                </p>
              </div>
            </Reveal>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {familyBackground.map((item) => (
                <Reveal key={item.title}>
                  <div className="h-full rounded-2xl border border-stone-200/90 bg-[#F8FAFC] p-5 sm:p-6">
                    <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION 5: Bhupinder Lather — At a Glance (Paper BG)
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-paper border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Bhupinder Lather — At a Glance
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
            SECTION 6: Connect & Engage (White BG)
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Connect &amp; Engage
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-stone-600">
                Follow updates on public activities, community initiatives, organisational meetings and political programmes.
              </p>
            </Reveal>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              <Reveal>
                <a
                  href="https://www.instagram.com/latherbhupi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-stone-200/90 bg-[#F8FAFC] p-4 text-ink hover:border-[#E4405F]/40 hover:text-[#E4405F] transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E4405F]/10 text-[#E4405F]">
                    <InstagramIcon className="h-5 w-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold">Instagram</p>
                    <span className="text-[11px] text-stone-500 truncate block">https://www.instagram.com/latherbhupi</span>
                  </div>
                </a>
              </Reveal>

              <Reveal>
                <div className="flex items-center gap-3 rounded-2xl border border-stone-200/90 bg-[#F8FAFC] p-4 text-ink">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent font-bold text-xs">
                    HR
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold">Region</p>
                    <span className="text-[11px] text-stone-500 truncate block">Gharaunda, Karnal, Haryana</span>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal>
              <div className="mt-6 pt-6 border-t border-stone-200 max-w-2xl">
                <p className="font-display text-lg sm:text-xl font-bold text-ink">
                  Bhupinder Lather (Bhuppi)
                </p>
                <p className="text-xs sm:text-sm text-accent font-semibold mt-0.5">
                  Political &amp; Social Engagement · Community Development · Grassroots Organisation
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==========================================================================
            SECTION 7: Quote & Declaration (Dark Gradient BG)
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-stone-900 to-[#0B0F19] text-white">
          <div className="container-site text-center">
            <Reveal>
              <Quote className="mx-auto h-8 w-8 text-accent mb-4" />
              <blockquote className="font-display text-xl sm:text-3xl font-bold text-white max-w-2xl mx-auto leading-snug">
                &ldquo;Working through organisation, public engagement and community participation.&rdquo;
              </blockquote>

              <div className="mt-6">
                <p className="font-display text-base sm:text-lg font-bold text-white">
                  Bhupinder Lather (Bhuppi)
                </p>
                <p className="text-xs sm:text-sm text-sky-400 font-medium">
                  President, Jat Mahasabha Karnal
                </p>
                <p className="text-xs text-stone-400 mt-0.5">
                  Indian National Congress · Karnal, Haryana
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
                  Everything You Need to Know About Bhupinder Lather
                </h2>
                <p className="mt-2 text-sm sm:text-base text-stone-600">
                  Leadership records, Jat Mahasabha Karnal presidency, and political milestones.
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
            SECTION 8: Verification Disclaimer Note
            ========================================================================== */}
        <section className="py-6 sm:py-8 bg-[#F8FAFC] border-t border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="rounded-2xl border border-stone-200/80 bg-white p-4 sm:p-5 text-xs text-stone-500 leading-relaxed max-w-4xl mx-auto flex items-start gap-3">
                <Info className="h-4 w-4 text-stone-400 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-stone-700 font-semibold">Note:</strong> The biographical details above are based on the profile information supplied, supplemented with publicly reported information. For a public-facing political website, dates, titles and current organisational positions should be periodically updated and verified.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==========================================================================
            SECTION 9: CreateVerse Political Campaign Division & Bottom CTAs (White BG)
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

              {/* Action Buttons: Political War Room Enquiry, Talk on WhatsApp (NO Back to Leaders) */}
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
