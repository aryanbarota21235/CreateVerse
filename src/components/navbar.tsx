"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
    <header
      className={`fixed inset-x-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "top-3 sm:top-4 px-4 sm:px-6 md:px-8"
          : "top-0 px-0"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between ${
          scrolled
            ? "max-w-5xl rounded-full border border-ink/[0.09] bg-white/80 px-4 py-2 sm:px-6 sm:py-2.5 shadow-[0_12px_36px_rgba(13,20,32,0.08)] backdrop-blur-2xl ring-1 ring-white/70"
            : "container-site h-20 sm:h-[84px] border-b border-paper-line/50 bg-paper/70 backdrop-blur-md"
        }`}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 transition-transform duration-300 hover:opacity-90"
          aria-label="CreateVerse home"
        >
          <Image
            src="/logo.png"
            alt="CreateVerse — Redefining Digital"
            width={320}
            height={132}
            priority
            className={`w-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              scrolled ? "h-7 sm:h-8" : "h-9 sm:h-11"
            }`}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className={`hidden items-center transition-all duration-500 lg:flex ${
            scrolled ? "gap-1" : "gap-2"
          }`}
          aria-label="Primary"
        >
          {site.nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-ink/[0.06] text-ink font-semibold"
                    : "text-ink/65 hover:bg-ink/[0.04] hover:text-ink"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Status Badge */}
        <div className="hidden items-center gap-3 lg:flex">
          {!scrolled && (
            <span className="hidden items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 xl:inline-flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Accepting Clients
            </span>
          )}

          <Link
            href="/contact"
            className={`group inline-flex items-center gap-1.5 rounded-full bg-ink font-medium text-white shadow-sm transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-accent/25 ${
              scrolled
                ? "px-4 py-2 text-xs sm:text-sm"
                : "px-5 py-2.5 text-sm"
            }`}
          >
            <span>Start a Project</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={`flex items-center justify-center rounded-full border border-paper-line bg-white/90 text-ink transition-all lg:hidden ${
            scrolled ? "h-9 w-9" : "h-10 w-10"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-lg overflow-hidden rounded-3xl border border-paper-line bg-white/95 p-5 shadow-2xl backdrop-blur-2xl lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1.5">
              <div className="mb-2 flex items-center justify-between border-b border-paper-line/60 pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink/40">Navigation</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Open for inquiries
                </span>
              </div>
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-base font-medium text-ink/80 transition-colors hover:bg-paper hover:text-accent"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-ink/30" />
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
              >
                Start a Project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
