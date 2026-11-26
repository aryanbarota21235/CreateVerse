import { listEnquiries, listPlans, listSignups } from "@/lib/admin-data";
import { PageHead } from "../kit";
import SignupsView from "../signups/signups-view";
import EnquiriesView from "../enquiries/enquiries-view";

export const metadata = { title: "Leads" };

/* Everyone waiting for a call: Google Review QR sign-ups first, then the website's enquiry forms. */
export default async function LeadsPage() {
  const [signups, plans, enquiries] = await Promise.all([listSignups(), listPlans(), listEnquiries()]);
  return (
    <>
      <PageHead title="Leads" sub="People waiting for a call. Review QR sign-ups can be turned into clients; tick website enquiries Done once called." />
      <div className="space-y-5">
        <SignupsView signups={signups} plans={plans} />
        <EnquiriesView enquiries={enquiries} />
      </div>
    </>
  );
}
