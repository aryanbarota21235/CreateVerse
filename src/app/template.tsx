"use client";

import { useEffect, useState, useRef } from "react";
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
  }, 1500);
};

if (typeof window !== "undefined") {
  // Capture browser back/forward buttons and swipe gestures
  window.addEventListener("popstate", markBackNavigation, { capture: true, passive: true });

  // Capture BFCache restores (Safari iOS swipe-back where page is already painted)
  window.addEventListener(
    "pageshow",
    (event) => {
      if (event.persisted) {
        isBFCacheRestore = true;
        isBackNavigation = true;
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

  // Skip animation on initial mount (first SSR paint) or BFCache restore to completely eliminate white flash/blink
  const [skipTransition] = useState(() => isInitialMount || isBFCacheRestore);

  // Snapshot back navigation state for this render cycle
  const isBack = isBackNavigation;

  // Reliable mobile detection
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    isInitialMount = false;
    isBFCacheRestore = false;
    const timer = setTimeout(() => {
      isBackNavigation = false;
    }, 150);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (pathname?.startsWith("/admin") || shouldReduceMotion || skipTransition) {
    return <>{children}</>;
  }

  // Mobile: On back navigation, render instantly without white blink/flash.
  // On forward navigation, run ultra-fast 0.18s smooth hardware-accelerated transition starting at opacity 0.35 (never blank white).
  if (isMobile) {
    if (isBack) {
      return <div style={{ WebkitBackfaceVisibility: "hidden", transform: "translate3d(0,0,0)" }}>{children}</div>;
    }

    return (
      <motion.div
        key={pathname}
        initial={{ opacity: 0.35, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.18,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          WebkitTransform: "translate3d(0,0,0)",
          transform: "translate3d(0,0,0)",
        }}
      >
        {children}
      </motion.div>
    );
  }

  // Desktop: elegant slide-up with opacity (kept exactly as preferred)
  return (
    <motion.div
      key={pathname}
      initial={{
        opacity: 0,
        y: 12,
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
