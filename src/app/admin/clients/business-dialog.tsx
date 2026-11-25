"use client";

import { useState } from "react";
import { FIELD, LABEL } from "@/lib/reviews/look";
import { MAX_LANGUAGES, REVIEW_CATEGORIES, REVIEW_LANGUAGES, inr, slugify, type Plan, type ReviewBusiness } from "@/lib/reviews/types";
import { Dialog, DialogButtons, Problem, useAction } from "../ui";

export type BusinessForm = {
  name: string;
  slug: string;
  category: string;
  city: string;
  highlights: string;
  languages: string[];
  placeId: string;
  reviewUrl: string;
  contactName: string;
  phone: string;
  email: string;
  planId: string;
};

export const formFrom = (b: Partial<ReviewBusiness>): BusinessForm => ({
  name: b.name ?? "",
  slug: b.slug ?? slugify(b.name ?? ""),
  category: b.category ?? REVIEW_CATEGORIES[0],
  city: b.city ?? "Karnal",
  highlights: b.highlights ?? "",
  languages: b.languages?.length ? b.languages : ["English"],
  placeId: b.placeId ?? "",
  reviewUrl: b.reviewUrl ?? "",
  contactName: b.contactName ?? "",
  phone: b.phone ?? "",
  email: b.email ?? "",
  planId: b.planId ?? "",
});

/** Add / edit a review client. Also used to turn a sign-up into a client. */
export default function BusinessDialog({
  title,
  initial,
  plans,
  url,
  method,
  submitLabel,
  slugLocked,
  note,
  onClose,
}: {
  title: string;
  initial: BusinessForm;
  plans: Plan[];
  url: string;
  method: "POST" | "PATCH";
  submitLabel: string;
  /** Existing clients: changing the link breaks printed QR codes, so warn. */
  slugLocked?: string;
  note?: React.ReactNode;
  onClose: () => void;
}) {
  const [f, setF] = useState(initial);
  const [slugTouched, setSlugTouched] = useState(Boolean(slugLocked));
  const { run, busy, error } = useAction();

  const [otherLang, setOtherLang] = useState("");
  function toggleLang(l: string) {
    setF((p) => {
      if (p.languages.includes(l)) return p.languages.length > 1 ? { ...p, languages: p.languages.filter((x) => x !== l) } : p;
      return p.languages.length < MAX_LANGUAGES ? { ...p, languages: [...p.languages, l] } : p;
    });
  }
  function addOther() {
    const l = otherLang.trim().replace(/\b\w/g, (c) => c.toUpperCase());
    if (l && !f.languages.includes(l)) toggleLang(l);
    setOtherLang("");
  }

  const set = (k: Exclude<keyof BusinessForm, "languages">) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const v = e.target.value;
    setF((p) => ({ ...p, [k]: v, ...(k === "name" && !slugTouched ? { slug: slugify(v) } : {}) }));
  };

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (await run(url, method, f)) onClose();
  }

  const hint = "mt-1 text-xs text-slate-500";
  const group = "rounded-xl border border-slate-200 bg-slate-50/60 p-4 sm:col-span-2";
  const groupTitle = "text-xs font-bold uppercase tracking-wider text-stone-500";

  return (
    <Dialog title={title} onClose={onClose} onSubmit={save} wide footer={<DialogButtons onClose={onClose} busy={busy} label={submitLabel} />}>
      {note}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={LABEL} htmlFor="b-name">Business name</label>
          <input id="b-name" required autoFocus value={f.name} onChange={set("name")} className={FIELD} placeholder="Sharma Sweets" />
        </div>
        <div>
          <label className={LABEL} htmlFor="b-cat">Category</label>
          <select id="b-cat" value={f.category} onChange={set("category")} className={FIELD}>
            {REVIEW_CATEGORIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className={LABEL} htmlFor="b-slug">QR link</label>
          <div className="flex min-h-10 items-center rounded-lg border border-slate-300 bg-white text-[14px] focus-within:border-accent focus-within:ring-2 focus-within:ring-sky-100">
            <span className="pl-3 text-slate-400">/r/</span>
            <input
              id="b-slug"
              value={f.slug}
              onChange={(e) => {
                setSlugTouched(true);
                setF((p) => ({ ...p, slug: slugify(e.target.value) }));
              }}
              className="w-full rounded-lg bg-transparent px-1 py-2 outline-none"
            />
          </div>
          {slugLocked && f.slug !== slugLocked && <p className="mt-1 text-xs font-medium text-amber-700">QR codes already printed will stop working.</p>}
        </div>

        <div className={group}>
          <p className={groupTitle}>Contact</p>
          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            <div>
              <label className={LABEL} htmlFor="b-cn">Name</label>
              <input id="b-cn" value={f.contactName} onChange={set("contactName")} className={FIELD} />
            </div>
            <div>
              <label className={LABEL} htmlFor="b-ph">Phone / WhatsApp</label>
              <input id="b-ph" type="tel" value={f.phone} onChange={set("phone")} className={FIELD} />
            </div>
            <div>
              <label className={LABEL} htmlFor="b-em">Email</label>
              <input id="b-em" type="email" value={f.email} onChange={set("email")} className={FIELD} />
            </div>
          </div>
        </div>

        <div>
          <label className={LABEL} htmlFor="b-plan">Plan</label>
          <select id="b-plan" value={f.planId} onChange={set("planId")} className={FIELD}>
            <option value="">No plan yet</option>
            {plans.map((p) => (
              <option key={p.id} value={p.id}>{p.name} · {inr(p.priceInr)} / {p.months} mo</option>
            ))}
          </select>
          <p className={hint}>The QR goes live once you record a payment.</p>
        </div>
        <div>
          <label className={LABEL} htmlFor="b-city">City</label>
          <input id="b-city" value={f.city} onChange={set("city")} className={FIELD} />
        </div>
        <div className="sm:col-span-2">
          <span className={LABEL}>Review languages</span>
          <div className="flex flex-wrap gap-1.5">
            {[...new Set([...f.languages, ...REVIEW_LANGUAGES])].map((l) => {
              const on = f.languages.includes(l);
              const first = f.languages[0] === l;
              return (
                <button
                  type="button"
                  key={l}
                  onClick={() => toggleLang(l)}
                  aria-pressed={on}
                  className={`h-8 rounded-full border px-3 text-xs font-semibold transition-colors ${
                    on ? "border-accent bg-sky-50 text-accent-dim" : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                  }`}
                >
                  {l}
                  {first && <span className="ml-1 font-normal text-slate-500">(main)</span>}
                </button>
              );
            })}
          </div>
          <div className="mt-2 flex gap-2">
            <input
              value={otherLang}
              onChange={(e) => setOtherLang(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addOther())}
              className={`${FIELD} !w-56`}
              placeholder="Another language"
              aria-label="Add another language"
            />
            <button type="button" onClick={addOther} className="h-10 rounded-[10px] px-3 text-sm font-semibold text-accent-dim hover:bg-sky-50">
              Add
            </button>
          </div>
          <p className={hint}>
            Customers choose from these on the review page. The first one you pick is the main language. Up to {MAX_LANGUAGES}. Without an AI key, only
            English, Hindi and Hinglish are written; others show in English.
          </p>
        </div>
        <div className="sm:col-span-2">
          <label className={LABEL} htmlFor="b-hl">What customers can mention</label>
          <textarea id="b-hl" rows={2} value={f.highlights} onChange={set("highlights")} className={`${FIELD} resize-none`} placeholder="paneer tikka, rooftop seating, quick service, family friendly" />
          <p className={hint}>Suggestions only mention these and general things that fit the category.</p>
        </div>

        <div className={group}>
          <p className={groupTitle}>Google listing</p>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div>
              <label className={LABEL} htmlFor="b-pid">Place ID</label>
              <input id="b-pid" value={f.placeId} onChange={set("placeId")} className={FIELD} placeholder="ChIJ…" />
              <p className={hint}>
                Find it with{" "}
                <a className="font-medium text-accent-dim hover:underline" href="https://developers.google.com/maps/documentation/places/web-service/place-id" target="_blank" rel="noreferrer">
                  Place ID finder
                </a>
              </p>
            </div>
            <div>
              <label className={LABEL} htmlFor="b-url">or review link</label>
              <input id="b-url" value={f.reviewUrl} onChange={set("reviewUrl")} className={FIELD} placeholder="https://g.page/r/…/review" />
              <p className={hint}>From Business Profile → Ask for reviews. Wins over Place ID.</p>
            </div>
          </div>
        </div>
      </div>
      <Problem message={error} />
    </Dialog>
  );
}
