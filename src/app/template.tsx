"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

let isBackNavigation = false;
let isBFCacheRestore = false;
let isInitialMount = true;
let resetTimer: ReturnType<typeof setTimeout> | null = null;

const markBackNavigation = () => {
  isBackNavigation = true;
  if (resetTimer) clearTimeout(resetTimer);
  resetTimer = setTimeout(() => {
    isBackNavigation = false;
  }, 1200);
};

if (typeof window !== "undefined") {
  // Capture browser back/forward buttons
  window.addEventListener("popstate", markBackNavigation, { capture: true, passive: true });

  // Capture BFCache restores (e.g. Safari iOS swipe-back where page is already painted)
  window.addEventListener(
    "pageshow",
    (event) => {
      if (event.persisted) {
        isBFCacheRestore = true;
      }
    },
    { capture: true, passive: true }
  );

  try {
    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (nav?.type === "back_forward") {
      isBackNavigation = true;
    }
  } catch {
    // Ignore performance API errors on older browsers
  }
}

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  // Snapshot navigation direction at the moment this Template mounts
  const [navDirection] = useState<"forward" | "back">(() => (isBackNavigation ? "back" : "forward"));

  // Skip animation on initial mount (first SSR paint) or BFCache restore to completely eliminate white flash/blink
  const [skipTransition] = useState(() => isInitialMount || isBFCacheRestore);

  useEffect(() => {
    isInitialMount = false;
    isBackNavigation = false;
    isBFCacheRestore = false;
    if (resetTimer) clearTimeout(resetTimer);
  }, [pathname]);

  if (pathname?.startsWith("/admin") || shouldReduceMotion || skipTransition) {
    return <>{children}</>;
  }

  const isBack = navDirection === "back";

  return (
    <motion.div
      key={pathname}
      initial={{
        opacity: 0,
        y: isBack ? -8 : 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.28,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
