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
import { InstagramIcon, FacebookIcon, XIcon } from "@/components/social-icons";
import ProfileBottomCTA from "./profile-bottom-cta";

export const metadata: Metadata = {
  title: "Aditya Surjewala (आदित्य सुरजेवाला) — MLA Kaithal | Haryana Vidhan Sabha",
  description:
    "Official profile and legislative record of Aditya Surjewala (आदित्य सिंह सुरजेवाला), Member of the Haryana Legislative Assembly for Kaithal representing Indian National Congress.",
  keywords: [
    "Aditya Surjewala",
    "Aditya Singh Surjewala",
    "आदित्य सुरजेवाला",
    "आदित्य सिंह सुरजेवाला",
    "aditya surjega",
    "aditya surjeywala",
    "MLA Kaithal",
    "Haryana Legislative Assembly",
    "Kaithal Vidhan Sabha",
    "Young MLA Haryana",
    "Indian National Congress",
    "Randeep Surjewala son",
    "CreateVerse political clients",
  ],
  alternates: {
    canonical: "https://createverse.in/clients/aditya-surjewala",
  },
  openGraph: {
    title: "Aditya Surjewala (आदित्य सुरजेवाला) — Member of the Haryana Legislative Assembly | Kaithal",
    description:
      "A young voice in Haryana's public life, representing Kaithal in the Haryana Legislative Assembly.",
    url: "https://createverse.in/clients/aditya-surjewala",
    siteName: "CreateVerse",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "/politicians/aditya-surjewala.webp",
        width: 800,
        height: 800,
        alt: "Aditya Surjewala — MLA Kaithal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Surjewala — Member of the Haryana Legislative Assembly | Kaithal",
    description:
      "A young voice in Haryana's public life, representing Kaithal in the Haryana Legislative Assembly.",
    images: ["/politicians/aditya-surjewala.webp"],
  },
};

const electionSnapshot = [
  { label: "Constituency", value: "Kaithal" },
  { label: "Party", value: "Indian National Congress" },
  { label: "Votes Received", value: "83,744" },
  { label: "Vote Share", value: "49.64%" },
  { label: "Victory Margin", value: "8,124 votes" },
  { label: "Term Began", value: "8 October 2024" },
];

const legislativeHighlights = [
  "100% Session Attendance (PRS Legislative Research)",
  "16 Questions Raised in Assembly",
  "15th Haryana Legislative Assembly Member",
  "Active Voice on Constituency & State Debates",
];

const educationData = [
  {
    degree: "Operations & Logistics Management",
    college: "University of British Columbia, Canada",
  },
  {
    degree: "Senior Secondary Education",
    college: "The International School, Bengaluru",
  },
  {
    degree: "Graduate Degree",
    college: "International Academic Background",
  },
];

const atAGlance = [
  { label: "Name", value: "Aditya Singh Surjewala" },
  { label: "Role", value: "Member of the Haryana Legislative Assembly" },
  { label: "Constituency", value: "Kaithal" },
  { label: "Party", value: "Indian National Congress" },
  { label: "First Elected", value: "2024" },
  { label: "Education", value: "Graduate" },
  { label: "Professional Background", value: "Politician" },
  { label: "Assembly Term", value: "2024–Present" },
];

const faqs = [
  {
    question: "Who is Aditya Surjewala (आदित्य सुरजेवाला)?",
    answer:
      "Aditya Singh Surjewala is an Indian politician and elected Member of the Haryana Legislative Assembly (MLA) representing the Kaithal Vidhan Sabha constituency for the Indian National Congress (INC).",
  },
  {
    question: "What is Aditya Surjewala's election margin and record in the 2024 Haryana Assembly Election?",
    answer:
      "In October 2024, Aditya Surjewala won the Kaithal Assembly constituency with 83,744 votes (49.64% vote share), securing a decisive victory margin of 8,124 votes at the age of 25 to become one of Haryana's youngest legislators.",
  },
  {
    question: "What is Aditya Surjewala's educational background?",
    answer:
      "Aditya Surjewala graduated with a degree in Operations and Logistics Management from the prestigious University of British Columbia (UBC) in Canada, after completing senior secondary education at The International School, Bengaluru.",
  },
  {
    question: "How does CreateVerse support legislative leadership like Aditya Surjewala?",
    answer:
      "CreateVerse Political Campaign Division powers end-to-end digital war rooms, grassroots youth mobilization, data analytics, and narrative execution for state legislators and parliamentary offices across India.",
  },
  {
    question: "What are Aditya Surjewala's official social media profiles?",
    answer:
      "Aditya Surjewala is active on Facebook at facebook.com/AdityaSurjewala, Instagram at @adityasurjewala, and X (Twitter) at @adityasurjewala.",
  },
];

export default function AdityaSurjewalaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://createverse.in/clients/aditya-surjewala#person",
        name: "Aditya Singh Surjewala",
        alternateName: [
          "आदित्य सुरजेवाला",
          "आदित्य सिंह सुरजेवाला",
          "Aditya Surjewala",
          "aditya surjega",
          "aditya surjeywala",
          "MLA Aditya Surjewala Kaithal",
        ],
        jobTitle: "Member of the Haryana Legislative Assembly (MLA Kaithal)",
        description:
          "Aditya Singh Surjewala is an Indian politician and Member of the Haryana Legislative Assembly from the Kaithal Assembly constituency representing the Indian National Congress.",
        image: "https://createverse.in/politicians/aditya-surjewala.webp",
        url: "https://createverse.in/clients/aditya-surjewala",
        sameAs: [
          "https://en.wikipedia.org/wiki/Aditya_Surjewala",
          "https://www.facebook.com/AdityaSurjewala",
          "https://www.instagram.com/adityasurjewala/",
          "https://x.com/adityasurjewala",
        ],
        affiliation: {
          "@type": "PoliticalParty",
          name: "Indian National Congress",
          alternateName: ["INC", "Congress", "भारतीय राष्ट्रीय कांग्रेस"],
        },
        memberOf: {
          "@type": "ParliamentaryParty",
          name: "Haryana Legislative Assembly",
        },
        alumniOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "University of British Columbia, Canada",
          },
        ],
        knowsAbout: [
          "Legislative Affairs",
          "Constituency Development",
          "Haryana Politics",
          "Youth Leadership",
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": "https://createverse.in/clients/aditya-surjewala#webpage",
        url: "https://createverse.in/clients/aditya-surjewala",
        name: "Aditya Surjewala (आदित्य सुरजेवाला) — MLA Kaithal | Official Client Profile",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://createverse.in/#website",
          name: "CreateVerse",
          url: "https://createverse.in",
        },
        about: {
          "@id": "https://createverse.in/clients/aditya-surjewala#person",
        },
        mainEntity: {
          "@id": "https://createverse.in/clients/aditya-surjewala#person",
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
        "@id": "https://createverse.in/clients/aditya-surjewala#breadcrumb",
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
            name: "Aditya Surjewala",
            item: "https://createverse.in/clients/aditya-surjewala",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://createverse.in/clients/aditya-surjewala#faq",
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
                <span className="text-ink font-bold">Aditya Surjewala</span>
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
                    Aditya Surjewala
                  </h1>

                  <p className="mt-2.5 sm:mt-3 font-display text-base sm:text-xl font-semibold text-accent leading-snug">
                    Member of the Haryana Legislative Assembly | Kaithal
                  </p>

                  <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-ink/85 font-normal">
                    A young voice in Haryana&apos;s public life, representing Kaithal in the Haryana Legislative Assembly. Aditya Singh Surjewala is an Indian politician and Member of the Haryana Legislative Assembly from the Kaithal Assembly constituency. He represents the Indian National Congress and began his term as an MLA on 8 October 2024. At 25, Aditya Surjewala became one of the youngest members elected to the Haryana Vidhan Sabha, continuing a generational association with Kaithal.
                  </p>

                  {/* Clean Official Social Links */}
                  <div className="mt-6 flex items-center gap-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 mr-1">
                      Official:
                    </span>
                    <a
                      href="https://www.facebook.com/AdityaSurjewala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/[0.05] transition-all shadow-2xs hover:scale-110"
                      aria-label="Aditya Surjewala Facebook"
                    >
                      <FacebookIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/adityasurjewala/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/[0.05] transition-all shadow-2xs hover:scale-110"
                      aria-label="Aditya Surjewala Instagram"
                    >
                      <InstagramIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="https://x.com/adityasurjewala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-700 hover:text-black hover:border-black/40 hover:bg-stone-100 transition-all shadow-2xs hover:scale-110"
                      aria-label="Aditya Surjewala X"
                    >
                      <XIcon className="h-3.5 w-3.5" />
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
                          src="/politicians/aditya-surjewala.webp"
                          alt="Aditya Surjewala"
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
            SECTION 2: About Aditya Surjewala (White BG)
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="max-w-3xl">
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  About Aditya Surjewala
                </h2>
                <div className="mt-4 text-sm sm:text-base leading-relaxed text-stone-700 space-y-3 font-normal">
                  <p>
                    Aditya Surjewala was born into a family with a long association with public life in Haryana. He is the son of Randeep Singh Surjewala, a senior Congress leader and former Member of the Haryana Legislative Assembly.
                  </p>
                  <p>
                    Before entering electoral politics, Aditya pursued his education outside Haryana. He studied at The International School, Bengaluru, and later completed a degree in Operations and Logistics Management from the University of British Columbia, Canada, according to reporting by The Indian Express.
                  </p>
                  <p>
                    His transition into electoral politics came with the 2024 Haryana Assembly elections, when he contested the Kaithal constituency on a Congress ticket.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==========================================================================
            SECTION 3: Political Journey (Paper BG) - Structured Card Containers
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-paper border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Political Journey
              </h2>
            </Reveal>

            <div className="mt-8 space-y-6">
              {/* Card 1: Representing Kaithal */}
              <Reveal>
                <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs">
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-ink">
                    Representing Kaithal
                  </h3>
                  <div className="mt-3 text-sm sm:text-base leading-relaxed text-stone-700 space-y-2 font-normal">
                    <p>
                      In the 2024 Haryana Legislative Assembly election, Aditya Surjewala contested from Kaithal and was elected as the Congress candidate.
                    </p>
                    <p>
                      He received 83,744 votes, securing approximately 49.64% of the votes. He defeated BJP candidate Leela Ram by 8,124 votes.
                    </p>
                  </div>

                  {/* 2024 Election Snapshot Grid inside Card */}
                  <div className="mt-6 pt-5 border-t border-stone-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                      2024 Election Snapshot
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {electionSnapshot.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-xl border border-stone-200 bg-[#F8FAFC] p-3.5"
                        >
                          <span className="block text-[11px] font-bold uppercase tracking-wider text-stone-500">
                            {item.label}
                          </span>
                          <p className="mt-1 text-sm font-bold text-ink">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Card 2: Legislative Journey */}
              <Reveal>
                <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs">
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-ink">
                    Legislative Journey
                  </h3>
                  <div className="mt-3 text-sm sm:text-base leading-relaxed text-stone-700 space-y-2 font-normal">
                    <p>
                      As a first-time MLA, Aditya Surjewala is part of the 15th Haryana Legislative Assembly.
                    </p>
                    <p>
                      According to PRS Legislative Research, covering the period from 8 October 2024 to 18 March 2026, Aditya Surjewala recorded 100% attendance in the sessions covered by its data and asked 16 questions in the Assembly.
                    </p>
                    <p>
                      His legislative role provides a platform to raise constituency-level issues and participate in debates and discussions concerning Haryana.
                    </p>
                  </div>

                  {/* Highlights inside card with check icons */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
                    {legislativeHighlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-xl border border-stone-200 bg-[#F8FAFC] p-3 text-xs sm:text-sm font-semibold text-ink"
                      >
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Card 3: A New Generation of Leadership */}
              <Reveal>
                <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs">
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-ink">
                    A New Generation of Leadership
                  </h3>
                  <div className="mt-3 text-sm sm:text-base leading-relaxed text-stone-700 space-y-2 font-normal">
                    <p>
                      Aditya Surjewala&apos;s entry into electoral politics represents a younger generation entering Haryana&apos;s political landscape.
                    </p>
                    <p>
                      His public journey combines an academic background in Canada with a political connection to Haryana and, particularly, the Kaithal region. His electoral debut in 2024 marked his transition from student and young professional to elected representative.
                    </p>
                    <p>
                      As a legislator, his public role now includes participating in the functioning of the Haryana Legislative Assembly and representing the interests and concerns of constituents in Kaithal.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Card 4: Family & Public Life */}
              <Reveal>
                <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs">
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-ink">
                    Family &amp; Public Life
                  </h3>
                  <div className="mt-3 text-sm sm:text-base leading-relaxed text-stone-700 space-y-2 font-normal">
                    <p>
                      Aditya Surjewala belongs to the Surjewala family, which has a longstanding political presence in Haryana.
                    </p>
                    <p>
                      His father, Randeep Singh Surjewala, has served in the Haryana Legislative Assembly and held various political responsibilities. His grandfather, Shamsher Singh Surjewala, was also a prominent Haryana politician and represented constituencies in the state legislature.
                    </p>
                    <p>
                      The family&apos;s political association with the region has been particularly connected with the Kaithal area, making Aditya&apos;s election another chapter in that political history.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION 4: Education & Academic Background (White BG)
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="max-w-3xl">
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  Education &amp; Academic Background
                </h2>
                <p className="mt-3 text-sm sm:text-base text-stone-600 font-medium">
                  Aditya Surjewala holds qualifications including:
                </p>
              </div>
            </Reveal>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {educationData.map((edu) => (
                <Reveal key={edu.degree}>
                  <div className="h-full rounded-2xl border border-stone-200/90 bg-[#F8FAFC] p-5 sm:p-6">
                    <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm font-semibold text-accent">
                      {edu.college}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="mt-6 text-sm sm:text-base text-stone-700 font-normal">
                Before entering electoral politics, Aditya completed his academic education in India and Canada, gaining international exposure and specialized knowledge in operations and logistics.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ==========================================================================
            SECTION 5: Aditya Surjewala — At a Glance (Paper BG)
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-paper border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Aditya Surjewala — At a Glance
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-stone-600">
                Key legislative profile and constituency details.
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
            SECTION 6: Connect With Aditya Surjewala (White BG)
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Connect With Aditya Surjewala
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-stone-600">
                Follow updates on public activities, legislative work, political engagements and initiatives.
              </p>
            </Reveal>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
              <Reveal>
                <a
                  href="https://www.facebook.com/AdityaSurjewala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-stone-200/90 bg-[#F8FAFC] p-4 text-ink hover:border-[#1877F2]/40 hover:text-[#1877F2] transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1877F2]/10 text-[#1877F2]">
                    <FacebookIcon className="h-5 w-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold">Facebook</p>
                    <span className="text-[11px] text-stone-500 truncate block">https://www.facebook.com/AdityaSurjewala</span>
                  </div>
                </a>
              </Reveal>

              <Reveal>
                <a
                  href="https://www.instagram.com/adityasurjewala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-stone-200/90 bg-[#F8FAFC] p-4 text-ink hover:border-[#E4405F]/40 hover:text-[#E4405F] transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E4405F]/10 text-[#E4405F]">
                    <InstagramIcon className="h-5 w-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold">Instagram</p>
                    <span className="text-[11px] text-stone-500 truncate block">https://www.instagram.com/adityasurjewala/</span>
                  </div>
                </a>
              </Reveal>

              <Reveal>
                <a
                  href="https://x.com/adityasurjewala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-stone-200/90 bg-[#F8FAFC] p-4 text-ink hover:border-black/40 hover:text-black transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-200 text-black">
                    <XIcon className="h-4 w-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold">X (Twitter)</p>
                    <span className="text-[11px] text-stone-500 truncate block">https://x.com/adityasurjewala</span>
                  </div>
                </a>
              </Reveal>
            </div>
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
                &ldquo;Stay connected for updates on Aditya Surjewala&apos;s legislative work, public engagements, constituency activities, speeches, initiatives and political journey.&rdquo;
              </blockquote>

              <div className="mt-6">
                <p className="font-display text-base sm:text-lg font-bold text-white">
                  Aditya Surjewala
                </p>
                <p className="text-xs sm:text-sm text-sky-400 font-medium">
                  Member of the Haryana Legislative Assembly, Kaithal
                </p>
                <p className="text-xs text-stone-400 mt-0.5">
                  Indian National Congress
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
                  Everything You Need to Know About Aditya Surjewala
                </h2>
                <p className="mt-2 text-sm sm:text-base text-stone-600">
                  Comprehensive insights into Kaithal legislative representation, assembly record, and youth leadership.
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

              {/* Action Buttons: Political War Room Enquiry, Talk on WhatsApp, Back to Leaders */}
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
