import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { getAllLocationSlugs } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.createverse.in";
  const now = new Date();

  // Core High-Priority Static Landing Pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${base}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${base}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${base}/services/political-management`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${base}/industries`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/clients`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${base}/learn-digital-marketing`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    // Top-Tier Client Profile Pages (Canonical URLs Only)
    {
      url: `${base}/clients/randeep-singh-surjewala`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${base}/clients/aditya-surjewala`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${base}/clients/kewal-singh-dhillon`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${base}/clients/gurkirat-singh-kotli`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${base}/clients/shamsher-singh-gogi`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${base}/clients/bhupinder-lather`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${base}/clients/rajiv-mamuram-gonder`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${base}/clients/umesh-sharma`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${base}/clients/subhash-sudha`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  // Specialized Acquisition & Practice Pages
  const servicePages: MetadataRoute.Sitemap = services
    .filter((s) => s.slug !== "political-management")
    .map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: s.priority ? 0.9 : 0.8,
    }));

  // Regional Haryana Hub & City Pages (Priority 0.95 for Local Search Authority)
  const locationPages: MetadataRoute.Sitemap = [
    {
      url: `${base}/locations`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    ...getAllLocationSlugs().map((slug) => ({
      url: `${base}/locations/${slug}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.95,
    })),
  ];

  return [...corePages, ...servicePages, ...locationPages];
}

