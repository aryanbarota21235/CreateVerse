"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { useEnquiry } from "@/context/enquiry-context";

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

  const coreServices = services.filter((s) => s.priority).slice(0, 5);

  return (
    <footer className="bg-[#090D15] text-white border-t border-white/[0.08]">
      <div className="container-site pt-10 pb-14 sm:pt-12 sm:pb-16 lg:pt-12 lg:pb-18">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" prefetch={true} className="inline-block transition-opacity hover:opacity-90" aria-label="CreateVerse home">
              <Image
                src="/logo.png"
                alt="CreateVerse"
                width={280}
                height={115}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-stone-400 font-normal">
              Digital growth and acquisition partner. We engineer verified lead generation systems, 24/7 political war rooms, and performance marketing operations.
            </p>

            {/* Single clean Enquire button — NO tacky WhatsApp button */}
            <div className="pt-2">
              <button
                onClick={() => openEnquiry()}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold text-ink transition-all hover:bg-stone-200 active:scale-[0.98]"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Core Practice Areas */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Practice Areas
            </h3>
            <ul className="mt-5 space-y-3">
              {coreServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    prefetch={true}
                    className="text-sm text-stone-400 transition-colors hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  prefetch={true}
                  className="text-sm font-semibold text-white/90 hover:text-accent transition-colors"
                >
                  All Practice Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    prefetch={true}
                    className="text-sm text-stone-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details (Clean, no tacky badges) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Contact Desk
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-stone-400 font-normal">
              <li>
                <a
                  href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-stone-500 shrink-0" />
                  <span>{site.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 text-stone-500 shrink-0" />
                  <span>{site.email}</span>
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-stone-400 text-xs hover:text-white transition-colors group"
                >
                  <MapPin className="h-4 w-4 text-stone-500 shrink-0 mt-0.5 group-hover:text-accent" />
                  <span className="leading-relaxed">{site.location}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Clean Bottom Bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.08] pt-8 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CreateVerse. All rights reserved.</p>
          <p className="hidden md:block">
            Strictly Confidential · Data Protected Under Mutual Non-Disclosure
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-stone-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
