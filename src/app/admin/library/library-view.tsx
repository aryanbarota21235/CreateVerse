"use client";

import { useState } from "react";
import { BookText, Pencil, Plus, Trash2, X } from "lucide-react";
import { FIELD, LABEL, PLAIN, PRIMARY, QUIET_SM } from "@/lib/reviews/look";
import type { LibraryType } from "@/lib/review-library";
import { Dialog, DialogButtons, Empty, PageHead, Panel, Problem, useAction } from "../ui";

type Rating = 1 | 2 | 3 | 4 | 5;
const RATINGS: Rating[] = [5, 4, 3, 2, 1];
const total = (t: LibraryType) => RATINGS.reduce((n, r) => n + (t.lines[r]?.length ?? 0), 0);

const RATING_NOTE: Record<Rating, string> = {
  5: "Delighted customer. A few lines can say \"best {kw} in {city}\"; most 5-star reviews get one added automatically.",
  4: "Happy, with one small thing that could be better, said kindly.",
  3: "Average: something was fine, something needs to improve.",
  2: "Disappointed. No praise words.",
  1: "Bad experience, said politely. Never \"good\", \"best\" or \"recommend\".",
};

/*
 * Backup reviews: short lines per type and star rating. A customer sees three lines of the same
 * rating joined into one review, with placeholders filled in.
 */
export default function LibraryView({ types, usedBy }: { types: LibraryType[]; usedBy: Record<string, string[]> }) {
  const [selectedId, setSelectedId] = useState(types[0]?.id ?? "");
  const [dirty, setDirty] = useState(false);
  const [dialog, setDialog] = useState<"new" | "rename" | null>(null);
  const selected = types.find((t) => t.id === selectedId) ?? types[0];

  const select = (id: string) => {
    if (id === selected?.id) return;
    if (dirty && !confirm("You have unsaved changes. Leave them?")) return;
    setDirty(false);
    setSelectedId(id);
  };

  return (
    <>
      <PageHead
        title="Backup reviews"
        sub="Ready-made English review lines, used only when the AI can't write. Each review a customer sees joins three lines of the same star rating."
        actions={
          <button onClick={() => setDialog("new")} className={PRIMARY}>
            <Plus size={16} /> New type
          </button>
        }
      />
      {types.length === 0 || !selected ? (
        <Panel title="Types">
          <Empty icon={BookText} title="No types yet" sub="Add a type to write backup reviews." />
        </Panel>
      ) : (
        <div className="grid items-start gap-5 lg:grid-cols-[17rem_1fr]">
          <Panel title="Types" count={types.length}>
            <ul className="max-h-[70vh] overflow-y-auto p-2">
              {types.map((t) => {
                const on = t.id === selected.id;
                return (
                  <li key={t.id}>
                    <button
                      onClick={() => select(t.id)}
                      className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-left text-[13px] transition-colors ${
                        on ? "bg-accent/10 font-semibold text-[#102A43]" : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <span className="min-w-0 truncate">{t.label}</span>
                      <span className="shrink-0 text-xs text-slate-400">{total(t)}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Panel>
          <Editor key={selected.id} type={selected} usedBy={usedBy[selected.key] ?? []} onDirty={setDirty} onRename={() => setDialog("rename")} />
        </div>
      )}
      {dialog === "new" && (
        <NewTypeDialog
          types={types}
          onClose={() => setDialog(null)}
          onCreated={(id) => {
            setDirty(false);
            setSelectedId(id);
          }}
        />
      )}
      {dialog === "rename" && selected && <RenameDialog type={selected} onClose={() => setDialog(null)} />}
    </>
  );
}

function Editor({ type, usedBy, onDirty, onRename }: { type: LibraryType; usedBy: string[]; onDirty: (d: boolean) => void; onRename: () => void }) {
  const [rating, setRating] = useState<Rating>(5);
  const [lines, setLines] = useState<Record<Rating, string[]>>(() => ({ ...{ 1: [], 2: [], 3: [], 4: [], 5: [] }, ...type.lines }));
  const [changed, setChanged] = useState(false);
  const { run, busy, error } = useAction();
  const del = useAction();

  const change = (next: string[]) => {
    setLines({ ...lines, [rating]: next });
    setChanged(true);
    onDirty(true);
  };
  const current = lines[rating];

  async function save() {
    const clean = Object.fromEntries(RATINGS.map((r) => [r, lines[r].map((l) => l.trim()).filter(Boolean)]));
    if (await run(`/api/admin/library/${type.id}`, "PATCH", { lines: clean })) {
      setLines(clean as Record<Rating, string[]>);
      setChanged(false);
      onDirty(false);
    }
  }

  async function remove() {
    const note = usedBy.length ? ` ${usedBy.join(", ")} will use the general set instead.` : "";
    if (confirm(`Delete "${type.label}" and all its lines?${note}`)) {
      onDirty(false);
      await del.run(`/api/admin/library/${type.id}`, "DELETE");
    }
  }

  return (
    <Panel
      title={type.label}
      actions={
        <>
          <button onClick={onRename} className={QUIET_SM}>
            <Pencil size={13} /> Rename
          </button>
          {type.key !== "general" && (
            <button onClick={remove} className={`${QUIET_SM} hover:!text-rose-700`}>
              <Trash2 size={13} /> Delete
            </button>
          )}
        </>
      }
    >
      <div className="grid gap-4 p-5">
        <p className="text-xs text-slate-500">
          {usedBy.length ? <>Used by: <span className="font-medium text-slate-700">{usedBy.join(", ")}</span>.</> : "No category uses this type yet."}{" "}
          {type.key === "general" && "Also the fallback for any category without a type."}
        </p>

        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Star rating">
          {RATINGS.map((r) => (
            <button
              key={r}
              role="tab"
              aria-selected={r === rating}
              onClick={() => setRating(r)}
              className={`inline-flex h-9 items-center gap-1.5 rounded-lg px-3 text-[13px] font-semibold ring-1 transition-colors ${
                r === rating ? "bg-[#102A43] text-white ring-[#102A43]" : "bg-white text-slate-600 ring-slate-200 hover:ring-slate-300"
              }`}
            >
              {r}★ <span className={r === rating ? "text-white/60" : "text-slate-400"}>{lines[r].length}</span>
            </button>
          ))}
        </div>

        <div className="rounded-xl bg-[#F5F9FD] px-4 py-3 text-xs leading-relaxed text-slate-600">
          <p className="font-semibold text-[#102A43]">{RATING_NOTE[rating]}</p>
          <p className="mt-1">
            Placeholders: <code className="font-semibold">{"{name}"}</code> business name, <code className="font-semibold">{"{city}"}</code> city,{" "}
            <code className="font-semibold">{"{kw}"}</code> a keyword, <code className="font-semibold">{"{thing}"}</code> one of its highlights. A line is
            skipped for a client who has no value for its placeholder. Keep lines to one or two sentences; write at least 6 per rating.
          </p>
        </div>

        <ol className="grid gap-2">
          {current.map((line, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-6 shrink-0 pt-2.5 text-right text-xs text-slate-400">{i + 1}</span>
              <textarea
                rows={2}
                value={line}
                maxLength={300}
                autoFocus={i === current.length - 1 && line === ""}
                onChange={(e) => change(current.map((l, j) => (j === i ? e.target.value : l)))}
                className={`${FIELD} !min-h-0 resize-y !py-2 text-[13px] [field-sizing:content]`}
                aria-label={`${rating}-star line ${i + 1}`}
              />
              <button
                onClick={() => change(current.filter((_, j) => j !== i))}
                aria-label={`Remove line ${i + 1}`}
                className="mt-1.5 flex size-8 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-rose-50 hover:text-rose-700"
              >
                <X size={16} />
              </button>
            </li>
          ))}
        </ol>
        {current.length === 0 && <p className="text-center text-sm text-slate-500">No {rating}-star lines yet.</p>}
        <div>
          <button onClick={() => change([...current, ""])} className={QUIET_SM}>
            <Plus size={13} /> Add a {rating}-star line
          </button>
        </div>
        <Problem message={error || del.error} />
      </div>
      <div className="sticky bottom-0 flex items-center justify-end gap-2 border-t border-[#102A43]/[0.06] bg-white/95 px-5 py-3 backdrop-blur">
        {changed && <span className="mr-auto text-xs font-medium text-amber-700">Unsaved changes</span>}
        <button
          disabled={!changed || busy}
          onClick={() => {
            setLines({ ...{ 1: [], 2: [], 3: [], 4: [], 5: [] }, ...type.lines });
            setChanged(false);
            onDirty(false);
          }}
          className={`${PLAIN} disabled:opacity-40`}
        >
          Discard
        </button>
        <button disabled={!changed || busy} onClick={save} className={`${PRIMARY} disabled:opacity-50`}>
          {busy ? "Saving…" : "Save changes"}
        </button>
      </div>
    </Panel>
  );
}

function NewTypeDialog({ types, onClose, onCreated }: { types: LibraryType[]; onClose: () => void; onCreated: (id: string) => void }) {
  const [label, setLabel] = useState("");
  const [copyFrom, setCopyFrom] = useState("");
  const { run, busy, error } = useAction();

  async function save(e: React.FormEvent) {
    e.preventDefault();
    const res = await run("/api/admin/library", "POST", { label, copyFrom });
    const id = (res?.type as { id?: string } | undefined)?.id;
    if (id) {
      onCreated(id);
      onClose();
    }
  }

  return (
    <Dialog title="New backup review type" onClose={onClose} onSubmit={save} footer={<DialogButtons onClose={onClose} busy={busy} label="Add type" />}>
      <div className="grid gap-4">
        <div>
          <label className={LABEL} htmlFor="l-name">Name</label>
          <input id="l-name" required autoFocus value={label} onChange={(e) => setLabel(e.target.value)} className={FIELD} placeholder="Jewellery shop" />
        </div>
        <div>
          <label className={LABEL} htmlFor="l-copy">Start with</label>
          <select id="l-copy" value={copyFrom} onChange={(e) => setCopyFrom(e.target.value)} className={FIELD}>
            <option value="">Empty, I&apos;ll write the lines</option>
            {types.map((t) => (
              <option key={t.key} value={t.key}>A copy of {t.label}</option>
            ))}
          </select>
        </div>
        <p className="text-xs text-slate-500">Then pick this type for a category in Categories.</p>
      </div>
      <Problem message={error} />
    </Dialog>
  );
}

function RenameDialog({ type, onClose }: { type: LibraryType; onClose: () => void }) {
  const [label, setLabel] = useState(type.label);
  const { run, busy, error } = useAction();

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (await run(`/api/admin/library/${type.id}`, "PATCH", { label })) onClose();
  }

  return (
    <Dialog title="Rename type" onClose={onClose} onSubmit={save} footer={<DialogButtons onClose={onClose} busy={busy} label="Save" />}>
      <label className={LABEL} htmlFor="l-rename">Name</label>
      <input id="l-rename" required autoFocus value={label} onChange={(e) => setLabel(e.target.value)} className={FIELD} />
      <Problem message={error} />
    </Dialog>
  );
}
