import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api", "/api/", "/font-preview", "/r/", "/review-studio"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api", "/api/", "/font-preview", "/r/", "/review-studio"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
        disallow: ["/api", "/api/", "/font-preview", "/r/", "/review-studio"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api", "/api/", "/font-preview", "/r/", "/review-studio"],
      },
    ],
    sitemap: "https://www.createverse.in/sitemap.xml",
    host: "https://www.createverse.in",
  };
}
