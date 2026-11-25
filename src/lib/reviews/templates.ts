/*
 * The free review writer: no API key, no network. Used when no AI provider is set up or
 * every provider fails, and in the product page's demo.
 *
 * Reviews are assembled from phrase banks: an opener, one or two sentences about things that
 * fit the business category (tone set by the stars), an optional line about the business's own
 * highlights, and a closer. Low ratings stay polite and constructive but read as low ratings.
 * English, Hinglish (Roman script), Hindi (Devanagari) and Punjabi (Gurmukhi) each have their own
 * banks, with gender agreement (accha/acchi, ਚੰਗਾ/ਚੰਗੀ) per noun.
 */

type G = "m" | "f";
interface Aspect {
  en: string;
  /** English verb agreement: "the staff were" */
  pl?: boolean;
  hl: string;
  hi: string;
  /** Punjabi (Gurmukhi) */
  pa: string;
  g: G;
}
interface Bank {
  aspects: Aspect[];
  /** Who served the customer, used for the polite line on low ratings */
  people: Aspect;
}

const STAFF: Aspect = { en: "the staff", pl: true, hl: "staff", hi: "स्टाफ़", pa: "ਸਟਾਫ਼", g: "m" };
const TEAM: Aspect = { en: "the team", hl: "team", hi: "टीम", pa: "ਟੀਮ", g: "f" };
const SERVICE: Aspect = { en: "the service", hl: "service", hi: "सर्विस", pa: "ਸਰਵਿਸ", g: "f" };
const CLEAN: Aspect = { en: "the cleanliness", hl: "saaf-safai", hi: "साफ़-सफ़ाई", pa: "ਸਾਫ਼-ਸਫ਼ਾਈ", g: "f" };
const GUIDANCE: Aspect = { en: "the guidance", hl: "guidance", hi: "गाइडेंस", pa: "ਗਾਈਡੈਂਸ", g: "f" };

const BANKS: Record<string, Bank> = {
  "Restaurant / Café": {
    aspects: [
      { en: "the food", hl: "khana", hi: "खाना", pa: "ਖਾਣਾ", g: "m" },
      { en: "the taste", hl: "swaad", hi: "स्वाद", pa: "ਸੁਆਦ", g: "m" },
      { en: "the ambience", hl: "mahaul", hi: "माहौल", pa: "ਮਾਹੌਲ", g: "m" },
      SERVICE,
    ],
    people: STAFF,
  },
  "Salon / Spa": {
    aspects: [SERVICE, { en: "the haircut", hl: "haircut", hi: "हेयरकट", pa: "ਹੇਅਰਕੱਟ", g: "m" }, CLEAN, { en: "the ambience", hl: "mahaul", hi: "माहौल", pa: "ਮਾਹੌਲ", g: "m" }],
    people: STAFF,
  },
  "Clinic / Hospital": {
    aspects: [
      { en: "the consultation", hl: "doctor ki salah", hi: "डॉक्टर की सलाह", pa: "ਡਾਕਟਰ ਦੀ ਸਲਾਹ", g: "f" },
      { en: "the treatment", hl: "ilaaj", hi: "इलाज", pa: "ਇਲਾਜ", g: "m" },
      { en: "the waiting time", hl: "waiting time", hi: "इंतज़ार का समय", pa: "ਉਡੀਕ ਦਾ ਸਮਾਂ", g: "m" },
      CLEAN,
    ],
    people: STAFF,
  },
  "Dental Clinic": {
    aspects: [
      { en: "the treatment", hl: "ilaaj", hi: "इलाज", pa: "ਇਲਾਜ", g: "m" },
      { en: "the doctor's explanation", hl: "doctor ka samjhana", hi: "डॉक्टर का समझाना", pa: "ਡਾਕਟਰ ਦਾ ਸਮਝਾਉਣਾ", g: "m" },
      { en: "the hygiene", hl: "saaf-safai", hi: "साफ़-सफ़ाई", pa: "ਸਾਫ਼-ਸਫ਼ਾਈ", g: "f" },
      { en: "the waiting time", hl: "waiting time", hi: "इंतज़ार का समय", pa: "ਉਡੀਕ ਦਾ ਸਮਾਂ", g: "m" },
    ],
    people: STAFF,
  },
  "Gym / Fitness": {
    aspects: [
      { en: "the equipment", hl: "equipment", hi: "इक्विपमेंट", pa: "ਇਕੁਇਪਮੈਂਟ", g: "m" },
      CLEAN,
      { en: "the atmosphere", hl: "mahaul", hi: "माहौल", pa: "ਮਾਹੌਲ", g: "m" },
      { en: "the workout plan", hl: "workout plan", hi: "वर्कआउट प्लान", pa: "ਵਰਕਆਊਟ ਪਲਾਨ", g: "m" },
    ],
    people: { en: "the trainers", pl: true, hl: "trainers", hi: "ट्रेनर", pa: "ਟ੍ਰੇਨਰ", g: "m" },
  },
  "Hotel / Resort": {
    aspects: [
      { en: "the room", hl: "kamra", hi: "कमरा", pa: "ਕਮਰਾ", g: "m" },
      { en: "the hospitality", hl: "mehmaan-nawazi", hi: "मेहमान-नवाज़ी", pa: "ਮਹਿਮਾਨ-ਨਿਵਾਜ਼ੀ", g: "f" },
      CLEAN,
      { en: "the food", hl: "khana", hi: "खाना", pa: "ਖਾਣਾ", g: "m" },
    ],
    people: STAFF,
  },
  "Retail Store": {
    aspects: [
      { en: "the product range", hl: "products ki variety", hi: "प्रोडक्ट्स की वैरायटी", pa: "ਪ੍ਰੋਡਕਟਾਂ ਦੀ ਵਰਾਇਟੀ", g: "f" },
      { en: "the pricing", hl: "rate", hi: "रेट", pa: "ਰੇਟ", g: "m" },
      { en: "the billing", hl: "billing", hi: "बिलिंग", pa: "ਬਿਲਿੰਗ", g: "f" },
      { en: "the quality", hl: "quality", hi: "क्वालिटी", pa: "ਕੁਆਲਿਟੀ", g: "f" },
    ],
    people: STAFF,
  },
  "Real Estate": {
    aspects: [
      GUIDANCE,
      { en: "the transparency", hl: "transparency", hi: "पारदर्शिता", pa: "ਪਾਰਦਰਸ਼ਤਾ", g: "f" },
      { en: "the follow-up", hl: "follow-up", hi: "फ़ॉलो-अप", pa: "ਫ਼ਾਲੋ-ਅੱਪ", g: "m" },
      { en: "the site visit", hl: "site visit", hi: "साइट विज़िट", pa: "ਸਾਈਟ ਵਿਜ਼ਿਟ", g: "f" },
    ],
    people: TEAM,
  },
  "Education / Coaching": {
    aspects: [
      { en: "the teaching", hl: "padhai", hi: "पढ़ाई", pa: "ਪੜ੍ਹਾਈ", g: "f" },
      { en: "the study material", hl: "study material", hi: "स्टडी मटीरियल", pa: "ਸਟੱਡੀ ਮਟੀਰੀਅਲ", g: "m" },
      { en: "the doubt sessions", pl: true, hl: "doubt session", hi: "डाउट सेशन", pa: "ਡਾਊਟ ਸੈਸ਼ਨ", g: "m" },
      { en: "the test series", hl: "test series", hi: "टेस्ट सीरीज़", pa: "ਟੈਸਟ ਸੀਰੀਜ਼", g: "f" },
    ],
    people: { en: "the teachers", pl: true, hl: "teachers", hi: "टीचर्स", pa: "ਟੀਚਰ", g: "m" },
  },
  "Immigration Consultancy": {
    aspects: [
      GUIDANCE,
      { en: "the documentation support", hl: "documentation", hi: "डॉक्यूमेंटेशन", pa: "ਡਾਕੂਮੈਂਟੇਸ਼ਨ", g: "m" },
      { en: "the communication", hl: "baat-cheet", hi: "बातचीत", pa: "ਗੱਲਬਾਤ", g: "f" },
      { en: "the process", hl: "process", hi: "प्रोसेस", pa: "ਪ੍ਰੋਸੈਸ", g: "m" },
    ],
    people: TEAM,
  },
  "Digital Marketing Agency": {
    aspects: [
      { en: "the ad campaign", hl: "ad campaign", hi: "ऐड कैंपेन", pa: "ਐਡ ਕੈਂਪੇਨ", g: "m" },
      { en: "the website they made", hl: "website", hi: "वेबसाइट", pa: "ਵੈੱਬਸਾਈਟ", g: "f" },
      { en: "the social media work", hl: "social media ka kaam", hi: "सोशल मीडिया का काम", pa: "ਸੋਸ਼ਲ ਮੀਡੀਆ ਦਾ ਕੰਮ", g: "m" },
      { en: "the response time", hl: "response time", hi: "रिस्पॉन्स टाइम", pa: "ਰਿਸਪਾਂਸ ਟਾਈਮ", g: "m" },
    ],
    people: TEAM,
  },
  "Automobile / Service Centre": {
    aspects: [
      SERVICE,
      { en: "the delivery time", hl: "delivery time", hi: "डिलीवरी टाइम", pa: "ਡਿਲਿਵਰੀ ਟਾਈਮ", g: "m" },
      { en: "the pricing", hl: "rate", hi: "रेट", pa: "ਰੇਟ", g: "m" },
      { en: "the work quality", hl: "kaam ki quality", hi: "काम की क्वालिटी", pa: "ਕੰਮ ਦੀ ਕੁਆਲਿਟੀ", g: "f" },
    ],
    people: STAFF,
  },
};
const DEFAULT_BANK: Bank = {
  aspects: [SERVICE, { en: "the experience", hl: "experience", hi: "अनुभव", pa: "ਤਜਰਬਾ", g: "m" }, { en: "the facilities", pl: true, hl: "suvidha", hi: "सुविधा", pa: "ਸਹੂਲਤ", g: "f" }],
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
// Oblique form before a postposition: masculine nouns ending in -aa change to -e
// (khana mein -> khane mein, खाना का -> खाने का, ਖਾਣਾ ਵਿੱਚ -> ਖਾਣੇ ਵਿੱਚ).
const obl = (word: string, g: G, from: string, to: string) => (g === "m" && word.endsWith(from) ? word.slice(0, -from.length) + to : word);
const oHl = (a: Aspect) => obl(a.hl, a.g, "a", "e");
const oHi = (a: Aspect) => obl(a.hi, a.g, "ा", "े");
const oPa = (a: Aspect) => obl(a.pa, a.g, "ਾ", "ੇ");
const ch = (a: Aspect) => (a.g === "f" ? "ਚੰਗੀ" : "ਚੰਗਾ");
const dd = (a: Aspect) => (a.g === "f" ? "ਦੀ" : "ਦਾ");
const sd = (a: Aspect) => (a.g === "f" ? "ਸਕਦੀ" : "ਸਕਦਾ");

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
    (a) => `${cap(a.en)} ${was(a)} spot on.`,
    (a) => `Really happy with ${a.en}.`,
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
    (a) => `${cap(a.hl)} zabardast ${tha(a)}.`,
    (a) => `${cap(oHl(a))} ka jawaab nahi.`,
  ],
  good: [(a) => `${cap(a.hl)} ${ach(a)} ${tha(a)}.`, (a) => `${cap(oHl(a))} se khush hoon.`, (a) => `${cap(a.hl)} kaafi ${ach(a)} ${tha(a)}.`],
  okay: [(a) => `${cap(a.hl)} theek ${tha(a)}.`, (a) => `${cap(a.hl)} theek-thaak ${tha(a)}.`],
  improve: [(a) => `${cap(oHl(a))} mein thoda sudhaar ho sakta hai.`, (a) => `${cap(a.hl)} aur behtar ho ${sak(a)} hai.`],
  strong: [
    (a) => `${cap(oHl(a))} mein kaafi sudhaar ki zarurat hai.`,
    (a) => `${cap(oHl(a))} se nirasha hui.`,
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
    (a) => `${oHi(a)} का जवाब नहीं।`,
  ],
  good: [(a) => `${a.hi} ${ac(a)} ${th(a)}।`, (a) => `${oHi(a)} से खुश हूँ।`],
  okay: [(a) => `${a.hi} ठीक ${th(a)}।`, (a) => `${a.hi} ठीक-ठाक ${th(a)}।`],
  improve: [(a) => `${oHi(a)} में थोड़ा सुधार हो सकता है।`, (a) => `${a.hi} और बेहतर हो ${sk(a)} है।`],
  strong: [(a) => `${oHi(a)} में काफ़ी सुधार की ज़रूरत है।`, (a) => `${a.hi} उम्मीद के मुताबिक नहीं ${th(a)}।`],
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


const PA: Lang = {
  great: [
    (a) => `${a.pa} ਬਹੁਤ ${ch(a)} ਸੀ।`,
    (a) => `${a.pa} ਬਹੁਤ ਵਧੀਆ ਸੀ।`,
    (a) => `${oPa(a)} ਦਾ ਕੋਈ ਜਵਾਬ ਨਹੀਂ।`,
    (a) => `${a.pa} ਕਮਾਲ ${dd(a)} ਸੀ।`,
  ],
  good: [(a) => `${a.pa} ${ch(a)} ਸੀ।`, (a) => `${oPa(a)} ਤੋਂ ਖੁਸ਼ ਹਾਂ।`],
  okay: [(a) => `${a.pa} ਠੀਕ ਸੀ।`, (a) => `${a.pa} ਠੀਕ-ਠਾਕ ਸੀ।`],
  improve: [(a) => `${oPa(a)} ਵਿੱਚ ਥੋੜ੍ਹਾ ਸੁਧਾਰ ਹੋ ਸਕਦਾ ਹੈ।`, (a) => `${a.pa} ਹੋਰ ਵਧੀਆ ਹੋ ${sd(a)} ਹੈ।`],
  strong: [(a) => `${oPa(a)} ਵਿੱਚ ਕਾਫ਼ੀ ਸੁਧਾਰ ਦੀ ਲੋੜ ਹੈ।`, (a) => `${a.pa} ਉਮੀਦ ਮੁਤਾਬਕ ਨਹੀਂ ਸੀ।`],
  polite: [(p) => `${p.pa} ਦਾ ਵਿਹਾਰ ਚੰਗਾ ਸੀ।`],
  highlight: [(h) => `${h} ਦਾ ਕੋਈ ਜਵਾਬ ਨਹੀਂ।`, (h) => `${h} ਖ਼ਾਸ ਤੌਰ 'ਤੇ ਪਸੰਦ ਆਇਆ।`],
  open: {
    5: [(n) => `${n} ਵਿੱਚ ਬਹੁਤ ਵਧੀਆ ਤਜਰਬਾ ਰਿਹਾ।`, (n) => `${n} ਦਾ ਤਜਰਬਾ ਸ਼ਾਨਦਾਰ ਰਿਹਾ!`, () => ""],
    4: [(n) => `${n} ਵਿੱਚ ਚੰਗਾ ਤਜਰਬਾ ਰਿਹਾ।`, () => `ਕੁੱਲ ਮਿਲਾ ਕੇ ਚੰਗਾ ਤਜਰਬਾ ਰਿਹਾ।`],
    3: [() => `ਤਜਰਬਾ ਠੀਕ-ਠਾਕ ਰਿਹਾ।`, (n) => `${n} ਵਿੱਚ ਔਸਤ ਤਜਰਬਾ ਰਿਹਾ।`],
    2: [() => `ਇਸ ਵਾਰ ਤਜਰਬਾ ਇੰਨਾ ਚੰਗਾ ਨਹੀਂ ਰਿਹਾ।`, (n) => `${n} ਤੋਂ ਥੋੜ੍ਹੀ ਹੋਰ ਉਮੀਦ ਸੀ।`],
    1: [(n) => `ਇਸ ਵਾਰ ${n} ਵਿੱਚ ਤਜਰਬਾ ਚੰਗਾ ਨਹੀਂ ਰਿਹਾ।`, () => `ਕਾਫ਼ੀ ਨਿਰਾਸ਼ਾ ਹੋਈ।`],
  },
  close: {
    5: ["ਜ਼ਰੂਰ ਦੁਬਾਰਾ ਆਵਾਂਗੇ!", "ਸਭ ਨੂੰ ਸਲਾਹ ਦੇਵਾਂਗੇ।", "ਪੂਰੀ ਟੀਮ ਦਾ ਧੰਨਵਾਦ!"],
    4: ["ਦੁਬਾਰਾ ਆਵਾਂਗੇ।", "ਹੋਰਾਂ ਨੂੰ ਵੀ ਦੱਸਾਂਗੇ।"],
    3: ["ਉਮੀਦ ਹੈ ਅੱਗੇ ਹੋਰ ਵਧੀਆ ਹੋਵੇਗਾ।"],
    2: ["ਉਮੀਦ ਹੈ ਸੁਧਾਰ ਹੋਵੇਗਾ।"],
    1: ["ਉਮੀਦ ਹੈ ਟੀਮ ਇਸ ਵੱਲ ਧਿਆਨ ਦੇਵੇਗੀ।"],
  },
};

const LANGS: Record<string, Lang> = { English: EN, Hinglish: HL, Hindi: HI, Punjabi: PA };

export interface TemplateInput {
  name: string;
  category: string;
  highlights: string;
  /** English, Hinglish, Hindi or Punjabi; anything else is written in English. */
  language: string;
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
