import type { Metadata } from "next";
import Link from "next/link";
import {
  Megaphone,
  Target,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Users,
} from "lucide-react";
import PageHero from "@/components/page-hero";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";
import Faq from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import AcademyApplicationForm from "@/components/academy-application-form";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export const metadata: Metadata = {
  title: "Learn Digital Marketing & Performance Advertising | CreateVerse",
  description:
    "Practical digital marketing training in Meta ads, Google campaigns, lead generation funnels, and analytics from active practitioners at CreateVerse.",
  keywords: [
    "learn digital marketing",
    "digital marketing course",
    "meta ads training",
    "google ads training",
    "performance marketing training",
    "digital marketing Karnal",
    "lead generation course",
    "CreateVerse training",
  ],
  alternates: {
    canonical: "https://createverse.in/learn-digital-marketing",
  },
  openGraph: {
    title: "Learn Digital Marketing — CreateVerse",
    description:
      "Practical digital marketing training in Meta ads, Google campaigns, and lead generation from active practitioners.",
    url: "https://createverse.in/learn-digital-marketing",
    siteName: "CreateVerse",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Learn Digital Marketing CreateVerse" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Digital Marketing — CreateVerse",
    description:
      "Practical digital marketing training in Meta ads, Google campaigns, and lead generation.",
    images: ["/logo.png"],
  },
};

const learningAreas = [
  {
    icon: Megaphone,
    title: "Meta & Instagram Paid Ads",
    desc: "Campaign setup, audience targeting, CBO vs ABO budget allocation, creative testing, and scaling ads profitably.",
  },
  {
    icon: Target,
    title: "Google Search & PMax Campaigns",
    desc: "High-intent search keyword selection, negative keywords, bidding strategies, and Performance Max campaign execution.",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation & Funnels",
    desc: "Building high-converting landing pages, multi-step lead forms, and WhatsApp automation for real estate and service businesses.",
  },
  {
    icon: BarChart3,
    title: "Tracking, CAPI & Analytics",
    desc: "Google Analytics 4 (GA4), Google Tag Manager (GTM), Meta Pixel, Conversions API (CAPI), and conversion tracking.",
  },
];

const highlights = [
  "Hands-on learning on live ad accounts, not theoretical slide decks",
  "1-on-1 practical guidance directly from our agency team",
  "Available both in-person (Karnal) and live interactive online sessions",
  "Practical skills geared toward high-paying jobs, freelancing, and growing your own business",
];

const faqs = [
  {
    q: "Who is this training suitable for?",
    a: "Anyone looking to master practical digital marketing — students seeking high-paying agency jobs, freelancers wanting to offer lead generation, and business owners looking to manage their own acquisition.",
  },
  {
    q: "Is prior marketing or coding experience required?",
    a: "No prior experience is required. We start with core advertising fundamentals before moving step-by-step into live campaign setups and performance tracking.",
  },
  {
    q: "Is this training online or offline?",
    a: "We offer both options: in-person sessions at our office in Karnal, Haryana, as well as live interactive online sessions.",
  },
  {
    q: "How do I get started or know the fee details?",
    a: "Simply fill out the enquiry form on this page or message us directly on WhatsApp. Our team will share the complete details and answer any questions.",
  },
];

export default function LearnDigitalMarketingPage() {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello CreateVerse, I would like to know details about your digital marketing training."
  )}`;

  return (
    <>
      <PageHero
        breadcrumb="Learn Digital Marketing"
        eyebrow="Practical Training"
        title={
          <>
            Learn Practical <span className="text-accent">Digital Marketing.</span>
          </>
        }
        description="Hands-on training in performance marketing, Meta ads, Google campaigns, lead funnels, and tracking — taught directly by practitioners working on active client accounts."
      />

      {/* 4 Core Focus Areas */}
      <section className="bg-paper py-12 sm:py-16 border-b border-stone-200">
        <div className="container-site">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                What You Will Learn
              </h2>
              <p className="mt-2 text-xs sm:text-base text-stone-600 font-normal">
                Focused practical areas that matter for real-world client acquisition and marketing results.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {learningAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <Reveal key={area.title} delay={idx * 0.06} className="h-full">
                  <div className="h-full flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-card hover:border-accent transition-all">
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/[0.08] text-accent mb-4">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-base font-bold text-ink">
                        {area.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                        {area.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Highlights checklist */}
          <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-5 sm:p-7">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-ink mb-4">
              Key Highlights:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-700">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry & Contact Section */}
      <section id="enquiry" className="bg-white py-12 sm:py-18 border-b border-stone-200">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Direct info */}
            <div className="lg:col-span-5 space-y-5">
              <Reveal>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                  Start Your <span className="text-accent">Training Journey</span>
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                  Send us an enquiry to get complete details about the curriculum, schedule, and fees. Our team will get back to you promptly.
                </p>
              </Reveal>

              <div className="rounded-2xl border border-stone-200 bg-[#F8FAFC] p-5">
                <p className="text-xs font-bold text-ink mb-1">Prefer to talk directly?</p>
                <p className="text-xs text-stone-600 font-normal mb-3">
                  Reach out directly to us on WhatsApp:
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pressable inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#1EBE5D] transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="h-4 w-4 fill-current" />
                  <span>Chat on WhatsApp: {site.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Clean Form */}
            <div className="lg:col-span-7">
              <AcademyApplicationForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-paper py-12 sm:py-16 border-b border-stone-200">
        <div className="container-site">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center mb-8">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                Frequently Asked Questions
              </h2>
            </div>
          </Reveal>

          <div className="max-w-3xl mx-auto">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
