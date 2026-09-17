import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Landmark,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import Reveal from "@/components/reveal";
import { InstagramIcon, FacebookIcon, XIcon } from "@/components/social-icons";
import ProfileBottomCTA from "./profile-bottom-cta";

export const metadata: Metadata = {
  title: "Aditya Surjewala — Member of the Haryana Legislative Assembly | Kaithal",
  description:
    "Aditya Singh Surjewala is an Indian politician and Member of the Haryana Legislative Assembly from the Kaithal Assembly constituency representing the Indian National Congress.",
  keywords: [
    "Aditya Surjewala",
    "Aditya Singh Surjewala",
    "MLA Kaithal",
    "Haryana Legislative Assembly",
    "Indian National Congress",
    "Kaithal Vidhan Sabha",
    "Young MLA Haryana",
  ],
  alternates: {
    canonical: "https://createverse.in/clients/aditya-surjewala",
  },
  openGraph: {
    title: "Aditya Surjewala — Member of the Haryana Legislative Assembly | Kaithal",
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

export default function AdityaSurjewalaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aditya Singh Surjewala",
    jobTitle: "Member of the Haryana Legislative Assembly",
    affiliation: {
      "@type": "PoliticalParty",
      name: "Indian National Congress",
    },
    sameAs: [
      "https://www.facebook.com/AdityaSurjewala",
      "https://www.instagram.com/adityasurjewala/",
      "https://x.com/adityasurjewala",
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
            HERO SECTION: Clean profile header
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

                  <p className="mt-2 font-medium text-stone-600 text-sm sm:text-base">
                    A young voice in Haryana&apos;s public life, representing Kaithal in the Haryana Legislative Assembly.
                  </p>

                  <div className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-ink/85 font-normal space-y-3">
                    <p>
                      Aditya Singh Surjewala is an Indian politician and Member of the Haryana Legislative Assembly from the Kaithal Assembly constituency. He represents the Indian National Congress and began his term as an MLA on 8 October 2024.
                    </p>
                    <p>
                      At 25, Aditya Surjewala became one of the youngest members elected to the Haryana Vidhan Sabha. His entry into public life continues a political association with Kaithal that has been shared by earlier generations of his family.
                    </p>
                  </div>

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
            SECTION: About Aditya Surjewala
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
            SECTION: Representing Kaithal & 2024 Election Snapshot
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-paper border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="max-w-3xl">
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  Representing Kaithal
                </h2>
                <div className="mt-4 text-sm sm:text-base leading-relaxed text-stone-700 space-y-3 font-normal">
                  <p>
                    In the 2024 Haryana Legislative Assembly election, Aditya Surjewala contested from Kaithal and was elected as the Congress candidate.
                  </p>
                  <p>
                    He received 83,744 votes, securing approximately 49.64% of the votes. He defeated BJP candidate Leela Ram by 8,124 votes.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* 2024 Election Snapshot Grid */}
            <div className="mt-8 max-w-3xl">
              <Reveal>
                <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-ink mb-4 pb-3 border-b border-stone-200/80">
                    2024 Election Snapshot
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
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
              </Reveal>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION: Legislative Journey
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="max-w-3xl">
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  Legislative Journey
                </h2>
                <div className="mt-4 text-sm sm:text-base leading-relaxed text-stone-700 space-y-3 font-normal">
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
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==========================================================================
            SECTION: A New Generation of Leadership
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-paper border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="max-w-3xl">
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  A New Generation of Leadership
                </h2>
                <div className="mt-4 text-sm sm:text-base leading-relaxed text-stone-700 space-y-3 font-normal">
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
          </div>
        </section>

        {/* ==========================================================================
            SECTION: Family & Public Life
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="max-w-3xl">
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  Family &amp; Public Life
                </h2>
                <div className="mt-4 text-sm sm:text-base leading-relaxed text-stone-700 space-y-3 font-normal">
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
        </section>

        {/* ==========================================================================
            SECTION: Aditya Surjewala — At a Glance
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-paper border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Aditya Surjewala — At a Glance
              </h2>
            </Reveal>

            <div className="mt-6 max-w-3xl">
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
            SECTION: Connect & Follow
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Connect &amp; Follow
              </h2>
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

            <Reveal>
              <p className="mt-8 text-sm sm:text-base text-stone-700 leading-relaxed max-w-2xl">
                Stay connected for updates on Aditya Surjewala&apos;s legislative work, public engagements, constituency activities, speeches, initiatives and political journey.
              </p>

              <div className="mt-6 pt-6 border-t border-stone-200 max-w-2xl">
                <p className="font-display text-lg sm:text-xl font-bold text-ink">
                  Aditya Surjewala
                </p>
                <p className="text-xs sm:text-sm text-accent font-semibold mt-0.5">
                  Member of the Haryana Legislative Assembly, Kaithal
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==========================================================================
            VERY LAST SECTION: CreateVerse Partnership, Praise & Enquiry CTAs (NO STARS)
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
