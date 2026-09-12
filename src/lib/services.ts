export interface FAQ {
  q: string;
  a: string;
}

export interface ServiceStep {
  title: string;
  desc: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName?: string;
  tagline: string;
  description: string;
  icon: string; // lucide icon key
  priority: boolean; // visually emphasized in the services grid
  category: "Acquisition" | "Advertising" | "Creative" | "Campaigns" | "Technology";
  problem: { title: string; desc: string };
  deliverables: string[];
  process: ServiceStep[];
  benefits: string[];
  industries: string[];
  faqs: FAQ[];
}

const defaultProcess: ServiceStep[] = [
  { title: "Audit & Research", desc: "We study your market, competitors, audience and current funnel to find the gaps that matter." },
  { title: "Strategy & Setup", desc: "We define the offer, messaging, channels and tracking — then build the assets to launch." },
  { title: "Launch & Execute", desc: "Campaigns go live with tight creative, targeting and landing-page alignment." },
  { title: "Optimize & Scale", desc: "We iterate on data weekly — cutting waste, doubling down on what converts." },
];

export const services: Service[] = [
  {
    slug: "real-estate-lead-generation",
    name: "Real Estate Lead Generation",
    shortName: "Real Estate Leads",
    tagline: "Qualified buyers, investors and site visits — on demand.",
    description:
      "End-to-end acquisition systems for developers, brokers and channel partners. We turn ad spend into verified property inquiries, walk-ins and bookings.",
    icon: "Building2",
    priority: true,
    category: "Acquisition",
    problem: {
      title: "Real estate marketing that stops at 'leads' wastes money.",
      desc: "Most agencies deliver form fills that never pick up the phone. Real estate needs qualified, intent-verified buyers — matched to project, budget and location — and a follow-up system that gets them to the site.",
    },
    deliverables: [
      "Project launch & inventory-clearance campaign strategy",
      "Hyperlocal Meta & Google campaigns targeting in-market buyers",
      "High-converting project landing pages with instant lead capture",
      "Lead qualification flows (budget, location, timeline, intent)",
      "CRM integration & automated follow-up sequences",
      "Site-visit nurturing — WhatsApp, call and remarketing loops",
      "Broker / channel-partner creative kits",
      "Weekly pipeline reporting from click to site visit",
    ],
    process: [
      { title: "Project Deep-Dive", desc: "We map the project, ticket size, buyer persona, micro-market and competition before spending a rupee." },
      { title: "Funnel Build", desc: "Landing pages, lead forms, qualification logic and CRM handoff — built and tracked end to end." },
      { title: "Campaign Launch", desc: "Geo-targeted campaigns across Meta and Google, tuned for inquiry quality over raw volume." },
      { title: "Qualify & Convert", desc: "Leads are scored, nurtured and pushed toward site visits while we optimize cost per qualified lead." },
    ],
    benefits: [
      "Verified, intent-checked inquiries instead of junk form fills",
      "Predictable cost per qualified lead and per site visit",
      "Full visibility from ad click to sales-team handoff",
      "Creative and messaging built specifically for property buyers",
    ],
    industries: ["Residential developers", "Commercial real estate", "Brokerages & channel partners", "Plotted development", "Luxury & NRI housing"],
    faqs: [
      { q: "How do you ensure lead quality, not just volume?", a: "Every funnel includes qualification layers — budget, location preference, purchase timeline and intent questions — plus verification workflows before leads reach your sales team. We optimize campaigns on qualified-lead cost, not raw CPL." },
      { q: "Which platforms do you run real estate campaigns on?", a: "Primarily Meta (Facebook & Instagram) and Google (Search, YouTube, Display), chosen per project based on ticket size, micro-market and buyer persona." },
      { q: "Do you build the landing pages too?", a: "Yes. Conversion-first landing pages with instant lead capture, WhatsApp integration and CRM handoff are part of the system — not an add-on." },
      { q: "How soon can we expect leads?", a: "Campaigns typically go live within 7–10 days of onboarding, with the first qualified leads arriving in the first week of spend." },
    ],
  },
  {
    slug: "immigration-lead-generation",
    name: "Immigration Lead Generation",
    shortName: "Immigration Leads",
    tagline: "Predictable inquiry pipelines for visa & immigration businesses.",
    description:
      "Consistent, qualified applicant pipelines for immigration consultancies — study visa, work permit, PR and visitor visa verticals across geographies.",
    icon: "Plane",
    priority: true,
    category: "Acquisition",
    problem: {
      title: "Immigration consultancies live and die by inquiry flow.",
      desc: "Seasonal intakes, policy changes and fierce competition make inquiry volume unpredictable. You need a system that produces serious, eligible applicants every week — not spikes of unqualified leads that burn counselor time.",
    },
    deliverables: [
      "Program-specific funnels (study visa, PR, work permit, visitor visa)",
      "Country- and intake-aware campaign calendars",
      "Eligibility pre-screening forms and scoring logic",
      "Webinar & free-consultation booking funnels",
      "Multilingual landing pages and ad creative",
      "CRM integration with counselor assignment workflows",
      "Remarketing sequences for warm prospects",
      "Weekly reporting on cost per qualified applicant",
    ],
    process: [
      { title: "Program Mapping", desc: "We identify your most profitable programs, target geographies and applicant personas." },
      { title: "Funnel & Screening", desc: "Landing pages with eligibility pre-screening so counselors talk to serious applicants only." },
      { title: "Multi-Channel Launch", desc: "Meta, Google and YouTube campaigns aligned to intake windows and policy news cycles." },
      { title: "Optimize Pipeline", desc: "We tune for cost per eligible applicant and consultation bookings, week over week." },
    ],
    benefits: [
      "Steady weekly inquiry flow, independent of season",
      "Pre-screened applicants that respect counselor time",
      "Campaigns tuned to intake deadlines and policy windows",
      "Clear economics: cost per qualified applicant, per booking",
    ],
    industries: ["Study abroad consultancies", "PR & work permit advisors", "Visitor visa services", "Language & test-prep institutes"],
    faqs: [
      { q: "Can you generate leads for specific countries or programs?", a: "Yes. We build separate funnels per program and destination — each with its own creative, screening questions and landing page — so lead quality and messaging stay sharp." },
      { q: "How do you filter out non-serious inquiries?", a: "Eligibility pre-screening (education, budget, timeline, destination) is built into every form, and campaigns are optimized on qualified-applicant cost rather than raw lead count." },
      { q: "Do you run webinar or seminar funnels?", a: "Yes — webinar registration and consultation-booking funnels are among the highest-converting formats for immigration, and we build them end to end." },
      { q: "Can you handle regional language campaigns?", a: "Yes. We produce multilingual creative and landing pages matched to your target geographies." },
    ],
  },
  {
    slug: "political-management",
    name: "Political Campaign & Management",
    shortName: "Political Management",
    tagline: "War-room digital operations for campaigns that need to win.",
    description:
      "Digital campaign strategy, social media management, voter outreach and communication — run with the discipline of a performance marketing operation.",
    icon: "Megaphone",
    priority: true,
    category: "Campaigns",
    problem: {
      title: "Modern campaigns are won or lost on digital ground.",
      desc: "Voters form opinions on their phones long before rally day. Without a coordinated digital war room — narrative, content, outreach and rapid response — campaigns cede the narrative to opponents.",
    },
    deliverables: [
      "Campaign narrative & communication strategy",
      "Daily content operations — video, graphics, reels, speeches",
      "Social media management across all major platforms",
      "Voter outreach programs — WhatsApp, voice, and regional platforms",
      "Volunteer & supporter mobilization funnels",
      "Opposition monitoring and rapid-response desk",
      "Reputation & sentiment management",
      "Constituency-level targeting and analytics dashboards",
    ],
    process: [
      { title: "Narrative & Ground Intelligence", desc: "We study the constituency, voter segments and opponent playbook to define the campaign narrative." },
      { title: "War-Room Setup", desc: "Content pipelines, approval workflows, platform mix and response protocols — built before launch." },
      { title: "Sustained Operations", desc: "Daily content, outreach and engagement executed at constituency scale, in regional languages." },
      { title: "Measure & Adapt", desc: "Sentiment, reach and engagement analytics drive weekly strategy adjustments until polling day." },
    ],
    benefits: [
      "A single, disciplined narrative across every channel",
      "Constituency-scale outreach with measurable engagement",
      "Rapid response capability for fast-moving situations",
      "Professional creative output, every single day",
    ],
    industries: ["Candidates & elected representatives", "Political parties", "Issue-based campaigns", "Public affairs organizations"],
    faqs: [
      { q: "Do you work in regional languages?", a: "Yes. Political communication only works in the voter's language — content, outreach and creative are produced in the languages of the constituency." },
      { q: "What does the 'war room' actually do?", a: "It's a daily operations unit: content production, posting calendars, trend and opposition monitoring, and rapid response — all coordinated under one strategy lead." },
      { q: "Can you manage the full digital presence of a candidate?", a: "Yes — strategy, content, social handles, outreach, advertising and reporting, as one integrated operation." },
      { q: "How early should a campaign start?", a: "Ideally 6–12 months before polling. Narrative and follower bases compound over time; late starts limit what digital can deliver." },
    ],
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    shortName: "Google Ads",
    tagline: "Capture demand the moment people search for it.",
    description:
      "Search, YouTube, Display and Performance Max campaigns engineered around one metric: cost per real conversion, not clicks.",
    icon: "Target",
    priority: true,
    category: "Advertising",
    problem: {
      title: "Google Ads burns budget fast when it's managed loosely.",
      desc: "Broad keywords, weak landing pages and vanity metrics turn the world's highest-intent channel into an expense line. Managed properly, it is the most predictable acquisition channel there is.",
    },
    deliverables: [
      "Account audit & restructure (or fresh build)",
      "Keyword, competitor & auction-intelligence research",
      "Search, YouTube, Display & Performance Max campaigns",
      "Conversion tracking with enhanced conversions & call tracking",
      "Landing-page alignment & CRO recommendations",
      "Negative-keyword hygiene and search-term management",
      "Weekly optimization & transparent reporting",
    ],
    process: defaultProcess,
    benefits: [
      "High-intent traffic from people already searching",
      "Full-funnel tracking from click to closed deal",
      "Ruthless waste cutting — negatives, bid and budget discipline",
      "Clear cost-per-acquisition economics you can plan around",
    ],
    industries: ["Real estate", "Immigration & visa", "Healthcare & clinics", "Education", "Local & B2B services", "E-commerce"],
    faqs: [
      { q: "What budget do we need to start?", a: "It depends on your industry's click costs and lead targets. We model expected CPC, conversion rate and lead cost before recommending a monthly budget." },
      { q: "How is this different from boosting posts?", a: "Google Ads captures existing demand — people actively searching for what you sell. It requires proper tracking, keyword strategy and landing-page alignment to be profitable." },
      { q: "When do results show?", a: "Traffic starts immediately; meaningful optimization data typically matures within 2–4 weeks of live spend." },
    ],
  },
  {
    slug: "social-media-paid-ads",
    name: "Social Media Paid Ads",
    shortName: "Paid Social",
    tagline: "Meta & social campaigns built to convert, not just to be seen.",
    description:
      "Full-funnel paid social across Meta, Instagram, and beyond — creative-led campaigns engineered for lead quality and acquisition cost.",
    icon: "Zap",
    priority: true,
    category: "Advertising",
    problem: {
      title: "Boosted posts are not a growth strategy.",
      desc: "Real paid social is creative testing, audience architecture, funnel design and relentless optimization. Without that discipline, social ad spend buys reach — not customers.",
    },
    deliverables: [
      "Funnel & audience architecture (prospecting → retargeting)",
      "Creative production — statics, reels, UGC-style video",
      "Meta (Facebook & Instagram) campaign management",
      "Lead-form, landing-page and WhatsApp funnels",
      "Pixel, Conversions API & event tracking setup",
      "Structured creative testing framework",
      "Weekly performance reporting with CPL/CPA focus",
    ],
    process: defaultProcess,
    benefits: [
      "Creative-led campaigns that stop the scroll",
      "Lead quality managed through funnel design, not luck",
      "Systematic creative testing instead of guesswork",
      "Reporting tied to cost per qualified lead and sale",
    ],
    industries: ["Real estate", "Immigration", "D2C & e-commerce", "Education", "Health & wellness", "Local services"],
    faqs: [
      { q: "Do you produce the ad creative?", a: "Yes — our in-house design and video team produces statics, reels and UGC-style creative as part of the engagement. Creative is the biggest lever in paid social." },
      { q: "Lead forms or landing pages — which is better?", a: "It depends on ticket size and qualification needs. We often run both and let cost-per-qualified-lead data decide." },
      { q: "Which platforms do you cover?", a: "Meta (Facebook & Instagram) is the core; we also run YouTube, LinkedIn and X where the audience fits." },
    ],
  },
  {
    slug: "web-development",
    name: "Web Development",
    shortName: "Web Development",
    tagline: "Fast, conversion-first websites that turn traffic into business.",
    description:
      "Modern websites and landing pages engineered for speed, SEO and conversion — built with the same stack and standards as this site.",
    icon: "Code2",
    priority: true,
    category: "Technology",
    problem: {
      title: "A slow, generic website silently taxes every campaign.",
      desc: "Every rupee of ad spend lands on your website. If it loads slowly, reads poorly or fails to guide visitors to act, your acquisition costs rise across every channel.",
    },
    deliverables: [
      "Conversion-focused marketing websites (Next.js / modern stack)",
      "High-speed landing pages for ad campaigns",
      "Funnel & lead-capture integration (CRM, WhatsApp, forms)",
      "Technical SEO, analytics & event tracking setup",
      "CMS-editable content structures",
      "Performance optimization — Core Web Vitals focused",
      "Ongoing maintenance & iteration support",
    ],
    process: [
      { title: "Discovery & Architecture", desc: "We map your offers, audience journeys and conversion goals into a sitemap and content plan." },
      { title: "Design & Copy", desc: "Premium, on-brand design with conversion-led copy — reviewed with you in staged previews." },
      { title: "Build & Integrate", desc: "Modern, fast build with forms, CRM, analytics and automation wired in from day one." },
      { title: "Launch & Improve", desc: "Post-launch we monitor performance and iterate on conversion data." },
    ],
    benefits: [
      "Sub-second loads that protect ad spend and rankings",
      "Pages designed around one job: converting visitors",
      "SEO-ready structure and metadata from day one",
      "A site your marketing team can actually build on",
    ],
    industries: ["Real estate", "Immigration", "Professional services", "Healthcare", "Education", "Startups & SMEs"],
    faqs: [
      { q: "What stack do you build with?", a: "Modern React/Next.js with Tailwind CSS — the same technology powering this website — plus headless CMS options where content teams need control." },
      { q: "Do you write the copy?", a: "Yes. Conversion-led copywriting is included; we iterate with your team for accuracy and brand voice." },
      { q: "Can you rebuild our existing site?", a: "Yes — we can migrate and redesign existing sites, preserving SEO equity with proper redirects and structure." },
    ],
  },
  {
    slug: "lead-generation",
    name: "Lead Generation",
    tagline: "Complete lead systems — traffic to closed deal.",
    description:
      "Our flagship capability: full-funnel lead generation systems combining ads, landing pages, qualification, follow-up and conversion tracking.",
    icon: "Filter",
    priority: true,
    category: "Acquisition",
    problem: {
      title: "Leads without a system are just names in a spreadsheet.",
      desc: "Real lead generation is a pipeline: the right traffic, a page that converts, qualification that filters, follow-up that persists, and tracking that proves ROI.",
    },
    deliverables: [
      "End-to-end funnel strategy & build",
      "Paid traffic across Google & Meta",
      "Conversion-first landing pages",
      "Qualification logic & lead scoring",
      "CRM, WhatsApp & email follow-up automation",
      "Sales-handoff workflows & pipeline reporting",
    ],
    process: defaultProcess,
    benefits: [
      "One accountable system from click to customer",
      "Qualification built in — sales teams get real prospects",
      "Automated follow-up that never lets a lead go cold",
      "Reporting that ties spend to revenue",
    ],
    industries: ["Real estate", "Immigration", "Education", "Healthcare", "B2B & professional services"],
    faqs: [
      { q: "What makes a 'system' different from running ads?", a: "Ads are one component. A system includes the landing page, qualification, follow-up automation and reporting — so leads actually convert into revenue, not just inquiries." },
      { q: "Do you work with our sales team?", a: "Yes. We define lead handoff, follow-up SLAs and feedback loops with your sales team — their close-rate data feeds our optimization." },
      { q: "How is performance reported?", a: "Weekly reports covering spend, leads, qualified leads, cost metrics and pipeline outcomes — all against agreed KPIs." },
    ],
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    tagline: "Content and community that compound attention.",
    description: "Strategic content, calendars and community management that build brands people remember and trust.",
    icon: "Share2",
    priority: false,
    category: "Creative",
    problem: { title: "Posting without strategy is noise.", desc: "Consistent, on-brand, platform-native content builds the trust that makes every other channel cheaper." },
    deliverables: ["Content strategy & monthly calendars", "Reels, statics, carousels & stories", "Community management & engagement", "Brand voice & creative direction", "Monthly performance reviews"],
    process: defaultProcess,
    benefits: ["Consistent, professional presence", "Content that supports paid funnels", "Audience trust that compounds"],
    industries: ["Real estate", "Immigration", "Political", "Retail & D2C", "Services"],
    faqs: [{ q: "How many posts per month?", a: "Calendars are tailored per platform and goal — typically 12–20 pieces including reels and statics, finalized during strategy." }],
  },
  {
    slug: "social-media-optimization",
    name: "Social Media Optimization",
    tagline: "Profiles engineered to convert visitors into followers and leads.",
    description: "Profile optimization, content structuring and discoverability improvements across all major platforms.",
    icon: "UserCheck",
    priority: false,
    category: "Creative",
    problem: { title: "First impressions happen on your profile.", desc: "An optimized profile converts profile visits into follows, inquiries and website clicks." },
    deliverables: ["Profile & bio optimization", "Highlight & pinned-content strategy", "Keyword & hashtag architecture", "Cross-platform consistency audit"],
    process: defaultProcess,
    benefits: ["Higher profile-to-follow conversion", "Clearer brand positioning", "Better discoverability"],
    industries: ["All industries"],
    faqs: [{ q: "Is SMO a one-time job?", a: "The initial optimization is one-time; we recommend quarterly reviews as platforms and positioning evolve." }],
  },
  {
    slug: "content-marketing",
    name: "Content Marketing",
    tagline: "Content that ranks, nurtures and sells.",
    description: "Blogs, guides, email sequences and thought leadership that build organic demand over time.",
    icon: "PenLine",
    priority: false,
    category: "Creative",
    problem: { title: "Ads stop when spend stops. Content compounds.", desc: "Strategic content builds organic traffic, nurtures prospects and lowers blended acquisition costs." },
    deliverables: ["Content strategy & editorial calendar", "SEO blogs & long-form guides", "Email nurture sequences", "Case studies & thought leadership"],
    process: defaultProcess,
    benefits: ["Compounding organic traffic", "Warmer, better-educated leads", "Lower blended CAC over time"],
    industries: ["Real estate", "Immigration", "B2B services", "Education"],
    faqs: [{ q: "How long until content shows results?", a: "SEO-driven content typically compounds over 3–6 months; email nurture can impact conversions within weeks." }],
  },
  {
    slug: "influencer-marketing",
    name: "Influencer Marketing",
    tagline: "Creator partnerships that borrow trust at scale.",
    description: "End-to-end influencer campaigns — discovery, negotiation, briefing, execution and measurement.",
    icon: "Users",
    priority: false,
    category: "Creative",
    problem: { title: "People trust people more than ads.", desc: "The right creator partnership delivers reach, credibility and content in one move — if selection and briefing are disciplined." },
    deliverables: ["Creator discovery & vetting", "Campaign strategy & briefs", "Negotiation & contracting", "Execution tracking & reporting"],
    process: defaultProcess,
    benefits: ["Trusted reach in target communities", "Authentic content at scale", "Measurable campaign outcomes"],
    industries: ["D2C & retail", "Real estate launches", "Political outreach", "Hospitality"],
    faqs: [{ q: "Micro or macro influencers?", a: "Usually a mix — micro creators for trust and niche reach, macro for awareness spikes. Selection follows audience data, not follower counts alone." }],
  },
  {
    slug: "native-advertising",
    name: "Native Advertising",
    tagline: "Ads that earn attention inside trusted content.",
    description: "Native placements on premium publishers and content networks that build awareness without ad fatigue.",
    icon: "Newspaper",
    priority: false,
    category: "Advertising",
    problem: { title: "Audiences have learned to ignore obvious ads.", desc: "Native placements sit inside content people already trust — earning attention that banners can't buy." },
    deliverables: ["Publisher & network selection", "Native creative & headline testing", "Campaign setup & management", "Engagement & conversion reporting"],
    process: defaultProcess,
    benefits: ["Attention without ad blindness", "Premium publisher environments", "Strong mid-funnel engagement"],
    industries: ["Real estate", "Finance", "Immigration", "Consumer brands"],
    faqs: [{ q: "Where do native ads appear?", a: "Inside editorial feeds of premium publishers via networks like Taboola and Outbrain, matched to your audience." }],
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    tagline: "Design that makes brands look like market leaders.",
    description: "Brand identity, campaign creatives, brochures, social design and everything visual — produced in-house.",
    icon: "Palette",
    priority: false,
    category: "Creative",
    problem: { title: "Design quality is brand credibility.", desc: "Buyers judge competence in milliseconds. Premium design makes every touchpoint — ad, deck, brochure — work harder." },
    deliverables: ["Brand identity & design systems", "Ad & campaign creatives", "Brochures, decks & print collateral", "Social media design packs"],
    process: defaultProcess,
    benefits: ["Instantly premium brand perception", "Consistent visuals across channels", "Faster creative turnaround"],
    industries: ["All industries"],
    faqs: [{ q: "Do you handle one-off design projects?", a: "Yes — from full brand identities to single campaign creative packs." }],
  },
];

export const priorityServices = services.filter((s) => s.priority);
export const getService = (slug: string) => services.find((s) => s.slug === slug);
