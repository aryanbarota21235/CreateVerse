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
  /** Optional <title> override (template appends "| CreateVerse"). Default: "{name} Agency in Karnal, India" */
  metaTitle?: string;
  /** Optional meta description override. */
  metaDescription?: string;
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
    metaTitle: "Real Estate Lead Generation Agency in Karnal",
    metaDescription:
      "Real estate lead generation agency in Karnal, Haryana. Verified buyer and investor leads, site-visit funnels and Google/Meta ads for developers across India.",
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
    metaTitle: "Immigration & Visa Lead Generation Agency, Karnal",
    metaDescription:
      "Immigration lead generation agency in Karnal, Haryana. Study visa, PR and work permit enquiry funnels with eligibility screening for consultancies across India.",
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
    name: "Political Campaign",
    shortName: "Political Campaign",
    tagline: "High-impact digital operations for campaigns that need to win.",
    description:
      "Digital campaign strategy, social media management, voter outreach and communication — run with the discipline of a performance marketing operation.",
    icon: "Megaphone",
    priority: true,
    category: "Campaigns",
    problem: {
      title: "Modern campaigns are won or lost on digital ground.",
      desc: "Voters form opinions on their phones long before rally day. Without coordinated digital campaign operations — narrative, content, outreach and rapid response — campaigns cede the narrative to opponents.",
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
    metaTitle: "Google Ads Agency in Karnal, Haryana",
    metaDescription:
      "Google Ads agency in Karnal, Haryana. Search, YouTube, Display and Performance Max campaigns managed for cost per real lead, not clicks. Serving all of India.",
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
    slug: "seo",
    name: "SEO Services",
    shortName: "SEO",
    tagline: "Rank at the top of Google — in Karnal, across Haryana and all of India.",
    description:
      "Local SEO, Google Business Profile optimisation, technical SEO and search-led content that puts your business on page one for the searches your customers actually make.",
    icon: "Search",
    priority: true,
    metaTitle: "SEO Company in Karnal, Haryana | Local SEO",
    metaDescription:
      "SEO company in Karnal, Haryana. Local SEO, Google Business Profile and Maps ranking, technical SEO and content for businesses in Karnal and across India.",
    category: "Acquisition",
    problem: {
      title: "Ads stop the day you stop paying. Rankings keep working.",
      desc: "Most businesses in Karnal and Haryana either have no organic presence or a website Google cannot understand. SEO done properly turns Google Search and Google Maps into a lead source that compounds month after month.",
    },
    deliverables: [
      "Technical SEO audit — speed, Core Web Vitals, indexing, schema markup",
      "Keyword research mapped to buyer intent and city-level searches",
      "On-page optimisation — titles, headings, content and internal links",
      "Local SEO — Google Business Profile, Google Maps 3-Pack, citations and review strategy",
      "SEO content — service pages, location pages, blogs and guides",
      "Authority building — digital PR, local directories and quality backlinks",
      "Monthly ranking, traffic and lead reporting from Search Console and GA4",
    ],
    process: [
      { title: "Audit & Keyword Map", desc: "We audit your site, competitors and Google Business Profile, then map the exact searches that bring customers in Karnal, Haryana and your wider market." },
      { title: "Technical & On-Page Fixes", desc: "Speed, mobile, indexing, schema and page structure are fixed first so Google can read and trust every page." },
      { title: "Local & Content Build", desc: "Google Business Profile, location pages, service pages and content are built around the keyword map — with reviews and citations working in parallel." },
      { title: "Authority & Growth", desc: "Links, digital PR and monthly content keep rankings climbing while we report traffic, calls and leads — not just positions." },
    ],
    benefits: [
      "Page-one rankings for 'near me' and city searches in Karnal and Haryana",
      "Google Maps 3-Pack visibility that drives calls and walk-ins",
      "Organic leads that keep arriving without ad spend",
      "Transparent monthly reporting from Google Search Console and GA4",
    ],
    industries: ["Real estate", "Immigration & visa", "Healthcare & clinics", "Education & institutes", "Local & B2B services", "E-commerce"],
    faqs: [
      { q: "Which is the best SEO company in Karnal?", a: "Judge any SEO company on proof: live rankings they can show, Search Console reports you will actually receive, and whether they own the work in-house. CreateVerse runs SEO from its Sector 35, Karnal office — technical, on-page, local and content SEO under one team — and reports on traffic, calls and leads, not just keyword positions." },
      { q: "How long does SEO take to show results in Karnal?", a: "Local SEO and Google Maps improvements usually show within 4–8 weeks. Competitive organic keywords typically take 3–6 months of consistent work. We share Search Console data every month so you can see progress before the leads arrive." },
      { q: "What does SEO cost in Karnal?", a: "Pricing depends on your market, competition and how many locations or services you want to rank for. We scope a fixed monthly plan after a free audit, with clear deliverables and no hidden fees." },
      { q: "Do you also handle Google Business Profile and Google Maps ranking?", a: "Yes. Local SEO is the core of our Karnal practice: profile optimisation, categories, photos, posts, review strategy, citations and local landing pages that push your business into the Google 3-Pack." },
      { q: "Can you do SEO for businesses outside Karnal?", a: "Yes. We run SEO for clients across Haryana — Panipat, Kurukshetra, Kaithal, Jind and Yamunanagar — as well as Punjab, Delhi NCR and the rest of India. The same team, the same reporting." },
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
    metaTitle: "Facebook & Instagram Ads Agency in Karnal",
    metaDescription:
      "Meta ads agency in Karnal, Haryana. Facebook and Instagram lead campaigns with creative testing, WhatsApp lead capture and strict cost-per-lead caps.",
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
    metaTitle: "Website Development Company in Karnal, Haryana",
    metaDescription:
      "Website development company in Karnal, Haryana. Fast Next.js websites and landing pages built to convert ad traffic into calls and leads. Call +91 91746-91846.",
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
    metaTitle: "Lead Generation Company in Karnal, Haryana",
    metaDescription:
      "Lead generation company in Karnal, Haryana. Full-funnel inquiry systems: ads, landing pages, qualification and CRM handoff for B2B and local businesses.",
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
    shortName: "Social Media Marketing",
    tagline: "Content and community that compound attention.",
    description: "Strategic content, calendars and community management that build brands people remember and trust — on Instagram, Facebook, LinkedIn and YouTube.",
    icon: "Share2",
    priority: false,
    metaTitle: "Social Media Marketing Company in Karnal",
    metaDescription:
      "Social media marketing company in Karnal, Haryana. Reels, content calendars and community management that build brands people trust, across India.",
    category: "Creative",
    problem: {
      title: "Posting without strategy is noise.",
      desc: "Most business pages in Karnal post whenever someone remembers, with no plan, no hook and no call to action. Consistent, on-brand, platform-native content builds the trust that makes every other channel — ads, SEO, referrals — cheaper.",
    },
    deliverables: [
      "Social media strategy, positioning and monthly content calendars",
      "Reels, statics, carousels and stories — shot, designed and edited in-house",
      "Copywriting in English, Hindi and Punjabi for regional audiences",
      "Community management — comments, DMs and WhatsApp follow-ups",
      "Brand voice guidelines and creative direction",
      "Hashtag, trend and competitor monitoring",
      "Monthly performance reviews: reach, saves, profile visits and enquiries",
    ],
    process: [
      { title: "Audit & Positioning", desc: "We review your current pages, competitors in Karnal and your category, and define what your brand should be known for." },
      { title: "Calendar & Creative", desc: "A monthly calendar with hooks, formats and CTAs — approved by you before production starts." },
      { title: "Publish & Engage", desc: "Daily publishing with community management so comments and DMs turn into conversations and leads." },
      { title: "Review & Improve", desc: "Every month we double down on what earned saves, shares and enquiries, and cut what didn't." },
    ],
    benefits: [
      "A consistent, professional presence buyers check before they call",
      "Content that supports paid funnels and lowers ad costs",
      "Audience trust that compounds month after month",
      "One in-house team for strategy, shooting, design and posting",
    ],
    industries: ["Real estate", "Immigration & visa", "Political & public figures", "Retail & D2C", "Clinics, schools & local services"],
    faqs: [
      { q: "How many posts per month do you deliver?", a: "Calendars are tailored per platform and goal — typically 12–20 pieces a month including reels, statics and stories, finalised during strategy. Volume matters less than consistency and a clear call to action." },
      { q: "Do you shoot content at our location in Karnal?", a: "Yes. Our team is based at Sector 35, Karnal, so on-site shoots for showrooms, clinics, projects and offices in Karnal and nearby cities are part of the plan. Clients elsewhere in India send raw footage or we work with local shooters." },
      { q: "Which platforms should a Karnal business be on?", a: "For most local businesses Instagram and Facebook drive enquiries, Google Business Profile posts support local search, and LinkedIn matters for B2B. We recommend platforms based on where your buyers actually spend time, not on trends." },
      { q: "How is social media marketing different from social media management?", a: "Marketing is the strategy and content engine — what you say, to whom, and why. Management is the daily operation of posting, replying and reporting. Most clients take both; some with in-house teams take strategy and creative only." },
      { q: "When will we see results?", a: "Reach and engagement improve within the first month; enquiries typically follow in 2–3 months as consistency builds trust. Paired with Meta ads, results come faster." },
    ],
  },
  {
    slug: "social-media-optimization",
    name: "Social Media Optimization",
    shortName: "SMO",
    tagline: "Profiles engineered to convert visitors into followers and leads.",
    description: "Profile optimisation, content structuring and discoverability improvements across Instagram, Facebook, LinkedIn, YouTube and Google Business Profile.",
    icon: "UserCheck",
    priority: false,
    metaTitle: "SMO Services in Karnal, Haryana",
    metaDescription:
      "Social media optimization (SMO) services in Karnal, Haryana. Profile, bio, highlight and hashtag optimisation that turns profile visits into enquiries.",
    category: "Creative",
    problem: {
      title: "First impressions happen on your profile.",
      desc: "Ads, reels and word of mouth all end in the same place: your profile. A weak bio, missing highlights and no clear next step waste every visit. An optimised profile converts visits into follows, enquiries and website clicks.",
    },
    deliverables: [
      "Profile, bio and username optimisation with searchable keywords",
      "Highlight covers, pinned-content and link-in-bio strategy",
      "Keyword and hashtag architecture per platform",
      "Google Business Profile and YouTube channel optimisation",
      "Cross-platform consistency audit — names, logos, handles, contact details",
      "Conversion paths: WhatsApp, call and enquiry buttons set up correctly",
    ],
    process: [
      { title: "Profile Audit", desc: "We score every profile on clarity, keywords, visuals and conversion paths, benchmarked against competitors in your city and category." },
      { title: "Rewrite & Redesign", desc: "Bios, highlights, covers and pinned content are rewritten and redesigned around what your buyers search for." },
      { title: "Discoverability Setup", desc: "Keywords, hashtags, location tags and categories are configured so the right people find you." },
      { title: "Quarterly Review", desc: "Platforms change; we review and refresh every quarter so profiles keep converting." },
    ],
    benefits: [
      "Higher profile-to-follow and profile-to-enquiry conversion",
      "Clearer brand positioning in the first three seconds",
      "Better discoverability in Instagram, YouTube and Google search",
      "Every paid and organic visit works harder",
    ],
    industries: ["All industries — local businesses, professionals, brands and public figures"],
    faqs: [
      { q: "Is SMO a one-time job?", a: "The initial optimisation is a one-time project; we recommend quarterly reviews as platforms, features and your positioning evolve." },
      { q: "What does SMO include for a business in Karnal?", a: "Instagram, Facebook, LinkedIn and YouTube profile optimisation, plus Google Business Profile setup or clean-up so your business appears correctly in local search and maps." },
      { q: "Do you also create the content?", a: "SMO sets up the profiles to convert. Ongoing posts, reels and community management are covered under Social Media Marketing and Social Media Management, which most clients combine with SMO." },
      { q: "How quickly does SMO show results?", a: "Profile changes go live within a week. Improvements in profile visits, follows and enquiries are usually visible within the first month." },
    ],
  },
  {
    slug: "content-marketing",
    name: "Content Marketing",
    shortName: "Content Marketing",
    tagline: "Content that ranks, nurtures and sells.",
    description: "Blogs, guides, email sequences and thought leadership that build organic demand over time — written around what your buyers actually search for.",
    icon: "PenLine",
    priority: false,
    metaTitle: "Content Marketing Agency in Karnal, Haryana",
    metaDescription:
      "Content marketing agency in Karnal, Haryana. SEO blogs, guides, email nurture and thought leadership that build organic demand for businesses across India.",
    category: "Creative",
    problem: {
      title: "Ads stop when spend stops. Content compounds.",
      desc: "Strategic content builds organic traffic, answers buyer questions before the sales call and lowers blended acquisition cost. Most businesses in Haryana have no content at all — which is exactly the opportunity.",
    },
    deliverables: [
      "Content strategy and editorial calendar mapped to search demand",
      "SEO blogs and long-form guides targeting buyer-intent keywords",
      "Service and location page copy that ranks and converts",
      "Email nurture sequences and WhatsApp broadcast scripts",
      "Case studies, founder articles and thought leadership",
      "Content in English and Hindi for regional reach",
      "Monthly reporting: rankings, organic traffic and assisted leads",
    ],
    process: [
      { title: "Keyword & Topic Research", desc: "We map the questions your customers ask Google — in Karnal, Haryana and your wider market — and cluster them into topics." },
      { title: "Editorial Calendar", desc: "A prioritised calendar: the content most likely to rank and drive enquiries ships first." },
      { title: "Write, Design, Publish", desc: "Writers, designers and our SEO team produce and publish each piece with on-page optimisation and internal links." },
      { title: "Measure & Refresh", desc: "We track rankings and leads per article and refresh the pieces that are climbing." },
    ],
    benefits: [
      "Compounding organic traffic without ad spend",
      "Warmer, better-educated leads who already trust you",
      "Lower blended customer acquisition cost over time",
      "Content that also feeds your social media and ads",
    ],
    industries: ["Real estate", "Immigration & education", "Healthcare & clinics", "B2B services", "SaaS & technology"],
    faqs: [
      { q: "How long until content shows results?", a: "SEO-driven content typically compounds over 3–6 months; email and WhatsApp nurture can impact conversions within weeks. We report rankings and traffic monthly so you can see momentum early." },
      { q: "How is content marketing different from SEO?", a: "SEO makes your site technically sound and your existing pages rank. Content marketing creates the new pages, blogs and guides that give Google more reasons to rank you. We run both from the same Karnal team." },
      { q: "Do you write content for Karnal and Haryana audiences?", a: "Yes. Local guides, city-specific service pages and Hindi content are part of most plans, because regional searches convert better and face less competition." },
      { q: "Who writes the content?", a: "In-house writers working with our SEO strategist and your subject experts. Nothing is published without your review, and we never mass-produce unchecked AI articles." },
    ],
  },
  {
    slug: "influencer-marketing",
    name: "Influencer Marketing",
    shortName: "Influencer Marketing",
    tagline: "Creator partnerships that borrow trust at scale.",
    description: "End-to-end influencer campaigns — creator discovery, negotiation, briefing, execution and measurement — with regional creators across Haryana, Punjab and India.",
    icon: "Users",
    priority: false,
    metaTitle: "Influencer Marketing Agency in Karnal, Haryana",
    metaDescription:
      "Influencer marketing agency in Karnal, Haryana. Creator discovery, briefs, negotiation and tracked campaigns with regional creators across Haryana and India.",
    category: "Creative",
    problem: {
      title: "People trust people more than ads.",
      desc: "The right creator partnership delivers reach, credibility and content in one move — if selection, briefing and tracking are disciplined. Picked on follower count alone, it burns budget.",
    },
    deliverables: [
      "Creator discovery and vetting — audience quality, location and engagement checks",
      "Regional creator network across Karnal, Haryana, Punjab and Delhi NCR",
      "Campaign strategy, briefs and content guidelines",
      "Negotiation, contracting and usage rights",
      "Whitelisting and paid amplification of creator content",
      "Tracking links, promo codes and campaign reporting",
    ],
    process: [
      { title: "Audience & Creator Mapping", desc: "We define who you need to reach and shortlist creators whose audiences actually live in those cities and segments." },
      { title: "Brief & Negotiate", desc: "Clear briefs, deliverables and usage rights, negotiated to keep cost per reach sensible." },
      { title: "Produce & Publish", desc: "Content is reviewed before it goes live and scheduled around launches, intakes or events." },
      { title: "Measure & Amplify", desc: "We track reach, clicks and enquiries per creator, and amplify winning content with paid media." },
    ],
    benefits: [
      "Trusted reach inside target communities and cities",
      "Authentic content you can reuse in ads and on your profiles",
      "Measurable outcomes per creator, not vanity reach",
      "Regional-language creators for Haryana and Punjab audiences",
    ],
    industries: ["D2C & retail", "Real estate launches", "Education & immigration", "Hospitality & events", "Political outreach"],
    faqs: [
      { q: "Micro or macro influencers?", a: "Usually a mix — micro creators for trust and niche local reach, macro creators for awareness spikes. Selection follows audience data, not follower counts alone." },
      { q: "Do you work with local influencers in Karnal and Haryana?", a: "Yes. We maintain a vetted network of regional creators across Karnal, Panipat, Kurukshetra, Chandigarh and Delhi NCR, in Hindi, Punjabi and English." },
      { q: "How do you measure influencer campaigns?", a: "Tracking links, promo codes, landing pages and platform insights give us reach, clicks, enquiries and sales per creator, reported alongside cost." },
      { q: "What budget is needed?", a: "Local micro-creator campaigns can start small; larger launches scale up. We propose a creator mix and budget after understanding your goal and geography." },
    ],
  },
  {
    slug: "native-advertising",
    name: "Native Advertising",
    shortName: "Native Ads",
    tagline: "Ads that earn attention inside trusted content.",
    description: "Native placements on premium publishers and content networks — Taboola, Outbrain and Google Discovery — that build awareness and mid-funnel demand without ad fatigue.",
    icon: "Newspaper",
    priority: false,
    metaTitle: "Native Advertising Agency in Karnal & India",
    metaDescription:
      "Native advertising agency in Karnal, Haryana. Taboola, Outbrain and premium publisher placements that earn attention inside trusted content.",
    category: "Advertising",
    problem: {
      title: "Audiences have learned to ignore obvious ads.",
      desc: "Native placements sit inside the editorial feeds people already trust — earning attention that banners can't buy, at a lower cost per engaged visitor.",
    },
    deliverables: [
      "Publisher and network selection — Taboola, Outbrain, Google Discovery, regional news sites",
      "Native creative, headline and thumbnail testing",
      "Advertorial and landing page copy built for native traffic",
      "Campaign setup, bidding and placement management",
      "Retargeting of native visitors on Meta and Google",
      "Engagement and conversion reporting",
    ],
    process: [
      { title: "Audience & Publisher Fit", desc: "We identify the publishers and networks your buyers read — national, regional Hindi and category sites." },
      { title: "Creative Build", desc: "Headlines, thumbnails and advertorial pages written to earn clicks and keep readers moving to enquiry." },
      { title: "Launch & Optimise", desc: "Placements, bids and creatives are tuned weekly on engaged-visit and lead cost." },
      { title: "Retarget & Scale", desc: "Engaged readers are retargeted across Meta and Google so native spend turns into leads." },
    ],
    benefits: [
      "Attention without ad blindness",
      "Premium publisher environments for brand credibility",
      "Strong mid-funnel engagement that feeds retargeting",
      "Lower cost per engaged visitor than display",
    ],
    industries: ["Real estate", "Finance & insurance", "Immigration & education", "Healthcare", "Consumer brands"],
    faqs: [
      { q: "Where do native ads appear?", a: "Inside the editorial feeds of premium publishers and news sites via networks like Taboola, Outbrain and Google Discovery, matched to your audience and geography." },
      { q: "Is native advertising useful for a business in Karnal or Haryana?", a: "Yes, when geo-targeted. Native placements on Hindi and regional news sites reach buyers across Haryana at a low cost per visit, and work especially well for real estate launches and education intakes." },
      { q: "How is native different from Google Display?", a: "Display shows banners around content; native looks and reads like the content itself, so it earns far higher engagement and is less affected by ad blindness." },
      { q: "Do native ads generate leads directly?", a: "Sometimes, but their main job is building awareness and intent. We combine native with retargeting on Meta and Google, which is where most of the leads convert." },
    ],
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    shortName: "Graphic Design",
    tagline: "Design that makes brands look like market leaders.",
    description: "Brand identity, campaign creatives, brochures, social design and everything visual — produced in-house at our Karnal studio for clients across India.",
    icon: "Palette",
    priority: false,
    metaTitle: "Graphic Design Company in Karnal, Haryana",
    metaDescription:
      "Graphic design company in Karnal, Haryana. Brand identity, ad creatives, brochures, decks and social media design produced in-house for businesses across India.",
    category: "Creative",
    problem: {
      title: "Design quality is brand credibility.",
      desc: "Buyers judge competence in milliseconds. Premium, consistent design makes every touchpoint — ad, deck, brochure, signboard — work harder, while inconsistent visuals quietly tax every campaign.",
    },
    deliverables: [
      "Logo, brand identity and design systems",
      "Ad and campaign creatives for Meta, Google and YouTube",
      "Brochures, decks, flyers, hoardings and print collateral",
      "Social media design packs — templates, covers and carousels",
      "Packaging, menus, catalogues and stationery",
      "Political campaign creatives — posters, banners and digital cards",
      "Source files and brand guidelines handed over to you",
    ],
    process: [
      { title: "Brief & References", desc: "We understand the audience, the use case and the brands you admire, then agree on direction before design starts." },
      { title: "Concepts", desc: "Two to three directions, presented with context — how the design looks on an ad, a hoarding and a phone screen." },
      { title: "Refine & Finalise", desc: "Structured feedback rounds, then final files in every format you need." },
      { title: "Rollout", desc: "Templates and guidelines so your team, printer and ad accounts stay consistent." },
    ],
    benefits: [
      "Instantly premium brand perception",
      "Consistent visuals across digital, print and outdoor",
      "Faster creative turnaround from an in-house studio",
      "Designers who also understand ads and conversion",
    ],
    industries: ["All industries — retail, real estate, education, healthcare, hospitality, political and B2B"],
    faqs: [
      { q: "Do you handle one-off design projects?", a: "Yes — from full brand identities to a single brochure, hoarding or campaign creative pack. Many Karnal businesses start with a one-off project and move to a monthly design retainer." },
      { q: "Can we meet your design team in Karnal?", a: "Yes. Our studio is at Sector 35, Karnal. Clients in Karnal and nearby cities can review concepts in person; clients elsewhere review over shared previews and calls." },
      { q: "Do you design for print and outdoor as well as digital?", a: "Yes. Brochures, flyers, hoardings, signboards, vehicle branding and packaging — with print-ready files and coordination with your printer if needed." },
      { q: "What is the turnaround time?", a: "Social creatives and ads: 2–4 working days. Brochures and decks: about a week. Full brand identities: 2–4 weeks depending on rounds." },
    ],
  },
  {
    slug: "creative-services",
    name: "Creative Services & Brand Design",
    shortName: "Creative Services",
    tagline: "High-impact visual identity, performance creative and brand assets.",
    description:
      "Full-stack creative production for modern businesses. We design brand guidelines, high-converting ad creatives, video assets, presentation decks and marketing collateral that set you apart.",
    icon: "Palette",
    priority: true,
    metaTitle: "Creative & Branding Agency in Karnal, Haryana",
    metaDescription:
      "Creative and branding agency in Karnal, Haryana. Brand identity, performance ad creatives and visual systems that lift conversion for businesses across India.",
    category: "Creative",
    problem: {
      title: "Generic visual design hurts conversion and credibility.",
      desc: "In competitive markets, buyers evaluate capability within seconds. Inconsistent creative and cookie-cutter templates reduce trust and lower ad performance. You need bold, cohesive visual systems that drive measurable commercial results.",
    },
    deliverables: [
      "Brand identity systems, typography & color palettes",
      "High-converting performance ad creatives (static, carousel, motion)",
      "Brochures, pitch decks & corporate marketing collateral",
      "Short-form video assets, reels & motion design",
      "Custom landing page UI/UX kits & digital design systems",
      "Social media brand style guides & post asset templates",
    ],
    process: defaultProcess,
    benefits: [
      "Consistent, luxury brand positioning across every touchpoint",
      "Higher ad CTR and reduced cost-per-click from thumb-stopping creative",
      "Rapid turnaround on campaign and marketing assets",
      "Full ownership of all production source files",
    ],
    industries: ["Real estate & luxury developers", "D2C & retail brands", "B2B & corporate enterprises", "Political & civic organizations"],
    faqs: [
      { q: "Do you handle both digital and print creative?", a: "Yes. We deliver everything from web and social ad creatives to print brochures, billboards, and investor pitch decks." },
      { q: "Can you work within our existing brand guidelines?", a: "Absolutely. We can either build a new visual identity from scratch or scale your existing brand kit across new channels." },
      { q: "What is your turnaround time for ad creatives?", a: "Campaign creative packages are typically delivered within 3–5 business days, with rapid same-day adjustments during live scaling." },
    ],
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    shortName: "Social Media Management",
    tagline: "End-to-end editorial, community, and organic brand authority.",
    description:
      "Full-scale social media operations for brands and leaders. We handle content strategy, graphic design, short-form reels, community engagement and profile growth to turn your social presence into commercial equity.",
    icon: "Share2",
    priority: true,
    metaTitle: "Social Media Management Agency in Karnal",
    metaDescription:
      "Social media management agency in Karnal, Haryana. Daily content, community management and organic growth across Instagram, Facebook, LinkedIn and YouTube.",
    category: "Creative",
    problem: {
      title: "Posting without a narrative wastes executive and marketing bandwidth.",
      desc: "Most corporate social channels publish random updates that generate zero engagement and zero leads. Social media requires consistent narrative engineering, native platform creative, and proactive community engagement.",
    },
    deliverables: [
      "Monthly content calendars & editorial strategy",
      "Short-form video editing, scripts & daily reels",
      "Platform-native visual designs & carousel infographics",
      "Community management, DM triage & audience engagement",
      "Executive and founder personal branding strategy",
      "Monthly performance analytics, growth reporting & optimization",
    ],
    process: defaultProcess,
    benefits: [
      "Consistent, professional social presence without internal operational overhead",
      "Compound organic reach and inbound brand authority",
      "High-engagement video reels that drive qualified followers",
      "Direct conversion paths from social profiles to consultation funnels",
    ],
    industries: ["Real estate developers", "Education & immigration consultancies", "Corporate leaders & founders", "E-commerce brands"],
    faqs: [
      { q: "Which platforms do you manage?", a: "We manage Instagram, LinkedIn, YouTube, Facebook, and X (Twitter), selecting the platforms where your target audience spends active time." },
      { q: "Do we need to record videos ourselves?", a: "We provide shot-by-shot scripts and guidance, or we can produce motion graphics and curate high-end footage without requiring you on camera." },
      { q: "How do you measure success?", a: "We track qualified profile visits, website clicks, inbound DM inquiries, follower growth velocity, and engagement quality." },
    ],
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
    shortName: "Performance Marketing",
    tagline: "Full-funnel digital acquisition engineered for measurable ROAS.",
    description:
      "Data-driven, omnichannel paid customer acquisition across Google, Meta, and programmatic channels. Every rupee deployed is optimized toward pipeline, revenue, and customer acquisition cost.",
    icon: "Target",
    priority: true,
    metaTitle: "Performance Marketing Agency in Karnal & India",
    metaDescription:
      "Performance marketing agency in Karnal, Haryana. Google, Meta and YouTube campaigns run on attribution and CRO, reported in leads and revenue across India.",
    category: "Acquisition",
    problem: {
      title: "Ad spend without rigorous attribution and CRO burns capital fast.",
      desc: "Scaling digital advertising requires more than boosting posts. You need precision audience targeting, rapid creative testing, high-converting landing pages, and clean attribution modeling.",
    },
    deliverables: [
      "Full-funnel media planning & cross-channel budget allocation",
      "Google Search, Performance Max, YouTube & Display campaigns",
      "Meta (Facebook & Instagram) paid acquisition funnels",
      "High-converting landing page design & continuous CRO",
      "Server-side conversion tracking & advanced attribution setup",
      "Weekly blended CAC and ROAS financial reporting",
    ],
    process: defaultProcess,
    benefits: [
      "Predictable customer acquisition at profitable CAC",
      "Multi-channel diversification so you never depend on a single ad platform",
      "Complete transparency into cost per acquisition and true pipeline value",
      "Continuous creative testing that keeps ad fatigue at bay",
    ],
    industries: ["Real estate & developers", "Immigration & visa businesses", "B2B SaaS & high-ticket services", "D2C e-commerce"],
    faqs: [
      { q: "How is performance marketing different from regular advertising?", a: "Performance marketing is 100% tied to measurable commercial outcomes (leads, sales, CAC, ROAS) rather than vanity metrics like impressions or clicks." },
      { q: "What budget do we need to start?", a: "We tailor campaign architectures based on your unit economics and target geography, typically starting with budgets that ensure statistically significant test data within 14 days." },
      { q: "Do you build the landing pages too?", a: "Yes. High-converting, mobile-optimized landing pages and speed optimization are included in our performance marketing practice." },
    ],
  },
  {
    slug: "paid-social",
    name: "Paid Social Advertising",
    shortName: "Paid Social",
    tagline: "High-ROAS Meta, LinkedIn, and YouTube performance campaigns.",
    description:
      "Scale high-intent paid social campaigns across Instagram, Facebook, LinkedIn, and YouTube. We engineer custom audience segments, video creative testing engines, and instant lead capture.",
    icon: "Megaphone",
    priority: true,
    category: "Advertising",
    problem: {
      title: "Ad fatigue and rising CPMs make paid social unprofitable without systems.",
      desc: "Traditional social ads stop working after a few weeks as audience saturation sets in. You need systematic creative refreshes, modular ad variations, and rigorous audience exclusion lists.",
    },
    deliverables: [
      "Meta Ads (Instagram & Facebook) performance campaigns",
      "LinkedIn Ads for B2B & HNI corporate targeting",
      "YouTube in-stream & shorts video ad campaigns",
      "Modular creative testing frameworks & weekly asset rotation",
      "Custom & lookalike audience architecture",
      "Server-side Conversions API (CAPI) setup",
    ],
    process: defaultProcess,
    benefits: [
      "Consistent inbound lead volume from high-traffic social platforms",
      "Scalable ROAS with systematic defense against ad fatigue",
      "Precision targeting of verified decision-makers and high-net-worth buyers",
      "Live conversion reporting directly connected to your CRM",
    ],
    industries: ["Real estate developers", "Immigration consultancies", "Political campaigns & public initiatives", "High-growth consumer brands"],
    faqs: [
      { q: "Which social ad platform works best?", a: "Meta (Instagram/Facebook) is king for volume and consumer/HNI targeting; LinkedIn dominates high-ticket B2B; and YouTube is unmatched for building high-trust video affinity." },
      { q: "How often do you refresh ad creatives?", a: "We test new hooks and visual variations weekly to maintain optimal click-through rates and prevent ad fatigue." },
      { q: "Do you integrate with our CRM?", a: "Yes. Inbound leads from Meta and LinkedIn lead forms or landing pages are piped in real time to your CRM or WhatsApp desk." },
    ],
  },
];

// "Paid Social Advertising" is the same practice as "Social Media Paid Ads". Its page stays
// live for search, but listings show the practice once — the 16 the homepage talks about.
export const listedServices = services.filter((s) => s.slug !== "paid-social");

export const priorityServices = services.filter((s) => s.priority);

export const getService = (slug: string) => {
  const clean = slug.toLowerCase().trim();
  const direct = services.find((s) => s.slug === clean);
  if (direct) return direct;

  const aliases: Record<string, string> = {
    creative: "creative-services",
    "creative-services": "creative-services",
    "creative-service": "creative-services",
    "social-media": "social-media-management",
    "social-media-management": "social-media-management",
    smm: "social-media-management",
    "performance-marketing": "performance-marketing",
    performance: "performance-marketing",
    "paid-social": "paid-social",
    "paid-social-ads": "paid-social",
  };

  const mapped = aliases[clean];
  if (mapped) {
    return services.find((s) => s.slug === mapped);
  }

  return undefined;
};
