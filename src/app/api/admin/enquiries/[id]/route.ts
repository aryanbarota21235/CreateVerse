import { adminRoute, body, parseEnquiryStatus, str } from "@/lib/admin-api";
import { deleteEnquiry, updateEnquiry } from "@/lib/admin-data";

type Ctx = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, { params }: Ctx) {
  return adminRoute(async () => {
    const { id } = await params;
    const b = await body(req);
    const patch: { status?: ReturnType<typeof parseEnquiryStatus>; notes?: string } = {};
    if ("status" in b) patch.status = parseEnquiryStatus(b.status);
    if ("notes" in b) patch.notes = str(b.notes, 1000);
    return { enquiry: await updateEnquiry(id, patch) };
  });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  return adminRoute(async () => {
    const { id } = await params;
    await deleteEnquiry(id);
  });
}
