import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { site } from "@/lib/site";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { EnquiryProvider } from "@/context/enquiry-context";
import EnquiryModal from "@/components/enquiry-modal";
import WhatsAppWidget from "@/components/whatsapp-widget";

import { siteKeywords, getOrganizationJsonLd } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.createverse.in"),
  title: {
    default: "CreateVerse — Best Digital Marketing Agency in India | Growth & Performance Marketing",
    template: "%s | CreateVerse",
  },
  description:
    "CreateVerse is India's premier digital marketing & performance agency. Headquartered in Mughal Canal, Karnal and serving enterprises nationwide with high-ROAS Google & Meta Ads, verified real estate lead generation, immigration funnels, and 24/7 political digital war rooms.",
  keywords: siteKeywords,
  alternates: {
    canonical: "https://www.createverse.in",
  },
  authors: [{ name: "CreateVerse", url: "https://www.createverse.in" }],
  creator: "CreateVerse",
  publisher: "CreateVerse",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "googlee2836ec779649f49",
    other: {
      "facebook-domain-verification": "arjcquzxxrc2rljqusg27q97siy066",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    siteName: site.name,
    title: "CreateVerse — Growth & Digital Acquisition Partner",
    description:
      "Turn digital attention into real revenue. Specialized acquisition systems for real estate developers, immigration consultancies, political campaigns, and high-growth brands.",
    type: "website",
    locale: "en_IN",
    url: "https://www.createverse.in",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "CreateVerse — Redefining Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CreateVerse — Growth & Digital Acquisition Partner",
    description:
      "Turn digital attention into real revenue. Specialized acquisition systems for real estate developers, immigration consultancies, political campaigns, and high-growth brands.",
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = getOrganizationJsonLd();

  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <head>
        <meta name="theme-color" content="#FAF7F2" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="facebook-domain-verification" content="arjcquzxxrc2rljqusg27q97siy066" />
        <meta name="google-site-verification" content="googlee2836ec779649f49" />
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content="Karnal" />
        <meta name="geo.position" content="29.6857;76.9905" />
        <meta name="ICBM" content="29.6857, 76.9905" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-B0X3P49RNE"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-B0X3P49RNE');`,
          }}
        />
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1652417525362471');fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1652417525362471&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="font-sans bg-paper text-ink">
        <EnquiryProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <EnquiryModal />
          <WhatsAppWidget />
          <Analytics />
          <SpeedInsights />
        </EnquiryProvider>
      </body>
    </html>
  );
}
