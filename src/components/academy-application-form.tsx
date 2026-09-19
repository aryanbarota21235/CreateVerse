"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Phone, Sparkles } from "lucide-react";
import { saveEnquiry } from "@/lib/admin-store";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

const inputCls =
  "w-full rounded-xl border border-stone-200 bg-[#F8FAFC] px-3.5 py-2.5 sm:px-4 sm:py-3.5 text-base sm:text-sm text-ink placeholder:text-ink/40 outline-none transition-all duration-200 hover:border-stone-300 focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/15 font-medium";

export default function AcademyApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [applicantName, setApplicantName] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const profile = String(data.get("profile") || "Aspiring Marketer");
    const goal = String(data.get("goal") || "Job Placement / Skill Building");
    const notes = String(data.get("notes") || "");

    setApplicantName(name);
    setApplicantPhone(phone);

    try {
      saveEnquiry({
        name,
        phone,
        email,
        service: "Learn Digital Marketing (Practical Cohort)",
        budget: "Course Admission",
        source: "/learn-digital-marketing (Cohort Application)",
        channel: "Direct Traffic",
        message: `Profile: ${profile} | Primary Goal: ${goal} | Notes: ${notes || "None"}`,
      });
    } catch (err) {
      console.error("Failed to save student application", err);
    }

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 500);
  }

  const whatsappMessage = encodeURIComponent(
    `Hello CreateVerse, I want to join the Digital Marketing Practical Cohort. My name is ${applicantName || "Applicant"} (${applicantPhone || "Student"}). Please share syllabus details and next batch timing.`
  );
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${whatsappMessage}`;

  if (submitted) {
    return (
      <div className="rounded-2xl sm:rounded-3xl border border-accent/40 bg-white p-6 sm:p-10 shadow-xl text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-ink">
          Application Received Successfully!
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-ink/75 font-normal max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-ink">{applicantName}</span>. Our lead instructors and admissions team will review your application and contact you within 2 hours.
        </p>

        <div className="mt-6 pt-6 border-t border-stone-200">
          <p className="text-xs font-semibold text-stone-500 mb-3">Want immediate confirmation or seat booking?</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pressable inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#1EBE5D] transition-all"
          >
            <WhatsAppIcon className="h-4 w-4 fill-current" />
            <span>Talk on WhatsApp for Instant Seat Booking</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-5 sm:p-8 shadow-card">
      <div className="mb-6 pb-4 border-b border-stone-200">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/[0.08] px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider text-accent mb-2">
          <Sparkles className="h-3 w-3" />
          <span>Limited Batch • Max 12 Seats</span>
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
          Apply for the Next Cohort
        </h3>
        <p className="mt-1 text-xs text-stone-500 font-normal">
          Fill out the application below to check batch availability and schedule your 1-on-1 counseling call.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-ink mb-1.5">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="e.g. Aryan Sharma"
            className={inputCls}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-ink mb-1.5">
              Phone / WhatsApp Number <span className="text-accent">*</span>
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
              Email Address <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="aryan@example.com"
              className={inputCls}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-ink mb-1.5">
              Current Profile / Background
            </label>
            <select name="profile" className={inputCls} defaultValue="College Student / Fresher">
              <option value="College Student / Fresher">College Student / Fresher</option>
              <option value="Working Professional (Marketing)">Working Professional (Marketing)</option>
              <option value="Working Professional (Non-Marketing)">Working Professional (Non-Marketing)</option>
              <option value="Freelancer / Solopreneur">Freelancer / Solopreneur</option>
              <option value="Business Owner / Founder">Business Owner / Founder</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-ink mb-1.5">
              Primary Goal
            </label>
            <select name="goal" className={inputCls} defaultValue="High-Paying Agency Job">
              <option value="High-Paying Agency Job">High-Paying Agency Job</option>
              <option value="Grow / Scale My Own Business">Grow / Scale My Own Business</option>
              <option value="Start High-Ticket Freelancing">Start High-Ticket Freelancing</option>
              <option value="Master Multi-Crore Ad Campaigns">Master Multi-Crore Ad Campaigns</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-ink mb-1.5">
            Any prior experience or specific goal? (Optional)
          </label>
          <textarea
            name="notes"
            rows={3}
            placeholder="Tell us about what you want to achieve or any tools you already know..."
            className={inputCls}
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={sending}
            className="pressable group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white shadow-md transition-all hover:bg-accent hover:shadow-lg disabled:opacity-70 cursor-pointer"
          >
            <span>{sending ? "Submitting Application..." : "Submit Application & Reserve Seat"}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <p className="text-center text-[11px] text-stone-500 font-medium">
          Zero spam guarantee • 100% confidential • Intake team responds within 2 hours
        </p>
      </div>
    </form>
  );
}
