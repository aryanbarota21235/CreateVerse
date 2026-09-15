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
        title={<>We exist to turn attention into <span className="text-accent">revenue.</span></>}
        description="CreateVerse is a growth and digital acquisition partner. We combine strategy, media, creative and technology to generate leads, acquire customers and run high-impact campaigns — for real estate companies, immigration businesses, political organizations and ambitious brands."
      />

      <section className="bg-paper pb-16 sm:pb-24 lg:pb-32">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-2.5 sm:gap-6">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-xl sm:rounded-2xl border border-stone-200/90 bg-white p-3.5 sm:p-8 shadow-card transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lift">
                  <span className={`font-display text-xs sm:text-sm font-bold tracking-widest ${i % 2 === 0 ? "text-accent" : "text-brand-orange"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-2 sm:mt-4 font-display text-xs sm:text-2xl font-bold text-ink leading-snug">{p.title}</h2>
                  <p className="mt-1 sm:mt-3 text-[10.5px] sm:text-sm leading-relaxed text-ink/80 font-normal line-clamp-3 sm:line-clamp-none">{p.desc}</p>
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
