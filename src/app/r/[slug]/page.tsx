import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { isAdmin } from "@/lib/admin-auth";
import { getBusinessBySlug } from "@/lib/reviews/store";
import { googleReviewUrl, isLive } from "@/lib/reviews/types";
import { CARD, ROOT } from "@/lib/reviews/look";
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
  if (!b) notFound();

  const live = isLive(b);
  // The CreateVerse team can open any client's page (to test before payment).
  const preview = !live && (await isAdmin());

  if (!live && !preview) {
    return (
      <div className={`${ROOT} flex items-center justify-center px-4`}>
        <div className={`${CARD} w-full max-w-sm p-6 text-center`}>
          <h1 className="text-lg font-semibold text-slate-900">{b.name}</h1>
          <p className="mt-2 text-sm text-slate-500">This review page isn&apos;t active right now. Thank you for visiting!</p>
          <Image src="/logo.png" alt="CreateVerse" width={96} height={40} className="mx-auto mt-6 h-auto w-24 opacity-80" />
        </div>
      </div>
    );
  }

  return (
    <div className={`${ROOT} px-4 py-6 sm:py-12`}>
      {preview && (
        <p className="mx-auto mb-3 max-w-[26rem] rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-center text-xs font-medium text-amber-800">
          Admin preview: customers see “not active” until a payment is recorded and the client is live.
        </p>
      )}
      <ReviewFlow slug={b.slug} name={b.name} category={b.category} googleUrl={googleReviewUrl(b)} />
    </div>
  );
}
