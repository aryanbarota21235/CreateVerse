import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { site } from "@/lib/site";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { EnquiryProvider } from "@/context/enquiry-context";
import EnquiryModal from "@/components/enquiry-modal";
import WhatsAppWidget from "@/components/whatsapp-widget";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://createverse.in"),
  title: {
    default: "CreateVerse — Growth & Digital Acquisition Partner",
    template: "%s | CreateVerse",
  },
  description:
    "CreateVerse builds digital growth systems for real estate, immigration, political campaigns and ambitious businesses — lead generation, performance marketing, political management, web development and creative services.",
  keywords: [
    "lead generation agency",
    "real estate lead generation",
    "immigration lead generation",
    "political campaign management",
    "Google Ads agency India",
    "performance marketing",
  ],
  verification: {
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
      "CreateVerse builds digital growth systems for real estate, immigration, political campaigns and ambitious businesses.",
    type: "website",
    url: "https://createverse.in",
    images: [
      {
        url: "/logo.png",
        width: 320,
        height: 132,
        alt: "CreateVerse — Redefining Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CreateVerse — Growth & Digital Acquisition Partner",
    description:
      "CreateVerse builds digital growth systems for real estate, immigration, political campaigns and ambitious businesses.",
    images: ["/logo.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CreateVerse",
  alternateName: "CreateVerse Digital",
  url: "https://createverse.in",
  logo: "https://createverse.in/logo.png",
  image: "https://createverse.in/logo.png",
  description:
    "CreateVerse builds digital growth systems for real estate, immigration, political campaigns and ambitious businesses.",
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location,
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <head>
        <meta name="facebook-domain-verification" content="arjcquzxxrc2rljqusg27q97siy066" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Meta Pixel Code */}
        <script
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
        </EnquiryProvider>
      </body>
    </html>
  );
}
