import { adminMutation, adminRoute, BadInput, body, parseCategory } from "@/lib/admin-api";
import { createCategory, listCategories } from "@/lib/categories";
import { GENERAL, listLibraryTypes } from "@/lib/review-library";

/** Category names for the client form. */
export async function GET() {
  return adminRoute(async () => ({ categories: (await listCategories()).map((c) => c.name) }));
}

export async function POST(req: Request) {
  return adminMutation(async () => {
    const v = parseCategory(await body(req));
    if (!(await listLibraryTypes()).some((t) => t.key === v.library)) v.library = GENERAL;
    if ((await listCategories()).some((c) => c.name.toLowerCase() === v.name!.toLowerCase())) throw new BadInput("A category with this name already exists.");
    return { category: await createCategory(v as { name: string; hint: string; keywords: string; library: string }) };
  });
}
