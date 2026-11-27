import { NextResponse } from "next/server";
import { listActivePlans } from "@/lib/admin-data";
import { listCategories } from "@/lib/categories";

export const dynamic = "force-dynamic";

/** Public: active Google Review QR plans and business types, for the homepage plans pop-up. */
export async function GET() {
  const [plans, categories] = await Promise.all([listActivePlans().catch(() => []), listCategories().catch(() => [])]);
  return NextResponse.json(
    {
      plans: plans.map((p) => ({
        id: p.id,
        name: p.name,
        priceInr: p.priceInr,
        months: p.months,
        description: p.description,
        features: p.features,
        popular: p.popular,
      })),
      categories: categories.map((c) => c.name),
    },
    { headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" } },
  );
}
