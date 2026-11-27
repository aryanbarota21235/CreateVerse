import * as db from "@/lib/db";
import { BUILT_IN_LIBRARY, LIBRARY_TYPES, type LibrarySets } from "@/lib/reviews/library";
import { slugify } from "@/lib/reviews/types";

/*
 * Backup reviews (used when no AI is available), editable in Admin -> Backup reviews.
 * One record per type ("Sweet shop / bakery", "Gym / fitness"...) holding short lines for each
 * star rating. A backup review joins three of these lines (see libraryReviews in
 * reviews/library.ts). Categories point at a type by its `key`.
 * The hand-written set in reviews/library.ts seeds the database the first time it's read.
 */

export interface LibraryType {
  id: string;
  createdAt: string;
  /** Stable id that categories point at, e.g. "sweets" */
  key: string;
  label: string;
  lines: LibrarySets;
}

export const GENERAL = "general";
export const RATINGS = [5, 4, 3, 2, 1] as const;
const emptySets = (): LibrarySets => ({ 1: [], 2: [], 3: [], 4: [], 5: [] });

const byLabel = (a: LibraryType, b: LibraryType) =>
  a.key === GENERAL ? 1 : b.key === GENERAL ? -1 : a.label.localeCompare(b.label);

let seeding: Promise<void> | null = null;

export async function listLibraryTypes(): Promise<LibraryType[]> {
  let types = await db.list<LibraryType>("library");
  if (!types.length) {
    seeding ??= (async () => {
      for (const t of LIBRARY_TYPES) {
        await db.insert<LibraryType>("library", { key: t.id, label: t.label, lines: BUILT_IN_LIBRARY[t.id] });
      }
    })();
    await seeding;
    types = await db.list<LibraryType>("library");
  }
  return types.map((t) => ({ ...t, lines: { ...emptySets(), ...t.lines } })).sort(byLabel);
}

/** The lines for a category's backup type, or the general set when it's missing. */
export async function librarySets(key: string): Promise<LibrarySets> {
  const types = await listLibraryTypes();
  return (types.find((t) => t.key === key) ?? types.find((t) => t.key === GENERAL))?.lines ?? emptySets();
}

export async function createLibraryType(label: string, copyFrom?: string): Promise<LibraryType> {
  const types = await listLibraryTypes();
  if (types.some((t) => t.label.toLowerCase() === label.toLowerCase())) throw new Error("A type with this name already exists.");
  const base = slugify(label) || "type";
  let key = base;
  for (let i = 2; types.some((t) => t.key === key); i++) key = `${base}-${i}`;
  const source = copyFrom ? types.find((t) => t.key === copyFrom) : undefined;
  return db.insert<LibraryType>("library", { key, label, lines: source ? source.lines : emptySets() });
}

export async function updateLibraryType(id: string, patch: { label?: string; lines?: LibrarySets }) {
  if (patch.label) {
    const types = await listLibraryTypes();
    if (types.some((t) => t.id !== id && t.label.toLowerCase() === patch.label!.toLowerCase())) throw new Error("A type with this name already exists.");
  }
  return db.update<LibraryType>("library", id, patch);
}

/** Deletes a type; categories that used it switch to the general set. The general set can't be deleted. */
export async function deleteLibraryType(id: string) {
  const t = await db.get<LibraryType>("library", id);
  if (!t) return;
  if (t.key === GENERAL) throw new Error("The general set is the last fallback and can't be deleted.");
  const { listCategories, updateCategory } = await import("@/lib/categories");
  for (const c of await listCategories()) if (c.library === t.key) await updateCategory(c.id, { library: GENERAL });
  await db.remove("library", id);
}
