"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, MessageCircle, Sparkles } from "lucide-react";
import { site } from "@/lib/site";
import { useEnquiry } from "@/context/enquiry-context";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { openEnquiry } = useEnquiry();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-3 sm:top-4 z-50 px-3 sm:px-5 pointer-events-none">
      {/* Floating pill container - NO ugly full-width lines */}
      <div
        className={`mx-auto flex items-center justify-between rounded-full border border-ink/[0.08] bg-white/90 shadow-[0_8px_30px_rgba(13,20,32,0.06)] backdrop-blur-2xl transition-all duration-300 ease-out pointer-events-auto ${
          scrolled
            ? "max-w-4xl py-2 px-4 sm:px-5 shadow-[0_12px_36px_rgba(13,20,32,0.10)] ring-1 ring-black/[0.04]"
            : "max-w-5xl py-2.5 px-5 sm:px-6 ring-1 ring-black/[0.02]"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center transition-transform duration-200 hover:opacity-90"
          aria-label="CreateVerse home"
        >
          <Image
            src="/logo.png"
            alt="CreateVerse — Redefining Digital"
            width={320}
            height={132}
            priority
            className={`w-auto transition-all duration-300 ease-out ${
              scrolled ? "h-7 sm:h-8" : "h-8 sm:h-9"
            }`}
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {site.nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                  active
                    ? "bg-ink text-white shadow-xs"
                    : "text-ink/70 hover:bg-paper-soft hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTAs: WhatsApp + Enquire Now */}
        <div className="hidden items-center gap-2 sm:flex">
          {/* WhatsApp Direct Connect */}
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-50/80 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition-all hover:bg-emerald-100 hover:border-emerald-500/40"
            title="Chat directly with us on WhatsApp"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="hidden lg:inline">{site.phone}</span>
            <span className="lg:hidden">WhatsApp</span>
          </a>

          {/* Enquire Now Button (Opens Modal) */}
          <button
            onClick={() => openEnquiry()}
            className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-1.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-accent hover:shadow-md hover:shadow-accent/20 sm:text-xs"
          >
            <span>Enquire Now</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={() => openEnquiry()}
            className="rounded-full bg-ink px-3 py-1 text-xs font-bold text-white shadow-xs"
          >
            Enquire
          </button>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full border border-paper-line bg-white text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-sm overflow-hidden rounded-3xl border border-paper-line bg-white/95 p-4 shadow-2xl backdrop-blur-2xl pointer-events-auto sm:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3.5 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-paper hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-2 pt-2 border-t border-paper-line/70 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setOpen(false);
                    openEnquiry();
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl bg-ink px-4 py-2.5 text-xs font-bold text-white shadow-sm"
                >
                  Enquire Now <ArrowUpRight className="h-4 w-4" />
                </button>

                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp ({site.phone})
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
