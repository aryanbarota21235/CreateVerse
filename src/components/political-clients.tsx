"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";
import { politicianClients, type PoliticianClient } from "@/lib/politicians";
import { InstagramIcon, FacebookIcon, XIcon } from "@/components/social-icons";

export default function PoliticalClients({
  className = "",
}: {
  className?: string;
  showSeeMore?: boolean;
} = {}) {
  const [expanded, setExpanded] = useState(false);

  const primaryClients = politicianClients.slice(0, 6);
  const secondaryClients = politicianClients.slice(6);

  const renderClientCard = (p: PoliticianClient) => (
    <div
      key={p.name}
      className="group h-full flex flex-col items-center justify-between text-center p-3 sm:py-5 sm:px-3 rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-[#F8FAFC] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
    >
      {/* Clickable Portrait and Info Header */}
      {p.href ? (
        <Link
          href={p.href}
          prefetch={true}
          className="group/link flex flex-col items-center w-full grow cursor-pointer"
        >
          {/* Circular Portrait with Concentric Clean Ring */}
          <div className="relative mb-3 sm:mb-4 shrink-0">
            <div className="relative h-24 w-24 min-[390px]:h-28 min-[390px]:w-28 sm:h-32 sm:w-32 lg:h-28 lg:w-28 xl:h-32 xl:w-32 rounded-full p-[3px] border-[2px] border-stone-200/90 bg-white shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
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
            {/* Party or Organization Tag Badge */}
            {(p.party || p.badge) && (
              <span
                className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-xs ${
                  p.party === "BJP"
                    ? "bg-amber-500 text-white border border-amber-600/30"
                    : p.party === "INC"
                      ? "bg-sky-600 text-white border border-sky-700/30"
                      : "bg-emerald-600 text-white border border-emerald-700/30"
                }`}
              >
                {p.party || p.badge}
              </span>
            )}
          </div>

          {/* Content: Name and Designation */}
          <div className="flex flex-col items-center w-full grow justify-center text-center mt-1 sm:mt-2">
            <h3 className="font-display text-[11px] min-[380px]:text-xs sm:text-[13px] lg:text-xs xl:text-sm font-bold text-ink leading-snug tracking-tight">
              {p.name}
            </h3>
            {p.role && (
              <p className="mt-1 text-[10px] sm:text-[11px] font-medium text-stone-600 leading-tight">
                {p.role}
              </p>
            )}
            <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-stone-700 group-hover/link:underline">
              View Profile &rarr;
            </span>
          </div>
        </Link>
      ) : (
        <div className="flex flex-col items-center w-full grow">
          <div className="relative mb-3 sm:mb-4 shrink-0">
            <div className="relative h-24 w-24 min-[390px]:h-28 min-[390px]:w-28 sm:h-32 sm:w-32 lg:h-28 lg:w-28 xl:h-32 xl:w-32 rounded-full p-[3px] border-[2px] border-stone-200/90 bg-white shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
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

          <div className="flex flex-col items-center w-full grow justify-center text-center mt-1 sm:mt-2">
            <h3 className="font-display text-[11px] min-[380px]:text-xs sm:text-[13px] lg:text-xs xl:text-sm font-bold text-ink leading-snug tracking-tight">
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

      {/* Social Media Links Pills */}
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
  );

  return (
    <section className={`relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20 border-t border-stone-200 ${className}`}>
      <div className="container-site relative">
        {/* Clean Left-Aligned Header Matching Our Clients */}
        <Reveal>
          <div className="text-left pb-6 sm:pb-8 border-b border-stone-200">
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
              Public Figure Clients
            </h2>
          </div>
        </Reveal>

        {/* Primary 6 Politician Cards */}
        <div className="mt-8 sm:mt-10">
          <Stagger className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-6 items-stretch" delayChildren={0.02}>
            {primaryClients.map((p) => (
              <StaggerItem key={p.name} className="h-full">
                {renderClientCard(p)}
              </StaggerItem>
            ))}
          </Stagger>

          {/* Expandable Secondary Politician Cards (matching Services dropdown animation) */}
          <AnimatePresence initial={false}>
            {expanded && secondaryClients.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto", transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] } }}
                exit={{ opacity: 0, height: 0, transition: { duration: 0.26, ease: [0.16, 1, 0.3, 1] } }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-6 items-stretch pt-3 sm:pt-4">
                  {secondaryClients.map((p) => renderClientCard(p))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Collapse / See More Button (exact same style as Services collapse button in Hero) */}
        {secondaryClients.length > 0 && (
          <div className="mt-6 sm:mt-10 flex flex-col items-center justify-center">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="pressable group inline-flex items-center gap-2 rounded-full border border-black/[0.14] bg-white px-6 py-2.5 sm:px-7 sm:py-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-ink shadow-card transition-all duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-accent cursor-pointer"
            >
              <span>{expanded ? "Collapse Clients" : "See More"}</span>
              <ChevronDown
                className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
