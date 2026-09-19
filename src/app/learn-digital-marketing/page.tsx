import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import Faq from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import AcademyHeroButtons from "@/components/academy-hero-buttons";
import AcademyCurriculumTabs from "@/components/academy-curriculum-tabs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Learn Practical Digital Marketing | CreateVerse",
  description:
    "Hands-on training in performance marketing, Meta ads, Google campaigns, lead funnels, and tracking — taught directly by practitioners working on active client accounts at CreateVerse.",
  keywords: [
    "learn digital marketing",
    "digital marketing training",
    "meta ads training India",
    "google ads training agency",
    "practical digital marketing Karnal",
    "lead generation course",
    "performance marketing Haryana",
    "CreateVerse training",
  ],
  alternates: {
    canonical: "https://createverse.in/learn-digital-marketing",
  },
  openGraph: {
    title: "Learn Practical Digital Marketing — CreateVerse",
    description:
      "Hands-on training in performance marketing, Meta ads, Google campaigns, lead funnels, and tracking — taught directly by practitioners working on active client accounts.",
    url: "https://createverse.in/learn-digital-marketing",
    siteName: "CreateVerse",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Learn Digital Marketing CreateVerse" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Practical Digital Marketing — CreateVerse",
    description:
      "Hands-on training in performance marketing, Meta ads, Google campaigns, lead funnels, and tracking.",
    images: ["/logo.png"],
  },
};

const highlights = [
  "Hands-on learning on live client ad accounts, not dummy slides",
  "1-on-1 practical guidance directly from senior agency practitioners",
  "Available both in-person at our Karnal studio and live interactive online",
  "Real skills focused on getting high-paying jobs, freelancing, or scaling your own business",
];

const faqs = [
  {
    q: "Who is this training suitable for?",
    a: "Anyone looking to master practical digital marketing — students seeking high-paying agency jobs, freelancers wanting to offer high-ticket lead generation, and business owners looking to run their own customer acquisition.",
  },
  {
    q: "Is prior marketing or coding experience required?",
    a: "No prior experience is required. We start with foundational advertising psychology before moving step-by-step into live campaign setups and performance tracking.",
  },
  {
    q: "Is this training online or offline?",
    a: "We offer both options: in-person sessions at our office in Karnal, Haryana, as well as live interactive online sessions.",
  },
  {
    q: "How do I get started or know the fee details?",
    a: "Click 'Enquire for Training' to open our enquiry form or message us directly on WhatsApp. Our team will share the complete details, syllabus, and answer any questions.",
  },
];

export default function LearnDigitalMarketingPage() {
  return (
    <>
      {/* Standard Left-Aligned Page Hero matching rest of the website */}
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

      {/* Action Buttons right below hero (Left-aligned) */}
      <section className="bg-paper pb-8 sm:pb-12 border-b border-stone-200">
        <div className="container-site">
          <AcademyHeroButtons />
        </div>
      </section>

      {/* 6 Core Modules with Horizontal Scroll Tabs */}
      <section className="bg-white py-14 sm:py-20 border-b border-stone-200">
        <div className="container-site">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                What You Will <span className="text-accent">Learn &amp; Master</span>
              </h2>
              <p className="mt-2 text-xs sm:text-base text-stone-600 font-normal">
                Click across the horizontal modules below to inspect the exact systems, algorithms, and practical deliverables you will build.
              </p>
            </div>
          </Reveal>

          {/* Interactive Horizontal Scroll Tabs Component */}
          <AcademyCurriculumTabs />

          {/* Highlights Checklist */}
          <div className="mt-10 rounded-2xl border border-stone-200 bg-[#F8FAFC] p-5 sm:p-7">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-ink mb-3.5">
              Why Learn With CreateVerse:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-stone-700">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span className="font-medium">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Box with Modal Popup Trigger */}
      <section className="bg-paper py-14 sm:py-20 border-b border-stone-200">
        <div className="container-site">
          <div className="rounded-2xl sm:rounded-3xl border border-stone-200 bg-white p-6 sm:p-12 shadow-card">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink leading-tight">
                Start Your <span className="text-accent">Training Journey</span>
              </h2>
              <p className="mt-3 text-xs sm:text-base text-stone-600 font-normal leading-relaxed">
                Click below to submit an enquiry or connect directly with our team on WhatsApp for complete syllabus details, timings, and fees.
              </p>

              <div className="mt-6 pt-2">
                <AcademyHeroButtons />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-14 sm:py-20 border-b border-stone-200">
        <div className="container-site">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
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
