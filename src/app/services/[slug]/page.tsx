import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  Lock,
  ShieldCheck,
  Award,
  Clock,
  ArrowRight,
  ChevronRight,
  Target,
  Zap,
  Flame,
  Layers,
  Sparkles,
} from "lucide-react";
import { getService, services } from "@/lib/services";
import { getServiceMetrics } from "@/lib/service-metrics";
import { getServiceDiagnosis } from "@/lib/service-diagnosis";
import { iconMap } from "@/components/services-grid";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";
import Faq from "@/components/faq";
import ServiceCta from "@/components/service-cta";
import ServiceHeroButtons from "@/components/service-hero-buttons";
import { caseStudies } from "@/components/case-studies";
import { serviceSeoKeywords, getServiceJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return services.filter((s) => s.slug !== "political-management").map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const keywords = serviceSeoKeywords[service.slug] ?? [
    service.name,
    `${service.name} agency India`,
    `${service.name} services`,
    "performance marketing agency",
    "lead generation company India",
  ];

  const serviceUrl = `https://createverse.in/services/${service.slug}`;

  return {
    title: `${service.name} — Growth & Digital Acquisition | CreateVerse`,
    description: service.description,
    keywords,
    alternates: {
      canonical: serviceUrl,
    },
    openGraph: {
      title: `${service.name} — CreateVerse`,
      description: service.tagline,
      url: serviceUrl,
      siteName: "CreateVerse",
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: `${service.name} — CreateVerse`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} — CreateVerse`,
      description: service.tagline,
      images: ["/logo.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon];
  const metrics = getServiceMetrics(service.slug);
  const diagnosis = getServiceDiagnosis(service.slug, service.category);
  const related = services.filter((s) => s.slug !== service.slug && s.priority).slice(0, 3);
  const relatedCase = caseStudies.find((c) => c.slug === service.slug);
  const serviceJsonLd = getServiceJsonLd(service);

  const playbookPhases = [
    {
      phase: "Phase 01",
      timeline: "Days 1 - 10",
      title: service.process[0]?.title ?? "Audit & Ground Intelligence",
      desc: service.process[0]?.desc ?? "Deep audit of competitor landscape, audience segments, and historic funnel leakages.",
    },
    {
      phase: "Phase 02",
      timeline: "Days 11 - 25",
      title: service.process[1]?.title ?? "Architecture & Creative Engine",
      desc: service.process[1]?.desc ?? "Engineering high-converting landing pages, qualification logic, ad creatives, and CRM webhooks.",
    },
    {
      phase: "Phase 03",
      timeline: "Days 26 - 60",
      title: service.process[2]?.title ?? "Multi-Channel Launch & Scaling",
      desc: service.process[2]?.desc ?? "Systematic rollout across target channels with aggressive audience testing and budget allocation.",
    },
    {
      phase: "Phase 04",
      timeline: "Day 61 Onwards",
      title: service.process[3]?.title ?? "Optimization & Compounding",
      desc: service.process[3]?.desc ?? "Weekly conversion rate optimization, creative refreshment, and scaling verified return on capital.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {/* 1. Grand Editorial Hero Section */}
      <section className="relative overflow-hidden bg-paper pt-[58px] sm:pt-[76px]">
        <div className="dot-texture absolute inset-0 opacity-80 pointer-events-none" />
        <div className="hidden sm:block absolute -left-28 top-16 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(255,237,213,0.7)_0%,rgba(255,237,213,0.2)_40%,transparent_70%)] pointer-events-none" />
        <div className="hidden sm:block absolute -right-28 top-12 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(224,242,254,0.6)_0%,rgba(224,242,254,0.2)_40%,transparent_70%)] pointer-events-none" />

        <div className="container-site relative pb-12 sm:pb-20 pt-2.5 sm:pt-16 lg:pb-24 lg:pt-24">
          <Reveal>
            <nav className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-ink/70" aria-label="Breadcrumb">
              <Link href="/services" prefetch={true} className="transition-colors hover:text-accent">Services</Link>
              <span>/</span>
              <span className="text-ink font-bold">{service.name}</span>
            </nav>

            <div className="mt-4 sm:mt-6 inline-flex items-center gap-2 rounded-full border border-black/[0.12] bg-white px-3.5 py-1.5 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="hidden sm:inline-flex absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {Icon && <Icon className="h-3.5 w-3.5 text-accent" />}
              <span className="text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.2em] text-ink">
                {service.category} Practice · Verified Architecture
              </span>
            </div>

            <h1 className="text-balance mt-3 sm:mt-5 max-w-4xl font-display text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tightest text-ink leading-[1.08]">
              {service.name}
            </h1>

            <p className="mt-3 sm:mt-6 max-w-3xl text-sm sm:text-xl font-bold leading-snug text-ink/90">
              {service.tagline}
            </p>

            <p className="mt-2.5 sm:mt-4 max-w-3xl text-xs sm:text-base leading-relaxed text-ink/80 font-normal">
              {service.description}
            </p>

            <ServiceHeroButtons serviceName={service.name} />
          </Reveal>

          {/* 4 Verified Performance Metric Cards */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {metrics.map((m, idx) => (
              <Reveal key={m.label} delay={idx * 0.08}>
                <div className="rounded-2xl border border-stone-200/90 bg-white p-4 sm:p-6 shadow-card hover:border-accent/40 transition-all duration-200 hover:-translate-y-0.5">
                  <span className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-accent">
                    {m.value}
                  </span>
                  <p className="mt-1 font-display text-xs sm:text-sm font-bold text-ink">{m.label}</p>
                  <p className="mt-0.5 text-[11px] sm:text-xs text-stone-500 font-normal">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Problem Diagnosis vs Growth Architecture */}
      <section className="border-y border-stone-200 bg-white py-14 sm:py-20 lg:py-28">
        <div className="container-site">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                {diagnosis.eyebrow}
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
                {diagnosis.sectionTitle}
              </h2>
              <p className="mt-3 text-xs sm:text-base leading-relaxed text-ink/80 font-normal">
                {diagnosis.sectionDesc}
              </p>
            </div>
          </Reveal>

          <div className="mt-8 sm:mt-12 grid gap-6 lg:grid-cols-2">
            {/* The Industry Problem Card */}
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl sm:rounded-3xl border border-rose-200/80 bg-rose-50/40 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-rose-700">
                    <span>The Flawed Approach</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg sm:text-2xl font-bold text-ink">
                    {service.problem.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-base leading-relaxed text-stone-700 font-normal">
                    {service.problem.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-rose-200/60 text-xs font-semibold text-rose-800">
                  {diagnosis.problemResult}
                </div>
              </div>
            </Reveal>

            {/* The CreateVerse Solution Card */}
            <Reveal delay={0.16}>
              <div className="h-full rounded-2xl sm:rounded-3xl border border-accent/30 bg-accent/[0.03] p-6 sm:p-8 shadow-card flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-accent">
                    <span>{diagnosis.solutionBadge}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg sm:text-2xl font-bold text-ink">
                    {diagnosis.solutionTitle}
                  </h3>
                  <p className="mt-3 text-xs sm:text-base leading-relaxed text-ink/80 font-normal">
                    {diagnosis.solutionDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-accent/20 text-xs font-semibold text-accent">
                  {diagnosis.solutionResult}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Core Strategic Deliverables (What We Do) */}
      <section className="relative bg-paper py-14 sm:py-20 lg:py-28">
        <div className="container-site">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Complete Architecture
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
                Everything Included, End-to-End
              </h2>
              <p className="mt-3 text-xs sm:text-base leading-relaxed text-ink/80 font-normal">
                {diagnosis.deliverablesIntro}
              </p>
            </div>
          </Reveal>

          <Stagger className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6" delayChildren={0.06}>
            {service.deliverables.map((d, idx) => (
              <StaggerItem key={d} className="h-full">
                <div className="group h-full flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-5 sm:p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-lift">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl bg-accent/[0.08] text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 bg-stone-100 rounded-full px-2.5 py-1">
                        Module 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-sm sm:text-base font-bold text-ink group-hover:text-accent transition-colors">
                      {d}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1 text-[11px] font-bold text-accent">
                    <span>Verified Deliverable</span>
                    <ChevronRight className="h-3 w-3" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 4. The 4-Phase Execution Playbook (Timeline) */}
      <section id="how-we-work" className="relative bg-white py-14 sm:py-20 lg:py-28 border-t border-stone-200 scroll-mt-24">
        <div className="container-site">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Execution Methodology
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
                The 4-Phase Deployment Playbook
              </h2>
              <p className="mt-3 text-xs sm:text-base leading-relaxed text-ink/80 font-normal">
                Structured ramp-up from market research to full multi-channel acquisition and compounding pipeline.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 sm:mt-16 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {playbookPhases.map((p, idx) => (
              <Reveal key={p.phase} delay={idx * 0.08}>
                <div className="h-full rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-[#F8FAFC] p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:border-accent/50 transition-all hover:bg-white">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xs font-bold uppercase tracking-widest text-accent">
                        {p.phase}
                      </span>
                      <span className="text-[10px] font-semibold text-stone-500 bg-white border border-stone-200 px-2 py-0.5 rounded-full">
                        {p.timeline}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-sm sm:text-base font-bold text-ink">
                      {p.title}
                    </h3>

                    <p className="mt-2 text-xs text-stone-600 font-normal leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center gap-1.5 text-[10.5px] font-semibold text-emerald-700">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                    <span>Quality Check Gate</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Case Study Benchmark if available */}
          {relatedCase && (
            <Reveal delay={0.15}>
              <div className="mt-10 sm:mt-16 rounded-2xl sm:rounded-3xl border border-stone-200 bg-[#F8FAFC] p-5 sm:p-10 shadow-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-stone-200 pb-4 sm:pb-6 mb-4 sm:mb-8">
                  <div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent">
                      Verified Engagement Benchmark
                    </span>
                    <h4 className="mt-1.5 font-display text-lg sm:text-2xl font-bold text-ink">
                      {relatedCase.title}
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm text-ink/75 max-w-2xl leading-relaxed">
                      {relatedCase.summary}
                    </p>
                  </div>
                  <span className="inline-flex self-start sm:self-center rounded-full bg-white border border-stone-200 px-3.5 py-1.5 text-xs font-bold text-ink shadow-xs">
                    {relatedCase.tag}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-6">
                  {relatedCase.stats.map((s) => (
                    <div key={s.label} className="rounded-xl sm:rounded-2xl border border-stone-200/80 bg-white p-3 sm:p-5 text-center shadow-xs">
                      <p className="font-display text-base sm:text-3xl font-bold text-ink leading-tight">{s.value}</p>
                      <p className="mt-0.5 sm:mt-1 text-[9.5px] sm:text-xs font-bold uppercase tracking-wider text-ink/70 truncate">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          {/* What you get + Who it serves */}
          <div className="mt-14 sm:mt-20 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-card h-full">
                <h3 className="font-display text-lg sm:text-2xl font-bold text-ink">
                  Core Mandate Benefits
                </h3>
                <ul className="mt-5 space-y-3">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed text-ink/90 font-medium">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-card h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-ink">
                    Who This Is Built For
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 font-normal">
                    Engineered specifically for high-ticket businesses where pipeline quality dictates revenue.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.industries.map((ind) => (
                      <span key={ind} className="rounded-full border border-stone-200 bg-[#F8FAFC] px-3.5 py-1.5 text-xs font-semibold text-ink shadow-2xs">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-bold text-accent">
                  <Sparkles className="h-4 w-4" />
                  <span>Tailored acquisition frameworks per vertical</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Air-Gapped Security, SLA & Governance Banner */}
      <section className="relative bg-[#090D15] py-14 sm:py-20 text-white">
        <div className="container-site">
          <Reveal>
            <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-12">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pb-6 border-b border-white/10">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-accent/20 text-accent border border-accent/30 shrink-0">
                  <Lock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-3xl font-bold text-white">
                    Strict Performance SLAs &amp; Governance
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-stone-400 font-normal">
                    Zero lock-ins, zero black boxes. Complete transparency from ad account to qualified customer.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm text-stone-300 font-normal">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Legally binding NDAs signed prior to account audits and campaign onboarding.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>100% Client Data Ownership: You own your ad accounts, pixel data, and CRM lists.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Dedicated Senior Practice Director leading weekly strategy reviews and CRO sprints.</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Frequently Asked Questions */}
      <section className="bg-paper py-14 sm:py-20 lg:py-28">
        <div className="container-site grid gap-6 sm:gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Practice FAQ
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
              Straight Answers.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 font-normal">
              Common questions about our engagement terms, platform setups, and lead qualification guarantees.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-8">
            <Faq items={service.faqs} />
          </Reveal>
        </div>
      </section>

      {/* 7. Executive Strategy CTA & Related Practices */}
      <ServiceCta service={service} related={related} />
    </>
  );
}
