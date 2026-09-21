import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, Mail, CheckCircle2, ArrowRight, Building2 } from "lucide-react";
import { locations, getLocation, getAllLocationSlugs } from "@/lib/locations";
import { getLocationJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import Faq from "@/components/faq";
import LocationHeroButtons from "@/components/location-hero-buttons";
import LeadForm from "@/components/lead-form";

export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const location = getLocation(city);
  if (!location) return {};

  const pageUrl = `https://createverse.in/locations/${location.slug}`;

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: location.localKeywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: pageUrl,
      siteName: "CreateVerse",
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: `Best Digital Marketing Agency in ${location.name} — CreateVerse`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDescription,
      images: ["/logo.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocationCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const location = getLocation(city);
  if (!location) notFound();

  const jsonLd = getLocationJsonLd(location);
  const otherLocations = locations.filter((l) => l.slug !== location.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-paper text-ink selection:bg-accent selection:text-white pt-24 sm:pt-28 lg:pt-32 pb-16">
        {/* Breadcrumb Navigation */}
        <div className="container-site pt-2 pb-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-stone-500">
            <Link href="/" className="hover:text-ink transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-ink transition-colors">
              Locations
            </Link>
            <span>/</span>
            <span className="text-accent font-semibold">{location.name}</span>
          </nav>
        </div>

        {/* Primary SEO Hero Section */}
        <section className="container-site pt-4 pb-10 sm:pb-14 border-b border-stone-200">
          <div className="max-w-4xl">
            {/* Geo Tag Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent border border-accent/20">
                <MapPin className="h-3.5 w-3.5" />
                <span>{location.name}, Haryana</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700 border border-stone-200">
                <Building2 className="h-3.5 w-3.5 text-stone-500" />
                <span>{location.officeStatus}</span>
              </span>
            </div>

            {/* Massive Exact-Match H1 Tag for Google Search Algorithm */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-tight">
              {location.headline}
            </h1>

            {/* Primary Subtitle H2 */}
            <h2 className="mt-3 font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-stone-700">
              Top Digital Marketing Company & Performance Growth Partner in {location.name}
            </h2>

            {/* Keyword-Rich Core Description */}
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-stone-600 font-normal">
              {location.subheadline}
            </p>

            {/* Action Buttons */}
            <LocationHeroButtons locationName={location.name} />

            {/* Quick Contact Bar */}
            <div className="mt-6 pt-5 border-t border-stone-200 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-stone-600 font-medium">
              <a href={`tel:${site.phoneRaw}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-4 w-4 text-accent" />
                <span>Call Desk: {site.phone}</span>
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="h-4 w-4 text-accent" />
                <span>Email: {site.email}</span>
              </a>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Office: {site.address}</span>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Section 1: Core Digital Marketing Services */}
        <section className="container-site py-12 sm:py-16 border-b border-stone-200">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-ink tracking-tight">
              Complete Digital Marketing Services in {location.name}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 font-normal">
              We provide full-funnel digital marketing solutions designed to generate high-intent customer leads, maximize ROI on ad spend, and rank your business at the top of Google Search.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {location.coreServices.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs hover:border-stone-300 transition-all"
                >
                  <span className="inline-flex rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-bold text-accent mb-2">
                    {service.tag}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-ink">
                    {service.title} in {location.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-stone-600 font-normal">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Section 2: Why Choose Us */}
        <section className="container-site py-12 sm:py-16 border-b border-stone-200">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-ink tracking-tight">
              Why Businesses in {location.name} Choose CreateVerse
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 font-normal">
              Unlike generic agencies that charge retainers for empty social media posts, CreateVerse is engineered strictly around verified business inquiries and revenue outcomes.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {location.whyChooseUs.map((reason) => (
                <div key={reason.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
                  <h3 className="font-display text-base sm:text-lg font-bold text-ink flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span>{reason.title}</span>
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-stone-600 font-normal">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Section 3: Commercial Hubs & Geo Coverage */}
        <section className="container-site py-12 sm:py-16 border-b border-stone-200">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight">
              Local SEO & Commercial Areas Covered in {location.name}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 font-normal">
              Our hyper-local Google Ads, Facebook & Instagram campaigns, and Local SEO map signals cover all primary commercial hubs and sectors across {location.name}:
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {location.commercialHubs.map((hub) => (
                <span
                  key={hub}
                  className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 border border-stone-200 shadow-2xs"
                >
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  <span>{hub}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Section 4: Frequently Asked Questions (FAQPage Schema) */}
        <section className="container-site py-12 sm:py-16 border-b border-stone-200">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-ink tracking-tight mb-2">
              Frequently Asked Questions (FAQ) — Digital Marketing in {location.name}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-normal mb-8">
              Common questions answered about digital marketing services, costs, timeframes, and Google ranking in {location.name}.
            </p>

            <Faq items={location.faqs} />
          </div>
        </section>

        {/* SEO Section 5: Other Regional Hubs */}
        <section className="container-site py-10 border-b border-stone-200">
          <div className="max-w-4xl">
            <h3 className="font-display text-lg font-bold text-ink mb-3">
              Other Regional Digital Marketing Hubs in Haryana:
            </h3>
            <div className="flex flex-wrap gap-2">
              {otherLocations.map((other) => (
                <Link
                  key={other.slug}
                  href={`/locations/${other.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-stone-700 hover:border-accent hover:text-accent transition-all shadow-2xs"
                >
                  <MapPin className="h-3 w-3 text-accent" />
                  <span>Digital Marketing Agency in {other.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Section 6: Direct Strategy Consultation & Lead Form */}
        <section className="container-site pt-12 sm:pt-16">
          <div className="max-w-4xl grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-ink tracking-tight">
                Schedule a Consultation with {location.name}&apos;s Best Digital Marketing Agency
              </h2>
              <p className="mt-3 text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
                Ready to scale your leads, revenue, and Google rankings in {location.name}? Contact our senior strategy desk today.
              </p>

              <div className="mt-6 space-y-3 text-xs sm:text-sm text-stone-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                  <span>30-minute growth strategy consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                  <span>Complete competitor ad spend & funnel audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                  <span>Direct response within 2 hours</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-stone-100 border border-stone-200 text-xs text-stone-700 space-y-1">
                <p><strong>Headquarters:</strong> {site.address}</p>
                <p><strong>Phone:</strong> {site.phone}</p>
                <p><strong>Email:</strong> {site.email}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-card">
              <h3 className="font-display text-lg font-bold text-ink mb-1">
                Enquire for {location.name} Marketing
              </h3>
              <p className="text-xs text-stone-500 mb-5 font-normal">
                Fill out the form below to receive a custom proposal and growth roadmap.
              </p>
              <LeadForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
