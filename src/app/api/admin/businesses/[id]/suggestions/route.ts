import { adminRoute, BadInput, body } from "@/lib/admin-api";
import { getBusiness } from "@/lib/reviews/store";
import { listPools, regenerateAll, setPool, warmPools } from "@/lib/reviews/generate";

export const maxDuration = 60;

type Ctx = { params: Promise<{ id: string }> };

async function client(params: Ctx["params"]) {
  const { id } = await params;
  const b = await getBusiness(id);
  if (!b) throw new BadInput("Client not found.");
  return b;
}

/** Every saved suggestion of this client, by rating and language, for the editor. */
export async function GET(_req: Request, { params }: Ctx) {
  return adminRoute(async () => {
    const b = await client(params);
    // Make sure all five ratings of the main language exist before showing the editor.
    await warmPools(b);
    return { pools: await listPools(b), languages: b.languages };
  });
}

/** Saves the team's own list for one rating and language. */
export async function PUT(req: Request, { params }: Ctx) {
  return adminRoute(async () => {
    const b = await client(params);
    const data = await body(req);
    const rating = Number(data.rating);
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) throw new BadInput("Pick a star rating.");
    const language = typeof data.language === "string" && b.languages.includes(data.language) ? data.language : b.languages[0];
    const reviews = Array.isArray(data.reviews) ? data.reviews.filter((r): r is string => typeof r === "string") : [];
    if (reviews.length > 200) throw new BadInput("Up to 200 suggestions per rating.");
    return setPool(b, rating, language, reviews);
  });
}

/** Writes fresh suggestions for all five ratings of the main language (hand-edited ones are kept). */
export async function POST(_req: Request, { params }: Ctx) {
  return adminRoute(async () => {
    const b = await client(params);
    return { sources: await regenerateAll(b) };
  });
}
