"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { useEnquiry } from "@/context/enquiry-context";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { saveEnquiry } from "@/lib/admin-store";

// Service specific focus options tailored to each practice area
const SERVICE_FOCUS_OPTIONS: Record<string, string[]> = {
  "Real Estate Lead Generation": [
    "Verified Site Visits",
    "Pre-Launch Inventory",
    "HNI Buyer Targeting",
    "Cost per Booking Optimization",
  ],
  "Immigration Lead Generation": [
    "Study Visa Intake",
    "PR & Work Permit",
    "Applicant Pre-Screening",
    "Webinar Lead Funnel",
  ],
  "Political Campaign & Management": [
    "24/7 Digital War Room",
    "Constituency Mobilization",
    "Voter Outreach (WhatsApp)",
    "Crisis & Opposition Desk",
  ],
  "Google Ads Management": [
    "High-Intent Search Leads",
    "Performance Max & YouTube",
    "Landing Page CRO",
    "CPL Reduction",
  ],
  "Social Media Paid Ads": [
    "Meta Performance Funnel",
    "High-ROAS Ad Creatives",
    "Retargeting Setup",
    "Omnichannel Scale",
  ],
  "Web Development & CRO": [
    "High-Speed Landing Page",
    "WhatsApp CRM Sync",
    "Conversion Rate Overhaul",
    "Custom Lead Architecture",
  ],
  "Search Engine Optimization": [
    "High-Intent Keyword Rankings",
    "Authority Link Building",
    "Local Map Pack SEO",
    "Organic Lead Funnel",
  ],
  "Creative & Social Content": [
    "High-Impact Reels & Video",
    "Brand Visual Identity",
    "Performance Creative Kit",
    "Founder Personal Branding",
  ],
};

function matchService(inputName?: string): string {
  if (!inputName || !inputName.trim()) return services[0].name;
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

  return services[0].name;
}

export default function EnquiryModal() {
  const { isOpen, closeEnquiry, selectedService } = useEnquiry();

  const [service, setService] = useState(services[0].name);
  const [selectedFocus, setSelectedFocus] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // When modal opens or selectedService changes, synchronize the preselected service
  useEffect(() => {
    if (selectedService) {
      const resolved = matchService(selectedService);
      setService(resolved);
      setSelectedFocus([]);
    } else {
      setService(services[0].name);
      setSelectedFocus([]);
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

  // Available focus options for currently chosen service
  const currentFocusOptions = useMemo(() => {
    return (
      SERVICE_FOCUS_OPTIONS[service] || [
        "Qualified Lead Generation",
        "Performance Advertising",
        "Conversion Funnel Build",
        "Full Growth Strategy",
      ]
    );
  }, [service]);

  const toggleFocus = (opt: string) => {
    setSelectedFocus((prev) =>
      prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setSubmitting(true);
    try {
      const fullMessage = [
        selectedFocus.length > 0 ? `Target Focus: ${selectedFocus.join(", ")}` : "",
        message.trim(),
      ]
        .filter(Boolean)
        .join(" | ");

      saveEnquiry({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        company: company.trim(),
        service,
        budget: "Flexible / Not Specified",
        source: typeof window !== "undefined" ? `${window.location.pathname} (Modal Popup)` : "Website Modal Popup",
        channel: "Direct Traffic",
        message: fullMessage,
      });
    } catch (err) {
      console.error("Failed to save enquiry", err);
    }

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setEmail("");
    setCompany("");
    setMessage("");
    setSelectedFocus([]);
    closeEnquiry();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto">
          {/* Subtle Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeEnquiry}
            className="fixed inset-0 bg-ink/70 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-2xl z-10 my-auto"
          >
            {/* Elegant Close Button */}
            <button
              onClick={closeEnquiry}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition-colors hover:bg-ink hover:text-white sm:right-6 sm:top-6"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            {submitted ? (
              /* Success Confirmation Screen */
              <div className="p-8 sm:p-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-ink sm:text-3xl">
                  Enquiry Received
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm text-stone-600 font-normal sm:text-base">
                  Thank you, <span className="font-semibold text-ink">{name}</span>. Our practice lead for{" "}
                  <span className="font-semibold text-accent">{service}</span> will review your scope and connect with you shortly.
                </p>

                {/* Instant WhatsApp Quick Link */}
                <div className="mx-auto mt-7 max-w-md rounded-2xl border border-emerald-500/20 bg-emerald-50/70 p-4 text-left">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-900">
                    Need an immediate response?
                  </p>
                  <a
                    href={`https://wa.me/919174691846?text=Hi%20CreateVerse%2C%20I%20just%20submitted%20an%20enquiry%20for%20${encodeURIComponent(service)}.%20My%20name%20is%20${encodeURIComponent(name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-white" />
                    <span>Chat on WhatsApp (+91 91746-91846)</span>
                  </a>
                </div>

                <button
                  onClick={handleReset}
                  className="mt-6 text-xs font-bold text-stone-500 underline hover:text-ink"
                >
                  Done & Close Window
                </button>
              </div>
            ) : (
              /* Clean, Minimalist, Bespoke Intake Form */
              <div className="p-6 sm:p-8 md:p-10 max-h-[88vh] overflow-y-auto">
                {/* Header */}
                <div className="pr-8">
                  <div className="inline-flex items-center gap-1.5 rounded-md bg-accent/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-accent">
                    <span>Direct Practice Consultation</span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    {selectedService ? (
                      <>
                        Enquire for <span className="text-accent">{service}</span>
                      </>
                    ) : (
                      <>
                        Let&apos;s build your <span className="text-accent">growth system.</span>
                      </>
                    )}
                  </h3>

                  <p className="mt-1.5 text-xs text-stone-600 sm:text-sm">
                    Direct consultation with our senior strategy team. Leave your details below or connect immediately via WhatsApp.
                  </p>
                </div>

                {/* Instant WhatsApp Ribbon */}
                <div className="mt-4 flex items-center justify-between rounded-xl border border-emerald-200/80 bg-emerald-50/60 px-3.5 py-2.5 text-xs">
                  <div className="flex items-center gap-2 text-emerald-900 font-medium">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span>Prefer instant WhatsApp consultation?</span>
                  </div>
                  <a
                    href={`https://wa.me/919174691846?text=Hi%20CreateVerse%2C%20I%20would%20like%20to%20consult%20regarding%20${encodeURIComponent(service)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-800 transition shrink-0 underline ml-2"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                    <span>+91 91746-91846</span>
                  </a>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Selected Service Dropdown */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                        Practice Area
                      </label>
                      <span className="text-[11px] text-stone-600 font-medium">
                        Change if needed
                      </span>
                    </div>
                    <select
                      value={service}
                      onChange={(e) => {
                        setService(e.target.value);
                        setSelectedFocus([]);
                      }}
                      className="w-full rounded-xl border border-stone-200 bg-stone-50/70 px-3.5 py-2.5 text-xs font-semibold text-ink focus:border-accent focus:bg-white focus:outline-none"
                    >
                      {services.map((s) => (
                        <option key={s.slug} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Dynamic Focus Area Pills Tailored to Selected Service */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                        Primary Objectives <span className="font-normal text-stone-600 lowercase">(optional)</span>
                      </label>
                      <span className="text-[11px] text-stone-600 font-medium">
                        Select any that apply
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {currentFocusOptions.map((opt) => {
                        const isSelected = selectedFocus.includes(opt);
                        return (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => toggleFocus(opt)}
                            className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-all ${
                              isSelected
                                ? "bg-ink text-white font-semibold shadow-sm"
                                : "bg-stone-100/90 text-stone-700 hover:bg-stone-200 border border-stone-200/60"
                            }`}
                          >
                            {isSelected ? `✓ ${opt}` : `+ ${opt}`}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 1: Name and WhatsApp (Required) */}
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
                        className="w-full rounded-xl border border-stone-200 bg-stone-50/60 px-3.5 py-2.5 text-xs text-ink placeholder:text-stone-400 focus:border-accent focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-stone-200 bg-stone-50/60 px-3.5 py-2.5 text-xs text-ink placeholder:text-stone-400 focus:border-accent focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email and Company (Optional) */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Email <span className="font-normal text-stone-600 lowercase">(optional)</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@domain.com"
                        className="w-full rounded-xl border border-stone-200 bg-stone-50/60 px-3.5 py-2.5 text-xs text-ink placeholder:text-stone-400 focus:border-accent focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Company / Project <span className="font-normal text-stone-600 lowercase">(optional)</span>
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Organization or project name"
                        className="w-full rounded-xl border border-stone-200 bg-stone-50/60 px-3.5 py-2.5 text-xs text-ink placeholder:text-stone-400 focus:border-accent focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 3: Specific Goals / Overview (Optional) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Project Overview & Goals <span className="font-normal text-stone-600 lowercase">(optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={`Tell us briefly about your current target audience, timeline, or volume goals...`}
                      className="w-full rounded-xl border border-stone-200 bg-stone-50/60 p-3 text-xs text-ink resize-none placeholder:text-stone-400 focus:border-accent focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-accent-dim active:scale-[0.99] disabled:opacity-60"
                    >
                      <span>{submitting ? "Submitting Inquiry..." : "Submit Growth Inquiry"}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-medium text-stone-600">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                      <span>Direct reply from leadership. Strictly confidential & NDA protected.</span>
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
