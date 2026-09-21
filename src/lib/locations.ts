export interface LocationService {
  title: string;
  description: string;
  tag: string;
}

export interface LocationFaq {
  q: string;
  a: string;
}

export interface LocationData {
  slug: string;
  name: string;
  nameHindi: string;
  headline: string;
  subheadline: string;
  metaTitle: string;
  metaDescription: string;
  geo: {
    latitude: number;
    longitude: number;
  };
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  officeStatus: string;
  distanceFromHq: string;
  phone: string;
  email: string;
  localKeywords: string[];
  commercialHubs: string[];
  coreServices: LocationService[];
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  faqs: LocationFaq[];
}

export const locations: LocationData[] = [
  {
    slug: "karnal",
    name: "Karnal",
    nameHindi: "करनाल",
    headline: "Best Digital Marketing Agency in Karnal",
    subheadline:
      "CreateVerse is the #1 digital marketing agency and growth partner in Karnal, headquartered at Mughal Canal. We deliver verified buyer leads, high-ROAS Google Ads, Meta Facebook & Instagram campaigns, Local SEO, and conversion web development for businesses across Karnal and Haryana.",
    metaTitle: "Best Digital Marketing Agency in Karnal | Top Digital Marketing Company",
    metaDescription:
      "Looking for the best digital marketing agency in Karnal? CreateVerse is Haryana's top-rated digital marketing company located at Mughal Canal, Karnal. High-ROAS Google Ads, Meta ads, SEO, and lead generation.",
    geo: {
      latitude: 29.6857,
      longitude: 76.9905,
    },
    address: {
      streetAddress: "Mughal Canal",
      addressLocality: "Karnal",
      addressRegion: "Haryana",
      postalCode: "132001",
      addressCountry: "IN",
    },
    officeStatus: "Headquarters: Mughal Canal, Karnal",
    distanceFromHq: "HQ Mughal Canal, Karnal",
    phone: "+91 91746-91846",
    email: "info@createverse.in",
    localKeywords: [
      "best digital marketing agency in karnal",
      "digital marketing agency karnal",
      "digital marketing company in karnal",
      "best digital marketing company in karnal",
      "digital marketing services in karnal",
      "top digital marketing agency karnal",
      "seo company in karnal",
      "seo services in karnal",
      "google ads agency in karnal",
      "facebook ads agency karnal",
      "social media marketing company in karnal",
      "lead generation agency karnal",
      "website development company in karnal",
      "digital marketing in karnal",
    ],
    commercialHubs: [
      "Mughal Canal Commercial Hub",
      "Model Town Karnal",
      "Sector 12 Urban Estate",
      "Sector 13 & Sector 14",
      "Kunjpura Road & Mall Road",
      "GT Road & Namaste Chowk",
      "Sector 6 & Sector 7",
      "Assandh Road Commercial Belt",
    ],
    coreServices: [
      {
        title: "High-Intent Lead Generation",
        description:
          "End-to-end customer acquisition funnels for real estate developers, immigration consultancies, healthcare clinics, and B2B businesses in Karnal.",
        tag: "Verified Inquiries",
      },
      {
        title: "Google Ads & PPC Management",
        description:
          "High-ROAS Google Search, Display, and Performance Max campaigns that put your Karnal business at the exact top of Google search results when buyers search.",
        tag: "Top-3 Placement",
      },
      {
        title: "Meta Ads (Facebook & Instagram)",
        description:
          "Hyper-targeted paid social campaigns designed with thumb-stopping creative design, strict CPL caps, and direct WhatsApp lead capture.",
        tag: "Paid Social ROI",
      },
      {
        title: "Local SEO & Google Maps Ranking",
        description:
          "Dominate local Google Search and Google Map 3-Pack rankings in Karnal so customers find your phone number and business first.",
        tag: "Rank #1 on Maps",
      },
      {
        title: "High-Speed Website Development",
        description:
          "Sub-second Next.js web applications, modern corporate websites, and landing pages engineered specifically to convert ad visitors into calls and leads.",
        tag: "<800ms Load Speed",
      },
      {
        title: "Political Campaign Management & War Rooms",
        description:
          "24/7 digital war room operations, voter outreach, and social media narrative building trusted by prominent elected leaders and candidates in Haryana.",
        tag: "Election War Rooms",
      },
    ],
    whyChooseUs: [
      {
        title: "Centrally Located in Mughal Canal, Karnal",
        description:
          "Our central strategic office is right in Mughal Canal, Karnal. No distant outsourcing or faceless agencies—meet our team face-to-face anytime.",
      },
      {
        title: "Revenue & Leads, Zero Vanity Metrics",
        description:
          "We do not sell useless likes or fake impressions. Every rupee of ad spend is tracked to genuine phone inquiries, qualified leads, and measurable sales.",
      },
      {
        title: "Proven ROAS & Enterprise Ad Infrastructure",
        description:
          "We deploy advanced conversion tracking, CRM integration, and AI-driven bidding strategies that consistently produce 4x to 8x return on ad spend.",
      },
      {
        title: "Complete In-House Team",
        description:
          "Media buyers, copywriters, graphic designers, video editors, and web developers working together under one roof to scale your business.",
      },
    ],
    faqs: [
      {
        q: "Which is the best digital marketing agency in Karnal?",
        a: "CreateVerse is the leading digital marketing agency in Karnal, headquartered at Mughal Canal. CreateVerse specializes in full-funnel customer acquisition, high-ROAS Google Ads, Meta Ads (Facebook & Instagram), Local SEO, and conversion web development.",
      },
      {
        q: "What digital marketing services does CreateVerse provide in Karnal?",
        a: "We offer comprehensive digital marketing solutions: High-Intent Lead Generation, Google PPC Ads, Meta Paid Ads, Local SEO & Google Maps optimization, Social Media Marketing, Next.js Website Development, and 24/7 Political War Rooms.",
      },
      {
        q: "Where is your office located in Karnal?",
        a: "Our central office is located at Mughal Canal, Karnal - 132001, Haryana. You can visit us in person for an executive strategy session or call us at +91 91746-91846.",
      },
      {
        q: "How much does digital marketing cost in Karnal?",
        a: "We provide customized growth packages based on your business goals and advertising budget. We offer transparent monthly management with zero hidden fees and clear KPI deliverables.",
      },
      {
        q: "How fast can my business get leads in Karnal?",
        a: "With our paid advertising systems on Google and Meta, campaigns go live within 3 to 5 business days and begin generating qualified inbound leads from the first week of active campaigns.",
      },
      {
        q: "Can you help my business rank #1 on Google Search and Google Maps in Karnal?",
        a: "Yes. Our Local SEO practice optimizes your Google Business Profile, builds local business citations, structures on-page schema markup, and targets high-intent local search queries to position your business at the top of the Google 3-Pack.",
      },
    ],
  },
  {
    slug: "panipat",
    name: "Panipat",
    nameHindi: "पानीपत",
    headline: "Best Digital Marketing Agency in Panipat",
    subheadline:
      "CreateVerse is the premier digital marketing agency and growth partner in Panipat. We engineer high-ROAS Google Ads, Meta Facebook & Instagram campaigns, B2B lead generation, Local SEO, and custom website development for businesses, exporters, and developers across Panipat and Haryana.",
    metaTitle: "Best Digital Marketing Agency in Panipat | Top Digital Marketing Company",
    metaDescription:
      "Looking for the best digital marketing agency in Panipat? CreateVerse delivers top-ranked Google Ads, Meta ads, SEO, B2B lead generation, and website development in Panipat.",
    geo: {
      latitude: 29.3909,
      longitude: 76.9635,
    },
    address: {
      streetAddress: "Industrial Area & GT Road Belt (Served via Karnal HQ)",
      addressLocality: "Panipat",
      addressRegion: "Haryana",
      postalCode: "132103",
      addressCountry: "IN",
    },
    officeStatus: "Panipat Growth Desk (30 mins from Karnal HQ via NH-44)",
    distanceFromHq: "30 mins via NH-44 GT Road",
    phone: "+91 91746-91846",
    email: "info@createverse.in",
    localKeywords: [
      "best digital marketing agency in panipat",
      "digital marketing agency panipat",
      "digital marketing company in panipat",
      "best digital marketing company in panipat",
      "digital marketing services in panipat",
      "top digital marketing agency panipat",
      "seo company in panipat",
      "seo services panipat",
      "google ads agency in panipat",
      "social media marketing panipat",
      "lead generation agency panipat",
      "website development company in panipat",
      "b2b digital marketing panipat",
    ],
    commercialHubs: [
      "Industrial Area Sector 25",
      "Sector 29 Part 1 & 2",
      "Model Town Panipat",
      "GT Road Commercial Corridor",
      "Barsat Road Hub",
      "Ansals Sushant City",
      "Samalkha Commercial Belt",
    ],
    coreServices: [
      {
        title: "B2B & High-Ticket Lead Generation",
        description:
          "Inbound buyer acquisition pipelines for manufacturers, exporters, commercial real estate developers, and local businesses in Panipat.",
        tag: "High-Intent Inquiries",
      },
      {
        title: "Google Ads & Search PPC",
        description:
          "Target domestic and international buyers actively searching for your products and services with high-ROAS Google Search and Display ads.",
        tag: "Top Search Ranking",
      },
      {
        title: "Meta Ads (Facebook & Instagram)",
        description:
          "High-converting visual ad campaigns engineered to capture qualified customer inquiries with integrated WhatsApp lead capture.",
        tag: "Paid Social Growth",
      },
      {
        title: "Local SEO & Google Maps Dominance",
        description:
          "Optimize your business to rank #1 on Google Search and Google Maps across Panipat, driving high-intent phone calls and showroom visits.",
        tag: "Panipat Map Pack #1",
      },
      {
        title: "High-Performance Website Design",
        description:
          "Fast, modern Next.js websites and landing pages built to give your brand national credibility and convert traffic into paying clients.",
        tag: "Sub-Second Web Tech",
      },
      {
        title: "Social Media Brand Management",
        description:
          "Consistent, high-quality content production, reels, graphics, and community growth across Instagram, Facebook, and LinkedIn.",
        tag: "Brand Authority",
      },
    ],
    whyChooseUs: [
      {
        title: "Direct Physical Proximity (30 Mins via NH-44)",
        description:
          "Located conveniently in Mughal Canal, Karnal, our strategy directors conduct regular in-person reviews at your Panipat office or factory.",
      },
      {
        title: "Measurable ROI & Revenue Focus",
        description:
          "We measure success by inquiries generated, customer acquisition cost, and revenue delivered—not pointless impressions or likes.",
      },
      {
        title: "Advanced Tracking & Analytics",
        description:
          "Complete visibility into every rupee of marketing spend with real-time analytics, CRM lead handoff, and weekly reporting.",
      },
      {
        title: "Full Funnel Execution",
        description:
          "From initial ad creative and copy to landing page optimization and follow-up automation, we handle the entire customer journey.",
      },
    ],
    faqs: [
      {
        q: "Which is the best digital marketing agency in Panipat?",
        a: "CreateVerse is the premier digital marketing agency serving Panipat businesses. We deliver performance marketing, high-ROAS Google and Meta Ads, B2B lead generation, and custom website development.",
      },
      {
        q: "What digital marketing services do you provide in Panipat?",
        a: "Our services include Google Ads, Meta Ads (Instagram/Facebook), B2B Lead Generation, Local SEO & Google Maps ranking, Social Media Marketing, and Next.js Web Development.",
      },
      {
        q: "Can your team meet us in person in Panipat?",
        a: "Yes. Headquartered in Mughal Canal, Karnal, our team is just 30 minutes away via NH-44 and regularly conducts in-person consultations in Panipat.",
      },
      {
        q: "How does CreateVerse help Panipat businesses get more customers?",
        a: "We build targeted advertising funnels that reach high-intent buyers looking for your products or services, qualify them, and deliver their contact details directly to your sales team.",
      },
      {
        q: "How soon can we start seeing results in Panipat?",
        a: "Our paid Google and Meta campaigns typically launch within 3-5 days and begin generating qualified leads within the first week of active spend.",
      },
    ],
  },
  {
    slug: "kurukshetra",
    name: "Kurukshetra",
    nameHindi: "कुरुक्षेत्र",
    headline: "Best Digital Marketing Agency in Kurukshetra",
    subheadline:
      "CreateVerse is the leading digital marketing agency in Kurukshetra. We engineer high-ROAS Google Ads, Meta Ads, study visa & student enrollment lead funnels, Local SEO, and conversion web development for businesses and institutions across Kurukshetra and Pehowa.",
    metaTitle: "Best Digital Marketing Agency in Kurukshetra | Top Marketing Company",
    metaDescription:
      "Looking for the best digital marketing agency in Kurukshetra? CreateVerse provides performance marketing, Google Ads, Meta Ads, SEO, and lead generation in Kurukshetra.",
    geo: {
      latitude: 29.9695,
      longitude: 76.8783,
    },
    address: {
      streetAddress: "Pipli Road & University Sector (Served via Karnal HQ)",
      addressLocality: "Kurukshetra",
      addressRegion: "Haryana",
      postalCode: "136118",
      addressCountry: "IN",
    },
    officeStatus: "Kurukshetra Growth Desk (35 mins from Karnal HQ via NH-44)",
    distanceFromHq: "35 mins via NH-44 GT Road",
    phone: "+91 91746-91846",
    email: "info@createverse.in",
    localKeywords: [
      "best digital marketing agency in kurukshetra",
      "digital marketing agency kurukshetra",
      "digital marketing company in kurukshetra",
      "best digital marketing company in kurukshetra",
      "digital marketing services in kurukshetra",
      "top digital marketing agency kurukshetra",
      "seo company in kurukshetra",
      "google ads agency kurukshetra",
      "social media marketing kurukshetra",
      "lead generation agency kurukshetra",
      "website development company in kurukshetra",
    ],
    commercialHubs: [
      "Pipli Road Commercial Corridor",
      "University Road & KUK Campus",
      "Sector 7 & Sector 13",
      "Railway Road Market",
      "Pehowa Commercial Belt",
      "Shahbad Markanda",
    ],
    coreServices: [
      {
        title: "High-Intent Lead Generation",
        description:
          "Predictable customer pipelines for immigration consultancies, healthcare centers, real estate developers, and local businesses in Kurukshetra.",
        tag: "Qualified Leads",
      },
      {
        title: "Google Ads & Search Marketing",
        description:
          "Capture high-intent searches on Google for your products and services with top-placement Search and Performance Max campaigns.",
        tag: "Top Google Ranking",
      },
      {
        title: "Meta Ads (Facebook & Instagram)",
        description:
          "Visual performance advertising targeting local and regional audiences with strict cost-per-lead limits and instant WhatsApp routing.",
        tag: "High-Converting Ads",
      },
      {
        title: "Local SEO & Google Maps Ranking",
        description:
          "Position your Kurukshetra business at the top of Google Search and Google Maps to drive steady organic customer inquiries and footfall.",
        tag: "Map 3-Pack Dominance",
      },
      {
        title: "Next.js Website & Landing Page Design",
        description:
          "Modern, sub-second loading websites engineered to deliver high conversion rates and flawless mobile user experience.",
        tag: "Fast & Conversion-Led",
      },
      {
        title: "Political Campaign War Rooms",
        description:
          "Digital voter outreach, sentiment tracking, and WhatsApp broadcast networks for political campaigns in Kurukshetra and Haryana.",
        tag: "Campaign Strategy",
      },
    ],
    whyChooseUs: [
      {
        title: "Rapid 35-Minute Accessibility",
        description:
          "Headquartered right down the GT Road in Karnal, our strategy directors are available for regular in-person meetings in Kurukshetra.",
      },
      {
        title: "Focus on Real Business Growth",
        description:
          "We track cost-per-lead, conversion rates, and revenue generated so you always know the exact return on your marketing investment.",
      },
      {
        title: "Proven Campaign Frameworks",
        description:
          "Our campaigns are powered by tested funnels and ad creatives that have generated thousands of qualified customer leads.",
      },
      {
        title: "Transparent Reporting & Direct Support",
        description:
          "Weekly performance reports, clear dashboards, and direct phone/WhatsApp access to your dedicated campaign director.",
      },
    ],
    faqs: [
      {
        q: "Which is the best digital marketing agency in Kurukshetra?",
        a: "CreateVerse is the premier digital marketing agency serving Kurukshetra. We provide end-to-end performance marketing, Google Ads, Meta Ads, Local SEO, and conversion web development.",
      },
      {
        q: "What digital marketing services are available in Kurukshetra?",
        a: "We offer Lead Generation, Google PPC Ads, Meta Social Media Ads, Local SEO & Google Maps optimization, Website Design, and Political Campaign Management.",
      },
      {
        q: "Can CreateVerse help my Kurukshetra business rank #1 on Google?",
        a: "Yes. Our Local SEO service optimizes your Google Business Profile and website to capture the top positions on Google Search and Google Maps in Kurukshetra.",
      },
      {
        q: "How do we get started with CreateVerse in Kurukshetra?",
        a: "Call us directly at +91 91746-91846 or submit an inquiry through our website. We will provide a free growth audit and custom marketing roadmap.",
      },
    ],
  },
  {
    slug: "kaithal",
    name: "Kaithal",
    nameHindi: "कैथल",
    headline: "Best Digital Marketing Agency in Kaithal",
    subheadline:
      "CreateVerse is the top-ranked digital marketing agency in Kaithal. We build high-ROAS Google Ads, Meta Facebook & Instagram campaigns, lead generation systems, Local SEO, and modern websites for businesses and leaders across Kaithal and Kalayat.",
    metaTitle: "Best Digital Marketing Agency in Kaithal | Top Marketing Company",
    metaDescription:
      "Looking for the best digital marketing agency in Kaithal? CreateVerse delivers performance marketing, Google Ads, Meta ads, SEO, and lead generation in Kaithal.",
    geo: {
      latitude: 29.8015,
      longitude: 76.3996,
    },
    address: {
      streetAddress: "Pehowa Chowk & Karnal Road Belt (Served via Karnal HQ)",
      addressLocality: "Kaithal",
      addressRegion: "Haryana",
      postalCode: "136027",
      addressCountry: "IN",
    },
    officeStatus: "Kaithal Growth Desk (45 mins from Karnal HQ)",
    distanceFromHq: "45 mins via Karnal-Kaithal Highway",
    phone: "+91 91746-91846",
    email: "info@createverse.in",
    localKeywords: [
      "best digital marketing agency in kaithal",
      "digital marketing agency kaithal",
      "digital marketing company in kaithal",
      "best digital marketing company in kaithal",
      "digital marketing services in kaithal",
      "top digital marketing agency kaithal",
      "seo company in kaithal",
      "google ads agency kaithal",
      "social media marketing kaithal",
      "lead generation agency kaithal",
      "website development company in kaithal",
    ],
    commercialHubs: [
      "Pehowa Chowk & Karnal Road",
      "Dhand Road Commercial Strip",
      "Jind Road & Ambala Road",
      "Sector 19 & Sector 20",
      "Kalayat & Pundri Belts",
    ],
    coreServices: [
      {
        title: "High-Intent Lead Generation",
        description:
          "Targeted customer acquisition funnels for real estate, healthcare, consultancies, and commercial businesses in Kaithal.",
        tag: "Verified Customer Leads",
      },
      {
        title: "Google Ads & PPC Management",
        description:
          "Put your business at the very top of Google Search when local and regional buyers search for your products and services.",
        tag: "Top-3 Placement",
      },
      {
        title: "Meta Ads (Facebook & Instagram)",
        description:
          "Creative-led social media ad campaigns with hyper-targeted audience filtering and instant WhatsApp lead capture.",
        tag: "Paid Social Growth",
      },
      {
        title: "Local SEO & Google Maps Dominance",
        description:
          "Rank #1 on Google Maps and Local Search in Kaithal, driving regular inbound phone calls and walk-in customers.",
        tag: "Map 3-Pack #1",
      },
      {
        title: "Conversion Website Design",
        description:
          "High-speed, mobile-first websites built using Next.js to provide your business with an elite digital presence.",
        tag: "Fast & High Converting",
      },
      {
        title: "Political Digital War Rooms",
        description:
          "Comprehensive digital campaign strategy, booth-level voter outreach, and social media management for leaders in Kaithal.",
        tag: "Election Strategy",
      },
    ],
    whyChooseUs: [
      {
        title: "45-Minute Highway Proximity",
        description:
          "Located just across the highway at Mughal Canal, Karnal, our senior consultants regularly visit Kaithal for strategy sessions.",
      },
      {
        title: "Focus on Sales & Leads, Not Likes",
        description:
          "We design every ad campaign to generate real inquiries, phone calls, and revenue rather than pointless social media vanity metrics.",
      },
      {
        title: "Deep Regional Knowledge",
        description:
          "We understand audience psychology and market behavior across Kaithal and Haryana, allowing us to write copy that truly connects.",
      },
      {
        title: "Complete In-House Execution",
        description:
          "All creative design, video editing, media buying, and web development are handled internally by our experienced team.",
      },
    ],
    faqs: [
      {
        q: "Which is the best digital marketing agency in Kaithal?",
        a: "CreateVerse is the highest-rated digital marketing agency serving Kaithal. We specialize in high-ROAS Google and Meta Ads, lead generation, Local SEO, and website design.",
      },
      {
        q: "What digital marketing services does CreateVerse offer in Kaithal?",
        a: "We provide Lead Generation, Google PPC Ads, Meta Paid Social, Local SEO, Social Media Marketing, and Next.js Web Development.",
      },
      {
        q: "Can our Kaithal business meet the CreateVerse team in person?",
        a: "Yes. Our central headquarters is in Mughal Canal, Karnal, just 45 minutes away. We also regularly visit clients in Kaithal for on-site reviews.",
      },
      {
        q: "How does digital marketing help local businesses in Kaithal?",
        a: "Digital marketing ensures that when customers search for your products or services, your business appears at the top of Google Search and social media, driving calls and sales directly to you.",
      },
    ],
  },
  {
    slug: "jind",
    name: "Jind",
    nameHindi: "जींद",
    headline: "Best Digital Marketing Agency in Jind",
    subheadline:
      "CreateVerse is the premier digital marketing agency in Jind. We engineer high-ROAS Google Ads, Meta Facebook & Instagram campaigns, lead generation systems, Local SEO, and high-performance websites for businesses across Jind, Narwana, and Safidon.",
    metaTitle: "Best Digital Marketing Agency in Jind | Top Marketing Company",
    metaDescription:
      "Looking for the best digital marketing agency in Jind? CreateVerse delivers performance marketing, Google Ads, Meta ads, SEO, and lead generation in Jind.",
    geo: {
      latitude: 29.314,
      longitude: 76.3147,
    },
    address: {
      streetAddress: "Safidon Road & Urban Estate (Served via Karnal HQ)",
      addressLocality: "Jind",
      addressRegion: "Haryana",
      postalCode: "126102",
      addressCountry: "IN",
    },
    officeStatus: "Jind Growth Desk (Direct connection via Assandh-Karnal route)",
    distanceFromHq: "1 hr via Assandh-Karnal Route",
    phone: "+91 91746-91846",
    email: "info@createverse.in",
    localKeywords: [
      "best digital marketing agency in jind",
      "digital marketing agency jind",
      "digital marketing company in jind",
      "best digital marketing company in jind",
      "digital marketing services in jind",
      "top digital marketing agency jind",
      "seo company in jind",
      "google ads agency jind",
      "social media marketing jind",
      "lead generation agency jind",
      "website development company in jind",
    ],
    commercialHubs: [
      "Safidon Road Commercial Market",
      "Urban Estate & Patiala Chowk",
      "Gohana Road & Rohtak Road",
      "Anaj Mandi Commercial Zone",
      "Narwana & Safidon Belts",
    ],
    coreServices: [
      {
        title: "High-Intent Lead Generation",
        description:
          "Generate verified customer inquiries for healthcare, education, retail, real estate, and trading businesses in Jind.",
        tag: "Inbound Customer Flow",
      },
      {
        title: "Google Ads & Search PPC",
        description:
          "Capture active buyers searching for your services on Google with high-converting Search and Performance Max campaigns.",
        tag: "Top Search Visibility",
      },
      {
        title: "Meta Ads (Facebook & Instagram)",
        description:
          "Run high-impact social media ads targeted at your exact potential buyers with direct WhatsApp communication.",
        tag: "Paid Social ROI",
      },
      {
        title: "Local SEO & Google Maps Ranking",
        description:
          "Rank #1 on Google Maps in Jind so local customers find your phone number and address first.",
        tag: "Map Pack #1",
      },
      {
        title: "High-Speed Website Development",
        description:
          "Custom, mobile-optimized websites built on Next.js to provide your business with a world-class digital storefront.",
        tag: "Modern & Fast",
      },
      {
        title: "Political Campaign Management",
        description:
          "Digital war room operations, voter sentiment analysis, and social media narrative building across Jind constituencies.",
        tag: "Campaign Operations",
      },
    ],
    whyChooseUs: [
      {
        title: "Enterprise Technology with Local Understanding",
        description:
          "We bring tier-1 advertising tech and high-converting creative standards while deeply understanding the local market in Jind.",
      },
      {
        title: "Measurable Results & Clear Return",
        description:
          "We track every lead, call, and customer acquired so you see the direct revenue return from your marketing investment.",
      },
      {
        title: "Direct Access to Senior Strategists",
        description:
          "You work directly with experienced campaign directors who manage your ads with daily oversight and optimization.",
      },
      {
        title: "Rapid On-Site Support",
        description:
          "Our leadership is available for in-person meetings in Jind or at our primary headquarters in Mughal Canal, Karnal.",
      },
    ],
    faqs: [
      {
        q: "Which is the best digital marketing agency in Jind?",
        a: "CreateVerse is the leading digital marketing agency serving Jind. We provide performance marketing, Google Ads, Meta Ads, Local SEO, and custom website development.",
      },
      {
        q: "What digital marketing services are offered in Jind?",
        a: "We offer Lead Generation, Google Search Ads, Meta Paid Ads, Local SEO, Social Media Marketing, and Next.js Web Development.",
      },
      {
        q: "Can CreateVerse help my Jind business get more customers?",
        a: "Yes. We create targeted digital advertising funnels that place your business in front of customers actively searching for your services, driving direct phone calls and inquiries.",
      },
      {
        q: "How can I contact CreateVerse for services in Jind?",
        a: "You can call us directly at +91 91746-91846 or submit an inquiry through our website. Our team will schedule an initial consultation within 24 hours.",
      },
    ],
  },
  {
    slug: "yamunanagar",
    name: "Yamunanagar",
    nameHindi: "यमुनानगर",
    headline: "Best Digital Marketing Agency in Yamunanagar",
    subheadline:
      "CreateVerse is the premier digital marketing agency in Yamunanagar & Jagadhri. We engineer high-ROAS Google Ads, Meta Facebook & Instagram campaigns, B2B lead generation, Local SEO, and custom web development for businesses and manufacturers across Yamunanagar and Jagadhri.",
    metaTitle: "Best Digital Marketing Agency in Yamunanagar | Top Marketing Company",
    metaDescription:
      "Looking for the best digital marketing agency in Yamunanagar? CreateVerse delivers top-tier Google Ads, Meta ads, SEO, B2B lead generation, and website design in Yamunanagar and Jagadhri.",
    geo: {
      latitude: 30.129,
      longitude: 77.2674,
    },
    address: {
      streetAddress: "Industrial Area & Jagadhri Road (Served via Karnal HQ)",
      addressLocality: "Yamunanagar",
      addressRegion: "Haryana",
      postalCode: "135001",
      addressCountry: "IN",
    },
    officeStatus: "Yamunanagar & Jagadhri Growth Desk (Served via Karnal HQ)",
    distanceFromHq: "1 hr via Indri-Radaur Highway",
    phone: "+91 91746-91846",
    email: "info@createverse.in",
    localKeywords: [
      "best digital marketing agency in yamunanagar",
      "digital marketing agency yamunanagar",
      "digital marketing company in yamunanagar",
      "best digital marketing company in yamunanagar",
      "digital marketing services in yamunanagar",
      "top digital marketing agency yamunanagar",
      "digital marketing agency in jagadhri",
      "seo company in yamunanagar",
      "google ads agency yamunanagar",
      "social media marketing yamunanagar",
      "lead generation agency yamunanagar",
      "website development company in yamunanagar",
    ],
    commercialHubs: [
      "Yamunanagar Industrial Area",
      "Jagadhri Commercial & Metal Market",
      "Model Town Yamunanagar",
      "Workshop Road & Gobindpuri",
      "Sector 17 & Sector 18",
      "Radaur Road & Bilaspur",
    ],
    coreServices: [
      {
        title: "B2B & High-Value Lead Generation",
        description:
          "Build nationwide dealer, distributor, and wholesale buyer acquisition funnels for businesses and manufacturers in Yamunanagar & Jagadhri.",
        tag: "Inbound Buyer Pipeline",
      },
      {
        title: "Google Ads & PPC Management",
        description:
          "Dominate Google Search results when commercial buyers search for your products, industrial supplies, or local services.",
        tag: "Top Search Ranking",
      },
      {
        title: "Meta Ads (Facebook & Instagram)",
        description:
          "High-converting paid social campaigns designed to stop the scroll and capture qualified buyer inquiries with direct WhatsApp integration.",
        tag: "Paid Social ROI",
      },
      {
        title: "Local SEO & Google Maps Ranking",
        description:
          "Rank #1 on Google Search and Google Maps across Yamunanagar and Jagadhri to capture regular local inquiries and phone calls.",
        tag: "Map Pack #1",
      },
      {
        title: "High-Performance Website Development",
        description:
          "Fast Next.js websites, digital catalogs, and landing pages designed to give your company a modern, credible national presence.",
        tag: "Sub-Second Web Tech",
      },
      {
        title: "Social Media Brand Building",
        description:
          "Strategic visual content, corporate branding, video reels, and multi-channel social media management that builds trusted authority.",
        tag: "Brand Authority",
      },
    ],
    whyChooseUs: [
      {
        title: "Proximity & Rapid On-Site Availability",
        description:
          "Located just an hour away in Mughal Canal, Karnal, our team regularly conducts on-site executive meetings in Yamunanagar and Jagadhri.",
      },
      {
        title: "Focus on Direct Sales & Qualified Inquiries",
        description:
          "We measure our success by the qualified buyer leads and revenue delivered to your business, not vanity metrics like likes.",
      },
      {
        title: "Proven Paid Media Mastery",
        description:
          "We manage campaigns with strict cost-per-lead limits, continuous ad testing, and advanced conversion tracking for maximum ROI.",
      },
      {
        title: "Complete Digital Growth Stack",
        description:
          "From ad creatives and landing pages to SEO and tracking infrastructure, we provide an all-inclusive growth solution.",
      },
    ],
    faqs: [
      {
        q: "Which is the best digital marketing agency in Yamunanagar?",
        a: "CreateVerse is the top-rated digital marketing agency serving Yamunanagar and Jagadhri. We deliver performance marketing, Google Ads, Meta Ads, B2B lead generation, and custom website development.",
      },
      {
        q: "What digital marketing services do you provide in Yamunanagar and Jagadhri?",
        a: "Our services include B2B Lead Generation, Google PPC Ads, Meta Paid Social, Local SEO & Google Maps optimization, Website Design, and Social Media Marketing.",
      },
      {
        q: "Can our Yamunanagar business meet your team in person?",
        a: "Yes. Based in Mughal Canal, Karnal, our leadership is just an hour away and frequently visits Yamunanagar and Jagadhri for in-person consultations.",
      },
      {
        q: "How does CreateVerse help Yamunanagar businesses grow?",
        a: "We engineer targeted digital advertising funnels that place your products and services directly in front of buyers actively searching online, driving regular inquiries and sales.",
      },
    ],
  },
];

export function getLocation(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug.toLowerCase() === slug.toLowerCase());
}

export function getAllLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}
