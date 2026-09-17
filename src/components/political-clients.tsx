"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageSquare, ArrowRight } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";
import { useEnquiry } from "@/context/enquiry-context";
import { politicianClients } from "@/lib/politicians";
import { InstagramIcon, FacebookIcon, XIcon } from "@/components/social-icons";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export default function PoliticalClients({
  className = "",
  showSeeMore,
}: {
  className?: string;
  showSeeMore?: boolean;
} = {}) {
  const { openEnquiry } = useEnquiry();
  const pathname = usePathname();

  const shouldShowSeeMore = showSeeMore !== undefined ? showSeeMore : pathname !== "/clients";

  return (
    <section className={`relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20 border-t border-stone-200 ${className}`}>
      {/* Subtle background ambient map texture */}
      <div className="dot-texture absolute inset-0 opacity-40" />
      <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-[450px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(224,242,254,0.65)_0%,rgba(224,242,254,0.2)_45%,transparent_70%)] pointer-events-none" />

      <div className="container-site relative">
        {/* Top Header Row with Title on Left and Enquiry CTAs on Right */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-6 sm:pb-8 border-b border-stone-200">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-accent mb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <span>Political Campaign Division</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
                Political Clients
              </h2>
              <p className="mt-2 text-xs sm:text-base text-stone-600 font-normal leading-relaxed">
                Trusted by senior Members of Parliament, State MLAs, and constituency leadership across major political parties.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 shrink-0">
              <button
                onClick={() => openEnquiry("political-management")}
                className="pressable group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-150 hover:bg-accent-dim hover:shadow-lg hover:shadow-accent/20 cursor-pointer"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Political War Room Enquiry</span>
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

        {/* Circular Politician Cards Directly Underneath Title */}
        <div className="mt-8 sm:mt-12 -mx-1 sm:-mx-2 lg:-mx-4">
          <Stagger className="grid grid-cols-2 gap-2.5 sm:gap-3.5 lg:gap-3 xl:gap-3.5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 items-stretch" delayChildren={0.02}>
            {politicianClients.map((p) => (
              <StaggerItem key={p.name} className="h-full last:col-span-2 last:max-w-[240px] last:mx-auto last:w-full sm:last:col-span-1 sm:last:max-w-none">
                <div className="group h-full flex flex-col items-center justify-between text-center p-3 sm:py-5 sm:px-2 xl:px-2.5 rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-[#F8FAFC] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:bg-white hover:shadow-card">
                  {/* Clickable Portrait and Info Header */}
                  {p.href ? (
                    <Link
                      href={p.href}
                      prefetch={true}
                      className="group/link flex flex-col items-center w-full grow cursor-pointer"
                    >
                      {/* Circular Portrait with Concentric Clean Ring */}
                      <div className="relative mb-3 sm:mb-4 shrink-0">
                        <div className="relative h-24 w-24 min-[390px]:h-28 min-[390px]:w-28 sm:h-32 sm:w-32 lg:h-28 lg:w-28 xl:h-28 xl:w-28 rounded-full p-[3px] border-[2px] border-stone-200/90 bg-white shadow-xs transition-all duration-300 group-hover:border-accent group-hover:scale-105 group-hover:shadow-md">
                          <div className="relative h-full w-full overflow-hidden rounded-full bg-stone-50 flex items-center justify-center">
                            <Image
                              src={p.image}
                              alt={p.name}
                              width={140}
                              height={140}
                              sizes="(max-width: 640px) 112px, 140px"
                              priority
                              quality={85}
                              className="h-full w-full object-cover scale-[1.08] transition-transform duration-300 group-hover:scale-[1.12]"
                            />
                          </div>
                        </div>
                        {/* Party Tag Badge */}
                        {p.party && (
                          <span
                            className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-xs ${
                              p.party === "BJP"
                                ? "bg-amber-500 text-white border border-amber-600/30"
                                : "bg-sky-600 text-white border border-sky-700/30"
                            }`}
                          >
                            {p.party}
                          </span>
                        )}
                      </div>

                      {/* Content: Name and Designation */}
                      <div className="flex flex-col items-center w-full grow justify-center text-center mt-1 sm:mt-2">
                        <h3 className="font-display text-[10px] min-[380px]:text-[11px] sm:text-[12px] md:text-xs lg:text-[11px] xl:text-[12px] font-bold text-ink leading-tight transition-colors group-hover:text-accent tracking-tight whitespace-nowrap">
                          {p.name}
                        </h3>
                        {p.role && (
                          <p className="mt-1 text-[10px] sm:text-[11px] font-medium text-stone-600 leading-tight">
                            {p.role}
                          </p>
                        )}
                        <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-accent group-hover/link:underline">
                          View Profile &rarr;
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <div className="flex flex-col items-center w-full grow">
                      {/* Circular Portrait with Concentric Clean Ring */}
                      <div className="relative mb-3 sm:mb-4 shrink-0">
                        <div className="relative h-24 w-24 min-[390px]:h-28 min-[390px]:w-28 sm:h-32 sm:w-32 lg:h-28 lg:w-28 xl:h-28 xl:w-28 rounded-full p-[3px] border-[2px] border-stone-200/90 bg-white shadow-xs transition-all duration-300 group-hover:border-accent group-hover:scale-105 group-hover:shadow-md">
                          <div className="relative h-full w-full overflow-hidden rounded-full bg-stone-50 flex items-center justify-center">
                            <Image
                              src={p.image}
                              alt={p.name}
                              width={140}
                              height={140}
                              sizes="(max-width: 640px) 112px, 140px"
                              priority
                              quality={85}
                              className="h-full w-full object-cover scale-[1.08] transition-transform duration-300 group-hover:scale-[1.12]"
                            />
                          </div>
                        </div>
                        {/* Party Tag Badge */}
                        {p.party && (
                          <span
                            className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-xs ${
                              p.party === "BJP"
                                ? "bg-amber-500 text-white border border-amber-600/30"
                                : "bg-sky-600 text-white border border-sky-700/30"
                            }`}
                          >
                            {p.party}
                          </span>
                        )}
                      </div>

                      {/* Content: Name and Designation */}
                      <div className="flex flex-col items-center w-full grow justify-center text-center mt-1 sm:mt-2">
                        <h3 className="font-display text-[10px] min-[380px]:text-[11px] sm:text-[12px] md:text-xs lg:text-[11px] xl:text-[12px] font-bold text-ink leading-tight transition-colors group-hover:text-accent tracking-tight whitespace-nowrap">
                          {p.name}
                        </h3>
                        {p.role && (
                          <p className="mt-1 text-[10px] sm:text-[11px] font-medium text-stone-600 leading-tight">
                            {p.role}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Social Media Links Pills - Only shown if link exists */}
                  {Boolean(p.socials?.instagram || p.socials?.facebook || p.socials?.twitter) && (
                    <div className="mt-3 pt-2.5 sm:mt-4 sm:pt-3 border-t border-stone-200/80 w-full flex items-center justify-center gap-1.5 sm:gap-2">
                      {p.socials.instagram && (
                        <a
                          href={p.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-600 hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/[0.05] transition-all shadow-2xs hover:scale-110"
                          aria-label={`${p.name} Instagram`}
                        >
                          <InstagramIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </a>
                      )}
                      {p.socials.facebook && (
                        <a
                          href={p.socials.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-600 hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/[0.05] transition-all shadow-2xs hover:scale-110"
                          aria-label={`${p.name} Facebook`}
                        >
                          <FacebookIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </a>
                      )}
                      {p.socials.twitter && (
                        <a
                          href={p.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-600 hover:text-black hover:border-black/40 hover:bg-stone-100 transition-all shadow-2xs hover:scale-110"
                          aria-label={`${p.name} X`}
                        >
                          <XIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* "See More" Button to Navigate to Dedicated Clients Page */}
        {shouldShowSeeMore && (
          <Reveal>
            <div className="mt-8 sm:mt-12 flex justify-center">
              <Link
                href="/clients"
                className="pressable group inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-7 py-3 text-xs sm:text-sm font-bold text-ink shadow-2xs hover:border-accent hover:text-accent hover:bg-stone-50 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>See More</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
