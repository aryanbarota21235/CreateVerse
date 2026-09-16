"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

let isBackNavigation = false;
let isInitialMount = true;
let resetTimer: ReturnType<typeof setTimeout> | null = null;

const markBackNavigation = () => {
  isBackNavigation = true;
  if (resetTimer) clearTimeout(resetTimer);
  resetTimer = setTimeout(() => {
    isBackNavigation = false;
  }, 1500);
};

if (typeof window !== "undefined") {
  // Capture browser back/forward buttons and touch/swipe back gestures
  window.addEventListener("popstate", markBackNavigation, { capture: true, passive: true });

  // Capture BFCache restores (e.g. Safari iOS swipe-back)
  window.addEventListener(
    "pageshow",
    (event) => {
      if (event.persisted) {
        markBackNavigation();
      }
    },
    { capture: true, passive: true }
  );

  // Check performance navigation timing
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
  const [navDirection] = useState<"forward" | "back">(() => {
    return isBackNavigation ? "back" : "forward";
  });

  // Skip animation only on initial mount (first SSR paint / hard refresh) to prevent white flash
  const [isFirstLoad] = useState(() => isInitialMount);

  useEffect(() => {
    isInitialMount = false;
    isBackNavigation = false;
    if (resetTimer) clearTimeout(resetTimer);
  }, [pathname]);

  if (pathname?.startsWith("/admin") || shouldReduceMotion || isFirstLoad) {
    return <>{children}</>;
  }

  const isBack = navDirection === "back";

  return (
    <motion.div
      key={pathname}
      initial={{
        opacity: 0,
        y: isBack ? -18 : 22,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.32,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
