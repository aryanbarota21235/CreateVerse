export const REVIEW_CATEGORIES = [
  "Restaurant / Café",
  "Salon / Spa",
  "Clinic / Hospital",
  "Dental Clinic",
  "Gym / Fitness",
  "Hotel / Resort",
  "Retail Store",
  "Real Estate",
  "Education / Coaching",
  "Immigration Consultancy",
  "Digital Marketing Agency",
  "Automobile / Service Centre",
  "Other",
] as const;

export const REVIEW_LANGUAGES = ["English", "Hinglish", "Hindi"] as const;

export type ReviewLanguage = (typeof REVIEW_LANGUAGES)[number];

export interface ReviewBusiness {
  id: string;
  slug: string;
  name: string;
  category: string;
  city: string;
  /** Comma-separated things customers can mention, e.g. "biryani, rooftop seating, quick service" */
  highlights: string;
  language: ReviewLanguage;
  /** Google Place ID, used to build the write-review link */
  placeId: string;
  /** Optional override, e.g. a g.page/r/... short link from Google Business Profile */
  reviewUrl: string;
  active: boolean;
  createdAt: string;
}

export type ReviewBusinessInput = Omit<ReviewBusiness, "id" | "createdAt">;

export type ReviewEventType = "rated" | "copied";

export interface ReviewStats {
  scans: number;
  copied: number;
  byRating: Record<1 | 2 | 3 | 4 | 5, number>;
}

export function googleReviewUrl(b: Pick<ReviewBusiness, "placeId" | "reviewUrl">): string {
  if (b.reviewUrl) return b.reviewUrl;
  return `https://search.google.com/local/writereview?placeid=${encodeURIComponent(b.placeId)}`;
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}
