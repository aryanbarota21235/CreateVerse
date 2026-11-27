import { listCategories } from "@/lib/categories";
import { listBusinesses } from "@/lib/reviews/store";
import { listLibraryTypes } from "@/lib/review-library";
import CategoriesView from "./categories-view";

export const metadata = { title: "Categories" };

export default async function CategoriesPage() {
  const [categories, businesses, library] = await Promise.all([listCategories(), listBusinesses(), listLibraryTypes()]);
  const used: Record<string, number> = {};
  for (const b of businesses) used[b.category] = (used[b.category] ?? 0) + 1;
  return <CategoriesView categories={categories} used={used} types={library.map((t) => ({ key: t.key, label: t.label }))} />;
}
