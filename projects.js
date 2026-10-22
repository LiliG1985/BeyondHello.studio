// Shared portfolio data, used by the Work page and the homepage's
// recent-work strip so project copy only has to be written once.
//
// To add a new case study: copy one of the objects below and fill it in.
// Set `featured: true` to also show it in the homepage's "Recent work"
// strip (that strip only ever shows the first 3 featured projects, so
// keep at most 3 marked `featured: true` at a time).
export const PROJECTS = [
  {
    id: "greenhouse",
    name: "Greenhouse Events UAE",
    tag: "Event production · Dubai",
    gradient: "pink",
    image: "/images/work/greenhouse.jpg",
    href: "https://greenhouseeventsuae.com",
    featured: true,
    brief:
      "A UAE-based production company running project management, entertainment, event coordination, venue dressing, fabrications, furniture rental, and wardrobe & costume, all under one roof. The old site buried that range behind a generic template that could have belonged to anyone.",
    build:
      "A black-and-gold, image-led design that reads more like a luxury hospitality brand than a typical services site: full-bleed photography, a portfolio gallery built to carry the weight of real event work, and a service breakdown that finally shows the full scope of what they actually run, in one glance instead of a buried dropdown menu.",
    testimonial: {
      quote:
        "Our old site was a generic template that didn't say anything about the range we actually run: event production, entertainment, venue dressing, fabrications, furniture rental, the lot. Beyond Hello rebuilt it as a black-and-gold, editorial site that finally looks like the events we produce, and shows the full picture in one scroll instead of a buried menu.",
      attribution: "Greenhouse Events UAE",
    },
  },
  {
    id: "sonkei",
    name: "Sonkei Co.",
    tag: "Apparel, nutrition & skincare · E-commerce",
    gradient: "blue",
    image: "/images/work/sonkei.jpg",
    href: "https://www.sonkei.co.com",
    featured: true,
    brief:
      "A lifestyle brand spanning three categories, apparel, nutrition, and skincare, that risked feeling like three unrelated shops sharing a logo.",
    build:
      "One editorial mood carried across all three: warm lifestyle photography, a single confident headline treatment, and navigation that lets a shopper move between categories without ever feeling like they left the brand.",
    testimonial: {
      quote:
        "Our brand spans apparel, nutrition, and skincare, and we were worried the site would feel like three different shops stitched together. Beyond Hello pulled it into one clean, editorial look that actually feels like us, and made it easy for people to move between categories without losing that. It's the first version of our site that's felt fully ours.",
      attribution: "Sonkei Co.",
    },
  },
  {
    id: "bynastasija",
    name: "By Nastasija",
    tag: "Skin & PMU studio, Dubai",
    gradient: "yellow",
    image: "/images/work/bynastasija.jpg",
    href: "https://bynastasija.com",
    featured: true,
    brief:
      "A skin and PMU studio in Dubai that wanted clients to book online without needing a call first, plus a simple place to keep consultation forms and client notes together.",
    build:
      "Booking website with deposits, consultation forms and a private client dashboard, built on the Booking & Client Management package: live availability, digital consultation forms with signatures, and a dashboard for managing every client and appointment.",
  },
  {
    id: "privatedisco",
    name: "Private Disco",
    tag: "Event experiences · UAE",
    gradient: "violet",
    image: "/images/work/privatedisco.jpg",
    href: "https://privatedisco.com/",
    featured: false,
    brief:
      "Private Disco runs talent-first event experiences across the UAE — DJs, live acts, décor and full event planning for yacht parties, villa nights, weddings and brand celebrations — and needed a site with the same high-energy, nightlife presence as the parties themselves.",
    build:
      "A site built to match that energy: bold, nightlife-driven visuals and a clear picture of the full service range, from DJs and live acts to décor and planning, so a booking enquiry is one click away.",
  },
];
