import type { Metadata } from "next";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import Faq from "@/components/faq";
import LeadForm from "@/components/lead-form";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export const metadata: Metadata = {
  title: "Contact & Enquiry — CreateVerse",
  description:
    "Talk to CreateVerse about lead generation, performance marketing, political campaigns or web development. Free growth strategy conversation.",
};

const contactFaqs = [
  { q: "What happens after I submit the enquiry?", a: "Our team reviews your goals and responds within 2 hours with a bespoke acquisition roadmap." },
  { q: "What should I prepare for the first call?", a: "Just your goal and rough budget range. We'll bring questions about your market, funnel and current numbers." },
  { q: "Do you take on small budgets?", a: "We work with focused budgets where the funnel economics make sense — we'll tell you honestly if the math doesn't work yet." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Enquiries"
        title={<>Let&apos;s build your <span className="text-accent">growth engine.</span></>}
        description="Tell us where you want to grow. We'll respond within 2 hours with a clear roadmap on how to get there."
      />

      <section className="bg-paper pb-24 lg:pb-32">
        <div className="container-site grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-stone-200 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-emerald-500/60 hover:shadow-lift"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                      <WhatsAppIcon className="h-6 w-6 text-[#25D366]" />
                    </span>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-ink/75">Fastest Response</span>
                      <span className="block font-display text-base font-bold text-ink">Chat on WhatsApp</span>
                    </div>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper text-ink/70 transition-transform group-hover:translate-x-0.5">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center justify-between rounded-2xl border border-black/[0.12] bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lift"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-sky text-accent">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-ink/75">Email our team</span>
                      <span className="block font-display text-base font-bold text-ink">{site.email}</span>
                    </div>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper text-ink/70 transition-transform group-hover:translate-x-0.5">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${site.phone}`}
                  className="group flex items-center justify-between rounded-2xl border border-black/[0.12] bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lift"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-sky text-accent">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-ink/75">Direct dial</span>
                      <span className="block font-display text-base font-bold text-ink">{site.phone}</span>
                    </div>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper text-ink/70 transition-transform group-hover:translate-x-0.5">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 rounded-2xl border border-black/[0.12] bg-white p-5 shadow-xs">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-sun text-brand-orange">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="block text-xs font-bold text-ink/75">Registered Address</span>
                    <span className="block text-sm font-semibold text-ink">{site.location}</span>
                    <span className="block text-xs text-accent font-medium mt-0.5">Operating Pan-India &amp; Global</span>
                  </div>
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

          {/* Form panel */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-card sm:p-8">
              <h2 className="px-2 pb-5 font-display text-2xl font-bold text-ink">Direct Project Enquiry</h2>
              <LeadForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
