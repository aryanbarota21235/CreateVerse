import type { Metadata } from "next";
import { Lock, ShieldCheck } from "lucide-react";
import PageHero from "@/components/page-hero";
import FinalCTA from "@/components/final-cta";
import WhyCreateVerse from "@/components/why-createverse";
import ProcessSection from "@/components/process-section";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "About CreateVerse — Growth & Digital Acquisition Partner",
  description:
    "Learn about CreateVerse: our operating philosophy, leadership standards, data sovereignty principles, and track record turning digital attention into verified commercial revenue.",
  keywords: [
    "about CreateVerse",
    "growth marketing leadership",
    "digital acquisition partner India",
    "data sovereignty marketing",
    "performance marketing agency team",
  ],
  alternates: {
    canonical: "https://createverse.in/about",
  },
  openGraph: {
    title: "About CreateVerse — Growth & Digital Acquisition Partner",
    description:
      "We exist to turn attention into revenue. Systems over stunts, revenue is the brief, and depth over breadth.",
    url: "https://createverse.in/about",
    siteName: "CreateVerse",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "About CreateVerse" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About CreateVerse — Growth & Digital Acquisition Partner",
    description:
      "We exist to turn attention into revenue. Systems over stunts, revenue is the brief, and depth over breadth.",
    images: ["/logo.png"],
  },
};

const agencyStats = [
  { value: "₹48.6 Cr+", label: "Client Pipeline Generated", desc: "Commercial & residential bookings" },
  { value: "14.2M+", label: "Verified Audience Reach", desc: "Across active campaign accounts" },
  { value: "98.5%", label: "Client Retainer Retention", desc: "Partnerships built on verified revenue" },
  { value: "4.2x", label: "Average Portfolio ROAS", desc: "Capital efficiency across ad accounts" },
];

const principles = [
  { title: "Revenue is the brief", desc: "Impressions and likes don't pay salaries. Every engagement is framed around customers acquired and pipeline built." },
  { title: "Systems over stunts", desc: "We build repeatable acquisition machines — funnels, follow-up, tracking — not one-off campaigns that fade." },
  { title: "Honesty over vanity", desc: "Placeholder metrics where data isn't verified, plain reporting where it is. Trust compounds faster than spin." },
  { title: "Depth over breadth", desc: "We'd rather be exceptional in real estate, immigration and political work than average at everything." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CreateVerse"
        title={<>We exist to turn attention into <span className="text-accent">revenue.</span></>}
        description="CreateVerse is a growth and digital acquisition partner. We combine strategy, media, creative, and technology to generate leads, acquire customers, and run high-impact campaigns — for real estate developers, immigration businesses, political organizations, and ambitious brands."
      />

      {/* 4 Core Agency Metrics */}
      <section className="bg-paper pb-10 sm:pb-16 -mt-2 sm:-mt-4">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {agencyStats.map((s, idx) => (
              <Reveal key={s.label} delay={idx * 0.08}>
                <div className="rounded-2xl border border-stone-200/90 bg-white p-4 sm:p-6 shadow-card hover:border-accent/40 transition-all duration-200 hover:-translate-y-0.5">
                  <span className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-accent">
                    {s.value}
                  </span>
                  <p className="mt-1 font-display text-xs sm:text-sm font-bold text-ink">{s.label}</p>
                  <p className="mt-0.5 text-[11px] sm:text-xs text-stone-500 font-normal">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Core Operating Principles */}
      <section className="bg-paper pb-16 sm:pb-24 lg:pb-32">
        <div className="container-site">
          <Reveal>
            <div className="mb-6 sm:mb-10">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Our Operating Philosophy
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                Built on Four Non-Negotiables
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-6">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-xl sm:rounded-2xl border border-stone-200/90 bg-white p-3.5 sm:p-8 shadow-card transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lift">
                  <span className={`font-display text-xs sm:text-sm font-bold tracking-widest ${i % 2 === 0 ? "text-accent" : "text-brand-orange"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 sm:mt-4 font-display text-xs sm:text-2xl font-bold text-ink leading-snug">{p.title}</h3>
                  <p className="mt-1 sm:mt-3 text-[10.5px] sm:text-sm leading-relaxed text-ink/80 font-normal line-clamp-3 sm:line-clamp-none">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Air-Gapped Trust Banner */}
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
                    Data Sovereignty &amp; Transparency Guarantee
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-stone-400 font-normal">
                    We treat your business and client data with institutional-grade security protocols.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm text-stone-300 font-normal">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Confidentiality: Enforced non-compete clauses within local competitor radius.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Direct Asset Control: You retain 100% intellectual property of all ad creatives.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Zero Markup Fraud: Direct billing to ad networks with no hidden margins.</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <WhyCreateVerse />
      <ProcessSection />
      <FinalCTA />
    </>
  );
}
