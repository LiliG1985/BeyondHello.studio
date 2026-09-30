import Link from "next/link";
import WorkTile from "@/components/WorkTile";
import Testimonials from "@/components/Testimonials";

// No title here on purpose - it inherits the site default title from the
// root layout, so this stays in sync with it automatically.
export const metadata = {
  description:
    "Custom, fixed-price websites for founders and brands who want their first impression to hold up. Dubai-based, worldwide clients. Book your build online.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden py-6 sm:py-10">
        <div className="glow-blob pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-pink opacity-20" />
        <div className="glow-blob pointer-events-none absolute -right-16 top-32 h-72 w-72 rounded-full bg-blue opacity-20" />
        <div className="glow-blob pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-yellow opacity-10" />

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

            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              <li>Websites</li>
              <li>E-commerce</li>
              <li>Branding</li>
              <li>Digital strategy</li>
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

        <div className="relative mt-16 flex flex-col gap-4 border-t border-line pt-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>Dubai, UAE · Worldwide clients</span>
          <span>Fixed pricing · Clear process · Real results</span>
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

      {/* Why it matters */}
      <section className="grid items-center gap-12 border-t border-line py-16 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Phones: image bleeds to the screen edge on the left, heading sits in the
            black space beside her instead of below. Tablet/desktop are untouched. */}
        <div className="-mx-5 flex items-center gap-3 sm:hidden">
          <div className="relative w-[68%] shrink-0 overflow-hidden">
            {/* Rendered at the same full-bleed scale as before - this box just crops
                off the right-hand side of it rather than shrinking the image down. */}
            <img
              src="/images/hero-visual.webp"
              alt="A woman in a flowing gold gown surrounded by swirling ribbons of light and glowing orbs, in pink, blue and gold"
              className="w-[147%] max-w-none object-contain object-left"
            />
          </div>
          <h2 className="flex-1 pr-2 font-body text-2xl font-extrabold uppercase leading-[1.15] tracking-tight text-paper">
            Your site
            <br />
            is doing
            <br />
            the
            <br />
            talking
            <br />
            first
          </h2>
        </div>

        <div className="relative mx-auto hidden w-full sm:block sm:max-w-sm">
          <div className="glow-blob absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-gradient-to-br from-blue via-violet to-pink opacity-30" />
          <img
            src="/images/about-hero.jpg"
            alt="A quiet lounge corner overlooking the Dubai skyline at night"
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
          <Link href="/book" className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line p-4 text-center text-sm text-muted transition-colors hover:border-pink hover:text-paper">
            <span className="font-body text-lg font-bold text-paper">+</span>
            Let's build yours next
          </Link>
        </div>
      </section>

      <Testimonials />

      {/* CTA band */}
      <section className="relative my-16 overflow-hidden rounded-xl border border-line p-10">
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
