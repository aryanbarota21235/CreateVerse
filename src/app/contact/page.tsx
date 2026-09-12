import type { Metadata } from "next";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import Faq from "@/components/faq";
import LeadForm from "@/components/lead-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Start a Project",
  description:
    "Talk to CreateVerse about lead generation, performance marketing, political campaigns or web development. Free 30-minute growth strategy conversation.",
};

const contactFaqs = [
  { q: "What happens after I submit the form?", a: "We review your goals and come back within 48 hours to schedule a free 30-minute strategy conversation — no obligation, no hard sell." },
  { q: "What should I prepare for the first call?", a: "Just your goal and rough budget range. We'll bring questions about your market, funnel and current numbers." },
  { q: "Do you take on small budgets?", a: "We work with focused budgets where the funnel economics make sense — we'll tell you honestly if the math doesn't work yet." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let&apos;s build your <span className="text-brand-gradient">growth engine.</span></>}
        description="Tell us where you want to grow. We'll respond within 48 hours with a clear point of view on how to get there."
      />

      <section className="bg-paper pb-24 lg:pb-32">
        <div className="container-site grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="space-y-4">
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-paper-line bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-sky text-accent">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-ink/40">Email</span>
                    <span className="block text-sm font-semibold text-ink group-hover:text-accent">{site.email}</span>
                  </span>
                </a>
                <div className="flex items-center gap-4 rounded-2xl border border-paper-line bg-white p-5 shadow-card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-sun text-brand-orange">
                    <MessageSquare className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-ink/40">WhatsApp / Phone</span>
                    <span className="block text-sm font-semibold text-ink/50">{site.phone} <span className="text-ink/30">(placeholder)</span></span>
                  </span>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-paper-line bg-white p-5 shadow-card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-sky text-accent">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-ink/40">Based in</span>
                    <span className="block text-sm font-semibold text-ink">{site.location} — working across regions</span>
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">Quick answers</h2>
              <div className="mt-5">
                <Faq items={contactFaqs} />
              </div>
            </Reveal>
          </div>

          {/* Dark form panel for contrast */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-[2rem] bg-ink p-6 shadow-lift sm:p-8">
              <h2 className="px-2 pb-5 font-display text-2xl font-semibold text-white">Start a project</h2>
              <LeadForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
