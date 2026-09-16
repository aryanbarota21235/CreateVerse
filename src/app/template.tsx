"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  // Detect mobile device
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

  // Admin & reduced motion bypass animation.
  if (pathname?.startsWith("/admin") || shouldReduceMotion) {
    return <>{children}</>;
  }

  const transition = isMobile
    ? { duration: 0.18, ease: [0.22, 1, 0.36, 1] as const }
    : { duration: 0.28, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <motion.div
      key={pathname}
      initial={{
        opacity: 0,
        y: isMobile ? 6 : 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={transition}
      style={{ willChange: "opacity, transform", transform: "translate3d(0, 0, 0)" }}
    >
      {children}
    </motion.div>
  );
}
