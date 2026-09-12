export interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  company?: string;
  service: string;
  budget: string;
  source: string; // e.g. "Political Page - Let's Talk", "Real Estate Page - Top CTA"
  channel: "Google Organic" | "Meta Ads" | "Direct Referral" | "Direct Traffic" | "WhatsApp Click";
  status: "New" | "Contacted" | "Qualified" | "Closed Won" | "Lost";
  date: string;
  message?: string;
  notes?: string;
}

export interface FinancialRecord {
  id: string;
  service: string;
  client: string;
  revenue: number; // in INR
  cost: number; // in INR (ad spend, production, delivery)
  profit: number; // revenue - cost
  margin: number; // (profit / revenue) * 100
  date: string;
  status: "Collected" | "Invoiced" | "Pending";
  category: "Client Retainer" | "Campaign Spend" | "Performance Fee" | "Production Cost";
  notes?: string;
}

export interface FinanceSummary {
  totalRevenue: number;
  totalCost: number;
  netProfit: number;
  blendedMargin: number;
  collectedRevenue: number;
  pendingRevenue: number;
}

export interface ServiceFinancialBreakdown {
  service: string;
  revenue: number;
  cost: number;
  profit: number;
  margin: number;
  dealsCount: number;
}

// Initial Realistic Demo Data for CreateVerse
const initialEnquiries: Enquiry[] = [
  {
    id: "ENQ-901",
    name: "Vikramaditya Chawla",
    phone: "+91 98112-44521",
    email: "vikram@chawlagroup.in",
    company: "Chawla Luxury Estates",
    service: "Real Estate Lead Generation",
    budget: "₹3L - ₹10 Lakhs",
    source: "Real Estate Service Page",
    channel: "Google Organic",
    status: "Qualified",
    date: "2026-09-12 14:32",
    message: "Launching a 4BHK luxury penthouse inventory in Gurugram. Need verified HNI site visits.",
    notes: "Follow-up scheduled with sales director on Monday 11 AM.",
  },
  {
    id: "ENQ-902",
    name: "Dr. Arvind Tanwar",
    phone: "+91 97184-90022",
    email: "atanwar.office@gmail.com",
    company: "Constituency Campaign Committee",
    service: "Political Campaign & Management",
    budget: "₹10 Lakhs+",
    source: "Political Clients Section (Homepage)",
    channel: "Direct Referral",
    status: "In Negotiation" as any,
    date: "2026-09-12 11:15",
    message: "Need complete 24/7 digital war room setup and regional language voter mobilization.",
    notes: "Reviewed Haryana election roster; war room proposal sent.",
  },
  {
    id: "ENQ-903",
    name: "Harpreet Kaur",
    phone: "+91 98881-23490",
    email: "harpreet@apexvisas.ca",
    company: "Apex Global Immigration",
    service: "Immigration Lead Generation",
    budget: "₹1L - ₹3 Lakhs",
    source: "Immigration Practice Page",
    channel: "Meta Ads",
    status: "New",
    date: "2026-09-11 18:40",
    message: "Looking for Canada & UK study intake leads with eligibility pre-screening.",
    notes: "Requires automated WhatsApp bot for consultation calendar booking.",
  },
  {
    id: "ENQ-904",
    name: "Kunal Mehra",
    phone: "+91 99201-88734",
    email: "kunal@elevatesports.co",
    company: "Elevate Apparel",
    service: "Social Media Paid Ads",
    budget: "₹1L - ₹3 Lakhs",
    source: "Homepage Hero Enquire Button",
    channel: "Direct Traffic",
    status: "Contacted",
    date: "2026-09-10 16:10",
    message: "Meta Ads ROAS dropped below 2x. Need full creative overhaul and scaling strategy.",
  },
  {
    id: "ENQ-905",
    name: "Siddharth Goel",
    phone: "+91 98103-66219",
    email: "siddharth@goelhomes.com",
    company: "Goel Infrastructure",
    service: "Real Estate Lead Generation",
    budget: "₹3L - ₹10 Lakhs",
    source: "Real Estate Page - Top CTA",
    channel: "Google Organic",
    status: "Closed Won",
    date: "2026-09-08 09:30",
    message: "Signed agreement for Noida Sector 150 residential plotted township campaign.",
    notes: "Account active. ₹4,50,000 monthly retainer closed.",
  },
  {
    id: "ENQ-906",
    name: "Rohit Bansal",
    phone: "+91 94160-55112",
    email: "rohit@bansaledu.org",
    company: "Bansal Overseas Consultancies",
    service: "Immigration Lead Generation",
    budget: "₹1L - ₹3 Lakhs",
    source: "All Services Directory",
    channel: "Meta Ads",
    status: "Closed Won",
    date: "2026-09-05 13:20",
    message: "Need 250 verified IELTS/PTE qualified leads per month.",
    notes: "Retainer active. Generating 70+ qualified leads weekly.",
  },
];

const initialFinancials: FinancialRecord[] = [
  {
    id: "FIN-101",
    service: "Political Campaign & Management",
    client: "Randeep Surjewala Campaign Office",
    revenue: 1850000,
    cost: 540000,
    profit: 1310000,
    margin: 70.8,
    date: "2026-09-02",
    status: "Collected",
    category: "Client Retainer",
    notes: "War room setup, digital ground mobilization, daily video desk and server telemetry.",
  },
  {
    id: "FIN-102",
    service: "Real Estate Lead Generation",
    client: "Chawla Luxury Estates (Gurugram Project)",
    revenue: 650000,
    cost: 180000,
    profit: 470000,
    margin: 72.3,
    date: "2026-09-06",
    status: "Collected",
    category: "Client Retainer",
    notes: "Ad spend managed ₹1.2L; creative & CRO ₹60k. Delivered 140+ verified site visits.",
  },
  {
    id: "FIN-103",
    service: "Immigration Lead Generation",
    client: "Apex Global Immigration & Visa",
    revenue: 380000,
    cost: 110000,
    profit: 270000,
    margin: 71.05,
    date: "2026-09-08",
    status: "Collected",
    category: "Client Retainer",
    notes: "Study intake campaigns across Punjab and Haryana micro-markets.",
  },
  {
    id: "FIN-104",
    service: "Google Ads Management",
    client: "Goel Infrastructure Luxury Plotted",
    revenue: 450000,
    cost: 95000,
    profit: 355000,
    margin: 78.89,
    date: "2026-09-10",
    status: "Invoiced",
    category: "Performance Fee",
    notes: "Search + Performance Max campaigns with enhanced conversions.",
  },
  {
    id: "FIN-105",
    service: "Political Campaign & Management",
    client: "Shamsher Singh Gogi Assembly Desk",
    revenue: 1200000,
    cost: 380000,
    profit: 820000,
    margin: 68.33,
    date: "2026-08-28",
    status: "Collected",
    category: "Client Retainer",
    notes: "Constituency narrative operations and rapid response.",
  },
  {
    id: "FIN-106",
    service: "Web Development & CRO",
    client: "Chawla Estates Signature Portal",
    revenue: 290000,
    cost: 45000,
    profit: 245000,
    margin: 84.48,
    date: "2026-08-20",
    status: "Collected",
    category: "Production Cost",
    notes: "Next.js 15 high-speed custom acquisition portal with WhatsApp CRM sync.",
  },
];

const STORAGE_KEY_ENQUIRIES = "createverse_admin_enquiries";
const STORAGE_KEY_FINANCE = "createverse_admin_finance";
const STORAGE_KEY_PIN = "createverse_admin_pin";

export const DEFAULT_ADMIN_PIN = "1234";

// Local Storage Helpers (Safe for SSR)
export function getStoredEnquiries(): Enquiry[] {
  if (typeof window === "undefined") return initialEnquiries;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ENQUIRIES);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_ENQUIRIES, JSON.stringify(initialEnquiries));
      return initialEnquiries;
    }
    return JSON.parse(raw);
  } catch {
    return initialEnquiries;
  }
}

export function saveEnquiry(
  enquiry: Partial<Enquiry> & { name: string; phone: string; service: string }
): Enquiry {
  const all = getStoredEnquiries();
  const now = new Date();
  const dateStr = now.toISOString().replace("T", " ").slice(0, 16);
  const newId = enquiry.id || `ENQ-${Math.floor(100 + Math.random() * 900)}`;

  const newRecord: Enquiry = {
    id: newId,
    name: enquiry.name,
    phone: enquiry.phone,
    email: enquiry.email || "",
    company: enquiry.company || "",
    service: enquiry.service,
    budget: enquiry.budget || "₹1L - ₹3 Lakhs",
    source: enquiry.source || "Website Form",
    channel: enquiry.channel || "Direct Traffic",
    status: enquiry.status || "New",
    date: enquiry.date || dateStr,
    message: enquiry.message || "",
    notes: enquiry.notes || "",
  };

  const updated = [newRecord, ...all];
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY_ENQUIRIES, JSON.stringify(updated));
      fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRecord),
      }).catch((err) => console.warn("API enquiry sync notice:", err));
    } catch (e) {
      console.error("Failed to save enquiry to storage", e);
    }
  }
  return newRecord;
}

export function updateEnquiryStatus(id: string, status: Enquiry["status"], notes?: string): void {
  const all = getStoredEnquiries();
  const updated = all.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        status,
        ...(notes !== undefined ? { notes } : {}),
      };
    }
    return item;
  });
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY_ENQUIRIES, JSON.stringify(updated));
  }
}

export function deleteEnquiry(id: string): void {
  const all = getStoredEnquiries();
  const updated = all.filter((item) => item.id !== id);
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY_ENQUIRIES, JSON.stringify(updated));
  }
}

// Finance Helpers
export function getStoredFinancials(): FinancialRecord[] {
  if (typeof window === "undefined") return initialFinancials;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_FINANCE);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_FINANCE, JSON.stringify(initialFinancials));
      return initialFinancials;
    }
    return JSON.parse(raw);
  } catch {
    return initialFinancials;
  }
}

export function addFinancialRecord(record: {
  service: string;
  client: string;
  revenue: number;
  cost: number;
  date: string;
  status: FinancialRecord["status"];
  category: FinancialRecord["category"];
  notes?: string;
}): FinancialRecord {
  const all = getStoredFinancials();
  const profit = record.revenue - record.cost;
  const margin = record.revenue > 0 ? Number(((profit / record.revenue) * 100).toFixed(1)) : 0;
  const id = `FIN-${Math.floor(100 + Math.random() * 900)}`;

  const newRecord: FinancialRecord = {
    id,
    service: record.service,
    client: record.client,
    revenue: Number(record.revenue),
    cost: Number(record.cost),
    profit,
    margin,
    date: record.date || new Date().toISOString().slice(0, 10),
    status: record.status,
    category: record.category,
    notes: record.notes || "",
  };

  const updated = [newRecord, ...all];
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY_FINANCE, JSON.stringify(updated));
      fetch("/api/finance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRecord),
      }).catch((err) => console.warn("API finance sync notice:", err));
    } catch (e) {
      console.error("Failed to save finance record to storage", e);
    }
  }
  return newRecord;
}

export function deleteFinancialRecord(id: string): void {
  const all = getStoredFinancials();
  const updated = all.filter((item) => item.id !== id);
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY_FINANCE, JSON.stringify(updated));
  }
}

export function calculateFinanceSummary(records: FinancialRecord[]): FinanceSummary {
  const totalRevenue = records.reduce((acc, r) => acc + r.revenue, 0);
  const totalCost = records.reduce((acc, r) => acc + r.cost, 0);
  const netProfit = totalRevenue - totalCost;
  const blendedMargin = totalRevenue > 0 ? Number(((netProfit / totalRevenue) * 100).toFixed(1)) : 0;
  const collectedRevenue = records.filter((r) => r.status === "Collected").reduce((acc, r) => acc + r.revenue, 0);
  const pendingRevenue = records.filter((r) => r.status !== "Collected").reduce((acc, r) => acc + r.revenue, 0);

  return {
    totalRevenue,
    totalCost,
    netProfit,
    blendedMargin,
    collectedRevenue,
    pendingRevenue,
  };
}

export function calculateServiceBreakdown(records: FinancialRecord[]): ServiceFinancialBreakdown[] {
  const map: Record<string, { revenue: number; cost: number; count: number }> = {};

  records.forEach((r) => {
    if (!map[r.service]) {
      map[r.service] = { revenue: 0, cost: 0, count: 0 };
    }
    map[r.service].revenue += r.revenue;
    map[r.service].cost += r.cost;
    map[r.service].count += 1;
  });

  return Object.entries(map)
    .map(([service, data]) => {
      const profit = data.revenue - data.cost;
      const margin = data.revenue > 0 ? Number(((profit / data.revenue) * 100).toFixed(1)) : 0;
      return {
        service,
        revenue: data.revenue,
        cost: data.cost,
        profit,
        margin,
        dealsCount: data.count,
      };
    })
    .sort((a, b) => b.revenue - a.revenue);
}

// Security PIN Helpers
export function getAdminPin(): string {
  if (typeof window === "undefined") return DEFAULT_ADMIN_PIN;
  return localStorage.getItem(STORAGE_KEY_PIN) || DEFAULT_ADMIN_PIN;
}

export function setAdminPin(newPin: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY_PIN, newPin);
  }
}

// Reset Demo Data
export function resetAdminData(): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY_ENQUIRIES, JSON.stringify(initialEnquiries));
    localStorage.setItem(STORAGE_KEY_FINANCE, JSON.stringify(initialFinancials));
    localStorage.removeItem(STORAGE_KEY_PIN);
  }
}

// CSV Export Utilities
export function exportEnquiriesCsv(enquiries: Enquiry[]): void {
  const headers = ["ID", "Name", "Phone", "Email", "Company", "Service", "Budget", "Source Page", "Channel", "Status", "Date", "Notes"];
  const rows = enquiries.map((e) => [
    e.id,
    `"${e.name.replace(/"/g, '""')}"`,
    `"${e.phone}"`,
    `"${e.email}"`,
    `"${(e.company || "").replace(/"/g, '""')}"`,
    `"${e.service}"`,
    `"${e.budget}"`,
    `"${e.source}"`,
    `"${e.channel}"`,
    `"${e.status}"`,
    `"${e.date}"`,
    `"${(e.notes || "").replace(/"/g, '""')}"`,
  ]);

  const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
  downloadBlob(csvContent, `createverse-enquiries-${new Date().toISOString().slice(0, 10)}.csv`);
}

export function exportFinanceCsv(records: FinancialRecord[]): void {
  const headers = ["ID", "Service", "Client", "Revenue (INR)", "Cost (INR)", "Net Profit (INR)", "Margin (%)", "Date", "Status", "Category", "Notes"];
  const rows = records.map((r) => [
    r.id,
    `"${r.service}"`,
    `"${r.client.replace(/"/g, '""')}"`,
    r.revenue,
    r.cost,
    r.profit,
    r.margin,
    r.date,
    r.status,
    r.category,
    `"${(r.notes || "").replace(/"/g, '""')}"`,
  ]);

  const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
  downloadBlob(csvContent, `createverse-finance-ledger-${new Date().toISOString().slice(0, 10)}.csv`);
}

function downloadBlob(content: string, filename: string) {
  const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
