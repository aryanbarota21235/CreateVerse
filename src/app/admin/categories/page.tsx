import { listCategories } from "@/lib/categories";
import { listBusinesses } from "@/lib/reviews/store";
import CategoriesView from "./categories-view";

export const metadata = { title: "Categories" };

export default async function CategoriesPage() {
  const [categories, businesses] = await Promise.all([listCategories(), listBusinesses()]);
  const used: Record<string, number> = {};
  for (const b of businesses) used[b.category] = (used[b.category] ?? 0) + 1;
  return <CategoriesView categories={categories} used={used} />;
}
