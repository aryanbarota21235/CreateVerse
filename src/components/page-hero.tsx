import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Reveal from "@/components/reveal";

export default function PageHero({
  eyebrow,
  breadcrumb,
  title,
  description,
  className = "",
}: {
  eyebrow: string;
  breadcrumb?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}) {
  return (
    <section className={`relative overflow-hidden bg-paper pt-[68px] sm:pt-[76px] ${className}`}>
      <div className="dot-texture absolute inset-0 opacity-80" />
      <div className="hidden sm:block pointer-events-none absolute -left-28 top-16 h-[350px] sm:h-[450px] w-[350px] sm:w-[450px] rounded-full bg-[radial-gradient(circle,rgba(255,237,213,0.7)_0%,rgba(255,237,213,0.2)_40%,transparent_70%)]" />
      <div className="hidden sm:block pointer-events-none absolute -right-28 top-12 h-[350px] sm:h-[450px] w-[350px] sm:w-[450px] rounded-full bg-[radial-gradient(circle,rgba(224,242,254,0.6)_0%,rgba(224,242,254,0.2)_40%,transparent_70%)]" />
      <div className="container-site relative pb-5 sm:pb-8 pt-6 sm:pt-14 lg:pt-18">
        <Reveal>
          {/* Uniform Breadcrumb matching clients pages */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider mb-4 sm:mb-6" aria-label="Breadcrumb">
            <Link href="/" prefetch={true} className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
            <span className="text-ink font-bold">{breadcrumb || eyebrow}</span>
          </nav>
          <h1 className="text-balance mt-2.5 sm:mt-3 max-w-3xl font-display text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.18] sm:leading-tight">
            {title}
          </h1>
          {description && <p className="mt-2.5 sm:mt-4 max-w-2xl text-xs sm:text-lg leading-relaxed text-ink/80 font-normal">{description}</p>}
        </Reveal>
      </div>
    </section>
  );
}
