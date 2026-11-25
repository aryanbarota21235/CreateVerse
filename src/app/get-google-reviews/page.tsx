import type { Metadata } from "next";
import { CheckCircle2, QrCode, Star, Smartphone } from "lucide-react";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import { listActivePlans } from "@/lib/admin-data";
import SignupForm from "./signup-form";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Get More Google Reviews — Sign Up for Review QR",
  description:
    "Sign up for the CreateVerse Google Review QR system. Customers scan, rate and post a Google review in under a minute. Pick a plan and our team will set you up.",
  alternates: { canonical: "https://www.createverse.in/get-google-reviews" },
};

const STEPS = [
  { icon: QrCode, title: "We set up your QR", desc: "Linked to your Google listing, with a print-ready poster for your counter or tables." },
  { icon: Smartphone, title: "Customers scan & rate", desc: "They pick suggested wording that fits your business, edit it, and post." },
  { icon: Star, title: "Reviews keep coming", desc: "More recent reviews on Google, and a monthly view of every rating." },
];

export default async function GetGoogleReviewsPage() {
  const plans = (await listActivePlans().catch(() => [])).map((p) => ({
    id: p.id,
    name: p.name,
    priceInr: p.priceInr,
    months: p.months,
    description: p.description,
  }));

  return (
    <>
      <PageHero
        eyebrow="Google Review QR"
        breadcrumb="Get Google Reviews"
        title={<>Get more Google reviews, <span className="text-accent">one scan at a time.</span></>}
        description="Fill in your details and pick a plan. Our team will call you to confirm, collect payment and send your QR code and poster."
      />

      <section className="bg-paper pb-16 sm:pb-24">
        <div className="container-site grid gap-6 lg:grid-cols-[1fr_1.35fr] lg:gap-10">
          <Reveal>
            <div className="space-y-3">
              {STEPS.map((s, i) => (
                <div key={s.title} className="flex gap-4 rounded-2xl border border-stone-200 bg-white p-4 sm:p-5 shadow-xs">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-sky text-accent">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Step {i + 1}</p>
                    <h2 className="font-display text-base font-bold text-ink">{s.title}</h2>
                    <p className="mt-0.5 text-sm text-ink/70">{s.desc}</p>
                  </div>
                </div>
              ))}
              <ul className="space-y-2 rounded-2xl border border-stone-200 bg-white p-5 text-sm text-ink/80 shadow-xs">
                {[
                  "Customers post from their own Google account",
                  "Every star rating can be posted, within Google's rules",
                  "English, Hinglish or Hindi suggestions",
                  "No app needed: any phone camera works",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <SignupForm plans={plans} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
