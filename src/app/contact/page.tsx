import type { Metadata } from "next";
import { Mail, MapPin, Phone, ArrowUpRight, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import Faq from "@/components/faq";
import LeadForm from "@/components/lead-form";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export const metadata: Metadata = {
  title: "Contact & Strategic Consultation — CreateVerse",
  description:
    "Talk directly with CreateVerse directors about performance marketing, real estate lead generation, immigration pipelines, political campaigns, or modern web architecture.",
};

const contactFaqs = [
  {
    q: "What happens after I submit the enquiry?",
    a: "Our managing directors personally review your goals and market landscape, responding within 2 hours with initial observations and available slots for a strategic intake call.",
  },
  {
    q: "What should I prepare for our first consultation?",
    a: "Just your high-level objective, target audience, and monthly budget parameters. We will bring the funnel models, conversion benchmarks, and channel math.",
  },
  {
    q: "Do you take on clients outside Delhi NCR and Karnal?",
    a: "Yes. Over 70% of our client base operates across Pan-India (Mumbai, Bangalore, Hyderabad, Chandigarh) as well as global diaspora markets across Canada, UK, and the UAE.",
  },
  {
    q: "Do you accept test or phased budgets?",
    a: "We work with focused budgets where the acquisition economics are mathematically sound. If your budget cannot produce statistically significant volume in your vertical, we will tell you upfront before you spend a rupee.",
  },
];

const guarantees = [
  {
    icon: Clock,
    title: "2-Hour Response SLA",
    desc: "Direct evaluation by senior directors within 2 business hours, not automated marketing delays.",
  },
  {
    icon: ShieldCheck,
    title: "100% Strict NDA",
    desc: "Your commercials, unit economics, and client proprietary data are protected under strict NDA.",
  },
  {
    icon: CheckCircle2,
    title: "Zero Cold Sales Pressure",
    desc: "A transparent feasibility audit and strategy breakdown, whether we decide to partner together or not.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Consultations"
        title={
          <>
            Let&apos;s build your <span className="text-accent">growth engine.</span>
          </>
        }
        description="Tell us where you want to grow. Our managing team reviews all inbound inquiries and delivers a structured acquisition roadmap within 2 hours."
      />

      <section className="bg-paper pb-24 lg:pb-32">
        <div className="container-site grid items-start gap-12 lg:grid-cols-12">
          {/* Left Column: Direct channels & trust */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal>
              {/* Live Desk Indicator */}
              <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/25 bg-emerald-50/80 px-4 py-2 text-xs font-semibold text-emerald-900 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
                </span>
                <span>Direct Desk Active · Mon – Sat, 9:30 AM – 7:30 PM IST</span>
              </div>

              <div className="space-y-3.5">
                {/* WhatsApp Priority Channel */}
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-stone-200 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-[#25D366]/70 hover:shadow-lift"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                      <WhatsAppIcon className="h-6 w-6 text-[#25D366]" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">Fastest Track</span>
                        <span className="rounded bg-emerald-100 px-1.5 py-0.2 text-[10px] font-bold text-emerald-800">&lt; 15m reply</span>
                      </div>
                      <span className="block font-display text-base font-bold text-ink">Chat on WhatsApp</span>
                    </div>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper text-ink/70 transition-transform group-hover:translate-x-0.5 group-hover:text-emerald-700">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>

                {/* Email Channel */}
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center justify-between rounded-2xl border border-stone-200 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lift"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-sky text-accent">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-ink/65">Direct Director Inbox</span>
                      <span className="block font-display text-base font-bold text-ink">{site.email}</span>
                    </div>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper text-ink/70 transition-transform group-hover:translate-x-0.5 group-hover:text-accent">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>

                {/* Direct Dial Channel */}
                <a
                  href={`tel:${site.phone}`}
                  className="group flex items-center justify-between rounded-2xl border border-stone-200 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lift"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-sky text-accent">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-ink/65">Direct Phone Line</span>
                      <span className="block font-display text-base font-bold text-ink">{site.phone}</span>
                    </div>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper text-ink/70 transition-transform group-hover:translate-x-0.5 group-hover:text-accent">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>

                {/* Registered Office (Clickable to Google Maps) */}
                <a
                  href="https://maps.google.com/?q=Mughal+Canal+Karnal+Haryana+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-stone-200 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-orange hover:shadow-lift"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-sun text-brand-orange">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-ink/65">Registered Office &amp; Studio</span>
                      <span className="block text-sm font-semibold text-ink leading-snug">{site.location}</span>
                      <span className="block text-xs font-medium text-accent mt-0.5 group-hover:underline">Open in Google Maps</span>
                    </div>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper text-ink/70 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-orange">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </Reveal>

            {/* Executive Guarantees */}
            <Reveal delay={0.12}>
              <div className="rounded-2xl border border-stone-200 bg-white/70 p-6 backdrop-blur-xs">
                <h3 className="text-xs font-bold uppercase tracking-widest text-ink/70 mb-4">Executive Commitments</h3>
                <div className="space-y-4">
                  {guarantees.map((g) => {
                    const GIcon = g.icon;
                    return (
                      <div key={g.title} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                          <GIcon className="h-3.5 w-3.5" />
                        </span>
                        <div>
                          <p className="text-sm font-bold text-ink">{g.title}</p>
                          <p className="text-xs text-ink/70 leading-relaxed mt-0.5 font-normal">{g.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* FAQs */}
            <Reveal delay={0.18}>
              <h3 className="font-display text-2xl font-bold text-ink">Frequently asked</h3>
              <div className="mt-5">
                <Faq items={contactFaqs} />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Unified Form Panel */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-card sm:p-8 lg:p-10">
              <div className="mb-6 border-b border-stone-100 pb-5">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">Direct Project Intake</span>
                <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-ink">Request Strategic Consultation</h2>
                <p className="mt-2 text-sm text-ink/75 leading-relaxed font-normal">
                  Share your current targets, timeline, and category. We will audit your funnel economics and present a bespoke roadmap within 2 hours.
                </p>
              </div>
              <LeadForm embedded={true} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
