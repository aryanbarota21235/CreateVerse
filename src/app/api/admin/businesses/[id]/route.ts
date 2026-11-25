import { adminRoute, body, parseBusiness } from "@/lib/admin-api";
import { deleteBusiness, updateBusiness } from "@/lib/reviews/store";

type Ctx = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, { params }: Ctx) {
  return adminRoute(async () => {
    const { id } = await params;
    const business = await updateBusiness(id, parseBusiness(await body(req), true));
    if (!business) throw new Error("Client not found.");
    return { business };
  });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  return adminRoute(async () => {
    const { id } = await params;
    await deleteBusiness(id);
  });
}
