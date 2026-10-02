import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import Faq from "@/components/faq";
import { site } from "@/lib/site";
import { homeFaqs } from "@/lib/seo";

export default function LocalPresence() {
  return (
    <section className="bg-paper border-t border-stone-200/80 py-14 sm:py-20 lg:py-28">
      <div className="container-site grid items-start gap-10 sm:gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Karnal · Haryana · India"
            title="A digital marketing agency in Karnal, working across India."
          />
          <Reveal delay={0.08}>
            <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-ink/80 font-normal">
              CreateVerse is headquartered at Mughal Canal, Karnal. From here one in-house team runs
              Google Ads, Meta Ads, SEO, lead generation, social media and website projects for
              businesses in Karnal and across Haryana, Punjab, Delhi NCR and the rest of India —
              ROI-oriented work, reported in leads and revenue.
            </p>

            <ul className="mt-6 sm:mt-8 space-y-3.5 text-sm sm:text-base text-ink/85">
              <li>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-3 transition-colors hover:text-accent"
                >
                  <MapPin className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-accent" />
                  <span>
                    <span className="font-semibold">{site.address}</span>
                    <span className="block text-xs sm:text-sm text-accent group-hover:underline">
                      Open in Google Maps
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="inline-flex items-center gap-3 font-semibold transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-accent" />
                  <span>{site.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-accent" />
                <span>{site.hours.label}</span>
              </li>
            </ul>

            <div className="mt-7 sm:mt-9 border-t border-ink/10 pt-5 sm:pt-6">
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
                Cities we serve in Haryana
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-ink">
                {site.cities.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/locations/${city.slug}`}
                      title={`Digital marketing agency in ${city.name}`}
                      className="underline decoration-ink/20 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/locations/karnal"
                className="group mt-5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-accent"
              >
                <span>Digital marketing services in Karnal</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">
            Frequently asked
          </h3>
          <div className="mt-4 sm:mt-5">
            <Faq items={homeFaqs} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
