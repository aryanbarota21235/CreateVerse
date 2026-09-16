export interface ServiceDiagnosis {
  eyebrow: string;
  sectionTitle: string;
  sectionDesc: string;
  problemResult: string;
  solutionBadge: string;
  solutionTitle: string;
  solutionDesc: string;
  solutionResult: string;
  deliverablesIntro: string;
  playbookIntro: string;
}

export function getServiceDiagnosis(slug: string, category: string): ServiceDiagnosis {
  // 1. Technology / Web Development
  if (slug === "web-development" || category === "Technology") {
    return {
      eyebrow: "Architecture Diagnosis",
      sectionTitle: "Why Most Websites Fail to Convert",
      sectionDesc:
        "Most digital agencies build slow, bloated template sites with zero conversion funnels. Here is how we engineer sub-second, revenue-producing digital infrastructure.",
      problemResult: "Result: Sub-second visitor drop-offs, bloated bounce rates, and wasted acquisition traffic.",
      solutionBadge: "The CreateVerse Standard",
      solutionTitle: "Sub-Second Speed & Conversion Engineering",
      solutionDesc:
        "We engineer bespoke Next.js and Tailwind web architectures with sub-800ms Core Web Vitals, conversion-led copywriting, frictionless inquiry workflows, and instant CRM/WhatsApp pipelines built in from day one.",
      solutionResult: "Result: 3.2x higher visitor-to-lead conversion, 100% Core Web Vitals, and compounding search equity.",
      deliverablesIntro:
        "No fragmented freelancers or rigid templates. We handle user experience design, conversion copywriting, custom Next.js development, and CRM integrations under one roof.",
      playbookIntro:
        "Structured execution from discovery and wireframing to high-performance development, QA, and conversion launch.",
    };
  }

  // 2. Creative Services & Brand Design / Graphic Design
  if (slug === "creative-services" || slug === "graphic-design" || category === "Creative") {
    return {
      eyebrow: "Brand Architecture Diagnosis",
      sectionTitle: "Why Cookie-Cutter Design Fails to Sell",
      sectionDesc:
        "Template visuals and stock-photo graphics dilute market trust and commoditize your pricing. Here is how we design visual systems that command authority.",
      problemResult: "Result: Low perceived brand value, commodity pricing pressure, and forgettable ad performance.",
      solutionBadge: "The CreateVerse Standard",
      solutionTitle: "Bespoke Design Systems & Commercial Authority",
      solutionDesc:
        "We develop distinct typographic hierarchies, luxury color psychology, high-converting performance ad creative kits, and institutional brand collateral that command premium market positioning.",
      solutionResult: "Result: Higher perceived authority, instant brand recall, and higher click-to-conversion rates.",
      deliverablesIntro:
        "No generic stock templates. We craft distinctive typography, brand color systems, vector logo suites, and performance ad creative assets tailored to your market.",
      playbookIntro:
        "Structured design progression from brand discovery and visual exploration to finalized vector suites and identity guidelines.",
    };
  }

  // 3. Social Media Management / Marketing / Optimization
  if (
    slug === "social-media-management" ||
    slug === "social-media-marketing" ||
    slug === "social-media-optimization"
  ) {
    return {
      eyebrow: "Social Architecture Diagnosis",
      sectionTitle: "Why Aimless Posting Fails to Produce Inquiries",
      sectionDesc:
        "Posting generic graphics without narrative hooks or bio funnels produces vanity engagement but zero commercial pipeline. Here is how we turn attention into qualified inquiries.",
      problemResult: "Result: Disconnected content calendars, stagnant reach, and zero pipeline impact.",
      solutionBadge: "The CreateVerse Standard",
      solutionTitle: "High-Retention Content Operations & Inbound Funnels",
      solutionDesc:
        "We execute platform-native content calendars, viral short-form video hooks, strategic bio funnels, and automated DM inquiry workflows that turn casual followers into paying clients.",
      solutionResult: "Result: Compounding community trust, higher organic reach, and predictable inbound lead flow.",
      deliverablesIntro:
        "No random filler posts. We deliver high-production reels, graphics, strategic captions, and active community engagement designed to convert audience into customers.",
      playbookIntro:
        "Structured ramp-up from narrative blueprint and creative asset design to daily operations and audience conversion.",
    };
  }

  // 4. Content Marketing & SEO
  if (slug === "content-marketing") {
    return {
      eyebrow: "Search & Content Diagnosis",
      sectionTitle: "Why Superficial SEO Articles Never Drive Sales",
      sectionDesc:
        "Publishing keyword-stuffed AI filler ranks for low-intent search terms that never buy. Here is how we engineer authoritative, bottom-of-funnel editorial assets that capture high-intent buyers.",
      problemResult: "Result: Vanity traffic spikes, zero commercial intent, and wasted content spend.",
      solutionBadge: "The CreateVerse Standard",
      solutionTitle: "High-Intent Editorial & Search Equity",
      solutionDesc:
        "We engineer comprehensive decision frameworks, competitor comparison matrices, technical SEO schema, and search equity that generates inbound pipeline for years.",
      solutionResult: "Result: Top organic search placements, zero paid ad cost per lead, and compounding commercial equity.",
      deliverablesIntro:
        "No low-value word count. We research, write, design, and optimize comprehensive industry guides and search funnels that drive revenue.",
      playbookIntro:
        "Structured content deployment from keyword intent mapping and technical audits to editorial production and organic scaling.",
    };
  }

  // 5. Influencer Marketing
  if (slug === "influencer-marketing") {
    return {
      eyebrow: "Creator Economy Diagnosis",
      sectionTitle: "Why Generic Influencer Shoutouts Burn Budget",
      sectionDesc:
        "Paying creators for one-off stories with unverified audiences burns capital without attribution. Here is how we orchestrate performance-led creator partnerships.",
      problemResult: "Result: Unverified follower reach, zero attribution tracking, and wasted influencer fees.",
      solutionBadge: "The CreateVerse Standard",
      solutionTitle: "Performance Creator Partnerships & Whitelisting",
      solutionDesc:
        "We vet authentic creator audiences, structure commercial briefs, deploy trackable offer funnels, and amplify top-performing creator assets via paid ad whitelisting.",
      solutionResult: "Result: Verified third-party validation, trackable customer acquisition, and reusable high-converting assets.",
      deliverablesIntro:
        "No guesswork or unvetted creators. We manage talent discovery, rate negotiations, contract compliance, content briefing, and performance tracking.",
      playbookIntro:
        "Structured creator mobilization from talent vetting and contract execution to campaign launch and whitelisted scaling.",
    };
  }

  // 6. Default: Acquisition & Advertising (Real Estate, Immigration, Google Ads, Performance Marketing, Paid Social, Lead Gen)
  return {
    eyebrow: "Strategic Diagnosis",
    sectionTitle: "Why Generic Campaigns Fail",
    sectionDesc:
      "Most agencies focus on vanity clicks, bloated impressions, and unverified form fills. Here is how we engineer actual commercial outcomes.",
    problemResult: "Result: High ad spend, junk inquiries, and exhausted sales teams.",
    solutionBadge: "The CreateVerse Standard",
    solutionTitle: "Verified Pipeline & Precision Acquisition",
    solutionDesc:
      "We replace vanity clicks with qualification gates, CRM automation, and performance-led creative systems. Every inquiry is verified for budget, intent, and timeline before your team spends time calling.",
    solutionResult: "Result: Higher close rates, verified commercial pipeline, and predictable ROI.",
    deliverablesIntro:
      "No fragmented agencies. We handle strategy, creative production, ad buying, tracking, and qualification under one roof.",
    playbookIntro:
      "Structured ramp-up from market research to full multi-channel acquisition and compounding pipeline.",
  };
}
