"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

let isClientMobile = false;

if (typeof window !== "undefined") {
  isClientMobile = window.innerWidth < 768;
}

export default function Reveal({ children, delay = 0, y = 8, className = "", once = true }: RevealProps) {
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState(isClientMobile);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (isMobile) {
    return <div className={`reveal-wrapper ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      className={`reveal-wrapper ${className}`}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "100px" }}
      transition={{ duration: 0.28, delay, ease: [0.21, 0.65, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className = "",
  delayChildren = 0.04,
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
}) {
  const [isMobile, setIsMobile] = useState(isClientMobile);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (isMobile) {
    return <div className={`reveal-wrapper ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      className={`reveal-wrapper ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "100px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: delayChildren } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState(isClientMobile);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (isMobile) {
    return <div className={`reveal-wrapper ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      className={`reveal-wrapper ${className}`}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 8 },
        show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: [0.21, 0.65, 0.35, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}
