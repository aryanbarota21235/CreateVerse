"use client";

import { useState } from "react";
import { ArrowRightCircle, Inbox, MapPin, Phone, X } from "lucide-react";
import { FIELD, LABEL, PRIMARY, QUIET_SM } from "@/lib/reviews/look";
import { inr, type Plan, type Signup } from "@/lib/reviews/types";
import { Dialog, Empty, PageHead, Panel, Problem, TABLE, TD, TH, TR, fmtDate, useAction } from "../ui";
import BusinessDialog, { formFrom } from "../clients/business-dialog";

const wa = (phone: string) => `https://wa.me/${phone.replace(/\D/g, "").replace(/^(?=\d{10}$)/, "91")}`;

/*
 * Sign-ups waiting for a call. Two outcomes only: "Make client" (it moves to Clients) or
 * "Not interested" (it disappears from here).
 */
export default function SignupsView({ signups, plans }: { signups: Signup[]; plans: Plan[] }) {
  const [open, setOpen] = useState<Signup | null>(null);
  const [converting, setConverting] = useState<Signup | null>(null);
  const { run } = useAction();

  const waiting = signups.filter((s) => s.status === "New" || s.status === "Contacted");
  const planLabel = (id: string) => {
    const p = plans.find((x) => x.id === id);
    return p ? `${p.name}, ${inr(p.priceInr)}` : "Not chosen";
  };
  const dismiss = (s: Signup) => run(`/api/admin/signups/${s.id}`, "PATCH", { status: "Rejected" });

  return (
    <>
      <PageHead title="New sign-ups" sub="Businesses that filled the form on the website. Call them, then make them a client." />

      <Panel title="Waiting for a call" count={waiting.length}>
        {waiting.length === 0 ? (
          <Empty icon={Inbox} title="All caught up" sub="New sign-ups from the website show up here." />
        ) : (
          <div className="overflow-x-auto">
            <table className={TABLE}>
              <thead>
                <tr>
                  <th className={TH}>Business</th>
                  <th className={TH}>Contact</th>
                  <th className={TH}>Plan</th>
                  <th className={TH}>Received</th>
                  <th className={TH}><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                {waiting.map((s) => (
                  <tr key={s.id} className={`${TR} cursor-pointer`} onClick={() => setOpen(s)}>
                    <td className={TD}>
                      <div className="font-semibold text-slate-900">{s.businessName}</div>
                      <div className="whitespace-nowrap text-xs text-slate-500">
                        {s.category}
                        {s.city ? `, ${s.city}` : ""}
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
                    <td className={`${TD} whitespace-nowrap text-slate-500`}>{fmtDate(s.createdAt)}</td>
                    <td className={TD} onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-end gap-1">
                        <button onClick={() => setConverting(s)} className={QUIET_SM}>
                          <ArrowRightCircle size={14} /> Make client
                        </button>
                        <button
                          onClick={() => dismiss(s)}
                          title="Not interested"
                          aria-label="Not interested"
                          className="flex size-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Panel>

      {open && (
        <SignupDialog
          s={open}
          planLabel={planLabel(open.planId)}
          onClose={() => setOpen(null)}
          onConvert={() => {
            setConverting(open);
            setOpen(null);
          }}
        />
      )}
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
                <a href={converting.mapsLink} target="_blank" rel="noreferrer" className="break-all font-medium text-accent-dim hover:underline">
                  {converting.mapsLink}
                </a>
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
          <button
            onClick={async () => (await run(`/api/admin/signups/${s.id}`, "PATCH", { status: "Rejected" })) && onClose()}
            className="mr-auto inline-flex h-10 items-center gap-1.5 rounded-[10px] px-3 text-sm font-semibold text-slate-600 hover:bg-slate-100"
          >
            <X size={15} /> Not interested
          </button>
          <button onClick={async () => (await run(`/api/admin/signups/${s.id}`, "PATCH", { notes })) && onClose()} disabled={busy} className={`${QUIET_SM} !h-10 !px-4 !text-sm`}>
            Save notes
          </button>
          <button onClick={onConvert} className={PRIMARY}>
            <ArrowRightCircle size={16} /> Make client
          </button>
        </>
      }
    >
      <dl>
        {row("Contact", s.contactName)}
        {row(
          "Phone",
          <span className="flex flex-wrap gap-3">
            <a href={`tel:${s.phone}`} className="inline-flex items-center gap-1 text-accent-dim">
              <Phone size={13} />
              {s.phone}
            </a>
            <a href={wa(s.phone)} target="_blank" rel="noreferrer" className="text-[#3a6729]">
              WhatsApp
            </a>
          </span>,
        )}
        {row("Email", s.email && <a href={`mailto:${s.email}`} className="text-accent-dim">{s.email}</a>)}
        {row("Business type", s.category)}
        {row("City", s.city)}
        {row("Plan chosen", planLabel)}
        {row(
          "Google listing",
          s.mapsLink && (
            <a href={s.mapsLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 break-all text-accent-dim">
              <MapPin size={13} />
              {s.mapsLink}
            </a>
          ),
        )}
        {row("Message", s.message)}
        {row("Received", fmtDate(s.createdAt))}
      </dl>
      <label className={`${LABEL} mt-4`} htmlFor="s-notes">Notes</label>
      <textarea id="s-notes" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} className={`${FIELD} resize-none`} placeholder="Called on Monday, pays by UPI on Friday" />
      <Problem message={error} />
    </Dialog>
  );
}
