"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Phone, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import { useEnquiry } from "@/context/enquiry-context";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { saveEnquiry } from "@/lib/admin-store";

const servicesList = [
  "Real Estate Lead Gen",
  "Immigration & Visa Marketing",
  "Political Campaign Management",
  "Performance Marketing & Ads",
  "Web & Landing Page Dev",
  "Creative & Social Media",
];

const budgetList = [
  "Under ₹1 Lakh",
  "₹1L - ₹3 Lakhs",
  "₹3L - ₹10 Lakhs",
  "₹10 Lakhs+",
];

export default function EnquiryModal() {
  const { isOpen, closeEnquiry, selectedService } = useEnquiry();
  const [service, setService] = useState(selectedService || servicesList[0]);
  const [budget, setBudget] = useState(budgetList[1]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
    }
  }, [selectedService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeEnquiry();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeEnquiry]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      saveEnquiry({
        name,
        phone,
        email,
        company,
        service,
        budget,
        source: typeof window !== "undefined" ? `${window.location.pathname} (Modal Popup)` : "Website Modal Popup",
        channel: "Direct Traffic",
        message,
      });
    } catch (err) {
      console.error("Failed to save enquiry", err);
    }
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setEmail("");
    setCompany("");
    setMessage("");
    closeEnquiry();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeEnquiry}
            className="fixed inset-0 bg-ink/75 backdrop-blur-md transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.12 }}
            className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-paper-line bg-white shadow-2xl z-10 my-auto"
          >
            {/* Close Button */}
            <button
              onClick={closeEnquiry}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-paper text-ink transition-colors hover:bg-ink hover:text-white sm:right-6 sm:top-6"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              <div className="p-8 sm:p-14 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-9 w-9" />
                </div>
                <h3 className="mt-5 font-display text-2xl sm:text-3xl font-bold text-ink">
                  Enquiry Received
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm text-ink/85 font-normal sm:text-base">
                  Thank you, <span className="font-semibold text-ink">{name || "there"}</span>. Our strategist is reviewing your requirements and will reach out within 2 hours.
                </p>

                {/* Instant WhatsApp Card */}
                <div className="mx-auto mt-8 max-w-md rounded-2xl border border-emerald-500/20 bg-emerald-50/70 p-5 text-left">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                    Direct WhatsApp Connect
                  </p>
                  <p className="mt-1 text-sm font-medium text-emerald-900/90">
                    Connect directly on WhatsApp with our team for immediate project scoping.
                  </p>
                  <a
                    href={`https://wa.me/919174691846?text=Hi%20CreateVerse%2C%20I%20just%20submitted%20an%20enquiry%20for%20${encodeURIComponent(service)}.%20My%20name%20is%20${encodeURIComponent(name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3.5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-emerald-700"
                  >
                    <WhatsAppIcon className="h-5 w-5 text-white" />
                    <span>Chat on WhatsApp (+91 91746-91846)</span>
                  </a>
                </div>

                <button
                  onClick={handleReset}
                  className="mt-6 text-sm font-semibold text-ink/75 underline hover:text-ink"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div className="grid lg:grid-cols-12 max-h-[90vh] overflow-y-auto">
                {/* Left Side: Agency Pitch & Direct Contact */}
                <div className="lg:col-span-5 bg-ink p-6 sm:p-8 md:p-10 text-white flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">
                      <span>Growth Consultation</span>
                    </div>

                    <h3 className="mt-5 font-display text-2xl sm:text-3xl font-bold leading-tight">
                      Let&apos;s build your <span className="text-accent">growth engine.</span>
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-white/85 font-normal">
                      Share your goals and challenges. We&apos;ll audit your current acquisition funnel and deliver a clear, measurable roadmap.
                    </p>

                    <div className="mt-8 space-y-3.5">
                      {/* WhatsApp Direct with Official Icon */}
                      <a
                        href={site.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3.5 rounded-2xl border border-emerald-500/30 bg-emerald-500/15 p-3.5 transition-all hover:bg-emerald-500/25"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md">
                          <WhatsAppIcon className="h-5 w-5 text-white" />
                        </span>
                        <div>
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                            WhatsApp Connect
                          </span>
                          <span className="block text-sm font-bold text-white group-hover:underline">
                            +91 91746-91846
                          </span>
                        </div>
                      </a>

                      {/* Phone */}
                      <a
                        href={`tel:${site.phoneRaw}`}
                        className="flex items-center gap-3.5 rounded-2xl border border-white/15 bg-white/5 p-3.5 transition-all hover:bg-white/10"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                          <Phone className="h-4 w-4" />
                        </span>
                        <div>
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-white/70">
                            Direct Phone
                          </span>
                          <span className="block text-sm font-semibold text-white">
                            {site.phone}
                          </span>
                        </div>
                      </a>

                      {/* Email */}
                      <a
                        href={`mailto:${site.email}`}
                        className="flex items-center gap-3.5 rounded-2xl border border-white/15 bg-white/5 p-3.5 transition-all hover:bg-white/10"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                          <Mail className="h-4 w-4" />
                        </span>
                        <div>
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-white/70">
                            Official Email
                          </span>
                          <span className="block text-sm font-semibold text-white">
                            {site.email}
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-white/15 pt-4 text-xs font-medium text-white/75 flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                    <span>Confidential Consultation · NDA Protected</span>
                  </div>
                </div>

                {/* Right Side: Comprehensive Form */}
                <div className="lg:col-span-7 p-6 sm:p-8 md:p-10">
                  <div className="mb-6">
                    <h4 className="font-display text-xl font-bold text-ink sm:text-2xl">
                      Project Enquiry Details
                    </h4>
                    <p className="mt-1 text-xs font-medium text-ink/75 sm:text-sm">
                      Submit your requirements below or reach out directly on WhatsApp.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Service Selection Pills */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
                        Practice Area Required
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {servicesList.map((item) => (
                          <button
                            type="button"
                            key={item}
                            onClick={() => setService(item)}
                            className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                              service === item
                                ? "bg-accent text-white shadow-sm ring-1 ring-accent"
                                : "bg-[#F8FAFC] border border-black/[0.10] text-ink font-semibold hover:bg-white hover:border-accent"
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Phone */}
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold text-ink mb-1">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full rounded-xl border border-black/[0.15] bg-[#F8FAFC] px-3.5 py-2.5 text-sm font-medium text-ink placeholder:text-ink/50 outline-none transition-colors focus:border-accent focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-ink mb-1">
                          WhatsApp / Phone <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 00000 00000"
                          className="w-full rounded-xl border border-black/[0.15] bg-[#F8FAFC] px-3.5 py-2.5 text-sm font-medium text-ink placeholder:text-ink/50 outline-none transition-colors focus:border-accent focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Email & Company */}
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold text-ink mb-1">
                          Work Email <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full rounded-xl border border-black/[0.15] bg-[#F8FAFC] px-3.5 py-2.5 text-sm font-medium text-ink placeholder:text-ink/50 outline-none transition-colors focus:border-accent focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-ink mb-1">
                          Company / Project Name
                        </label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Company or Organization"
                          className="w-full rounded-xl border border-black/[0.15] bg-[#F8FAFC] px-3.5 py-2.5 text-sm font-medium text-ink placeholder:text-ink/50 outline-none transition-colors focus:border-accent focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Budget Selection Pills */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
                        Estimated Monthly Marketing Budget
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {budgetList.map((b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setBudget(b)}
                            className={`rounded-xl px-2.5 py-2 text-xs font-semibold transition-all text-center ${
                              budget === b
                                ? "bg-ink text-white shadow-sm"
                                : "bg-[#F8FAFC] border border-black/[0.10] text-ink font-semibold hover:bg-white hover:border-accent"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message / Brief */}
                    <div>
                      <label className="block text-xs font-bold text-ink mb-1">
                        Specific Goals / Overview
                      </label>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your target audience, current cost per lead, or upcoming project launch..."
                        className="w-full resize-none rounded-xl border border-black/[0.15] bg-[#F8FAFC] px-3.5 py-2.5 text-sm font-medium text-ink placeholder:text-ink/50 outline-none transition-colors focus:border-accent focus:bg-white"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-md transition-all hover:bg-accent hover:shadow-accent/25 disabled:opacity-60"
                      >
                        {submitting ? (
                          <span>Submitting...</span>
                        ) : (
                          <>
                            <span>Submit Enquiry</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-center text-[11px] font-semibold text-ink/70">
                      We respect your time. Guaranteed response within 2 hours.
                    </p>
                  </form>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
