import { adminRoute, BadInput, body, parseLibraryType, str } from "@/lib/admin-api";
import { createLibraryType } from "@/lib/review-library";

/** New backup-review type, empty or copied from another type (`copyFrom` = its key). */
export async function POST(req: Request) {
  return adminRoute(async () => {
    const b = await body(req);
    const { label } = parseLibraryType({ label: b.label });
    try {
      return { type: await createLibraryType(label!, str(b.copyFrom, 60) || undefined) };
    } catch (e) {
      throw new BadInput(e instanceof Error ? e.message : "Could not add the type.");
    }
  });
}
