import { site } from "@/lib/site";
import { type Service } from "@/lib/services";
import { type LocationData } from "@/lib/locations";

export const siteKeywords = [
  // Core Brand & National Positioning (All India)
  "CreateVerse",
  "CreateVerse digital",
  "CreateVerse agency",
  "growth marketing partner",
  "digital acquisition partner",
  "best digital marketing agency",
  "best digital marketing agency India",
  "top digital marketing agency in India",
  "performance marketing agency India",
  "best performance marketing agency",
  "lead generation company India",
  "growth marketing agency",
  "best ROI digital marketing agency",
  "ROI oriented digital marketing agency",
  "ROI driven digital marketing agency India",
  "B2B lead generation agency India",
  "learn digital marketing",
  "learn digital marketing course",
  "learn digital marketing online India",
  "digital marketing course in karnal",
  "digital marketing institute in karnal",

  // Local SEO Target Cities (Haryana Regional Dominance)
  "best digital marketing agency in karnal",
  "digital marketing agency karnal",
  "best digital marketing company in karnal",
  "digital marketing services karnal",
  "performance marketing agency karnal",
  "best digital marketing agency in panipat",
  "digital marketing agency panipat",
  "best digital marketing company in panipat",
  "best digital marketing agency in kurukshetra",
  "digital marketing agency kurukshetra",
  "best digital marketing agency in kaithal",
  "digital marketing agency kaithal",
  "best digital marketing agency in jind",
  "digital marketing agency jind",
  "best digital marketing agency in yamunanagar",
  "digital marketing agency yamunanagar",
  "digital marketing agency jagadhri",
  "digital marketing agency Haryana",
  "top digital marketing agency Haryana",
  "performance marketing Delhi NCR",
  "seo agency in karnal",
  "google ads agency karnal",
  "social media marketing karnal",
  "website development company in karnal",

  // Core Specialized Verticals
  "real estate lead generation agency",
  "real estate digital marketing company",
  "property buyer leads provider",
  "immigration lead generation agency",
  "visa consultancy marketing company",
  "study visa leads agency India",
  "political campaign management company India",
  "election digital war room agency",
  "political social media marketing",
  "political PR and voter outreach",

  // Digital Channels & Tech
  "Google Ads agency India",
  "Meta ads performance marketing",
  "Facebook ad lead generation",
  "Next.js web development agency",
  "high speed website development",
  "conversion rate optimization agency",
  "SEO agency India",
  "content marketing agency",
  "social media management agency",
  "influencer marketing agency India",

  // Public Figure & Leadership Entity Search Authority
  "Randeep Singh Surjewala",
  "रणदीप सिंह सुरजेवाला",
  "रणदीप सुरजेवाला",
  "Aditya Surjewala",
  "आदित्य सुरजेवाला",
  "आदित्य सिंह सुरजेवाला",
  "Kewal Singh Dhillon",
  "केवल सिंह ढिल्लों",
  "ਕੇਵਲ ਸਿੰਘ ਢਿੱਲੋਂ",
  "Gurkirat Singh Kotli",
  "गुरकीरत सिंह कोटली",
  "ਗੁਰਕੀਰਤ ਸਿੰਘ ਕੋਟਲੀ",
  "Shamsher Singh Gogi",
  "शमशेर सिंह गोगी",
  "शमशेर गोगी",
  "Pritpal Singh Pannu",
  "प्रितपाल सिंह पन्नू",
  "ਪ੍ਰਿਤਪਾਲ ਸਿੰਘ ਪੰਨੂ",
  "NIFAA Founder Pritpal Singh Pannu",
  "National Integrated Forum of Artists and Activists",
  "Bhupinder Lather",
  "भूपिंदर लाठर",
  "Bhuppi Lather",
  "Rajiv Mamuram Gonder",
  "राजीव मामूराम गोंदर",
  "राजीव गोंदर",
  "Umesh Sharma",
  "उमेश शर्मा",
  "CreateVerse public figure clients",
  "CreateVerse political clients",
  "CreateVerse election war room",
];

export const serviceSeoKeywords: Record<string, string[]> = {
  "real-estate-lead-generation": [
    "real estate lead generation",
    "real estate digital marketing agency",
    "property leads agency India",
    "real estate buyer leads",
    "luxury property marketing",
    "commercial real estate lead generation",
    "developer inventory sales marketing",
    "site visit generation real estate",
    "real estate Google ads agency",
    "real estate Facebook ad agency",
    "property investor acquisition",
    "plotted development leads",
    "real estate marketing Karnal Haryana Delhi NCR",
  ],
  "immigration-lead-generation": [
    "immigration lead generation agency",
    "study visa leads provider",
    "visa consultancy digital marketing",
    "Canada study visa lead generation",
    "PR visa marketing agency",
    "work permit leads generation",
    "immigration consultancy customer acquisition",
    "study visa Facebook ads",
    "immigration Google search ads",
    "visitor visa lead funnel",
    "immigration marketing agency Punjab Haryana",
  ],
  "political-management": [
    "political campaign management company India",
    "election digital war room agency",
    "political campaign strategy India",
    "political PR agency",
    "voter outreach digital campaign",
    "booth level voter mobilization",
    "political WhatsApp broadcast network",
    "candidate reputation management",
    "social media election campaign",
    "election consulting firm India",
    "rapid response election desk",
    "political consulting Haryana Punjab Delhi",
    "Randeep Singh Surjewala digital campaign",
    "Aditya Surjewala election campaign Kaithal",
    "Kewal Singh Dhillon BJP Punjab campaign",
    "Gurkirat Singh Kotli election campaign Khanna",
    "Shamsher Singh Gogi campaign Assandh",
    "Bhupinder Lather campaign Karnal",
    "Rajiv Mamuram Gonder campaign Nilokheri",
    "Umesh Sharma campaign Sonipat",
  ],
  "lead-generation": [
    "lead generation agency India",
    "B2B lead generation company",
    "full funnel lead generation system",
    "inbound inquiry architecture",
    "high intent sales leads",
    "performance marketing lead generation",
    "cost per qualified lead marketing",
    "business customer acquisition partner",
  ],
  "google-ads": [
    "Google Ads agency India",
    "Google PPC management company",
    "high ROAS Google ads",
    "Google search ads lead generation",
    "Google Ads expert India",
    "performance Google Ads campaigns",
    "Google Display and YouTube advertising",
    "PPC agency Delhi NCR Haryana",
  ],
  "paid-social": [
    "paid social media advertising agency",
    "Meta ads agency India",
    "Facebook lead generation ads",
    "Instagram ads performance marketing",
    "high converting social media ads",
    "paid acquisition social media",
    "Meta ads agency Delhi NCR",
  ],
  "web-development": [
    "web development agency India",
    "Next.js web development company",
    "conversion first website design",
    "high speed web development",
    "Core Web Vitals website design",
    "custom landing page development",
    "B2B corporate website development",
    "modern React web development agency",
  ],
  "performance-marketing": [
    "performance marketing agency India",
    "growth performance marketing",
    "high ROI digital marketing agency",
    "paid media performance acquisition",
    "revenue driven marketing company",
    "capital efficiency ad spend management",
  ],
  "creative-services": [
    "creative design agency India",
    "brand identity design agency",
    "performance ad creative design",
    "corporate visual identity company",
    "brand typography and design system",
    "high conversion ad creatives",
  ],
  "graphic-design": [
    "graphic design agency India",
    "corporate branding design",
    "social media ad graphic design",
    "vector brand identity design",
    "brochure and marketing collateral design",
  ],
  "social-media-management": [
    "social media management agency India",
    "social media marketing company",
    "Instagram content agency",
    "reels and short form video production",
    "community management company",
    "organic social growth agency",
  ],
  "social-media-marketing": [
    "social media marketing agency",
    "social media strategy company",
    "multi platform social marketing",
    "brand social media campaigns",
    "engagement and follower acquisition",
  ],
  "social-media-optimization": [
    "social media optimization agency",
    "SMO services India",
    "Instagram bio and profile optimization",
    "social profile conversion optimization",
    "social media SEO discoverability",
  ],
  "content-marketing": [
    "content marketing agency India",
    "SEO content writing services",
    "editorial search content",
    "organic traffic SEO agency",
    "long form content marketing",
    "top ranking SEO articles",
  ],
  "influencer-marketing": [
    "influencer marketing agency India",
    "creator partnership agency",
    "performance influencer campaigns",
    "influencer whitelisting agency",
    "regional creator influencer agency",
  ],
};

// 1. Organization & LocalBusiness JSON-LD
// Name, address, phone, pin and hours here must stay identical to the Google Business Profile.
const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: "Mughal Canal",
  addressLocality: "Karnal",
  addressRegion: "Haryana",
  postalCode: "132001",
  addressCountry: "IN",
};

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        legalName: site.legalName,
        alternateName: ["Create Verse", "CreateVerse Digital"],
        url: site.url,
        logo: {
          "@type": "ImageObject",
          "@id": `${site.url}/#logo`,
          url: `${site.url}/icon-512.png`,
          width: 512,
          height: 512,
          caption: "CreateVerse — Redefining Digital",
        },
        image: `${site.url}/icon-512.png`,
        description:
          "CreateVerse is a digital marketing agency headquartered in Karnal, Haryana, serving clients across India with Google Ads, Meta Ads, SEO, lead generation, social media, web development and political campaign management.",
        telephone: site.phoneRaw,
        email: site.email,
        address: postalAddress,
        sameAs: [site.instagramUrl, site.mapsPlaceUrl],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: site.phoneRaw,
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi", "Punjabi"],
          },
        ],
        knowsAbout: [
          "Digital Marketing",
          "Performance Marketing",
          "Search Engine Optimization",
          "Local SEO",
          "Google Ads",
          "Meta Ads",
          "Social Media Marketing",
          "Lead Generation",
          "Website Development",
          "Real Estate Lead Generation",
          "Immigration & Visa Marketing",
          "Political Campaign Management",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#localbusiness`,
        name: site.name,
        legalName: site.legalName,
        description:
          "Digital marketing agency in Karnal, Haryana — Google Ads, Meta Ads, SEO, lead generation, social media marketing and website development for businesses in Karnal and across India.",
        url: site.url,
        image: `${site.url}/icon-512.png`,
        logo: { "@id": `${site.url}/#logo` },
        parentOrganization: { "@id": `${site.url}/#organization` },
        telephone: site.phoneRaw,
        email: site.email,
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Bank Transfer, UPI, Credit Card",
        hasMap: site.mapsPlaceUrl,
        sameAs: [site.instagramUrl, site.mapsPlaceUrl],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: site.hours.opens,
            closes: site.hours.closes,
          },
        ],
        address: postalAddress,
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.latitude,
          longitude: site.geo.longitude,
        },
        areaServed: [
          ...site.cities.map((c) => ({ "@type": "City", name: c.name })),
          { "@type": "State", name: "Haryana" },
          { "@type": "State", name: "Punjab" },
          { "@type": "State", name: "Delhi" },
          { "@type": "Country", name: "India" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Marketing Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Google Ads Management",
                description: "High-intent search, display, and YouTube ad campaigns with strict CPL caps.",
                url: `${site.url}/services/google-ads`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Paid Social Marketing (Meta Ads)",
                description: "Facebook and Instagram performance advertising designed for verified return on capital.",
                url: `${site.url}/services/social-media-paid-ads`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "SEO & Content Marketing",
                description: "Search-led content and on-page optimisation that builds lasting organic demand.",
                url: `${site.url}/services/content-marketing`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Lead Generation",
                description: "Full-funnel inquiry systems connecting ads, qualification, CRM routing and follow-up.",
                url: `${site.url}/services/lead-generation`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Real Estate Lead Generation",
                description: "End-to-end property buyer and investor funnels with site visit attribution.",
                url: `${site.url}/services/real-estate-lead-generation`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Immigration & Visa Lead Generation",
                description: "Consistent inquiry generation for study visa, work permit, and PR consultancies.",
                url: `${site.url}/services/immigration-lead-generation`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Political Campaign Management & Digital War Room",
                description: "24/7 digital war room operations, voter outreach, and rapid response narrative engineering.",
                url: `${site.url}/services/political-management`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Conversion-Led Web Development",
                description: "Sub-second Next.js web experiences and campaign landing pages built to convert.",
                url: `${site.url}/services/web-development`,
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        alternateName: "Create Verse",
        description: "Digital marketing agency in Karnal, India",
        publisher: {
          "@id": `${site.url}/#organization`,
        },
        inLanguage: "en-IN",
      },
    ],
  };
}

// 1b. Homepage FAQ — the same questions are rendered visibly on the page
export const homeFaqs = [
  {
    q: "Which is the best digital marketing agency in Karnal?",
    a: "CreateVerse is a full-service digital marketing agency headquartered at Mughal Canal, Karnal. One in-house team handles Google Ads, Meta Ads, SEO, lead generation, social media and website development, and reports on leads and revenue rather than likes. Whichever agency you shortlist, judge it on proof: ask to see live campaigns, client references and the reports you would actually receive.",
  },
  {
    q: "Where is the CreateVerse office in Karnal?",
    a: `Our office is at ${site.address}. We are open ${site.hours.label}. Call or WhatsApp ${site.phone} before visiting so the right person is available for you.`,
  },
  {
    q: "Do you only work with businesses in Karnal?",
    a: "No. Karnal is our headquarters, and we work with clients across Haryana — Panipat, Kurukshetra, Kaithal, Jind and Yamunanagar — as well as Punjab, Delhi NCR and the rest of India. Clients outside Karnal work with the same team over calls, WhatsApp and shared reporting dashboards.",
  },
  {
    q: "What digital marketing services does CreateVerse offer?",
    a: "Google Ads, Meta (Facebook and Instagram) Ads, SEO and content marketing, lead generation systems, social media management, website and landing page development, creative and graphic design, influencer marketing, and political campaign management.",
  },
  {
    q: "How do I get started with CreateVerse?",
    a: `Send an enquiry from this page, or call or WhatsApp ${site.phone}. We begin with a free 30-minute strategy conversation about your business, budget and goals, and follow up with clear next steps.`,
  },
];

export function getFaqJsonLd(faqs: { q: string; a: string }[], pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

// 2. Service-Specific JSON-LD (Service Schema + FAQPage Schema)
export function getServiceJsonLd(service: Service) {
  const serviceUrl = `https://www.createverse.in/services/${service.slug}`;

  const graph: object[] = [
    {
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      name: service.name,
      alternateName: service.shortName,
      description: service.description,
      url: serviceUrl,
      provider: { "@id": `${site.url}/#organization` },
      serviceType: service.category,
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${service.name} Deliverables`,
        itemListElement: service.deliverables.map((d, idx) => ({
          "@type": "Offer",
          position: idx + 1,
          name: d,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${serviceUrl}#breadcrumb`,
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
          name: "Services",
          item: "https://www.createverse.in/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.name,
          item: serviceUrl,
        },
      ],
    },
  ];

  // Include FAQPage Schema for Google Rich Snippets
  if (service.faqs && service.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${serviceUrl}#faq`,
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

// 3. Political Management Dedicated JSON-LD
export function getPoliticalManagementJsonLd() {
  const pageUrl = "https://www.createverse.in/services/political-management";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Political Campaign Management & Digital War Room",
        description:
          "Elite political campaign management, booth-level voter micro-targeting, narrative engineering, and 24/7 rapid response digital war rooms for elected leaders and ambitious candidates.",
        url: pageUrl,
        provider: { "@id": `${site.url}/#organization` },
        serviceType: "Political Consulting & War Room",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
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
            name: "Services",
            item: "https://www.createverse.in/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Political Management",
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

// 4. Breadcrumb Generator
export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// 5. Location-Specific JSON-LD
// Each city page describes a service area of the one real office in Karnal. Marking the other
// cities up as separate LocalBusiness listings would claim addresses that don't exist.
export function getLocationJsonLd(location: LocationData) {
  const pageUrl = `${site.url}/locations/${location.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: `Digital Marketing Services in ${location.name}`,
        serviceType: "Digital marketing",
        description: location.metaDescription,
        url: pageUrl,
        provider: { "@id": `${site.url}/#localbusiness` },
        areaServed: {
          "@type": "City",
          name: location.name,
          containedInPlace: { "@type": "State", name: "Haryana" },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Digital Marketing Services in ${location.name}`,
          itemListElement: location.coreServices.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: `${service.title} in ${location.name}`,
              description: service.description,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: location.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: site.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Locations",
            item: `${site.url}/locations`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: location.name,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}
