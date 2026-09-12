import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { getService, services } from "@/lib/services";
import { iconMap } from "@/components/services-grid";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";
import Faq from "@/components/faq";
import ServiceCta from "@/components/service-cta";
import ServiceHeroButtons from "@/components/service-hero-buttons";
import PoliticalClients from "@/components/political-clients";
import { caseStudies } from "@/components/case-studies";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.name, description: service.description };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon];
  const related = services.filter((s) => s.slug !== service.slug && s.priority).slice(0, 3);
  const relatedCase = caseStudies.find((c) => c.slug === service.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper pt-[76px]">
        <div className="dot-texture absolute inset-0 opacity-80 pointer-events-none" />
        <div className="absolute -left-40 top-28 h-[360px] w-[360px] rounded-full bg-brand-sun/80 blur-3xl pointer-events-none" />
        <div className="absolute -right-32 top-16 h-[360px] w-[500px] rounded-full bg-brand-sky/40 blur-3xl pointer-events-none" />
        <div className="container-site relative pb-20 pt-16 sm:pt-24 lg:pb-24 lg:pt-28">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs font-semibold text-ink/70" aria-label="Breadcrumb">
              <Link href="/services" className="transition-colors hover:text-accent">Services</Link>
              <span>/</span>
              <span className="text-ink font-bold">{service.name}</span>
            </nav>
            <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white shadow-lift">
              {Icon && <Icon className="h-7 w-7" />}
            </div>
            <h1 className="text-balance mt-7 max-w-3xl font-display text-5xl font-bold tracking-tightest text-ink sm:text-6xl">
              {service.name}
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-bold leading-snug text-ink">{service.tagline}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/80 font-normal">{service.description}</p>
            <ServiceHeroButtons serviceName={service.name} />
          </Reveal>
        </div>
      </section>

      {/* Problem */}
      <section className="border-y border-stone-200 bg-white py-20 lg:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-orange">The Problem</p>
            <h2 className="text-balance mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {service.problem.title}
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-ink/80 font-normal lg:pt-12">{service.problem.desc}</p>
          </Reveal>
        </div>
      </section>

      {/* What we do / deliverables */}
      <section className="relative overflow-hidden bg-paper py-20 lg:py-28">
        <div className="dot-texture absolute inset-0 opacity-80 pointer-events-none" />
        <div className="absolute -left-44 top-24 h-[400px] w-[400px] rounded-full bg-brand-sun/70 blur-3xl pointer-events-none" />
        <div className="absolute -right-44 bottom-12 h-[380px] w-[380px] rounded-full bg-brand-sky/35 blur-3xl pointer-events-none" />
        <div className="container-site relative">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">What We Do</p>
            <h2 className="text-balance mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Everything included, end to end.
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2" delayChildren={0.06}>
            {service.deliverables.map((d) => (
              <StaggerItem key={d}>
                <div className="flex items-start gap-3.5 rounded-xl border border-black/[0.12] bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lift">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <p className="text-sm leading-relaxed text-ink/90 font-medium">{d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Process & How We Work */}
      <section id="how-we-work" className="bg-white py-20 lg:py-28 scroll-mt-24 border-t border-stone-200">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-orange">Execution Architecture</p>
            <h2 className="text-balance mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              How we work &amp; run campaigns.
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" delayChildren={0.1}>
            {service.process.map((p, i) => (
              <StaggerItem key={p.title}>
                <div className="h-full rounded-2xl border border-stone-200 bg-[#F8FAFC] p-7 transition-all duration-300 hover:border-accent hover:bg-white hover:shadow-card">
                  <span className={`font-display text-4xl font-bold tracking-tight ${i % 2 === 0 ? "text-accent/60" : "text-brand-orange/60"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink/80 font-normal">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Verified Case Study / Engagement Benchmark if available */}
          {relatedCase && (
            <Reveal delay={0.15}>
              <div className="mt-14 rounded-3xl border border-stone-200 bg-[#F8FAFC] p-8 sm:p-10 shadow-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-6 mb-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
                      Verified Engagement Outcome
                    </span>
                    <h4 className="mt-2 font-display text-2xl font-bold text-ink">
                      {relatedCase.title}
                    </h4>
                    <p className="mt-2 text-sm text-ink/75 max-w-2xl leading-relaxed">
                      {relatedCase.summary}
                    </p>
                  </div>
                  <span className="inline-flex self-start sm:self-center rounded-full bg-white border border-stone-200 px-4 py-1.5 text-xs font-bold text-ink shadow-xs">
                    {relatedCase.tag}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {relatedCase.stats.map((s) => (
                    <div key={s.label} className="rounded-2xl border border-stone-200/80 bg-white p-5 text-center shadow-xs">
                      <p className="font-display text-3xl font-bold text-ink">{s.value}</p>
                      <p className="mt-1 text-xs font-bold uppercase tracking-wider text-ink/70">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          {/* Benefits + industries */}
          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <Reveal>
              <h3 className="font-display text-2xl font-bold text-ink">What you get</h3>
              <ul className="mt-6 space-y-3.5">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-ink/90 font-medium">
                    <span className="mt-[6px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-sky">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.12}>
              <h3 className="font-display text-2xl font-bold text-ink">Who it serves</h3>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {service.industries.map((ind) => (
                  <span key={ind} className="rounded-full border border-black/[0.12] bg-white px-4 py-2 text-sm font-semibold text-ink shadow-xs">
                    {ind}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Politician Clients if on Political Management */}
      {service.slug === "political-management" && <PoliticalClients />}

      {/* FAQ */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">FAQ</p>
            <h2 className="text-balance mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Straight answers.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-8">
            <Faq items={service.faqs} />
          </Reveal>
        </div>
      </section>

      {/* Executive Strategy CTA & Related Services */}
      <ServiceCta service={service} related={related} />
    </>
  );
}
