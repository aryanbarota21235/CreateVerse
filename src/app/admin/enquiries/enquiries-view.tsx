"use client";

import { useState } from "react";
import { MessageSquareText, Phone, Trash2 } from "lucide-react";
import { FIELD, LABEL, QUIET_SM } from "@/lib/reviews/look";
import type { Enquiry } from "@/lib/reviews/types";
import { Dialog, Empty, PageHead, Panel, Problem, TABLE, TD, TH, TR, fmtDateTime, useAction } from "../ui";

const wa = (phone: string) => `https://wa.me/${phone.replace(/\D/g, "").replace(/^(?=\d{10}$)/, "91")}`;

export default function EnquiriesView({ enquiries }: { enquiries: Enquiry[] }) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<Enquiry | null>(null);
  const { run } = useAction();

  // Two states only: still to handle, or done. Done ones sink to the bottom.
  const isDone = (e: Enquiry) => e.status !== "New";
  const needle = q.trim().toLowerCase();
  const shown = enquiries
    .filter((e) => !needle || [e.name, e.phone, e.email, e.company, e.service, e.message].some((v) => v.toLowerCase().includes(needle)))
    .sort((a, b) => Number(isDone(a)) - Number(isDone(b)));
  const toHandle = enquiries.filter((e) => !isDone(e)).length;

  return (
    <>
      <PageHead title="Enquiries" sub="Every enquiry form on createverse.in. Tick Done once you've called them." />

      <Panel
        title="To call"
        count={toHandle}
        actions={<input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" className={`${FIELD} !min-h-9 !w-48 !py-1.5`} aria-label="Search enquiries" />}
      >
        {shown.length === 0 ? (
          <Empty icon={MessageSquareText} title="No enquiries" sub="Enquiries from the website's forms appear here." />
        ) : (
          <div className="overflow-x-auto">
            <table className={TABLE}>
              <thead>
                <tr>
                  <th className={TH}>Done</th>
                  <th className={TH}>Name</th>
                  <th className={TH}>Service</th>
                  <th className={TH}>Received</th>
                </tr>
              </thead>
              <tbody>
                {shown.map((e) => (
                  <tr key={e.id} className={`${TR} cursor-pointer ${isDone(e) ? "opacity-50" : ""}`} onClick={() => setOpen(e)}>
                    <td className={`${TD} w-12`} onClick={(ev) => ev.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={isDone(e)}
                        onChange={() => run(`/api/admin/enquiries/${e.id}`, "PATCH", { status: isDone(e) ? "New" : "Contacted" })}
                        aria-label={`Mark ${e.name} as done`}
                        className="size-4 cursor-pointer accent-[#0284C7]"
                      />
                    </td>
                    <td className={TD}>
                      <div className="font-semibold text-slate-900">{e.name}</div>
                      <div className="flex gap-2 whitespace-nowrap text-xs" onClick={(ev) => ev.stopPropagation()}>
                        <a href={`tel:${e.phone}`} className="text-accent-dim hover:underline">{e.phone}</a>
                        <a href={wa(e.phone)} target="_blank" rel="noreferrer" className="text-[#3a6729] hover:underline">WhatsApp</a>
                      </div>
                    </td>
                    <td className={TD}>
                      <div className="max-w-[16rem] truncate text-slate-800">{e.service}</div>
                      {e.company && <div className="max-w-[16rem] truncate text-xs text-slate-500">{e.company}</div>}
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
