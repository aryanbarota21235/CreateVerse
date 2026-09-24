import Image from "next/image";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";

const clientLogos = [
  {
    src: "/clients/client-logo-1.png",
    alt: "Client Partner Logo",
    width: 180,
    height: 180,
    className: "h-20 sm:h-24 w-auto object-contain",
  },
  {
    src: "/clients/shivam-communication.png",
    alt: "Shivam Communication",
    width: 260,
    height: 110,
    className: "h-14 sm:h-16 w-auto max-w-[220px] object-contain",
  },
  {
    src: "/clients/reliant-corp-advisors.svg",
    alt: "Reliant Corp Advisors",
    width: 220,
    height: 64,
    className: "h-12 sm:h-14 w-auto max-w-[210px] object-contain",
  },
];

export default function OurClients() {
  return (
    <section className="relative py-12 sm:py-16 bg-paper border-b border-stone-200 overflow-hidden">
      <div className="container-site relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-3.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span>Trusted Partners</span>
            </div>
            <h2 className="mt-3 font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
              Our <span className="text-accent">Clients</span>
            </h2>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {clientLogos.map((logo) => (
            <StaggerItem key={logo.src}>
              <div className="group flex h-36 sm:h-40 items-center justify-center rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white px-8 py-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className={`${logo.className} transition-transform duration-300 group-hover:scale-105`}
                />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
