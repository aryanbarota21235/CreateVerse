import { adminRoute, body, parseSignupStatus, str } from "@/lib/admin-api";
import { deleteSignup, updateSignup } from "@/lib/admin-data";

type Ctx = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, { params }: Ctx) {
  return adminRoute(async () => {
    const { id } = await params;
    const b = await body(req);
    const patch: { status?: ReturnType<typeof parseSignupStatus>; notes?: string } = {};
    if ("status" in b) patch.status = parseSignupStatus(b.status);
    if ("notes" in b) patch.notes = str(b.notes, 1000);
    return { signup: await updateSignup(id, patch) };
  });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  return adminRoute(async () => {
    const { id } = await params;
    await deleteSignup(id);
  });
}
