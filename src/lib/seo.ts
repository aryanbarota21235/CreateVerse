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
  "B2B lead generation agency India",

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

  // Political Leadership & Entity Search Authority
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
  "Bhupinder Lather",
  "भूपिंदर लाठर",
  "Bhuppi Lather",
  "Rajiv Mamuram Gonder",
  "राजीव मामूराम गोंदर",
  "राजीव गोंदर",
  "Umesh Sharma",
  "उमेश शर्मा",
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
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.createverse.in/#organization",
        name: site.name,
        alternateName: "CreateVerse Digital",
        url: "https://www.createverse.in",
        logo: {
          "@type": "ImageObject",
          "@id": "https://www.createverse.in/#logo",
          url: "https://www.createverse.in/logo.png",
          caption: "CreateVerse — Redefining Digital",
        },
        image: "https://www.createverse.in/logo.png",
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
        knowsAbout: [
          "Best Digital Marketing Agency in India",
          "Best Digital Marketing Agency in Karnal",
          "Best Digital Marketing Agency in Panipat",
          "Best Digital Marketing Agency in Kurukshetra",
          "Best Digital Marketing Agency in Kaithal",
          "Best Digital Marketing Agency in Jind",
          "Best Digital Marketing Agency in Yamunanagar",
          "Performance Marketing India",
          "B2B Lead Generation Agency India",
          "Google Ads Agency India",
          "Meta Ads Agency India",
          "Local SEO & Google Maps Optimization",
          "Political Campaign Management & Digital War Rooms",
          "Election Strategy India",
          "Randeep Singh Surjewala Campaign",
          "Aditya Surjewala Election Strategy",
          "Kewal Singh Dhillon BJP Punjab Campaign",
          "Gurkirat Singh Kotli Campaign",
          "Shamsher Singh Gogi Campaign",
          "Bhupinder Lather Campaign",
          "Rajiv Mamuram Gonder Campaign",
          "Umesh Sharma Campaign",
          "Real Estate Lead Generation",
          "Immigration & Visa Marketing",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.createverse.in/#localbusiness",
        name: "CreateVerse — Best Digital Marketing Agency | Growth & Acquisition Partner",
        url: "https://www.createverse.in",
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
          { "@type": "State", name: "Punjab" },
          { "@type": "State", name: "Delhi" },
          { "@type": "State", name: "Uttar Pradesh" },
          { "@type": "City", name: "Karnal" },
          { "@type": "City", name: "Panipat" },
          { "@type": "City", name: "Kurukshetra" },
          { "@type": "City", name: "Kaithal" },
          { "@type": "City", name: "Jind" },
          { "@type": "City", name: "Yamunanagar" },
          { "@type": "City", name: "Sonipat" },
          { "@type": "City", name: "Ambala" },
          { "@type": "City", name: "Gurgaon" },
          { "@type": "City", name: "Faridabad" },
          { "@type": "City", name: "Chandigarh" },
          { "@type": "City", name: "Delhi" },
          { "@type": "City", name: "Noida" },
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
        "@id": "https://www.createverse.in/#website",
        url: "https://www.createverse.in",
        name: "CreateVerse",
        description: "Growth & Digital Acquisition Partner",
        publisher: {
          "@id": "https://www.createverse.in/#organization",
        },
        inLanguage: "en-US",
      },
    ],
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
      provider: {
        "@type": "Organization",
        name: site.name,
        url: "https://www.createverse.in",
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
        provider: {
          "@type": "Organization",
          name: site.name,
          url: "https://www.createverse.in",
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

// 5. Local Business & Location-Specific JSON-LD
export function getLocationJsonLd(location: LocationData) {
  const pageUrl = `https://www.createverse.in/locations/${location.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": `${pageUrl}#localbusiness`,
        name: `CreateVerse — ${location.headline}`,
        alternateName: `Best Digital Marketing Agency in ${location.name}`,
        url: pageUrl,
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
          ...location.address,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: location.geo.latitude,
          longitude: location.geo.longitude,
        },
        areaServed: [
          { "@type": "City", name: location.name },
          { "@type": "State", name: "Haryana" },
          { "@type": "Country", name: "India" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Digital Marketing Services in ${location.name}`,
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Performance Marketing & Paid Ads",
                description: `High ROAS Google and Meta ads management for ${location.name} businesses.`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "High-Intent Lead Generation",
                description: `Verified buyer lead generation funnels for real estate, exports, and services in ${location.name}.`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Local SEO & Google Maps Ranking",
                description: `Map pack dominance and organic search ranking across ${location.name} and Haryana.`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Next.js Web Development",
                description: "Sub-second conversion-first website and landing page design.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Political Campaign Management & War Rooms",
                description: "Booth-level voter outreach and 24/7 digital war room operations.",
              },
            },
          ],
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
            item: "https://www.createverse.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Locations",
            item: "https://www.createverse.in/locations",
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

