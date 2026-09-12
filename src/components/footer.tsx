"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { useEnquiry } from "@/context/enquiry-context";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export default function Footer() {
  const pathname = usePathname();
  const featured = services.filter((s) => s.priority);
  const { openEnquiry } = useEnquiry();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-ink text-white">
      <div className="container-site py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block" aria-label="CreateVerse home">
              <span className="font-display text-3xl font-bold tracking-tight text-white">
                CREATEVERSE
              </span>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.35em] text-white/70">
                Redefining Digital
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/80 font-normal">
              A growth and digital acquisition partner. We generate leads, build digital acquisition
              systems and manage high-impact campaigns for real estate, immigration, political
              organizations and ambitious businesses.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                onClick={() => openEnquiry()}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-ink transition-all hover:bg-accent hover:text-white shadow-sm"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-4 py-2.5 text-xs font-bold text-emerald-300 transition-all hover:bg-emerald-500/25"
              >
                <WhatsAppIcon className="h-4 w-4 text-emerald-400" />
                <span>WhatsApp ({site.phone})</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">Core Services</h3>
            <ul className="mt-5 space-y-3">
              {featured.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm font-medium text-white/85 transition-colors hover:text-brand-orange">
                    {s.shortName ?? s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm font-bold text-brand-orange transition-colors hover:text-brand-orangedark">
                  All services →
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">Company</h3>
            <ul className="mt-5 space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm font-medium text-white/85 transition-colors hover:text-brand-orange">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">Contact &amp; WhatsApp</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/85 font-medium">
              <li>
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-emerald-400 hover:underline">
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>{site.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition-colors hover:text-brand-orange">
                  <Mail className="h-4 w-4 text-white/70" />
                  <span>{site.email}</span>
                </a>
              </li>
              <li className="text-xs text-white/70">{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-line pt-8 text-xs font-medium text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CreateVerse. All rights reserved.</p>
          <p>Leads. Growth Systems. High-Impact Campaigns.</p>
        </div>
      </div>
    </footer>
  );
}
