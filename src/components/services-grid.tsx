import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Building2, Code2, Filter, Megaphone, Newspaper, Palette,
  PenLine, Plane, Share2, Target, UserCheck, Users, Zap, type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/reveal";
import { services } from "@/lib/services";

export const iconMap: Record<string, LucideIcon> = {
  Building2, Plane, Megaphone, Target, Zap, Code2, Filter,
  Share2, UserCheck, PenLine, Users, Newspaper, Palette,
};

export default function ServicesGrid({ showHeading = true }: { showHeading?: boolean }) {
  const priority = services.filter((s) => s.priority);
  const rest = services.filter((s) => !s.priority);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-site">
        {showHeading && (
          <SectionHeading
            eyebrow="Services"
            title="A complete growth stack — led by what drives revenue."
            description="Lead generation, paid media and political management lead our practice, backed by full creative and technology capability."
          />
        )}

        {/* Priority services — feature cards */}
        <Stagger className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${showHeading ? "mt-16" : ""}`} delayChildren={0.08}>
          {priority.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Target;
            const orange = i % 2 === 1;
            return (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-ink p-8 text-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <div
                    className={`absolute -right-16 -top-16 h-44 w-44 rounded-full blur-2xl transition-opacity duration-500 opacity-60 group-hover:opacity-100 ${
                      orange ? "bg-brand-orange/25" : "bg-accent/25"
                    }`}
                  />
                  <div className="relative flex items-start justify-between">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                        orange ? "bg-brand-orange text-white" : "bg-accent text-white"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-white/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-orange" />
                  </div>
                  <p className={`relative mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] ${orange ? "text-brand-orange" : "text-accent"}`}>
                    {s.category}
                  </p>
                  <h3 className="relative mt-2 font-display text-2xl font-semibold tracking-tight">{s.name}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-white/55">{s.tagline}</p>
                  <span className="relative mt-auto pt-7 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors group-hover:text-white">
                    Explore service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Supporting services */}
        <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" delayChildren={0.05}>
          {rest.map((s) => {
            const Icon = iconMap[s.icon] ?? Target;
            return (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-paper-line bg-paper p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white hover:shadow-card"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-ink/45 shadow-card transition-colors group-hover:bg-brand-sky group-hover:text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-ink">
                      {s.name}
                      <ArrowUpRight className="h-3.5 w-3.5 text-ink/25 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-ink/50">{s.tagline}</span>
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
