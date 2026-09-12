import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
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
        title={<>Let&apos;s build your <span className="text-brand-gradient">growth engine.</span></>}
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
                  className="group flex items-center gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-50/90 p-5 shadow-xs transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
                    <WhatsAppIcon className="h-6 w-6 text-white" />
                  </span>
                  <div>
                    <span className="block text-xs font-bold text-emerald-800">Chat on WhatsApp (Instant)</span>
                    <span className="block text-sm font-bold text-emerald-950 group-hover:underline">{site.phone}</span>
                  </div>
                </a>

                {/* Direct Phone */}
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="group flex items-center gap-4 rounded-2xl border border-black/[0.12] bg-white p-5 shadow-xs transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-white">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="block text-xs font-bold text-ink/75">Direct Phone</span>
                    <span className="block text-sm font-bold text-ink group-hover:text-accent">{site.phone}</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-black/[0.12] bg-white p-5 shadow-xs transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-sky text-accent">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="block text-xs font-bold text-ink/75">Official Email</span>
                    <span className="block text-sm font-bold text-ink group-hover:text-accent">{site.email}</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 rounded-2xl border border-black/[0.12] bg-white p-5 shadow-xs">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-sun text-brand-orange">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="block text-xs font-bold text-ink/75">Based in</span>
                    <span className="block text-sm font-semibold text-ink">{site.location} — Operating Pan-India &amp; Global</span>
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
            <div className="rounded-[2rem] bg-ink p-6 shadow-lift sm:p-8">
              <h2 className="px-2 pb-5 font-display text-2xl font-semibold text-white">Direct Project Enquiry</h2>
              <LeadForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
