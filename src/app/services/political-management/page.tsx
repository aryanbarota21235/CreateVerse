import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  Target,
  Users,
  Radio,
  BarChart3,
  Flame,
  ArrowRight,
  MessageSquare,
  Lock,
  Clock,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";
import { politicianClients } from "@/lib/politicians";
import { InstagramIcon, FacebookIcon, XIcon } from "@/components/social-icons";
import PoliticalHeroButtons from "./political-hero-buttons";
import PoliticalFaq from "./political-faq";

export const metadata: Metadata = {
  title: "Political Campaign Management & 24/7 Digital War Room",
  description:
    "Elite political campaign management, booth-level voter micro-targeting, narrative engineering, and 24/7 rapid response digital war rooms for elected leaders and ambitious candidates.",
};

const stats = [
  { value: "14.2M+", label: "Verified Targeted Reach", desc: "Constituency-wide hyper-targeted digital reach" },
  { value: "65+", label: "Constituencies Managed", desc: "Parliamentary, Assembly & Municipal campaigns" },
  { value: "< 12 Mins", label: "Rapid Counter-Response", desc: "Real-time fact-checking and opposition deflection" },
  { value: "24/7", label: "Active War Room Operations", desc: "Continuous monitoring, production and dispatch" },
];

const capabilities = [
  {
    icon: Target,
    title: "Booth-Level Voter Micro-Targeting",
    desc: "Segmenting voters by demographic, age cohort, occupation, and micro-constituency issues. Bespoke visual messaging delivered with pin-point precision across Meta, Google, and localized digital networks.",
    tag: "Data Intelligence",
  },
  {
    icon: Zap,
    title: "24/7 Rapid Response & Counter-Narrative",
    desc: "When opposition narratives or misinformation surface, our dedicated counter-propaganda desk detects, analyzes, and neutralizes them within 12 minutes with verified fact-checks and compelling video rebuttals.",
    tag: "Crisis Defense",
  },
  {
    icon: Flame,
    title: "Viral Short-Form Content & Speech Engine",
    desc: "High-retention Reels, Shorts, and speech excerpts edited to project unwavering leadership authority, empathy, and regional pride. Designed specifically to dominate organic algorithm feeds.",
    tag: "Narrative Dominance",
  },
  {
    icon: Radio,
    title: "Grassroots WhatsApp Broadcast Infrastructure",
    desc: "Structured multi-tier WhatsApp networks (Constituency -> Mandal -> Sector -> Booth) reaching up to 150,000+ local citizens directly on their phones with daily updates, rally schedules, and party commitments.",
    tag: "Direct Reach",
  },
  {
    icon: Users,
    title: "Local Influencer & Creator Army Mobilization",
    desc: "Vetting, onboarding, and orchestrating 40+ local community creators, cultural figures, and youth voices to deliver authentic, non-promotional third-party validation that resonates with swing voters.",
    tag: "Grassroots Trust",
  },
  {
    icon: BarChart3,
    title: "Real-Time Sentiment Intelligence & Polling",
    desc: "Continuous social listening and weekly digital pulse surveys across voter blocks. Delivers actionable weekly candidate briefings, speech talking points, and hyper-local grievance heatmaps.",
    tag: "Predictive Analytics",
  },
];

const playbook = [
  {
    phase: "Phase 01",
    timeline: "180 - 90 Days Out",
    title: "Ground Intelligence & Narrative Blueprint",
    points: [
      "Constituency digital census and voter perception mapping",
      "Core candidate narrative, vision document and slogan engineering",
      "Setting up secure communication channels and air-gapped data architecture",
    ],
  },
  {
    phase: "Phase 02",
    timeline: "90 - 30 Days Out",
    title: "Audience Scaling & Community Network Building",
    points: [
      "Aggressive organic follower acquisition and engagement scaling across platforms",
      "Deploying the multi-tiered WhatsApp community broadcasting apparatus",
      "Activation of local youth creators and grassroots influencer network",
    ],
  },
  {
    phase: "Phase 03",
    timeline: "30 - 7 Days Out",
    title: "Narrative Saturation & Counter-Propaganda Blitz",
    points: [
      "24/7 war room full deployment with 12-minute counter-narrative SLA",
      "Live broadcast of rallies, roadshows, and townhalls with multi-camera feeds",
      "High-frequency micro-targeted ad campaigns targeting undecided swing voters",
    ],
  },
  {
    phase: "Phase 04",
    timeline: "Final 48 Hours & Polling Day",
    title: "Get Out The Vote (GOTV) & Booth Turnout",
    points: [
      "Precision WhatsApp reminders with polling station details per sector",
      "Silent period compliance with hyper-focused grassroots mobilization",
      "Live monitoring of voter turnout and booth-level surge notifications",
    ],
  },
];

export default function PoliticalManagementPage() {
  return (
    <>
      {/* 1. Grand Hero Section */}
      <section className="relative overflow-hidden bg-paper pt-[76px]">
        <div className="dot-texture absolute inset-0 opacity-80 pointer-events-none" />
        <div className="absolute -left-28 top-16 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(255,237,213,0.7)_0%,rgba(255,237,213,0.2)_40%,transparent_70%)] pointer-events-none" />
        <div className="absolute -right-28 top-12 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(224,242,254,0.6)_0%,rgba(224,242,254,0.2)_40%,transparent_70%)] pointer-events-none" />

        <div className="container-site relative pb-12 sm:pb-20 pt-10 sm:pt-20 lg:pb-24 lg:pt-24">
          <Reveal>
            <nav className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-ink/70" aria-label="Breadcrumb">
              <Link href="/services" prefetch={true} className="transition-colors hover:text-accent">Services</Link>
              <span>/</span>
              <span className="text-ink font-bold">Political Management</span>
            </nav>

            <div className="mt-4 sm:mt-6 inline-flex items-center gap-2 rounded-full border border-black/[0.12] bg-white px-3.5 py-1.5 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.2em] text-ink">
                24/7 Digital War Room &amp; Electoral Strategy
              </span>
            </div>

            <h1 className="text-balance mt-3 sm:mt-5 max-w-4xl font-display text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tightest text-ink leading-[1.08]">
              Turning Voter Attention into{" "}
              <span className="text-accent">Electoral Mandates.</span>
            </h1>

            <p className="mt-3 sm:mt-6 max-w-3xl text-sm sm:text-xl font-bold leading-snug text-ink/90">
              Constituency intelligence, viral speech engines, and 24/7 rapid response war rooms engineered for decisive political victories.
            </p>

            <p className="mt-2.5 sm:mt-4 max-w-3xl text-xs sm:text-base leading-relaxed text-ink/80 font-normal">
              In modern elections, perception is reality. CreateVerse builds end-to-end digital acquisition and narrative apparatus for Members of Parliament, State MLAs, political parties, and ambitious candidates — connecting ground sentiment with surgical digital execution.
            </p>

            <PoliticalHeroButtons />
          </Reveal>

          {/* 4 Core Impact Metrics */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {stats.map((s, idx) => (
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

      {/* 2. Politician Clients & Leadership Network (The Main Showcase) */}
      <section id="clients-showcase" className="relative bg-white py-14 sm:py-20 lg:py-28 border-y border-stone-200">
        <div className="container-site">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent mb-2 sm:mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Verified Leadership Mandates</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
                Our Politician <span className="text-accent">Clients</span>
              </h2>
              <p className="mt-3 text-xs sm:text-base leading-relaxed text-ink/80 font-normal">
                Trusted by senior Members of Parliament, State MLAs, party general secretaries, and constituency organizers across major national and regional parties.
              </p>
            </div>
          </Reveal>

          {/* Expanded 6 Politician Cards with High-Res Portraits & Social Links */}
          <Stagger className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch" delayChildren={0.08}>
            {politicianClients.map((p) => (
              <StaggerItem key={p.name} className="h-full">
                <div className="group h-full flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-[#F8FAFC] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:bg-white hover:shadow-card">
                  {/* Top Row: Portrait & Identity */}
                  <div>
                    <div className="flex items-center sm:items-start gap-4 sm:gap-5">
                      {/* High-Res Portrait */}
                      <div className="relative shrink-0">
                        <div className="relative h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 rounded-full p-[3px] border-[2px] border-stone-200/90 bg-white shadow-xs transition-all duration-300 group-hover:border-accent group-hover:scale-105 group-hover:shadow-md">
                          <div className="relative h-full w-full overflow-hidden rounded-full bg-stone-50 flex items-center justify-center">
                            <Image
                              src={p.image}
                              alt={p.name}
                              width={136}
                              height={136}
                              priority
                              className="h-full w-full object-cover scale-[1.08] transition-transform duration-300 group-hover:scale-[1.14]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Name & Party Info */}
                      <div className="grow">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider ${
                              p.party === "BJP"
                                ? "bg-amber-500 text-white"
                                : "bg-sky-600 text-white"
                            }`}
                          >
                            {p.party}
                          </span>
                          <span className="text-[10.5px] font-semibold text-stone-500">{p.reach}</span>
                        </div>

                        <h3 className="mt-1 font-display text-sm sm:text-base font-bold text-ink leading-snug transition-colors group-hover:text-accent">
                          {p.name}
                        </h3>

                        <p className="mt-1 text-xs font-medium text-stone-600 leading-tight">
                          {p.role}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 text-[11px] font-medium text-ink/75 bg-white border border-stone-200/80 rounded-xl px-3 py-1.5">
                      <span className="font-bold text-accent">Mandate:</span> {p.badge} &amp; Constituency Digital Infrastructure
                    </div>
                  </div>

                  {/* Bottom Row: Official Social Media Handles */}
                  <div className="mt-4 pt-3 border-t border-stone-200/80 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                      Official Socials:
                    </span>
                    <div className="flex items-center gap-2">
                      {p.socials.instagram && (
                        <a
                          href={p.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-600 hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/[0.05] transition-all shadow-2xs hover:scale-110"
                          aria-label={`${p.name} Instagram`}
                        >
                          <InstagramIcon className="h-4 w-4" />
                        </a>
                      )}
                      {p.socials.facebook && (
                        <a
                          href={p.socials.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-600 hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/[0.05] transition-all shadow-2xs hover:scale-110"
                          aria-label={`${p.name} Facebook`}
                        >
                          <FacebookIcon className="h-4 w-4" />
                        </a>
                      )}
                      {p.socials.twitter && (
                        <a
                          href={p.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-600 hover:text-black hover:border-black/40 hover:bg-stone-100 transition-all shadow-2xs hover:scale-110"
                          aria-label={`${p.name} X (Twitter)`}
                        >
                          <XIcon className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 3. The 6 Core War Room Capabilities */}
      <section className="relative bg-paper py-14 sm:py-20 lg:py-28">
        <div className="container-site">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent mb-2">
                Operational Architecture
              </p>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
                6 Strategic Pillars of Our <span className="text-accent">War Room</span>
              </h2>
              <p className="mt-3 text-xs sm:text-base leading-relaxed text-ink/80 font-normal">
                We replace guesswork with engineering. Every capability is designed to build momentum, protect reputation, and mobilize ground votes on election day.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, idx) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={idx * 0.06}>
                  <div className="group h-full rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-5 sm:p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-lift flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-accent/[0.08] text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 bg-stone-100 rounded-full px-2.5 py-1">
                          {c.tag}
                        </span>
                      </div>

                      <h3 className="mt-4 font-display text-base sm:text-lg font-bold text-ink group-hover:text-accent transition-colors">
                        {c.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                        {c.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-stone-100 flex items-center gap-1 text-[11px] font-bold text-accent">
                      <span>Operational Capability</span>
                      <ChevronRight className="h-3 w-3" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. 4-Phase Election Playbook (Timeline) */}
      <section className="relative bg-white py-14 sm:py-20 lg:py-28 border-t border-stone-200">
        <div className="container-site">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent mb-2">
                Execution Methodology
              </p>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
                The 4-Phase Election Playbook
              </h2>
              <p className="mt-3 text-xs sm:text-base leading-relaxed text-ink/80 font-normal">
                How we ramp up candidate presence, dominate local narratives, and execute election day turnout with precision.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 sm:mt-16 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {playbook.map((p, idx) => (
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

                    <ul className="mt-3 space-y-2">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-xs text-stone-600 font-normal leading-relaxed">
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Air-Gapped Confidentiality Guarantee */}
      <section className="relative bg-[#090D15] py-14 sm:py-20 text-white">
        <div className="container-site">
          <Reveal>
            <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-12 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pb-6 border-b border-white/10">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-accent/20 text-accent border border-accent/30 shrink-0">
                  <Lock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-3xl font-bold text-white">
                    Strict Non-Disclosure &amp; Constituency Exclusivity
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-stone-400 font-normal">
                    We only represent one primary candidate per constituency to prevent conflict of interest.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm text-stone-300 font-normal">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Legally binding NDAs signed with core leadership prior to any strategic audit.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Air-gapped data architecture with encrypted access logs and zero third-party leakage.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Dedicated in-house campaign director embedded directly with your team.</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Political FAQs */}
      <PoliticalFaq />

      {/* 7. Final Consultation CTA */}
      <section className="relative bg-paper py-16 sm:py-24 border-t border-stone-200">
        <div className="container-site text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Confidential Intake
            </span>
            <h2 className="mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
              Ready to Command Your Constituency?
            </h2>
            <p className="mt-3 text-xs sm:text-base leading-relaxed text-ink/80 font-normal">
              Book a private briefing with our Senior Political Directors to review your constituency data, current digital footprint, and deployment timeline.
            </p>
            <div className="mt-8 flex justify-center">
              <PoliticalHeroButtons />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
