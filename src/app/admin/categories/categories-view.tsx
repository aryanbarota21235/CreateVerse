"use client";

import { useState } from "react";
import { Pencil, Plus, Shapes, Trash2 } from "lucide-react";
import { FIELD, LABEL, PRIMARY } from "@/lib/reviews/look";
import Link from "next/link";
import type { Category } from "@/lib/categories";
import { Dialog, DialogButtons, Empty, PageHead, Panel, Problem, TABLE, TD, TH, TR, useAction } from "../ui";

type TypeOption = { key: string; label: string };

export default function CategoriesView({ categories, used, types }: { categories: Category[]; used: Record<string, number>; types: TypeOption[] }) {
  const libraryLabel = (key: string) => types.find((t) => t.key === key)?.label ?? types.find((t) => t.key === "general")?.label ?? "General";
  const [editing, setEditing] = useState<Category | "new" | null>(null);
  const { run } = useAction();

  async function remove(c: Category) {
    const n = used[c.name] ?? 0;
    const warn = n ? ` ${n} client(s) use it; they keep the name but lose its keywords and topics.` : "";
    if (confirm(`Delete the category "${c.name}"?${warn}`)) await run(`/api/admin/categories/${c.id}`, "DELETE");
  }

  return (
    <>
      <PageHead
        title="Categories"
        sub="Types of business. Each one tells the review writer what customers care about and which keywords to use."
        actions={
          <button onClick={() => setEditing("new")} className={PRIMARY}>
            <Plus size={16} /> Add category
          </button>
        }
      />
      <Panel title="All categories" count={categories.length}>
        {categories.length === 0 ? (
          <Empty icon={Shapes} title="No categories" sub="Add the kinds of business you onboard." />
        ) : (
          <div className="overflow-x-auto">
            <table className={TABLE}>
              <thead>
                <tr>
                  <th className={TH}>Category</th>
                  <th className={TH}>Keywords</th>
                  <th className={TH}>Backup reviews</th>
                  <th className={`${TH} text-right`}>Clients</th>
                  <th className={TH}><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                {categories.map((c) => (
                  <tr key={c.id} className={TR}>
                    <td className={TD}>
                      <div className="font-semibold text-[#102A43]">{c.name}</div>
                      <div className="line-clamp-1 max-w-md text-xs text-slate-500">{c.hint || "No topics set"}</div>
                    </td>
                    <td className={`${TD} max-w-[16rem] text-xs text-slate-600`}>{c.keywords || <span className="text-slate-400">None</span>}</td>
                    <td className={`${TD} whitespace-nowrap text-xs text-slate-600`}>{libraryLabel(c.library)}</td>
                    <td className={`${TD} text-right`}>{used[c.name] ?? 0}</td>
                    <td className={TD}>
                      <div className="flex justify-end gap-0.5">
                        <button onClick={() => setEditing(c)} aria-label={`Edit ${c.name}`} className="flex size-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900">
                          <Pencil size={16} />
                        </button>
                        <button onClick={() => remove(c)} aria-label={`Delete ${c.name}`} className="flex size-8 items-center justify-center rounded-lg text-slate-400 hover:bg-rose-50 hover:text-rose-700">
                          <Trash2 size={16} />
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
      {editing && <CategoryDialog category={editing === "new" ? null : editing} types={types} onClose={() => setEditing(null)} />}
    </>
  );
}

function CategoryDialog({ category, types, onClose }: { category: Category | null; types: TypeOption[]; onClose: () => void }) {
  const [f, setF] = useState({
    name: category?.name ?? "",
    hint: category?.hint ?? "",
    keywords: category?.keywords ?? "",
    library: category?.library ?? "general",
  });
  const { run, busy, error } = useAction();
  const hint = "mt-1 text-xs text-slate-500";

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (await run(category ? `/api/admin/categories/${category.id}` : "/api/admin/categories", category ? "PATCH" : "POST", f)) onClose();
  }

  return (
    <Dialog
      title={category ? `Edit ${category.name}` : "Add a category"}
      onClose={onClose}
      onSubmit={save}
      footer={<DialogButtons onClose={onClose} busy={busy} label={category ? "Save category" : "Add category"} />}
    >
      <div className="grid gap-4">
        <div>
          <label className={LABEL} htmlFor="c-name">Name</label>
          <input id="c-name" required autoFocus value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} className={FIELD} placeholder="Mobile / Laptop / TV Repair" />
          {category && f.name !== category.name && <p className="mt-1 text-xs font-medium text-amber-700">Clients using the old name keep it; pick the new one in their details.</p>}
        </div>
        <div>
          <label className={LABEL} htmlFor="c-kw">Keywords (comma separated)</label>
          <input id="c-kw" value={f.keywords} onChange={(e) => setF({ ...f, keywords: e.target.value })} className={FIELD} placeholder="mobile repair shop, laptop repair, TV repair" />
          <p className={hint}>Used in reviews like &quot;best mobile repair shop in Karnal&quot; when a client has no keywords of its own.</p>
        </div>
        <div>
          <label className={LABEL} htmlFor="c-hint">What customers care about (most important first)</label>
          <textarea id="c-hint" rows={3} value={f.hint} onChange={(e) => setF({ ...f, hint: e.target.value })} className={`${FIELD} resize-none`} placeholder="the device first: fixed properly, works like new, done on time; then honest price, genuine parts" />
          <p className={hint}>The AI writes reviews mostly about these.</p>
        </div>
        <div>
          <label className={LABEL} htmlFor="c-lib">Backup reviews (used when AI is unavailable)</label>
          <select id="c-lib" value={f.library} onChange={(e) => setF({ ...f, library: e.target.value })} className={FIELD}>
            {types.map((t) => (
              <option key={t.key} value={t.key}>{t.label}</option>
            ))}
          </select>
          <p className={hint}>
            Ready-made reviews used only when the AI can&apos;t write. Edit them in{" "}
            <Link href="/admin/library" className="font-semibold text-accent-dim hover:underline">Backup reviews</Link>.
          </p>
        </div>
      </div>
      <Problem message={error} />
    </Dialog>
  );
}
