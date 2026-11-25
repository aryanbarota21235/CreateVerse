"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { Check, Copy, Download, ExternalLink, FileImage, IndianRupee, Pause, Pencil, Play, Plus, QrCode, Send, Star, Store, Trash2 } from "lucide-react";
import { FIELD, LABEL, PRIMARY, QUIET_SM } from "@/lib/reviews/look";
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

function useOrigin() {
  const [origin, setOrigin] = useState("");
  useEffect(() => setOrigin(window.location.origin), []);
  return origin;
}

export default function ClientsView({
  businesses,
  stats,
  plans,
  aiEnabled,
  storage,
}: {
  businesses: ReviewBusiness[];
  stats: Record<string, ReviewStats>;
  plans: Plan[];
  aiEnabled: boolean;
  storage: string;
}) {
  const [editing, setEditing] = useState<ReviewBusiness | "new" | null>(null);
  const [paying, setPaying] = useState<ReviewBusiness | null>(null);
  const origin = useOrigin();
  const { run } = useAction();
  const today = todayIST();

  const rated = Object.values(stats).reduce((n, s) => n + s.scans, 0);
  const sent = Object.values(stats).reduce((n, s) => n + s.copied, 0);
  const live = businesses.filter((b) => ["Active", "Expiring"].includes(subscriptionOf(b, today))).length;

  async function toggle(b: ReviewBusiness) {
    await run(`/api/admin/businesses/${b.id}`, "PATCH", { active: !b.active });
  }
  async function remove(b: ReviewBusiness) {
    if (confirm(`Delete ${b.name}? Its QR code stops working and its numbers are deleted. Payments stay on record.`)) {
      await run(`/api/admin/businesses/${b.id}`, "DELETE");
    }
  }

  return (
    <>
      <PageHead
        title="Review clients"
        sub={
          <div className="flex flex-wrap gap-1.5 pt-1">
            <Pill tone={aiEnabled ? "good" : "warn"}>{aiEnabled ? "AI suggestions on" : "AI off — using templates"}</Pill>
            <Pill>Storage: {storage}</Pill>
          </div>
        }
        actions={<button onClick={() => setEditing("new")} className={PRIMARY}><Plus size={16} /> Add client</button>}
      />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Tile label="Live QR codes" value={live} sub={`${businesses.length} clients in all`} icon={Store} tone="good" />
        <Tile label="Ratings given" value={rated} sub="Customers who tapped a star" icon={Star} />
        <Tile label="Sent to Google" value={sent} sub={rated ? `${Math.round((sent / rated) * 100)}% of ratings` : "—"} icon={Send} tone="brand" />
        <Tile label="Not live" value={businesses.length - live} sub="Unpaid, expired or paused" icon={QrCode} tone={businesses.length - live ? "warn" : "plain"} />
      </div>

      <Panel title="Clients" count={businesses.length} className="mt-4">
        {businesses.length === 0 ? (
          <Empty icon={QrCode} title="No clients yet" sub="Convert a sign-up or add a client to get their QR code." action={<button onClick={() => setEditing("new")} className={PRIMARY}><Plus size={16} /> Add client</button>} />
        ) : (
          <div className="overflow-x-auto">
            <table className={TABLE}>
              <thead>
                <tr>
                  <th className={TH}>Client</th>
                  <th className={TH}>Plan</th>
                  <th className={TH}>Subscription</th>
                  <th className={`${TH} text-right`}>Rated</th>
                  <th className={`${TH} text-right`}>Sent</th>
                  <th className={TH}>Ratings</th>
                  <th className={TH}><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                {businesses.map((b) => (
                  <Row
                    key={b.id}
                    b={b}
                    s={stats[b.id] ?? NO_STATS}
                    plan={plans.find((p) => p.id === b.planId)}
                    sub={subscriptionOf(b, today)}
                    origin={origin}
                    onEdit={() => setEditing(b)}
                    onPay={() => setPaying(b)}
                    onToggle={() => toggle(b)}
                    onDelete={() => remove(b)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Panel>

      {editing && (
        <BusinessDialog
          title={editing === "new" ? "Add a client" : `Edit ${editing.name}`}
          initial={formFrom(editing === "new" ? {} : editing)}
          plans={plans}
          url={editing === "new" ? "/api/admin/businesses" : `/api/admin/businesses/${editing.id}`}
          method={editing === "new" ? "POST" : "PATCH"}
          submitLabel={editing === "new" ? "Create client" : "Save changes"}
          slugLocked={editing === "new" ? undefined : editing.slug}
          onClose={() => setEditing(null)}
        />
      )}
      {paying && <PaymentDialog b={paying} plans={plans} onClose={() => setPaying(null)} />}
    </>
  );
}

function Act({ label, onClick, children, danger }: { label: string; onClick: () => void; children: React.ReactNode; danger?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      className={`flex size-8 items-center justify-center rounded-lg transition-colors ${danger ? "text-slate-400 hover:bg-rose-50 hover:text-rose-700" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"}`}
    >
      {children}
    </button>
  );
}

function Row({
  b,
  s,
  plan,
  sub,
  origin,
  onEdit,
  onPay,
  onToggle,
  onDelete,
}: {
  b: ReviewBusiness;
  s: ReviewStats;
  plan?: Plan;
  sub: Subscription;
  origin: string;
  onEdit: () => void;
  onPay: () => void;
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

  return (
    <tr className={TR}>
      <td className={TD}>
        <div className="flex items-center gap-3">
          {qr ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={qr} alt="" className={`size-11 shrink-0 rounded-md border border-slate-200 ${sub === "Active" || sub === "Expiring" ? "" : "opacity-40"}`} />
          ) : (
            <div className="size-11 shrink-0 animate-pulse rounded-md bg-slate-100" />
          )}
          <div className="min-w-0">
            <div className="max-w-[13rem] truncate font-semibold text-slate-900">{b.name}</div>
            <div className="whitespace-nowrap text-xs text-slate-500">
              {b.category}
              {b.city ? ` · ${b.city}` : ""}
            </div>
            <button onClick={copy} className="mt-0.5 inline-flex items-center gap-1 whitespace-nowrap text-xs text-accent-dim hover:underline">
              /r/{b.slug} {copied ? <Check size={12} className="text-[#3a6729]" /> : <Copy size={12} className="text-slate-400" />}
            </button>
          </div>
        </div>
      </td>
      <td className={TD}>
        {plan ? (
          <>
            <div className="whitespace-nowrap font-medium text-slate-800">{plan.name}</div>
            <div className="text-xs text-slate-500">{inr(plan.priceInr)} / {plan.months} mo</div>
          </>
        ) : (
          <span className="text-slate-400">—</span>
        )}
        {b.phone && <a href={`tel:${b.phone}`} className="block whitespace-nowrap text-xs text-slate-500 hover:text-slate-800">{b.contactName || "Call"} · {b.phone}</a>}
      </td>
      <td className={TD}>
        <Status tone={SUB_TONE[sub]}>{sub}</Status>
        <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">{b.paidUntil ? `until ${fmtDate(b.paidUntil)}` : "No payment yet"}</div>
      </td>
      <td className={`${TD} text-right font-semibold text-slate-900`}>{s.scans}</td>
      <td className={`${TD} text-right font-semibold text-slate-900`}>{s.copied}</td>
      <td className={TD}>
        <div className="flex h-7 items-end gap-1" aria-label="Ratings by stars">
          {([1, 2, 3, 4, 5] as const).map((n) => (
            <div key={n} className="flex flex-col items-center" title={`${s.byRating[n]} × ${n}★`}>
              <div className={`w-3 rounded-sm ${n >= 4 ? "bg-[#61a644]" : n === 3 ? "bg-amber-400" : "bg-rose-400"}`} style={{ height: `${(s.byRating[n] / maxBar) * 18 + 2}px` }} />
              <span className="mt-0.5 text-[9px] leading-none text-slate-400">{n}</span>
            </div>
          ))}
        </div>
      </td>
      <td className={TD}>
        <div className="flex items-center justify-end gap-0.5">
          <button onClick={onPay} className={`${QUIET_SM} ${sub === "Active" ? "" : "!border-sky-200 !bg-sky-50 !text-accent-dim"}`}>
            <IndianRupee size={14} /> {sub === "Unpaid" ? "Record payment" : "Renew"}
          </button>
          <Act label="Download poster" onClick={() => downloadPoster(b, link)}><FileImage size={16} /></Act>
          <Act label="Download QR only" onClick={() => downloadQr(b, link)}><Download size={16} /></Act>
          <Act label="Open customer page" onClick={() => window.open(`/r/${b.slug}`, "_blank")}><ExternalLink size={16} /></Act>
          <Act label="Edit" onClick={onEdit}><Pencil size={16} /></Act>
          <Act label={b.active ? "Pause" : "Resume"} onClick={onToggle}>{b.active ? <Pause size={16} /> : <Play size={16} />}</Act>
          <Act label="Delete" onClick={onDelete} danger><Trash2 size={16} /></Act>
        </div>
      </td>
    </tr>
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
    <Dialog
      title={`Payment · ${b.name}`}
      onClose={onClose}
      onSubmit={save}
      footer={<DialogButtons onClose={onClose} busy={busy} label="Save payment" />}
    >
      <p className="mb-4 rounded-lg bg-slate-50 px-3 py-2 text-[13px] text-slate-600">
        {stillPaid
          ? `Paid until ${fmtDate(b.paidUntil)}. This payment adds ${f.months || "…"} month(s) after that.`
          : `Not paid up. This payment makes the QR live from today for ${f.months || "…"} month(s).`}
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {plans.length > 0 && (
          <div className="sm:col-span-2">
            <label className={LABEL} htmlFor="pay-plan">Fill from plan</label>
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
                <option key={p.id} value={p.id}>{p.name} · {inr(p.priceInr)} / {p.months} mo</option>
              ))}
            </select>
          </div>
        )}
        <div>
          <label className={LABEL} htmlFor="pay-amt">Amount received (₹)</label>
          <input id="pay-amt" required inputMode="numeric" value={f.amountInr} onChange={(e) => setF({ ...f, amountInr: e.target.value.replace(/\D/g, "") })} className={FIELD} />
        </div>
        <div>
          <label className={LABEL} htmlFor="pay-months">Months covered</label>
          <input id="pay-months" required inputMode="numeric" value={f.months} onChange={(e) => setF({ ...f, months: e.target.value.replace(/\D/g, "") })} className={FIELD} />
        </div>
        <div>
          <label className={LABEL} htmlFor="pay-method">Method</label>
          <select id="pay-method" value={f.method} onChange={(e) => setF({ ...f, method: e.target.value })} className={FIELD}>
            {PAYMENT_METHODS.map((m) => <option key={m}>{m}</option>)}
          </select>
        </div>
        <div>
          <label className={LABEL} htmlFor="pay-on">Paid on</label>
          <input id="pay-on" type="date" value={f.paidOn} onChange={(e) => setF({ ...f, paidOn: e.target.value })} className={FIELD} />
        </div>
        <div className="sm:col-span-2">
          <label className={LABEL} htmlFor="pay-note">Note</label>
          <input id="pay-note" value={f.note} onChange={(e) => setF({ ...f, note: e.target.value })} className={FIELD} placeholder="UPI ref, invoice no." />
        </div>
      </div>
      <Problem message={error} />

      <div className="mt-5">
        <p className="text-xs font-bold uppercase tracking-wider text-stone-500">Earlier payments</p>
        {history === null ? (
          <p className="mt-2 text-sm text-slate-400">Loading…</p>
        ) : history.length === 0 ? (
          <p className="mt-2 text-sm text-slate-500">None yet.</p>
        ) : (
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
        )}
      </div>
    </Dialog>
  );
}
