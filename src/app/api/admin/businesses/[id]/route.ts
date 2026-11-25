import { after } from "next/server";
import { warmPools } from "@/lib/reviews/generate";
import { adminRoute, body, parseBusiness } from "@/lib/admin-api";
import { deleteBusiness, updateBusiness } from "@/lib/reviews/store";

export const maxDuration = 60;

type Ctx = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, { params }: Ctx) {
  return adminRoute(async () => {
    const { id } = await params;
    const business = await updateBusiness(id, parseBusiness(await body(req), true));
    if (!business) throw new Error("Client not found.");
    after(() => warmPools(business));
    return { business };
  });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  return adminRoute(async () => {
    const { id } = await params;
    await deleteBusiness(id);
  });
}
