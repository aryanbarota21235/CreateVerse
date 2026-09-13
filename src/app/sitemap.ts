import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://createverse.in";
  const staticPages = ["", "/services", "/industries", "/clients", "/about", "/contact"].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));
  const servicePages = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
  }));
  return [...staticPages, ...servicePages];
}
