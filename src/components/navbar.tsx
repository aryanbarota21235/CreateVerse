"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { useEnquiry } from "@/context/enquiry-context";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { openEnquiry } = useEnquiry();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? "bg-white/95 shadow-[0_8px_30px_rgba(13,20,32,0.06)] backdrop-blur-xl border-b border-paper-line/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-12 transition-[min-height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? "min-h-[72px]" : "min-h-[96px] sm:min-h-[104px]"
        }`}
      >
        {/* Brand Logo - Smooth resize */}
        <Link
          href="/"
          className="flex items-center text-decoration-none"
          aria-label="CreateVerse home"
        >
          <Image
            src="/logo.png"
            alt="CreateVerse"
            width={320}
            height={132}
            priority
            className={`w-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              scrolled ? "h-7 sm:h-8" : "h-9 sm:h-11"
            }`}
          />
        </Link>

        {/* Desktop Navigation with Ravensaa animated underline */}
        <nav className="hidden items-center gap-8 lg:gap-11 lg:flex" aria-label="Primary navigation">
          {site.nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1.5 text-[11.5px] font-bold uppercase tracking-[0.22em] transition-colors duration-300 group ${
                  active ? "text-accent" : "text-ink hover:text-accent"
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    active
                      ? "scale-x-100 origin-left"
                      : "scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right CTAs: WhatsApp + Ravensaa-style ENQUIRE Button */}
        <div className="hidden items-center gap-3 sm:flex">
          {/* WhatsApp Direct Connect */}
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-50/70 px-3.5 py-2 text-[11px] font-bold tracking-wider text-emerald-800 uppercase transition-all hover:bg-emerald-100 hover:border-emerald-500/40"
            title="Chat directly with us on WhatsApp"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>WhatsApp</span>
          </a>

          {/* Ravensaa-style ENQUIRE Button */}
          <button
            onClick={() => openEnquiry()}
            className="inline-flex items-center justify-center rounded-full border-[1.5px] border-ink bg-ink px-6 py-2.5 text-[11.5px] font-bold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-transparent hover:text-ink hover:shadow-xs"
          >
            Enquire
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => openEnquiry()}
            className="rounded-full border border-ink bg-ink px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white"
          >
            Enquire
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-paper-line bg-white text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-paper-line bg-white/98 px-6 py-6 shadow-2xl backdrop-blur-2xl lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-3">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-2 text-sm font-bold uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-4 pt-4 border-t border-paper-line flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setOpen(false);
                    openEnquiry();
                  }}
                  className="flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-sm"
                >
                  Enquire Now <ArrowUpRight className="h-4 w-4" />
                </button>

                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp ({site.phone})
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
