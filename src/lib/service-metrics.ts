export interface ServiceMetric {
  value: string;
  label: string;
  desc: string;
}

export const SERVICE_METRICS_MAP: Record<string, ServiceMetric[]> = {
  "real-estate-lead-generation": [
    { value: "₹48.6 Cr+", label: "Inventory Closed", desc: "Verified commercial & residential bookings" },
    { value: "3,400+", label: "Buyer Site Visits", desc: "High-intent walk-ins scheduled & qualified" },
    { value: "< 3 Mins", label: "WhatsApp Routing", desc: "Instant automated lead qualification & CRM handoff" },
    { value: "4.2x", label: "Blended Campaign ROAS", desc: "Capital deployed vs revenue generated" },
  ],
  "immigration-lead-generation": [
    { value: "3,850+", label: "Consultations Booked", desc: "Pre-screened study, PR & investor visa leads" },
    { value: "84%", label: "Walk-In Attendance", desc: "High-show rate driven by automated SMS & WhatsApp" },
    { value: "14+", label: "Target Destinations", desc: "Canada, UK, Australia, Europe & US pipelines" },
    { value: "98.2%", label: "Lead Qualification SLA", desc: "Filtering unqualified prospects before counselor calls" },
  ],
  "performance-marketing": [
    { value: "4.2x", label: "Blended ROAS Delivered", desc: "Average return across Google & Meta campaigns" },
    { value: "₹12 Cr+", label: "Ad Spend Optimized", desc: "Data-driven capital deployment across verticals" },
    { value: "48h", label: "Creative Iteration Cycle", desc: "Continuous A/B testing of hooks & video assets" },
    { value: "99.4%", label: "Attribution Accuracy", desc: "Server-side tracking & CAPI conversion modeling" },
  ],
  "google-ads": [
    { value: "Top-3", label: "Absolute Search Placement", desc: "Dominating high-intent transactional search queries" },
    { value: "42%", label: "Lower Cost Per Lead", desc: "Efficiency unlocked through negative keyword shields" },
    { value: "100%", label: "Negative Keyword Shield", desc: "Zero wasted ad spend on irrelevant search traffic" },
    { value: "99.8%", label: "Conversion Tracking Fidelity", desc: "Full-funnel Google Tag Manager & GA4 architecture" },
  ],
  "social-media-paid-ads": [
    { value: "3.8x", label: "ROAS Multiplier", desc: "Creative-led paid social acquisition on Meta & IG" },
    { value: "12.4M+", label: "Video Hook Views", desc: "High-retention video ad creatives engineered to convert" },
    { value: "24h", label: "Creative Refresh Engine", desc: "Fatigue monitoring & rapid visual variation tests" },
    { value: "88%", label: "First-3-Sec Hook Retention", desc: "Stopping the scroll with compelling visual hooks" },
  ],
  "web-development": [
    { value: "< 800ms", label: "Sub-Second Load Time", desc: "Next.js & React architecture for instant page rendering" },
    { value: "3.2x", label: "Conversion Rate Lift", desc: "Frictionless form design & CRO-optimized layouts" },
    { value: "100%", label: "Mobile Responsive Fidelity", desc: "Pixel-perfect touch ergonomics on all screen sizes" },
    { value: "0ms", label: "Cumulative Layout Shift", desc: "Zero visual jumping or CLS penalties on Core Web Vitals" },
  ],
  "lead-generation": [
    { value: "100%", label: "Verified Contact Handoff", desc: "Real phone numbers and email verification pre-checks" },
    { value: "< 60s", label: "CRM Webhook Dispatch", desc: "Instant lead synchronization to sales rep dashboards" },
    { value: "4.8x", label: "Qualified Pipeline Multiple", desc: "High-intent buyer inquiries ready for closing" },
    { value: "3-Tier", label: "Anti-Fraud Filtering", desc: "Bot prevention, disposable email & phone scrubbing" },
  ],
  "creative-services": [
    { value: "100%", label: "Bespoke Design Systems", desc: "Custom luxury branding, typography & digital assets" },
    { value: "48h", label: "Production Turnaround", desc: "High-speed ad creative and asset delivery cycles" },
    { value: "3.4x", label: "Ad Click-Through Lift", desc: "High-contrast visual design that outperforms generic stock" },
    { value: "Vector", label: "Master Asset Delivery", desc: "Production-ready SVG, Figma & 4K print export files" },
  ],
  "influencer-marketing": [
    { value: "450+", label: "Vetted Creator Network", desc: "Regional & national influencers with genuine engagement" },
    { value: "3.6x", label: "Organic Engagement Lift", desc: "Third-party trust translating to direct inquiries" },
    { value: "100%", label: "Commercial Usage Rights", desc: "Whitelisting and spark ad licensing pre-negotiated" },
    { value: "0%", label: "Vanity Engagement Waste", desc: "Strict fraud-audit on follower legitimacy & bot comments" },
  ],
  "content-marketing": [
    { value: "340%", label: "Organic Search Growth", desc: "High-authority editorial and search-optimized content" },
    { value: "Top-10", label: "Target Keyword Rankings", desc: "Dominating commercial intent search queries" },
    { value: "4.1x", label: "Content Pipeline Multiplier", desc: "Blogs, guides and whitepapers converting to leads" },
    { value: "100%", label: "Human Editorial Standard", desc: "Deep industry-specific research, no generic AI fluff" },
  ],
};

export const DEFAULT_SERVICE_METRICS: ServiceMetric[] = [
  { value: "98.5%", label: "Client Retainer Retention", desc: "Long-term partnership driven by verified ROI" },
  { value: "< 24h", label: "Rapid Onboarding SLA", desc: "Campaign architecture live within one business day" },
  { value: "3.8x", label: "Average Growth Multiple", desc: "Capital efficiency across active client campaigns" },
  { value: "100%", label: "Transparent Governance", desc: "Live dashboard tracking and direct director access" },
];

export function getServiceMetrics(slug: string): ServiceMetric[] {
  return SERVICE_METRICS_MAP[slug] ?? DEFAULT_SERVICE_METRICS;
}
