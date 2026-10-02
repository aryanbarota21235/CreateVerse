"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// The illustration loops (beams, floats, pulses: "Decorative illustrations" in globals.css)
// repaint on every frame, even when scrolled out of view. This marks the off-screen ones
// so CSS can pause them. Keep the list in sync with the [data-art-paused] rule there.
const LOOPS =
  ".beam-pulse, .float-soft, .node-ring, .flow-dash, .rail-pulse, .ring-pulse, .seq-pulse, .star-pop, .dot-bounce";

export default function ArtPauser() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) entry.target.toggleAttribute("data-art-paused", !entry.isIntersecting);
      },
      { rootMargin: "80px" }
    );
    // One observation per illustration (its <svg>, or the wrapper of an HTML loop)
    const roots = new Set<Element>();
    document.querySelectorAll(LOOPS).forEach((el) => {
      const root = el.closest("svg") ?? el.parentElement;
      if (root) roots.add(root);
    });
    roots.forEach((root) => io.observe(root));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
