import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Quote,
  ChevronRight,
  Info,
  HeartHandshake,
  Users,
  Wheat,
  Activity,
} from "lucide-react";
import Reveal from "@/components/reveal";
import { InstagramIcon, FacebookIcon, XIcon } from "@/components/social-icons";
import ProfileBottomCTA from "@/components/profile-bottom-cta";

export const metadata: Metadata = {
  title: "Rajiv Mamuram Gonder (राजीव मामूराम गोंदर) — Public Representative | Nilokheri, Karnal",
  description:
    "Official profile and social service milestones of Rajiv Mamuram Gonder (राजीव गोंदर), Public Representative, Farmer & Social Worker, Nilokheri Assembly constituency (INC).",
  keywords: [
    "Rajiv Mamuram Gonder",
    "Rajiv Gonder",
    "Rajiv Gondar",
    "राजीव मामूराम गोंदर",
    "राजीव गोंदर",
    "Nilokheri Assembly Constituency",
    "Mamuram Gonder son",
    "Mamuram Gonder MLA",
    "Gonder Village Nissing Karnal",
    "Mamuram Gonder Charitable Trust",
    "Indian National Congress Nilokheri",
    "Karnal Congress Leader",
    "Nilokheri Vidhan Sabha",
    "Rajiv Gonder news",
    "Rajiv Mamuram Gonder official profile",
    "राजीव गोंदर नीलोखेड़ी",
    "CreateVerse political clients",
  ],
  alternates: {
    canonical: "https://createverse.in/clients/rajiv-mamuram-gonder",
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
    title: "Rajiv Mamuram Gonder (राजीव मामूराम गोंदर) — Nilokheri Assembly Constituency",
    description:
      "Public representative, farmer, and social worker associated with the Indian National Congress in Nilokheri, Karnal.",
    url: "https://createverse.in/clients/rajiv-mamuram-gonder",
    siteName: "CreateVerse",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "https://createverse.in/politicians/rajiv-mamuram-gonder.webp",
        width: 800,
        height: 800,
        alt: "Rajiv Mamuram Gonder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajiv Mamuram Gonder — Public Representative | Nilokheri, Karnal",
    description:
      "Public representative, farmer, and social worker associated with the Indian National Congress in Nilokheri, Karnal.",
    images: ["https://createverse.in/politicians/rajiv-mamuram-gonder.webp"],
  },
};

const politicalMilestones = [
  "Associated with Student & Youth Organization Activities Since 2005",
  "Served as Youth District Secretary in 2008",
  "Appointed Youth Organization Secretary in 2011",
  "Elevated to Youth Pradesh General Secretary in 2014",
  "Active Grassroots Presence in Nilokheri Assembly Constituency Since 2008",
  "Formally Joined Indian National Congress on 10 May 2024 with Massive Public Support",
  "Active Campaign Leadership in the 18th Lok Sabha Elections 2024",
  "Son of Former Nilokheri MLA Shri Mamuram Gonder (2009–2014)",
];

const socialInitiatives = [
  "Comprehensive COVID-19 Relief: Mask & sanitizer distribution, village sanitization, and ration kits",
  "Mamuram Gonder Charitable Trust: Free eye check-up and surgery camps across rural belts",
  "Regular Voluntary Blood Donation Drives mobilizing youth volunteers",
  "Educational Support & Free Books Distribution for economically weaker students",
  "Rural Health Camps offering diagnostic check-ups and free medicines in Nilokheri villages",
  "Active cooperation with regional social, educational, and religious institutions",
];

const leadershipPillars = [
  {
    icon: Wheat,
    title: "Agrarian Heritage",
    desc: "A genuine farming background rooted in Village Gonder, connecting directly with rural issues, irrigation needs, and agricultural welfare.",
  },
  {
    icon: Users,
    title: "Youth & Political Organisation",
    desc: "Over 19 years of organizational experience from student unions to state youth leadership and frontline election management.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Social Service",
    desc: "Direct humanitarian relief through the Mamuram Gonder Charitable Trust, community medical camps, and educational assistance.",
  },
];

const atAGlance = [
  { label: "Name", value: "Rajiv Mamuram Gonder (राजीव मामूराम गोंदर)" },
  { label: "Public Role", value: "Public Representative | Farmer | Social Worker" },
  { label: "Constituency", value: "Nilokheri Assembly Constituency" },
  { label: "Native Place", value: "Village Gonder, Tehsil Nissing, Karnal" },
  { label: "Party", value: "Indian National Congress (Joined 10 May 2024)" },
  { label: "Family Legacy", value: "Son of Shri Mamuram Gonder (Ex-MLA Nilokheri 2009–2014)" },
  { label: "Philanthropy", value: "Mamuram Gonder Charitable Trust" },
  { label: "PIN Code", value: "132024 (Karnal, Haryana)" },
];

const faqs = [
  {
    question: "Who is Rajiv Mamuram Gonder (राजीव मामूराम गोंदर)?",
    answer:
      "Rajiv Mamuram Gonder is a public representative, farmer, and social worker associated with the Indian National Congress (INC) from the Nilokheri Assembly constituency in District Karnal, Haryana. He is the son of former Nilokheri MLA Shri Mamuram Gonder.",
  },
  {
    question: "What is Rajiv Mamuram Gonder's political and organizational journey?",
    answer:
      "Active in public life since 2005, Rajiv Mamuram Gonder served as Youth District Secretary (2008), Youth Organization Secretary (2011), and Youth Pradesh General Secretary (2014). On 10 May 2024, he and his supporters formally associated with the Indian National Congress, actively campaigning across the constituency in the 2024 elections.",
  },
  {
    question: "What social and community services has Rajiv Mamuram Gonder undertaken?",
    answer:
      "Through the Mamuram Gonder Charitable Trust, he actively organizes blood donation camps, free eye camps, health check-ups, and educational assistance for underprivileged students. During the COVID-19 pandemic, his team conducted extensive sanitization drives and distributed food and medicine across Nilokheri villages.",
  },
  {
    question: "Which village and area does Rajiv Mamuram Gonder belong to?",
    answer:
      "He belongs to Village Gonder, Tehsil Nissing, District Karnal, Haryana (PIN: 132024), one of the most prominent villages in the Nilokheri Assembly constituency.",
  },
  {
    question: "How can I follow Rajiv Mamuram Gonder online?",
    answer:
      "Official updates, constituency visits, and public announcements are available on his verified social handles: X (@RajivMGonder), Facebook (facebook.com/RajivGondarOfficial), and Instagram (@rajivgonderofficial).",
  },
];

export default function RajivMamuramGonderPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://createverse.in/clients/rajiv-mamuram-gonder#person",
        name: "Rajiv Mamuram Gonder",
        alternateName: [
          "राजीव मामूराम गोंदर",
          "राजीव गोंदर",
          "Rajiv Gonder",
          "Rajiv Gondar",
          "Rajiv Mamuram Gondar",
          "Nilokheri Congress Leader",
        ],
        jobTitle: "Public Representative, Farmer & Social Worker | Nilokheri",
        description:
          "Rajiv Mamuram Gonder is a public representative, farmer, and social worker associated with the Indian National Congress from the Nilokheri Assembly constituency in Karnal, Haryana.",
        image: "https://createverse.in/politicians/rajiv-mamuram-gonder.webp",
        url: "https://createverse.in/clients/rajiv-mamuram-gonder",
        sameAs: [
          "https://www.facebook.com/RajivGondarOfficial",
          "https://www.instagram.com/rajivgonderofficial",
          "https://x.com/RajivMGonder",
        ],
        affiliation: {
          "@type": "PoliticalParty",
          name: "Indian National Congress",
          alternateName: ["INC", "Congress", "भारतीय राष्ट्रीय कांग्रेस"],
        },
        knowsAbout: [
          "Nilokheri Assembly Constituency Development",
          "Agrarian Welfare",
          "Youth Organization",
          "Public Health & Charitable Healthcare",
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": "https://createverse.in/clients/rajiv-mamuram-gonder#webpage",
        url: "https://createverse.in/clients/rajiv-mamuram-gonder",
        name: "Rajiv Mamuram Gonder (राजीव मामूराम गोंदर) — Official Profile | CreateVerse",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://createverse.in/#website",
          name: "CreateVerse",
          url: "https://createverse.in",
        },
        about: {
          "@id": "https://createverse.in/clients/rajiv-mamuram-gonder#person",
        },
        mainEntity: {
          "@id": "https://createverse.in/clients/rajiv-mamuram-gonder#person",
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
        "@id": "https://createverse.in/clients/rajiv-mamuram-gonder#breadcrumb",
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
            name: "Rajiv Mamuram Gonder",
            item: "https://createverse.in/clients/rajiv-mamuram-gonder",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://createverse.in/clients/rajiv-mamuram-gonder#faq",
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
                <span className="text-ink font-bold">Rajiv Mamuram Gonder</span>
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
                    Rajiv Mamuram Gonder
                  </h1>

                  <p className="mt-2.5 sm:mt-3 font-display text-base sm:text-xl font-semibold text-accent leading-snug">
                    Public Representative | Farmer | Social Worker | Nilokheri Assembly Constituency
                  </p>

                  <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-ink/85 font-normal">
                    Rajiv Mamuram Gonder (राजीव मामूराम गोंदर) comes from a family with a distinguished heritage of public service. His father, Shri Mamuram Gonder, served as the elected Member of the Legislative Assembly (MLA) for Nilokheri from 2009 to 2014. Continuing this journey of community welfare, Rajiv Gonder combines farming roots with active political leadership, social empowerment, and grassroots advocacy in Karnal district.
                  </p>

                  {/* Clean Official Social Links */}
                  <div className="mt-6 flex items-center gap-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 mr-1">
                      Official:
                    </span>
                    <a
                      href="https://www.facebook.com/RajivGondarOfficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/[0.05] transition-all shadow-2xs hover:scale-110"
                      aria-label="Rajiv Mamuram Gonder Facebook"
                    >
                      <FacebookIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/rajivgonderofficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/[0.05] transition-all shadow-2xs hover:scale-110"
                      aria-label="Rajiv Mamuram Gonder Instagram"
                    >
                      <InstagramIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="https://x.com/RajivMGonder"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-700 hover:text-black hover:border-black/40 hover:bg-stone-100 transition-all shadow-2xs hover:scale-110"
                      aria-label="Rajiv Mamuram Gonder X"
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
                          src="/politicians/rajiv-mamuram-gonder.webp"
                          alt="Rajiv Mamuram Gonder"
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
            SECTION: About Rajiv Mamuram Gonder
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="max-w-3xl">
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  Roots in Nilokheri &amp; A Heritage of Public Service
                </h2>
                <div className="mt-4 text-sm sm:text-base leading-relaxed text-stone-700 space-y-3 font-normal">
                  <p>
                    Rajiv Mamuram Gonder belongs to Village Gonder in Tehsil Nissing, one of the most prominent rural settlements in the Nilokheri Assembly constituency of District Karnal, Haryana.
                  </p>
                  <p>
                    Raised in an environment where community service was paramount, his political journey commenced with student and youth leadership in 2005. Over nearly two decades, he has held district and state-level responsibilities, earned widespread respect across communities, and consistently championed the interests of farmers, labourers, and rural families.
                  </p>
                  <p>
                    On 10 May 2024, Rajiv Mamuram Gonder and his dedicated cadres formally aligned with the Indian National Congress, contributing significantly to party campaigns in the 18th Lok Sabha elections.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==========================================================================
            SECTION: Political Journey & Milestones
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
                    Journey from Student Politics to Mainstream Leadership
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {politicalMilestones.map((milestone) => (
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
            SECTION: Social Initiatives & Community Service
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="max-w-3xl mb-8">
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  Social &amp; Community Initiatives
                </h2>
                <p className="mt-2 text-sm sm:text-base text-stone-600">
                  Relief drives, medical outreach, and educational empowerment under the Mamuram Gonder Charitable Trust.
                </p>
              </div>
            </Reveal>

            <div className="max-w-4xl">
              <Reveal>
                <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-[#F8FAFC] p-6 sm:p-8 shadow-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {socialInitiatives.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 rounded-xl border border-stone-200 bg-white p-3.5 text-xs sm:text-sm font-semibold text-ink"
                      >
                        <Activity className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
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
        <section className="py-12 sm:py-16 bg-paper border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Pillars of Public Engagement
              </h2>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {leadershipPillars.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Reveal key={item.title}>
                    <div className="h-full rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 shadow-xs flex flex-col justify-between">
                      <div>
                        <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-stone-600 font-normal">
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

        {/* ==========================================================================
            SECTION: At A Glance
            ========================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Rajiv Mamuram Gonder — At a Glance
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-stone-600">
                Key leadership background and constituency overview.
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
                Connect With Rajiv Mamuram Gonder
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-stone-600">
                Follow updates on constituency visits, public hearings, and community programs.
              </p>
            </Reveal>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <Reveal>
                <a
                  href="https://www.facebook.com/RajivGondarOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-stone-200/90 bg-white p-4 text-ink hover:border-[#1877F2]/40 hover:text-[#1877F2] transition-colors shadow-2xs"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1877F2]/10 text-[#1877F2]">
                    <FacebookIcon className="h-5 w-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold">Facebook</p>
                    <span className="text-[11px] text-stone-500 truncate block">facebook.com/RajivGondarOfficial</span>
                  </div>
                </a>
              </Reveal>

              <Reveal>
                <a
                  href="https://www.instagram.com/rajivgonderofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-stone-200/90 bg-white p-4 text-ink hover:border-[#E4405F]/40 hover:text-[#E4405F] transition-colors shadow-2xs"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E4405F]/10 text-[#E4405F]">
                    <InstagramIcon className="h-5 w-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold">Instagram</p>
                    <span className="text-[11px] text-stone-500 truncate block">@rajivgonderofficial</span>
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
                &ldquo;Public service is about connecting with people at the grassroots, standing by farmers, and uplifting every family in Nilokheri.&rdquo;
              </blockquote>

              <div className="mt-6">
                <p className="font-display text-base sm:text-lg font-bold text-white">
                  Rajiv Mamuram Gonder
                </p>
                <p className="text-xs sm:text-sm text-sky-400 font-medium">
                  Public Representative | Farmer | Social Worker
                </p>
                <p className="text-xs text-stone-400 mt-0.5">
                  Nilokheri Assembly Constituency, District Karnal, Haryana
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
                  Everything You Need to Know About Rajiv Mamuram Gonder
                </h2>
                <p className="mt-2 text-sm sm:text-base text-stone-600">
                  Comprehensive information covering political journey, Nilokheri representation, and social initiatives.
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
                  <strong className="text-stone-700 font-semibold">Note:</strong> The biographical details above are based on profile records and publicly reported information. For a public-facing political platform, titles, affiliations, and ongoing responsibilities are periodically maintained.
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
