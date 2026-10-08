"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, ChevronRight } from "lucide-react";
import { site } from "@/lib/site";
import { useEnquiry } from "@/context/enquiry-context";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-2 sm:top-5 z-50 px-3 sm:px-8 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
      {/* Maximum luxury width floating pill dock */}
      <div
        className={`navbar-dock mx-auto flex items-center justify-between rounded-full bg-white pointer-events-auto border border-stone-200/90 sm:border-black/[0.12] shadow-[0_8px_24px_rgba(11,15,25,0.08)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] py-2.5 px-4 ${
          scrolled
            ? "sm:max-w-6xl sm:px-10 sm:shadow-[0_12px_32px_rgba(11,15,25,0.1)]"
            : "sm:max-w-7xl sm:py-3.5 sm:px-12 sm:shadow-[0_8px_30px_rgba(11,15,25,0.08)]"
        }`}
      >
        {/* Brand Logo - Fixed stable size on mobile, smooth scale on desktop */}
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
            className={`w-auto h-[38px] sm:transition-all sm:duration-300 sm:ease-[cubic-bezier(0.22,1,0.36,1)] ${
              scrolled ? "sm:h-11" : "sm:h-[50px] lg:h-[54px]"
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
        <div className="hidden items-center gap-3 md:flex shrink-0">
          <button
            onClick={() => openEnquiry()}
            className="pressable group inline-flex items-center gap-1.5 rounded-full bg-ink px-6 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-accent hover:shadow-md hover:shadow-accent/20 cursor-pointer"
          >
            <span>Enquire Now</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Actions: Enquire Button + Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => openEnquiry()}
            className="pressable rounded-full bg-ink px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-2xs active:bg-accent transition-colors duration-150 cursor-pointer"
          >
            Enquire
          </button>
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="p-1.5 rounded-full text-ink hover:text-accent hover:bg-stone-100 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Card */}
      {mobileOpen && (
        <div className="nav-menu-enter pointer-events-auto md:hidden mx-auto mt-2 max-w-full rounded-3xl border border-stone-200/90 bg-white p-3.5 shadow-xl">
          <nav className="flex flex-col space-y-1" aria-label="Mobile navigation">
            {site.nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                    active ? "bg-accent/10 font-bold text-accent" : "text-ink hover:bg-stone-50"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4 text-stone-400" />
                </Link>
              );
            })}
            <Link
              href="/learn-digital-marketing"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between rounded-2xl px-4 py-2.5 text-sm font-semibold text-ink hover:bg-stone-50 transition-colors"
            >
              <span>Learn Marketing</span>
              <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                Academy
              </span>
            </Link>
          </nav>
          <div className="mt-3 flex items-center justify-between border-t border-stone-100 px-2 pt-3 text-xs text-stone-500">
            <a href={`tel:${site.phoneRaw}`} className="font-semibold text-ink hover:text-accent">
              {site.phone}
            </a>
            <span>Karnal, Haryana</span>
          </div>
        </div>
      )}
    </header>
  );
}
