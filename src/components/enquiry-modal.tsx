"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, ShieldCheck, ChevronDown } from "lucide-react";
import { useEnquiry } from "@/context/enquiry-context";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { saveEnquiry } from "@/lib/admin-store";

const SERVICE_ALIAS_MAP: Record<string, string> = {
  // Real Estate
  "real estate acquisition": "Real Estate Lead Generation",
  "real estate lead generation": "Real Estate Lead Generation",
  "real-estate-lead-generation": "Real Estate Lead Generation",
  "real estate leads": "Real Estate Lead Generation",
  "real estate": "Real Estate Lead Generation",
  "real-estate": "Real Estate Lead Generation",
  "property": "Real Estate Lead Generation",

  // Immigration & Visa
  "immigration & visa funnels": "Immigration Lead Generation",
  "immigration & visa marketing": "Immigration Lead Generation",
  "immigration lead generation": "Immigration Lead Generation",
  "immigration-lead-generation": "Immigration Lead Generation",
  "immigration leads": "Immigration Lead Generation",
  "immigration": "Immigration Lead Generation",
  "visa": "Immigration Lead Generation",
  "study visa": "Immigration Lead Generation",

  // Political Management
  "political management": "Political Campaign & Management",
  "political campaign management": "Political Campaign & Management",
  "political campaign & management": "Political Campaign & Management",
  "political-management": "Political Campaign & Management",
  "political": "Political Campaign & Management",
  "war room operations": "Political Campaign & Management",
  "election": "Political Campaign & Management",

  // Performance Marketing
  "performance marketing": "Performance Marketing",
  "performance-marketing": "Performance Marketing",
  "performance": "Performance Marketing",

  // Google Ads
  "google ads management": "Google Ads",
  "google ads": "Google Ads",
  "google-ads": "Google Ads",
  "google": "Google Ads",

  // Social Media Paid Ads / Paid Social
  "social media paid ads": "Social Media Paid Ads",
  "social-media-paid-ads": "Social Media Paid Ads",
  "paid social advertising": "Social Media Paid Ads",
  "paid-social": "Social Media Paid Ads",
  "paid social": "Social Media Paid Ads",
  "meta ads": "Social Media Paid Ads",
  "facebook ads": "Social Media Paid Ads",

  // Web Development
  "web development": "Web Development",
  "web-development": "Web Development",
  "conversion web development": "Web Development",
  "website": "Web Development",
  "web": "Web Development",

  // Lead Generation
  "lead generation systems": "Lead Generation",
  "lead generation": "Lead Generation",
  "lead-generation": "Lead Generation",
  "b2b & commercial lead gen": "Lead Generation",
  "lead gen": "Lead Generation",

  // Creative & Brand Design
  "creative & brand design": "Creative Services & Brand Design",
  "creative services & brand design": "Creative Services & Brand Design",
  "creative-services": "Creative Services & Brand Design",
  "creative services": "Creative Services & Brand Design",
  "creative": "Creative Services & Brand Design",
  "brand design": "Creative Services & Brand Design",
  "graphic design": "Graphic Design",
  "graphic-design": "Graphic Design",

  // Social Media Management
  "social media management": "Social Media Management",
  "social-media-management": "Social Media Management",
  "social media & content ops": "Social Media Management",
  "smm": "Social Media Management",
  "social media marketing": "Social Media Marketing",
  "social-media-marketing": "Social Media Marketing",

  // Social Media Optimization
  "social media optimization": "Social Media Optimization",
  "social-media-optimization": "Social Media Optimization",
  "smo": "Social Media Optimization",

  // Content Marketing & SEO
  "content marketing & seo": "Content Marketing",
  "content marketing": "Content Marketing",
  "content-marketing": "Content Marketing",
  "seo": "Content Marketing",

  // Influencer Marketing
  "influencer marketing": "Influencer Marketing",
  "influencer-marketing": "Influencer Marketing",
  "influencer": "Influencer Marketing",

  // Native Advertising
  "native advertising": "Native Advertising",
  "native-advertising": "Native Advertising",
};

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[&/\\#,+()$~%.'":*?<>{}_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchService(inputName?: string): string {
  if (!inputName || !inputName.trim()) return "";
  const rawInput = inputName.trim();
  const cleanInput = rawInput.toLowerCase();
  const normInput = normalizeText(rawInput);

  // 1. Exact Name match
  const exact = services.find((s) => s.name.toLowerCase() === cleanInput);
  if (exact) return exact.name;

  // 2. Slug match
  const bySlug = services.find((s) => s.slug.toLowerCase() === cleanInput);
  if (bySlug) return bySlug.name;

  // 3. ShortName match
  const byShort = services.find((s) => s.shortName?.toLowerCase() === cleanInput);
  if (byShort) return byShort.name;

  // 4. Direct dictionary lookup
  if (SERVICE_ALIAS_MAP[cleanInput]) {
    const mapped = services.find((s) => s.name === SERVICE_ALIAS_MAP[cleanInput]);
    if (mapped) return mapped.name;
    return SERVICE_ALIAS_MAP[cleanInput];
  }

  // 5. Normalized string dictionary lookup
  for (const [key, val] of Object.entries(SERVICE_ALIAS_MAP)) {
    if (normalizeText(key) === normInput) {
      const mapped = services.find((s) => s.name === val);
      if (mapped) return mapped.name;
      return val;
    }
  }

  // 6. Normalized name or short name match
  const byNorm = services.find((s) => {
    const sNorm = normalizeText(s.name);
    const shortNorm = s.shortName ? normalizeText(s.shortName) : "";
    return sNorm === normInput || (shortNorm && shortNorm === normInput);
  });
  if (byNorm) return byNorm.name;

  // 7. Partial contains match
  const partial = services.find((s) => {
    const sNorm = normalizeText(s.name);
    const shortNorm = s.shortName ? normalizeText(s.shortName) : "";
    return (
      sNorm.includes(normInput) ||
      normInput.includes(sNorm) ||
      (shortNorm && (shortNorm.includes(normInput) || normInput.includes(shortNorm)))
    );
  });
  if (partial) return partial.name;

  return "";
}

const inputCls =
  "w-full rounded-xl border border-stone-200/90 bg-[#F8FAFC] px-3 py-2 sm:px-4 sm:py-2.5 text-base sm:text-sm text-ink placeholder:text-stone-400 outline-none transition-all duration-200 hover:border-stone-300 focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/15 font-normal";

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

  // Handle ESC key to close & desktop-safe scroll lock without mobile redraw blink
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeEnquiry();
    };
    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;
    if (isOpen) {
      if (isDesktop) {
        document.body.style.overflow = "hidden";
      }
      window.addEventListener("keydown", handleKeyDown);
    } else {
      if (isDesktop) {
        document.body.style.overflow = "";
      }
    }
    return () => {
      if (isDesktop) {
        document.body.style.overflow = "";
      }
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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6"
          onPointerDown={(e) => {
            if (e.target === e.currentTarget) {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              e.preventDefault();
              e.stopPropagation();
              closeEnquiry();
            }
          }}
        >
          {/* Subtle Luxury Backdrop without filter thrashing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onPointerDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              closeEnquiry();
            }}
            className="fixed inset-0 bg-ink/75 cursor-pointer"
          />

          {/* Modal Container - Ultra smooth 60fps GPU animation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            onClick={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl sm:max-w-2xl overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white shadow-2xl sm:shadow-[0_30px_70px_rgba(15,23,42,0.28)] z-10 my-auto touch-auto"
          >
            {/* Executive Close Button - Highly Accessible on Mobile & Luxury Desktop */}
            <button
              onClick={closeEnquiry}
              className="pressable group absolute right-2.5 top-2.5 z-20 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-stone-100/90 active:bg-stone-200 text-stone-700 sm:text-stone-500 transition-all duration-200 hover:bg-ink hover:text-white hover:rotate-90 hover:scale-105 sm:right-5 sm:top-5 shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/30"
              aria-label="Close modal"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200" />
            </button>

            {submitted ? (
              /* Success Confirmation Screen */
              <div className="p-6 sm:p-12 text-center">
                <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-accent/10 text-accent border border-accent/20">
                  <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8 text-accent" />
                </div>
                <h3 className="mt-4 sm:mt-5 font-display text-xl sm:text-3xl font-bold tracking-tight text-ink">
                  Mandate Received
                </h3>
                <p className="mx-auto mt-2 max-w-md text-xs sm:text-base text-stone-600 font-normal leading-relaxed">
                  Thank you, <span className="font-semibold text-ink">{name}</span>. Our practice lead for{" "}
                  <span className="font-semibold text-accent">{service || "Growth Architecture"}</span> will review your scope and connect directly within 2 hours.
                </p>

                <div className="mt-6 sm:mt-8 flex items-center justify-center">
                  <button
                    onClick={handleReset}
                    className="pressable rounded-full bg-ink px-7 py-3 sm:px-8 sm:py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-accent transition shadow-md"
                  >
                    Done &amp; Close Window
                  </button>
                </div>
              </div>
            ) : (
              /* High-End, Streamlined Intake Form - Compact & Neat on Mobile with dvh sizing */
              <div className="p-3.5 sm:p-7 md:p-8 max-h-[78dvh] sm:max-h-[85vh] overflow-y-auto overscroll-contain">
                {/* Header */}
                <div className="pr-9 sm:pr-8">
                  <div className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>Direct Practice Consultation</span>
                  </div>

                  <h3 className="mt-0.5 sm:mt-2 font-display text-base sm:text-2xl font-bold tracking-tight text-ink">
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

                  <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-sm text-stone-600 font-normal">
                    Connect directly with our senior strategy directors.
                  </p>
                </div>

                {/* Top WhatsApp Quick Connect Bar - Compact 1-line on mobile */}
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-2 sm:mt-3.5 flex items-center justify-between rounded-xl border border-stone-200 bg-[#F8FAFC] px-2.5 py-1.5 sm:px-4 sm:py-2.5 transition-all duration-200 hover:border-[#25D366] hover:bg-[#25D366]/[0.04] hover:shadow-xs cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-[#25D366] text-white shadow-xs">
                      <WhatsAppIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
                    </span>
                    <p className="text-[11px] sm:text-xs font-bold text-ink group-hover:text-emerald-700 transition-colors">
                      Fastest: Chat on WhatsApp <span className="hidden sm:inline text-stone-500 font-normal">({site.phone})</span>
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10.5px] sm:text-xs font-bold text-emerald-700 group-hover:translate-x-0.5 transition-transform shrink-0">
                    <span>Chat now</span>
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </a>

                {/* Subtle Divider */}
                <div className="relative my-2 sm:my-3">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-stone-200/80" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-[9px] font-bold tracking-wider text-stone-400">
                      or inquiry form
                    </span>
                  </div>
                </div>

                {/* Clean, Streamlined Form Body */}
                <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
                  {/* Single Clean Practice Area Dropdown */}
                  <div>
                    <label className="block text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-stone-700 mb-0.5 sm:mb-1">
                      Practice Area
                    </label>
                    <div className="relative">
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className={`w-full appearance-none rounded-xl border px-3 py-1.5 sm:px-4 sm:py-2.5 text-base sm:text-sm font-medium transition-all duration-200 hover:border-stone-300 cursor-pointer focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/15 ${
                          service
                            ? "border-stone-300 bg-white text-ink font-semibold"
                            : "border-stone-200 bg-[#F8FAFC] text-stone-500"
                        }`}
                      >
                        <option value="" className="text-stone-400">
                          Select Practice Area (or leave blank)
                        </option>
                        {services.map((s) => (
                          <option key={s.slug} value={s.name} className="text-ink font-medium">
                            {s.name}
                          </option>
                        ))}
                        <option value="General Consultation" className="text-ink font-medium">
                          Other / Growth Strategy
                        </option>
                      </select>
                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone-400">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* Row 1: Name and Phone (Required) */}
                  <div className="grid gap-2 sm:gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-stone-700 mb-0.5 sm:mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className={inputCls}
                      />
                    </div>

                    <div>
                      <label className="block text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-stone-700 mb-0.5 sm:mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Mobile number"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  {/* Row 2: Email and Company (Optional) */}
                  <div className="grid gap-2 sm:gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-stone-700 mb-0.5 sm:mb-1">
                        Email <span className="font-normal text-stone-500 lowercase">(optional)</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                        className={inputCls}
                      />
                    </div>

                    <div>
                      <label className="block text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-stone-700 mb-0.5 sm:mb-1">
                        Company / Project <span className="font-normal text-stone-500 lowercase">(optional)</span>
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Company name"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  {/* Row 3: Message / Goals (Optional) */}
                  <div>
                    <label className="block text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-stone-700 mb-0.5 sm:mb-1">
                      Project Goals <span className="font-normal text-stone-500 lowercase">(optional)</span>
                    </label>
                    <textarea
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Brief overview of goals..."
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  {/* Submit Action */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="pressable group flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_8px_20px_rgba(0,102,255,0.22)] transition-all duration-200 hover:bg-accent-dim hover:shadow-[0_12px_28px_rgba(0,102,255,0.3)] hover:-translate-y-0.5 cursor-pointer disabled:opacity-60"
                    >
                      <span>{submitting ? "Submitting..." : "Submit Growth Inquiry"}</span>
                      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    {/* Confidentiality Notice */}
                    <div className="mt-2 flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] font-medium text-stone-500">
                      <ShieldCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-600" />
                      <span>Response within 2 hours. Strictly confidential &amp; NDA protected.</span>
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
