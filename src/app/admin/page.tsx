"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Lock,
  Unlock,
  IndianRupee,
  TrendingUp,
  TrendingDown,
  Layers,
  Users,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Download,
  Plus,
  Trash2,
  Search,
  Filter,
  ShieldCheck,
  RefreshCw,
  FileText,
  MessageSquare,
  Phone,
  Mail,
  Building2,
  ExternalLink,
  ChevronRight,
  AlertCircle,
  BarChart3,
  Calendar,
  DollarSign,
} from "lucide-react";
import {
  Enquiry,
  FinancialRecord,
  getStoredEnquiries,
  saveEnquiry,
  updateEnquiryStatus,
  deleteEnquiry,
  getStoredFinancials,
  addFinancialRecord,
  deleteFinancialRecord,
  calculateFinanceSummary,
  calculateServiceBreakdown,
  getAdminPin,
  setAdminPin,
  resetAdminData,
  exportEnquiriesCsv,
  exportFinanceCsv,
  DEFAULT_ADMIN_PIN,
} from "@/lib/admin-store";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

const SERVICES_OPTIONS = [
  "Real Estate Lead Generation",
  "Immigration Lead Generation",
  "Political Campaign",
  "Google Ads Management",
  "Social Media Paid Ads",
  "Web Development & CRO",
  "Search Engine Optimization",
  "Creative & Social Content",
];

const BUDGET_OPTIONS = [
  "Under ₹1 Lakh",
  "₹1L - ₹3 Lakhs",
  "₹3L - ₹10 Lakhs",
  "₹10 Lakhs+",
];

const CHANNELS_LIST: Enquiry["channel"][] = [
  "Google Organic",
  "Meta Ads",
  "Direct Referral",
  "Direct Traffic",
  "WhatsApp Click",
];

const STATUS_LIST: Enquiry["status"][] = [
  "New",
  "Contacted",
  "Qualified",
  "Closed Won",
  "Lost",
];

function formatInr(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function AdminDashboardPage() {
  const [mounted, setMounted] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState("");

  const [activeTab, setActiveTab] = useState<"overview" | "inquiries" | "finance" | "settings">("overview");

  // Data states
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [financials, setFinancials] = useState<FinancialRecord[]>([]);

  // Search & Filters for Inquiries
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [selectedChannel, setSelectedChannel] = useState<string>("All");
  const [selectedServiceFilter, setSelectedServiceFilter] = useState<string>("All");

  // Add Lead Modal
  const [isAddLeadModalOpen, setIsAddLeadModalOpen] = useState(false);
  const [newLead, setNewLead] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: SERVICES_OPTIONS[0],
    budget: BUDGET_OPTIONS[1],
    source: "Direct Phone Call / Offline",
    channel: "Direct Referral" as Enquiry["channel"],
    status: "New" as Enquiry["status"],
    message: "",
  });

  // Finance Form State
  const [finService, setFinService] = useState(SERVICES_OPTIONS[0]);
  const [finClient, setFinClient] = useState("");
  const [finRevenue, setFinRevenue] = useState("");
  const [finCost, setFinCost] = useState("");
  const [finDate, setFinDate] = useState("");
  const [finStatus, setFinStatus] = useState<FinancialRecord["status"]>("Collected");
  const [finCategory, setFinCategory] = useState<FinancialRecord["category"]>("Client Retainer");
  const [finNotes, setFinNotes] = useState("");
  const [finSuccessMsg, setFinSuccessMsg] = useState("");

  // PIN Change State
  const [currentPin, setCurrentPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [pinChangeMsg, setPinChangeMsg] = useState("");
  const [pinChangeError, setPinChangeError] = useState("");

  useEffect(() => {
    setMounted(true);
    const sessionAuth = sessionStorage.getItem("createverse_admin_auth");
    if (sessionAuth === "true") {
      setIsUnlocked(true);
    }
    setEnquiries(getStoredEnquiries());
    setFinancials(getStoredFinancials());
    setFinDate(new Date().toISOString().slice(0, 10));
  }, []);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const currentStoredPin = getAdminPin();
    if (pinInput === currentStoredPin) {
      setIsUnlocked(true);
      setPinError("");
      sessionStorage.setItem("createverse_admin_auth", "true");
    } else {
      setPinError("Incorrect PIN. Please re-enter.");
      setPinInput("");
    }
  };

  const handleLock = () => {
    setIsUnlocked(false);
    sessionStorage.removeItem("createverse_admin_auth");
    setPinInput("");
  };

  const handleStatusChange = (id: string, status: Enquiry["status"]) => {
    updateEnquiryStatus(id, status);
    setEnquiries(getStoredEnquiries());
  };

  const handleDeleteEnquiry = (id: string) => {
    if (confirm("Are you sure you want to delete this enquiry record?")) {
      deleteEnquiry(id);
      setEnquiries(getStoredEnquiries());
    }
  };

  const handleAddLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLead.name || !newLead.phone) return;
    saveEnquiry(newLead);
    setEnquiries(getStoredEnquiries());
    setIsAddLeadModalOpen(false);
    setNewLead({
      name: "",
      phone: "",
      email: "",
      company: "",
      service: SERVICES_OPTIONS[0],
      budget: BUDGET_OPTIONS[1],
      source: "Direct Phone Call / Offline",
      channel: "Direct Referral",
      status: "New",
      message: "",
    });
  };

  const handleFinanceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const revNum = parseFloat(finRevenue);
    const costNum = parseFloat(finCost);

    if (isNaN(revNum) || isNaN(costNum) || !finClient) {
      alert("Please provide valid numbers for Revenue, Cost, and Client Name.");
      return;
    }

    addFinancialRecord({
      service: finService,
      client: finClient,
      revenue: revNum,
      cost: costNum,
      date: finDate,
      status: finStatus,
      category: finCategory,
      notes: finNotes,
    });

    setFinancials(getStoredFinancials());
    setFinClient("");
    setFinRevenue("");
    setFinCost("");
    setFinNotes("");
    setFinSuccessMsg("Financial transaction logged to ledger successfully.");
    setTimeout(() => setFinSuccessMsg(""), 4000);
  };

  const handleDeleteFinance = (id: string) => {
    if (confirm("Delete this financial transaction from ledger?")) {
      deleteFinancialRecord(id);
      setFinancials(getStoredFinancials());
    }
  };

  const handlePinChangeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPinChangeMsg("");
    setPinChangeError("");

    const storedPin = getAdminPin();
    if (currentPin !== storedPin) {
      setPinChangeError("Current PIN does not match.");
      return;
    }
    if (newPin.length < 4) {
      setPinChangeError("New PIN must be at least 4 digits.");
      return;
    }
    if (newPin !== confirmPin) {
      setPinChangeError("New PIN and Confirm PIN do not match.");
      return;
    }

    setAdminPin(newPin);
    setPinChangeMsg("Admin access PIN updated successfully.");
    setCurrentPin("");
    setNewPin("");
    setConfirmPin("");
  };

  const handleResetData = () => {
    if (confirm("Reset all enquiries and financial records to default demonstration data?")) {
      resetAdminData();
      setEnquiries(getStoredEnquiries());
      setFinancials(getStoredFinancials());
      alert("System restored to baseline benchmark data.");
    }
  };

  // Filtered Enquiries
  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.company && item.company.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.source && item.source.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.message && item.message.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesStatus = selectedStatus === "All" || item.status === selectedStatus;
      const matchesChannel = selectedChannel === "All" || item.channel === selectedChannel;
      const matchesService = selectedServiceFilter === "All" || item.service === selectedServiceFilter;

      return matchesSearch && matchesStatus && matchesChannel && matchesService;
    });
  }, [enquiries, searchQuery, selectedStatus, selectedChannel, selectedServiceFilter]);

  // Derived Financial Summaries
  const financeSummary = useMemo(() => calculateFinanceSummary(financials), [financials]);
  const serviceBreakdown = useMemo(() => calculateServiceBreakdown(financials), [financials]);

  // Real-time Margin preview on entry form
  const inputRev = parseFloat(finRevenue) || 0;
  const inputCost = parseFloat(finCost) || 0;
  const inputProfit = inputRev - inputCost;
  const inputMargin = inputRev > 0 ? ((inputProfit / inputRev) * 100).toFixed(1) : "0.0";

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-900 text-white">
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-accent border-t-transparent" />
          <span className="text-sm font-medium">Loading Command Center...</span>
        </div>
      </div>
    );
  }

  // Security Gate
  if (!isUnlocked) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0F172A] px-4 py-12 text-slate-100">
        <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-xl">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent ring-1 ring-accent/30">
              <Lock className="h-7 w-7" />
            </div>
            <h1 className="mt-5 font-display text-2xl font-bold tracking-tight text-white">
              CreateVerse Operations
            </h1>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold">
              Internal Command Center
            </p>
            <p className="mt-4 text-xs leading-relaxed text-slate-300">
              Access restricted to leadership. Enter your authorization PIN to inspect leads attribution and financial ledger.
            </p>
          </div>

          <form onSubmit={handleUnlock} className="mt-8 space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                4-Digit Security PIN
              </label>
              <input
                type="password"
                maxLength={8}
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="Enter PIN (Default: 1234)"
                autoFocus
                className="w-full rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3.5 text-center text-lg tracking-[0.3em] text-white placeholder:text-slate-500 placeholder:tracking-normal focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
              {pinError && (
                <p className="mt-2 text-xs font-semibold text-rose-400 text-center">
                  {pinError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-accent-dim active:scale-[0.98]"
            >
              <Unlock className="h-4 w-4" />
              <span>Unlock Command Center</span>
            </button>
          </form>

          <div className="mt-8 border-t border-slate-800 pt-5 text-center">
            <p className="text-[11px] text-slate-300">
              Demo Access PIN: <span className="font-mono font-bold text-accent">1234</span>
            </p>
            <Link
              href="/"
              className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-white"
            >
              <span>Return to Public Website</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Top Operations Bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3.5">
            <Link href="/" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight text-ink">
              <span>CREATEVERSE</span>
              <span className="rounded-md bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                Admin
              </span>
            </Link>
            <div className="hidden h-5 w-px bg-slate-200 sm:block" />
            <div className="hidden items-center gap-2 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 sm:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Encrypted Session Active</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <Link
              href="/"
              target="_blank"
              className="hidden items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 sm:flex"
            >
              <span>View Website</span>
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
            </Link>

            <button
              onClick={handleLock}
              className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-rose-600 transition hover:bg-rose-50 hover:border-rose-200"
            >
              <Lock className="h-3.5 w-3.5" />
              <span>Lock Portal</span>
            </button>
          </div>
        </div>

        {/* Executive Tab Switcher */}
        <div className="border-t border-slate-100 bg-slate-50/50">
          <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-bold transition whitespace-nowrap ${
                activeTab === "overview"
                  ? "border-accent text-accent"
                  : "border-transparent text-slate-600 hover:text-ink"
              }`}
            >
              <BarChart3 className="h-4 w-4" />
              <span>Executive Overview</span>
            </button>

            <button
              onClick={() => setActiveTab("inquiries")}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-bold transition whitespace-nowrap ${
                activeTab === "inquiries"
                  ? "border-accent text-accent"
                  : "border-transparent text-slate-600 hover:text-ink"
              }`}
            >
              <MessageSquare className="h-4 w-4" />
              <span>Inquiries & Origin Attribution</span>
              <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-extrabold text-slate-700">
                {enquiries.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("finance")}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-bold transition whitespace-nowrap ${
                activeTab === "finance"
                  ? "border-accent text-accent"
                  : "border-transparent text-slate-600 hover:text-ink"
              }`}
            >
              <IndianRupee className="h-4 w-4" />
              <span>Finance & P&L Operations</span>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-extrabold text-emerald-800">
                {financeSummary.blendedMargin}% Margin
              </span>
            </button>

            <button
              onClick={() => setActiveTab("settings")}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-bold transition whitespace-nowrap ${
                activeTab === "settings"
                  ? "border-accent text-accent"
                  : "border-transparent text-slate-600 hover:text-ink"
              }`}
            >
              <ShieldCheck className="h-4 w-4" />
              <span>Access & System</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* TAB 1: EXECUTIVE OVERVIEW */}
        {/* ========================================================================= */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Top KPI Ribbon */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {/* Gross Revenue */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Gross Revenue
                  </span>
                  <div className="rounded-lg bg-emerald-50 p-1.5 text-emerald-600">
                    <IndianRupee className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-2 text-xl font-black text-ink sm:text-2xl">
                  {formatInr(financeSummary.totalRevenue)}
                </p>
                <p className="mt-1 text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  <span>Collected: {formatInr(financeSummary.collectedRevenue)}</span>
                </p>
              </div>

              {/* Delivery Cost */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Delivery Cost
                  </span>
                  <div className="rounded-lg bg-rose-50 p-1.5 text-rose-600">
                    <TrendingDown className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-2 text-xl font-black text-ink sm:text-2xl">
                  {formatInr(financeSummary.totalCost)}
                </p>
                <p className="mt-1 text-[11px] font-semibold text-slate-500">
                  Ad spend, delivery & tech
                </p>
              </div>

              {/* Net Operating Profit */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                    Net Profit
                  </span>
                  <div className="rounded-lg bg-emerald-600 p-1.5 text-white">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-2 text-xl font-black text-emerald-900 sm:text-2xl">
                  {formatInr(financeSummary.netProfit)}
                </p>
                <p className="mt-1 text-[11px] font-semibold text-emerald-700">
                  Direct bottom line
                </p>
              </div>

              {/* Blended Margin */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Profit Margin
                  </span>
                  <div className="rounded-lg bg-accent/10 p-1.5 text-accent">
                    <Layers className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-2 text-xl font-black text-ink sm:text-2xl">
                  {financeSummary.blendedMargin}%
                </p>
                <p className="mt-1 text-[11px] font-semibold text-emerald-600">
                  Healthy Agency Target &gt;65%
                </p>
              </div>

              {/* Total Inquiries */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Total Leads
                  </span>
                  <div className="rounded-lg bg-blue-50 p-1.5 text-blue-600">
                    <Users className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-2 text-xl font-black text-ink sm:text-2xl">
                  {enquiries.length}
                </p>
                <p className="mt-1 text-[11px] font-semibold text-slate-500">
                  {enquiries.filter((e) => e.status === "New").length} New Awaiting Contact
                </p>
              </div>

              {/* Active Retainers */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Closed Won
                  </span>
                  <div className="rounded-lg bg-purple-50 p-1.5 text-purple-600">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-2 text-xl font-black text-ink sm:text-2xl">
                  {enquiries.filter((e) => e.status === "Closed Won").length}
                </p>
                <p className="mt-1 text-[11px] font-semibold text-slate-500">
                  Active Retainer Accounts
                </p>
              </div>
            </div>

            {/* Split View: Service Revenue Share & Recent Inquiries Snapshot */}
            <div className="grid gap-8 lg:grid-cols-12">
              {/* Service Revenue & Profit Performance */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-7">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">
                      Service Revenue & Profitability Ranking
                    </h3>
                    <p className="text-xs text-slate-500">
                      Breakdown of billed services and operational profitability margins
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab("finance")}
                    className="flex items-center gap-1 text-xs font-bold text-accent hover:underline"
                  >
                    <span>Manage Finance</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="mt-5 space-y-4">
                  {serviceBreakdown.map((item) => {
                    const revPct = financeSummary.totalRevenue > 0
                      ? Math.round((item.revenue / financeSummary.totalRevenue) * 100)
                      : 0;
                    return (
                      <div key={item.service} className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="font-display text-sm font-bold text-ink">
                              {item.service}
                            </span>
                            <span className="rounded-md bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                              {item.dealsCount} deals
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="font-mono text-sm font-black text-ink">
                              {formatInr(item.revenue)}
                            </span>
                            <span className="ml-2 text-xs font-bold text-emerald-600">
                              ({item.margin}% margin)
                            </span>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-3 flex items-center gap-3">
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200">
                            <div
                              className="h-full rounded-full bg-accent"
                              style={{ width: `${revPct}%` }}
                            />
                          </div>
                          <span className="text-[11px] font-bold text-slate-500">
                            {revPct}% of agency total
                          </span>
                        </div>

                        <div className="mt-2.5 flex items-center justify-between text-xs text-slate-600">
                          <span>
                            Delivery Cost:{" "}
                            <span className="font-semibold text-rose-600 font-mono">
                              {formatInr(item.cost)}
                            </span>
                          </span>
                          <span>
                            Net Profit:{" "}
                            <span className="font-semibold text-emerald-700 font-mono">
                              {formatInr(item.profit)}
                            </span>
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* High-Priority Inquiries Snapshot */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">
                      Recent Inquiries & Attribution
                    </h3>
                    <p className="text-xs text-slate-500">
                      Incoming leads categorized by source page
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab("inquiries")}
                    className="flex items-center gap-1 text-xs font-bold text-accent hover:underline"
                  >
                    <span>View All ({enquiries.length})</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="mt-5 space-y-3.5">
                  {enquiries.slice(0, 4).map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-slate-100 bg-slate-50/60 p-3.5 transition hover:bg-slate-50"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-display text-sm font-bold text-ink">
                              {item.name}
                            </span>
                            <span className="rounded bg-accent/10 px-1.5 py-0.5 text-[10px] font-bold text-accent">
                              {item.id}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500">
                            {item.company ? `${item.company} · ` : ""}{item.phone}
                          </p>
                        </div>
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                            item.status === "Closed Won"
                              ? "bg-emerald-100 text-emerald-800"
                              : item.status === "Qualified"
                              ? "bg-blue-100 text-blue-800"
                              : item.status === "Contacted"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-slate-200 text-slate-800"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      <div className="mt-2.5 rounded-lg border border-slate-200/70 bg-white p-2 text-xs">
                        <div className="flex items-center justify-between text-[11px] text-slate-500">
                          <span className="font-semibold text-ink">Attribution Source:</span>
                          <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-700">
                            {item.channel}
                          </span>
                        </div>
                        <p className="mt-1 font-medium text-slate-700 truncate">
                          {item.source}
                        </p>
                      </div>

                      <div className="mt-2.5 flex items-center justify-between text-xs">
                        <span className="font-semibold text-accent">
                          {item.service}
                        </span>
                        <a
                          href={`https://wa.me/${item.phone.replace(/[^0-9]/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-bold text-emerald-600 hover:text-emerald-700"
                        >
                          <WhatsAppIcon className="h-3.5 w-3.5" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: INQUIRIES & ORIGIN ATTRIBUTION */}
        {/* ========================================================================= */}
        {activeTab === "inquiries" && (
          <div className="space-y-6">
            {/* Attribution Overview Cards */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Google Organic
                </span>
                <p className="mt-1.5 text-2xl font-black text-ink">
                  {enquiries.filter((e) => e.channel === "Google Organic").length}
                </p>
                <p className="mt-1 text-xs text-slate-500">High intent search SEO</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Meta Ads
                </span>
                <p className="mt-1.5 text-2xl font-black text-ink">
                  {enquiries.filter((e) => e.channel === "Meta Ads").length}
                </p>
                <p className="mt-1 text-xs text-slate-500">Paid campaign funnels</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Direct Referrals
                </span>
                <p className="mt-1.5 text-2xl font-black text-ink">
                  {enquiries.filter((e) => e.channel === "Direct Referral").length}
                </p>
                <p className="mt-1 text-xs text-slate-500">Political & VIP client networks</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Direct Website & Chat
                </span>
                <p className="mt-1.5 text-2xl font-black text-ink">
                  {enquiries.filter((e) => e.channel === "Direct Traffic" || e.channel === "WhatsApp Click").length}
                </p>
                <p className="mt-1 text-xs text-slate-500">Hero CTA & WhatsApp dock</p>
              </div>
            </div>

            {/* Filter & Action Bar */}
            <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-1 flex-wrap items-center gap-2 sm:gap-3">
                {/* Search Bar */}
                <div className="relative min-w-[220px] flex-1">
                  <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search name, phone, company, source..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2 pl-9 pr-3 text-xs text-ink placeholder:text-slate-400 focus:border-accent focus:bg-white focus:outline-none"
                  />
                </div>

                {/* Status Filter */}
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs font-semibold text-ink focus:border-accent focus:bg-white focus:outline-none"
                >
                  <option value="All">All Statuses</option>
                  {STATUS_LIST.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>

                {/* Channel Filter */}
                <select
                  value={selectedChannel}
                  onChange={(e) => setSelectedChannel(e.target.value)}
                  className="rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs font-semibold text-ink focus:border-accent focus:bg-white focus:outline-none"
                >
                  <option value="All">All Channels</option>
                  {CHANNELS_LIST.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>

                {/* Service Filter */}
                <select
                  value={selectedServiceFilter}
                  onChange={(e) => setSelectedServiceFilter(e.target.value)}
                  className="rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs font-semibold text-ink focus:border-accent focus:bg-white focus:outline-none"
                >
                  <option value="All">All Services</option>
                  {SERVICES_OPTIONS.map((svc) => (
                    <option key={svc} value={svc}>{svc}</option>
                  ))}
                </select>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAddLeadModalOpen(true)}
                  className="flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-xs font-bold text-white shadow transition hover:bg-accent-dim"
                >
                  <Plus className="h-4 w-4" />
                  <span>Manual Lead Entry</span>
                </button>

                <button
                  onClick={() => exportEnquiriesCsv(enquiries)}
                  className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
                >
                  <Download className="h-4 w-4 text-slate-500" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Inquiries List Cards */}
            <div className="space-y-4">
              {filteredEnquiries.length === 0 ? (
                <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center">
                  <AlertCircle className="mx-auto h-8 w-8 text-slate-400" />
                  <h4 className="mt-3 font-display text-base font-bold text-ink">
                    No matching inquiries found
                  </h4>
                  <p className="mt-1 text-xs text-slate-500">
                    Try adjusting search criteria or clearing active filters.
                  </p>
                </div>
              ) : (
                filteredEnquiries.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      {/* Left: Lead Identity & Attribution */}
                      <div className="space-y-2 flex-1">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="font-mono text-xs font-extrabold text-accent bg-accent/10 px-2 py-0.5 rounded">
                            {item.id}
                          </span>
                          <h4 className="font-display text-base font-bold text-ink">
                            {item.name}
                          </h4>
                          {item.company && (
                            <span className="rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">
                              {item.company}
                            </span>
                          )}
                          <span className="text-xs text-slate-400">
                            {item.date}
                          </span>
                        </div>

                        {/* Exact Attribution Banner */}
                        <div className="flex flex-wrap items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-xs">
                          <span className="font-bold text-slate-700">Origin Page:</span>
                          <span className="font-semibold text-accent rounded bg-white px-2 py-0.5 border border-slate-200">
                            {item.source}
                          </span>
                          <span className="text-slate-300">•</span>
                          <span className="font-bold text-slate-700">Channel:</span>
                          <span className="font-semibold text-slate-800 rounded bg-slate-200/80 px-2 py-0.5">
                            {item.channel}
                          </span>
                          <span className="text-slate-300">•</span>
                          <span className="font-bold text-slate-700">Budget:</span>
                          <span className="font-semibold text-emerald-700 font-mono">
                            {item.budget}
                          </span>
                        </div>

                        {item.message && (
                          <p className="text-xs text-slate-700 bg-[#FAF5F0] p-2.5 rounded-xl border border-orange-100 font-medium">
                            <span className="font-bold text-orange-950">Project Scope: </span>
                            {item.message}
                          </p>
                        )}

                        {item.notes && (
                          <p className="text-xs text-slate-600 italic">
                            Internal Note: {item.notes}
                          </p>
                        )}
                      </div>

                      {/* Right: Actions & Status Dropdown */}
                      <div className="flex flex-wrap items-center gap-2 shrink-0 lg:flex-col lg:items-end">
                        {/* Status Select */}
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                            Status:
                          </span>
                          <select
                            value={item.status}
                            onChange={(e) => handleStatusChange(item.id, e.target.value as Enquiry["status"])}
                            className={`rounded-xl border px-3 py-1.5 text-xs font-extrabold transition focus:outline-none ${
                              item.status === "Closed Won"
                                ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                                : item.status === "Qualified"
                                ? "bg-blue-50 text-blue-800 border-blue-300"
                                : item.status === "Contacted"
                                ? "bg-amber-50 text-amber-800 border-amber-300"
                                : item.status === "Lost"
                                ? "bg-rose-50 text-rose-800 border-rose-300"
                                : "bg-slate-100 text-slate-800 border-slate-300"
                            }`}
                          >
                            {STATUS_LIST.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>

                        {/* Quick Contact Buttons */}
                        <div className="flex items-center gap-1.5 pt-1">
                          <a
                            href={`https://wa.me/${item.phone.replace(/[^0-9]/g, "")}?text=Hi%20${encodeURIComponent(item.name)}%2C%20following%20up%20on%20your%20CreateVerse%20inquiry%20regarding%20${encodeURIComponent(item.service)}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 rounded-lg bg-emerald-600 px-2.5 py-1.5 text-[11px] font-bold text-white transition hover:bg-emerald-700 shadow-sm"
                            title="Chat on WhatsApp"
                          >
                            <WhatsAppIcon className="h-3.5 w-3.5 text-white" />
                            <span>WhatsApp</span>
                          </a>

                          <a
                            href={`tel:${item.phone}`}
                            className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-bold text-slate-700 transition hover:bg-slate-50"
                            title="Call directly"
                          >
                            <Phone className="h-3 w-3 text-slate-500" />
                            <span>Call</span>
                          </a>

                          {item.email && (
                            <a
                              href={`mailto:${item.email}?subject=CreateVerse%20Follow-up%3A%20${encodeURIComponent(item.service)}`}
                              className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-bold text-slate-700 transition hover:bg-slate-50"
                              title="Send Email"
                            >
                              <Mail className="h-3 w-3 text-slate-500" />
                              <span>Email</span>
                            </a>
                          )}

                          <button
                            onClick={() => handleDeleteEnquiry(item.id)}
                            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
                            title="Delete Lead"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: FINANCE & P&L OPERATIONS */}
        {/* ========================================================================= */}
        {activeTab === "finance" && (
          <div className="space-y-8">
            {/* Financial Health Summary Ribbon */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Total Billed Revenue
                </span>
                <p className="mt-1 text-2xl font-black text-ink">
                  {formatInr(financeSummary.totalRevenue)}
                </p>
                <p className="mt-1 text-xs text-slate-500">Gross receivables</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Delivery & Ad Spend
                </span>
                <p className="mt-1 text-2xl font-black text-rose-600">
                  {formatInr(financeSummary.totalCost)}
                </p>
                <p className="mt-1 text-xs text-slate-500">Operational COGS</p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                  Net Realized Profit
                </span>
                <p className="mt-1 text-2xl font-black text-emerald-900">
                  {formatInr(financeSummary.netProfit)}
                </p>
                <p className="mt-1 text-xs text-emerald-700">Gross - Operational cost</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Blended Margin %
                </span>
                <p className="mt-1 text-2xl font-black text-ink">
                  {financeSummary.blendedMargin}%
                </p>
                <p className="mt-1 text-xs text-emerald-600 font-semibold">Net margin efficiency</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Pending Invoiced
                </span>
                <p className="mt-1 text-2xl font-black text-amber-700">
                  {formatInr(financeSummary.pendingRevenue)}
                </p>
                <p className="mt-1 text-xs text-slate-500">Awaiting collection</p>
              </div>
            </div>

            {/* Entry Form: Record Revenue & Cost */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">
                    Record Financial Transaction
                  </h3>
                  <p className="text-xs text-slate-500">
                    Input service contract revenue and delivery cost to calculate real profit & margin
                  </p>
                </div>
                <div className="rounded-full bg-accent/10 px-3 py-1 text-xs font-extrabold text-accent">
                  Live Margin Calculator Active
                </div>
              </div>

              {finSuccessMsg && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-xs font-bold text-emerald-800">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>{finSuccessMsg}</span>
                </div>
              )}

              <form onSubmit={handleFinanceSubmit} className="mt-6 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {/* Service */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Practice Service
                    </label>
                    <select
                      value={finService}
                      onChange={(e) => setFinService(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-ink focus:border-accent focus:bg-white focus:outline-none"
                    >
                      {SERVICES_OPTIONS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Client Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Client / Campaign Name
                    </label>
                    <input
                      type="text"
                      required
                      value={finClient}
                      onChange={(e) => setFinClient(e.target.value)}
                      placeholder="e.g. Chawla Luxury Estates"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-ink placeholder:text-slate-400 focus:border-accent focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Revenue (INR) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Gross Revenue (INR ₹)
                    </label>
                    <input
                      type="number"
                      required
                      min="0"
                      step="1000"
                      value={finRevenue}
                      onChange={(e) => setFinRevenue(e.target.value)}
                      placeholder="e.g. 650000"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-mono font-bold text-ink placeholder:text-slate-400 focus:border-accent focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Cost (INR) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Delivery & Ad Cost (INR ₹)
                    </label>
                    <input
                      type="number"
                      required
                      min="0"
                      step="1000"
                      value={finCost}
                      onChange={(e) => setFinCost(e.target.value)}
                      placeholder="e.g. 180000"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-mono font-bold text-ink placeholder:text-slate-400 focus:border-accent focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Second Row: Category, Status, Date, Live Margin Preview */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {/* Category */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Transaction Category
                    </label>
                    <select
                      value={finCategory}
                      onChange={(e) => setFinCategory(e.target.value as FinancialRecord["category"])}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-ink focus:border-accent focus:bg-white focus:outline-none"
                    >
                      <option value="Client Retainer">Client Retainer</option>
                      <option value="Campaign Spend">Campaign Spend</option>
                      <option value="Performance Fee">Performance Fee</option>
                      <option value="Production Cost">Production Cost</option>
                    </select>
                  </div>

                  {/* Status */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Payment Status
                    </label>
                    <select
                      value={finStatus}
                      onChange={(e) => setFinStatus(e.target.value as FinancialRecord["status"])}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-ink focus:border-accent focus:bg-white focus:outline-none"
                    >
                      <option value="Collected">Collected</option>
                      <option value="Invoiced">Invoiced</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Entry Date
                    </label>
                    <input
                      type="date"
                      required
                      value={finDate}
                      onChange={(e) => setFinDate(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-ink focus:border-accent focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Live Calculation Preview Card */}
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-2.5 flex flex-col justify-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-900">
                      Calculated Net Profit & Margin
                    </span>
                    <div className="mt-1 flex items-baseline justify-between">
                      <span className="font-mono text-sm font-black text-emerald-900">
                        {formatInr(inputProfit)}
                      </span>
                      <span className="text-xs font-black text-emerald-700">
                        {inputMargin}% Margin
                      </span>
                    </div>
                  </div>
                </div>

                {/* Notes & Submit */}
                <div className="grid gap-4 sm:grid-cols-12">
                  <div className="sm:col-span-9">
                    <input
                      type="text"
                      value={finNotes}
                      onChange={(e) => setFinNotes(e.target.value)}
                      placeholder="Scope notes, ad accounts, team allocation (optional)..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-medium text-ink placeholder:text-slate-400 focus:border-accent focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-accent-dim active:scale-[0.98]"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Log to Ledger</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Service-wise P&L Breakdown Table */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">
                    Practice Service P&L Matrix
                  </h3>
                  <p className="text-xs text-slate-500">
                    Comprehensive overview of which service lines generate the highest profit margins
                  </p>
                </div>
                <button
                  onClick={() => exportFinanceCsv(financials)}
                  className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
                >
                  <Download className="h-3.5 w-3.5 text-slate-500" />
                  <span>Export Financials CSV</span>
                </button>
              </div>

              <div className="mt-5 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-slate-200 bg-slate-50/80 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    <tr>
                      <th className="py-3 px-4">Service Line</th>
                      <th className="py-3 px-4 text-center">Deals</th>
                      <th className="py-3 px-4 text-right">Gross Revenue</th>
                      <th className="py-3 px-4 text-right">Operational Cost</th>
                      <th className="py-3 px-4 text-right">Net Profit</th>
                      <th className="py-3 px-4 text-right">Profit Margin</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {serviceBreakdown.map((row) => (
                      <tr key={row.service} className="hover:bg-slate-50/60 transition">
                        <td className="py-3.5 px-4 font-display font-bold text-ink">
                          {row.service}
                        </td>
                        <td className="py-3.5 px-4 text-center font-semibold text-slate-600">
                          {row.dealsCount}
                        </td>
                        <td className="py-3.5 px-4 text-right font-mono font-bold text-ink">
                          {formatInr(row.revenue)}
                        </td>
                        <td className="py-3.5 px-4 text-right font-mono font-semibold text-rose-600">
                          {formatInr(row.cost)}
                        </td>
                        <td className="py-3.5 px-4 text-right font-mono font-bold text-emerald-700">
                          {formatInr(row.profit)}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <span className={`inline-block rounded-md px-2 py-0.5 font-bold ${
                            row.margin >= 70
                              ? "bg-emerald-100 text-emerald-800"
                              : row.margin >= 50
                              ? "bg-blue-100 text-blue-800"
                              : "bg-amber-100 text-amber-800"
                          }`}>
                            {row.margin}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="border-t-2 border-slate-200 bg-slate-50 font-bold text-ink">
                    <tr>
                      <td className="py-3 px-4">Total Portfolio</td>
                      <td className="py-3 px-4 text-center">{financials.length}</td>
                      <td className="py-3 px-4 text-right font-mono">{formatInr(financeSummary.totalRevenue)}</td>
                      <td className="py-3 px-4 text-right font-mono text-rose-600">{formatInr(financeSummary.totalCost)}</td>
                      <td className="py-3 px-4 text-right font-mono text-emerald-700">{formatInr(financeSummary.netProfit)}</td>
                      <td className="py-3 px-4 text-right text-emerald-800">{financeSummary.blendedMargin}%</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* Full Transaction Ledger Table */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">
                    Financial Ledger & Transaction History
                  </h3>
                  <p className="text-xs text-slate-500">
                    Individual client retainers and project cost logs
                  </p>
                </div>
                <span className="text-xs font-bold text-slate-500">
                  {financials.length} entries recorded
                </span>
              </div>

              <div className="mt-5 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-slate-200 bg-slate-50/80 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    <tr>
                      <th className="py-3 px-3">ID</th>
                      <th className="py-3 px-3">Date</th>
                      <th className="py-3 px-3">Client / Account</th>
                      <th className="py-3 px-3">Service</th>
                      <th className="py-3 px-3 text-right">Revenue</th>
                      <th className="py-3 px-3 text-right">Cost</th>
                      <th className="py-3 px-3 text-right">Profit</th>
                      <th className="py-3 px-3 text-right">Margin</th>
                      <th className="py-3 px-3 text-center">Status</th>
                      <th className="py-3 px-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {financials.map((rec) => (
                      <tr key={rec.id} className="hover:bg-slate-50/60 transition">
                        <td className="py-3 px-3 font-mono font-bold text-accent">{rec.id}</td>
                        <td className="py-3 px-3 text-slate-500">{rec.date}</td>
                        <td className="py-3 px-3 font-display font-bold text-ink">
                          <div>
                            <span>{rec.client}</span>
                            {rec.notes && (
                              <p className="text-[10px] font-normal text-slate-400 truncate max-w-xs">
                                {rec.notes}
                              </p>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-3 text-slate-700 font-medium">{rec.service}</td>
                        <td className="py-3 px-3 text-right font-mono font-bold text-ink">
                          {formatInr(rec.revenue)}
                        </td>
                        <td className="py-3 px-3 text-right font-mono font-semibold text-rose-600">
                          {formatInr(rec.cost)}
                        </td>
                        <td className="py-3 px-3 text-right font-mono font-bold text-emerald-700">
                          {formatInr(rec.profit)}
                        </td>
                        <td className="py-3 px-3 text-right font-bold text-slate-700">
                          {rec.margin}%
                        </td>
                        <td className="py-3 px-3 text-center">
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold ${
                              rec.status === "Collected"
                                ? "bg-emerald-100 text-emerald-800"
                                : rec.status === "Invoiced"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {rec.status}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-right">
                          <button
                            onClick={() => handleDeleteFinance(rec.id)}
                            className="rounded p-1 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
                            title="Delete transaction"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: ACCESS & SETTINGS */}
        {/* ========================================================================= */}
        {activeTab === "settings" && (
          <div className="max-w-3xl mx-auto space-y-8">
            {/* PIN Changer */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="font-display text-lg font-bold text-ink">
                  Security Access PIN
                </h3>
                <p className="text-xs text-slate-500">
                  Update the master passcode required to enter the CreateVerse Command Center
                </p>
              </div>

              {pinChangeMsg && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-xs font-bold text-emerald-800">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>{pinChangeMsg}</span>
                </div>
              )}

              {pinChangeError && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-rose-50 border border-rose-200 p-3 text-xs font-bold text-rose-800">
                  <AlertCircle className="h-4 w-4 text-rose-600" />
                  <span>{pinChangeError}</span>
                </div>
              )}

              <form onSubmit={handlePinChangeSubmit} className="mt-6 space-y-4 max-w-md">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Current PIN
                  </label>
                  <input
                    type="password"
                    required
                    value={currentPin}
                    onChange={(e) => setCurrentPin(e.target.value)}
                    placeholder="Enter current PIN"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-ink focus:border-accent focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    New PIN (minimum 4 digits)
                  </label>
                  <input
                    type="password"
                    required
                    value={newPin}
                    onChange={(e) => setNewPin(e.target.value)}
                    placeholder="Enter new PIN"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-ink focus:border-accent focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Confirm New PIN
                  </label>
                  <input
                    type="password"
                    required
                    value={confirmPin}
                    onChange={(e) => setConfirmPin(e.target.value)}
                    placeholder="Re-enter new PIN"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-ink focus:border-accent focus:bg-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-xs font-bold text-white transition hover:bg-accent-dim"
                >
                  <ShieldCheck className="h-4 w-4" />
                  <span>Update Access PIN</span>
                </button>
              </form>
            </div>

            {/* Demo Data & Factory Reset */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="font-display text-lg font-bold text-ink">
                  Data Reset & Backup
                </h3>
                <p className="text-xs text-slate-500">
                  Restore default benchmark records or purge test leads
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleResetData}
                  className="flex items-center gap-2 rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-800 transition hover:bg-slate-100"
                >
                  <RefreshCw className="h-4 w-4 text-slate-500" />
                  <span>Restore Demonstration Data</span>
                </button>

                <button
                  onClick={() => exportEnquiriesCsv(enquiries)}
                  className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 transition hover:bg-slate-50"
                >
                  <Download className="h-4 w-4 text-slate-500" />
                  <span>Backup All Enquiries (CSV)</span>
                </button>

                <button
                  onClick={() => exportFinanceCsv(financials)}
                  className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 transition hover:bg-slate-50"
                >
                  <Download className="h-4 w-4 text-slate-500" />
                  <span>Backup Financial Ledger (CSV)</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ========================================================================= */}
      {/* MODAL: MANUAL LEAD ENTRY */}
      {/* ========================================================================= */}
      {isAddLeadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl">
            <h3 className="font-display text-lg font-bold text-ink">
              Log Offline or Phone Inquiry
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Record a lead received via phone call, in-person meeting, or direct WhatsApp
            </p>

            <form onSubmit={handleAddLeadSubmit} className="mt-5 space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={newLead.name}
                    onChange={(e) => setNewLead({ ...newLead, name: e.target.value })}
                    placeholder="Full name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-ink focus:border-accent focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={newLead.phone}
                    onChange={(e) => setNewLead({ ...newLead, phone: e.target.value })}
                    placeholder="+91 98..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-ink focus:border-accent focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={newLead.email}
                    onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
                    placeholder="email@domain.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-ink focus:border-accent focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={newLead.company}
                    onChange={(e) => setNewLead({ ...newLead, company: e.target.value })}
                    placeholder="Company name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-ink focus:border-accent focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Service Required
                  </label>
                  <select
                    value={newLead.service}
                    onChange={(e) => setNewLead({ ...newLead, service: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-ink focus:border-accent focus:bg-white focus:outline-none"
                  >
                    {SERVICES_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Budget Range
                  </label>
                  <select
                    value={newLead.budget}
                    onChange={(e) => setNewLead({ ...newLead, budget: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-ink focus:border-accent focus:bg-white focus:outline-none"
                  >
                    {BUDGET_OPTIONS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Attribution Channel
                  </label>
                  <select
                    value={newLead.channel}
                    onChange={(e) => setNewLead({ ...newLead, channel: e.target.value as Enquiry["channel"] })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-ink focus:border-accent focus:bg-white focus:outline-none"
                  >
                    {CHANNELS_LIST.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Origin Source Note
                  </label>
                  <input
                    type="text"
                    value={newLead.source}
                    onChange={(e) => setNewLead({ ...newLead, source: e.target.value })}
                    placeholder="e.g. Direct Phone, Referral by..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-ink focus:border-accent focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Scope & Requirements
                </label>
                <textarea
                  rows={3}
                  value={newLead.message}
                  onChange={(e) => setNewLead({ ...newLead, message: e.target.value })}
                  placeholder="Notes from initial conversation..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-xs text-ink resize-none focus:border-accent focus:bg-white focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddLeadModalOpen(false)}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 transition hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-accent px-5 py-2 text-xs font-bold text-white transition hover:bg-accent-dim shadow-sm"
                >
                  Save Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
