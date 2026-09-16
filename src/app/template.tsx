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

  // Determine whether to skip transition:
  // 1. Initial page load (SSR HTML is already present, avoids flash of white on refresh/first open)
  // 2. Back / forward history navigation or swipe-back (prevents double-render flash)
  // 3. User requested reduced motion
  const [skipAnimation] = useState(() => {
    return isInitialMount || isBackNavigation || !!shouldReduceMotion;
  });

  useEffect(() => {
    isInitialMount = false;
    isBackNavigation = false;
    if (resetTimer) clearTimeout(resetTimer);
  }, [pathname]);

  if (pathname?.startsWith("/admin") || skipAnimation) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
