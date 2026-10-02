"use client";

import { ReactNode, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Plays the enter animation (`.page-enter` in globals.css) whenever a link takes the
// visitor to a new page. It is skipped on the first load, and on back/forward: there the
// browser restores scroll and iOS runs its own swipe animation, so fading the page in on
// top of that reads as a blink.
let lastPath: string | null = null;
let wentBack = false;

if (typeof window !== "undefined") {
  window.addEventListener("popstate", () => (wentBack = true), true);
  // A back/forward that never changes the page (hash links) must not mute the next link tap
  window.addEventListener("click", () => (wentBack = false), true);
}

export default function Template({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // The root template only remounts when the first URL segment changes, so the animation
  // is restarted by hand to cover deeper navigations (/services -> /services/seo) too.
  // Layout effect: the class has to be on before the new page's first paint.
  useLayoutEffect(() => {
    const el = ref.current;
    if (el && lastPath !== null && lastPath !== pathname && !wentBack) {
      el.classList.remove("page-enter");
      void el.offsetWidth;
      el.classList.add("page-enter");
    }
    lastPath = pathname;
    wentBack = false;
  }, [pathname]);

  return <div ref={ref}>{children}</div>;
}
