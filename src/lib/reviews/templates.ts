/*
 * The free review writer: no API key, no network. Used when no AI provider is set up or
 * every provider fails, and in the product page's demo.
 *
 * Reviews are assembled from phrase banks: an opener, one or two sentences about things that
 * fit the business category (tone set by the stars), an optional line about the business's own
 * highlights, and a closer. Low ratings stay polite and constructive but read as low ratings.
 * English, Hinglish (Roman script) and Hindi (Devanagari) each have their own banks, with
 * Hindi gender agreement (accha/acchi, tha/thi) per noun.
 */

import type { ReviewLanguage } from "./types";

type G = "m" | "f";
interface Aspect {
  en: string;
  /** English verb agreement: "the staff were" */
  pl?: boolean;
  hl: string;
  hi: string;
  g: G;
}
interface Bank {
  aspects: Aspect[];
  /** Who served the customer, used for the polite line on low ratings */
  people: Aspect;
}

const STAFF: Aspect = { en: "the staff", pl: true, hl: "staff", hi: "स्टाफ़", g: "m" };
const TEAM: Aspect = { en: "the team", hl: "team", hi: "टीम", g: "f" };
const SERVICE: Aspect = { en: "the service", hl: "service", hi: "सर्विस", g: "f" };
const CLEAN: Aspect = { en: "the cleanliness", hl: "saaf-safai", hi: "साफ़-सफ़ाई", g: "f" };
const GUIDANCE: Aspect = { en: "the guidance", hl: "guidance", hi: "गाइडेंस", g: "f" };

const BANKS: Record<string, Bank> = {
  "Restaurant / Café": {
    aspects: [
      { en: "the food", hl: "khana", hi: "खाना", g: "m" },
      { en: "the taste", hl: "swaad", hi: "स्वाद", g: "m" },
      { en: "the ambience", hl: "mahaul", hi: "माहौल", g: "m" },
      SERVICE,
    ],
    people: STAFF,
  },
  "Salon / Spa": {
    aspects: [SERVICE, { en: "the haircut", hl: "haircut", hi: "हेयरकट", g: "m" }, CLEAN, { en: "the ambience", hl: "mahaul", hi: "माहौल", g: "m" }],
    people: STAFF,
  },
  "Clinic / Hospital": {
    aspects: [
      { en: "the consultation", hl: "doctor ki salah", hi: "डॉक्टर की सलाह", g: "f" },
      { en: "the treatment", hl: "ilaaj", hi: "इलाज", g: "m" },
      { en: "the waiting time", hl: "waiting time", hi: "इंतज़ार का समय", g: "m" },
      CLEAN,
    ],
    people: STAFF,
  },
  "Dental Clinic": {
    aspects: [
      { en: "the treatment", hl: "ilaaj", hi: "इलाज", g: "m" },
      { en: "the doctor's explanation", hl: "doctor ka samjhana", hi: "डॉक्टर का समझाना", g: "m" },
      { en: "the hygiene", hl: "saaf-safai", hi: "साफ़-सफ़ाई", g: "f" },
      { en: "the waiting time", hl: "waiting time", hi: "इंतज़ार का समय", g: "m" },
    ],
    people: STAFF,
  },
  "Gym / Fitness": {
    aspects: [
      { en: "the equipment", hl: "equipment", hi: "इक्विपमेंट", g: "m" },
      CLEAN,
      { en: "the atmosphere", hl: "mahaul", hi: "माहौल", g: "m" },
      { en: "the workout plan", hl: "workout plan", hi: "वर्कआउट प्लान", g: "m" },
    ],
    people: { en: "the trainers", pl: true, hl: "trainers", hi: "ट्रेनर", g: "m" },
  },
  "Hotel / Resort": {
    aspects: [
      { en: "the room", hl: "kamra", hi: "कमरा", g: "m" },
      { en: "the hospitality", hl: "mehmaan-nawazi", hi: "मेहमान-नवाज़ी", g: "f" },
      CLEAN,
      { en: "the food", hl: "khana", hi: "खाना", g: "m" },
    ],
    people: STAFF,
  },
  "Retail Store": {
    aspects: [
      { en: "the product range", hl: "products ki variety", hi: "प्रोडक्ट्स की वैरायटी", g: "f" },
      { en: "the pricing", hl: "rate", hi: "रेट", g: "m" },
      { en: "the billing", hl: "billing", hi: "बिलिंग", g: "f" },
      { en: "the quality", hl: "quality", hi: "क्वालिटी", g: "f" },
    ],
    people: STAFF,
  },
  "Real Estate": {
    aspects: [
      GUIDANCE,
      { en: "the transparency", hl: "transparency", hi: "पारदर्शिता", g: "f" },
      { en: "the follow-up", hl: "follow-up", hi: "फ़ॉलो-अप", g: "m" },
      { en: "the site visit", hl: "site visit", hi: "साइट विज़िट", g: "f" },
    ],
    people: TEAM,
  },
  "Education / Coaching": {
    aspects: [
      { en: "the teaching", hl: "padhai", hi: "पढ़ाई", g: "f" },
      { en: "the study material", hl: "study material", hi: "स्टडी मटीरियल", g: "m" },
      { en: "the doubt sessions", pl: true, hl: "doubt session", hi: "डाउट सेशन", g: "m" },
      { en: "the test series", hl: "test series", hi: "टेस्ट सीरीज़", g: "f" },
    ],
    people: { en: "the teachers", pl: true, hl: "teachers", hi: "टीचर्स", g: "m" },
  },
  "Immigration Consultancy": {
    aspects: [
      GUIDANCE,
      { en: "the documentation support", hl: "documentation", hi: "डॉक्यूमेंटेशन", g: "m" },
      { en: "the communication", hl: "baat-cheet", hi: "बातचीत", g: "f" },
      { en: "the process", hl: "process", hi: "प्रोसेस", g: "m" },
    ],
    people: TEAM,
  },
  "Digital Marketing Agency": {
    aspects: [
      { en: "the strategy", hl: "strategy", hi: "स्ट्रैटेजी", g: "f" },
      { en: "the work", hl: "kaam", hi: "काम", g: "m" },
      { en: "the reporting", hl: "reporting", hi: "रिपोर्टिंग", g: "f" },
      { en: "the communication", hl: "baat-cheet", hi: "बातचीत", g: "f" },
    ],
    people: TEAM,
  },
  "Automobile / Service Centre": {
    aspects: [
      SERVICE,
      { en: "the delivery time", hl: "delivery time", hi: "डिलीवरी टाइम", g: "m" },
      { en: "the pricing", hl: "rate", hi: "रेट", g: "m" },
      { en: "the work quality", hl: "kaam ki quality", hi: "काम की क्वालिटी", g: "f" },
    ],
    people: STAFF,
  },
};
const DEFAULT_BANK: Bank = {
  aspects: [SERVICE, { en: "the experience", hl: "experience", hi: "अनुभव", g: "m" }, { en: "the facilities", pl: true, hl: "suvidha", hi: "सुविधा", g: "f" }],
  people: STAFF,
};

// ---------- small helpers ----------
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const pick = <T,>(a: T[]): T => a[Math.floor(Math.random() * a.length)];
function shuffle<T>(a: T[]): T[] {
  const c = [...a];
  for (let i = c.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [c[i], c[j]] = [c[j], c[i]];
  }
  return c;
}
const was = (a: Aspect) => (a.pl ? "were" : "was");
const needs = (a: Aspect) => (a.pl ? "need" : "needs");
// Hindi agreement
const tha = (a: Aspect) => (a.g === "f" ? "thi" : "tha");
const ach = (a: Aspect) => (a.g === "f" ? "acchi" : "accha");
const sak = (a: Aspect) => (a.g === "f" ? "sakti" : "sakta");
const th = (a: Aspect) => (a.g === "f" ? "थी" : "था");
const ac = (a: Aspect) => (a.g === "f" ? "अच्छी" : "अच्छा");
const sk = (a: Aspect) => (a.g === "f" ? "सकती" : "सकता");

type Line = (a: Aspect) => string;
interface Lang {
  great: Line[];
  good: Line[];
  okay: Line[];
  improve: Line[];
  strong: Line[];
  polite: Line[];
  highlight: ((h: string) => string)[];
  open: Record<number, ((n: string) => string)[]>;
  close: Record<number, string[]>;
}

const EN: Lang = {
  great: [
    (a) => `${cap(a.en)} ${was(a)} excellent.`,
    (a) => `Really loved ${a.en}.`,
    (a) => `${cap(a.en)} ${was(a)} top class.`,
    (a) => `Very impressed with ${a.en}.`,
    (a) => `${cap(a.en)} ${was(a)} just perfect.`,
  ],
  good: [(a) => `${cap(a.en)} ${was(a)} really good.`, (a) => `Happy with ${a.en}.`, (a) => `${cap(a.en)} ${was(a)} nice.`, (a) => `Liked ${a.en}.`],
  okay: [(a) => `${cap(a.en)} ${was(a)} fine.`, (a) => `${cap(a.en)} ${was(a)} decent.`, (a) => `No complaints about ${a.en}.`],
  improve: [
    (a) => `${cap(a.en)} could be better.`,
    (a) => `${cap(a.en)} ${needs(a)} some improvement.`,
    (a) => `I expected more from ${a.en}.`,
    (a) => `${cap(a.en)} ${was(a)} not up to the mark this time.`,
  ],
  strong: [
    (a) => `${cap(a.en)} ${needs(a)} a lot of improvement.`,
    (a) => `I was disappointed with ${a.en}.`,
    (a) => `${cap(a.en)} ${was(a)} below expectations.`,
  ],
  polite: [(p) => `${cap(p.en)} ${was(p)} polite though.`, (p) => `${cap(p.en)} ${was(p)} courteous, which I appreciate.`],
  highlight: [(h) => `Special mention for the ${h}.`, (h) => `Loved the ${h}.`, (h) => `The ${h} stood out.`],
  open: {
    5: [(n) => `Had a wonderful experience at ${n}.`, (n) => `Great experience at ${n}!`, (n) => `Highly recommend ${n}.`, () => ""],
    4: [(n) => `Good experience at ${n}.`, (n) => `Nice visit to ${n}.`, () => `Overall a good experience.`, () => ""],
    3: [(n) => `Average experience at ${n}.`, () => `It was an okay visit.`, () => `Mixed experience this time.`],
    2: [(n) => `Not fully satisfied with my visit to ${n}.`, (n) => `My visit to ${n} was a bit disappointing.`, () => `Expected better this time.`],
    1: [(n) => `Not a good experience at ${n} this time.`, () => `Disappointed with my visit.`, (n) => `My experience at ${n} was not good.`],
  },
  close: {
    5: ["Will definitely come back!", "Highly recommended.", "Keep up the great work!", "Thank you to the whole team."],
    4: ["Would recommend.", "Will visit again.", "Good overall."],
    3: ["Hope they work on it.", "Might give it another try.", "Decent overall."],
    2: ["Hope they improve.", "Hoping for a better experience next time."],
    1: ["I hope the team takes this feedback seriously.", "Hope things improve soon.", "Hoping it gets better."],
  },
};

const HL: Lang = {
  great: [
    (a) => `${cap(a.hl)} ekdum badhiya ${tha(a)}.`,
    (a) => `${cap(a.hl)} bahut ${ach(a)} ${tha(a)}.`,
    (a) => `${cap(a.hl)} top class ${tha(a)}.`,
    (a) => `${cap(a.hl)} ka jawaab nahi.`,
  ],
  good: [(a) => `${cap(a.hl)} ${ach(a)} ${tha(a)}.`, (a) => `${cap(a.hl)} se khush hoon.`, (a) => `${cap(a.hl)} kaafi ${ach(a)} ${tha(a)}.`],
  okay: [(a) => `${cap(a.hl)} theek ${tha(a)}.`, (a) => `${cap(a.hl)} theek-thaak ${tha(a)}.`],
  improve: [(a) => `${cap(a.hl)} mein thoda sudhaar ho sakta hai.`, (a) => `${cap(a.hl)} aur behtar ho ${sak(a)} hai.`],
  strong: [
    (a) => `${cap(a.hl)} mein kaafi sudhaar ki zarurat hai.`,
    (a) => `${cap(a.hl)} se nirasha hui.`,
    (a) => `${cap(a.hl)} umeed ke mutabik nahi ${tha(a)}.`,
  ],
  polite: [(p) => `${cap(p.hl)} ka vyavhaar accha tha.`, (p) => `Haan, ${p.hl} ka behaviour polite tha.`],
  highlight: [(h) => `${cap(h)} ka jawaab nahi.`, (h) => `${cap(h)} khaas taur par pasand aaya.`],
  open: {
    5: [(n) => `${n} mein bahut accha experience raha.`, (n) => `${n} ka experience shandaar raha!`, () => ""],
    4: [(n) => `${n} mein accha experience raha.`, () => `Overall accha experience raha.`, () => ""],
    3: [() => `Experience theek-thaak raha.`, (n) => `${n} mein average experience raha.`],
    2: [() => `Is baar experience utna accha nahi raha.`, (n) => `${n} se thodi zyada umeed thi.`],
    1: [(n) => `Is baar ${n} mein experience accha nahi raha.`, () => `Kaafi nirasha hui.`],
  },
  close: {
    5: ["Zaroor dobara aayenge!", "Sabko recommend karenge.", "Poori team ko dhanyavaad!"],
    4: ["Dobara aayenge.", "Recommend karenge."],
    3: ["Umeed hai aage behtar hoga."],
    2: ["Umeed hai sudhaar hoga.", "Agli baar behtar experience ki umeed hai."],
    1: ["Umeed hai team is feedback par dhyan degi.", "Jaldi sudhaar ki umeed hai."],
  },
};

const HI: Lang = {
  great: [
    (a) => `${a.hi} बहुत ${ac(a)} ${th(a)}।`,
    (a) => `${a.hi} एकदम बढ़िया ${th(a)}।`,
    (a) => `${a.hi} लाजवाब ${th(a)}।`,
    (a) => `${a.hi} का जवाब नहीं।`,
  ],
  good: [(a) => `${a.hi} ${ac(a)} ${th(a)}।`, (a) => `${a.hi} से खुश हूँ।`],
  okay: [(a) => `${a.hi} ठीक ${th(a)}।`, (a) => `${a.hi} ठीक-ठाक ${th(a)}।`],
  improve: [(a) => `${a.hi} में थोड़ा सुधार हो सकता है।`, (a) => `${a.hi} और बेहतर हो ${sk(a)} है।`],
  strong: [(a) => `${a.hi} में काफ़ी सुधार की ज़रूरत है।`, (a) => `${a.hi} उम्मीद के मुताबिक नहीं ${th(a)}।`],
  polite: [(p) => `${p.hi} का व्यवहार अच्छा था।`],
  highlight: [(h) => `${h} का जवाब नहीं।`, (h) => `${h} ख़ास तौर पर पसंद आया।`],
  open: {
    5: [(n) => `${n} में बहुत अच्छा अनुभव रहा।`, (n) => `${n} का अनुभव शानदार रहा!`, () => ""],
    4: [(n) => `${n} में अच्छा अनुभव रहा।`, () => `कुल मिलाकर अच्छा अनुभव रहा।`],
    3: [() => `अनुभव ठीक-ठाक रहा।`, (n) => `${n} में औसत अनुभव रहा।`],
    2: [() => `इस बार अनुभव उतना अच्छा नहीं रहा।`, (n) => `${n} से थोड़ी ज़्यादा उम्मीद थी।`],
    1: [(n) => `इस बार ${n} में अनुभव अच्छा नहीं रहा।`, () => `काफ़ी निराशा हुई।`],
  },
  close: {
    5: ["ज़रूर दोबारा आएँगे!", "सबको सलाह देंगे।", "पूरी टीम को धन्यवाद!"],
    4: ["दोबारा आएँगे।", "दूसरों को भी बताएँगे।"],
    3: ["उम्मीद है आगे बेहतर होगा।"],
    2: ["उम्मीद है सुधार होगा।"],
    1: ["उम्मीद है टीम इस पर ध्यान देगी।"],
  },
};

const LANGS: Record<ReviewLanguage, Lang> = { English: EN, Hinglish: HL, Hindi: HI };

export interface TemplateInput {
  name: string;
  category: string;
  highlights: string;
  language: ReviewLanguage;
}

function one(b: TemplateInput, rating: number): string {
  const L = LANGS[b.language] ?? EN;
  const bank = BANKS[b.category] ?? DEFAULT_BANK;
  const [a1, a2] = shuffle(bank.aspects);
  const highlights = b.highlights.split(",").map((h) => h.trim()).filter(Boolean);
  const parts: string[] = [pick(L.open[rating])(b.name)];

  if (rating === 5) {
    parts.push(pick(L.great)(a1));
    parts.push(highlights.length && Math.random() < 0.6 ? pick(L.highlight)(pick(highlights)) : pick(L.great)(a2));
  } else if (rating === 4) {
    parts.push(pick(L.good)(a1));
    parts.push(highlights.length && Math.random() < 0.5 ? pick(L.highlight)(pick(highlights)) : pick(L.good)(a2));
  } else if (rating === 3) {
    parts.push(pick(L.okay)(a1), pick(L.improve)(a2));
  } else if (rating === 2) {
    parts.push(pick(L.improve)(a1));
    parts.push(Math.random() < 0.6 ? pick(L.polite)(bank.people) : pick(L.okay)(a2));
  } else {
    parts.push(pick(L.strong)(a1));
    if (Math.random() < 0.5) parts.push(pick(L.improve)(a2));
    if (Math.random() < 0.6) parts.push(pick(L.polite)(bank.people));
  }
  parts.push(pick(L.close[rating]));
  return parts.filter(Boolean).join(" ");
}

/** `count` different reviews for this business and star rating. */
export function templateReviews(b: TemplateInput, rating: number, count = 4): string[] {
  const r = Math.min(5, Math.max(1, Math.round(rating)));
  const out = new Set<string>();
  for (let tries = 0; out.size < count && tries < count * 20; tries++) out.add(one(b, r));
  return [...out];
}
