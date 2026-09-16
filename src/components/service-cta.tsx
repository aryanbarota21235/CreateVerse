"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, MessageSquare } from "lucide-react";
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
    <section className="bg-paper py-16 sm:py-24 border-t border-stone-200">
      <div className="container-site">
        {/* Executive Consultation CTA - Clean Light Aesthetic matching Political CTA */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto py-2 sm:py-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Executive Strategy Consultation
            </span>

            <h2 className="mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
              Scale your <span className="text-accent">{service.shortName ?? service.name}</span> with precision.
            </h2>

            <p className="mt-3 text-xs sm:text-base leading-relaxed text-ink/80 font-normal">
              Schedule a confidential consultation with our senior campaign team. We audit your target market, analyze acquisition funnels, and construct an execution roadmap engineered for real revenue.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => openEnquiry(service.name)}
                className="pressable group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-150 hover:-translate-y-0.5 hover:bg-accent-dim hover:shadow-lg hover:shadow-accent/25 cursor-pointer"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Enquire for {service.shortName ?? service.name}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <a
                href={`https://wa.me/${site.phoneRaw.replace("+", "")}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pressable inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-bold text-ink shadow-xs transition-all duration-150 hover:-translate-y-0.5 hover:border-[#25D366] hover:text-emerald-700"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                <span>Talk on WhatsApp</span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Also Explore / Related Practice Areas (Clean Light Cards) */}
        <div className="mt-12 sm:mt-20">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 border-b border-stone-200 pb-4 sm:pb-6 mb-6 sm:mb-10">
              <div>
                <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-accent">
                  Complementary Practice Areas
                </p>
                <h3 className="mt-1.5 sm:mt-2 font-display text-lg sm:text-3xl font-bold tracking-tight text-ink">
                  Explore other specialized capabilities
                </h3>
              </div>
              <Link
                href="/services"
                prefetch={true}
                className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink hover:text-accent transition-colors shrink-0"
              >
                <span>View all services</span>
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-6" delayChildren={0.08}>
            {related.map((r, idx) => (
              <StaggerItem key={r.slug} className={`h-full ${idx === 2 ? "col-span-2 sm:col-span-1" : ""}`}>
                <Link
                  href={`/services/${r.slug}`}
                  prefetch={true}
                  className="group flex h-full flex-col justify-between rounded-xl sm:rounded-2xl border border-stone-200 bg-white p-3.5 sm:p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex rounded-full bg-paper px-2 py-0.5 sm:px-3 sm:py-1 text-[9.5px] sm:text-[11px] font-bold text-accent border border-stone-200 truncate max-w-[100px] sm:max-w-none">
                        {r.category}
                      </span>
                      <span className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-paper text-ink/70 transition-colors group-hover:bg-accent group-hover:text-white">
                        <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>

                    <h4 className="mt-2.5 sm:mt-5 font-display text-xs sm:text-lg font-bold text-ink transition-colors group-hover:text-accent leading-snug line-clamp-2">
                      {r.name}
                    </h4>

                    <p className="mt-1 sm:mt-2.5 text-[10.5px] sm:text-sm leading-relaxed text-ink/75 font-normal line-clamp-2">
                      {r.tagline}
                    </p>
                  </div>

                  <div className="mt-3 sm:mt-6 pt-2.5 sm:pt-4 border-t border-stone-100 flex items-center text-[10px] sm:text-xs font-bold text-accent">
                    <span>Explore practice</span>
                    <ArrowRight className="ml-1 h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform group-hover:translate-x-1" />
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
