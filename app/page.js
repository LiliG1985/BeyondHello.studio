import Link from "next/link";
import WorkTile from "@/components/WorkTile";
import Testimonials from "@/components/Testimonials";

// No title here on purpose - it inherits the site default title from the
// root layout, so this stays in sync with it automatically.
export const metadata = {
  description:
    "Custom websites for founders and brands who want their first impression to hold up, from AED 2,600. Dubai-based, worldwide clients. Book your build online.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main>
      {/* Phones only: lead with the "Your site is doing the talking first"
          graphic before anything else, so it's the first thing people see.
          Everything below (including the hero heading) just follows after
          it. Moved up from the "Why it matters" section further down the
          page, rather than shown twice. */}
      <div className="-mx-5 mb-6 sm:hidden">
        <img
          src="/images/why-it-matters-mobile.webp"
          alt="Your site is doing the talking first - a woman in a flowing gold gown surrounded by swirling ribbons of light and glowing orbs, in pink, blue and gold"
          className="w-full"
        />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-6 sm:py-10">
        {/* Smaller and tucked into the corners on phones - at full desktop size
            these washed together into one shapeless smear across the text on
            narrow screens instead of reading as a deliberate accent. */}
        <div className="glow-blob pointer-events-none absolute -left-16 -top-16 h-36 w-36 rounded-full bg-pink opacity-10 sm:-left-24 sm:-top-24 sm:h-72 sm:w-72 sm:opacity-20" />
        <div className="glow-blob pointer-events-none absolute -right-12 top-0 h-32 w-32 rounded-full bg-blue opacity-10 sm:-right-16 sm:top-32 sm:h-72 sm:w-72 sm:opacity-20" />
        <div className="glow-blob pointer-events-none absolute hidden bottom-0 left-1/3 h-56 w-56 rounded-full bg-yellow opacity-10 sm:block" />
        {/* Extra colour down where the services list and stats strip sit -
            that stretch was past the reach of the glows above it and read
            as flat and plain, especially on phones. */}
        <div className="glow-blob pointer-events-none absolute bottom-0 right-0 h-44 w-44 rounded-full bg-gradient-to-br from-yellow via-pink to-violet opacity-10 sm:h-64 sm:w-64 sm:opacity-20" />

        <div className="relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <h1 className="font-body text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              We build the website
              <br />
              your competitors
              <br />
              <span className="text-gradient">wish they had</span>
            </h1>
            <div className="mt-7 h-px w-10 bg-paper/30" />
            <p className="mt-7 max-w-md text-lg leading-relaxed text-muted">
              Visitors decide whether to stay in seconds, before they read a word. We build
              custom, launch-ready sites that make those seconds count. Pick a package, book your
              slot, and we take it from there.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link href="/book" className="btn-primary">
                Book your build
              </Link>
              <Link href="/work" className="btn-secondary">
                See recent work
              </Link>
            </div>

            <ul className="relative mt-12 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.2em]">
              <li className="rounded-full border border-pink/40 bg-pink/10 px-4 py-2 text-pink">
                Websites
              </li>
              <li className="rounded-full border border-blue/40 bg-blue/10 px-4 py-2 text-blue">
                E-commerce
              </li>
              <li className="rounded-full border border-yellow/40 bg-yellow/10 px-4 py-2 text-yellow">
                Branding
              </li>
              <li className="rounded-full border border-violet/40 bg-violet/10 px-4 py-2 text-violet">
                Digital strategy
              </li>
              <li className="rounded-full border border-pink/40 bg-pink/10 px-4 py-2 text-pink">
                Booking systems
              </li>
            </ul>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto hidden w-full max-w-xl sm:block lg:max-w-none">
            <div className="glow-blob absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-pink via-yellow to-blue opacity-40" />
            <img
              src="/images/hero-visual.webp"
              alt="A woman in a flowing gold gown surrounded by swirling ribbons of light and glowing orbs, in pink, blue and gold"
              className="relative w-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Hidden on phones per Lili's request - on a narrow screen these two
            boxes just added extra scroll before "Where we work," so mobile
            skips straight there instead. Still shown on tablet/desktop. */}
        <div className="relative mt-16 hidden gap-3 border-t border-line pt-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted sm:grid sm:grid-cols-2">
          <div className="rounded-lg border border-line bg-card px-4 py-3">Dubai, UAE · Worldwide clients</div>
          <div className="rounded-lg border border-line bg-card px-4 py-3 sm:text-right">
            Clear pricing · Clear process · Real results
          </div>
        </div>
      </section>

      {/* Where we work */}
      <section className="relative overflow-hidden border-t border-line py-16">
        <div className="glow-blob pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-gradient-to-br from-blue via-violet to-pink opacity-20" />
        <div className="relative mb-8 max-w-lg">
          <span className="eyebrow">Where we work</span>
          <h2 className="mt-4 font-body text-xl font-bold uppercase tracking-tight sm:text-2xl">
            Dubai-based, built for anywhere
          </h2>
        </div>
        <Link
          href="/pricing"
          className="group relative flex items-center justify-between gap-4 rounded-lg border border-line bg-card p-6 transition-colors hover:border-pink"
        >
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              🇦🇪 Dubai, UAE
            </span>
            <p className="mt-2 text-sm text-muted">
              Packages priced in AED, local time zone, WhatsApp on hand. We take on clients
              across the UAE and worldwide, all remote.
            </p>
          </div>
          <span className="text-xl text-paper/60 transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </section>

      {/* Booking & Client Systems banner - moved above Why it matters so the
          page doesn't run two plain text sections back to back on phones. */}
      <section className="border-t border-line py-16">
        <div className="max-w-lg">
          <span className="eyebrow">New</span>
          <h2 className="mt-4 font-body text-xl font-bold uppercase tracking-tight sm:text-2xl">
            Booking and client systems, built around your business
          </h2>
          <p className="mt-3 text-muted">
            For small businesses, salons and studios that need to take payments, manage client
            lists, run a calendar and handle bookings, all without juggling separate apps.
          </p>
        </div>

        <div className="relative left-1/2 right-1/2 -mx-[50vw] mt-8 w-screen">
          {/* Separate crops for phone vs. tablet/desktop: the tall portrait
              version keeps the dashboard graphic readable on a narrow phone
              screen instead of squashing the wide banner down to a sliver. */}
          <img
            src="/images/booking-systems-banner-mobile.jpg"
            alt="A beauty treatment room set on a cliff at sunset, beside a glowing bookings dashboard showing today's appointments, a deposit received and a reminder sent - Beyond Hello, work from anywhere, all your clients and bookings in one place"
            className="w-full object-cover sm:hidden"
          />
          <img
            src="/images/booking-systems-banner.jpg"
            alt="A beauty treatment room set on a cliff at sunset, beside a glowing bookings dashboard showing today's appointments, a deposit received and a reminder sent - Beyond Hello, work from anywhere, all your clients and bookings in one place"
            className="hidden w-full object-cover sm:block sm:max-h-[480px]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink/70 to-transparent sm:h-36" />
          <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-10">
            <Link href="/pricing" className="btn-primary">
              See booking packages →
            </Link>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="relative overflow-hidden border-t border-line py-16">
        {/* This section used to be flat text-only on phones (no image, no
            colour) since the graphic moved to the top of the page - added a
            background glow and a few accent tags so it doesn't read as a
            plain wall of paragraphs. */}
        <div className="glow-blob pointer-events-none absolute -right-20 top-0 h-56 w-56 rounded-full bg-gradient-to-br from-pink via-violet to-blue opacity-10 sm:opacity-20" />
        <div className="relative grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* The graphic for phones now leads the whole page (see top of
              <main>), so it isn't repeated here - mobile just gets the
              eyebrow + copy below, no separate image or heading. */}
          <div className="relative mx-auto hidden w-full sm:block sm:max-w-sm">
            <div className="glow-blob absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-gradient-to-br from-blue via-violet to-pink opacity-30" />
            <img
              src="/images/make-them-click.jpg"
              alt="Beyond Hello: make them click. Beautiful websites that perform, next to a neon cursor icon glowing beside a dark infinity pool at night"
              className="relative w-full rounded-xl border border-line object-cover shadow-2xl"
            />
          </div>
          <div>
            <span className="eyebrow">Why it matters</span>
            <h2 className="mt-4 hidden font-body text-2xl font-bold uppercase tracking-tight sm:block sm:text-3xl">
              Your site is doing the talking before you get the chance to.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-paper/80">
              By the time customers reach out, they've already looked you up and formed an
              opinion: established or just starting out, careful or careless, worth it or not.
              They formed it from your site, not from talking to you.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-paper/80">
              We build the version that argues for you instead: fast, custom to your business, and
              built to carry a visitor from curious to convinced. That's the whole job.
            </p>
            <ul className="relative mt-7 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.2em]">
              <li className="rounded-full border border-pink/40 bg-pink/10 px-4 py-2 text-pink">
                Fast
              </li>
              <li className="rounded-full border border-blue/40 bg-blue/10 px-4 py-2 text-blue">
                Credible
              </li>
              <li className="rounded-full border border-yellow/40 bg-yellow/10 px-4 py-2 text-yellow">
                Converts
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Recent work strip */}
      <section className="border-t border-line py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-body text-xl font-bold uppercase tracking-tight">Recent work</h2>
          <Link href="/work" className="btn-secondary text-xs">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <WorkTile
            label="Greenhouse Events UAE"
            tag="Event production · Dubai"
            gradient="pink"
            image="/images/work/greenhouse.jpg"
          />
          <WorkTile
            label="Sonkei Co."
            tag="Apparel, nutrition & skincare"
            gradient="blue"
            image="/images/work/sonkei.jpg"
          />
        </div>
      </section>

      <Testimonials />

      {/* CTA band */}
      <section className="relative my-10 overflow-hidden rounded-xl border border-line p-10 sm:my-16">
        <img
          src="/images/cta-band.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="max-w-sm font-body text-2xl font-extrabold uppercase tracking-tight text-paper sm:text-3xl">
            Ready to <span className="text-gradient">stop blending in</span>?
          </h3>
          <Link href="/book?package=free-call" className="btn-primary border-paper/40">
            Book a free 20-min call
          </Link>
        </div>
      </section>
    </main>
  );
}
