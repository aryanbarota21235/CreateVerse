import { adminRoute, BadInput, body, parseCategory } from "@/lib/admin-api";
import { deleteCategory, listCategories, updateCategory } from "@/lib/categories";
import { GENERAL, listLibraryTypes } from "@/lib/review-library";

type Ctx = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, { params }: Ctx) {
  return adminRoute(async () => {
    const { id } = await params;
    const v = parseCategory(await body(req), true);
    if (v.library && !(await listLibraryTypes()).some((t) => t.key === v.library)) v.library = GENERAL;
    if (v.name && (await listCategories()).some((c) => c.id !== id && c.name.toLowerCase() === v.name!.toLowerCase())) {
      throw new BadInput("A category with this name already exists.");
    }
    return { category: await updateCategory(id, v) };
  });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  return adminRoute(async () => {
    const { id } = await params;
    await deleteCategory(id);
  });
}
