"use client";

import { useState } from "react";
import { ArrowRightCircle, Inbox, MapPin, Phone, Trash2 } from "lucide-react";
import { FIELD, LABEL, PRIMARY, QUIET_SM } from "@/lib/reviews/look";
import { SIGNUP_STATUSES, inr, type Plan, type Signup, type SignupStatus } from "@/lib/reviews/types";
import { Dialog, Empty, PageHead, Panel, Problem, TABLE, TD, TH, TR, fmtDate, useAction, type Tone } from "../ui";
import BusinessDialog, { formFrom } from "../clients/business-dialog";

const TONE: Record<SignupStatus, Tone> = { New: "brand", Contacted: "warn", Converted: "good", Rejected: "plain" };
const PILL_SELECT: Record<Tone, string> = {
  brand: "border-sky-200 bg-sky-50 text-accent-dim",
  warn: "border-amber-200 bg-amber-50 text-amber-800",
  good: "border-transparent bg-[#e4f4dc] text-[#3a6729]",
  plain: "border-slate-200 bg-white text-slate-600",
  bad: "border-transparent bg-rose-100 text-rose-700",
};

const wa = (phone: string) => `https://wa.me/${phone.replace(/\D/g, "").replace(/^(?=\d{10}$)/, "91")}`;

export default function SignupsView({ signups, plans }: { signups: Signup[]; plans: Plan[] }) {
  const [filter, setFilter] = useState<"open" | SignupStatus | "all">("open");
  const [open, setOpen] = useState<Signup | null>(null);
  const [converting, setConverting] = useState<Signup | null>(null);
  const { run } = useAction();

  const shown = signups.filter((s) =>
    filter === "all" ? true : filter === "open" ? s.status === "New" || s.status === "Contacted" : s.status === filter,
  );
  const planLabel = (id: string) => {
    const p = plans.find((x) => x.id === id);
    return p ? `${p.name} · ${inr(p.priceInr)}` : "Not chosen";
  };
  const tabs: { key: typeof filter; label: string; n: number }[] = [
    { key: "open", label: "To handle", n: signups.filter((s) => s.status === "New" || s.status === "Contacted").length },
    ...SIGNUP_STATUSES.map((st) => ({ key: st, label: st, n: signups.filter((s) => s.status === st).length })),
    { key: "all", label: "All", n: signups.length },
  ];

  return (
    <>
      <PageHead title="New sign-ups" sub="Businesses that filled the form on the website. Call them, then press Make client." />

      <div role="tablist" className="mb-4 flex gap-1 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-sm [scrollbar-width:none]">
        {tabs.map((t) => (
          <button
            key={t.key}
            role="tab"
            aria-selected={filter === t.key}
            onClick={() => setFilter(t.key)}
            className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold ${filter === t.key ? "bg-accent text-white shadow-sm" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}
          >
            {t.label}
            <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${filter === t.key ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}>{t.n}</span>
          </button>
        ))}
      </div>

      <Panel title="Sign-ups" count={shown.length}>
        {shown.length === 0 ? (
          <Empty icon={Inbox} title="Nothing here" sub="New sign-ups from the website form show up here." />
        ) : (
          <div className="overflow-x-auto">
            <table className={TABLE}>
              <thead>
                <tr>
                  <th className={TH}>Business</th>
                  <th className={TH}>Contact</th>
                  <th className={TH}>Plan</th>
                  <th className={TH}>Status</th>
                  <th className={TH}>Received</th>
                  <th className={TH}><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                {shown.map((s) => (
                  <tr key={s.id} className={`${TR} cursor-pointer`} onClick={() => setOpen(s)}>
                    <td className={TD}>
                      <div className="font-semibold text-slate-900">{s.businessName}</div>
                      <div className="whitespace-nowrap text-xs text-slate-500">
                        {s.category}
                        {s.city ? ` · ${s.city}` : ""}
                        {s.branches > 1 ? ` · ${s.branches} branches` : ""}
                      </div>
                    </td>
                    <td className={TD} onClick={(e) => e.stopPropagation()}>
                      <div className="whitespace-nowrap text-slate-800">{s.contactName}</div>
                      <div className="flex gap-2 whitespace-nowrap text-xs">
                        <a href={`tel:${s.phone}`} className="text-accent-dim hover:underline">{s.phone}</a>
                        <a href={wa(s.phone)} target="_blank" rel="noreferrer" className="text-[#3a6729] hover:underline">WhatsApp</a>
                      </div>
                    </td>
                    <td className={`${TD} whitespace-nowrap`}>{planLabel(s.planId)}</td>
                    <td className={TD} onClick={(e) => e.stopPropagation()}>
                      <select
                        value={s.status}
                        disabled={s.status === "Converted"}
                        onChange={(e) => run(`/api/admin/signups/${s.id}`, "PATCH", { status: e.target.value })}
                        aria-label="Status"
                        className={`h-7 cursor-pointer rounded-full border px-2.5 text-xs font-semibold outline-none ${PILL_SELECT[TONE[s.status]]}`}
                      >
                        {SIGNUP_STATUSES.filter((st) => st !== "Converted" || s.status === "Converted").map((st) => <option key={st}>{st}</option>)}
                      </select>
                    </td>
                    <td className={`${TD} whitespace-nowrap text-slate-500`}>{fmtDate(s.createdAt)}</td>
                    <td className={TD} onClick={(e) => e.stopPropagation()}>
                      {s.status !== "Converted" && s.status !== "Rejected" && (
                        <button onClick={() => setConverting(s)} className={QUIET_SM}>
                          <ArrowRightCircle size={14} /> Make client
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Panel>

      {open && <SignupDialog s={open} planLabel={planLabel(open.planId)} onClose={() => setOpen(null)} onConvert={() => { setConverting(open); setOpen(null); }} />}
      {converting && (
        <BusinessDialog
          title={`Make ${converting.businessName} a client`}
          initial={formFrom({
            name: converting.businessName,
            category: converting.category,
            city: converting.city,
            contactName: converting.contactName,
            phone: converting.phone,
            email: converting.email,
            planId: converting.planId,
            reviewUrl: /^https:\/\//.test(converting.mapsLink) && /review/i.test(converting.mapsLink) ? converting.mapsLink : "",
          })}
          plans={plans}
          url={`/api/admin/signups/${converting.id}/convert`}
          method="POST"
          submitLabel="Create client"
          note={
            converting.mapsLink ? (
              <p className="mb-4 rounded-lg bg-slate-50 px-3 py-2 text-[13px] text-slate-600">
                Their Google link:{" "}
                <a href={converting.mapsLink} target="_blank" rel="noreferrer" className="break-all font-medium text-accent-dim hover:underline">{converting.mapsLink}</a>
              </p>
            ) : undefined
          }
          onClose={() => setConverting(null)}
        />
      )}
    </>
  );
}

function SignupDialog({ s, planLabel, onClose, onConvert }: { s: Signup; planLabel: string; onClose: () => void; onConvert: () => void }) {
  const [notes, setNotes] = useState(s.notes);
  const { run, busy, error } = useAction();

  async function saveNotes() {
    if (await run(`/api/admin/signups/${s.id}`, "PATCH", { notes })) onClose();
  }
  async function remove() {
    if (confirm(`Delete the sign-up from ${s.businessName}?`) && (await run(`/api/admin/signups/${s.id}`, "DELETE"))) onClose();
  }

  const row = (k: string, v: React.ReactNode) => (
    <div className="grid grid-cols-[8rem_1fr] gap-3 border-b border-slate-100 py-2 text-[13px] last:border-0">
      <dt className="text-slate-500">{k}</dt>
      <dd className="min-w-0 break-words text-slate-800">{v || "—"}</dd>
    </div>
  );

  return (
    <Dialog
      title={s.businessName}
      onClose={onClose}
      footer={
        <>
          <button onClick={remove} className="mr-auto inline-flex h-10 items-center gap-1.5 rounded-[10px] px-3 text-sm font-semibold text-rose-700 hover:bg-rose-50">
            <Trash2 size={15} /> Delete
          </button>
          <button onClick={saveNotes} disabled={busy} className={`${QUIET_SM} !h-10 !px-4 !text-sm`}>Save notes</button>
          {s.status !== "Converted" && (
            <button onClick={onConvert} className={PRIMARY}><ArrowRightCircle size={16} /> Make client</button>
          )}
        </>
      }
    >
      <dl>
        {row("Contact", s.contactName)}
        {row("Phone", <span className="flex flex-wrap gap-3"><a href={`tel:${s.phone}`} className="inline-flex items-center gap-1 text-accent-dim"><Phone size={13} />{s.phone}</a><a href={wa(s.phone)} target="_blank" rel="noreferrer" className="text-[#3a6729]">WhatsApp</a></span>)}
        {row("Email", s.email && <a href={`mailto:${s.email}`} className="text-accent-dim">{s.email}</a>)}
        {row("Category", s.category)}
        {row("City", s.city)}
        {row("Branches", s.branches)}
        {row("Plan chosen", planLabel)}
        {row("Google listing", s.mapsLink && <a href={s.mapsLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 break-all text-accent-dim"><MapPin size={13} />{s.mapsLink}</a>)}
        {row("Message", s.message)}
        {row("Received", fmtDate(s.createdAt))}
        {row("Status", s.status)}
      </dl>
      <label className={`${LABEL} mt-4`} htmlFor="s-notes">Team notes</label>
      <textarea id="s-notes" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} className={`${FIELD} resize-none`} placeholder="Called on…, wants yearly, pays by UPI on Friday" />
      <Problem message={error} />
    </Dialog>
  );
}
