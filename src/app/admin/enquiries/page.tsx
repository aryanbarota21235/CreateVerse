import { listEnquiries } from "@/lib/admin-data";
import EnquiriesView from "./enquiries-view";

export const metadata = { title: "Website enquiries" };

export default async function EnquiriesPage() {
  return <EnquiriesView enquiries={await listEnquiries()} />;
}
