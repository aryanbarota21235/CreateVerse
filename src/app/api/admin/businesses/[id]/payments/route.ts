import { adminRoute, body, parsePayment } from "@/lib/admin-api";
import { listPayments, recordPayment } from "@/lib/reviews/store";

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
    return recordPayment(id, parsePayment(await body(req)));
  });
}
