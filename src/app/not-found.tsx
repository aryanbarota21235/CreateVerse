import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-paper pt-[76px]">
      <div className="container-site text-center">
        <p className="font-display text-7xl font-semibold tracking-tightest text-ink/15">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-ink">This page doesn&apos;t exist.</h1>
        <p className="mt-3 text-ink/50">The page you&apos;re looking for may have moved or never existed.</p>
        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
