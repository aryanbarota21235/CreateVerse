"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ArrowUp, Phone, Mail, ShieldCheck, Clock, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { useEnquiry } from "@/context/enquiry-context";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export default function Footer() {
  const pathname = usePathname();
  const { openEnquiry } = useEnquiry();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#070A11] text-white overflow-hidden border-t border-white/[0.08]">
      {/* Subtle Ambient Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[650px] rounded-full bg-accent/10 blur-[130px]" />

      {/* Top Pre-Footer Agency Intake Banner */}
      <div className="relative border-b border-white/[0.08]">
        <div className="container-site py-12 sm:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Acquisition Architecture</span>
              </div>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Ready to build a predictable <span className="text-accent">acquisition system</span>?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base font-normal">
                We partner with property developers, political leadership, and ambitious enterprises to engineer high-converting digital pipelines.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => openEnquiry()}
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition-all hover:bg-accent-dim shadow-lg shadow-accent/20 active:scale-[0.98]"
              >
                <span>Schedule Consultation</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3.5 text-xs sm:text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-white/30"
              >
                <WhatsAppIcon className="h-4 w-4 text-emerald-400" />
                <span>WhatsApp (+91 91746-91846)</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Structural Navigation Columns */}
      <div className="container-site py-14 lg:py-18">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block" aria-label="CreateVerse home">
              <span className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white">
                CREATEVERSE
              </span>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.32em] text-accent">
                Redefining Digital
              </span>
            </Link>

            <p className="text-xs sm:text-sm leading-relaxed text-white/65 font-normal max-w-sm">
              CreateVerse engineers bespoke lead generation architectures, 24/7 political war rooms, and performance marketing engines designed for verified business outcomes.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-white/50 pt-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Confidential &amp; NDA Protected Operations</span>
            </div>
          </div>

          {/* Column 2: Specialized Practice Areas */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              Practice Areas
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-xs sm:text-sm font-medium text-white/70 transition-colors hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-xs font-bold text-accent transition-colors hover:text-white pt-1"
                >
                  <span>Explore all practice areas</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform & Company */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm font-medium text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => openEnquiry()}
                  className="text-xs sm:text-sm font-semibold text-white/90 transition-colors hover:text-accent"
                >
                  Request Strategy Intake
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Operational Desk */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              Direct Communication
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-white/75">
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-white transition hover:bg-white/[0.08] hover:border-white/20"
              >
                <WhatsAppIcon className="h-4 w-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-white/50 font-bold">WhatsApp Direct</span>
                  <span className="font-semibold text-white">{site.phone}</span>
                </div>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-white transition hover:bg-white/[0.08] hover:border-white/20"
              >
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-white/50 font-bold">Official Inquiries</span>
                  <span className="font-semibold text-white">{site.email}</span>
                </div>
              </a>

              <div className="flex items-center gap-2 text-xs text-white/55 px-1 pt-1">
                <MapPin className="h-3.5 w-3.5 text-white/40 shrink-0" />
                <span>{site.location} · Available Nationwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright, Confidentiality & Back to Top */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.08] pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CreateVerse. All rights reserved.</p>
          <p className="hidden md:block">
            Strictly Confidential · Data Protected Under Mutual Non-Disclosure
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-white/60 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
