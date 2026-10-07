// TRIAL: hero design experiment. Not linked from anywhere and hidden from search.
// Promote into components/hero.tsx or delete once a direction is picked.

import type { Metadata } from "next";
import TrialHero from "@/components/trial-hero";

export const metadata: Metadata = {
  title: "Hero trial",
  robots: { index: false, follow: false },
};

export default function TrialPage() {
  return <TrialHero />;
}
