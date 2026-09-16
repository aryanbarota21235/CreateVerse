"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageSquare, ArrowRight, ExternalLink } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";
import { useEnquiry } from "@/context/enquiry-context";
import { politicianClients } from "@/lib/politicians";
import { InstagramIcon, FacebookIcon, XIcon } from "@/components/social-icons";

export default function PoliticalClients() {
  const { openEnquiry } = useEnquiry();

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-32 border-t border-stone-200">
      {/* Subtle background ambient map texture */}
      <div className="dot-texture absolute inset-0 opacity-40" />
      <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-[450px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(224,242,254,0.65)_0%,rgba(224,242,254,0.2)_45%,transparent_70%)] pointer-events-none" />

      <div className="container-site relative">
        {/* Top Header Row with Title, Copy, and CTAs */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 sm:gap-8 pb-8 sm:pb-14 border-b border-stone-200">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent mb-2 sm:mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <span>24/7 Digital War Room Operations</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tightest text-ink">
                Political Campaign &amp; War Room
              </h2>
              <p className="mt-3 sm:mt-5 text-sm sm:text-lg leading-relaxed text-ink/80 font-normal">
                In today&apos;s digital battlefield, political leaders need unmatched narrative dominance, booth-level voter mobilization, and rapid response crisis management. At CreateVerse, we specialize in high-stakes political branding, digital war rooms, grassroots WhatsApp networks, and election campaign strategy to build decisive electoral mandates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:pt-10 shrink-0">
              <button
                onClick={() => openEnquiry("political-management")}
                className="pressable group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl sm:rounded-2xl bg-accent px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-150 hover:-translate-y-0.5 hover:bg-accent-dim hover:shadow-lg hover:shadow-accent/20 cursor-pointer"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Let&apos;s talk</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                href="/services/political-management"
                prefetch={true}
                className="pressable group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl sm:rounded-2xl border border-stone-300 bg-white px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-ink hover:border-accent hover:text-accent transition-all duration-150 hover:-translate-y-0.5 shadow-xs"
              >
                <span>Full War Room Page</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Clients Showcase Subheader */}
        <div className="mt-8 sm:mt-14 mb-5 sm:mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h3 className="font-display text-xl sm:text-3xl font-bold tracking-tight text-ink">
              Our Politician <span className="text-accent">Clients</span>
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-stone-500 font-normal">
              Trusted by senior Members of Parliament, State MLAs, and constituency leadership across major political parties.
            </p>
          </div>
        </div>

        {/* 6 Circular Politician Cards with Social Media Handles */}
        <Stagger className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-3 lg:grid-cols-6 items-stretch" delayChildren={0.08}>
          {politicianClients.map((p) => (
            <StaggerItem key={p.name} className="h-full">
              <div className="group h-full flex flex-col items-center justify-between text-center p-3 sm:p-5 rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-[#F8FAFC] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:bg-white hover:shadow-card">
                {/* Circular Portrait with Concentric Clean Ring */}
                <div className="relative mb-2.5 sm:mb-4 shrink-0">
                  <div className="relative h-20 w-20 sm:h-28 sm:w-28 rounded-full p-[2.5px] sm:p-[3px] border-[1.5px] border-stone-200/90 bg-white shadow-xs transition-all duration-300 group-hover:border-accent group-hover:scale-105 group-hover:shadow-md">
                    <div className="relative h-full w-full overflow-hidden rounded-full bg-stone-50 flex items-center justify-center">
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={112}
                        height={112}
                        priority
                        className="h-full w-full object-cover scale-[1.08] transition-transform duration-300 group-hover:scale-[1.12]"
                      />
                    </div>
                  </div>
                  {/* Party Tag Badge */}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider shadow-xs ${
                      p.party === "BJP"
                        ? "bg-amber-500 text-white border border-amber-600/30"
                        : "bg-sky-600 text-white border border-sky-700/30"
                    }`}
                  >
                    {p.party}
                  </span>
                </div>

                {/* Content: Name and Designation */}
                <div className="flex flex-col items-center w-full grow justify-center text-center mt-1 sm:mt-2">
                  <h4 className="font-display text-xs sm:text-sm font-bold text-ink leading-snug transition-colors group-hover:text-accent">
                    {p.name}
                  </h4>
                  <p className="mt-1 text-[10px] sm:text-[11px] font-medium text-stone-600 leading-tight">
                    {p.role}
                  </p>
                </div>

                {/* Social Media Links Pills */}
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
                      aria-label={`${p.name} X (Twitter)`}
                    >
                      <XIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
