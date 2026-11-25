import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api", "/api/", "/font-preview", "/r/", "/admin"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api", "/api/", "/font-preview", "/r/", "/admin"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
        disallow: ["/api", "/api/", "/font-preview", "/r/", "/admin"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api", "/api/", "/font-preview", "/r/", "/admin"],
      },
    ],
    sitemap: "https://www.createverse.in/sitemap.xml",
    host: "https://www.createverse.in",
  };
}
