// Standalone digital design services, sold separately from a website build.
// Kept out of lib/packages.js (PACKAGE_LIST) since these don't feed the
// Stripe checkout route or the booking form's package dropdown - like
// lib/bookingSystems.js, they're a display-only section that points to a
// consultation booking instead of a deposit checkout.
//
// Starting prices set directly: 600 / 1,900 / 4,500.
export const BRAND_PACKS = [
  {
    id: "brand-identity",
    name: "Brand Identity",
    aedFrom: 600,
    tagline: "Not sure of your direction yet? See 3 different brand concepts before you commit to one.",
    timeline: "1 to 3 days",
    features: [
      "3 distinct brand directions to choose between",
      "A logo concept for each direction",
      "A colour palette for each direction",
      "An overall visual style for each direction",
    ],
  },
  {
    id: "brand-pack",
    name: "Brand Pack",
    featured: true,
    featuredLabel: "Most popular",
    aedFrom: 1900,
    tagline: "Your brand, designed and delivered: logo, business cards, email signature, flyers and templates.",
    timeline: "1 to 3 days",
    features: [
      "Logo design, with a few concepts and revisions",
      "Business card design",
      "Email signature design",
      "2 flyer designs",
      "2 social media template designs",
      "A colour and font guide to keep things consistent",
    ],
  },
  {
    id: "brand-merchandise",
    name: "Brand & Merchandise",
    aedFrom: 4500,
    tagline: "For brands that want their look on real products as well as screens.",
    timeline: "1 to 3 days",
    includesNote: "Includes everything in Brand Pack, plus:",
    features: [
      "Merchandise designs: apparel, mugs, tote bags and similar",
      "Print-ready files for your chosen supplier",
    ],
  },
];
