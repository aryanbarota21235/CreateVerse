import { adminRoute } from "@/lib/admin-api";
import { getBusiness } from "@/lib/reviews/store";
import { regenerateAll } from "@/lib/reviews/generate";

export const maxDuration = 60;

/** Writes fresh saved reviews for all five star ratings (5 AI requests at most). */
export async function POST(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  return adminRoute(async () => {
    const { id } = await params;
    const b = await getBusiness(id);
    if (!b) throw new Error("Client not found.");
    return { sources: await regenerateAll(b) };
  });
}
