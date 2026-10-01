// Booking & Client Systems packages, shown on the pricing page after the
// website packages. Kept separate from lib/packages.js on purpose: those
// packages feed the booking form dropdown and the Stripe checkout route
// directly by id, and these new ones don't have deposit amounts set yet, so
// they're booked through a consultation instead (see the "Book a
// consultation" button on the pricing page, which just reuses the existing
// free-call booking flow rather than a new checkout path).
export const BOOKING_SYSTEMS = [
  {
    id: "booking-add-on",
    name: "Booking Add On",
    aedFrom: 6500,
    tagline: "For clients who already have a website (or are on Starter or Growth).",
    timeline: "2 weeks",
    features: [
      "Online booking with live availability from your Google Calendar",
      "Treatment lengths, breaks and gaps between clients handled automatically",
      "New and returning client flow",
      "Deposit requests worked out for each booking",
      "Email confirmations to you and your client",
      "One tap WhatsApp messages",
    ],
  },
  {
    id: "booking-client-management",
    name: "Booking & Client Management",
    featured: true,
    featuredLabel: "Most complete",
    aedFrom: 12500,
    tagline: "A complete booking website with a private studio dashboard and light CRM.",
    timeline: "2 to 3 weeks",
    includesNote: "Includes everything in Booking Add On, plus:",
    features: [
      "Private password protected studio dashboard",
      "Diary and full yearly calendar showing free and booked days",
      "Client profiles with history, visits and private notes",
      "Digital consultation forms with signatures, with health flags highlighted",
      "Add appointments by hand, for walk ins, regulars and past bookings",
      "Block time off for holidays and training",
      "Everything synced to Google Calendar and Google Sheets",
    ],
  },
  {
    id: "custom-crm",
    name: "Custom CRM",
    aedFrom: 18000,
    priceNote: "by consultation",
    tagline:
      "For businesses that need more: marketing messages, automated follow ups, rebooking reminders, reports, multiple staff logins or online card payments. Timing scoped together before we start.",
  },
];
