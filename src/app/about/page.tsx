import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import FinalCTA from "@/components/final-cta";
import WhyCreateVerse from "@/components/why-createverse";
import ProcessSection from "@/components/process-section";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "About — A Growth & Digital Acquisition Partner",
  description:
    "CreateVerse is a growth and digital acquisition partner helping real estate, immigration, political organizations and ambitious businesses generate leads and scale campaigns.",
};

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
        title={<>We exist to turn attention into <span className="text-brand-gradient">revenue.</span></>}
        description="CreateVerse is a growth and digital acquisition partner. We combine strategy, media, creative and technology to generate leads, acquire customers and run high-impact campaigns — for real estate companies, immigration businesses, political organizations and ambitious brands."
      />

      <section className="bg-paper pb-24 lg:pb-32">
        <div className="container-site">
          <div className="grid gap-6 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-paper-line bg-white p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
                  <span className={`font-display text-sm font-semibold tracking-widest ${i % 2 === 0 ? "text-accent" : "text-brand-orange"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 font-display text-2xl font-semibold text-ink">{p.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink/55">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyCreateVerse />
      <ProcessSection />
      <FinalCTA />
    </>
  );
}
