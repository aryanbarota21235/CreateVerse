import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

export default function Footer() {
  const featured = services.filter((s) => s.priority);
  return (
    <footer className="bg-ink text-white">
      <div className="container-site py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block" aria-label="CreateVerse home">
              <span className="font-display text-3xl font-bold tracking-tight text-brand-gradient">
                CREATEVERSE
              </span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.35em] text-white/40">
                Redefining Digital
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/55">
              A growth and digital acquisition partner. We generate leads, build digital growth
              systems and manage high-impact campaigns for real estate, immigration, political
              organizations and ambitious businesses.
            </p>
            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:bg-brand-orange hover:text-white"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Core Services</h3>
            <ul className="mt-5 space-y-3">
              {featured.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-white/65 transition-colors hover:text-brand-orange">
                    {s.shortName ?? s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm font-medium text-brand-orange transition-colors hover:text-brand-orangedark">
                  All services →
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Company</h3>
            <ul className="mt-5 space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/65 transition-colors hover:text-brand-orange">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-brand-orange">
                  {site.email}
                </a>
              </li>
              <li>{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-line pt-8 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CreateVerse. All rights reserved.</p>
          <p>Leads. Growth Systems. High-Impact Campaigns.</p>
        </div>
      </div>
    </footer>
  );
}
