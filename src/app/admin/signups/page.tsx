import { listPlans, listSignups } from "@/lib/admin-data";
import SignupsView from "./signups-view";

export const metadata = { title: "Review sign-ups" };

export default async function SignupsPage() {
  const [signups, plans] = await Promise.all([listSignups(), listPlans()]);
  return <SignupsView signups={signups} plans={plans} />;
}
