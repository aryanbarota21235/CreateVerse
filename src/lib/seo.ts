import { site } from "@/lib/site";
import { type Service } from "@/lib/services";

export const siteKeywords = [
  // Core Brand & Positioning
  "CreateVerse",
  "CreateVerse digital",
  "CreateVerse agency",
  "growth marketing partner",
  "digital acquisition partner",
  "performance marketing agency India",
  "best digital marketing agency India",
  "lead generation company India",
  "growth marketing agency",

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

  // Local & Geographic Reach
  "digital marketing agency Karnal",
  "digital marketing agency Haryana",
  "performance marketing Delhi NCR",
  "lead generation agency Chandigarh",
  "real estate marketing Gurgaon Delhi NCR",
  "B2B lead generation Pan-India",
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
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://createverse.in/#organization",
        name: site.name,
        alternateName: "CreateVerse Digital",
        url: "https://createverse.in",
        logo: {
          "@type": "ImageObject",
          "@id": "https://createverse.in/#logo",
          url: "https://createverse.in/logo.png",
          caption: "CreateVerse — Redefining Digital",
        },
        image: "https://createverse.in/logo.png",
        description:
          "CreateVerse is a growth & digital acquisition partner specializing in high-ticket real estate lead generation, immigration funnels, political war rooms, performance marketing, and modern web systems.",
        telephone: site.phone,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Mughal Canal",
          addressLocality: "Karnal",
          addressRegion: "Haryana",
          postalCode: "132001",
          addressCountry: "IN",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: site.phone,
            contactType: "customer service",
            areaServed: ["IN", "AE", "CA", "GB"],
            availableLanguage: ["English", "Hindi"],
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://createverse.in/#localbusiness",
        name: "CreateVerse — Growth & Digital Acquisition Partner",
        url: "https://createverse.in",
        telephone: site.phone,
        email: site.email,
        priceRange: "$$",
        currenciesAccepted: "INR, USD, AED",
        paymentAccepted: "Bank Transfer, UPI, Credit Card",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "20:00",
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Mughal Canal",
          addressLocality: "Karnal",
          addressRegion: "Haryana",
          postalCode: "132001",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 29.6857,
          longitude: 76.9905,
        },
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "State", name: "Haryana" },
          { "@type": "State", name: "Delhi" },
          { "@type": "State", name: "Punjab" },
          { "@type": "City", name: "Karnal" },
          { "@type": "City", name: "Gurgaon" },
          { "@type": "City", name: "Chandigarh" },
          { "@type": "City", name: "Delhi" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Growth & Digital Acquisition Practices",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Real Estate Lead Generation",
                description: "End-to-end property buyer and investor funnels with site visit attribution.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Immigration & Visa Lead Generation",
                description: "Consistent inquiry generation for study visa, work permit, and PR consultancies.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Political Campaign Management & Digital War Room",
                description: "24/7 digital war room operations, voter outreach, and rapid response narrative engineering.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Google Ads Management",
                description: "High-intent search, display, and YouTube ad campaigns with strict CPL caps.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Paid Social Marketing",
                description: "Meta and multi-channel performance advertising designed for verified return on capital.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Conversion-Led Web Development",
                description: "Sub-second Next.js web experiences and campaign landing pages built to convert.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://createverse.in/#website",
        url: "https://createverse.in",
        name: "CreateVerse",
        description: "Growth & Digital Acquisition Partner",
        publisher: {
          "@id": "https://createverse.in/#organization",
        },
        inLanguage: "en-US",
      },
    ],
  };
}

// 2. Service-Specific JSON-LD (Service Schema + FAQPage Schema)
export function getServiceJsonLd(service: Service) {
  const serviceUrl = `https://createverse.in/services/${service.slug}`;

  const graph: object[] = [
    {
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      name: service.name,
      alternateName: service.shortName,
      description: service.description,
      url: serviceUrl,
      provider: {
        "@type": "Organization",
        name: site.name,
        url: "https://createverse.in",
      },
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
          item: "https://createverse.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://createverse.in/services",
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
  const pageUrl = "https://createverse.in/services/political-management";

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
        provider: {
          "@type": "Organization",
          name: site.name,
          url: "https://createverse.in",
        },
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
            item: "https://createverse.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://createverse.in/services",
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
