"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "@/components/reveal";

const politicalFaqs = [
  {
    q: "How fast can CreateVerse set up an active Digital War Room for our campaign?",
    a: "Our rapid-deployment operational war room can be set up within 72 hours. This includes social listening crawlers, encrypted team communication protocols, counter-narrative emergency workflows, and initial booth-level demographic mapping.",
  },
  {
    q: "Do you handle Meta and Google political ad disclaimer verifications and Election Commission compliance?",
    a: "Yes. We manage end-to-end authorization for Meta (Facebook & Instagram) 'Issues, Elections or Politics' disclaimers, Google Election Ads verification, Media Certification and Monitoring Committee (MCMC) pre-approvals, and complete Model Code of Conduct (MCC) compliance.",
  },
  {
    q: "What is your constituency exclusivity policy?",
    a: "We maintain strict constituency exclusivity. Once contracted for an election mandate in an Assembly or Parliamentary seat, we categorically decline representing any competing candidate in that specific constituency.",
  },
  {
    q: "How does the 12-minute rapid response counter-narrative desk function?",
    a: "Our 24/7 listening engine monitors opposition broadcasts, viral WhatsApp forwards, regional press, and competitor handles. When a hostile or misrepresentative narrative emerges, our response team drafts fact-checks, produces video rebuttals, and seeds counter-angles across local digital channels within 12 minutes.",
  },
  {
    q: "Can you mobilize local grassroots creators and youth influencers?",
    a: "Yes. Rather than relying on generic macro-influencers, we identify, vet, and orchestrate 30 to 60+ hyperlocal community creators, youth opinion leaders, and cultural figures across your constituency who speak the local dialect and command authentic trust among swing voters.",
  },
];

export default function PoliticalFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-white py-14 sm:py-20 border-t border-stone-200">
      <div className="container-site max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Operational Protocols
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-xs sm:text-base text-stone-600 font-normal">
              Key operational, legal, and compliance details regarding our political management retainers.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="divide-y divide-stone-200 overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-200 bg-white shadow-card">
            {politicalFaqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-5 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-sm sm:text-base font-bold text-ink">
                      {f.q}
                    </span>
                    <Plus
                      className={`h-4 w-4 sm:h-5 sm:w-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-accent" : "text-stone-400"
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 sm:px-8 sm:pb-6 text-xs sm:text-sm leading-relaxed text-stone-600 font-normal">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
