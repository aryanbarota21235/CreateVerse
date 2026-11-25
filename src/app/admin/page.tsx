import Link from "next/link";
import { Inbox, Store, AlarmClock, IndianRupee, MessageSquareText } from "lucide-react";
import { listEnquiries, listPlans, listSignups } from "@/lib/admin-data";
import { listBusinesses, listPayments } from "@/lib/reviews/store";
import { inr, subscriptionOf, todayIST } from "@/lib/reviews/types";
import { PageHead, Panel, Pill, Tile, TABLE, TD, TH, TR, fmtDate } from "./kit";

export const metadata = { title: "Overview" };

export default async function Overview() {
  const [signups, businesses, payments, enquiries, plans] = await Promise.all([
    listSignups(),
    listBusinesses(),
    listPayments(),
    listEnquiries(),
    listPlans(),
  ]);
  const today = todayIST();
  const month = today.slice(0, 7);
  const subs = businesses.map((b) => ({ b, s: subscriptionOf(b, today) }));
  const live = subs.filter((x) => x.s === "Active" || x.s === "Expiring").length;
  const attention = subs.filter((x) => x.s === "Expiring" || x.s === "Expired" || x.s === "Unpaid");
  const collected = payments.filter((p) => p.paidOn.startsWith(month)).reduce((n, p) => n + p.amountInr, 0);
  const newSignups = signups.filter((s) => s.status === "New");
  const newEnquiries = enquiries.filter((e) => e.status === "New").length;
  const planName = (id: string) => plans.find((p) => p.id === id)?.name ?? "—";

  return (
    <>
      <PageHead title="Overview" sub="What needs the team today." />
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        <Tile label="New sign-ups" value={newSignups.length} sub="Waiting for a call" icon={Inbox} tone={newSignups.length ? "brand" : "plain"} href="/admin/signups" />
        <Tile label="Live review clients" value={live} sub={`${businesses.length} clients in all`} icon={Store} tone="good" href="/admin/clients" />
        <Tile label="Need renewal or payment" value={attention.length} sub="Expiring, expired or unpaid" icon={AlarmClock} tone={attention.length ? "warn" : "plain"} href="/admin/clients" />
        <Tile label="Collected this month" value={inr(collected)} sub="Review QR payments" icon={IndianRupee} />
        <Tile label="New enquiries" value={newEnquiries} sub="From website forms" icon={MessageSquareText} tone={newEnquiries ? "brand" : "plain"} href="/admin/enquiries" />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Panel title="New sign-ups" count={newSignups.length} actions={<Link href="/admin/signups" className="text-xs font-semibold text-accent-dim hover:underline">All sign-ups</Link>}>
          {newSignups.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-slate-500">No new sign-ups.</p>
          ) : (
            <table className={TABLE}>
              <thead><tr><th className={TH}>Business</th><th className={TH}>Plan</th><th className={TH}>Received</th></tr></thead>
              <tbody>
                {newSignups.slice(0, 6).map((s) => (
                  <tr key={s.id} className={TR}>
                    <td className={TD}>
                      <div className="font-semibold text-slate-900">{s.businessName}</div>
                      <div className="text-xs text-slate-500">{s.contactName} · <a href={`tel:${s.phone}`} className="text-accent-dim">{s.phone}</a></div>
                    </td>
                    <td className={TD}>{planName(s.planId)}</td>
                    <td className={`${TD} whitespace-nowrap text-slate-500`}>{fmtDate(s.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Panel>

        <Panel title="Renewals and unpaid" count={attention.length} actions={<Link href="/admin/clients" className="text-xs font-semibold text-accent-dim hover:underline">All clients</Link>}>
          {attention.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-slate-500">Every client is paid up.</p>
          ) : (
            <table className={TABLE}>
              <thead><tr><th className={TH}>Client</th><th className={TH}>Status</th><th className={TH}>Paid until</th></tr></thead>
              <tbody>
                {attention.slice(0, 6).map(({ b, s }) => (
                  <tr key={b.id} className={TR}>
                    <td className={TD}>
                      <div className="font-semibold text-slate-900">{b.name}</div>
                      <div className="text-xs text-slate-500">{b.phone || b.city}</div>
                    </td>
                    <td className={TD}><Pill tone={s === "Expiring" ? "warn" : "bad"}>{s}</Pill></td>
                    <td className={`${TD} whitespace-nowrap text-slate-500`}>{fmtDate(b.paidUntil)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Panel>
      </div>
    </>
  );
}
