import { after } from "next/server";
import { warmPools } from "@/lib/reviews/generate";
import { adminRoute, body, parseBusiness } from "@/lib/admin-api";
import { getSignup, updateSignup } from "@/lib/admin-data";
import { createBusiness } from "@/lib/reviews/store";
import type { ReviewBusinessInput } from "@/lib/reviews/types";

/** Turns a sign-up into a client: creates the business from the (edited) form and links them. */
export const maxDuration = 60;

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  return adminRoute(async () => {
    const { id } = await params;
    const signup = await getSignup(id);
    if (!signup) throw new Error("Sign-up not found.");
    const v = parseBusiness(await body(req)) as ReviewBusinessInput;
    const business = await createBusiness({ ...v, signupId: id });
    await updateSignup(id, { status: "Converted", businessId: business.id });
    after(() => warmPools(business));
    return { business };
  });
}
