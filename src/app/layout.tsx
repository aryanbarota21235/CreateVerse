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
  openGraph: {
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
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
