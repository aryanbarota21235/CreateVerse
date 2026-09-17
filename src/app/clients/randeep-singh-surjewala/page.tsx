import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Landmark,
  Scale,
  GraduationCap,
  Briefcase,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Quote,
  Building2,
  Users,
  ScrollText,
  FileCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";
import { InstagramIcon, FacebookIcon, XIcon } from "@/components/social-icons";
import ProfileHeroButtons from "./profile-hero-buttons";

export const metadata: Metadata = {
  title: "Randeep Singh Surjewala — Member of Parliament, Rajya Sabha | Senior Congress Leader",
  description:
    "Official profile and public journey of Randeep Singh Surjewala, Member of Parliament (Rajya Sabha), Senior Leader of the Indian National Congress, and former Cabinet Minister in Haryana Government.",
  keywords: [
    "Randeep Singh Surjewala",
    "Randeep Surjewala MP",
    "Rajya Sabha MP Haryana",
    "Indian National Congress",
    "AICC General Secretary Karnataka",
    "Kaithal Narwana MLA",
    "Haryana Cabinet Minister",
    "Congress Leader Randeep Surjewala",
  ],
  alternates: {
    canonical: "https://createverse.in/clients/randeep-singh-surjewala",
  },
  openGraph: {
    title: "Randeep Singh Surjewala — Member of Parliament, Rajya Sabha",
    description:
      "Public life, legislative career, ministerial portfolios, and organizational leadership of Senior Congress Leader Randeep Singh Surjewala.",
    url: "https://createverse.in/clients/randeep-singh-surjewala",
    siteName: "CreateVerse",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "/politicians/randeep-singh-surjewala.webp",
        width: 800,
        height: 800,
        alt: "Randeep Singh Surjewala — Member of Parliament",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Randeep Singh Surjewala — Member of Parliament, Rajya Sabha",
    description:
      "Public life, legislative career, ministerial portfolios, and organizational leadership of Senior Congress Leader Randeep Singh Surjewala.",
    images: ["/politicians/randeep-singh-surjewala.webp"],
  },
};

const ministerialPortfolios = [
  { name: "Transport & Civil Aviation", desc: "Modernization of state transport infrastructure" },
  { name: "Power", desc: "Grid expansion & electrical infrastructure development" },
  { name: "Public Works (B&R)", desc: "State highway networks & public infrastructure" },
  { name: "Water Supply & Sanitation", desc: "Rural water distribution & sanitation networks" },
  { name: "Parliamentary Affairs", desc: "Legislative coordination & assembly business" },
  { name: "Industries & Commerce", desc: "Industrial growth policies & enterprise development" },
  { name: "Electronics & Information Tech", desc: "Digital governance & IT policy implementation" },
  { name: "Science & Technology", desc: "State scientific research & renewable technology initiatives" },
];

const educationList = [
  {
    degree: "Bachelor of Commerce (Hons.)",
    institution: "DAV College, Chandigarh",
    focus: "Commerce, Finance & Economic Administration",
  },
  {
    degree: "Bachelor of Laws (LL.B.)",
    institution: "Panjab University, Chandigarh",
    focus: "Constitutional, Administrative & Corporate Law",
  },
  {
    degree: "Master's in Political Science",
    institution: "Panjab University, Chandigarh",
    focus: "Public Policy, Governance & Political Systems",
  },
];

const leadershipPillars = [
  {
    title: "30+ Years in Public Life",
    desc: "A dedicated political career spanning multiple levels of public, grassroots, and organizational responsibility across India.",
    icon: Calendar,
  },
  {
    title: "Haryana Assembly Experience",
    desc: "Served multiple terms as an elected representative in the Haryana Legislative Assembly representing Narwana (1996, 2005) and Kaithal (2009–2019).",
    icon: Landmark,
  },
  {
    title: "Cabinet Responsibility",
    desc: "Handled 8+ core infrastructure, power, industry, and governance portfolios in the Haryana Council of Ministers.",
    icon: Building2,
  },
  {
    title: "National Leadership",
    desc: "Served in senior national organizational roles, chief communication spokesperson, and AICC General Secretary with responsibility for Karnataka.",
    icon: Users,
  },
  {
    title: "Parliamentary Role",
    desc: "Member of Parliament in the Rajya Sabha since 2022, championing legislative debates and key national policy reforms.",
    icon: Award,
  },
];

export default function RandeepSurjewalaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Randeep Singh Surjewala",
    birthDate: "1967-06-03",
    birthPlace: "Chandigarh, India",
    jobTitle: "Member of Parliament, Rajya Sabha",
    worksFor: {
      "@type": "Organization",
      name: "Parliament of India",
    },
    affiliation: {
      "@type": "PoliticalParty",
      name: "Indian National Congress",
    },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Panjab University, Chandigarh" },
      { "@type": "CollegeOrUniversity", name: "DAV College, Chandigarh" },
    ],
    sameAs: [
      "https://www.facebook.com/rssurjewala",
      "https://www.instagram.com/rssurjewala",
      "https://x.com/rssurjewala",
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
            HERO SECTION: Executive Political Profile Header
            ========================================================================== */}
        <section className="relative overflow-hidden bg-paper pt-[74px] sm:pt-[84px] border-b border-stone-200">
          <div className="dot-texture absolute inset-0 opacity-70" />
          <div className="hidden sm:block pointer-events-none absolute -left-28 top-16 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,237,213,0.7)_0%,transparent_70%)]" />
          <div className="hidden sm:block pointer-events-none absolute -right-28 top-12 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(224,242,254,0.6)_0%,transparent_70%)]" />

          <div className="container-site relative pt-6 sm:pt-10 pb-10 sm:pb-16">
            {/* Breadcrumbs */}
            <Reveal>
              <nav className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider mb-6 sm:mb-8">
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
                <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
                <Link href="/clients" className="hover:text-accent transition-colors">
                  Clients &amp; Leaders
                </Link>
                <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
                <span className="text-ink font-bold">Randeep Singh Surjewala</span>
              </nav>
            </Reveal>

            {/* Profile Hero Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Details & Bio */}
              <div className="lg:col-span-8 order-2 lg:order-1">
                <Reveal>
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-600 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      Indian National Congress
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white px-3 py-1 text-[11px] sm:text-xs font-bold text-stone-700 shadow-2xs">
                      <Landmark className="h-3.5 w-3.5 text-accent" />
                      Member of Parliament (Rajya Sabha)
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white px-3 py-1 text-[11px] sm:text-xs font-bold text-stone-700 shadow-2xs">
                      <Scale className="h-3.5 w-3.5 text-stone-500" />
                      Advocate &amp; Jurist
                    </span>
                  </div>

                  <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.14]">
                    Randeep Singh Surjewala
                  </h1>

                  <p className="mt-2.5 sm:mt-3 font-display text-base sm:text-xl font-semibold text-accent leading-snug">
                    Member of Parliament, Rajya Sabha | Senior Congress Leader
                  </p>

                  <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-ink/85 font-normal">
                    Randeep Singh Surjewala is an Indian politician and lawyer from Haryana and a senior leader of the Indian National Congress. Born on 3 June 1967 in Chandigarh, he has built a political career spanning grassroots organisation, the Haryana Legislative Assembly, state government, national party responsibilities and Parliament.
                  </p>

                  {/* Fast Facts Micro-Grid */}
                  <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs">
                    <div>
                      <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-500">Born</span>
                      <p className="mt-0.5 text-xs sm:text-sm font-bold text-ink">3 June 1967</p>
                      <span className="text-[11px] text-stone-500">Chandigarh, India</span>
                    </div>
                    <div>
                      <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-500">Office</span>
                      <p className="mt-0.5 text-xs sm:text-sm font-bold text-ink">Rajya Sabha MP</p>
                      <span className="text-[11px] text-stone-500">Since 5 July 2022</span>
                    </div>
                    <div>
                      <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-500">Assembly</span>
                      <p className="mt-0.5 text-xs sm:text-sm font-bold text-ink">5-Term MLA</p>
                      <span className="text-[11px] text-stone-500">Narwana &amp; Kaithal</span>
                    </div>
                    <div>
                      <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-500">Legal Practice</span>
                      <p className="mt-0.5 text-xs sm:text-sm font-bold text-ink">Advocate Since 1988</p>
                      <span className="text-[11px] text-stone-500">High Court &amp; New Delhi</span>
                    </div>
                  </div>

                  {/* Social Handles & CTAs */}
                  <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
                    <ProfileHeroButtons />

                    {/* Official Social Badges */}
                    <div className="flex items-center gap-2 pl-2">
                      <a
                        href="https://www.facebook.com/rssurjewala"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/[0.05] transition-all shadow-2xs hover:scale-110"
                        aria-label="Randeep Singh Surjewala Facebook"
                      >
                        <FacebookIcon className="h-4 w-4" />
                      </a>
                      <a
                        href="https://www.instagram.com/rssurjewala"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/[0.05] transition-all shadow-2xs hover:scale-110"
                        aria-label="Randeep Singh Surjewala Instagram"
                      >
                        <InstagramIcon className="h-4 w-4" />
                      </a>
                      <a
                        href="https://x.com/rssurjewala"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-700 hover:text-black hover:border-black/40 hover:bg-stone-100 transition-all shadow-2xs hover:scale-110"
                        aria-label="Randeep Singh Surjewala X (Twitter)"
                      >
                        <XIcon className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: High-Res Official Portrait */}
              <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
                <Reveal>
                  <div className="relative">
                    {/* Subtle Concentric Rings */}
                    <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-sky-200/40 via-accent/20 to-amber-200/30 blur-md pointer-events-none" />
                    <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-92 lg:w-92 rounded-full p-2 border-[3px] border-stone-200/90 bg-white shadow-xl">
                      <div className="relative h-full w-full overflow-hidden rounded-full bg-stone-100">
                        <Image
                          src="/politicians/randeep-singh-surjewala.webp"
                          alt="Randeep Singh Surjewala — Member of Parliament, Rajya Sabha"
                          width={400}
                          height={400}
                          priority
                          quality={90}
                          className="h-full w-full object-cover scale-[1.05]"
                        />
                      </div>
                    </div>

                    {/* Verified Flag Badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-stone-200/90 bg-white px-4 py-1.5 shadow-md flex items-center gap-2 whitespace-nowrap">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" />
                      <span className="text-xs font-bold text-ink tracking-tight">Verified Public Leader</span>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION 1: A Journey of Public Service
            ========================================================================== */}
        <section className="py-12 sm:py-18 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="max-w-3xl">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Legislative &amp; Grassroots Foundations
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  A Journey of Public Service
                </h2>
              </div>
            </Reveal>

            <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <Reveal>
                <div className="h-full rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-[#F8FAFC] p-6 sm:p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-4">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-ink">
                    Organisational &amp; Legislative Experience
                  </h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600 font-normal">
                    From his early involvement in the Youth Congress to serving as a Cabinet Minister in the Haryana Government and later entering the Rajya Sabha, Randeep Singh Surjewala&apos;s public life has been marked by extensive organisational and legislative experience.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="h-full rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-[#F8FAFC] p-6 sm:p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 mb-4">
                    <Scale className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-ink">
                    Legal Career &amp; Early Public Engagement
                  </h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600 font-normal">
                    He began his legal career in 1988 and has practised law in New Delhi and Chandigarh. Alongside his legal profession, he became actively involved in public and political affairs at a young age.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION 2: Political Journey (Milestones & Portfolios)
            ========================================================================== */}
        <section className="py-12 sm:py-20 bg-paper border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Milestones &amp; Responsibilities
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
                  Political Journey
                </h2>
                <p className="mt-3 text-sm sm:text-base text-stone-600">
                  Four decades of grassroots youth mobilization, legislative mandates, cabinet governance, and parliamentary service.
                </p>
              </div>
            </Reveal>

            {/* 4 Core Milestones Grid */}
            <div className="mt-10 sm:mt-14 space-y-6 sm:space-y-8">
              {/* 1. Youth Congress & Organisation */}
              <Reveal>
                <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200/80">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-white font-bold text-sm">
                        01
                      </span>
                      <div>
                        <h3 className="font-display text-lg sm:text-2xl font-bold text-ink">
                          Youth Congress &amp; Organisation
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-accent">National President (2000–2005) &amp; Party Leadership</p>
                      </div>
                    </div>
                    <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-bold bg-stone-100 text-stone-700">
                      National Leadership
                    </span>
                  </div>
                  <div className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-stone-600 space-y-2">
                    <p>
                      Surjewala became involved with the Indian National Congress at a young age and served in several organisational positions within the Youth Congress.
                    </p>
                    <p>
                      In 2000, he became <strong className="text-ink font-semibold">National President of the Indian Youth Congress</strong>, serving in the position until 2005. He subsequently took on senior organisational responsibilities within the Congress party.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* 2. Haryana Legislative Assembly & Ministerial Portfolios */}
              <Reveal>
                <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200/80">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-600 text-white font-bold text-sm">
                        02
                      </span>
                      <div>
                        <h3 className="font-display text-lg sm:text-2xl font-bold text-ink">
                          Haryana Legislative Assembly
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-sky-700">Narwana (1996, 2005) &amp; Kaithal (2009–2019)</p>
                      </div>
                    </div>
                    <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-800 border border-sky-200">
                      State Government Cabinet Minister
                    </span>
                  </div>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-600">
                    Surjewala was elected to the Haryana Legislative Assembly from Narwana in 1996 and again in 2005. He later represented Kaithal in the Haryana Assembly from 2009 to 2019.
                  </p>

                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
                    During his tenure in state politics, he served in several ministerial positions in the Haryana Government, handling portfolios including:
                  </p>

                  {/* Portfolios 8-Grid */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {ministerialPortfolios.map((p) => (
                      <div
                        key={p.name}
                        className="rounded-xl border border-stone-200 bg-[#F8FAFC] p-3.5 transition-colors hover:border-accent/40 hover:bg-white"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                          <h4 className="text-xs sm:text-sm font-bold text-ink">{p.name}</h4>
                        </div>
                        <p className="mt-1 text-[11px] text-stone-500 leading-snug">{p.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* 3. National Political Role */}
              <Reveal>
                <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200/80">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-white font-bold text-sm">
                        03
                      </span>
                      <div>
                        <h3 className="font-display text-lg sm:text-2xl font-bold text-ink">
                          National Political Role
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-stone-600">AICC General Secretary &amp; National Leadership</p>
                      </div>
                    </div>
                    <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-bold bg-stone-100 text-stone-700">
                      All India Congress Committee
                    </span>
                  </div>
                  <div className="mt-4 text-sm sm:text-base leading-relaxed text-stone-600 space-y-2">
                    <p>
                      At the national level, Surjewala has served as a spokesperson and senior organisational leader of the Indian National Congress.
                    </p>
                    <p>
                      He has also served as <strong className="text-ink font-semibold">AICC General Secretary with responsibility for Karnataka</strong>, taking charge of the role in September 2020.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* 4. Member of Parliament */}
              <Reveal>
                <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200/80">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-white font-bold text-sm">
                        04
                      </span>
                      <div>
                        <h3 className="font-display text-lg sm:text-2xl font-bold text-ink">
                          Member of Parliament
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-accent">Rajya Sabha (Assumed Office: 5 July 2022)</p>
                      </div>
                    </div>
                    <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-bold bg-accent/10 text-accent border border-accent/20">
                      Parliament of India
                    </span>
                  </div>
                  <div className="mt-4 text-sm sm:text-base leading-relaxed text-stone-600 space-y-2">
                    <p>
                      In 2022, Randeep Singh Surjewala was elected to the Rajya Sabha from Rajasthan. He assumed office as a Member of Parliament on <strong className="text-ink font-semibold">5 July 2022</strong>.
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
            SECTION 3: Education & Legal Career
            ========================================================================== */}
        <section className="py-12 sm:py-20 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="max-w-3xl">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Academic &amp; Jurisprudential Background
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  Education &amp; Legal Career
                </h2>
                <p className="mt-3 text-sm sm:text-base text-stone-600">
                  Surjewala holds distinguished credentials in commerce, jurisprudence, and political science, combining legal acumen with public service.
                </p>
              </div>
            </Reveal>

            {/* Education Cards */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {educationList.map((edu, idx) => (
                <Reveal key={edu.degree}>
                  <div className="h-full rounded-2xl border border-stone-200/90 bg-[#F8FAFC] p-5 sm:p-6 transition-all duration-200 hover:border-accent/40 hover:bg-white hover:shadow-card">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent mb-3.5">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-stone-500">Degree 0{idx + 1}</span>
                    <h3 className="mt-1 font-display text-base sm:text-lg font-bold text-ink">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm font-semibold text-accent">
                      {edu.institution}
                    </p>
                    <p className="mt-2 text-xs text-stone-500 leading-relaxed">
                      {edu.focus}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Legal Practice Note Card */}
            <Reveal>
              <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-stone-900 to-ink text-white shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white border border-white/15">
                    <Scale className="h-5 w-5 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm sm:text-base font-bold text-white">
                      Legal Practice (1988 – Present)
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-300">
                      He began practising law in 1988 and subsequently practised before the High Court of Punjab &amp; Haryana.
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 border border-sky-800/60 px-3 py-1 rounded-full shrink-0">
                  Advocate
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==========================================================================
            SECTION 4: Leadership Through Experience (5 Pillars)
            ========================================================================== */}
        <section className="py-12 sm:py-20 bg-paper border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Core Public Dimensions
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
                  Leadership Through Experience
                </h2>
                <p className="mt-3 text-sm sm:text-base text-stone-600">
                  Key dimensions that define Randeep Singh Surjewala&apos;s public journey.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {leadershipPillars.map((p) => {
                const IconComponent = p.icon;
                return (
                  <Reveal key={p.title}>
                    <div className="h-full rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-card">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8FAFC] border border-stone-200 text-accent mb-4">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-ink">
                        {p.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-stone-600 font-normal">
                        {p.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}

              {/* Summary Credo Card */}
              <Reveal>
                <div className="h-full rounded-2xl sm:rounded-3xl bg-accent p-6 text-white flex flex-col justify-between shadow-md">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-100">Public Service</span>
                    <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                      Continuous Dialogue &amp; Responsibility
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-sky-100 leading-relaxed font-normal">
                      A lifetime dedicated to grassroots mobilization, legislative excellence, and serving the people of Haryana and the nation.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between text-xs font-bold text-white">
                    <span>Indian National Congress</span>
                    <span>Rajya Sabha MP</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION 5: Connect With Randeep Singh Surjewala
            ========================================================================== */}
        <section className="py-12 sm:py-20 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Official Channels
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  Connect With Randeep Singh Surjewala
                </h2>
                <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
                  Follow updates on public activities, parliamentary work, political engagements and initiatives.
                </p>
              </div>
            </Reveal>

            {/* 3 Large Official Social Cards */}
            <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {/* Facebook */}
              <Reveal>
                <a
                  href="https://www.facebook.com/rssurjewala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-[#F8FAFC] p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1877F2]/60 hover:bg-white hover:shadow-card cursor-pointer"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1877F2]/10 text-[#1877F2] transition-transform duration-300 group-hover:scale-110">
                    <FacebookIcon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink group-hover:text-[#1877F2] transition-colors">
                    Facebook
                  </h3>
                  <p className="mt-1 text-xs text-stone-500 font-medium">@rssurjewala</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#1877F2] group-hover:underline">
                    <span>Follow on Facebook</span>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </a>
              </Reveal>

              {/* Instagram */}
              <Reveal>
                <a
                  href="https://www.instagram.com/rssurjewala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-[#F8FAFC] p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E4405F]/60 hover:bg-white hover:shadow-card cursor-pointer"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E4405F]/10 text-[#E4405F] transition-transform duration-300 group-hover:scale-110">
                    <InstagramIcon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink group-hover:text-[#E4405F] transition-colors">
                    Instagram
                  </h3>
                  <p className="mt-1 text-xs text-stone-500 font-medium">@rssurjewala</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#E4405F] group-hover:underline">
                    <span>Follow on Instagram</span>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </a>
              </Reveal>

              {/* X / Twitter */}
              <Reveal>
                <a
                  href="https://x.com/rssurjewala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-[#F8FAFC] p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-black/60 hover:bg-white hover:shadow-card cursor-pointer"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-200 text-black transition-transform duration-300 group-hover:scale-110">
                    <XIcon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink group-hover:text-black transition-colors">
                    X (Twitter)
                  </h3>
                  <p className="mt-1 text-xs text-stone-500 font-medium">@rssurjewala</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-ink group-hover:underline">
                    <span>Follow on X</span>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION 6: Quote & Public Declaration Banner
            ========================================================================== */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-stone-900 to-[#0B0F19] text-white">
          <div className="container-site">
            <Reveal>
              <div className="max-w-3xl mx-auto text-center">
                <Quote className="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-accent/60 mb-4 sm:mb-6" />

                <blockquote className="font-display text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug sm:leading-tight">
                  &ldquo;Public life is a continuous journey of responsibility, dialogue and service.&rdquo;
                </blockquote>

                <div className="mt-6 sm:mt-8 pt-6 border-t border-white/15 inline-block">
                  <p className="font-display text-lg sm:text-xl font-bold text-white">
                    Randeep Singh Surjewala
                  </p>
                  <p className="text-xs sm:text-sm text-sky-400 font-medium mt-0.5">
                    Member of Parliament, Rajya Sabha
                  </p>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Senior Leader, Indian National Congress
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-stone-400">
                  <span>Stay Connected</span>
                  <span>&bull;</span>
                  <span>Stay Informed</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==========================================================================
            SECTION 7: CreateVerse Political War Room & Digital Management Connection
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-t border-stone-200">
          <div className="container-site">
            <div className="rounded-3xl border border-stone-200/90 bg-[#F8FAFC] p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="max-w-2xl text-center lg:text-left">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Political Digital Infrastructure
                </span>
                <h3 className="mt-2 font-display text-xl sm:text-3xl font-bold text-ink">
                  High-Stakes Political War Rooms &amp; Campaign Architecture
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  CreateVerse engineers 24/7 digital war rooms, rapid narrative desks, and booth-level voter mobilization networks for election campaigns and senior leadership offices.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <Link
                  href="/services/political-management"
                  className="pressable inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-accent transition-colors"
                >
                  <span>Explore Political Operations</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/clients"
                  className="pressable inline-flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-stone-700 hover:bg-stone-50 transition-colors"
                >
                  <span>All Political Clients</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
