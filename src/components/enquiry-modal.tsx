"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, ShieldCheck, ChevronDown } from "lucide-react";
import { useEnquiry } from "@/context/enquiry-context";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { saveEnquiry } from "@/lib/admin-store";

function matchService(inputName?: string): string {
  if (!inputName || !inputName.trim()) return "";
  const cleanInput = inputName.trim().toLowerCase();

  const exact = services.find((s) => s.name.toLowerCase() === cleanInput);
  if (exact) return exact.name;

  const bySlug = services.find((s) => s.slug.toLowerCase() === cleanInput);
  if (bySlug) return bySlug.name;

  const byShort = services.find((s) => s.shortName?.toLowerCase() === cleanInput);
  if (byShort) return byShort.name;

  const partial = services.find(
    (s) =>
      s.name.toLowerCase().includes(cleanInput) ||
      cleanInput.includes(s.name.toLowerCase()) ||
      (s.shortName && cleanInput.includes(s.shortName.toLowerCase()))
  );
  if (partial) return partial.name;

  return "";
}

const inputCls =
  "w-full rounded-xl border border-stone-200/90 bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-sm text-ink placeholder:text-stone-400 outline-none transition-all focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/15 font-normal";

export default function EnquiryModal() {
  const { isOpen, closeEnquiry, selectedService } = useEnquiry();

  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // When modal opens:
  // If selectedService is provided from a specific service page/card -> pre-select it
  // If opened from a general CTA (Navbar, Hero, Footer) -> keep unselected as requested
  useEffect(() => {
    if (isOpen) {
      if (selectedService) {
        const resolved = matchService(selectedService);
        setService(resolved);
      } else {
        setService("");
      }
    }
  }, [selectedService, isOpen]);

  // Handle ESC key to close
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

  const handleReset = () => {
    setSubmitted(false);
    setService("");
    setName("");
    setPhone("");
    setEmail("");
    setCompany("");
    setMessage("");
    closeEnquiry();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setSubmitting(true);
    try {
      const resolvedService = service || "General Growth Consultation";

      saveEnquiry({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        company: company.trim(),
        service: resolvedService,
        budget: "Flexible / Not Specified",
        source: typeof window !== "undefined" ? `${window.location.pathname} (Modal Intake)` : "Modal Intake",
        channel: "Direct Traffic",
        message: message.trim(),
      });
    } catch (err) {
      console.error("Failed to save enquiry", err);
    }

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6">
          {/* Subtle Luxury Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeEnquiry}
            className="fixed inset-0 bg-ink/70 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-stone-200/90 bg-white shadow-[0_30px_70px_rgba(15,23,42,0.28)] z-10 my-auto"
          >
            {/* Executive Close Button */}
            <button
              onClick={closeEnquiry}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-stone-500 transition-all hover:bg-ink hover:text-white sm:right-6 sm:top-6"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            {submitted ? (
              /* Success Confirmation Screen */
              <div className="p-8 sm:p-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent border border-accent/20">
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  Mandate Received
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm text-stone-600 font-normal sm:text-base leading-relaxed">
                  Thank you, <span className="font-semibold text-ink">{name}</span>. Our practice lead for{" "}
                  <span className="font-semibold text-accent">{service || "Growth Architecture"}</span> will review your scope and connect directly within 2 hours.
                </p>

                <div className="mt-8 flex items-center justify-center">
                  <button
                    onClick={handleReset}
                    className="rounded-full bg-ink px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-accent transition active:scale-[0.99] shadow-md"
                  >
                    Done &amp; Close Window
                  </button>
                </div>
              </div>
            ) : (
              /* High-End, Decluttered Intake Form */
              <div className="p-6 sm:p-8 md:p-9 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="pr-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    <span>Direct Practice Consultation</span>
                  </div>

                  <h3 className="mt-2.5 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    {service ? (
                      <>
                        Consultation: <span className="text-accent">{service}</span>
                      </>
                    ) : (
                      <>
                        Let&apos;s build your <span className="text-accent">growth system.</span>
                      </>
                    )}
                  </h3>

                  <p className="mt-1 text-xs text-stone-600 sm:text-sm font-normal">
                    Direct consultation with our senior strategy team. Leave your details below or connect immediately via WhatsApp.
                  </p>
                </div>

                {/* Top WhatsApp Quick Connect Bar */}
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 flex items-center justify-between rounded-2xl border border-stone-200 bg-[#F8FAFC] p-3.5 sm:px-4 sm:py-3 transition-all hover:border-[#25D366]/50 hover:bg-[#25D366]/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-xs">
                      <WhatsAppIcon className="h-5 w-5 text-white" />
                    </span>
                    <div className="text-left">
                      <p className="text-xs font-bold text-ink group-hover:text-emerald-700 transition-colors">
                        Want to talk on WhatsApp?
                      </p>
                      <p className="text-[11px] font-medium text-stone-500">
                        Instant chat with our senior directors ({site.phone})
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 group-hover:translate-x-0.5 transition-transform shrink-0">
                    <span>Chat now</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </a>

                {/* Subtle Divider */}
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-stone-200/80" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-3 text-[10px] font-bold tracking-wider text-stone-400">
                      or submit consultation inquiry
                    </span>
                  </div>
                </div>

                {/* Clean, Streamlined Form Body */}
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Single Clean Practice Area Dropdown */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Practice Area
                    </label>
                    <div className="relative">
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className={`w-full appearance-none rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm font-medium transition-all focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/15 ${
                          service
                            ? "border-stone-300 bg-white text-ink font-semibold"
                            : "border-stone-200 bg-[#F8FAFC] text-stone-500"
                        }`}
                      >
                        <option value="" className="text-stone-400">
                          -- Select a Practice Area (or leave blank) --
                        </option>
                        {services.map((s) => (
                          <option key={s.slug} value={s.name} className="text-ink font-medium">
                            {s.name}
                          </option>
                        ))}
                        <option value="General Consultation" className="text-ink font-medium">
                          Other / Multi-disciplinary Growth Strategy
                        </option>
                      </select>
                      <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* Row 1: Name and Phone (Required) */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className={inputCls}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  {/* Row 2: Email and Company (Optional) */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Email <span className="font-normal text-stone-500 lowercase">(optional)</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className={inputCls}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Company / Project <span className="font-normal text-stone-500 lowercase">(optional)</span>
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Organization or brand name"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  {/* Row 3: Message / Goals (Optional) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Project Overview &amp; Goals <span className="font-normal text-stone-500 lowercase">(optional)</span>
                    </label>
                    <textarea
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly mention your target audience, timeline, or current monthly goals..."
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  {/* Submit Action */}
                  <div className="pt-1.5">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(0,102,255,0.25)] transition-all hover:bg-accent-dim hover:shadow-[0_12px_28px_rgba(0,102,255,0.35)] active:scale-[0.99] disabled:opacity-60"
                    >
                      <span>{submitting ? "Submitting Inquiry..." : "Submit Growth Inquiry"}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    {/* Confidentiality Notice */}
                    <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-medium text-stone-500">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                      <span>Direct response within 2 hours. Strictly confidential &amp; NDA protected.</span>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
