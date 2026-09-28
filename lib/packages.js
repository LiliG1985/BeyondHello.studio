// Central source of truth for packages, used by the pricing page,
// the booking form, and the checkout API route.
//
// Pricing sits just above the entry-level floor of the 2026 Dubai web design
// market: freelance/small-studio baselines start around AED 2,900 (basic),
// AED 5,900 (mid-tier custom), and AED 9,500+ (e-commerce/custom app), and
// the market runs several times higher than that at the agency end.
// Deliberately priced competitive rather than rock-bottom, so it reads as a
// fair, confident price rather than the cheapest option on the page.
// All prices are quoted in AED; the studio is Dubai-based.
export const PACKAGES = {
  starter: {
    id: "starter",
    name: "Starter",
    tagline: "A sharp, credible first site",
    aed: 3500,
    deposit: 1300,
    timeline: "5–10 days",
    bestFor: "Personal brands, solo consultants, small local businesses",
    features: [
      "1–5 custom-designed pages",
      "Mobile-first, fast-loading build",
      "On-page SEO basics",
      "Contact form",
      "1 round of revisions",
    ],
  },
  growth: {
    id: "growth",
    name: "Growth",
    tagline: "For businesses ready to be found",
    aed: 7800,
    deposit: 2300,
    featured: true,
    timeline: "2–3 weeks",
    bestFor: "Growing service businesses and small teams",
    features: [
      "Up to 10 pages, custom brand system",
      "Built-in CMS so you can edit content yourself",
      "Blog + booking/contact integrations",
      "Analytics setup",
      "Arabic-ready layout on request",
      "2 rounds of revisions",
    ],
  },
  custom: {
    id: "custom",
    name: "Elevated / Custom",
    tagline: "For anything with real backend logic",
    aedFrom: 18000,
    deposit: 5500,
    timeline: "Scoped on a call",
    bestFor: "E-commerce, web apps, dashboards, membership or booking platforms",
    features: [
      "Fully custom design and UX",
      "E-commerce, payments, or app logic",
      "Third-party & API integrations",
      "Multi-language builds (Arabic/English) on request",
      "Scoped 1:1 before you book",
    ],
  },
};

export const PACKAGE_LIST = Object.values(PACKAGES);

// A free scoping call, offered as an option in the booking flow alongside
// the paid packages, but kept out of PACKAGE_LIST so it doesn't show up as a
// 4th card on the pricing page - it's a booking-form option, not a package.
export const FREE_CALL = {
  id: "free-call",
  name: "Free 20-min call",
  tagline: "Talk it through before you book anything",
  aed: 0,
  deposit: 0,
  timeline: "20 minutes",
  bestFor: "Anyone who wants to talk before committing to a package",
  features: [
    "A short call to talk through your project",
    "No payment, no obligation",
    "We'll recommend the right package afterward, if any",
  ],
};

export function getPackage(id) {
  if (id === FREE_CALL.id) return FREE_CALL;
  return PACKAGES[id] || null;
}

// Optional ongoing care, sold separately from the one-time build packages.
// Benchmarked against Dubai retainer pricing: basic upkeep commonly runs
// AED 300-900/mo, and standard CMS/marketing-site care AED 900-2,500/mo.
export const MAINTENANCE_PLANS = [
  {
    id: "care-standard",
    name: "Care · Standard",
    tagline: "Keeps the site running and up to date",
    aed: 500,
    period: "mo",
    features: [
      "Uptime monitoring & backups",
      "Software & security updates",
      "Small text or image swaps, up to 30 min/month",
      "Email support, 2 business day turnaround",
    ],
  },
  {
    id: "care-priority",
    name: "Care · Priority",
    tagline: "For sites that change often",
    aed: 1200,
    period: "mo",
    features: [
      "Everything in Standard",
      "Up to 2 hours of content updates a month",
      "Priority turnaround, 1 business day",
      "Quarterly performance & security review",
    ],
  },
];
