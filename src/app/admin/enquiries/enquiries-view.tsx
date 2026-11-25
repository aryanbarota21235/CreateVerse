"use client";

import { useState } from "react";
import { MessageSquareText, Phone, Trash2 } from "lucide-react";
import { FIELD, LABEL, QUIET_SM } from "@/lib/reviews/look";
import { ENQUIRY_STATUSES, type Enquiry, type EnquiryStatus } from "@/lib/reviews/types";
import { Dialog, Empty, PageHead, Panel, Problem, TABLE, TD, TH, TR, fmtDateTime, useAction } from "../ui";

const STATUS_CLS: Record<EnquiryStatus, string> = {
  New: "border-sky-200 bg-sky-50 text-accent-dim",
  Contacted: "border-amber-200 bg-amber-50 text-amber-800",
  Qualified: "border-violet-200 bg-violet-50 text-violet-700",
  "Closed Won": "border-transparent bg-[#e4f4dc] text-[#3a6729]",
  Lost: "border-slate-200 bg-white text-slate-500",
};

const wa = (phone: string) => `https://wa.me/${phone.replace(/\D/g, "").replace(/^(?=\d{10}$)/, "91")}`;

export default function EnquiriesView({ enquiries }: { enquiries: Enquiry[] }) {
  const [filter, setFilter] = useState<EnquiryStatus | "all">("all");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<Enquiry | null>(null);
  const { run } = useAction();

  const needle = q.trim().toLowerCase();
  const shown = enquiries.filter(
    (e) =>
      (filter === "all" || e.status === filter) &&
      (!needle || [e.name, e.phone, e.email, e.company, e.service, e.message].some((v) => v.toLowerCase().includes(needle))),
  );

  return (
    <>
      <PageHead title="Enquiries" sub="Every enquiry form on createverse.in. They still go to Make.com as before; this is the team's copy." />

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <div role="tablist" className="flex gap-1 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-sm [scrollbar-width:none]">
          {(["all", ...ENQUIRY_STATUSES] as const).map((st) => {
            const n = st === "all" ? enquiries.length : enquiries.filter((e) => e.status === st).length;
            const on = filter === st;
            return (
              <button key={st} role="tab" aria-selected={on} onClick={() => setFilter(st)} className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold ${on ? "bg-accent text-white shadow-sm" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}>
                {st === "all" ? "All" : st}
                <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${on ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}>{n}</span>
              </button>
            );
          })}
        </div>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, phone, service…" className={`${FIELD} !w-64`} aria-label="Search enquiries" />
      </div>

      <Panel title="Enquiries" count={shown.length}>
        {shown.length === 0 ? (
          <Empty icon={MessageSquareText} title="No enquiries" sub="Enquiries from the website's forms appear here from now on." />
        ) : (
          <div className="overflow-x-auto">
            <table className={TABLE}>
              <thead>
                <tr>
                  <th className={TH}>Name</th>
                  <th className={TH}>Service</th>
                  <th className={TH}>Source</th>
                  <th className={TH}>Status</th>
                  <th className={TH}>Received</th>
                </tr>
              </thead>
              <tbody>
                {shown.map((e) => (
                  <tr key={e.id} className={`${TR} cursor-pointer`} onClick={() => setOpen(e)}>
                    <td className={TD}>
                      <div className="font-semibold text-slate-900">{e.name}</div>
                      <div className="flex gap-2 whitespace-nowrap text-xs" onClick={(ev) => ev.stopPropagation()}>
                        <a href={`tel:${e.phone}`} className="text-accent-dim hover:underline">{e.phone}</a>
                        <a href={wa(e.phone)} target="_blank" rel="noreferrer" className="text-[#3a6729] hover:underline">WhatsApp</a>
                      </div>
                    </td>
                    <td className={TD}>
                      <div className="max-w-[14rem] truncate text-slate-800">{e.service}</div>
                      {e.company && <div className="max-w-[14rem] truncate text-xs text-slate-500">{e.company}</div>}
                    </td>
                    <td className={`${TD} max-w-[14rem] truncate text-xs text-slate-500`}>{e.source}</td>
                    <td className={TD} onClick={(ev) => ev.stopPropagation()}>
                      <select
                        value={e.status}
                        onChange={(ev) => run(`/api/admin/enquiries/${e.id}`, "PATCH", { status: ev.target.value })}
                        aria-label="Status"
                        className={`h-7 cursor-pointer rounded-full border px-2.5 text-xs font-semibold outline-none ${STATUS_CLS[e.status] ?? STATUS_CLS.New}`}
                      >
                        {ENQUIRY_STATUSES.map((st) => <option key={st}>{st}</option>)}
                      </select>
                    </td>
                    <td className={`${TD} whitespace-nowrap text-slate-500`}>{fmtDateTime(e.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Panel>

      {open && <EnquiryDialog e={open} onClose={() => setOpen(null)} />}
    </>
  );
}

function EnquiryDialog({ e, onClose }: { e: Enquiry; onClose: () => void }) {
  const [notes, setNotes] = useState(e.notes);
  const { run, busy, error } = useAction();
  const row = (k: string, v: React.ReactNode) => (
    <div className="grid grid-cols-[7rem_1fr] gap-3 border-b border-slate-100 py-2 text-[13px] last:border-0">
      <dt className="text-slate-500">{k}</dt>
      <dd className="min-w-0 whitespace-pre-wrap break-words text-slate-800">{v || "—"}</dd>
    </div>
  );
  return (
    <Dialog
      title={e.name}
      onClose={onClose}
      footer={
        <>
          <button
            onClick={async () => confirm(`Delete the enquiry from ${e.name}?`) && (await run(`/api/admin/enquiries/${e.id}`, "DELETE")) && onClose()}
            className="mr-auto inline-flex h-10 items-center gap-1.5 rounded-[10px] px-3 text-sm font-semibold text-rose-700 hover:bg-rose-50"
          >
            <Trash2 size={15} /> Delete
          </button>
          <button onClick={async () => (await run(`/api/admin/enquiries/${e.id}`, "PATCH", { notes })) && onClose()} disabled={busy} className={`${QUIET_SM} !h-10 !px-4 !text-sm`}>
            Save notes
          </button>
        </>
      }
    >
      <dl>
        {row("Phone", <span className="flex gap-3"><a href={`tel:${e.phone}`} className="inline-flex items-center gap-1 text-accent-dim"><Phone size={13} />{e.phone}</a><a href={wa(e.phone)} target="_blank" rel="noreferrer" className="text-[#3a6729]">WhatsApp</a></span>)}
        {row("Email", e.email && <a href={`mailto:${e.email}`} className="text-accent-dim">{e.email}</a>)}
        {row("Company", e.company)}
        {row("Service", e.service)}
        {row("Budget", e.budget)}
        {row("Source", e.source)}
        {row("Message", e.message)}
        {row("Received", fmtDateTime(e.createdAt))}
      </dl>
      <label className={`${LABEL} mt-4`} htmlFor="e-notes">Team notes</label>
      <textarea id="e-notes" rows={3} value={notes} onChange={(ev) => setNotes(ev.target.value)} className={`${FIELD} resize-none`} />
      <Problem message={error} />
    </Dialog>
  );
}
