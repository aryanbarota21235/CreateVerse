import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Award,
  Globe,
  Users,
  HeartHandshake,
  Building2,
  BookOpen,
  Quote,
} from "lucide-react";
import Reveal from "@/components/reveal";
import { FacebookIcon, XIcon } from "@/components/social-icons";

export const metadata: Metadata = {
  title: "Pritpal Singh Pannu (प्रीतपाल सिंह पन्नू) — Founder & Chairman, NIFAA | National Youth Awardee | Karnal",
  description:
    "Official profile of Pritpal Singh Pannu (प्रीतपाल सिंह पन्नू), Founder & Chairman of NIFAA (National Integrated Forum of Artists and Activists), National Youth Awardee (Govt. of India), Lawyer, Entrepreneur, and prominent Social Worker from Karnal, Haryana.",
  keywords: [
    "Pritpal Singh Pannu",
    "प्रीतपाल सिंह पन्नू",
    "Pritpal Singh Pannu NIFAA",
    "Pritpal Singh Pannu Karnal",
    "Founder NIFAA",
    "Chairman NIFAA India",
    "National Integrated Forum of Artists and Activists",
    "National Youth Awardee Pritpal Singh Pannu",
    "India Mauritius Trade & Cultural Friendship Forum",
    "District Hockey Association Karnal President",
    "International Sikh Forum",
    "CreateVerse public figure clients",
  ],
  alternates: {
    canonical: "https://www.createverse.in/clients/pritpal-singh-pannu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Pritpal Singh Pannu — Founder & Chairman, NIFAA | National Youth Awardee",
    description:
      "Lawyer, entrepreneur, and the driving force behind NIFAA spanning 28 States & UTs across India. National Youth Awardee from Karnal, Haryana.",
    url: "https://www.createverse.in/clients/pritpal-singh-pannu",
    siteName: "CreateVerse",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "https://www.createverse.in/politicians/pritpal-singh-pannu.png",
        width: 454,
        height: 500,
        alt: "Pritpal Singh Pannu — Founder & Chairman, NIFAA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pritpal Singh Pannu — Founder & Chairman, NIFAA | Karnal",
    description:
      "Official profile of Pritpal Singh Pannu, Founder & Chairman of NIFAA (National Integrated Forum of Artists and Activists) and National Youth Awardee.",
    images: ["https://www.createverse.in/politicians/pritpal-singh-pannu.png"],
  },
};

const quickFacts = [
  { label: "Full Name", value: "Pritpal Singh Pannu (प्रीतपाल सिंह पन्नू)" },
  { label: "Primary Role", value: "Founder & Chairman, NIFAA (India)" },
  { label: "National Honour", value: "National Youth Award (Govt. of India, 2008)" },
  { label: "Birthplace", value: "Village Mehmal, District Karnal, Haryana" },
  { label: "Profession", value: "Lawyer, Entrepreneur & Social Activist" },
  { label: "NIFAA Footprint", value: "28 States & Union Territories (Founded 2000)" },
  { label: "Flagship Outreach", value: "Desh Ki Baat (10+ Lakh Students Reached)" },
  { label: "Headquarters", value: "65-L, Model Town, Karnal, Haryana" },
];

const positionsHeld = [
  {
    role: "Chairman",
    organization: "National Integrated Forum of Artists and Activists (NIFAA), India",
  },
  {
    role: "President",
    organization: "India Mauritius Trade & Cultural Friendship Forum",
  },
  {
    role: "President",
    organization: "District Hockey Association, Karnal",
  },
  {
    role: "General Secretary",
    organization: "International Sikh Forum",
  },
  {
    role: "Working President",
    organization: "District Fencing Association",
  },
  {
    role: "Ex. Member",
    organization: "Lok Adalat & Telephone Advisory Committee (Ministry of Telecommunication)",
  },
];

const globalMilestones = [
  {
    icon: Globe,
    title: "JICA Community Development Training (Japan)",
    description:
      "Completed a 20-day intensive Community Development Training Program hosted by the Japan International Cooperation Agency (JICA) in Japan, alongside organizing Indian artists' painting exhibitions across Japan, USA, Russia, and Mauritius.",
  },
  {
    icon: Users,
    title: "Global Conferences (USA, Canada, Austria & Australia)",
    description:
      "Represented Indian civil society at International Conferences on AIDS in Austria (2010), Washington D.C., USA (2012), Melbourne, Australia (2014), and Montreal, Canada (2022), plus GOPIO's Diaspora Conference in New York.",
  },
  {
    icon: Building2,
    title: "India–Mauritius Global Partnership & Cultural Summits",
    description:
      "Spearheaded the India Mauritius Global Partnership Summit, a two-day bilateral Agricultural Conference in Mauritius, and international delegations for Vishav Hindi Diwas and International Gita Mahotsav.",
  },
  {
    icon: HeartHandshake,
    title: "Desh Ki Baat & Grassroots Humanitarian Service",
    description:
      "Reached over 10 Lakh students through the annual '26 November se 26 January — Desh Ki Baat' campaign, while leading rehabilitation and welfare initiatives in rural areas, prisons, orphanages, and for acid attack survivors and differently-abled individuals ('Yes We Can' festival in Russia).",
  },
];

const faqs = [
  {
    question: "Who is Pritpal Singh Pannu?",
    answer:
      "Pritpal Singh Pannu is a prominent social worker, lawyer, entrepreneur, and the Founder & Chairman of NIFAA (National Integrated Forum of Artists and Activists), headquartered in Karnal, Haryana. He was conferred the prestigious National Youth Award by the Government of India in 2008.",
  },
  {
    question: "When did Pritpal Singh Pannu establish NIFAA?",
    answer:
      "Pritpal Singh Pannu founded NIFAA in the year 2000 with the vision of uniting artists and youth activists on a single platform for positive social transformation. Today, NIFAA operates across 28 states and union territories of India.",
  },
  {
    question: "What is Pritpal Singh Pannu's early background?",
    answer:
      "Born in Village Mehmal in Karnal district, he grew up in a modest one-room home, studying under a lantern and cycling long distances to support his education. At age 11, he became Pradhan of the Naujwan Sikh Dal Sewa Organisation and later founded the Yuva Sadbhawna Samiti during his college years.",
  },
  {
    question: "What major positions and international forums has Pritpal Singh Pannu led?",
    answer:
      "Alongside serving as Chairman of NIFAA, he serves as President of the India Mauritius Trade & Cultural Friendship Forum, President of District Hockey Association Karnal, General Secretary of the International Sikh Forum, Working President of District Fencing Association, and has represented India across the USA, Canada, Japan, Russia, Austria, Australia, and Mauritius.",
  },
];

export default function PritpalSinghPannuPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.createverse.in/clients/pritpal-singh-pannu#person",
        name: "Pritpal Singh Pannu",
        alternateName: [
          "प्रीतपाल सिंह पन्नू",
          "Pritpal Singh Pannu NIFAA",
          "Chairman NIFAA Pritpal Singh Pannu",
        ],
        jobTitle: "Founder & Chairman, NIFAA | National Youth Awardee",
        description:
          "Pritpal Singh Pannu is a lawyer, entrepreneur, National Youth Awardee (Govt. of India), and Founder & Chairman of the National Integrated Forum of Artists and Activists (NIFAA) based in Karnal, Haryana.",
        image: "https://www.createverse.in/politicians/pritpal-singh-pannu.png",
        url: "https://www.createverse.in/clients/pritpal-singh-pannu",
        sameAs: [
          "https://www.nifaa.com/about-founder/",
          "https://www.facebook.com/nifaaindia",
          "https://x.com/nifaaindia",
        ],
        affiliation: {
          "@type": "Organization",
          name: "National Integrated Forum of Artists and Activists (NIFAA)",
          url: "https://www.nifaa.com",
        },
        award: "National Youth Award by the Government of India (2008)",
      },
      {
        "@type": "ProfilePage",
        "@id": "https://www.createverse.in/clients/pritpal-singh-pannu#webpage",
        url: "https://www.createverse.in/clients/pritpal-singh-pannu",
        name: "Pritpal Singh Pannu — Founder & Chairman, NIFAA | Official Profile | CreateVerse",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.createverse.in/#website",
          name: "CreateVerse",
          url: "https://www.createverse.in",
        },
        about: {
          "@id": "https://www.createverse.in/clients/pritpal-singh-pannu#person",
        },
        mainEntity: {
          "@id": "https://www.createverse.in/clients/pritpal-singh-pannu#person",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.createverse.in/clients/pritpal-singh-pannu#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.createverse.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Clients",
            item: "https://www.createverse.in/clients",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Pritpal Singh Pannu",
            item: "https://www.createverse.in/clients/pritpal-singh-pannu",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.createverse.in/clients/pritpal-singh-pannu#faq",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-paper text-ink selection:bg-accent selection:text-white">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-paper pt-[76px] sm:pt-[84px] border-b border-stone-200">
          <div className="dot-texture absolute inset-0 opacity-70" />
          <div className="container-site relative pt-6 sm:pt-10 pb-10 sm:pb-16">
            <Reveal>
              <nav className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider mb-6 sm:mb-8">
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
                <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
                <Link href="/clients" className="hover:text-accent transition-colors">
                  Clients
                </Link>
                <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
                <span className="text-ink font-bold">Pritpal Singh Pannu</span>
              </nav>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8 order-2 lg:order-1">
                <Reveal>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-xs mb-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    Founder &amp; Chairman • NIFAA (India)
                  </div>

                  <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-tight">
                    Pritpal Singh Pannu
                  </h1>

                  <p className="mt-2.5 sm:mt-3 font-display text-base sm:text-xl font-semibold text-accent leading-snug">
                    National Youth Awardee (Govt. of India) | Lawyer, Entrepreneur &amp; Social Activist | Karnal
                  </p>

                  <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-ink/85 font-normal">
                    A man of many hats — a lawyer, an entrepreneur, and the driving force behind{" "}
                    <strong>NIFAA (National Integrated Forum of Artists and Activists)</strong>. Born in Village Mehmal in Karnal district, Pritpal Singh Pannu&apos;s journey from studying under the glow of a lantern in a one-room dwelling to building a national social movement spanning 28 States and Union Territories exemplifies fearless dedication to national integration, youth empowerment, and cultural unity.
                  </p>

                  <div className="mt-6 flex items-center gap-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 mr-1">
                      Official:
                    </span>
                    <a
                      href="https://www.facebook.com/nifaaindia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/[0.05] transition-all shadow-2xs hover:scale-110"
                      aria-label="NIFAA Facebook"
                    >
                      <FacebookIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="https://x.com/nifaaindia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-700 hover:text-black hover:border-black/40 hover:bg-stone-100 transition-all shadow-2xs hover:scale-110"
                      aria-label="NIFAA X"
                    >
                      <XIcon className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
                <Reveal>
                  <div className="relative h-60 w-60 sm:h-72 sm:w-72 lg:h-84 lg:w-84 rounded-full p-2 border-[3px] border-stone-200/90 bg-white shadow-xl">
                    <div className="relative h-full w-full overflow-hidden rounded-full bg-stone-100">
                      <Image
                        src="/politicians/pritpal-singh-pannu.png"
                        alt="Pritpal Singh Pannu"
                        fill
                        priority
                        sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 336px"
                        className="object-cover object-top scale-[1.04]"
                      />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK FACT SHEET */}
        <section className="py-10 sm:py-14 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="rounded-3xl border border-stone-200/90 bg-[#F8FAFC] p-5 sm:p-8 shadow-2xs">
                <h2 className="font-display text-lg sm:text-xl font-bold text-ink mb-5 flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span>Quick Profile Overview</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {quickFacts.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-stone-200/80 bg-white p-4"
                    >
                      <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                        {item.label}
                      </p>
                      <p className="mt-1 text-xs sm:text-sm font-bold text-ink">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* BIOGRAPHY & NIFAA VISION */}
        <section className="py-12 sm:py-16 bg-paper border-b border-stone-200">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5">
                <Reveal>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent mb-3">
                    Vision &amp; Journey
                  </div>
                  <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                    From Village Mehmal to a 28-State National Movement
                  </h2>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-stone-600">
                    Raised on stories of warriors and freedom fighters by his mother, Pritpal Singh Pannu developed a lifelong commitment to selfless public service from childhood.
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-7 space-y-5 text-sm sm:text-base leading-relaxed text-ink/85">
                <Reveal>
                  <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-2xs">
                    <h3 className="font-display text-base sm:text-lg font-bold text-ink mb-2">
                      Early Grassroots Leadership (Age 11 to College Years)
                    </h3>
                    <p className="text-stone-600">
                      Born in Village Mehmal, Karnal, Pannu overcame humble beginnings—studying under a lantern and cycling long distances for labour work to fund his education. At just 11 years old, he became Pradhan of the <strong>Naujwan Sikh Dal Sewa Organisation</strong>, and during his college days he founded the <strong>Yuva Sadbhawna Samiti</strong> with fellow students.
                    </p>
                  </div>
                </Reveal>

                <Reveal>
                  <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-2xs">
                    <h3 className="font-display text-base sm:text-lg font-bold text-ink mb-2">
                      Foundation of NIFAA (2000) &amp; National Youth Award (2008)
                    </h3>
                    <p className="text-stone-600">
                      In 2000, he laid the foundation of <strong>NIFAA (National Integrated Forum of Artists and Activists)</strong> to unite artists and social activists on a common platform. After receiving the prestigious <strong>National Youth Award from the Government of India in 2008</strong>, he expanded NIFAA into a national powerhouse across 28 States and Union Territories, inspiring thousands of youth volunteers across India.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* POSITIONS HELD */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="max-w-3xl mb-8 sm:mb-10">
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  Key Positions &amp; Institutional Leadership
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {positionsHeld.map((item) => (
                <Reveal key={item.organization}>
                  <div className="h-full rounded-2xl border border-stone-200/90 bg-[#F8FAFC] p-5">
                    <span className="inline-block rounded-lg bg-accent px-2.5 py-1 text-xs font-extrabold text-white mb-2.5">
                      {item.role}
                    </span>
                    <p className="font-display text-sm sm:text-base font-bold text-ink leading-snug">
                      {item.organization}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNATIONAL CONFERENCES & PROGRAMS */}
        <section className="py-12 sm:py-16 bg-paper border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <div className="max-w-3xl mb-8 sm:mb-10">
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  Global Representation &amp; National Campaigns
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {globalMilestones.map((item) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title}>
                    <div className="h-full rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-2xs flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-stone-900 to-[#0B0F19] text-white">
          <div className="container-site text-center">
            <Reveal>
              <Quote className="mx-auto h-8 w-8 text-sky-400 mb-4" />
              <blockquote className="font-display text-xl sm:text-3xl font-bold text-white max-w-3xl mx-auto leading-snug">
                &ldquo;Recognizing that every form of art can influence society positively, NIFAA serves as the canvas for change—uniting artists and activists on a common platform for the nation.&rdquo;
              </blockquote>
              <div className="mt-6">
                <p className="font-display text-base sm:text-lg font-bold text-white">
                  Pritpal Singh Pannu
                </p>
                <p className="text-xs sm:text-sm text-sky-400 font-medium">
                  Founder &amp; Chairman, NIFAA | National Youth Awardee
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink mb-8">
                Frequently Asked Questions About Pritpal Singh Pannu
              </h2>
            </Reveal>
            <div className="max-w-4xl space-y-4">
              {faqs.map((faq, idx) => (
                <Reveal key={faq.question}>
                  <div className="rounded-2xl border border-stone-200/90 bg-[#F8FAFC] p-5 sm:p-6">
                    <h3 className="font-display text-base sm:text-lg font-bold text-ink flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                        {idx + 1}
                      </span>
                      <span>{faq.question}</span>
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed pl-9">
                      {faq.answer}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
