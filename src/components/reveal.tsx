"use client";

import { CSSProperties, ReactNode, useEffect, useRef } from "react";

// The fade itself is a CSS transition (`.reveal` in globals.css) so it runs on the
// compositor; this file only flips a data attribute when an element scrolls into view.
// One IntersectionObserver is shared by every reveal on the page.

// Must stay in sync with the phone/touch media query for `.reveal` in globals.css
const TOUCH_QUERY = "(max-width: 768px), (hover: none) and (pointer: coarse)";
const TOUCH_STEP_MS = 70;
const TOUCH_MAX_STEPS = 4;
const FLING_PX_PER_MS = 2.4;

let observer: IntersectionObserver | null = null;
let touch = false;
let lastTime = 0;
let lastY = 0;

function groupItems(group: HTMLElement) {
  return Array.from(group.querySelectorAll<HTMLElement>("[data-reveal-item]")).filter(
    (item) => item.closest("[data-reveal-group]") === group
  );
}

function onIntersect(entries: IntersectionObserverEntry[]) {
  let order = 0;

  // During a hard fling a fade would only show up as blank space catching up with the
  // finger, so content arriving at that speed is shown immediately instead.
  const now = entries[0]?.time ?? 0;
  const y = window.scrollY;
  const flinging = touch && now > lastTime && Math.abs(y - lastY) / (now - lastTime) > FLING_PX_PER_MS;
  lastTime = now;
  lastY = y;

  for (const entry of entries) {
    const el = entry.target as HTMLElement;
    const { top } = entry.boundingClientRect;

    if (touch && !el.dataset.reveal) {
      // First report after mount. Whatever is already on screen stays exactly as it is
      // (no blink on load or navigation); only content below the fold is hidden so it
      // can fade in when scrolled to.
      if (top < window.innerHeight) {
        el.dataset.reveal = "done";
        observer?.unobserve(el);
      } else {
        el.dataset.reveal = "pending";
      }
      continue;
    }

    if (!entry.isIntersecting) continue;
    observer?.unobserve(el);

    if (el.hasAttribute("data-reveal-group")) {
      const step = Number(el.dataset.revealGroup) || 0;
      groupItems(el).forEach((item, i) => {
        item.style.setProperty("--reveal-stagger", `${i * step}s`);
        item.dataset.reveal = "in";
      });
    } else if (touch && (top < 0 || flinging)) {
      // Entering from the top while scrolling back up, or flung past: just show it
      el.dataset.reveal = "done";
    } else {
      if (touch) {
        // Cards arriving in the same frame (a grid row) follow each other
        el.style.setProperty("--reveal-stagger", `${Math.min(order++, TOUCH_MAX_STEPS) * TOUCH_STEP_MS}ms`);
      }
      el.dataset.reveal = "in";
    }
  }
}

function getObserver() {
  if (!observer) {
    touch = window.matchMedia(TOUCH_QUERY).matches;
    observer = new IntersectionObserver(onIntersect, {
      // Phones start the fade once the element is a little inside the screen so it is
      // actually seen; desktop starts just before it enters.
      rootMargin: touch ? "0px 0px -6% 0px" : "120px",
    });
  }
  return observer;
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = getObserver();
    const isGroup = el.hasAttribute("data-reveal-group");
    const inGroup = el.hasAttribute("data-reveal-item") && el.closest("[data-reveal-group]") !== null;
    // Desktop reveals a group's items together in sequence when the group enters;
    // phones reveal each item on its own as it scrolls in.
    if (touch ? isGroup : inGroup) return;
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
