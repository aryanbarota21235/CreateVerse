/*
 * Hand-written review library, the free backup when no AI is available (English).
 *
 * Grouped by kind of business, five sets per kind (5 stars down to 1). Placeholders:
 *   {name} business name   {city} city   {kw} the client's main keyword   {thing} one of its highlights
 * A line whose placeholder has no value for a client (no city, no keyword...) is skipped.
 * Low ratings complain about general things only, never made-up incidents.
 * These are only the starting set: the first time the backup reviews are read they are copied
 * into the database (src/lib/review-library.ts) and edited from Admin -> Backup reviews after that.
 */

export type Family = "food" | "sweets" | "health" | "beauty" | "fitness" | "stay" | "retail" | "repair" | "agency" | "property" | "learning" | "general";
export type LibrarySets = Record<1 | 2 | 3 | 4 | 5, string[]>;
type Sets = LibrarySets;

/** The starting backup-review types (copied into the database on first use). */
export const LIBRARY_TYPES: { id: Family; label: string }[] = [
  { id: "food", label: "Restaurant / food" },
  { id: "sweets", label: "Sweet shop / bakery" },
  { id: "health", label: "Clinic / health" },
  { id: "beauty", label: "Salon / beauty" },
  { id: "fitness", label: "Gym / fitness" },
  { id: "stay", label: "Hotel / stay" },
  { id: "retail", label: "Shop / retail" },
  { id: "repair", label: "Repair / service centre" },
  { id: "agency", label: "Agency / marketing" },
  { id: "property", label: "Real estate / immigration / consultancy" },
  { id: "learning", label: "Coaching / education" },
  { id: "general", label: "Any other business" },
];

export const FAMILY_OF: Record<string, Family> = {
  "Restaurant / Café": "food",
  "Sweet Shop / Bakery": "sweets",
  "Clinic / Hospital": "health",
  "Dental Clinic": "health",
  "Salon / Spa": "beauty",
  "Gym / Fitness": "fitness",
  "Hotel / Resort": "stay",
  "Retail Store": "retail",
  "Mobile / Laptop / TV Repair": "repair",
  "Automobile / Service Centre": "repair",
  "Digital Marketing Agency": "agency",
  "Real Estate": "property",
  "Immigration Consultancy": "property",
  "Education / Coaching": "learning",
  Other: "general",
};

export const BUILT_IN_LIBRARY: Record<Family, Sets> = {
  sweets: {
    5: [
      "The sweets here are always fresh and not too sugary. My family's favourite for every festival.",
      "Best {kw} in {city}. Pure taste and you can tell they use good ingredients.",
      "Tried the {thing} and it was just perfect. Soft, fresh and full of flavour.",
      "Ordered for a family function and everyone asked where the sweets were from. Neat packing too.",
      "If you need a good {kw} in {city}, go to {name}. Fresh stock and fair prices.",
      "Been buying from {name} for years and the quality has never dropped. Highly recommended.",
      "Perfect for gifting. Lovely boxes, fresh sweets and polite staff.",
      "Everything we bought was fresh and tasty. Staff were patient while we chose.",
    ],
    4: [
      "Fresh and tasty sweets. It gets very crowded around festivals, but worth the wait.",
      "Good quality and nice variety. The {thing} was the best of all.",
      "Nice {kw} in {city}. Taste is good, prices are a little on the higher side.",
      "Really liked the taste. Billing could be a bit faster when it's busy.",
      "Good sweets and neat packing. Would love a few more sugar-free options.",
    ],
    3: [
      "Some sweets were fresh, some felt a day old. Average this time.",
      "Taste was okay, but prices are a bit high compared to other shops.",
      "Decent shop, but the staff were in a hurry and didn't help much.",
      "Okay experience. Nothing wrong, nothing special.",
      "Variety was limited on our visit. Taste was fine.",
    ],
    2: [
      "Sweets didn't taste fresh this time. Staff were polite, but quality needs work.",
      "Expected better quality for the price. Hope they improve.",
      "Too sugary and not fresh. Disappointed this time.",
      "Packing was careless and a few pieces were broken. Needs improvement.",
      "Not satisfied with the taste on this visit.",
    ],
    1: [
      "Not a good experience. The sweets were stale and nobody cared when we told them.",
      "Very disappointed with the quality. Hope they improve.",
      "Bad taste and not fresh at all. Needs serious improvement.",
      "Poor quality for the price. Not happy this time.",
      "Disappointed. The sweets were not fresh and the shop was not clean.",
    ],
  },
  food: {
    5: [
      "Everything we ordered was fresh and full of flavour. Staff were warm and quick. Will definitely come back with family.",
      "Best {kw} in {city}, no doubt. The taste is consistent every single time we visit.",
      "Tried the {thing} and it was just perfect. Clean place, polite staff and fair prices.",
      "Came here on a friend's suggestion and now it's our regular spot. Taste is homely and portions are generous.",
      "If you're looking for a good {kw} in {city}, go to {name}. Fresh stuff and very friendly people.",
      "Quick service even when it was busy. Food came hot and tasted amazing. Thank you {name}!",
      "Ordered for a family function and everyone loved it. Quality was top and packing was neat.",
      "Lovely place to sit with family. Food was tasty and the staff made us feel welcome.",
    ],
    4: [
      "Food was really tasty and came out fast. It gets a little crowded in the evening, but worth it.",
      "Good quality and fair prices. The {thing} was the highlight for us. Will visit again.",
      "Nice {kw} in {city}. Taste is good and staff are polite. Seating could be a bit more comfortable.",
      "Fresh and tasty, exactly how we like it. Parking is a bit tight, otherwise very good.",
      "Enjoyed our meal here. Service was friendly. Would be perfect with a little more variety on the menu.",
      "Good taste and clean place. Took a few extra minutes on a busy day but overall happy.",
    ],
    3: [
      "Taste was okay, but the service was slow on our visit. Average experience overall.",
      "Some items were good, some were just okay. Prices are a little on the higher side.",
      "Food was decent, but the place could be cleaner. Hope they work on it.",
      "Okay experience. Nothing bad, but nothing special either this time.",
      "The taste was fine, but we had to wait quite long for our order. Average.",
    ],
    2: [
      "Food was not as fresh as expected and service was slow. Staff were polite, but it needs work.",
      "Disappointed this time. Taste was below the usual standard and the place felt crowded.",
      "Expected better quality for the price. Hope they improve.",
      "Order came late and was cold by the time it arrived. Needs improvement.",
      "Not satisfied with the taste this time. Staff tried to help, but the food needs work.",
    ],
    1: [
      "Not a good experience. Food was not fresh and service was very slow. Hope they improve.",
      "Very disappointed. The quality was poor and nobody seemed to care. Needs serious improvement.",
      "Bad experience this time. Taste was off and the place was not clean.",
      "Not happy at all. Waited a long time and the food was not worth it.",
      "Poor service and below average food. Hope the management looks into this.",
    ],
  },
  health: {
    5: [
      "Doctor listened to everything patiently and explained the treatment clearly. Felt much better soon after.",
      "Best {kw} in {city}. Very clean, well managed, and the staff are really caring.",
      "Treatment was smooth and almost painless. Doctor made me feel comfortable throughout.",
      "Very professional and honest. They only suggested what was really needed. Highly recommended.",
      "If you need a good {kw} in {city}, this is the place. Caring doctor and helpful staff.",
      "Took my parents here and they were very happy with the care and attention they got.",
      "Clean, hygienic and well organised. Doctor explained every step before starting. Thank you {name}.",
    ],
    4: [
      "Doctor was very good and explained everything properly. Waiting time was a little long, but worth it.",
      "Good treatment and caring staff. Appointment timing could be managed a bit better.",
      "Clean clinic and polite staff. Treatment went well. Would recommend.",
      "Happy with the care I received. Billing took a bit of time, otherwise all good.",
      "Good {kw} in {city}. Doctor is experienced and patient.",
    ],
    3: [
      "Doctor was fine, but the waiting time was too long even with an appointment.",
      "Treatment was okay, but the staff could be more helpful at the front desk.",
      "Average experience. Consultation was quick but I wanted a little more explanation.",
      "Clinic was clean, but things felt rushed on my visit. Okay overall.",
      "Decent treatment, but charges felt a bit high. Average experience.",
    ],
    2: [
      "Had to wait a long time and the consultation felt rushed. Needs improvement.",
      "Not fully satisfied. I didn't get a clear explanation of the treatment.",
      "Staff were polite, but the overall experience was below expectations.",
      "Appointment was delayed without any update. Hope they manage time better.",
      "Expected more care and attention. Hope they improve.",
    ],
    1: [
      "Not a good experience. Long wait and the doctor hardly listened. Hope they improve.",
      "Very disappointed with the care. Nobody explained anything properly.",
      "Poor experience. The clinic was not well managed and staff were not helpful.",
      "Not satisfied at all. The treatment did not help and there was no proper follow-up.",
      "Bad experience this time. Needs serious improvement in patient care.",
    ],
  },
  beauty: {
    5: [
      "Loved my haircut! The stylist understood exactly what I wanted. Very happy with the result.",
      "Best {kw} in {city}. Clean place, hygienic tools and really skilled staff.",
      "Got the {thing} done and it was amazing. Felt completely relaxed. Will come again.",
      "Very professional team. They suggest what suits you and don't push extra services.",
      "If you want a good {kw} in {city}, try {name}. Great results every time.",
      "Lovely experience from start to finish. Staff are friendly and very skilled.",
    ],
    4: [
      "Really happy with the result. Had to wait a bit, but the service was worth it.",
      "Good service and clean place. Prices are a little high but quality is good.",
      "Stylist was skilled and friendly. Booking could be a bit easier.",
      "Nice {kw} in {city}. Relaxing ambience and good work.",
      "Very good experience overall. Would like a little more time spent on the finishing.",
    ],
    3: [
      "Service was okay, but I had to wait even with an appointment.",
      "Result was fine, not exactly what I asked for. Average experience.",
      "Clean place, but the staff seemed in a hurry. Okay overall.",
      "Decent service but a bit expensive for what you get.",
      "Average visit. Nothing wrong, but nothing special.",
    ],
    2: [
      "Not happy with the result. The stylist didn't really listen to what I wanted.",
      "Long wait and the service felt rushed. Needs improvement.",
      "Expected better for the price. Staff were polite though.",
      "Hygiene could be much better. Hope they work on it.",
      "Disappointed this time. Hope they improve.",
    ],
    1: [
      "Very bad experience. The result was nothing like what I asked for.",
      "Not satisfied at all. Rushed service and poor hygiene.",
      "Waited a long time and the service was careless. Hope they improve.",
      "Poor experience. Staff did not listen and the result was disappointing.",
      "Not a good experience this time. Needs serious improvement.",
    ],
  },
  fitness: {
    5: [
      "Trainers here really guide you properly and keep you motivated. Seeing great results.",
      "Best {kw} in {city}. Good machines, clean space and very helpful trainers.",
      "Joined a while back and the change in my fitness is clearly visible. Thank you team!",
      "Equipment is well maintained and trainers correct your form every time.",
      "If you are looking for a {kw} in {city}, join {name}. Great atmosphere and guidance.",
      "Positive vibe, helpful trainers and everything you need for a proper workout.",
    ],
    4: [
      "Good trainers and good equipment. Gets crowded in the evening, but still worth it.",
      "Happy with my progress here. Changing rooms could be a little cleaner.",
      "Nice {kw} in {city}. Trainers are helpful and fees are fair.",
      "Well equipped and motivating. A few more machines would be great.",
      "Good experience overall. Trainers give proper attention.",
    ],
    3: [
      "Equipment is okay, but trainers don't always have time for everyone.",
      "Decent place, but it gets too crowded at peak hours.",
      "Average experience. Cleanliness could be better.",
      "Some machines need repair. Okay otherwise.",
      "Fine for a basic workout, but not much personal attention.",
    ],
    2: [
      "Trainers hardly guide you and many machines need repair.",
      "Too crowded and not clean enough. Needs improvement.",
      "Expected more attention from the trainers for the fees.",
      "Not satisfied. Equipment is not maintained properly.",
      "Disappointing experience. Hope they improve.",
    ],
    1: [
      "Very poor experience. No guidance from trainers and the place is not clean.",
      "Not worth the fees. Broken machines and no attention.",
      "Disappointed. Nobody guides you and the gym is always messy.",
      "Bad experience. Needs serious improvement in maintenance and training.",
      "Not happy at all with this gym. Hope they fix things.",
    ],
  },
  stay: {
    5: [
      "Clean, comfortable room and very helpful staff. Had a really good stay.",
      "Best {kw} in {city}. Good location, good food and polite staff.",
      "Everything was well arranged and check-in was smooth. Will stay here again.",
      "Very good hospitality. Staff went out of their way to help us.",
      "If you need a good {kw} in {city}, stay at {name}. Great value for money.",
    ],
    4: [
      "Nice stay overall. Room was clean, though breakfast could have more variety.",
      "Good location and helpful staff. Wifi was a little slow.",
      "Comfortable room and good service. Check-in took a bit of time.",
      "Good {kw} in {city}. Clean and peaceful.",
      "Happy with the stay. Would like a little better room service.",
    ],
    3: [
      "Room was okay, but cleanliness could be better.",
      "Average stay. Staff were fine but service was slow.",
      "Location is good, but the room needs maintenance.",
      "Okay for one night. Nothing special.",
      "Decent stay but a bit expensive for what you get.",
    ],
    2: [
      "Room was not clean on arrival and service was slow. Needs improvement.",
      "Not satisfied with the stay. Hot water and wifi had problems.",
      "Expected better for the price. Staff were polite though.",
      "Disappointing experience. Hope they improve maintenance.",
      "Below average stay this time.",
    ],
    1: [
      "Very poor stay. Room was not clean and staff did not help.",
      "Not worth the money at all. Needs serious improvement.",
      "Bad experience. Many things in the room were not working.",
      "Disappointed with the service and cleanliness.",
      "Not a good stay. Hope management looks into this.",
    ],
  },
  retail: {
    5: [
      "Great range of products and fair prices. Staff helped me choose the right one.",
      "Best {kw} in {city}. Genuine products and honest people.",
      "Very good experience. Quick billing and friendly staff. Will shop here again.",
      "Found exactly what I needed at a better price than other shops.",
      "If you need a {kw} in {city}, go to {name}. Good quality and good service.",
    ],
    4: [
      "Good variety and reasonable prices. Billing took a little time.",
      "Helpful staff and good quality. Parking is a bit difficult.",
      "Nice {kw} in {city}. Good range of products.",
      "Happy with my purchase. Would like a few more options.",
      "Good shop overall. Staff are polite and patient.",
    ],
    3: [
      "Okay shop, but prices are a bit higher than other places.",
      "Limited variety this time. Staff were fine.",
      "Average experience. Billing was slow.",
      "Products are okay, but staff were not very helpful.",
      "Decent shop, nothing special.",
    ],
    2: [
      "Not happy with the service. Staff did not help much.",
      "Prices are high and variety is limited. Needs improvement.",
      "Had trouble with an exchange. Hope they improve.",
      "Expected better quality. Disappointed this time.",
      "Below average experience. Staff were polite though.",
    ],
    1: [
      "Very bad experience. Rude behaviour and poor quality.",
      "Not satisfied at all. No help with exchange or after-sales.",
      "Overpriced and poor service. Hope they improve.",
      "Disappointed. Would not recommend this time.",
      "Poor experience overall. Needs serious improvement.",
    ],
  },
  repair: {
    5: [
      "Fixed my problem properly and on time. Charges were fair and honest.",
      "Best {kw} in {city}. They explain the issue clearly and don't overcharge.",
      "Got it repaired here and it works like new. Very professional work.",
      "Quick service and genuine parts. Highly recommend {name}.",
      "If you need a {kw} in {city}, go here. Honest people and good work.",
      "They checked everything carefully and fixed it the same day. Very happy.",
      "Took it to other shops before, but only {name} fixed it properly. Thank you!",
    ],
    4: [
      "Good repair work and fair price. Took a little longer than promised.",
      "Problem fixed properly. Would like a bit more update during the repair.",
      "Good {kw} in {city}. Honest estimate and decent work.",
      "Happy with the repair. Shop is a bit crowded but service is good.",
      "Work quality is good. Staff explained the problem clearly.",
    ],
    3: [
      "Repair was okay, but it took longer than they said.",
      "Fixed the issue, but charges felt a bit high.",
      "Average service. Had to follow up a few times for updates.",
      "Work was fine, but communication could be better.",
      "Okay experience. Nothing special.",
    ],
    2: [
      "The problem came back soon after the repair. Needs better work.",
      "Delivery was late and there was no update. Not satisfied.",
      "Charged more than the first estimate. Hope they improve.",
      "Staff were polite, but the repair quality was not good.",
      "Disappointed with the service this time.",
    ],
    1: [
      "Very bad experience. The problem was not fixed properly.",
      "Not satisfied at all. Delays and no clear communication.",
      "Charged a lot and the issue still remains. Hope they improve.",
      "Poor service. Would not recommend this time.",
      "Disappointed. Needs serious improvement in work quality.",
    ],
  },
  agency: {
    5: [
      "Since they started our ads, we are getting many more enquiries and calls. Business is growing.",
      "Best {kw} in {city}. They understood our business quickly and the results are showing.",
      "Many more people know about our brand now. Leads come in regularly. Thank you team!",
      "If you need a {kw} in {city}, talk to {name}. Our business has grown a lot with them.",
      "Our online presence has improved a lot and we are getting real customers from it.",
      "Very responsive team. They reply fast and keep us updated. Great results.",
    ],
    4: [
      "Good results so far, more leads than before. Would like a little more creative variety.",
      "Team is responsive and the enquiries have increased. Happy overall.",
      "Good {kw} in {city}. Our visibility has improved.",
      "We are getting more calls now. A bit more regular updates would be great.",
      "Happy with the growth so far. Team understands our needs.",
    ],
    3: [
      "Some improvement in enquiries, but not as much as we expected.",
      "Team is polite, but replies are sometimes slow.",
      "Average results so far. Hope it improves with time.",
      "Visibility improved a little, but leads are still low.",
      "Okay experience. Communication could be better.",
    ],
    2: [
      "Didn't see the results we expected. Replies were also slow.",
      "Not much change in enquiries. Needs improvement.",
      "Expected more from the campaigns. Team was polite though.",
      "Updates were irregular and results were below expectations.",
      "Disappointed so far. Hope they improve.",
    ],
    1: [
      "Not a good experience. We got no extra enquiries and replies were very slow.",
      "Very disappointed. The service did not meet expectations at all.",
      "No results from the campaigns and poor communication. Hope they improve.",
      "Not satisfied. They need to understand the client's business better.",
      "Poor experience overall. Needs serious improvement.",
    ],
  },
  property: {
    5: [
      "Very honest guidance from start to end. Everything was handled smoothly.",
      "Best {kw} in {city}. Clear process, no hidden charges and quick replies.",
      "They understood exactly what we needed and kept us updated at every step.",
      "If you need a {kw} in {city}, contact {name}. Very professional team.",
      "Smooth experience and everything was explained clearly. Highly recommended.",
    ],
    4: [
      "Good guidance and helpful team. A few updates were delayed, but overall happy.",
      "Honest and professional. Would like a bit faster replies.",
      "Good {kw} in {city}. They know their work well.",
      "Process was smooth and clear. Happy with the service.",
      "Helpful team overall. Paperwork took some time.",
    ],
    3: [
      "Guidance was okay, but replies were slow at times.",
      "Average experience. The process took longer than expected.",
      "Team is polite, but updates were not regular.",
      "Okay service, could be more organised.",
      "Decent help, but charges were not fully clear at the start.",
    ],
    2: [
      "Not satisfied. Updates were irregular and the process was slow.",
      "Expected clearer guidance. Hope they improve.",
      "Had to follow up many times. Needs improvement.",
      "Disappointing experience. Team was polite though.",
      "Below expectations this time.",
    ],
    1: [
      "Very poor experience. No clear guidance and very slow replies.",
      "Not satisfied at all. The process was not handled properly.",
      "Disappointed. Hidden charges and poor communication.",
      "Bad experience. Hope they improve their service.",
      "Not a good experience. Needs serious improvement.",
    ],
  },
  learning: {
    5: [
      "Teachers explain every concept clearly and clear doubts patiently. My marks have improved a lot.",
      "Best {kw} in {city}. Good study material and regular tests.",
      "Personal attention to every student. Really happy I joined {name}.",
      "If you are looking for a {kw} in {city}, join here. Great teachers and results.",
      "My confidence has grown a lot after joining. Thank you to all the teachers.",
    ],
    4: [
      "Good teaching and helpful faculty. Batches are a little crowded.",
      "Concepts are explained well. Would like a few more doubt sessions.",
      "Good {kw} in {city}. Study material is useful.",
      "Happy with the progress. Timings could be a bit more flexible.",
      "Good teachers overall. Tests help a lot.",
    ],
    3: [
      "Teaching is okay, but batches are too big for personal attention.",
      "Average experience. Doubts are not always cleared on time.",
      "Study material is fine, but classes feel rushed.",
      "Okay coaching, nothing special.",
      "Decent teachers, but fees are a bit high.",
    ],
    2: [
      "Not enough attention to students. Needs improvement.",
      "Classes are rushed and doubts are not cleared properly.",
      "Expected better teaching for the fees.",
      "Disappointed with the progress so far. Hope they improve.",
      "Below expectations. Teachers were polite though.",
    ],
    1: [
      "Very poor experience. Concepts were not explained properly.",
      "Not satisfied at all. No personal attention and no proper tests.",
      "Disappointed with the teaching quality. Hope they improve.",
      "Not worth the fees. Needs serious improvement.",
      "Bad experience overall.",
    ],
  },
  general: {
    5: [
      "Very good service and friendly people. Everything was done properly.",
      "Best {kw} in {city}. Honest, quick and professional.",
      "Really happy with the service. Will definitely recommend {name}.",
      "If you need a {kw} in {city}, this is the place. Very helpful team.",
      "Great experience from start to finish. Thank you!",
    ],
    4: [
      "Good service overall. Took a little extra time, but worth it.",
      "Helpful and polite staff. Happy with the work.",
      "Good {kw} in {city}. Fair prices.",
      "Nice experience. A little more communication would be great.",
      "Satisfied with the service. Will come again.",
    ],
    3: [
      "Service was okay, but it took longer than expected.",
      "Average experience. Nothing special.",
      "Okay service, could be better organised.",
      "Decent, but a bit expensive.",
      "Fine overall, communication could improve.",
    ],
    2: [
      "Not satisfied with the service this time. Needs improvement.",
      "Delays and not much communication. Hope they improve.",
      "Expected better. Staff were polite though.",
      "Below average experience.",
      "Disappointed this time.",
    ],
    1: [
      "Very poor service. Hope they improve.",
      "Not satisfied at all with the experience.",
      "Bad experience. Needs serious improvement.",
      "Disappointed with the service and communication.",
      "Not a good experience this time.",
    ],
  },
};

export interface LibraryInput {
  name: string;
  category: string;
  city: string;
  /** One or more keywords, comma separated ("sweet shop, mithai shop") */
  keyword: string;
  highlights: string;
}

const pickOne = <T,>(list: T[]): T | undefined => list[Math.floor(Math.random() * list.length)];
const opening = (t: string) => t.split(/\s+/).slice(0, 2).join(" ").toLowerCase();
const shuffle = <T,>(list: T[]): T[] => {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

/** "Best {kw} in {city}" lines, so most happy reviews carry the search phrase. */
const SEO_LINES: Record<4 | 5, string[]> = {
  5: [
    "Easily the best {kw} in {city}.",
    "If you are looking for the best {kw} in {city}, this is the place to go.",
    "Honestly the best {kw} in {city} I have been to so far.",
    "Best {kw} in {city}, highly recommended to everyone.",
    "{name} is the best {kw} in {city} for sure.",
    "Would recommend {name} to anyone looking for the best {kw} in {city}.",
    "Hands down the best {kw} in {city}.",
    "For me this is the best {kw} in {city}, no doubt about it.",
    "Searched for the best {kw} in {city} and I am glad we came here.",
    "Truly the best {kw} in {city}, will keep coming back.",
  ],
  4: [
    "One of the best {kw} options in {city}.",
    "Among the best {kw} in {city}, with a little room to improve.",
    "A good pick if you want the best {kw} in {city}.",
    "Close to the best {kw} in {city}, just a few small things to fix.",
  ],
};

/**
 * Library reviews for this business and rating, placeholders filled (lines that can't be
 * filled are skipped). Each review joins three different lines of the same rating (two for
 * 1-2 stars), so they read as a full 4-6 sentence review. About 8 in 10 five-star and half of
 * the four-star reviews also get a "best {keyword} in {city}" line.
 */
export function libraryReviews(b: LibraryInput, rating: number, sets: LibrarySets): string[] {
  const r = Math.min(5, Math.max(1, Math.round(rating))) as 1 | 2 | 3 | 4 | 5;
  const things = b.highlights.split(",").map((h) => h.trim()).filter(Boolean);
  const keywords = b.keyword.split(",").map((k) => k.trim()).filter(Boolean);
  const fill = (line: string): string | null => {
    const values: Record<string, string> = {
      name: b.name.trim(),
      city: b.city.trim(),
      kw: pickOne(keywords) ?? "",
      thing: pickOne(things) ?? "",
    };
    const keys = [...line.matchAll(/\{(\w+)\}/g)].map((m) => m[1]);
    if (keys.some((k) => !values[k])) return null;
    return line.replace(/\{(\w+)\}/g, (_, k: string) => values[k]);
  };
  const singles = (sets[r] ?? []).map(fill).filter((l): l is string => Boolean(l));
  const parts = r <= 2 ? 2 : 3;
  const seoShare = r === 5 ? 0.8 : r === 4 ? 0.5 : 0;
  const seoLines = r >= 4 ? (SEO_LINES[r as 4 | 5].map(fill).filter(Boolean) as string[]) : [];
  const out: string[] = [];
  for (let i = 0; i < singles.length; i++) {
    // Join with other lines that don't start the same way as any line already picked.
    const picked = [singles[i]];
    for (const s of shuffle(singles)) {
      if (picked.length >= parts) break;
      if (!picked.includes(s) && !picked.some((p) => opening(p) === opening(s))) picked.push(s);
    }
    let text = picked.join(" ");
    if (seoLines.length && !/\bbest\b/i.test(text) && Math.random() < seoShare) {
      const seo = pickOne(seoLines)!;
      text = Math.random() < 0.5 ? `${seo} ${text}` : `${text} ${seo}`;
    }
    out.push(text);
  }
  return out;
}
