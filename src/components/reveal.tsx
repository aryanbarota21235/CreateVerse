"use client";

import { CSSProperties, ReactNode, useEffect, useRef } from "react";

// The fade itself is a CSS transition (`.reveal` in globals.css) so it runs on the
// compositor; this file only flips a data attribute when an element scrolls into view.
// One IntersectionObserver is shared by every reveal on the page.

// Phones and touch screens get no scroll reveals at all: content is simply visible.
// Must stay in sync with the phone/touch media query for `.reveal` in globals.css
const TOUCH_QUERY = "(max-width: 768px), (hover: none) and (pointer: coarse)";

let observer: IntersectionObserver | null = null;

function groupItems(group: HTMLElement) {
  return Array.from(group.querySelectorAll<HTMLElement>("[data-reveal-item]")).filter(
    (item) => item.closest("[data-reveal-group]") === group
  );
}

function onIntersect(entries: IntersectionObserverEntry[]) {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    const el = entry.target as HTMLElement;
    observer?.unobserve(el);

    if (el.hasAttribute("data-reveal-group")) {
      const step = Number(el.dataset.revealGroup) || 0;
      groupItems(el).forEach((item, i) => {
        item.style.setProperty("--reveal-stagger", `${i * step}s`);
        item.dataset.reveal = "in";
      });
    } else {
      el.dataset.reveal = "in";
    }
  }
}

function getObserver() {
  if (!observer) {
    // Start the fade just before the element enters the screen
    observer = new IntersectionObserver(onIntersect, { rootMargin: "120px" });
  }
  return observer;
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia(TOUCH_QUERY).matches) {
      el.dataset.reveal = "done";
      return;
    }
    // A group's items are revealed together, in sequence, when the group itself enters
    const inGroup = el.hasAttribute("data-reveal-item") && el.closest("[data-reveal-group]") !== null;
    if (inGroup) return;
    const io = getObserver();
    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  return ref;
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? ({ "--reveal-delay": `${delay}s` } as CSSProperties) : undefined}
    >
      {children}
    </div>
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
  const ref = useReveal();

  return (
    <div ref={ref} className={className} data-reveal-group={delayChildren}>
      {children}
    </div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useReveal();

  return (
    <div ref={ref} className={`reveal ${className}`} data-reveal-item="">
      {children}
    </div>
  );
}
