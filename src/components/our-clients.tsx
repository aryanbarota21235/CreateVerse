import Image from "next/image";
import Reveal, { Stagger, StaggerItem } from "@/components/reveal";

interface ClientLogo {
  src: string;
  alt: string;
  href?: string;
  width: number;
  height: number;
  className: string;
}

const clientLogos: ClientLogo[] = [
  {
    src: "/clients/neelkanth-star.png",
    alt: "Neelkanth Star",
    width: 240,
    height: 200,
    className: "h-24 sm:h-28 w-auto object-contain",
  },
  {
    src: "/clients/shivam-communication.png",
    alt: "Shivam Communication",
    width: 280,
    height: 120,
    className: "h-14 sm:h-16 w-auto max-w-[210px] object-contain",
  },
  {
    src: "/clients/reliant-corp-advisors.svg",
    alt: "Reliant Corp Advisors",
    href: "https://reliantcorpadvisors.in/",
    width: 240,
    height: 70,
    className: "h-12 sm:h-14 w-auto max-w-[200px] object-contain",
  },
  {
    src: "/clients/rajdarbar-realty.png",
    alt: "Rajdarbar Realty",
    width: 260,
    height: 150,
    className: "h-20 sm:h-24 w-auto max-w-[210px] object-contain",
  },
  {
    src: "/clients/clat-india.jpeg",
    alt: "CLAT India",
    width: 220,
    height: 220,
    className: "h-24 sm:h-28 w-auto object-contain rounded-full",
  },
  {
    src: "/clients/go-global.jpeg",
    alt: "Go Global",
    width: 220,
    height: 220,
    className: "h-24 sm:h-28 w-auto object-contain rounded-full",
  },
  {
    src: "/clients/rana-academy.png",
    alt: "Rana Academy",
    width: 260,
    height: 130,
    className: "h-14 sm:h-16 w-auto max-w-[200px] object-contain invert",
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
          <Stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
            {clientLogos.map((logo) => (
              <StaggerItem key={logo.src} className="h-full">
                {logo.href ? (
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={logo.alt}
                    className="group flex h-36 sm:h-44 items-center justify-center rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white px-6 py-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className={`${logo.className} transition-transform duration-300 group-hover:scale-105`}
                    />
                  </a>
                ) : (
                  <div className="group flex h-36 sm:h-44 items-center justify-center rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white px-6 py-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className={`${logo.className} transition-transform duration-300 group-hover:scale-105`}
                    />
                  </div>
                )}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
