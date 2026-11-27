import { adminRoute, BadInput, body, parseLibraryType } from "@/lib/admin-api";
import { deleteLibraryType, updateLibraryType } from "@/lib/review-library";

type Ctx = { params: Promise<{ id: string }> };

/** Rename a type and/or replace its lines. */
export async function PATCH(req: Request, { params }: Ctx) {
  return adminRoute(async () => {
    const { id } = await params;
    const v = parseLibraryType(await body(req));
    try {
      const type = await updateLibraryType(id, v);
      if (!type) throw new Error("This type no longer exists.");
      return { type };
    } catch (e) {
      throw new BadInput(e instanceof Error ? e.message : "Could not save.");
    }
  });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  return adminRoute(async () => {
    const { id } = await params;
    try {
      await deleteLibraryType(id);
    } catch (e) {
      throw new BadInput(e instanceof Error ? e.message : "Could not delete.");
    }
  });
}
