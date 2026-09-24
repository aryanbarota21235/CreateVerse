import Image from "next/image";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";

const clientLogos = [
  {
    src: "/clients/neelkanth-star.png",
    alt: "Neelkanth Star",
    href: "https://www.google.com/search?q=Neelkanth+Star+Karnal",
    width: 220,
    height: 180,
    className: "h-24 sm:h-28 w-auto object-contain",
  },
  {
    src: "/clients/shivam-communication.png",
    alt: "Shivam Communication",
    href: "https://www.google.com/search?q=Shivam+Communication+Karnal",
    width: 260,
    height: 110,
    className: "h-14 sm:h-16 w-auto max-w-[220px] object-contain",
  },
  {
    src: "/clients/reliant-corp-advisors.svg",
    alt: "Reliant Corp Advisors",
    href: "https://reliantcorpadvisors.in/",
    width: 220,
    height: 64,
    className: "h-12 sm:h-14 w-auto max-w-[210px] object-contain",
  },
];

export default function OurClients() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-paper border-t border-stone-200 overflow-hidden">
      <div className="container-site relative">
        <Reveal>
          <div className="text-left pb-6 sm:pb-8 border-b border-stone-200">
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
              Our Clients
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 sm:mt-10">
          <Stagger className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 items-stretch">
            {clientLogos.map((logo) => (
              <StaggerItem key={logo.src}>
                <a
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={logo.alt}
                  className="group flex h-36 sm:h-44 items-center justify-center rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white px-8 py-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className={`${logo.className} transition-transform duration-300 group-hover:scale-105`}
                  />
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
