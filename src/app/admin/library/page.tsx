import { listCategories } from "@/lib/categories";
import { listLibraryTypes } from "@/lib/review-library";
import LibraryView from "./library-view";

export const metadata = { title: "Backup reviews" };

export default async function LibraryPage() {
  const [types, categories] = await Promise.all([listLibraryTypes(), listCategories()]);
  const usedBy: Record<string, string[]> = {};
  for (const c of categories) (usedBy[c.library || "general"] ??= []).push(c.name);
  return <LibraryView types={types} usedBy={usedBy} />;
}
