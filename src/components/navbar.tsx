"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { useEnquiry } from "@/context/enquiry-context";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

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

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <header className="fixed inset-x-0 top-3 sm:top-5 z-50 px-4 sm:px-8 pointer-events-none">
      {/* Maximum luxury width floating pill dock */}
      <div
        className={`mx-auto flex items-center justify-between rounded-full bg-white/98 shadow-[0_10px_35px_rgba(11,15,25,0.08)] backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-auto border ${
          scrolled
            ? "max-w-6xl py-2.5 px-6 sm:px-10 shadow-[0_16px_44px_rgba(11,15,25,0.12)] border-black/[0.15]"
            : "max-w-7xl py-3.5 px-8 sm:px-12 border-black/[0.12]"
        }`}
      >
        {/* Brand Logo */}
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
            className={`w-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              scrolled ? "h-9 sm:h-11" : "h-11 sm:h-[50px] lg:h-[54px]"
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

        {/* Right CTA: Enquire Now */}
        <div className="hidden items-center gap-3 sm:flex shrink-0">
          <button
            onClick={() => openEnquiry()}
            className="pressable group inline-flex items-center gap-1.5 rounded-full bg-ink px-6 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-accent hover:shadow-md hover:shadow-accent/20"
          >
            <span>Enquire Now</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={() => openEnquiry()}
            className="pressable rounded-full bg-ink px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs"
          >
            Enquire
          </button>
          <button
            className="pressable flex h-9 w-9 items-center justify-center rounded-full border border-paper-line bg-white text-ink shadow-xs"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-paper-line bg-white/95 backdrop-blur-md md:hidden px-4 py-6 shadow-xl"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-2">
              <div className="mb-2 flex items-center justify-between border-b border-stone-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-ink/75">Navigation</span>
              </div>
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={true}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3.5 py-2.5 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:bg-[#F8FAFC] hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-3 pt-3 border-t border-stone-200 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setOpen(false);
                    openEnquiry();
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm"
                >
                  Enquire Now <ArrowUpRight className="h-4 w-4" />
                </button>

                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm"
                >
                  <WhatsAppIcon className="h-4 w-4 text-white" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
