"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, type ReactNode } from "react";
import { LayoutDashboard, Inbox, Store, Tags, MessageSquareText, LogOut, Menu, X, ExternalLink } from "lucide-react";

const NAV = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard, exact: true },
  { href: "/admin/signups", label: "New sign-ups", icon: Inbox, badge: "signups" as const },
  { href: "/admin/clients", label: "Clients", icon: Store },
  { href: "/admin/plans", label: "Plans", icon: Tags },
  { href: "/admin/enquiries", label: "Enquiries", icon: MessageSquareText, badge: "enquiries" as const },
];

export default function Shell({ children, badges }: { children: ReactNode; badges: { signups: number; enquiries: number } }) {
  const pathname = usePathname() ?? "";
  const router = useRouter();
  const [open, setOpen] = useState(false);

  async function logout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.refresh();
  }

  const nav = (
    <nav className="flex flex-1 flex-col gap-0.5 px-3 py-3">
      {NAV.map((n) => {
        const on = n.exact ? pathname === n.href : pathname.startsWith(n.href);
        const count = n.badge ? badges[n.badge] : 0;
        return (
          <Link
            key={n.href}
            href={n.href}
            onClick={() => setOpen(false)}
            className={`flex h-10 items-center gap-2.5 rounded-[10px] px-3 text-[13px] font-medium transition-colors ${
              on ? "bg-sky-50 font-semibold text-accent-dim" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <n.icon size={17} strokeWidth={1.8} />
            <span className="flex-1">{n.label}</span>
            {count > 0 && (
              <span className="rounded-full bg-accent px-1.5 py-0.5 text-[10px] font-bold leading-none text-white">{count}</span>
            )}
          </Link>
        );
      })}
      <div className="mt-auto space-y-0.5 border-t border-slate-100 pt-3">
        <a href="/" target="_blank" className="flex h-10 items-center gap-2.5 rounded-[10px] px-3 text-[13px] text-slate-500 hover:bg-slate-100 hover:text-slate-900">
          <ExternalLink size={16} strokeWidth={1.8} /> View website
        </a>
        <button onClick={logout} className="flex h-10 w-full items-center gap-2.5 rounded-[10px] px-3 text-[13px] text-slate-500 hover:bg-slate-100 hover:text-slate-900">
          <LogOut size={16} strokeWidth={1.8} /> Sign out
        </button>
      </div>
    </nav>
  );

  const logo = (
    <Link href="/admin" className="flex items-center gap-2.5" aria-label="Admin home">
      <Image src="/logo.png" alt="CreateVerse" width={104} height={43} priority className="h-auto w-[104px]" />
      <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">Admin</span>
    </Link>
  );

  return (
    <div className="lg:flex">
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-[100dvh] w-60 shrink-0 flex-col border-r border-slate-200 bg-white lg:flex">
        <div className="flex h-16 items-center border-b border-slate-100 px-5">{logo}</div>
        {nav}
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur lg:hidden">
        {logo}
        <button onClick={() => setOpen(true)} aria-label="Open menu" className="flex size-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100">
          <Menu size={20} />
        </button>
      </header>
      {open && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 lg:hidden" onClick={() => setOpen(false)}>
          <aside className="flex h-full w-72 flex-col bg-white" onClick={(e) => e.stopPropagation()}>
            <div className="flex h-14 items-center justify-between border-b border-slate-100 px-4">
              {logo}
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="flex size-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100">
                <X size={20} />
              </button>
            </div>
            {nav}
          </aside>
        </div>
      )}

      <main className="min-w-0 flex-1 px-4 py-6 sm:px-8 sm:py-8">
        <div className="mx-auto max-w-6xl">{children}</div>
      </main>
    </div>
  );
}
