import { after } from "next/server";
import { warmPools } from "@/lib/reviews/generate";
import { adminRoute, body, parseBusiness } from "@/lib/admin-api";
import { createBusiness } from "@/lib/reviews/store";
import type { ReviewBusinessInput } from "@/lib/reviews/types";

export const maxDuration = 60;

export async function POST(req: Request) {
  return adminRoute(async () => {
    const v = parseBusiness(await body(req)) as ReviewBusinessInput;
    const business = await createBusiness(v);
    after(() => warmPools(business));
    return { business };
  });
}
