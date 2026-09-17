import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Landmark,
  CheckCircle2,
  Quote,
  ChevronRight,
  ExternalLink,
  Info,
} from "lucide-react";
import Reveal from "@/components/reveal";
import { InstagramIcon, FacebookIcon, XIcon } from "@/components/social-icons";
import ProfileBottomCTA from "./profile-bottom-cta";

export const metadata: Metadata = {
  title: "Randeep Singh Surjewala (रणदीप सिंह सुरजेवाला) — MP Rajya Sabha | Senior Congress Leader",
  description:
    "Official profile and political milestones of Randeep Singh Surjewala (रणदीप सुरजेवाला), Member of Parliament (Rajya Sabha), AICC General Secretary & Senior Congress Leader.",
  keywords: [
    "Randeep Singh Surjewala",
    "Randeep Surjewala",
    "रणदीप सिंह सुरजेवाला",
    "रणदीप सुरजेवाला",
    "सुरजेवाला",
    "randeep sign surjega",
    "randeep surjega",
    "Randeep Singh Surjeywala",
    "Member of Parliament Rajya Sabha",
    "Senior Congress Leader",
    "Indian National Congress",
    "AICC General Secretary Karnataka",
    "Kaithal MLA",
    "Narwana MLA",
    "Haryana Cabinet Minister",
    "Randeep Surjewala news",
    "Randeep Surjewala official profile",
    "रणदीप सुरजेवाला राज्यसभा सांसद",
    "CreateVerse political clients",
  ],
  alternates: {
    canonical: "https://createverse.in/clients/randeep-singh-surjewala",
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
    title: "Randeep Singh Surjewala (रणदीप सिंह सुरजेवाला) — Member of Parliament, Rajya Sabha",
    description:
      "Randeep Singh Surjewala is an Indian politician and lawyer from Haryana, Member of Parliament (Rajya Sabha), and senior leader of the Indian National Congress.",
    url: "https://createverse.in/clients/randeep-singh-surjewala",
    siteName: "CreateVerse",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "https://createverse.in/politicians/randeep-singh-surjewala.webp",
        width: 800,
        height: 800,
        alt: "Randeep Singh Surjewala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Randeep Singh Surjewala — Member of Parliament, Rajya Sabha",
    description:
      "Randeep Singh Surjewala is an Indian politician and lawyer from Haryana, Member of Parliament (Rajya Sabha), and senior leader of the Indian National Congress.",
    images: ["https://createverse.in/politicians/randeep-singh-surjewala.webp"],
  },
};

const portfolios = [
  "Transport & Civil Aviation",
  "Power",
  "Public Works",
  "Water Supply & Sanitation",
  "Parliamentary Affairs",
  "Industries & Commerce",
  "Electronics & Information Technology",
  "Science & Technology",
];

const educationData = [
  {
    degree: "Bachelor of Commerce (Hons.)",
    college: "DAV College, Chandigarh",
  },
  {
    degree: "Bachelor of Laws (LL.B.)",
    college: "Panjab University, Chandigarh",
  },
  {
    degree: "Master's in Political Science",
    college: "Panjab University, Chandigarh",
  },
];

const experiencePillars = [
  {
    title: "30+ Years in Public Life",
    desc: "A political career spanning multiple levels of public and organisational responsibility.",
  },
  {
    title: "Haryana Assembly Experience",
    desc: "Served multiple terms as an elected representative in the Haryana Legislative Assembly.",
  },
  {
    title: "Cabinet Responsibility",
    desc: "Handled a range of important portfolios in the Haryana Government.",
  },
  {
    title: "National Leadership",
    desc: "Served in senior organisational and communication roles within the Indian National Congress.",
  },
  {
    title: "Parliamentary Role",
    desc: "Member of the Rajya Sabha since 2022.",
  },
];

const faqs = [
  {
    question: "Who is Randeep Singh Surjewala (रणदीप सिंह सुरजेवाला)?",
    answer:
      "Randeep Singh Surjewala is an Indian politician, lawyer, and senior leader of the Indian National Congress (INC). He currently serves as a Member of Parliament in the Rajya Sabha representing Rajasthan and as the AICC General Secretary in charge of Karnataka.",
  },
  {
    question: "Which constituencies has Randeep Singh Surjewala represented in the Assembly and Parliament?",
    answer:
      "Randeep Singh Surjewala represented the Narwana constituency (1996, 2005) and the Kaithal constituency (2009–2019) in the Haryana Legislative Assembly. In 2022, he was elected to the Rajya Sabha (Council of States), the Upper House of the Indian Parliament.",
  },
  {
    question: "What cabinet portfolios did Randeep Singh Surjewala hold in the Haryana Government?",
    answer:
      "As a Cabinet Minister in Haryana, he managed crucial ministries including Transport & Civil Aviation, Power, Public Works (PWD), Water Supply & Sanitation, Parliamentary Affairs, Industries & Commerce, and Information Technology.",
  },
  {
    question: "Who manages digital war rooms and campaign strategy for Randeep Singh Surjewala?",
    answer:
      "CreateVerse Political Campaign Division partners with distinguished leadership like Randeep Singh Surjewala to deliver high-stakes digital strategy, 24/7 campaign war rooms, voter data intelligence, and verified narrative architecture.",
  },
  {
    question: "What are the official social media handles of Randeep Singh Surjewala?",
    answer:
      "Randeep Singh Surjewala can be followed officially on Facebook at facebook.com/rssurjewala, Instagram at @rssurjewala, and X (formerly Twitter) at @rssurjewala.",
  },
];

export default function RandeepSurjewalaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://createverse.in/clients/randeep-singh-surjewala#person",
        name: "Randeep Singh Surjewala",
        alternateName: [
          "रणदीप सिंह सुरजेवाला",
          "रणदीप सुरजेवाला",
          "Randeep Surjewala",
          "randeep sign surjega",
          "randeep surjega",
          "Randeep Singh Surjeywala",
          "R. S. Surjewala",
          "सुरजेवाला",
        ],
        jobTitle: "Member of Parliament, Rajya Sabha & AICC General Secretary",
        description:
          "Randeep Singh Surjewala is an Indian politician and lawyer from Haryana, Member of Parliament (Rajya Sabha), and senior leader of the Indian National Congress.",
        image: "https://createverse.in/politicians/randeep-singh-surjewala.webp",
        url: "https://createverse.in/clients/randeep-singh-surjewala",
        sameAs: [
          "https://en.wikipedia.org/wiki/Randeep_Surjewala",
          "https://sansad.in/rs/members",
          "https://www.facebook.com/rssurjewala",
          "https://www.instagram.com/rssurjewala",
          "https://x.com/rssurjewala",
        ],
        affiliation: {
          "@type": "PoliticalParty",
          name: "Indian National Congress",
          alternateName: ["INC", "Congress", "भारतीय राष्ट्रीय कांग्रेस"],
        },
        memberOf: {
          "@type": "ParliamentaryParty",
          name: "Rajya Sabha, Parliament of India",
        },
        alumniOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "DAV College, Chandigarh",
          },
          {
            "@type": "CollegeOrUniversity",
            name: "Panjab University, Chandigarh",
          },
        ],
        knowsAbout: [
          "Indian Politics",
          "Parliament of India",
          "Haryana Vidhan Sabha",
          "Constituency Campaign Strategy",
          "Public Administration",
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": "https://createverse.in/clients/randeep-singh-surjewala#webpage",
        url: "https://createverse.in/clients/randeep-singh-surjewala",
        name: "Randeep Singh Surjewala (रणदीप सिंह सुरजेवाला) — Member of Parliament | Official Client Profile",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://createverse.in/#website",
          name: "CreateVerse",
          url: "https://createverse.in",
        },
        about: {
          "@id": "https://createverse.in/clients/randeep-singh-surjewala#person",
        },
        mainEntity: {
          "@id": "https://createverse.in/clients/randeep-singh-surjewala#person",
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
        "@id": "https://createverse.in/clients/randeep-singh-surjewala#breadcrumb",
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
            name: "Randeep Singh Surjewala",
            item: "https://createverse.in/clients/randeep-singh-surjewala",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://createverse.in/clients/randeep-singh-surjewala#faq",
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
            HERO SECTION: Clean, accurate profile header without distracting CTA buttons
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
                <span className="text-ink font-bold">Randeep Singh Surjewala</span>
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
                    Randeep Singh Surjewala
                  </h1>

                  <p className="mt-2.5 sm:mt-3 font-display text-base sm:text-xl font-semibold text-accent leading-snug">
                    Member of Parliament, Rajya Sabha | Senior Congress Leader
                  </p>

                  <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-ink/85 font-normal">
                    Randeep Singh Surjewala is an Indian politician and lawyer from Haryana and a senior leader of the Indian National Congress. Born on 3 June 1967 in Chandigarh, he has built a political career spanning grassroots organisation, the Haryana Legislative Assembly, state government, national party responsibilities and Parliament.
                  </p>

                  {/* Clean Official Social Links */}
                  <div className="mt-6 flex items-center gap-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 mr-1">
                      Official:
                    </span>
                    <a
                      href="https://www.facebook.com/rssurjewala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/[0.05] transition-all shadow-2xs hover:scale-110"
                      aria-label="Randeep Singh Surjewala Facebook"
                    >
                      <FacebookIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/rssurjewala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/[0.05] transition-all shadow-2xs hover:scale-110"
                      aria-label="Randeep Singh Surjewala Instagram"
                    >
                      <InstagramIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="https://x.com/rssurjewala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-700 hover:text-black hover:border-black/40 hover:bg-stone-100 transition-all shadow-2xs hover:scale-110"
                      aria-label="Randeep Singh Surjewala X"
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
                          src="/politicians/randeep-singh-surjewala.webp"
                          alt="Randeep Singh Surjewala"
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
            SECTION: A Journey of Public Service
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="max-w-3xl">
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  A Journey of Public Service
                </h2>
                <div className="mt-4 text-sm sm:text-base leading-relaxed text-stone-700 space-y-3 font-normal">
                  <p>
                    From his early involvement in the Youth Congress to serving as a Cabinet Minister in the Haryana Government and later entering the Rajya Sabha, Randeep Singh Surjewala&apos;s public life has been marked by extensive organisational and legislative experience.
                  </p>
                  <p>
                    He began his legal career in 1988 and has practised law in New Delhi and Chandigarh. Alongside his legal profession, he became actively involved in public and political affairs at a young age.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==========================================================================
            SECTION: Political Journey
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-paper border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Political Journey
              </h2>
            </Reveal>

            <div className="mt-8 space-y-6">
              {/* Youth Congress & Organisation */}
              <Reveal>
                <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs">
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-ink">
                    Youth Congress &amp; Organisation
                  </h3>
                  <div className="mt-3 text-sm sm:text-base leading-relaxed text-stone-700 space-y-2 font-normal">
                    <p>
                      Surjewala became involved with the Indian National Congress at a young age and served in several organisational positions within the Youth Congress.
                    </p>
                    <p>
                      In 2000, he became National President of the Indian Youth Congress, serving in the position until 2005. He subsequently took on senior organisational responsibilities within the Congress party.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Haryana Legislative Assembly */}
              <Reveal>
                <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs">
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-ink">
                    Haryana Legislative Assembly
                  </h3>
                  <div className="mt-3 text-sm sm:text-base leading-relaxed text-stone-700 space-y-2 font-normal">
                    <p>
                      Surjewala was elected to the Haryana Legislative Assembly from Narwana in 1996 and again in 2005. He later represented Kaithal in the Haryana Assembly from 2009 to 2019.
                    </p>
                    <p>
                      During his tenure in state politics, he served in several ministerial positions in the Haryana Government, handling portfolios including:
                    </p>
                  </div>

                  {/* Portfolios list */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
                    {portfolios.map((item) => (
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

              {/* National Political Role */}
              <Reveal>
                <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs">
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-ink">
                    National Political Role
                  </h3>
                  <div className="mt-3 text-sm sm:text-base leading-relaxed text-stone-700 space-y-2 font-normal">
                    <p>
                      At the national level, Surjewala has served as a spokesperson and senior organisational leader of the Indian National Congress.
                    </p>
                    <p>
                      He has also served as AICC General Secretary with responsibility for Karnataka, taking charge of the role in September 2020.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Member of Parliament */}
              <Reveal>
                <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs">
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-ink">
                    Member of Parliament
                  </h3>
                  <div className="mt-3 text-sm sm:text-base leading-relaxed text-stone-700 space-y-2 font-normal">
                    <p>
                      In 2022, Randeep Singh Surjewala was elected to the Rajya Sabha from Rajasthan. He assumed office as a Member of Parliament on 5 July 2022.
                    </p>
                    <p>
                      As a Parliamentarian, his public work includes participation in legislative and national political affairs.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION: Education & Legal Career
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="max-w-3xl">
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  Education &amp; Legal Career
                </h2>
                <p className="mt-3 text-sm sm:text-base text-stone-600 font-medium">
                  Surjewala holds:
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
                He began practising law in 1988 and subsequently practised before the High Court of Punjab &amp; Haryana.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ==========================================================================
            SECTION: Leadership Through Experience
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-paper border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Leadership Through Experience
              </h2>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {experiencePillars.map((item) => (
                <Reveal key={item.title}>
                  <div className="h-full rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 shadow-xs">
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
            SECTION: Connect With Randeep Singh Surjewala
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Connect With Randeep Singh Surjewala
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-stone-600">
                Follow updates on public activities, parliamentary work, political engagements and initiatives.
              </p>
            </Reveal>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
              <Reveal>
                <a
                  href="https://www.facebook.com/rssurjewala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-stone-200/90 bg-[#F8FAFC] p-4 text-ink hover:border-[#1877F2]/40 hover:text-[#1877F2] transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1877F2]/10 text-[#1877F2]">
                    <FacebookIcon className="h-5 w-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold">Facebook</p>
                    <span className="text-[11px] text-stone-500 truncate block">https://www.facebook.com/rssurjewala</span>
                  </div>
                </a>
              </Reveal>

              <Reveal>
                <a
                  href="https://www.instagram.com/rssurjewala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-stone-200/90 bg-[#F8FAFC] p-4 text-ink hover:border-[#E4405F]/40 hover:text-[#E4405F] transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E4405F]/10 text-[#E4405F]">
                    <InstagramIcon className="h-5 w-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold">Instagram</p>
                    <span className="text-[11px] text-stone-500 truncate block">https://www.instagram.com/rssurjewala</span>
                  </div>
                </a>
              </Reveal>

              <Reveal>
                <a
                  href="https://x.com/rssurjewala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-stone-200/90 bg-[#F8FAFC] p-4 text-ink hover:border-black/40 hover:text-black transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-200 text-black">
                    <XIcon className="h-4 w-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold">X (Twitter)</p>
                    <span className="text-[11px] text-stone-500 truncate block">https://x.com/rssurjewala</span>
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
                &ldquo;Public life is a continuous journey of responsibility, dialogue and service.&rdquo;
              </blockquote>

              <div className="mt-6">
                <p className="font-display text-base sm:text-lg font-bold text-white">
                  Randeep Singh Surjewala
                </p>
                <p className="text-xs sm:text-sm text-sky-400 font-medium">
                  Member of Parliament, Rajya Sabha
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
                  Everything You Need to Know About Randeep Singh Surjewala
                </h2>
                <p className="mt-2 text-sm sm:text-base text-stone-600">
                  Authoritative information covering parliamentary roles, constituency history, leadership, and public representation.
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
                  <strong className="text-stone-700 font-semibold">Note:</strong> The biographical details above are based on the profile information supplied, supplemented with publicly reported information. For a public-facing political website, dates, titles and current organisational positions should be periodically updated and verified.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==========================================================================
            VERY LAST SECTION: CreateVerse Partnership, Praise & Enquiry CTAs
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

              {/* Action Buttons: Political War Room Enquiry, WhatsApp Desk, Back to Leaders */}
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
