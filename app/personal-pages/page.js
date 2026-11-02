import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import BookingSystemCard from "@/components/BookingSystemCard";
import { PERSONAL_PAGES } from "@/lib/personalPages";

const TITLE = "Personal Pages";
const DESCRIPTION =
  "A page built around you: performer, speaker, founder, or someone running more than one business at once. Bio, gallery, video, links and booking, all in one place, from AED 1,200.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/personal-pages",
  },
  openGraph: {
    type: "website",
    url: "/personal-pages",
    siteName: "Beyond Hello",
    title: `${TITLE} · Beyond Hello`,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} · Beyond Hello`,
    description: DESCRIPTION,
  },
};

export default function PersonalPagesPage() {
  return (
    <main className="pb-14">
      <PageBanner
        eyebrow="For individuals"
        title="Personal Pages"
        subtitle="A page that sells you as a professional - performer, speaker, founder, or someone running more than one business at once. Not a company site: your site."
        image="/images/personal-pages-banner.jpg"
      />

      <p className="mb-12 max-w-2xl text-sm leading-relaxed text-muted">
        Three tiers, each one building on the last: start with a single page, add a contact form
        when you're ready for enquiries, or go all the way to live booking and a calendar. Every
        tier is scoped on a quick call before anything is charged.
      </p>

      <div className="grid gap-5 sm:grid-cols-3">
        {PERSONAL_PAGES.map((pkg) => (
          <BookingSystemCard key={pkg.id} pkg={pkg} />
        ))}
      </div>

      <p className="mt-4 text-xs text-muted">
        All prices in AED. The studio is based in Dubai and works with clients across the UAE and
        worldwide.
      </p>

      <a
        href="https://wa.me/971552537712"
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-paper/80 transition-colors hover:text-pink"
      >
        Questions about a tier? Message us on WhatsApp →
      </a>

      <section className="mt-20 border-t border-line pt-16">
        <span className="eyebrow">What goes on the page</span>
        <h2 className="mt-4 font-body text-xl font-bold uppercase tracking-tight">
          Built around what you actually do
        </h2>
        <p className="mt-3 max-w-lg text-muted">
          Every Personal Page is different because every professional is. Mix and match from:
        </p>
        <ul className="mt-6 grid gap-x-8 gap-y-3 text-sm text-paper/90 sm:grid-cols-2">
          <li className="flex gap-2">
            <span className="text-pink">✓</span>
            <span>Bio and professional highlights</span>
          </li>
          <li className="flex gap-2">
            <span className="text-pink">✓</span>
            <span>Photo gallery</span>
          </li>
          <li className="flex gap-2">
            <span className="text-pink">✓</span>
            <span>YouTube and video embeds</span>
          </li>
          <li className="flex gap-2">
            <span className="text-pink">✓</span>
            <span>WhatsApp and email click-to-contact</span>
          </li>
          <li className="flex gap-2">
            <span className="text-pink">✓</span>
            <span>Links out to socials, press, other sites or ventures</span>
          </li>
          <li className="flex gap-2">
            <span className="text-pink">✓</span>
            <span>Multiple businesses or roles, presented as one professional story</span>
          </li>
          <li className="flex gap-2">
            <span className="text-pink">✓</span>
            <span>Contact form (Tier 2+)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-pink">✓</span>
            <span>Live booking and calendar (Tier 3)</span>
          </li>
        </ul>
      </section>

      <section className="mt-20 border-t border-line pt-16">
        <h2 className="font-body text-xl font-bold uppercase tracking-tight">Not sure which tier?</h2>
        <p className="mt-3 max-w-lg text-muted">
          Book a free 20-minute call and we'll figure out the right starting point together, no
          payment or obligation.
        </p>
        <Link href="/book?package=free-call" className="btn-primary mt-6">
          Book a consultation →
        </Link>
      </section>
    </main>
  );
}
