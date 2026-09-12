"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/services";
import { iconMap } from "@/components/services-grid";

export default function ServicesExplorer() {
  const priority = services.filter((s) => s.priority);
  const rest = services.filter((s) => !s.priority);
  const [active, setActive] = useState(0);
  const service = priority[active];
  const Icon = iconMap[service.icon];
  const orange = active % 2 === 1;

  return (
    <section className="bg-white py-24 lg:py-32" id="services">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Services</p>
            <h2 className="text-balance mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tightest text-ink sm:text-5xl">
              Everything growth needs — <span className="text-brand-gradient">explore it right here.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:border-accent hover:text-accent"
          >
            View all services
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Service list */}
          <div className="lg:col-span-5" role="tablist" aria-label="Priority services">
            <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {priority.map((s, i) => {
                const SIcon = iconMap[s.icon];
                const isActive = i === active;
                return (
                  <button
                    key={s.slug}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(i)}
                    className={`group flex min-w-[240px] items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 lg:min-w-0 lg:p-5 ${
                      isActive
                        ? "border-ink bg-ink text-white shadow-lift"
                        : "border-paper-line bg-paper text-ink hover:border-accent/50 hover:bg-white hover:shadow-card"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        isActive
                          ? i % 2 === 1
                            ? "bg-brand-orange text-white"
                            : "bg-accent text-white"
                          : "bg-white text-ink/45 shadow-card group-hover:text-accent"
                      }`}
                    >
                      {SIcon && <SIcon className="h-5 w-5" />}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-display text-base font-semibold sm:text-lg">
                        {s.shortName ?? s.name}
                      </span>
                      <span className={`block truncate text-xs ${isActive ? "text-white/55" : "text-ink/45"}`}>
                        {s.category}
                      </span>
                    </span>
                    <ArrowRight
                      className={`ml-auto h-4 w-4 shrink-0 transition-all ${
                        isActive ? "translate-x-0 text-brand-orange opacity-100" : "-translate-x-1 opacity-0 group-hover:opacity-40"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.21, 0.65, 0.35, 1] }}
                className="relative h-full overflow-hidden rounded-3xl bg-ink p-8 text-white shadow-lift sm:p-10"
                role="tabpanel"
              >
                <div
                  className={`absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl ${
                    orange ? "bg-brand-orange/20" : "bg-accent/20"
                  }`}
                />
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <span className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${orange ? "bg-brand-orange" : "bg-accent"}`}>
                      {Icon && <Icon className="h-7 w-7" />}
                    </span>
                    <div>
                      <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${orange ? "text-brand-orange" : "text-accent"}`}>
                        {service.category}
                      </p>
                      <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{service.name}</h3>
                    </div>
                  </div>

                  <p className="mt-5 text-lg font-medium leading-snug text-white/85">{service.tagline}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{service.description}</p>

                  <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
                    {service.deliverables.slice(0, 4).map((d) => (
                      <div key={d} className="flex items-start gap-2.5 rounded-xl bg-white/[0.06] p-3.5">
                        <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${orange ? "text-brand-orange" : "text-accent"}`} />
                        <p className="text-[13px] leading-snug text-white/75">{d}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
                    <Link
                      href={`/services/${service.slug}`}
                      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all ${
                        orange ? "bg-brand-orange hover:bg-brand-orangedark" : "bg-accent hover:bg-accent-dim"
                      }`}
                    >
                      Explore {service.shortName ?? service.name}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link href="/contact" className="text-sm font-semibold text-white/70 transition-colors hover:text-white">
                      Get a Growth Strategy →
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Supporting services */}
        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/40">Plus, full-stack support</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {rest.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group inline-flex items-center gap-2 rounded-full border border-paper-line bg-paper px-4 py-2.5 text-sm font-medium text-ink/75 transition-all hover:border-accent/50 hover:bg-white hover:text-accent hover:shadow-card"
              >
                {s.name}
                <ArrowUpRight className="h-3.5 w-3.5 text-ink/25 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
