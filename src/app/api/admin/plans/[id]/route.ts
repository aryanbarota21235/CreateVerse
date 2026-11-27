import { adminMutation, adminRoute, body, parsePlan } from "@/lib/admin-api";
import { deletePlan, updatePlan } from "@/lib/admin-data";

type Ctx = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, { params }: Ctx) {
  return adminMutation(async () => {
    const { id } = await params;
    return { plan: await updatePlan(id, parsePlan(await body(req), true)) };
  });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  return adminMutation(async () => {
    const { id } = await params;
    await deletePlan(id);
  });
}
