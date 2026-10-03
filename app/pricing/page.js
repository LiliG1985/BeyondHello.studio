import { PACKAGE_LIST, MAINTENANCE_PLANS } from "@/lib/packages";
import { BOOKING_SYSTEMS } from "@/lib/bookingSystems";
import { BRAND_PACKS } from "@/lib/brandPacks";
import PricingCard from "@/components/PricingCard";
import BookingSystemCard from "@/components/BookingSystemCard";
import MaintenanceCard from "@/components/MaintenanceCard";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";

const PRICING_TITLE = "Pricing";
const PRICING_DESCRIPTION =
  "Website packages from AED 2,600, booking & client systems, brand packs and ongoing care plans. Book a free call and pay a deposit once your project is scoped.";

export const metadata = {
  title: PRICING_TITLE,
  description: PRICING_DESCRIPTION,
  alternates: {
    canonical: "/pricing",
  },
  // Pages inherit the homepage's Open Graph/Twitter card data unless they set
  // their own, so without this a link to /pricing shared on WhatsApp,
  // LinkedIn etc. would show the homepage's title and blurb instead of this
  // page's - this is what makes the shared preview actually match the page.
  openGraph: {
    type: "website",
    url: "/pricing",
    siteName: "Beyond Hello",
    title: `${PRICING_TITLE} · Beyond Hello`,
    description: PRICING_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PRICING_TITLE} · Beyond Hello`,
    description: PRICING_DESCRIPTION,
  },
};

const FAQS = [
  {
    q: "How does the deposit work?",
    a: "Nothing is charged when you book. We scope your project and confirm the exact price on a quick call first, then send a secure link to pay your deposit and lock your build slot. The remaining balance is invoiced once the site is ready to launch.",
  },
  {
    q: "Why not just buy a template for less?",
    a: "You can, and plenty of businesses do. A template is fast and cheap because someone else already made every decision for you: the layout, the pacing, the way it makes a visitor feel. A custom build costs more because those decisions get made around your business specifically. If a template is doing the job, keep it. If it's starting to feel like everyone else's site, that's usually the moment to switch.",
  },
  {
    q: "What if my project doesn't fit a package?",
    a: "Book a free scoping call from the Custom package. We'll talk through what you need and send a fixed quote before anything is charged.",
  },
  {
    q: "Do you work with clients outside your timezone?",
    a: "Yes. This is a remote, Dubai-based studio working with clients worldwide: calls are scheduled around your timezone, and updates happen asynchronously in between.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Your logo and brand assets if you have them, any copy or content you want included, and a few examples of sites you like. If you don't have all of that yet, that's normal. We'll figure it out together on the kickoff call.",
  },
  {
    q: "Do I need a Care plan?",
    a: "No, every site launches in working order without one. A Care plan just covers what happens after: keeping software updated, backups running, and small edits handled without you needing to open a ticket somewhere else.",
  },
];

// Structured data for the FAQ section below, so Google can show these
// questions directly in search results (the "People also ask"-style
// expandable rich result) instead of someone having to click through first.
const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function PricingPage() {
  return (
    <main className="pb-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <PageBanner
        eyebrow="Pricing"
        title="Packages"
        subtitle="Clear starting prices, scoped to your project on a quick call. Pick a package, pay a deposit to lock your build slot, and the rest happens on the calendar."
        image="/images/pricing-header-banner.jpg"
      />

      <p className="mb-12 max-w-2xl text-sm leading-relaxed text-muted">
        These numbers sit at the competitive, well-run end of the real 2026 Dubai market, not a
        padded agency rate card. You're paying for the build itself: no unnecessary layers
        between you and the people doing the work.
      </p>

      <div className="grid gap-5 sm:grid-cols-3">
        {PACKAGE_LIST.map((pkg) => (
          <PricingCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
      <p className="mt-4 text-xs text-muted">
        All prices in AED. The studio is based in Dubai and works with clients across the UAE
        and worldwide.
      </p>
      <a
        href="https://wa.me/971552537712"
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-paper/80 transition-colors hover:text-pink"
      >
        Questions about a package? Message us on WhatsApp →
      </a>

      <section className="mt-20 border-t border-line pt-16">
        <span className="eyebrow">New</span>
        <h2 className="mt-4 font-body text-xl font-bold uppercase tracking-tight">
          Booking &amp; Client Systems
        </h2>
        <p className="mt-3 max-w-lg text-muted">
          Let clients book online while you stay in control. A private dashboard for your diary,
          your clients and your forms, built around how your business actually works.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {BOOKING_SYSTEMS.map((pkg) => (
            <BookingSystemCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <p className="mt-4 max-w-lg text-xs text-muted">
          No booking fees and no monthly app subscription. Your system runs on your own Google
          account, and you own everything.
        </p>
        <Link href="/book?package=free-call" className="btn-primary mt-8">
          Book a consultation →
        </Link>
      </section>

      <section className="mt-20 border-t border-line pt-16">
        <span className="eyebrow">Optional</span>
        <h2 className="mt-4 font-body text-xl font-bold uppercase tracking-tight">
          Ongoing care
        </h2>
        <p className="mt-3 max-w-lg text-muted">
          Once a site is live, someone still has to keep it updated, backed up, and current.
          Add a Care plan whenever you want that handled, no long-term contract required.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {MAINTENANCE_PLANS.map((plan) => (
            <MaintenanceCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      <section className="mt-20 border-t border-line pt-16">
        <span className="eyebrow">Design services</span>
        <h2 className="mt-4 font-body text-xl font-bold uppercase tracking-tight">
          Brand Packs
        </h2>
        <p className="mt-3 max-w-lg text-muted">
          Logos, flyers, social templates and merchandise, designed to match. Sold on their own,
          with or without a website build.
        </p>

        <div className="relative left-1/2 right-1/2 mt-8 -mx-[50vw] w-screen">
          {/* Separate crop for phones, same pattern as the booking systems
              banner further up - keeps the products and logo readable on a
              narrow screen instead of squashing the wide banner down. */}
          <img
            src="/images/brand-packs-banner-mobile.jpg"
            alt="A Beyond Hello brand pack laid out on marble: a laptop and phone showing the website, a brand identity guidelines book, business cards, a tote bag, a water bottle, a cap and a sweatshirt, all carrying the same logo and look, in a plant-filled courtyard with the Dubai skyline at dusk"
            className="w-full object-cover sm:hidden"
          />
          <img
            src="/images/brand-packs-banner.jpg"
            alt="A Beyond Hello brand pack laid out on marble: a desktop and phone showing the website, a brand identity guidelines book, business cards, a tote bag, a water bottle, a cap and a sweatshirt, all carrying the same logo and look, in front of a Dubai skyline at dusk"
            className="hidden w-full object-cover sm:block sm:max-h-[420px]"
          />
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {BRAND_PACKS.map((pkg) => (
            <BookingSystemCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <Link href="/book?package=free-call" className="btn-primary mt-8">
          Book a consultation →
        </Link>
      </section>

      {/* Go bigger - event and activation branding, priced on request rather
          than as fixed packages since the scope varies so much job to job. */}
      <section className="grid items-center gap-12 border-t border-line py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="glow-blob absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-gradient-to-br from-pink via-violet to-blue opacity-30" />
          <img
            src="/images/go-bigger.jpg"
            alt="A branded event activation at night: a step and repeat wall, feather flags and an entrance tunnel all carrying the Beyond Hello logo, with lounge seating and branded giveaways in the foreground"
            className="relative w-full rounded-xl border border-line object-cover shadow-2xl"
          />
        </div>
        <div>
          <span className="eyebrow">Go bigger</span>
          <h2 className="mt-4 font-body text-xl font-bold uppercase tracking-tight sm:text-2xl">
            Branding for events and activations
          </h2>
          <p className="mt-3 max-w-lg text-muted">
            For launches, pop ups and activations that need to feel unmistakably yours, down to
            the smallest detail on the table.
          </p>
          <ul className="mt-5 flex flex-col gap-2 text-sm text-paper/90">
            <li className="flex gap-2">
              <span className="text-pink">✓</span>
              <span>Step and repeat walls</span>
            </li>
            <li className="flex gap-2">
              <span className="text-pink">✓</span>
              <span>Feather flags and banners</span>
            </li>
            <li className="flex gap-2">
              <span className="text-pink">✓</span>
              <span>Branded giveaways and favours</span>
            </li>
            <li className="flex gap-2">
              <span className="text-pink">✓</span>
              <span>Event cushions and soft furnishings</span>
            </li>
            <li className="flex gap-2">
              <span className="text-pink">✓</span>
              <span>Custom fabrications: entrances, backdrops and stage sets</span>
            </li>
          </ul>
          <p className="mt-5 text-sm font-semibold text-paper/80">
            Price on request, scoped to your event.
          </p>
          <Link href="/book?package=free-call" className="btn-primary mt-6">
            Book a consultation →
          </Link>
        </div>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-start">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-bold">Questions</h2>
          <div className="mt-6 flex flex-col divide-y divide-line border-t border-line">
            {FAQS.map((item) => (
              <div key={item.q} className="py-5">
                <h3 className="font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm text-muted">{item.a}</p>
              </div>
            ))}
          </div>
          <Link href="/book" className="btn-primary mt-10">
            Book your build →
          </Link>
        </div>

        <div className="relative mx-auto hidden w-full max-w-xs lg:block">
          <div className="glow-blob absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-gradient-to-br from-blue via-violet to-pink opacity-30" />
          <img
            src="/images/desk-detail.jpg"
            alt="Studio desk detail, lit by neon light"
            className="relative w-full rounded-xl border border-line object-cover shadow-2xl"
          />
          <p className="mt-5 text-xs leading-relaxed text-muted">
            Every package is scoped before it's booked, so the number you see is the number you
            pay, deposit included.
          </p>
        </div>
      </section>
    </main>
  );
}
