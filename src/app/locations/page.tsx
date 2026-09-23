import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Building2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { locations } from "@/lib/locations";
import { site } from "@/lib/site";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";
import FinalCTA from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Locations & Regional Hubs | Best Digital Marketing Agency in Haryana — CreateVerse",
  description:
    "Explore CreateVerse's regional growth hubs across Haryana including Karnal (HQ), Panipat, Kurukshetra, Kaithal, Jind, and Yamunanagar. High-ROAS performance marketing and lead generation.",
  keywords: [
    "best digital marketing agency in haryana",
    "digital marketing agency karnal",
    "digital marketing agency panipat",
    "digital marketing agency kurukshetra",
    "digital marketing agency kaithal",
    "digital marketing agency jind",
    "digital marketing agency yamunanagar",
    "performance marketing agency india",
  ],
  alternates: {
    canonical: "https://www.createverse.in/locations",
  },
  openGraph: {
    title: "Regional Hubs — CreateVerse Digital Marketing",
    description:
      "Explore CreateVerse's regional presence across Haryana. We engineer verified lead generation and high-ROAS marketing for ambitious enterprises.",
    url: "https://www.createverse.in/locations",
    siteName: "CreateVerse",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "CreateVerse Locations",
      },
    ],
  },
};

export default function LocationsHubPage() {
  return (
    <article className="min-h-screen bg-paper text-ink selection:bg-accent selection:text-white pt-24 sm:pt-28 lg:pt-32">
      {/* Breadcrumb Navigation */}
      <div className="container-site pt-2 pb-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-stone-500">
          <Link href="/" className="hover:text-ink transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-accent font-semibold">Locations</span>
        </nav>
      </div>

      {/* Hero Header */}
      <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-stone-200/80">
        <div className="grid-texture-light absolute inset-0 opacity-40 pointer-events-none" />
        <div className="container-site relative">
          <Reveal>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-accent border border-accent/20 mb-4">
                <MapPin className="h-3.5 w-3.5" />
                <span>Regional Footprint</span>
              </span>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.15]">
                Best Digital Marketing Agency Across Haryana & North India
              </h1>

              <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-stone-600 font-normal">
                Headquartered in Mughal Canal, Karnal, CreateVerse operates dedicated regional growth desks across Haryana&apos;s primary commercial and industrial corridors. We combine tier-1 national advertising intelligence with hyper-local market depth.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-xs font-semibold text-stone-700">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-accent shrink-0" />
                  <span>HQ: Mughal Canal, Karnal</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Serving All-India & Global Diaspora</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                  <span>Weekly In-Person Strategy Reviews</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* City Hubs Grid */}
      <section className="py-14 sm:py-24 bg-paper-subtle border-b border-stone-200/80">
        <div className="container-site">
          <Reveal>
            <div className="max-w-2xl mb-10 sm:mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Regional Hubs
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Select your city to explore dedicated growth solutions
              </h2>
              <p className="mt-2 text-sm text-stone-600 font-normal">
                Each location page details our specialized industry playbooks, local commercial hubs, client case studies, and exact-match FAQs.
              </p>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" delayChildren={0.08}>
            {locations.map((loc) => (
              <StaggerItem key={loc.slug} className="h-full">
                <Link
                  href={`/locations/${loc.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent border border-accent/20">
                        <MapPin className="h-3 w-3" />
                        <span>{loc.nameHindi}</span>
                      </span>
                      <span className="text-xs font-semibold text-stone-500">
                        {loc.distanceFromHq}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-ink group-hover:text-accent transition-colors">
                      Best Digital Marketing Agency in {loc.name}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-stone-600 line-clamp-3 font-normal">
                      {loc.subheadline}
                    </p>

                    <div className="mt-5 pt-4 border-t border-stone-100 flex flex-wrap gap-1.5">
                      {loc.commercialHubs.slice(0, 3).map((hub) => (
                        <span
                          key={hub}
                          className="rounded-md bg-stone-100 px-2 py-0.5 text-[11px] text-stone-600 font-medium"
                        >
                          {hub}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-accent">
                    <span>Explore {loc.name} Hub</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Final Strategy CTA */}
      <FinalCTA />
    </article>
  );
}
