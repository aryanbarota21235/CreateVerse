"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck, Clock, Award } from "lucide-react";
import { type Service } from "@/lib/services";
import { site } from "@/lib/site";
import { useEnquiry } from "@/context/enquiry-context";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";

interface ServiceCtaProps {
  service: Service;
  related: Service[];
}

export default function ServiceCta({ service, related }: ServiceCtaProps) {
  const { openEnquiry } = useEnquiry();

  const whatsappMessage = encodeURIComponent(
    `Hi CreateVerse, I would like to enquire about your ${service.name} services.`
  );

  return (
    <section className="bg-paper py-20 lg:py-28 border-t border-stone-200">
      <div className="container-site">
        {/* Executive Consultation Card */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink p-8 sm:p-12 lg:p-16 text-white shadow-lift border border-white/10">
            {/* Ambient Lighting */}
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
            <div className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-brand-orange/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
                Executive Strategy Consultation
              </p>

              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tightest text-white">
                Scale your <span className="text-accent">{service.shortName ?? service.name}</span> with precision.
              </h2>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/80 font-normal">
                Schedule a confidential consultation with our senior campaign team. We audit your target market, analyze acquisition funnels, and construct an execution roadmap engineered for real revenue.
              </p>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap gap-4 sm:gap-6 text-xs font-semibold text-white/90">
                <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2 border border-white/10">
                  <Clock className="h-4 w-4 text-accent" />
                  <span>2-Hour Guaranteed Response</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2 border border-white/10">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  <span>Strict NDA & Data Privacy</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2 border border-white/10">
                  <Award className="h-4 w-4 text-accent" />
                  <span>Senior Partner Oversight</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openEnquiry(service.name)}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-4 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-accent-dim hover:shadow-lg hover:shadow-accent/20"
                >
                  <span>Enquire for {service.shortName ?? service.name}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href={`https://wa.me/${site.phoneRaw.replace("+", "")}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white/15 hover:border-white/40 shadow-xs"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="h-4 w-4 text-white/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Also Explore / Related Practice Areas (Clean Light Cards) */}
        <div className="mt-20">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-stone-200 pb-6 mb-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
                  Complementary Practice Areas
                </p>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                  Explore other specialized capabilities
                </h3>
              </div>
              <Link
                href="/services"
                prefetch={true}
                className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink hover:text-accent transition-colors shrink-0"
              >
                <span>View all services</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <Stagger className="grid gap-6 md:grid-cols-3" delayChildren={0.08}>
            {related.map((r) => (
              <StaggerItem key={r.slug}>
                <Link
                  href={`/services/${r.slug}`}
                  prefetch={true}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-stone-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex rounded-full bg-paper px-3 py-1 text-[11px] font-bold text-accent border border-stone-200">
                        {r.category}
                      </span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper text-ink/70 transition-colors group-hover:bg-accent group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>

                    <h4 className="mt-5 font-display text-lg font-bold text-ink transition-colors group-hover:text-accent">
                      {r.name}
                    </h4>

                    <p className="mt-2.5 text-sm leading-relaxed text-ink/75 font-normal">
                      {r.tagline}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center text-xs font-bold text-accent">
                    <span>Explore practice area</span>
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
