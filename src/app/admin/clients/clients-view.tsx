"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { Check, ChevronRight, Copy, Download, ExternalLink, FileImage, IndianRupee, Pause, Pencil, Play, Plus, QrCode, Send, Sparkles, Star, Store, Trash2 } from "lucide-react";
import { FIELD, LABEL, PLAIN, PRIMARY } from "@/lib/reviews/look";
import {
  PAYMENT_METHODS,
  inr,
  subscriptionOf,
  todayIST,
  type Payment,
  type Plan,
  type ReviewBusiness,
  type ReviewStats,
  type Subscription,
} from "@/lib/reviews/types";
import { Dialog, DialogButtons, Empty, PageHead, Panel, Pill, Problem, Status, TABLE, TD, TH, TR, Tile, fmtDate, useAction, type Tone } from "../ui";
import BusinessDialog, { formFrom } from "./business-dialog";
import { downloadPoster, downloadQr } from "./downloads";

const NO_STATS: ReviewStats = { scans: 0, copied: 0, byRating: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } };
const SUB_TONE: Record<Subscription, Tone> = { Active: "good", Expiring: "warn", Expired: "bad", Unpaid: "bad", Paused: "plain" };
const SUB_WORD: Record<Subscription, string> = { Active: "Live", Expiring: "Renew soon", Expired: "Expired", Unpaid: "Not paid", Paused: "Paused" };

function useOrigin() {
  const [origin, setOrigin] = useState("");
  useEffect(() => setOrigin(window.location.origin), []);
  return origin;
}

function useQr(link: string, width: number) {
  const [qr, setQr] = useState("");
  useEffect(() => {
    if (link.startsWith("http")) QRCode.toDataURL(link, { width, margin: 1 }).then(setQr);
  }, [link, width]);
  return qr;
}

export default function ClientsView({
  businesses,
  stats,
  plans,
  aiProviders,
  sources,
  storage,
}: {
  businesses: ReviewBusiness[];
  stats: Record<string, ReviewStats>;
  plans: Plan[];
  aiProviders: string[];
  sources: Record<string, string[]>;
  storage: string;
}) {
  const [adding, setAdding] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const origin = useOrigin();
  const today = todayIST();

  const rated = Object.values(stats).reduce((n, s) => n + s.scans, 0);
  const sent = Object.values(stats).reduce((n, s) => n + s.copied, 0);
  const live = businesses.filter((b) => ["Active", "Expiring"].includes(subscriptionOf(b, today))).length;
  const open = businesses.find((b) => b.id === openId);

  return (
    <>
      <PageHead
        title="Clients"
        sub="Businesses using the review QR. Click a client to download their QR, record a payment or change details."
        actions={
          <button onClick={() => setAdding(true)} className={PRIMARY}>
            <Plus size={16} /> Add client
          </button>
        }
      />

      <div className="grid grid-cols-3 gap-3">
        <Tile label="Live QR codes" value={live} sub={`${businesses.length} clients in all`} icon={Store} tone="good" />
        <Tile label="Customers who rated" value={rated} icon={Star} />
        <Tile label="Sent to Google" value={sent} sub={rated ? `${Math.round((sent / rated) * 100)}% of ratings` : undefined} icon={Send} tone="brand" />
      </div>

      <Panel title="All clients" count={businesses.length} className="mt-4">
        {businesses.length === 0 ? (
          <Empty
            icon={QrCode}
            title="No clients yet"
            sub="Add a client, or turn a new sign-up into one."
            action={
              <button onClick={() => setAdding(true)} className={PRIMARY}>
                <Plus size={16} /> Add client
              </button>
            }
          />
        ) : (
          <div className="overflow-x-auto">
            <table className={TABLE}>
              <thead>
                <tr>
                  <th className={TH}>Client</th>
                  <th className={TH}>Plan</th>
                  <th className={TH}>Status</th>
                  <th className={`${TH} text-right`}>Rated</th>
                  <th className={`${TH} text-right`}>Sent to Google</th>
                  <th className={TH}><span className="sr-only">Open</span></th>
                </tr>
              </thead>
              <tbody>
                {businesses.map((b) => {
                  const sub = subscriptionOf(b, today);
                  const s = stats[b.id] ?? NO_STATS;
                  const plan = plans.find((p) => p.id === b.planId);
                  return (
                    <tr key={b.id} className={`${TR} cursor-pointer`} onClick={() => setOpenId(b.id)}>
                      <td className={TD}>
                        <div className="font-semibold text-slate-900">{b.name}</div>
                        <div className="whitespace-nowrap text-xs text-slate-500">
                          {b.category}
                          {b.city ? `, ${b.city}` : ""}
                        </div>
                      </td>
                      <td className={`${TD} whitespace-nowrap`}>{plan ? plan.name : <span className="text-slate-400">No plan</span>}</td>
                      <td className={TD}>
                        <Status tone={SUB_TONE[sub]}>{SUB_WORD[sub]}</Status>
                        {b.paidUntil && <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">until {fmtDate(b.paidUntil)}</div>}
                      </td>
                      <td className={`${TD} text-right font-semibold text-slate-900`}>{s.scans}</td>
                      <td className={`${TD} text-right font-semibold text-slate-900`}>{s.copied}</td>
                      <td className={`${TD} text-right`}>
                        <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-accent-dim">
                          Open <ChevronRight size={14} />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Panel>

      <p className="mt-4 text-xs text-slate-400">
        Review writer: {aiProviders.length ? `${aiProviders.join(", then ")}, then built-in templates` : "built-in templates (no AI key set)"}. Storage: {storage}.
      </p>

      {adding && (
        <BusinessDialog
          title="Add a client"
          initial={formFrom({})}
          plans={plans}
          url="/api/admin/businesses"
          method="POST"
          submitLabel="Create client"
          onClose={() => setAdding(false)}
        />
      )}
      {open && (
        <ClientPanel
          b={open}
          stats={stats[open.id] ?? NO_STATS}
          plans={plans}
          source={sources[open.id]}
          origin={origin}
          onClose={() => setOpenId(null)}
        />
      )}
    </>
  );
}

/** Everything about one client in one place. */
function ClientPanel({
  b,
  stats: s,
  plans,
  source,
  origin,
  onClose,
}: {
  b: ReviewBusiness;
  stats: ReviewStats;
  plans: Plan[];
  source?: string[];
  origin: string;
  onClose: () => void;
}) {
  const [view, setView] = useState<"main" | "edit" | "pay" | "reviews">("main");
  const [copied, setCopied] = useState(false);
  const [prepNote, setPrepNote] = useState("");
  const act = useAction();
  const link = `${origin}/r/${b.slug}`;
  const qr = useQr(link, 320);
  const sub = subscriptionOf(b);
  const plan = plans.find((p) => p.id === b.planId);
  const maxBar = Math.max(1, ...Object.values(s.byRating));

  if (view === "edit") {
    return (
      <BusinessDialog
        title={`Edit ${b.name}`}
        initial={formFrom(b)}
        plans={plans}
        url={`/api/admin/businesses/${b.id}`}
        method="PATCH"
        submitLabel="Save changes"
        slugLocked={b.slug}
        onClose={() => setView("main")}
      />
    );
  }
  if (view === "pay") return <PaymentDialog b={b} plans={plans} onClose={() => setView("main")} />;
  if (view === "reviews") return <SuggestionsDialog b={b} onClose={() => setView("main")} />;

  async function copy() {
    await navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }
  async function prepare() {
    setPrepNote("Writing reviews, this can take a minute…");
    const res = await act.run(`/api/admin/businesses/${b.id}/suggestions`, "POST");
    setPrepNote(res ? `Done. Written by ${[...new Set(Object.values(res.sources as Record<string, string>))].join(", ")}.` : "");
  }
  async function toggle() {
    await act.run(`/api/admin/businesses/${b.id}`, "PATCH", { active: !b.active });
  }
  async function remove() {
    if (confirm(`Delete ${b.name}? Its QR code stops working. Payments stay on record.`) && (await act.run(`/api/admin/businesses/${b.id}`, "DELETE"))) onClose();
  }

  const section = "mt-4 rounded-2xl bg-white p-4 ring-1 ring-[#102A43]/[0.06]";
  const heading = "text-sm font-semibold text-slate-900";

  return (
    <Dialog title={b.name} onClose={onClose} wide>
      {/* QR */}
      <div className="flex flex-col gap-5 sm:flex-row">
        {qr ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={qr} alt={`QR code for ${b.name}`} className="size-40 shrink-0 self-center rounded-xl border border-slate-200 sm:self-start" />
        ) : (
          <div className="size-40 shrink-0 animate-pulse self-center rounded-xl bg-slate-100" />
        )}
        <div className="min-w-0 flex-1">
          <p className="text-sm text-slate-500">
            {b.category}
            {b.city ? `, ${b.city}` : ""}. Languages: {b.languages.join(", ")}
          </p>
          <button onClick={copy} className="mt-2 inline-flex max-w-full items-center gap-1.5 break-all text-left text-sm font-medium text-accent-dim hover:underline">
            {link || `/r/${b.slug}`} {copied ? <Check size={14} className="shrink-0 text-[#3a6729]" /> : <Copy size={14} className="shrink-0 text-slate-400" />}
          </button>
          <div className="mt-4 flex flex-wrap gap-2">
            <button onClick={() => downloadPoster(b, link)} className={PRIMARY} disabled={!origin}>
              <FileImage size={16} /> Download poster
            </button>
            <button onClick={() => downloadQr(b, link)} className={`${PLAIN} ring-1 ring-slate-200`} disabled={!origin}>
              <Download size={16} /> QR only
            </button>
            <a href={`/r/${b.slug}`} target="_blank" rel="noreferrer" className={`${PLAIN} ring-1 ring-slate-200`}>
              <ExternalLink size={16} /> Open page
            </a>
          </div>
        </div>
      </div>

      {/* Payment */}
      <div className={section}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className={heading}>Payment</p>
            <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-600">
              <Pill tone={SUB_TONE[sub]}>{SUB_WORD[sub]}</Pill>
              {b.paidUntil ? `Paid until ${fmtDate(b.paidUntil)}` : "No payment recorded"}
              {plan && <span className="text-slate-400">({plan.name}, {inr(plan.priceInr)})</span>}
            </p>
          </div>
          <button onClick={() => setView("pay")} className={PRIMARY}>
            <IndianRupee size={16} /> {b.paidUntil ? "Record renewal" : "Record payment"}
          </button>
        </div>
        {(sub === "Unpaid" || sub === "Expired") && <p className="mt-2 text-xs text-slate-500">Customers see “not active” until a payment is recorded.</p>}
      </div>

      {/* Reviews */}
      <div className={section}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className={heading}>Reviews</p>
            <p className="mt-1 text-sm text-slate-600">
              {s.scans} {s.scans === 1 ? "customer" : "customers"} rated, {s.copied} sent to Google
            </p>
          </div>
          <div className="flex h-9 items-end gap-1" aria-label="Ratings by stars">
            {([1, 2, 3, 4, 5] as const).map((n) => (
              <div key={n} className="flex flex-col items-center" title={`${s.byRating[n]} × ${n}★`}>
                <div className={`w-4 rounded-sm ${n >= 4 ? "bg-[#61a644]" : n === 3 ? "bg-amber-400" : "bg-rose-400"}`} style={{ height: `${(s.byRating[n] / maxBar) * 24 + 2}px` }} />
                <span className="mt-0.5 text-[10px] leading-none text-slate-400">{n}★</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3 rounded-xl bg-white px-3.5 py-3 ring-1 ring-[#102A43]/[0.06]">
          <p className="flex-1 text-xs text-slate-600">
            {prepNote ||
              (source?.length
                ? `Suggestions saved and ready (written by ${[...new Set(source)].join(", ")}).`
                : "Suggestions are written the first time a customer taps a star. Prepare them now so the first customer doesn't wait.")}
          </p>
          <button onClick={() => setView("reviews")} className={`${PRIMARY} h-9`}>
            <Pencil size={15} /> Edit suggestions
          </button>
          <button onClick={prepare} disabled={act.busy} className={`${PLAIN} h-9 ring-1 ring-slate-200`}>
            <Sparkles size={15} className={act.busy ? "animate-pulse text-accent" : ""} /> Write new with AI
          </button>
        </div>
      </div>

      {/* Details */}
      <div className={`${section} flex flex-wrap items-center gap-2`}>
        <button onClick={() => setView("edit")} className={`${PLAIN} ring-1 ring-slate-200`}>
          <Pencil size={15} /> Edit details
        </button>
        <button onClick={toggle} className={`${PLAIN} ring-1 ring-slate-200`}>
          {b.active ? <Pause size={15} /> : <Play size={15} />} {b.active ? "Pause QR" : "Resume QR"}
        </button>
        <button onClick={remove} className="ml-auto inline-flex h-10 items-center gap-1.5 rounded-[10px] px-3 text-sm font-semibold text-rose-700 hover:bg-rose-50">
          <Trash2 size={15} /> Delete
        </button>
      </div>
      <Problem message={act.error} />
    </Dialog>
  );
}

type PoolView = { rating: number; language: string; reviews: string[]; used: number; source: string; manual: boolean };

/**
 * The team's view of a client's suggestions: one tab per star rating, one suggestion per line.
 * Saving makes that list the client's own ("manual"): AI never rewrites it, only tops it up
 * when customers have used most of it.
 */
function SuggestionsDialog({ b, onClose }: { b: ReviewBusiness; onClose: () => void }) {
  const [pools, setPools] = useState<PoolView[] | null>(null);
  const [rating, setRating] = useState(5);
  const [lang, setLang] = useState(b.languages[0]);
  const [text, setText] = useState("");
  const [note, setNote] = useState("");
  const { run, busy, error } = useAction();

  const current = pools?.find((p) => p.rating === rating && p.language === lang);

  useEffect(() => {
    fetch(`/api/admin/businesses/${b.id}/suggestions`)
      .then((r) => r.json())
      .then((d) => setPools(d.pools ?? []))
      .catch(() => setPools([]));
  }, [b.id]);
  useEffect(() => {
    setText((current?.reviews ?? []).join("\n"));
    setNote("");
  }, [current]);

  async function save() {
    const reviews = text.split("\n").map((l) => l.trim()).filter(Boolean);
    const res = await run(`/api/admin/businesses/${b.id}/suggestions`, "PUT", { rating, language: lang, reviews });
    if (!res) return;
    setPools((ps) =>
      (ps ?? [])
        .filter((p) => !(p.rating === rating && p.language === lang))
        .concat({ rating, language: lang, reviews: reviews.slice(0, Number(res.saved)), used: current?.used ?? 0, source: "Manual", manual: true }),
    );
    setNote(`Saved ${res.saved} suggestions${Number(res.skipped) ? `. ${res.skipped} skipped: already posted or repeated.` : "."}`);
  }

  const lines = text.split("\n").filter((l) => l.trim()).length;

  return (
    <Dialog
      title={`Suggestions for ${b.name}`}
      onClose={onClose}
      wide
      footer={
        <>
          <button type="button" onClick={onClose} className={PLAIN}>
            Close
          </button>
          <button type="button" onClick={save} disabled={busy || pools === null} className={PRIMARY}>
            {busy ? "Saving…" : `Save ${rating}★ suggestions`}
          </button>
        </>
      }
    >
      <div className="flex flex-wrap items-center gap-2">
        <div role="tablist" className="flex gap-1 rounded-2xl bg-white p-1 ring-1 ring-[#102A43]/[0.06]">
          {[5, 4, 3, 2, 1].map((r) => (
            <button
              key={r}
              role="tab"
              aria-selected={rating === r}
              onClick={() => setRating(r)}
              className={`flex items-center gap-1 rounded-xl px-3 py-1.5 text-sm font-semibold ${rating === r ? "bg-accent text-white" : "text-[#102A43]/70 hover:text-[#102A43]"}`}
            >
              {r}
              <Star size={13} className={rating === r ? "fill-white" : "fill-amber-400 text-amber-400"} />
            </button>
          ))}
        </div>
        {b.languages.length > 1 && (
          <select value={lang} onChange={(e) => setLang(e.target.value)} className={`${FIELD} !w-auto`} aria-label="Language">
            {b.languages.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        )}
      </div>

      {pools === null ? (
        <p className="mt-4 text-sm text-slate-500">Loading suggestions… (writing any that are missing)</p>
      ) : (
        <>
          <p className="mt-4 text-xs text-slate-500">
            {lines} suggestions{current ? `, ${current.used} already posted by customers` : ""}
            {current ? `. Written by ${current.manual ? "your team" : current.source}.` : "."} One suggestion per line.
          </p>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={14}
            className={`${FIELD} mt-2 resize-y font-normal leading-relaxed`}
            placeholder={"Best {keyword} in {city}. The sweets are always fresh.\nLoved the {thing} at {name}. Will come again."}
          />
          <p className="mt-2 rounded-xl bg-white px-3.5 py-3 text-xs leading-relaxed text-slate-600 ring-1 ring-[#102A43]/[0.06]">
            You can use <b>{"{name}"}</b>, <b>{"{city}"}</b>, <b>{"{keyword}"}</b> and <b>{"{thing}"}</b> (one of the highlights). They fill in from this
            client&apos;s details, so &quot;Best {"{keyword}"} in {"{city}"}&quot; shows as &quot;Best {b.keyword || "sweet shop"} in {b.city || "Karnal"}&quot;. A
            sentence is left out if its value is empty. Each suggestion is shown until a customer posts it, then never again. Once you save, AI only adds
            more when fewer than 6 are left.
          </p>
          {note && <p className="mt-2 text-xs font-medium text-[#3a6729]">{note}</p>}
        </>
      )}
      <Problem message={error} />
    </Dialog>
  );
}

function PaymentDialog({ b, plans, onClose }: { b: ReviewBusiness; plans: Plan[]; onClose: () => void }) {
  const plan = plans.find((p) => p.id === b.planId);
  const [f, setF] = useState({
    amountInr: plan ? String(plan.priceInr) : "",
    months: plan ? String(plan.months) : "12",
    method: "UPI",
    paidOn: todayIST(),
    note: "",
  });
  const [history, setHistory] = useState<Payment[] | null>(null);
  const { run, busy, error } = useAction();

  useEffect(() => {
    fetch(`/api/admin/businesses/${b.id}/payments`)
      .then((r) => r.json())
      .then((d) => setHistory(d.payments ?? []))
      .catch(() => setHistory([]));
  }, [b.id]);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (await run(`/api/admin/businesses/${b.id}/payments`, "POST", f)) onClose();
  }

  const stillPaid = b.paidUntil && b.paidUntil >= todayIST();

  return (
    <Dialog title={`Record payment for ${b.name}`} onClose={onClose} onSubmit={save} footer={<DialogButtons onClose={onClose} busy={busy} label="Save payment" />}>
      <p className="mb-4 rounded-xl bg-white px-3.5 py-2.5 ring-1 ring-[#102A43]/[0.06] text-[13px] text-slate-600">
        {stillPaid
          ? `Paid until ${fmtDate(b.paidUntil)}. This adds ${f.months || "…"} month(s) after that.`
          : `This makes the QR live from today for ${f.months || "…"} month(s).`}
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {plans.length > 0 && (
          <div className="sm:col-span-2">
            <label className={LABEL} htmlFor="pay-plan">Plan</label>
            <select
              id="pay-plan"
              defaultValue={plan?.id ?? ""}
              onChange={(e) => {
                const p = plans.find((x) => x.id === e.target.value);
                if (p) setF({ ...f, amountInr: String(p.priceInr), months: String(p.months) });
              }}
              className={FIELD}
            >
              <option value="">Custom amount</option>
              {plans.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}: {inr(p.priceInr)} for {p.months} month{p.months > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>
        )}
        <div>
          <label className={LABEL} htmlFor="pay-amt">Amount received (₹)</label>
          <input id="pay-amt" required inputMode="numeric" value={f.amountInr} onChange={(e) => setF({ ...f, amountInr: e.target.value.replace(/\D/g, "") })} className={FIELD} />
        </div>
        <div>
          <label className={LABEL} htmlFor="pay-months">Months</label>
          <input id="pay-months" required inputMode="numeric" value={f.months} onChange={(e) => setF({ ...f, months: e.target.value.replace(/\D/g, "") })} className={FIELD} />
        </div>
        <div>
          <label className={LABEL} htmlFor="pay-method">Paid by</label>
          <select id="pay-method" value={f.method} onChange={(e) => setF({ ...f, method: e.target.value })} className={FIELD}>
            {PAYMENT_METHODS.map((m) => <option key={m}>{m}</option>)}
          </select>
        </div>
        <div>
          <label className={LABEL} htmlFor="pay-on">Date</label>
          <input id="pay-on" type="date" value={f.paidOn} onChange={(e) => setF({ ...f, paidOn: e.target.value })} className={FIELD} />
        </div>
        <div className="sm:col-span-2">
          <label className={LABEL} htmlFor="pay-note">Note (optional)</label>
          <input id="pay-note" value={f.note} onChange={(e) => setF({ ...f, note: e.target.value })} className={FIELD} placeholder="UPI reference, invoice number" />
        </div>
      </div>
      <Problem message={error} />

      {history && history.length > 0 && (
        <div className="mt-5">
          <p className="text-sm font-semibold text-slate-900">Earlier payments</p>
          <table className={`${TABLE} mt-2`}>
            <tbody>
              {history.map((p) => (
                <tr key={p.id} className={TR}>
                  <td className={`${TD} !pl-0`}>{fmtDate(p.paidOn)}</td>
                  <td className={`${TD} font-semibold`}>{inr(p.amountInr)}</td>
                  <td className={TD}>{p.months} mo</td>
                  <td className={TD}>{p.method}</td>
                  <td className={`${TD} !pr-0 text-slate-500`}>{p.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Dialog>
  );
}
