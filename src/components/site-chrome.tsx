"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// Standalone tools (the review QR page and the admin panel) render without the marketing
// site's navbar, footer, enquiry modal and WhatsApp bubble.
const BARE_PREFIXES = ["/r/", "/admin"];

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? "";
  if (BARE_PREFIXES.some((p) => pathname.startsWith(p))) return null;
  return <>{children}</>;
}
