// Standalone digital design services, sold separately from a website build.
// Kept out of lib/packages.js (PACKAGE_LIST) since these don't feed the
// Stripe checkout route or the booking form's package dropdown - like
// lib/bookingSystems.js, they're a display-only section that points to a
// consultation booking instead of a deposit checkout.
//
// Starting prices: the lowest tier (AED 1,500) was set directly. The two
// higher tiers are a judgement call based on typical Dubai freelance/studio
// design pricing, scaled up by what's added at each step - worth checking
// and adjusting if they don't feel right.
export const BRAND_PACKS = [
  {
    id: "brand-identity",
    name: "Brand Identity",
    aedFrom: 1500,
    tagline: "A logo plus the basics you need to look put together from day one.",
    timeline: "3 to 5 days",
    features: [
      "Logo design, with a few concepts and revisions",
      "Business card design",
      "A small set of social media templates",
    ],
  },
  {
    id: "brand-pack",
    name: "Brand Pack",
    featured: true,
    featuredLabel: "Most popular",
    aedFrom: 2800,
    tagline: "A fuller set of matching pieces, so everything looks like it belongs together.",
    timeline: "1 week",
    features: [
      "Logo design, with a few concepts and revisions",
      "Business card design",
      "Flyer designs for promotions and events",
      "An expanded social media template set",
      "A simple colour and font guide to keep things consistent",
    ],
  },
  {
    id: "brand-merchandise",
    name: "Brand & Merchandise",
    aedFrom: 4500,
    tagline: "For brands that want their look on real products as well as screens.",
    timeline: "1 to 2 weeks",
    includesNote: "Includes everything in Brand Pack, plus:",
    features: [
      "Merchandise designs: apparel, mugs, tote bags and similar",
      "Print-ready files for your chosen supplier",
    ],
  },
];
