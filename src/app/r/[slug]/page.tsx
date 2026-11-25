import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBusinessBySlug } from "@/lib/reviews/store";
import { googleReviewUrl } from "@/lib/reviews/types";
import { ROOT } from "@/lib/reviews/look";
import ReviewFlow from "./review-flow";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const b = await getBusinessBySlug(slug);
  return {
    title: b ? `Review ${b.name}` : "Review",
    robots: { index: false, follow: false },
  };
}

export default async function ReviewPage({ params }: Props) {
  const { slug } = await params;
  const b = await getBusinessBySlug(slug);
  if (!b || !b.active) notFound();

  return (
    <div className={`${ROOT} px-4 py-6 sm:py-12`}>
      <ReviewFlow
        slug={b.slug}
        name={b.name}
        category={b.category}
        googleUrl={googleReviewUrl(b)}
      />
    </div>
  );
}
