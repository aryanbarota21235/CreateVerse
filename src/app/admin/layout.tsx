import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Command Center | CreateVerse",
  description: "Internal Executive Management & Financial Performance Suite",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-ink antialiased selection:bg-accent selection:text-white">
      {children}
    </div>
  );
}
