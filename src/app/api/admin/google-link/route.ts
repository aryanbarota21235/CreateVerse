import { adminRoute, BadInput, body, str } from "@/lib/admin-api";
import { resolveGoogleLink } from "@/lib/reviews/google-link";
import { googleReviewUrl } from "@/lib/reviews/types";

/** Reads any Google Maps / review link and returns the Place ID and the review link to test. */
export async function POST(req: Request) {
  return adminRoute(async () => {
    const link = str((await body(req)).link, 2000);
    const found = await resolveGoogleLink(link);
    if (!found) throw new BadInput("Couldn't find a business in that link. Open the business on Google Maps and copy its link.");
    return { ...found, testUrl: googleReviewUrl(found) };
  });
}
