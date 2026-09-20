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
      <div className="container-site pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-12 lg:pb-18">
        <div className="grid grid-cols-2 gap-x-6 gap-y-7 sm:gap-12 lg:grid-cols-12">
          {/* Column 1: Brand & Logo */}
          <div className="col-span-2 lg:col-span-4 space-y-3.5 sm:space-y-6">
            <Link href="/" prefetch={true} className="inline-block transition-opacity hover:opacity-90" aria-label="CreateVerse home">
              <Image
                src="/logo-footer.png"
                alt="CreateVerse — Redefining Digital"
                width={240}
                height={50}
                className="h-8 sm:h-11 w-auto object-contain"
              />
            </Link>

            <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-stone-400 font-normal">
              Digital growth and acquisition partner. We engineer verified lead generation systems, 24/7 political war rooms, and performance marketing operations.
            </p>

            {/* Single clean Enquire button — NO tacky WhatsApp button */}
            <div className="pt-1 sm:pt-2">
              <button
                onClick={() => openEnquiry()}
                className="pressable inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-xs font-bold text-ink transition-all hover:bg-stone-200"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Core Practice Areas */}
          <div className="col-span-1 lg:col-span-3">
            <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white">
              Practice Areas
            </h3>
            <ul className="mt-3 sm:mt-5 space-y-2 sm:space-y-2.5">
              {coreServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    prefetch={true}
                    className="text-xs sm:text-sm text-stone-400 transition-colors hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  prefetch={true}
                  className="text-xs sm:text-sm font-semibold text-white/90 hover:text-accent transition-colors"
                >
                  All Practice Areas &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Political Leadership Roster (Internal Link Authority) */}
          <div className="col-span-1 lg:col-span-3">
            <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white">
              Political Clients
            </h3>
            <ul className="mt-3 sm:mt-5 space-y-2 sm:space-y-2.5">
              <li>
                <Link
                  href="/clients/randeep-singh-surjewala"
                  prefetch={true}
                  className="text-xs sm:text-sm text-stone-400 transition-colors hover:text-white"
                >
                  Randeep Singh Surjewala
                </Link>
              </li>
              <li>
                <Link
                  href="/clients/aditya-surjewala"
                  prefetch={true}
                  className="text-xs sm:text-sm text-stone-400 transition-colors hover:text-white"
                >
                  Aditya Surjewala
                </Link>
              </li>
              <li>
                <Link
                  href="/clients/kewal-singh-dhillon"
                  prefetch={true}
                  className="text-xs sm:text-sm text-stone-400 transition-colors hover:text-white"
                >
                  Kewal Singh Dhillon
                </Link>
              </li>
              <li>
                <Link
                  href="/clients/gurkirat-singh-kotli"
                  prefetch={true}
                  className="text-xs sm:text-sm text-stone-400 transition-colors hover:text-white"
                >
                  Gurkirat Singh Kotli
                </Link>
              </li>
              <li>
                <Link
                  href="/clients/shamsher-singh-gogi"
                  prefetch={true}
                  className="text-xs sm:text-sm text-stone-400 transition-colors hover:text-white"
                >
                  Shamsher Singh Gogi
                </Link>
              </li>
              <li>
                <Link
                  href="/clients/bhupinder-lather"
                  prefetch={true}
                  className="text-xs sm:text-sm text-stone-400 transition-colors hover:text-white"
                >
                  Bhupinder Lather
                </Link>
              </li>
              <li>
                <Link
                  href="/clients/rajiv-mamuram-gonder"
                  prefetch={true}
                  className="text-xs sm:text-sm text-stone-400 transition-colors hover:text-white"
                >
                  Rajiv Mamuram Gonder
                </Link>
              </li>
              <li>
                <Link
                  href="/subhash-sudha"
                  prefetch={true}
                  className="text-xs sm:text-sm text-stone-400 transition-colors hover:text-white"
                >
                  Subhash Sudha
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  prefetch={true}
                  className="text-xs sm:text-sm font-semibold text-white/90 hover:text-accent transition-colors"
                >
                  All Political Clients &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Contact */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white">
              Company
            </h3>
            <ul className="mt-3 sm:mt-5 space-y-2 sm:space-y-2.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    prefetch={true}
                    className="text-xs sm:text-sm text-stone-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white">
              Contact Desk
            </h3>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm text-stone-400 font-normal">
              <li>
                <a
                  href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-stone-500 shrink-0" />
                  <span>{site.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-stone-500 shrink-0" />
                  <span>{site.email}</span>
                </a>
              </li>
              <li className="pt-0.5">
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-stone-400 text-xs hover:text-white transition-colors group"
                >
                  <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-stone-500 shrink-0 mt-0.5 group-hover:text-accent" />
                  <span className="leading-relaxed">{site.location}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Clean Bottom Bar */}
        <div className="mt-8 sm:mt-16 flex flex-col gap-3 sm:gap-4 border-t border-white/[0.08] pt-5 sm:pt-8 text-[11px] sm:text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
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
