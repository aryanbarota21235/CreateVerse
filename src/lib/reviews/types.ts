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

/** Quick picks in the admin. Any other language can be typed in; the AI writes in whatever is set. */
export const REVIEW_LANGUAGES = [
  "English",
  "Hindi",
  "Hinglish",
  "Punjabi",
  "Haryanvi",
  "Urdu",
  "Marathi",
  "Gujarati",
  "Bengali",
  "Tamil",
  "Telugu",
  "Kannada",
  "Malayalam",
  "Odia",
] as const;

/** The built-in (no-AI) writer only knows these; other languages fall back to English without AI. */
export const TEMPLATE_LANGUAGES = ["English", "Hinglish", "Hindi"] as const;
export type ReviewLanguage = (typeof TEMPLATE_LANGUAGES)[number];

export const MAX_LANGUAGES = 6;

export interface ReviewBusiness {
  id: string;
  slug: string;
  name: string;
  category: string;
  city: string;
  /** Comma-separated things customers can mention, e.g. "biryani, rooftop seating, quick service" */
  highlights: string;
  /** Languages customers can pick on the review page; the first is the default. */
  languages: string[];
  /** Google Place ID, used to build the write-review link */
  placeId: string;
  /** Optional override, e.g. a g.page/r/... short link from Google Business Profile */
  reviewUrl: string;
  active: boolean;
  // --- client & subscription ---
  contactName: string;
  phone: string;
  email: string;
  planId: string;
  /** Last day the QR works, "YYYY-MM-DD". Empty = not paid yet. */
  paidUntil: string;
  /** The sign-up this client came from, if any */
  signupId: string;
  createdAt: string;
}

export type ReviewBusinessInput = Omit<ReviewBusiness, "id" | "createdAt">;

export interface ReviewEvent {
  id: string;
  createdAt: string;
  businessId: string;
  type: ReviewEventType;
  rating: number | null;
}

export interface Plan {
  id: string;
  createdAt: string;
  name: string;
  priceInr: number;
  months: number;
  description: string;
  /** What's included, one line each, shown as a checklist on the pricing card */
  features: string[];
  /** Highlighted as "Most popular" on the pricing page */
  popular: boolean;
  active: boolean;
}

export const SIGNUP_STATUSES = ["New", "Contacted", "Converted", "Rejected"] as const;
export type SignupStatus = (typeof SIGNUP_STATUSES)[number];

export interface Signup {
  id: string;
  createdAt: string;
  businessName: string;
  contactName: string;
  phone: string;
  email: string;
  category: string;
  city: string;
  mapsLink: string;
  planId: string;
  branches: number;
  message: string;
  status: SignupStatus;
  notes: string;
  businessId: string;
}

export const PAYMENT_METHODS = ["UPI", "Bank transfer", "Cash", "Cheque", "Other"] as const;

export interface Payment {
  id: string;
  createdAt: string;
  businessId: string;
  amountInr: number;
  method: string;
  months: number;
  paidOn: string;
  note: string;
}

export const ENQUIRY_STATUSES = ["New", "Contacted", "Qualified", "Closed Won", "Lost"] as const;
export type EnquiryStatus = (typeof ENQUIRY_STATUSES)[number];

export interface Enquiry {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  source: string;
  channel: string;
  message: string;
  status: EnquiryStatus;
  notes: string;
}

/** Today in India as "YYYY-MM-DD". */
export const todayIST = () => new Date(Date.now() + 5.5 * 3600_000).toISOString().slice(0, 10);

export type Subscription = "Active" | "Expiring" | "Expired" | "Unpaid" | "Paused";

export function subscriptionOf(b: Pick<ReviewBusiness, "active" | "paidUntil">, today = todayIST()): Subscription {
  if (!b.active) return "Paused";
  if (!b.paidUntil) return "Unpaid";
  if (b.paidUntil < today) return "Expired";
  const days = (Date.parse(b.paidUntil) - Date.parse(today)) / 86_400_000;
  return days <= 7 ? "Expiring" : "Active";
}

/** The customer page works only for active, paid-up businesses. */
export const isLive = (b: Pick<ReviewBusiness, "active" | "paidUntil">) =>
  ["Active", "Expiring"].includes(subscriptionOf(b));

/** Adds whole months to a "YYYY-MM-DD" date, returning the day before (a 1-month plan from 1 Jan runs to 31 Jan). */
export function addMonths(from: string, months: number): string {
  const d = new Date(`${from}T00:00:00Z`);
  d.setUTCMonth(d.getUTCMonth() + months);
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

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
