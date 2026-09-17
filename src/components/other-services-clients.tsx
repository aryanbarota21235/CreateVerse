"use client";

import React from "react";
import { MessageSquare, ArrowRight, Shield, Building2, Globe, TrendingUp, Code2 } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";
import { useEnquiry } from "@/context/enquiry-context";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

interface ServicePractice {
  id: string;
  name: string;
  divisionBadge: string;
  serviceSlug: string;
  icon: React.ElementType;
  subtitle: string;
  rosterDescription: string;
  ctaLabel: string;
}

const practices: ServicePractice[] = [
  {
    id: "real-estate",
    name: "Real Estate Clients",
    divisionBadge: "Real Estate Acquisition Division",
    serviceSlug: "real-estate-lead-generation",
    icon: Building2,
    subtitle: "High-rise luxury developments, plotted townships, commercial inventory, and tier-1 builders.",
    rosterDescription: "Client names, active campaign accounts, and private inventory rosters are maintained under strict confidentiality agreements. Contact our real estate acquisition desk for project references and verified buyer pipelines.",
    ctaLabel: "Enquire for Real Estate",
  },
  {
    id: "immigration",
    name: "Immigration & Visa Clients",
    divisionBadge: "Global Mobility & Visa Practice",
    serviceSlug: "immigration-lead-generation",
    icon: Globe,
    subtitle: "Study abroad networks, PR consultancies, and work permit advisory firms across North India & Canada.",
    rosterDescription: "Leading immigration consultancies & study visa networks. Applicant volume data, intake scheduling funnels, and partner portfolios are shared on enquiry.",
    ctaLabel: "Enquire for Immigration",
  },
  {
    id: "performance-marketing",
    name: "Performance Marketing Clients",
    divisionBadge: "Paid Acquisition & Growth Practice",
    serviceSlug: "google-ads",
    icon: TrendingUp,
    subtitle: "High-growth commercial brands, e-commerce stores, and high-ticket B2B service firms.",
    rosterDescription: "Omnichannel Google & Meta ad accounts. Spend scaling data, conversion tracking architectures, and blended ROAS case metrics are shared under mutual NDA.",
    ctaLabel: "Enquire for Performance Ads",
  },
  {
    id: "web-development",
    name: "Web & Technology Clients",
    divisionBadge: "Conversion Web Engineering",
    serviceSlug: "conversion-web-development",
    icon: Code2,
    subtitle: "Sub-second Next.js web applications, custom acquisition funnels, and 24/7 campaign digital infrastructure.",
    rosterDescription: "Enterprise web platforms, client portals, and election war room tech architectures. Technical blueprints and design demos available on request.",
    ctaLabel: "Enquire for Web Development",
  },
];

export default function OtherServicesClients() {
  const { openEnquiry } = useEnquiry();

  return (
    <div className="space-y-12 sm:space-y-16 pb-14 sm:pb-24">
      {practices.map((practice, index) => {
        const IconComponent = practice.icon;
        return (
          <section
            key={practice.id}
            className={`py-12 sm:py-16 ${
              index % 2 === 0 ? "bg-paper border-y border-stone-200" : "bg-white border-b border-stone-200"
            }`}
          >
            <div className="container-site">
              {/* Header Row: Left Title & Description, Right Enquiry Buttons */}
              <Reveal>
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-6 sm:pb-8 border-b border-stone-200">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-accent mb-2.5">
                      <IconComponent className="h-3.5 w-3.5 text-accent" />
                      <span>{practice.divisionBadge}</span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                      {practice.name}
                    </h2>
                    <p className="mt-2 text-xs sm:text-base text-stone-600 font-normal leading-relaxed">
                      {practice.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 shrink-0">
                    <button
                      onClick={() => openEnquiry(practice.serviceSlug)}
                      className="pressable group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-150 hover:bg-accent-dim hover:shadow-lg hover:shadow-accent/20 cursor-pointer"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>{practice.ctaLabel}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <a
                      href={site.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pressable inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-ink shadow-xs transition-all duration-150 hover:border-[#25D366] hover:bg-[#25D366]/[0.05] hover:text-[#25D366]"
                    >
                      <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                      <span>Talk on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Client Roster Area (Ready for client cards once provided) */}
              <div className="mt-6 sm:mt-8">
                <Reveal>
                  <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="max-w-2xl">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-800 mb-2.5">
                        <Shield className="h-3.5 w-3.5 text-amber-600" />
                        <span>Client Roster Updating</span>
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed text-stone-600 font-normal">
                        {practice.rosterDescription}
                      </p>
                    </div>

                    <div className="shrink-0 w-full sm:w-auto">
                      <button
                        onClick={() => openEnquiry(practice.serviceSlug)}
                        className="pressable w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-[#F8FAFC] px-5 py-2.5 text-xs sm:text-sm font-semibold text-stone-700 hover:border-accent hover:text-accent hover:bg-white transition-all shadow-2xs cursor-pointer"
                      >
                        <span>Request Client References</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
