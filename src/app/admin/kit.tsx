import type { ReactNode } from "react";
import { CARD } from "@/lib/reviews/look";

/* Display pieces of the admin panel, after crmnew's ui.tsx. No hooks, so server pages can use them too. */

export type Tone = "plain" | "brand" | "good" | "warn" | "bad";

const PILL: Record<Tone, string> = {
  plain: "border-slate-200 bg-white text-slate-600",
  brand: "border-sky-200 bg-sky-50 text-accent-dim",
  good: "border-transparent bg-[#e4f4dc] text-[#3a6729]",
  warn: "border-transparent bg-amber-100 text-amber-800",
  bad: "border-transparent bg-rose-100 text-rose-700",
};
const TEXT: Record<Tone, string> = {
  plain: "text-slate-800",
  brand: "text-accent-dim",
  good: "text-[#3a6729]",
  warn: "text-amber-700",
  bad: "text-rose-700",
};
const DOT: Record<Tone, string> = {
  plain: "bg-slate-400",
  brand: "bg-accent",
  good: "bg-[#61a644]",
  warn: "bg-amber-500",
  bad: "bg-rose-500",
};

export function Pill({ tone = "plain", children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span className={`inline-block whitespace-nowrap rounded-full border px-2 py-px text-xs font-semibold ${PILL[tone]}`}>
      {children}
    </span>
  );
}

export function Status({ tone = "plain", children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span className={`inline-flex items-center gap-1.5 whitespace-nowrap font-semibold ${TEXT[tone]}`}>
      <span className={`size-2 rounded-full ${DOT[tone]}`} aria-hidden="true" />
      {children}
    </span>
  );
}

export function PageHead({ title, sub, actions }: { title: string; sub?: ReactNode; actions?: ReactNode }) {
  return (
    <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
      <div className="min-w-0">
        <h1 className="text-[28px] font-semibold leading-tight tracking-tight text-slate-900">{title}</h1>
        {sub && <div className="mt-1 text-sm text-slate-500">{sub}</div>}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </div>
  );
}

export function Tile({
  label,
  value,
  sub,
  tone = "plain",
  icon: Icon,
  href,
}: {
  label: string;
  value: ReactNode;
  sub?: ReactNode;
  tone?: Tone;
  icon?: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  href?: string;
}) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-2">
        <div className="text-xs font-semibold text-slate-500">{label}</div>
        {Icon && <Icon size={18} strokeWidth={1.8} className={tone === "plain" ? "text-slate-400" : TEXT[tone]} />}
      </div>
      <div className={`mt-2 text-[28px] font-semibold leading-none tracking-tight ${TEXT[tone]}`}>{value}</div>
      <div className="mt-1.5 min-h-[1.2em] truncate text-xs text-slate-500">{sub}</div>
    </>
  );
  const cls = `${CARD} flex min-w-0 flex-col p-4`;
  return href ? (
    <a href={href} className={`${cls} transition-shadow hover:border-slate-300 hover:shadow-sm`}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

export function Panel({
  title,
  count,
  actions,
  children,
  className = "",
}: {
  title: string;
  count?: number;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`${CARD} overflow-hidden ${className}`}>
      <div className="flex min-h-12 flex-wrap items-center justify-between gap-2 border-b border-slate-100 px-4 py-2.5">
        <h2 className="text-sm font-semibold tracking-tight text-slate-900">
          {title}
          {count !== undefined && (
            <span className="ml-1.5 rounded-full bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-500">{count}</span>
          )}
        </h2>
        {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
      </div>
      {children}
    </section>
  );
}

/** Zoho-style table classes. */
export const TABLE = "w-full border-collapse text-[13px]";
export const TH = "border-b border-[#ebeaf2] bg-[#f9f9fb] px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.02em] text-[#6c718a] whitespace-nowrap first:pl-4 last:pr-4";
export const TD = "border-b border-[#ebeaf2] px-3 py-3 align-middle first:pl-4 last:pr-4";
export const TR = "transition-colors hover:bg-[#f8f8fc] [&:last-child>td]:border-b-0";

export function Empty({ icon: Icon, title, sub, action }: { icon: React.ComponentType<{ size?: number }>; title: string; sub: string; action?: ReactNode }) {
  return (
    <div className="flex flex-col items-center px-6 py-14 text-center">
      <span className="flex size-12 items-center justify-center rounded-2xl bg-sky-50 text-accent-dim">
        <Icon size={22} />
      </span>
      <p className="mt-3 font-semibold text-slate-900">{title}</p>
      <p className="mt-1 max-w-sm text-sm text-slate-500">{sub}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}


export const fmtDate = (iso: string) =>
  iso
    ? new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Kolkata" }).format(
        new Date(iso.length === 10 ? `${iso}T00:00:00+05:30` : iso),
      )
    : "—";

export const fmtDateTime = (iso: string) =>
  new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", hour: "numeric", minute: "2-digit", timeZone: "Asia/Kolkata" }).format(
    new Date(iso),
  );
