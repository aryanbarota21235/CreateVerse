import { adminRoute, body, parseBusiness } from "@/lib/admin-api";
import { createBusiness } from "@/lib/reviews/store";
import type { ReviewBusinessInput } from "@/lib/reviews/types";

export async function POST(req: Request) {
  return adminRoute(async () => {
    const v = parseBusiness(await body(req)) as ReviewBusinessInput;
    return { business: await createBusiness(v) };
  });
}
