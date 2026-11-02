// Personal Pages: a landing page built around one person, not a business -
// performers, speakers, founders and entrepreneurs who run more than one
// venture and want a single page that sells them as a professional,
// separate from (or alongside) any business sites they already have.
//
// Shown on their own /personal-pages page and booked through a consultation
// (like Booking & Client Systems and Brand Packs) rather than the Stripe
// checkout flow, since final scope - how much gallery/video content, how
// many links - varies person to person.
export const PERSONAL_PAGES = [
  {
    id: "personal-landing",
    name: "Landing Page",
    aedFrom: 1500,
    tagline: "One page that sells you, not just your business.",
    timeline: "2–3 days (subject to calendar availability)",
    features: [
      "Single custom-designed landing page",
      "Bio and professional highlights",
      "Photo gallery",
      "Embedded YouTube / video reel",
      "WhatsApp and email click-to-contact",
      "Links out to socials, press, bookings or other sites",
      "Mobile-first, fast-loading build",
    ],
  },
  {
    id: "personal-contact",
    name: "Landing Page + Contact",
    aedFrom: 1900,
    featured: true,
    featuredLabel: "Most popular",
    tagline: "Everything in Landing Page, plus a way for people to actually reach you.",
    timeline: "2–3 days (subject to calendar availability)",
    includesNote: "Includes everything in Landing Page, plus:",
    features: [
      "Contact form, sent straight to your inbox",
      "Enquiry details collected up front, so you know who's asking and why",
    ],
  },
  {
    id: "personal-booking",
    name: "Landing Page + Booking",
    aedFrom: 6500,
    priceNote: "scope grows with CRM / client-data needs",
    tagline:
      "Your page, plus booking systems, calendars, client data capture and CRM, scoped to what you actually need.",
    timeline: "5–7 days (subject to calendar availability)",
    includesNote: "Includes everything in Landing Page + Contact, plus:",
    features: [
      "Online booking with live availability from your Google Calendar",
      "Deposit requests worked out for each booking",
      "Private password-protected dashboard",
      "Client / booker profiles with history and notes",
      "Email confirmations to you and the person booking",
      "Everything synced to Google Calendar and Google Sheets",
      "Scales up to a full CRM for heavier client-data needs",
    ],
  },
];
