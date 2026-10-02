"use client";

import { ReactNode, useState } from "react";

// Expanding panel animated purely in CSS (`.expander` in globals.css), so opening and
// closing costs no JavaScript per frame.
export default function Collapse({
  open,
  keepMounted = false,
  children,
}: {
  open: boolean;
  /** Keep the content in the HTML while collapsed (FAQ answers, for search engines). */
  keepMounted?: boolean;
  children: ReactNode;
}) {
  // Otherwise the content is first rendered when the panel opens, so images inside a
  // closed panel are never downloaded. It then stays mounted for the closing animation.
  const [opened, setOpened] = useState(open);
  if (open && !opened) setOpened(true);

  return (
    // Lazily mounted panels hold links, which must not be reachable while collapsed
    <div className="expander" data-open={open} aria-hidden={!open} inert={!open && !keepMounted}>
      <div>{(keepMounted || opened) && children}</div>
    </div>
  );
}
