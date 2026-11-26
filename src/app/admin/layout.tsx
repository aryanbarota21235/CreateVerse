import type { Metadata } from "next";
import type { ReactNode } from "react";
import { adminConfigured, isAdmin } from "@/lib/admin-auth";
import { listSignups, listEnquiries } from "@/lib/admin-data";
import { ROOT } from "@/lib/reviews/look";
import Login from "./login";
import Shell from "./shell";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: { default: "Admin", template: "%s · Admin | CreateVerse" },
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: ReactNode }) {
  if (!(await isAdmin())) return <Login configured={adminConfigured()} />;
  // Badges in the sidebar: what's waiting for the team.
  const [signups, enquiries] = await Promise.all([listSignups(), listEnquiries()]);
  const badges = {
    leads: signups.filter((s) => s.status === "New" || s.status === "Contacted").length + enquiries.filter((e) => e.status === "New").length,
  };
  return (
    <div className={ROOT}>
      <Shell badges={badges}>{children}</Shell>
    </div>
  );
}
