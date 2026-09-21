import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Target,
  Search,
  Laptop,
  Vote,
  ShieldCheck,
  Building2,
  PhoneCall,
  Clock,
} from "lucide-react";
import { locations, getLocation, getAllLocationSlugs } from "@/lib/locations";
import { getLocationJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";
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
          alt: `CreateVerse — Best Digital Marketing Agency in ${location.name}`,
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

  const coreServices = [
    {
      icon: Target,
      title: "Performance Meta & Instagram Ads",
      desc: "Data-driven paid social campaigns engineered for cost-per-lead caps, creative fatigue rotation, and verified buyer inquiries.",
      href: "/services/paid-social",
    },
    {
      icon: Search,
      title: "High-Intent Google Ads & Search PPC",
      desc: "Capture active buyers searching for your exact products or services with high-ROAS Google Search, Display, and YouTube ad architectures.",
      href: "/services/google-ads",
    },
    {
      icon: TrendingUp,
      title: "High-Intent Lead Generation Systems",
      desc: "Full-funnel lead qualification architectures built specifically for real estate developers, export houses, and immigration agencies.",
      href: "/services/lead-generation",
    },
    {
      icon: MapPin,
      title: "Local SEO & Google Maps Dominance",
      desc: "Dominate local search and the Google Map 3-Pack across your city, driving regular high-trust inbound calls and walk-in footfall.",
      href: "/services/content-marketing",
    },
    {
      icon: Laptop,
      title: "Conversion-Led Next.js Web Development",
      desc: "Sub-second load times, mobile-first design, and seamless CRM integrations that convert paid visitors into qualified inquiries.",
      href: "/services/web-development",
    },
    {
      icon: Vote,
      title: "24/7 Political Digital War Rooms",
      desc: "Booth-level micro-targeting, voter outreach, and narrative engineering trusted by prominent Members of Parliament and MLAs.",
      href: "/services/political-management",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen bg-paper text-ink selection:bg-accent selection:text-white pt-24 sm:pt-28 lg:pt-32">
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

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-4 pb-12 sm:pt-8 sm:pb-20 border-b border-stone-200/80">
          <div className="grid-texture-light absolute inset-0 opacity-40 pointer-events-none" />
          <div className="container-site relative">
            <Reveal>
              <div className="max-w-4xl">
                {/* Location Badges */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-accent border border-accent/20">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>
                      {location.name} ({location.nameHindi})
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-700 border border-stone-200">
                    <Building2 className="h-3.5 w-3.5 text-stone-500" />
                    <span>{location.officeStatus}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 border border-emerald-200">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                    <span>All-India Growth Architecture</span>
                  </span>
                </div>

                {/* Primary H1 */}
                <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.12]">
                  {location.headline}
                  <span className="block mt-2 text-xl sm:text-2xl lg:text-3xl text-stone-500 font-medium">
                    #1 Growth & Performance Marketing Partner in {location.name}
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl leading-relaxed text-stone-600 font-normal max-w-3xl">
                  {location.subheadline}
                </p>

                {/* Direct Action Hero Buttons */}
                <LocationHeroButtons locationName={location.name} />

                {/* Quick Trust Highlights */}
                <div className="mt-8 pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-stone-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Verified Lead Quality</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>High-ROAS Ad Media</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Face-to-Face Reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Zero Vanity Metrics</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="bg-[#090D15] text-white py-10 sm:py-14 border-b border-white/[0.08]">
          <div className="container-site">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {location.stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-accent pl-4 sm:pl-6">
                  <p className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-stone-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Industry Specialization */}
        <section className="py-14 sm:py-24 bg-paper border-b border-stone-200/80">
          <div className="container-site">
            <Reveal>
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Tailored Industry Solutions
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  How we accelerate growth for {location.name}&apos;s key sectors
                </h2>
                <p className="mt-3 text-sm sm:text-base text-stone-600 font-normal">
                  We don&apos;t apply cookie-cutter agency templates. Each growth engine is engineered specifically around the buying cycles, distribution dynamics, and local business environment of {location.name}.
                </p>
              </div>
            </Reveal>

            <Stagger className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7" delayChildren={0.08}>
              {location.targetIndustries.map((ind) => (
                <StaggerItem key={ind.title} className="h-full">
                  <div className="h-full flex flex-col justify-between rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift">
                    <div>
                      <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold text-accent border border-accent/20">
                        {ind.tag}
                      </span>
                      <h3 className="mt-4 font-display text-lg sm:text-xl font-bold text-ink">
                        {ind.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-stone-600 font-normal">
                        {ind.description}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-accent">
                      <span>Engineered for Revenue</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Core Growth Practices */}
        <section className="py-14 sm:py-24 bg-paper-subtle border-b border-stone-200/80">
          <div className="container-site">
            <Reveal>
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Full-Stack Execution
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  Core digital marketing capabilities for {location.name} enterprises
                </h2>
                <p className="mt-3 text-sm sm:text-base text-stone-600 font-normal">
                  Everything required to establish market dominance in {location.name} and across India under one unified strategic roof.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
              {coreServices.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7 shadow-xs hover:border-stone-300 transition-all"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base sm:text-lg font-bold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-stone-600 font-normal">
                    {service.desc}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-accent hover:text-accent-dim transition-colors"
                  >
                    <span>Explore practice</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commercial Hubs & Regional Proximity */}
        <section className="py-12 sm:py-18 bg-white border-b border-stone-200/80">
          <div className="container-site">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Local Proximity & Coverage
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                  Active commercial coverage across {location.name}
                </h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600 font-normal">
                  Our growth campaigns, geo-targeted Google Ads, and local SEO signals actively cover every commercial corridor, industrial area, and retail center across {location.name}.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {location.commercialHubs.map((hub) => (
                    <span
                      key={hub}
                      className="inline-flex items-center gap-1 rounded-full bg-paper px-3 py-1 text-xs font-medium text-stone-700 border border-stone-200"
                    >
                      <MapPin className="h-3 w-3 text-accent" />
                      <span>{hub}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 bg-paper-subtle rounded-2xl p-6 sm:p-8 border border-stone-200">
                <h3 className="font-display text-lg font-bold text-ink flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-accent" />
                  <span>Serving {location.name} from Central Haryana Desk</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  CreateVerse operates its central executive strategy desk in Mughal Canal, Karnal, providing direct, uncompromised support to businesses across {location.name}.
                </p>

                <div className="mt-5 space-y-3 text-xs sm:text-sm font-medium text-stone-700 border-t border-stone-200/80 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">Physical Office:</span>
                    <span className="font-semibold text-ink">{site.address}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">Transit Distance:</span>
                    <span className="font-semibold text-accent">{location.distanceFromHq}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">Direct Desk Phone:</span>
                    <a href={`tel:${site.phoneRaw}`} className="font-semibold text-ink hover:text-accent">
                      {site.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">In-Person Consultation:</span>
                    <span className="font-semibold text-emerald-700">Available by Appointment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-14 sm:py-24 bg-paper border-b border-stone-200/80">
          <div className="container-site">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Why CreateVerse
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  Why {location.name} businesses partner with CreateVerse
                </h2>
                <p className="mt-3 text-sm sm:text-base text-stone-600 font-normal">
                  We are deliberately not a traditional social media agency that posts pretty graphics without commercial accountability.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {location.whyChooseUs.map((reason) => (
                <div
                  key={reason.title}
                  className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs"
                >
                  <h3 className="font-display text-base sm:text-lg font-bold text-ink flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>{reason.title}</span>
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-stone-600 font-normal pl-7">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-14 sm:py-24 bg-paper-subtle border-b border-stone-200/80">
          <div className="container-site">
            <div className="max-w-3xl mx-auto">
              <Reveal>
                <div className="text-center mb-8 sm:mb-12">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    Clear Answers
                  </span>
                  <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                    Frequently asked questions about digital marketing in {location.name}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 font-normal">
                    Everything you need to know about pricing, timeframes, campaign execution, and deliverables.
                  </p>
                </div>
              </Reveal>

              <Faq items={location.faqs} />
            </div>
          </div>
        </section>

        {/* Regional Hubs Directory (Internal Link Equity) */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200/80">
          <div className="container-site">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
                Regional Growth Network · Haryana & GT Road Corridor
              </p>
              <h3 className="mt-2 font-display text-lg sm:text-2xl font-bold text-ink">
                Serving leading enterprises across Northern Haryana
              </h3>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                {otherLocations.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/locations/${other.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-paper px-4 py-2 text-xs font-bold text-ink hover:border-accent hover:text-accent transition-all"
                  >
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                    <span>Best Digital Marketing Agency in {other.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final Consultation & Lead Form */}
        <section className="relative overflow-hidden bg-paper py-14 sm:py-24">
          <div className="container-site">
            <div className="grid items-center gap-8 sm:gap-14 lg:grid-cols-2">
              <Reveal>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    Direct Strategy Session
                  </span>
                  <h2 className="mt-2 font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
                    Ready to scale your business in <span className="text-accent">{location.name}</span>?
                  </h2>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-600 font-normal">
                    Schedule a confidential strategy consultation with our senior campaign directors. We will audit your current acquisition funnels, analyze competitor ad spend, and present a clear execution roadmap.
                  </p>

                  <div className="mt-6 space-y-3 text-xs sm:text-sm text-stone-700 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      <span>Direct 30-minute strategic consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      <span>Custom funnel audit & budget allocation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      <span>Clear, actionable next steps within 48 hours</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-stone-200 flex items-center gap-3 text-xs text-stone-500">
                    <Clock className="h-4 w-4 text-accent shrink-0" />
                    <span>Response time: Within 2 hours during working hours (9 AM - 8 PM)</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-card">
                  <h3 className="font-display text-lg font-bold text-ink mb-1">
                    Book {location.name} Strategy Consultation
                  </h3>
                  <p className="text-xs text-stone-500 mb-5 font-normal">
                    Fill out the form below and our strategic team will connect directly.
                  </p>
                  <LeadForm />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
