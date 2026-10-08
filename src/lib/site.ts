export const site = {
  name: "CreateVerse",
  tagline: "Growth & Digital Acquisition Partner",
  email: "info@createverse.in",
  phone: "+91 91746-91846",
  phoneRaw: "+919174691846",
  whatsapp: "919174691846",
  whatsappUrl: "https://wa.me/919174691846?text=Hi%20CreateVerse%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.",
  location: "G402, Ras Residency, Sector 35, Karnal - 132001, Haryana, India",
  address: "G402, Ras Residency, Sector 35, Karnal - 132001, Haryana, India",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ras+Residency%2C+Sector+35%2C+Karnal%2C+Haryana",
  instagramUrl: "https://www.instagram.com/createverse.in/",
  // Must mirror the Google Business Profile listing exactly (name, pin, hours)
  url: "https://www.createverse.in",
  legalName: "Createverse Consulting Private Limited",
  mapsPlaceUrl: "https://www.google.com/maps/search/?api=1&query=Ras+Residency%2C+Sector+35%2C+Karnal%2C+Haryana",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Ras+Residency,+Sector+35,+Karnal,+Haryana&output=embed",
  geo: { latitude: 29.65676, longitude: 77.01462 },
  hours: { days: "Mon – Sat", opens: "09:30", closes: "19:30", label: "Mon – Sat, 9:30 AM – 7:30 PM" },
  // Slugs match src/lib/locations.ts — kept here so client components don't bundle the full city data
  cities: [
    { name: "Karnal", slug: "karnal" },
    { name: "Panipat", slug: "panipat" },
    { name: "Kurukshetra", slug: "kurukshetra" },
    { name: "Kaithal", slug: "kaithal" },
    { name: "Jind", slug: "jind" },
    { name: "Yamunanagar", slug: "yamunanagar" },
  ],
  nav: [
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Clients", href: "/clients" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export const industries = [
  {
    slug: "real-estate",
    name: "Real Estate",
    headline: "Generate qualified property buyers, investors and inquiries.",
    description:
      "We build end-to-end acquisition systems for developers, brokers and channel partners — from hyper-targeted campaigns to site-visit-ready lead pipelines.",
    points: [
      "Project launch & inventory-clearance campaigns",
      "Buyer and investor lead funnels with CRM handoff",
      "Geo-targeted ads for site visits and walk-ins",
      "Broker & channel-partner enablement creatives",
    ],
    cta: { label: "Explore Real Estate Growth", href: "/services/real-estate-lead-generation" },
  },
  {
    slug: "immigration",
    name: "Immigration & Visa",
    headline: "Build predictable lead pipelines for immigration and visa businesses.",
    description:
      "Consistent, compliant inquiry generation for consultancies — study visa, work permit, PR and visitor visa verticals, across geographies and intakes.",
    points: [
      "Country- and program-specific campaign funnels",
      "Webinar & consultation booking systems",
      "Qualification flows that filter serious applicants",
      "Multilingual creative and landing pages",
    ],
    cta: { label: "Explore Immigration Growth", href: "/services/immigration-lead-generation" },
  },
  {
    slug: "political",
    name: "Political",
    headline: "Digital campaign strategy, voter outreach and campaign communication.",
    description:
      "War-room style digital operations for candidates and parties — narrative building, social media management, and ground-level outreach at scale.",
    points: [
      "Campaign narrative & communication strategy",
      "Social media war-room and content operations",
      "Voter outreach, volunteer & supporter mobilization",
      "Reputation management and rapid response",
    ],
    cta: { label: "Explore Political Management", href: "/services/political-management" },
  },
  {
    slug: "businesses",
    name: "Businesses",
    headline: "Performance marketing and digital systems designed for measurable growth.",
    description:
      "For ambitious brands that need more than posts and impressions — full-funnel performance marketing tied directly to revenue outcomes.",
    points: [
      "Full-funnel Google & paid social programs",
      "Conversion-first websites and landing pages",
      "Content engines that compound over time",
      "Transparent reporting tied to business KPIs",
    ],
    cta: { label: "Explore Performance Marketing", href: "/services/lead-generation" },
  },
];
