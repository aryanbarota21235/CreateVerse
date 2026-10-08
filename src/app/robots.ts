import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api", "/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api", "/api/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
        disallow: ["/api", "/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api", "/api/"],
      },
    ],
    sitemap: "https://www.createverse.in/sitemap.xml",
    host: "https://www.createverse.in",
  };
}
