import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Reveal from "@/components/reveal";
import { InstagramIcon, FacebookIcon, XIcon } from "@/components/social-icons";

export const metadata: Metadata = {
  title: "Subhash Sudha (सुभाष सुधा) — Former Minister of State & MLA Thanesar | Haryana",
  description:
    "Official profile and legislative record of Subhash Sudha (सुभाष सुधा), former Minister of State (Independent Charge) in the Government of Haryana and two-time MLA representing Thanesar (Kurukshetra) for the Bharatiya Janata Party (BJP).",
  keywords: [
    "Subhash Sudha",
    "सुभाष सुधा",
    "Subhash Sudha MLA",
    "Subhash Sudha Thanesar",
    "MLA Thanesar Kurukshetra",
    "Subhash Sudha Minister Haryana",
    "Subhash Sudha BJP",
    "पूर्व राज्य मंत्री सुभाष सुधा",
    "थानेसर विधायक सुभाष सुधा",
    "Bharatiya Janata Party Haryana",
    "Haryana Vidhan Sabha",
    "Kurukshetra politician",
    "Subhash Sudha official profile",
    "Subhash Sudha political news",
    "CreateVerse political clients",
  ],
  alternates: {
    canonical: "https://www.createverse.in/clients/subhash-sudha",
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
    title: "Subhash Sudha (सुभाष सुधा) — Former Minister of State | Former MLA, Thanesar",
    description:
      "Official profile of Subhash Sudha, former Minister of State (Independent Charge) in the Government of Haryana and two-time MLA from Thanesar representing BJP.",
    url: "https://www.createverse.in/clients/subhash-sudha",
    siteName: "CreateVerse",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "https://www.createverse.in/politicians/subhash-sudha.webp",
        width: 500,
        height: 652,
        alt: "Subhash Sudha — Former Minister of State & MLA Thanesar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subhash Sudha — Former Minister of State | Former MLA, Thanesar",
    description:
      "Official profile of Subhash Sudha, former Minister of State in Haryana and two-time MLA from Thanesar (BJP).",
    images: ["https://www.createverse.in/politicians/subhash-sudha.webp"],
  },
};

export default function SubhashSudhaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.createverse.in/clients/subhash-sudha#person",
        name: "Subhash Sudha",
        alternateName: [
          "सुभाष सुधा",
          "Subhash Sudha MLA",
          "Subhash Sudha BJP",
          "MLA Thanesar Subhash Sudha",
          "पूर्व मंत्री सुभाष सुधा",
        ],
        jobTitle:
          "Former Minister of State (Independent Charge) & Former MLA Thanesar",
        description:
          "Subhash Sudha is an Indian politician, former Minister of State (Independent Charge) in the Government of Haryana, and two-time Member of the Haryana Legislative Assembly from Thanesar representing the Bharatiya Janata Party (BJP).",
        image: "https://www.createverse.in/politicians/subhash-sudha.webp",
        url: "https://www.createverse.in/clients/subhash-sudha",
        sameAs: [
          "https://www.facebook.com/SubhashSudhaOfficial/",
          "https://www.instagram.com/officialsubhashsudha/",
          "https://x.com/subashsudha3",
          "https://www.wikidata.org/wiki/Q69601639",
        ],
        affiliation: {
          "@type": "PoliticalParty",
          name: "Bharatiya Janata Party",
          alternateName: ["BJP", "भारतीय जनता पार्टी"],
        },
        memberOf: {
          "@type": "ParliamentaryParty",
          name: "Haryana Legislative Assembly",
        },
        knowsAbout: [
          "Legislative Governance",
          "Urban Local Bodies",
          "Constituency Development",
          "Haryana State Politics",
          "Kurukshetra Regional Welfare",
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": "https://www.createverse.in/clients/subhash-sudha#webpage",
        url: "https://www.createverse.in/clients/subhash-sudha",
        name: "Subhash Sudha (सुभाष सुधा) — Former Minister of State & MLA Thanesar | Official Profile",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.createverse.in/#website",
          name: "CreateVerse",
          url: "https://www.createverse.in",
        },
        about: {
          "@id": "https://www.createverse.in/clients/subhash-sudha#person",
        },
        mainEntity: {
          "@id": "https://www.createverse.in/clients/subhash-sudha#person",
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
        "@id": "https://www.createverse.in/clients/subhash-sudha#breadcrumb",
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
            name: "Subhash Sudha",
            item: "https://www.createverse.in/clients/subhash-sudha",
          },
        ],
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
            HERO SECTION - Subhash Sudha Profile Header
            ========================================================================== */}
        <section className="relative overflow-hidden bg-paper pt-[76px] sm:pt-[84px] border-b border-stone-200">
          <div className="dot-texture absolute inset-0 opacity-70" />
          <div className="hidden sm:block pointer-events-none absolute -left-28 top-16 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,237,213,0.7)_0%,transparent_70%)]" />
          <div className="hidden sm:block pointer-events-none absolute -right-28 top-12 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(254,243,199,0.6)_0%,transparent_70%)]" />

          <div className="container-site relative pt-6 sm:pt-10 pb-16 sm:pb-24">
            {/* Breadcrumb */}
            <Reveal>
              <nav className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider mb-6 sm:mb-8">
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
                <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
                <span className="text-ink font-bold">Subhash Sudha</span>
              </nav>
            </Reveal>

            {/* Main Header Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Details */}
              <div className="lg:col-span-8 order-2 lg:order-1">
                <Reveal>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#EA580C] px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-xs mb-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    Bharatiya Janata Party
                  </div>

                  <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-tight">
                    Subhash Sudha
                  </h1>

                  <p className="mt-2.5 sm:mt-3 font-display text-base sm:text-xl font-semibold text-accent leading-snug">
                    Former Minister of State | Former MLA, Thanesar
                  </p>

                  <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-ink/85 font-normal">
                    A distinguished public representative and prominent political leader in Haryana, Subhash Sudha has served as Minister of State (Independent Charge) in the Government of Haryana and as a two-time Member of the Haryana Legislative Assembly from the Thanesar (Kurukshetra) constituency. Representing the Bharatiya Janata Party (BJP), he has dedicated decades to grassroots public service, urban governance, regional welfare, and constituency development across Kurukshetra and Haryana.
                  </p>

                  {/* Clean Official Social Links */}
                  <div className="mt-6 flex items-center gap-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 mr-1">
                      Official:
                    </span>
                    <a
                      href="https://www.facebook.com/SubhashSudhaOfficial/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/[0.05] transition-all shadow-2xs hover:scale-110"
                      aria-label="Subhash Sudha Facebook"
                    >
                      <FacebookIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/officialsubhashsudha/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/[0.05] transition-all shadow-2xs hover:scale-110"
                      aria-label="Subhash Sudha Instagram"
                    >
                      <InstagramIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="https://x.com/subashsudha3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-700 hover:text-black hover:border-black/40 hover:bg-stone-100 transition-all shadow-2xs hover:scale-110"
                      aria-label="Subhash Sudha X"
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
                          src="/politicians/subhash-sudha.webp"
                          alt="Subhash Sudha — Former Minister of State & MLA Thanesar"
                          fill
                          sizes="(max-width: 768px) 240px, 336px"
                          priority
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
