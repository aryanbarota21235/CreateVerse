"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { useEnquiry } from "@/context/enquiry-context";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { openEnquiry } = useEnquiry();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 30;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <header
      className={`fixed inset-x-0 z-50 px-3.5 sm:px-8 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled ? "top-1.5 sm:top-5" : "top-2.5 sm:top-5"
      }`}
    >
      {/* Maximum luxury width floating pill dock */}
      <div
        className={`navbar-dock mx-auto flex items-center justify-between rounded-full bg-white pointer-events-auto transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] border ${
          scrolled
            ? "max-w-6xl py-2 px-5 sm:py-2.5 sm:px-10 border-stone-300/80 sm:border-black/[0.12] shadow-[0_12px_32px_rgba(11,15,25,0.12)] sm:shadow-[0_12px_32px_rgba(11,15,25,0.1)]"
            : "max-w-7xl py-3 px-6 sm:py-3.5 sm:px-12 border-stone-200/90 sm:border-black/[0.12] shadow-[0_8px_30px_rgba(11,15,25,0.08)]"
        }`}
      >
        {/* Brand Logo - Smooth luxury scale transition on mobile and desktop */}
        <Link
          href="/"
          prefetch={true}
          className="group flex items-center transition-transform duration-300 hover:opacity-90 shrink-0"
          aria-label="CreateVerse home"
        >
          <Image
            src="/logo.png"
            alt="CreateVerse — Redefining Digital"
            width={360}
            height={148}
            priority
            className={`w-auto transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              scrolled
                ? "h-[36px] sm:h-11"
                : "h-[42px] sm:h-[50px] lg:h-[54px]"
            }`}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 lg:gap-10 md:flex" aria-label="Primary navigation">
          {site.nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={true}
                className={`relative py-1 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group ${
                  active ? "text-accent" : "text-ink hover:text-accent"
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    active
                      ? "scale-x-100 origin-left"
                      : "scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right CTA: Enquire Now (Desktop Only) */}
        <div className="hidden items-center gap-3 sm:flex shrink-0">
          <button
            onClick={() => openEnquiry()}
            className="pressable group inline-flex items-center gap-1.5 rounded-full bg-ink px-6 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-accent hover:shadow-md hover:shadow-accent/20 cursor-pointer"
          >
            <span>Enquire Now</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Action Button (Strictly 'Enquire' Only, Bold Pill with Proportional Scaling) */}
        <div className="flex items-center sm:hidden">
          <button
            onClick={() => openEnquiry()}
            className={`pressable rounded-full bg-ink font-bold uppercase text-white shadow-xs active:bg-accent transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer ${
              scrolled
                ? "px-3.5 py-1.5 text-[11px] tracking-[0.12em]"
                : "px-4.5 py-2 text-xs tracking-[0.14em]"
            }`}
          >
            Enquire
          </button>
        </div>
      </div>
    </header>
  );
}
