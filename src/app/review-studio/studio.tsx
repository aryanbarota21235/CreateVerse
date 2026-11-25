"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import QRCode from "qrcode";
import {
  Check,
  Copy,
  Download,
  ExternalLink,
  FileImage,
  LogOut,
  Pause,
  Pencil,
  Play,
  Plus,
  QrCode,
  Send,
  Star,
  Store,
  Trash2,
  X,
} from "lucide-react";
import {
  REVIEW_CATEGORIES,
  REVIEW_LANGUAGES,
  slugify,
  type ReviewBusiness,
  type ReviewStats,
} from "@/lib/reviews/types";
import { CARD, FIELD, LABEL, PLAIN, PRIMARY, QUIET_SM, ROOT, poppins } from "@/lib/reviews/look";

interface Props {
  initialBusinesses: ReviewBusiness[];
  initialStats: Record<string, ReviewStats>;
  aiEnabled: boolean;
  storage: string;
}

type FormState = {
  name: string;
  slug: string;
  category: string;
  city: string;
  highlights: string;
  language: string;
  placeId: string;
  reviewUrl: string;
};

const EMPTY: FormState = {
  name: "",
  slug: "",
  category: REVIEW_CATEGORIES[0],
  city: "Karnal",
  highlights: "",
  language: "English",
  placeId: "",
  reviewUrl: "",
};

const NO_STATS: ReviewStats = { scans: 0, copied: 0, byRating: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } };

function average(s: ReviewStats): number | null {
  const total = s.byRating[1] + s.byRating[2] + s.byRating[3] + s.byRating[4] + s.byRating[5];
  if (!total) return null;
  return (s.byRating[1] + s.byRating[2] * 2 + s.byRating[3] * 3 + s.byRating[4] * 4 + s.byRating[5] * 5) / total;
}

/** Origin is read after mount so server and client render the same markup. */
function useOrigin() {
  const [origin, setOrigin] = useState("");
  useEffect(() => setOrigin(window.location.origin), []);
  return origin;
}

export default function Studio({ initialBusinesses, initialStats, aiEnabled, storage }: Props) {
  const [businesses, setBusinesses] = useState(initialBusinesses);
  const [stats, setStats] = useState(initialStats);
  const [editing, setEditing] = useState<ReviewBusiness | "new" | null>(null);
  const router = useRouter();
  const origin = useOrigin();

  async function refresh() {
    const res = await fetch("/api/review-studio/businesses");
    if (res.ok) {
      const data = await res.json();
      setBusinesses(data.businesses);
      setStats(data.stats);
    }
  }

  async function logout() {
    await fetch("/api/review-studio/login", { method: "DELETE" });
    router.refresh();
  }

  async function toggle(b: ReviewBusiness) {
    await fetch(`/api/review-studio/businesses/${b.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ active: !b.active }),
    });
    refresh();
  }

  async function remove(b: ReviewBusiness) {
    if (!confirm(`Delete ${b.name}? Its QR code stops working and its numbers are deleted.`)) return;
    await fetch(`/api/review-studio/businesses/${b.id}`, { method: "DELETE" });
    refresh();
  }

  // Totals for the tiles
  const all = Object.values(stats);
  const rated = all.reduce((n, s) => n + s.scans, 0);
  const sent = all.reduce((n, s) => n + s.copied, 0);
  const merged = all.reduce<ReviewStats>(
    (acc, s) => {
      ([1, 2, 3, 4, 5] as const).forEach((k) => (acc.byRating[k] += s.byRating[k]));
      return acc;
    },
    { scans: 0, copied: 0, byRating: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } },
  );
  const avg = average(merged);

  return (
    <div className={ROOT}>
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <a href="/" aria-label="CreateVerse home">
              <Image src="/logo.png" alt="CreateVerse" width={112} height={46} priority className="h-auto w-28" />
            </a>
            <span className="h-6 w-px bg-slate-200" aria-hidden="true" />
            <span className="text-[14px] font-semibold tracking-[-0.01em] text-slate-700">Review Studio</span>
          </div>
          <button onClick={logout} className={`${PLAIN} h-9 px-3 text-[13px]`}>
            <LogOut size={15} /> Sign out
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        {/* Page head */}
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <h1 className="text-[28px] font-semibold leading-tight tracking-tight text-slate-900">Review QR codes</h1>
            <p className="mt-1 text-sm text-slate-500">
              One QR code per client. Customers scan, rate, pick a review and post it on Google.
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              <Chip tone={aiEnabled ? "good" : "warn"}>
                {aiEnabled ? "AI suggestions on" : "AI off — using templates (add ANTHROPIC_API_KEY)"}
              </Chip>
              <Chip tone="plain">Storage: {storage}</Chip>
            </div>
          </div>
          <button onClick={() => setEditing("new")} className={PRIMARY}>
            <Plus size={16} /> Add business
          </button>
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Tile label="Businesses" value={businesses.length} sub={`${businesses.filter((b) => b.active).length} live`} icon={Store} />
          <Tile label="Ratings given" value={rated} sub="Customers who tapped a star" icon={Star} />
          <Tile
            label="Sent to Google"
            value={sent}
            sub={rated ? `${Math.round((sent / rated) * 100)}% of ratings` : "—"}
            icon={Send}
            tone="brand"
          />
          <Tile
            label="Average rating"
            value={avg ? avg.toFixed(1) : "—"}
            sub={avg ? "Across all businesses" : "No ratings yet"}
            icon={Star}
            tone={avg && avg >= 4 ? "good" : avg && avg < 3 ? "bad" : "plain"}
          />
        </div>

        {/* Table */}
        <section className={`${CARD} mt-4 overflow-hidden`}>
          <div className="flex min-h-12 items-center justify-between gap-2 border-b border-slate-100 px-4 py-2.5">
            <h2 className="text-sm font-semibold tracking-tight text-slate-900">
              Businesses
              <span className="ml-1.5 rounded-full bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-500">
                {businesses.length}
              </span>
            </h2>
          </div>

          {businesses.length === 0 ? (
            <div className="flex flex-col items-center px-6 py-14 text-center">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-sky-50 text-accent-dim">
                <QrCode size={22} />
              </span>
              <p className="mt-3 font-semibold text-slate-900">No businesses yet</p>
              <p className="mt-1 max-w-sm text-sm text-slate-500">Add your first client to get their QR code and printable poster.</p>
              <button onClick={() => setEditing("new")} className={`${PRIMARY} mt-4`}>
                <Plus size={16} /> Add business
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-[13px]">
                <thead>
                  <tr className="bg-[#f9f9fb] text-left text-[11px] font-semibold uppercase tracking-[0.02em] text-[#6c718a]">
                    <th className="border-b border-[#ebeaf2] px-4 py-2.5">Business</th>
                    <th className="border-b border-[#ebeaf2] px-3 py-2.5">QR link</th>
                    <th className="border-b border-[#ebeaf2] px-3 py-2.5 text-right">Rated</th>
                    <th className="border-b border-[#ebeaf2] px-3 py-2.5 text-right">Sent</th>
                    <th className="border-b border-[#ebeaf2] px-3 py-2.5">Ratings</th>
                    <th className="border-b border-[#ebeaf2] px-3 py-2.5">Status</th>
                    <th className="border-b border-[#ebeaf2] px-4 py-2.5 text-right">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {businesses.map((b) => (
                    <Row
                      key={b.id}
                      business={b}
                      stats={stats[b.id] ?? NO_STATS}
                      origin={origin}
                      onEdit={() => setEditing(b)}
                      onToggle={() => toggle(b)}
                      onDelete={() => remove(b)}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>

      {editing && (
        <BusinessDialog
          business={editing === "new" ? null : editing}
          onClose={() => setEditing(null)}
          onSaved={() => {
            setEditing(null);
            refresh();
          }}
        />
      )}
    </div>
  );
}

// ---------- pieces ----------

type Tone = "plain" | "brand" | "good" | "warn" | "bad";
const TONE_TEXT: Record<Tone, string> = {
  plain: "text-slate-800",
  brand: "text-accent-dim",
  good: "text-[#3a6729]",
  warn: "text-amber-700",
  bad: "text-rose-700",
};

function Chip({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  const cls: Record<Tone, string> = {
    plain: "border-slate-200 bg-white text-slate-600",
    brand: "border-sky-200 bg-sky-50 text-accent-dim",
    good: "border-transparent bg-[#e4f4dc] text-[#3a6729]",
    warn: "border-transparent bg-amber-100 text-amber-800",
    bad: "border-transparent bg-rose-100 text-rose-700",
  };
  return <span className={`inline-block rounded-full border px-2 py-px text-xs font-semibold ${cls[tone]}`}>{children}</span>;
}

function Tile({
  label,
  value,
  sub,
  icon: Icon,
  tone = "plain",
}: {
  label: string;
  value: React.ReactNode;
  sub: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  tone?: Tone;
}) {
  return (
    <div className={`${CARD} flex min-w-0 flex-col p-4`}>
      <div className="flex items-start justify-between gap-2">
        <div className="text-xs font-semibold text-slate-500">{label}</div>
        <Icon size={18} strokeWidth={1.8} className={tone === "plain" ? "text-slate-400" : TONE_TEXT[tone]} />
      </div>
      <div className={`mt-2 text-[28px] font-semibold leading-none tracking-tight ${TONE_TEXT[tone]}`}>{value}</div>
      <div className="mt-1.5 truncate text-xs text-slate-500">{sub}</div>
    </div>
  );
}

function IconAction({
  label,
  onClick,
  children,
  danger,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
  danger?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      className={`flex size-8 items-center justify-center rounded-lg transition-colors ${
        danger ? "text-slate-400 hover:bg-rose-50 hover:text-rose-700" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
      }`}
    >
      {children}
    </button>
  );
}

function Row({
  business: b,
  stats: s,
  origin,
  onEdit,
  onToggle,
  onDelete,
}: {
  business: ReviewBusiness;
  stats: ReviewStats;
  origin: string;
  onEdit: () => void;
  onToggle: () => void;
  onDelete: () => void;
}) {
  const [qr, setQr] = useState("");
  const [copied, setCopied] = useState(false);
  const link = `${origin}/r/${b.slug}`;

  useEffect(() => {
    if (origin) QRCode.toDataURL(link, { width: 160, margin: 1 }).then(setQr);
  }, [origin, link]);

  async function copy() {
    await navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  const maxBar = Math.max(1, ...Object.values(s.byRating));
  const td = "border-b border-[#ebeaf2] px-3 py-3 align-middle";

  return (
    <tr className={`transition-colors hover:bg-[#f8f8fc] [&:last-child>td]:border-b-0 ${b.active ? "" : "opacity-60"}`}>
      <td className={`${td} pl-4`}>
        <div className="flex items-center gap-3">
          {qr ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={qr} alt="" className="size-11 shrink-0 rounded-md border border-slate-200" />
          ) : (
            <div className="size-11 shrink-0 animate-pulse rounded-md bg-slate-100" />
          )}
          <div className="min-w-0">
            <div className="max-w-[14rem] truncate font-semibold text-slate-900">{b.name}</div>
            <div className="whitespace-nowrap text-xs text-slate-500">
              {b.category}
              {b.city ? ` · ${b.city}` : ""} · {b.language}
            </div>
          </div>
        </div>
      </td>
      <td className={td}>
        <button onClick={copy} className="inline-flex items-center gap-1.5 whitespace-nowrap text-accent-dim hover:underline">
          /r/{b.slug}
          {copied ? <Check size={13} className="text-[#3a6729]" /> : <Copy size={13} className="text-slate-400" />}
        </button>
      </td>
      <td className={`${td} text-right font-semibold text-slate-900`}>{s.scans}</td>
      <td className={`${td} text-right font-semibold text-slate-900`}>{s.copied}</td>
      <td className={td}>
        <div className="flex h-7 items-end gap-1" aria-label="Ratings by stars">
          {([1, 2, 3, 4, 5] as const).map((n) => (
            <div key={n} className="flex flex-col items-center" title={`${s.byRating[n]} × ${n}★`}>
              <div
                className={`w-3 rounded-sm ${n >= 4 ? "bg-[#61a644]" : n === 3 ? "bg-amber-400" : "bg-rose-400"}`}
                style={{ height: `${(s.byRating[n] / maxBar) * 18 + 2}px` }}
              />
              <span className="mt-0.5 text-[9px] leading-none text-slate-400">{n}</span>
            </div>
          ))}
        </div>
      </td>
      <td className={td}>
        <span className={`inline-flex items-center gap-1.5 whitespace-nowrap font-semibold ${b.active ? "text-[#3a6729]" : "text-slate-500"}`}>
          <span className={`size-2 rounded-full ${b.active ? "bg-[#61a644]" : "bg-slate-400"}`} />
          {b.active ? "Live" : "Paused"}
        </span>
      </td>
      <td className={`${td} pr-4`}>
        <div className="flex items-center justify-end gap-0.5">
          <button onClick={() => downloadPoster(b, link)} className={QUIET_SM} disabled={!origin}>
            <FileImage size={14} /> Poster
          </button>
          <IconAction label="Download QR only" onClick={() => downloadQr(b, link)}>
            <Download size={16} />
          </IconAction>
          <IconAction label="Open customer page" onClick={() => window.open(`/r/${b.slug}`, "_blank")}>
            <ExternalLink size={16} />
          </IconAction>
          <IconAction label="Edit" onClick={onEdit}>
            <Pencil size={16} />
          </IconAction>
          <IconAction label={b.active ? "Pause" : "Make live"} onClick={onToggle}>
            {b.active ? <Pause size={16} /> : <Play size={16} />}
          </IconAction>
          <IconAction label="Delete" onClick={onDelete} danger>
            <Trash2 size={16} />
          </IconAction>
        </div>
      </td>
    </tr>
  );
}

function BusinessDialog({
  business,
  onClose,
  onSaved,
}: {
  business: ReviewBusiness | null;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [f, setF] = useState<FormState>(
    business
      ? {
          name: business.name,
          slug: business.slug,
          category: business.category,
          city: business.city,
          highlights: business.highlights,
          language: business.language,
          placeId: business.placeId,
          reviewUrl: business.reviewUrl,
        }
      : EMPTY,
  );
  const [slugTouched, setSlugTouched] = useState(Boolean(business));
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const set =
    (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const v = e.target.value;
      setF((p) => ({ ...p, [k]: v, ...(k === "name" && !slugTouched ? { slug: slugify(v) } : {}) }));
    };

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const res = await fetch(business ? `/api/review-studio/businesses/${business.id}` : "/api/review-studio/businesses", {
      method: business ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(f),
    });
    setBusy(false);
    if (res.ok) onSaved();
    else setError((await res.json().catch(() => ({}))).error || "Could not save.");
  }

  const hint = "mt-1 text-xs text-slate-500";

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 p-0 sm:items-center sm:p-4" onMouseDown={onClose}>
      <form
        onSubmit={save}
        onMouseDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dlg-title"
        className="flex max-h-[92dvh] w-full max-w-xl flex-col rounded-t-2xl bg-white shadow-[0_8px_24px_-6px_rgb(15_23_42/0.16),0_0_0_1px_rgb(15_23_42/0.06)] sm:rounded-2xl"
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5">
          <h2 id="dlg-title" className="text-base font-semibold tracking-tight text-slate-900">
            {business ? `Edit ${business.name}` : "Add a business"}
          </h2>
          <button type="button" onClick={onClose} aria-label="Close" className="flex size-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100">
            <X size={18} />
          </button>
        </div>

        <div className="grid gap-4 overflow-y-auto px-5 py-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={LABEL} htmlFor="f-name">Business name</label>
            <input id="f-name" required autoFocus value={f.name} onChange={set("name")} className={FIELD} placeholder="Sharma Sweets" />
          </div>
          <div>
            <label className={LABEL} htmlFor="f-cat">Category</label>
            <select id="f-cat" value={f.category} onChange={set("category")} className={FIELD}>
              {REVIEW_CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={LABEL} htmlFor="f-slug">QR link</label>
            <div className="flex min-h-10 items-center rounded-lg border border-slate-300 bg-white text-[14px] focus-within:border-accent focus-within:ring-2 focus-within:ring-sky-100">
              <span className="pl-3 text-slate-400">/r/</span>
              <input
                id="f-slug"
                value={f.slug}
                onChange={(e) => {
                  setSlugTouched(true);
                  setF((p) => ({ ...p, slug: slugify(e.target.value) }));
                }}
                className="w-full rounded-lg bg-transparent px-1 py-2 outline-none"
              />
            </div>
            {business && f.slug !== business.slug && (
              <p className="mt-1 text-xs font-medium text-amber-700">QR codes already printed will stop working.</p>
            )}
          </div>
          <div>
            <label className={LABEL} htmlFor="f-city">City</label>
            <input id="f-city" value={f.city} onChange={set("city")} className={FIELD} />
          </div>
          <div>
            <label className={LABEL} htmlFor="f-lang">Review language</label>
            <select id="f-lang" value={f.language} onChange={set("language")} className={FIELD}>
              {REVIEW_LANGUAGES.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className={LABEL} htmlFor="f-hl">What customers can mention</label>
            <textarea
              id="f-hl"
              rows={2}
              value={f.highlights}
              onChange={set("highlights")}
              className={`${FIELD} resize-none`}
              placeholder="paneer tikka, rooftop seating, quick service, family friendly"
            />
            <p className={hint}>Reviews only mention these and general things that fit the category.</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 sm:col-span-2">
            <p className="text-xs font-bold uppercase tracking-wider text-stone-500">Google listing</p>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div>
                <label className={LABEL} htmlFor="f-pid">Place ID</label>
                <input id="f-pid" value={f.placeId} onChange={set("placeId")} className={FIELD} placeholder="ChIJ…" />
                <p className={hint}>
                  Find it with{" "}
                  <a
                    className="font-medium text-accent-dim hover:underline"
                    href="https://developers.google.com/maps/documentation/places/web-service/place-id"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Place ID finder
                  </a>
                </p>
              </div>
              <div>
                <label className={LABEL} htmlFor="f-url">or review link</label>
                <input id="f-url" value={f.reviewUrl} onChange={set("reviewUrl")} className={FIELD} placeholder="https://g.page/r/…/review" />
                <p className={hint}>From Business Profile → Ask for reviews. Wins over Place ID.</p>
              </div>
            </div>
          </div>

          {error && (
            <p className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-[13px] text-rose-700 sm:col-span-2">{error}</p>
          )}
        </div>

        <div className="flex justify-end gap-2 border-t border-slate-100 px-5 py-3.5">
          <button type="button" onClick={onClose} className={PLAIN}>
            Cancel
          </button>
          <button disabled={busy} className={PRIMARY}>
            {busy ? "Saving…" : business ? "Save changes" : "Create QR code"}
          </button>
        </div>
      </form>
    </div>
  );
}

// ---------- downloads ----------

function save(dataUrl: string, filename: string) {
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = filename;
  a.click();
}

async function downloadQr(b: ReviewBusiness, link: string) {
  save(await QRCode.toDataURL(link, { width: 1200, margin: 2 }), `${b.slug}-qr.png`);
}

/** A printable A5-ratio table card in the same look: business name, stars, QR, "Scan to review us". */
async function downloadPoster(b: ReviewBusiness, link: string) {
  const W = 1240;
  const H = 1748;
  const font = poppins.style.fontFamily;
  await document.fonts.ready;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "#f5f8f6";
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.roundRect(70, 70, W - 140, H - 140, 48);
  ctx.fill();
  ctx.stroke();
  const band = ctx.createLinearGradient(70, 0, W - 70, 0);
  band.addColorStop(0, "#0284C7");
  band.addColorStop(1, "#EA580C");
  ctx.fillStyle = band;
  ctx.fillRect(160, 70, W - 320, 10);

  ctx.textAlign = "center";
  ctx.fillStyle = "#0284C7";
  ctx.font = `700 34px ${font}`;
  ctx.fillText("LOVED YOUR VISIT?", W / 2, 230);
  ctx.fillStyle = "#0f172a";
  ctx.font = `600 72px ${font}`;
  const lines = wrap(ctx, b.name, W - 280);
  lines.forEach((l, i) => ctx.fillText(l, W / 2, 330 + i * 84));

  const starsY = 330 + lines.length * 84 + 20;
  ctx.fillStyle = "#fbbf24";
  ctx.font = `72px ${font}`;
  ctx.fillText("★★★★★", W / 2, starsY);

  const qrSize = 700;
  const qrY = starsY + 60;
  const qr = new window.Image();
  qr.src = await QRCode.toDataURL(link, { width: qrSize, margin: 1, color: { dark: "#0f172a", light: "#ffffff" } });
  await qr.decode();
  ctx.strokeStyle = "#e2e8f0";
  ctx.beginPath();
  ctx.roundRect((W - qrSize - 60) / 2, qrY, qrSize + 60, qrSize + 60, 32);
  ctx.stroke();
  ctx.drawImage(qr, (W - qrSize) / 2, qrY + 30, qrSize, qrSize);

  ctx.fillStyle = "#0f172a";
  ctx.font = `600 54px ${font}`;
  ctx.fillText("Scan to review us on Google", W / 2, qrY + qrSize + 160);
  ctx.fillStyle = "#64748b";
  ctx.font = `400 34px ${font}`;
  ctx.fillText("Takes less than a minute", W / 2, qrY + qrSize + 215);
  // CreateVerse logo (320x132) at the foot of the card
  const logo = new window.Image();
  logo.src = "/logo.png";
  await logo.decode();
  ctx.font = `500 24px ${font}`;
  ctx.fillStyle = "#94a3b8";
  ctx.fillText("Powered by", W / 2, H - 205);
  ctx.drawImage(logo, (W - 240) / 2, H - 190, 240, 99);

  save(canvas.toDataURL("image/png"), `${b.slug}-review-poster.png`);
}

function wrap(ctx: CanvasRenderingContext2D, text: string, maxW: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (ctx.measureText(test).width > maxW && line) {
      lines.push(line);
      line = w;
    } else line = test;
  }
  lines.push(line);
  return lines.slice(0, 2);
}
