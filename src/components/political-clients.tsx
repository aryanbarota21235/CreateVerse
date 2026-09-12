"use client";

import Image from "next/image";
import { MessageSquare, ArrowRight } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";
import { useEnquiry } from "@/context/enquiry-context";

interface Politician {
  name: string;
  party: "BJP" | "INC";
  designation: string;
  image: string;
}

const politicians: Politician[] = [
  {
    name: "Umesh Sharma",
    party: "BJP",
    designation: "BJP",
    image: "/politicians/umesh-sharma.png",
  },
  {
    name: "Bhupinder Lather",
    party: "INC",
    designation: "INC",
    image: "/politicians/bhupinder-lather.png",
  },
  {
    name: "Kawal Singh Dhillon",
    party: "BJP",
    designation: "BJP",
    image: "/politicians/kawal-singh-dhillon.png",
  },
  {
    name: "Rajiv Mamuram Gondar",
    party: "INC",
    designation: "INC",
    image: "/politicians/rajiv-mamuram-gondar.png",
  },
  {
    name: "Randeep Singh Surjewala",
    party: "INC",
    designation: "MP Rajya Sabha",
    image: "/politicians/randeep-singh-surjewala.png",
  },
  {
    name: "Shamsher Singh Gogi",
    party: "INC",
    designation: "Ex MLA Assandh",
    image: "/politicians/shamsher-singh-gogi.png",
  },
];

export default function PoliticalClients() {
  const { openEnquiry } = useEnquiry();

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32 border-t border-stone-200">
      {/* Subtle background ambient map texture */}
      <div className="dot-texture absolute inset-0 opacity-40" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[450px] w-[600px] rounded-full bg-brand-sky/40 blur-3xl pointer-events-none" />

      <div className="container-site relative">
        {/* Top Header Row with Title, Copy, and Let's Talk CTA */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 pb-14 border-b border-stone-200">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent mb-3">
                War Room Operations
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tightest text-ink">
                Political Management
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink/80 font-normal">
                In today&apos;s fast-paced digital world, politicians need a strong, credible, and engaging presence to connect with the public, influence opinions, and drive their campaigns successfully. At CreateVerse, we specialize in political branding, digital marketing, reputation management, and campaign strategy to help leaders amplify their message and build trust with their audience.
              </p>
            </div>

            <div className="lg:pt-14 shrink-0">
              <button
                onClick={() => openEnquiry("Political Campaign Management")}
                className="group inline-flex items-center gap-2.5 rounded-2xl bg-accent px-8 py-4 text-sm font-bold text-white shadow-md transition-all hover:bg-accent-dim hover:shadow-lg hover:shadow-accent/20"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Let&apos;s talk</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Clients Showcase Subheader */}
        <div className="mt-14 mb-10">
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
            Our Politician <span className="text-accent">Clients</span>
          </h3>
        </div>

        {/* 6 Circular Politician Cards */}
        <Stagger className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6" delayChildren={0.08}>
          {politicians.map((p) => (
            <StaggerItem key={p.name}>
              <div className="group flex flex-col items-center text-center p-4 rounded-3xl border border-stone-200/80 bg-[#F8FAFC] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:bg-white hover:shadow-card">
                {/* Circular Portrait with Luxury Border */}
                <div className="relative mb-4">
                  <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-accent/30 transition-all duration-300 group-hover:ring-accent group-hover:scale-105 group-hover:shadow-md bg-white">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={112}
                      height={112}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Party Emblem / Tag */}
                <div className="mb-2">
                  {p.party === "BJP" ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold text-amber-900 shadow-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF9933]" />
                      BJP
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-900 shadow-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#138808]" />
                      INC
                    </span>
                  )}
                </div>

                {/* Name */}
                <h4 className="font-display text-sm font-bold text-ink transition-colors group-hover:text-accent">
                  {p.name}
                </h4>

                {/* Designation / Role */}
                <p className="mt-0.5 text-[11px] font-medium text-ink/75">
                  {p.designation}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
