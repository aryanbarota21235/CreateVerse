"use client";

import Image from "next/image";
import { MessageSquare, ArrowRight } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";
import { useEnquiry } from "@/context/enquiry-context";

interface Politician {
  name: string;
  role: string;
  image: string;
}

const politicians: Politician[] = [
  {
    name: "Umesh Sharma",
    role: "Senior Leader · BJP",
    image: "/politicians/umesh-sharma.png",
  },
  {
    name: "Bhupinder Lather",
    role: "Senior Leader · INC",
    image: "/politicians/bhupinder-lather.png",
  },
  {
    name: "Kawal Singh Dhillon",
    role: "Senior Leader · BJP",
    image: "/politicians/kawal-singh-dhillon.png",
  },
  {
    name: "Rajiv Mamuram Gondar",
    role: "Senior Leader · INC",
    image: "/politicians/rajiv-mamuram-gondar.png",
  },
  {
    name: "Randeep Singh Surjewala",
    role: "MP Rajya Sabha · INC",
    image: "/politicians/randeep-singh-surjewala.png",
  },
  {
    name: "Shamsher Singh Gogi",
    role: "Ex MLA Assandh · INC",
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
                onClick={() => openEnquiry("political-management")}
                className="pressable group inline-flex items-center gap-2.5 rounded-2xl bg-accent px-8 py-4 text-sm font-bold text-white shadow-md transition-all duration-150 hover:-translate-y-0.5 hover:bg-accent-dim hover:shadow-lg hover:shadow-accent/20"
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

        {/* 6 Circular Politician Cards with 100% Uniform Height & Alignment */}
        <Stagger className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 lg:grid-cols-6 items-stretch" delayChildren={0.08}>
          {politicians.map((p) => (
            <StaggerItem key={p.name} className="h-full">
              <div className="group h-full flex flex-col items-center justify-between text-center p-4 sm:p-5 rounded-3xl border border-stone-200/90 bg-[#F8FAFC] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:bg-white hover:shadow-card">
                {/* Circular Portrait with Concentric Clean Ring */}
                <div className="relative mb-4 shrink-0">
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full p-[3px] border-[1.5px] border-stone-200/90 bg-white shadow-xs transition-all duration-300 group-hover:border-accent group-hover:scale-105 group-hover:shadow-md">
                    <div className="relative h-full w-full overflow-hidden rounded-full bg-stone-50 flex items-center justify-center">
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={112}
                        height={112}
                        className="h-full w-full object-cover scale-[1.14] transition-transform duration-300 group-hover:scale-[1.18]"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Content: Name & Real Role (No AI badge, no duplicate party text) */}
                <div className="flex flex-col items-center w-full grow justify-center text-center">
                  <h4 className="font-display text-xs sm:text-sm font-bold text-ink leading-snug transition-colors group-hover:text-accent">
                    {p.name}
                  </h4>
                  <p className="mt-1.5 text-[11px] font-semibold text-ink/75">
                    {p.role}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
