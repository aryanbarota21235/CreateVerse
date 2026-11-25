import { after } from "next/server";
import { warmPools } from "@/lib/reviews/generate";
import { adminRoute, body, parsePayment } from "@/lib/admin-api";
import { listPayments, recordPayment } from "@/lib/reviews/store";

export const maxDuration = 60;

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Ctx) {
  return adminRoute(async () => {
    const { id } = await params;
    return { payments: await listPayments(id) };
  });
}

export async function POST(req: Request, { params }: Ctx) {
  return adminRoute(async () => {
    const { id } = await params;
    const result = await recordPayment(id, parsePayment(await body(req)));
    after(() => warmPools(result.business));
    return result;
  });
}
