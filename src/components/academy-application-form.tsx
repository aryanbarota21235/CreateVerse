"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { saveEnquiry } from "@/lib/admin-store";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

const inputCls =
  "w-full rounded-xl border border-stone-200 bg-[#F8FAFC] px-3.5 py-2.5 sm:px-4 sm:py-3.5 text-base sm:text-sm text-ink placeholder:text-ink/40 outline-none transition-all duration-200 hover:border-stone-300 focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/15 font-medium";

export default function AcademyApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [applicantName, setApplicantName] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    setApplicantName(name);

    try {
      saveEnquiry({
        name,
        phone,
        email,
        service: "Digital Marketing Training",
        budget: "Training Enquiry",
        source: "/learn-digital-marketing",
        channel: "Direct Traffic",
        message: message || "Interested in learning digital marketing.",
      });
    } catch (err) {
      console.error("Failed to save enquiry", err);
    }

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 400);
  }

  const whatsappMessage = encodeURIComponent(
    `Hello CreateVerse, I want to learn digital marketing with you. My name is ${applicantName || "Applicant"}. Please share details.`
  );
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${whatsappMessage}`;

  if (submitted) {
    return (
      <div className="rounded-2xl sm:rounded-3xl border border-accent/40 bg-white p-6 sm:p-8 shadow-card text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-ink">
          Enquiry Submitted
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
          Thank you, <span className="font-semibold text-ink">{applicantName}</span>. We will contact you shortly with complete training details.
        </p>

        <div className="mt-6 pt-5 border-t border-stone-200">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pressable inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs hover:bg-[#1EBE5D] transition-all"
          >
            <WhatsAppIcon className="h-4 w-4 fill-current" />
            <span>Talk on WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl sm:rounded-3xl border border-stone-200 bg-white p-5 sm:p-8 shadow-card">
      <div className="mb-5 pb-4 border-b border-stone-200">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
          Enquire About Training
        </h3>
        <p className="mt-1 text-xs text-stone-500 font-normal">
          Fill in your details below and our team will get in touch with you.
        </p>
      </div>

      <div className="space-y-3.5">
        <div>
          <label className="block text-xs font-bold text-ink mb-1.5">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className={inputCls}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-bold text-ink mb-1.5">
              Phone / WhatsApp <span className="text-accent">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+91 98765 43210"
              className={inputCls}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-ink mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="name@example.com"
              className={inputCls}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-ink mb-1.5">
            What do you want to learn or achieve? (Optional)
          </label>
          <textarea
            name="message"
            rows={3}
            placeholder="e.g. want to learn Meta ads, lead generation, or run ads for my business..."
            className={inputCls}
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={sending}
            className="pressable group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white shadow-md transition-all hover:bg-accent hover:shadow-lg disabled:opacity-70 cursor-pointer"
          >
            <span>{sending ? "Submitting..." : "Submit Enquiry"}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </form>
  );
}
