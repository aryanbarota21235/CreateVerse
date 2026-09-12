"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, MessageCircle, Phone, Mail, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { useEnquiry } from "@/context/enquiry-context";
import { site } from "@/lib/site";

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
    // Simulate lead submission
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
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
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
                  Enquiry Received!
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm text-ink/65 sm:text-base">
                  Thank you, <span className="font-semibold text-ink">{name || "there"}</span>. Our lead strategist is reviewing your requirements and will reach out within 2 hours.
                </p>

                {/* Instant WhatsApp Card */}
                <div className="mx-auto mt-8 max-w-md rounded-2xl border border-emerald-500/20 bg-emerald-50/70 p-5 text-left">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                    Want an instant reply?
                  </p>
                  <p className="mt-1 text-sm text-emerald-900">
                    Connect directly on WhatsApp with our founder for immediate project scoping.
                  </p>
                  <a
                    href={`https://wa.me/919174691846?text=Hi%20CreateVerse%2C%20I%20just%20submitted%20an%20enquiry%20for%20${encodeURIComponent(service)}.%20My%20name%20is%20${encodeURIComponent(name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3.5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-emerald-700"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Chat on WhatsApp (+91 91746-91846)</span>
                  </a>
                </div>

                <button
                  onClick={handleReset}
                  className="mt-6 text-sm font-medium text-ink/50 underline hover:text-ink"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div className="grid lg:grid-cols-12 max-h-[90vh] overflow-y-auto">
                {/* Left Side: Agency Pitch & Direct Contact */}
                <div className="lg:col-span-5 bg-ink p-6 sm:p-8 md:p-10 text-white flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-brand-orange backdrop-blur-sm">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Free Growth Consultation</span>
                    </div>

                    <h3 className="mt-5 font-display text-2xl sm:text-3xl font-bold leading-tight">
                      Let&apos;s build your <span className="text-brand-gradient">growth engine.</span>
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                      Share your goals and challenges. We&apos;ll audit your current acquisition funnel and deliver a clear, measurable roadmap.
                    </p>

                    <div className="mt-8 space-y-4">
                      {/* WhatsApp Direct */}
                      <a
                        href={site.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3.5 rounded-2xl border border-emerald-500/30 bg-emerald-500/15 p-3.5 transition-all hover:bg-emerald-500/25"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md">
                          <MessageCircle className="h-5 w-5" />
                        </span>
                        <div>
                          <span className="block text-[11px] font-medium uppercase tracking-wider text-emerald-300">
                            Instant WhatsApp Connect
                          </span>
                          <span className="block text-sm font-bold text-white group-hover:underline">
                            +91 91746-91846
                          </span>
                        </div>
                      </a>

                      {/* Phone */}
                      <a
                        href={`tel:${site.phoneRaw}`}
                        className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-3.5 transition-all hover:bg-white/10"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                          <Phone className="h-4 w-4" />
                        </span>
                        <div>
                          <span className="block text-[11px] font-medium uppercase tracking-wider text-white/40">
                            Direct Call
                          </span>
                          <span className="block text-sm font-semibold text-white">
                            {site.phone}
                          </span>
                        </div>
                      </a>

                      {/* Email */}
                      <a
                        href={`mailto:${site.email}`}
                        className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-3.5 transition-all hover:bg-white/10"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                          <Mail className="h-4 w-4" />
                        </span>
                        <div>
                          <span className="block text-[11px] font-medium uppercase tracking-wider text-white/40">
                            Email
                          </span>
                          <span className="block text-sm font-semibold text-white">
                            {site.email}
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-4 text-xs text-white/45 flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                    <span>100% Confidential · Strict NDA Guarantee</span>
                  </div>
                </div>

                {/* Right Side: Comprehensive Big Form */}
                <div className="lg:col-span-7 p-6 sm:p-8 md:p-10">
                  <div className="mb-6">
                    <h4 className="font-display text-xl font-bold text-ink sm:text-2xl">
                      Project Enquiry Details
                    </h4>
                    <p className="mt-1 text-xs text-ink/50 sm:text-sm">
                      Fill out this quick form or reach out directly via WhatsApp.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Service Selection Pills */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink/60 mb-2">
                        I Need Help With
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {servicesList.map((item) => (
                          <button
                            type="button"
                            key={item}
                            onClick={() => setService(item)}
                            className={`rounded-xl px-3 py-1.5 text-xs font-medium transition-all ${
                              service === item
                                ? "bg-accent text-white shadow-sm ring-1 ring-accent"
                                : "bg-paper text-ink/75 hover:bg-paper-soft hover:text-ink"
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
                        <label className="block text-xs font-medium text-ink/70 mb-1">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Aryan Sharma"
                          className="w-full rounded-xl border border-paper-line bg-paper/40 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 outline-none transition-colors focus:border-accent focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-ink/70 mb-1">
                          WhatsApp / Phone <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +91 98765-43210"
                          className="w-full rounded-xl border border-paper-line bg-paper/40 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 outline-none transition-colors focus:border-accent focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Email & Company */}
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-medium text-ink/70 mb-1">
                          Work Email <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full rounded-xl border border-paper-line bg-paper/40 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 outline-none transition-colors focus:border-accent focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-ink/70 mb-1">
                          Company / Project Name
                        </label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Brand / Agency / Firm"
                          className="w-full rounded-xl border border-paper-line bg-paper/40 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 outline-none transition-colors focus:border-accent focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Budget Selection Pills */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink/60 mb-2">
                        Estimated Monthly Ad Spend / Budget
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {budgetList.map((b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setBudget(b)}
                            className={`rounded-xl px-2.5 py-2 text-xs font-medium transition-all text-center ${
                              budget === b
                                ? "bg-ink text-white font-semibold shadow-sm"
                                : "bg-paper text-ink/70 hover:bg-paper-soft hover:text-ink"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message / Brief */}
                    <div>
                      <label className="block text-xs font-medium text-ink/70 mb-1">
                        What are your specific acquisition goals?
                      </label>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your target audience, current cost per lead, or upcoming project launch..."
                        className="w-full resize-none rounded-xl border border-paper-line bg-paper/40 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 outline-none transition-colors focus:border-accent focus:bg-white"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-accent hover:shadow-accent/25 disabled:opacity-60"
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

                    <p className="text-center text-[11px] text-ink/40">
                      ⚡ We respect your time. Guaranteed response within 2 hours.
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
