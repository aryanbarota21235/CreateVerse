"use client";

import { useState } from "react";
import { Pencil, Plus, Tags, Trash2 } from "lucide-react";
import { FIELD, LABEL, PRIMARY } from "@/lib/reviews/look";
import { inr, type Plan } from "@/lib/reviews/types";
import { Dialog, DialogButtons, Empty, PageHead, Panel, Problem, Status, TABLE, TD, TH, TR, useAction } from "../ui";

export default function PlansView({ plans, used }: { plans: Plan[]; used: Record<string, number> }) {
  const [editing, setEditing] = useState<Plan | "new" | null>(null);
  const { run } = useAction();

  async function remove(p: Plan) {
    if (used[p.id]) return alert(`${used[p.id]} client(s) are on ${p.name}. Hide it instead of deleting.`);
    if (confirm(`Delete the ${p.name} plan?`)) await run(`/api/admin/plans/${p.id}`, "DELETE");
  }

  return (
    <>
      <PageHead
        title="Plans & pricing"
        sub="Live plans show on the public sign-up form. Prices are what you charge; payments are collected by your team."
        actions={<button onClick={() => setEditing("new")} className={PRIMARY}><Plus size={16} /> Add plan</button>}
      />
      <Panel title="Plans" count={plans.length}>
        {plans.length === 0 ? (
          <Empty icon={Tags} title="No plans yet" sub="Add at least one plan so businesses can pick it on the sign-up form." action={<button onClick={() => setEditing("new")} className={PRIMARY}><Plus size={16} /> Add plan</button>} />
        ) : (
          <div className="overflow-x-auto">
            <table className={TABLE}>
              <thead>
                <tr>
                  <th className={TH}>Plan</th>
                  <th className={`${TH} text-right`}>Price</th>
                  <th className={`${TH} text-right`}>Months</th>
                  <th className={`${TH} text-right`}>Per month</th>
                  <th className={`${TH} text-right`}>Clients</th>
                  <th className={TH}>On form</th>
                  <th className={TH}><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                {plans.map((p) => (
                  <tr key={p.id} className={TR}>
                    <td className={TD}>
                      <div className="font-semibold text-slate-900">{p.name}</div>
                      <div className="max-w-md text-xs text-slate-500">{p.description}</div>
                    </td>
                    <td className={`${TD} text-right font-semibold text-slate-900`}>{inr(p.priceInr)}</td>
                    <td className={`${TD} text-right`}>{p.months}</td>
                    <td className={`${TD} text-right text-slate-500`}>{inr(Math.round(p.priceInr / p.months))}</td>
                    <td className={`${TD} text-right`}>{used[p.id] ?? 0}</td>
                    <td className={TD}>{p.active ? <Status tone="good">Live</Status> : <Status>Hidden</Status>}</td>
                    <td className={TD}>
                      <div className="flex justify-end gap-0.5">
                        <button onClick={() => setEditing(p)} aria-label="Edit" className="flex size-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900"><Pencil size={16} /></button>
                        <button onClick={() => remove(p)} aria-label="Delete" className="flex size-8 items-center justify-center rounded-lg text-slate-400 hover:bg-rose-50 hover:text-rose-700"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Panel>
      {editing && <PlanDialog plan={editing === "new" ? null : editing} onClose={() => setEditing(null)} />}
    </>
  );
}

function PlanDialog({ plan, onClose }: { plan: Plan | null; onClose: () => void }) {
  const [f, setF] = useState({
    name: plan?.name ?? "",
    priceInr: plan ? String(plan.priceInr) : "",
    months: plan ? String(plan.months) : "12",
    description: plan?.description ?? "",
    active: plan?.active ?? true,
  });
  const { run, busy, error } = useAction();

  async function save(e: React.FormEvent) {
    e.preventDefault();
    const ok = await run(plan ? `/api/admin/plans/${plan.id}` : "/api/admin/plans", plan ? "PATCH" : "POST", f);
    if (ok) onClose();
  }

  return (
    <Dialog title={plan ? `Edit ${plan.name}` : "Add a plan"} onClose={onClose} onSubmit={save} footer={<DialogButtons onClose={onClose} busy={busy} label={plan ? "Save plan" : "Add plan"} />}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={LABEL} htmlFor="p-name">Plan name</label>
          <input id="p-name" required autoFocus value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} className={FIELD} placeholder="Yearly" />
        </div>
        <div>
          <label className={LABEL} htmlFor="p-price">Price (₹)</label>
          <input id="p-price" required inputMode="numeric" value={f.priceInr} onChange={(e) => setF({ ...f, priceInr: e.target.value.replace(/\D/g, "") })} className={FIELD} placeholder="9999" />
        </div>
        <div>
          <label className={LABEL} htmlFor="p-months">Covers (months)</label>
          <input id="p-months" required inputMode="numeric" value={f.months} onChange={(e) => setF({ ...f, months: e.target.value.replace(/\D/g, "") })} className={FIELD} />
        </div>
        <div className="sm:col-span-2">
          <label className={LABEL} htmlFor="p-desc">What's included (shown on the form)</label>
          <textarea id="p-desc" rows={2} value={f.description} onChange={(e) => setF({ ...f, description: e.target.value })} className={`${FIELD} resize-none`} placeholder="1 QR code, printed poster, AI suggestions, monthly report" />
        </div>
        <label className="flex items-center gap-2 text-sm text-slate-700 sm:col-span-2">
          <input type="checkbox" checked={f.active} onChange={(e) => setF({ ...f, active: e.target.checked })} className="size-4 accent-[#0284C7]" />
          Show this plan on the public sign-up form
        </label>
      </div>
      <Problem message={error} />
    </Dialog>
  );
}
