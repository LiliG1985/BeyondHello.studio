import Link from "next/link";

const ABOUT_DESCRIPTION =
  "Why Beyond Hello exists, how our website process works, and who we're the right fit for.";

export const metadata = {
  title: "About",
  description: ABOUT_DESCRIPTION,
  alternates: {
    canonical: "/about",
  },
  // Without this, a link to /about shared anywhere shows the homepage's
  // preview card instead of this page's own title and blurb.
  openGraph: {
    type: "website",
    url: "/about",
    siteName: "Beyond Hello",
    title: "About · Beyond Hello",
    description: ABOUT_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About · Beyond Hello",
    description: ABOUT_DESCRIPTION,
  },
};

const STEPS = [
  {
    n: "01",
    label: "Ideas",
    text: "A short call to pin down exactly what your site needs to do, and just as important, what it doesn't. We look at who's actually landing on your site, what they came to do, and where the current version loses them.",
  },
  {
    n: "02",
    label: "Design & build",
    text: "A custom build you can watch take shape, not a black box you wait on. You'll see working versions early, so nothing about the final site is a surprise on launch day.",
  },
  {
    n: "03",
    label: "Launch & beyond",
    text: "You walk away with a live, working site, plus a clear next move as the business grows: a blog, a booking system, a second language, whatever's next for you.",
  },
];

const FIT = [
  {
    label: "Good fit",
    items: [
      "You're launching or relaunching and want it done properly, once",
      "You have a real offer and just need the site to carry it",
      "You'd rather pay a clear, scoped price than an hourly clock",
    ],
  },
  {
    label: "Not a fit",
    items: [
      "You need a site live tomorrow with zero lead time",
      "You want to manage day-to-day changes to a live app yourself, this is a website, not dev-ops",
      "You're only comparing quotes and haven't decided to build yet",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="py-14">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="eyebrow">About</span>
          <h1 className="mt-5 font-body text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl">
            It starts with
            <br />
            <span className="text-gradient">Hello.</span>
          </h1>
          <div className="mt-7 flex flex-col gap-5 text-lg leading-relaxed text-paper/80">
            <p>
              A hello is where a relationship starts, not where it ends. Most business sites get
              that first moment right, then leave visitors stranded, unsure what to do next or
              whether to trust you at all. Beyond Hello closes that gap. Every site is built to
              carry someone from their first look at your brand to a call booked, a question
              answered, a sale made.
            </p>
            <p>
              We work with founders and small teams who are done looking like an afterthought
              online. You get a price scoped before you book, a site built around your business
              instead of squeezed into someone else's template, and a live launch in weeks, not
              months.
            </p>
            <p>
              Beyond Hello is based in Dubai, though the work reaches well beyond it. We take on
              clients from across the UAE and from around the world, every project run remotely
              from the first call to launch day.
            </p>
          </div>
          <Link href="/book" className="btn-primary mt-10">
            Book your build →
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="glow-blob absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-pink via-yellow to-blue opacity-30" />
          <img
            src="/images/about-visual.jpg"
            alt="A laptop and phone showing the Beyond Hello website on a candlelit table overlooking the Dubai skyline at sunset, framed by palm leaves"
            className="relative w-full rounded-xl border border-line object-cover shadow-2xl"
          />
        </div>
      </div>

      {/* The brand */}
      <section className="mt-24 grid items-center gap-10 border-t border-line pt-16 sm:grid-cols-[0.9fr_1.1fr]">
        <img
          src="/images/brand/notebook-mockup.webp"
          alt="The Beyond Hello Studio wordmark embossed on a notebook cover"
          className="w-full rounded-xl border border-line object-cover shadow-2xl"
        />
        <div>
          <span className="eyebrow">The brand</span>
          <h2 className="mt-4 font-body text-2xl font-bold uppercase tracking-tight sm:text-3xl">
            Built to look this good everywhere
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-paper/80">
            A brand isn't just the website. It's what still looks right on a business card, a
            tote bag, or embossed on a notebook you never planned on making. Every Beyond Hello
            build is held to that same bar: polished enough to survive leaving the screen.
          </p>
        </div>
      </section>

      {/* How we work */}
      <section className="mt-24 border-t border-line pt-16">
        <h2 className="font-body text-xl font-bold uppercase tracking-tight">How we work</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.n} className="flex flex-col gap-3">
              <span className="font-body text-sm font-bold text-pink">{step.n}</span>
              <h3 className="font-body text-lg font-bold uppercase tracking-tight">
                {step.label}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who this is for */}
      <section className="mt-24 border-t border-line pt-16">
        <h2 className="font-body text-xl font-bold uppercase tracking-tight">Is this a fit?</h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Clear-scope work goes better when expectations line up early. Here's the honest
          version.
        </p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {FIT.map((group) => (
            <div key={group.label}>
              <span
                className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${
                  group.label === "Good fit" ? "text-pink" : "text-muted"
                }`}
              >
                {group.label}
              </span>
              <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-paper/80">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className={group.label === "Good fit" ? "text-pink" : "text-muted"}>
                      {group.label === "Good fit" ? "✓" : "·"}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Pull quote band */}
      <section className="relative my-20 overflow-hidden rounded-xl border border-line p-10 sm:p-14">
        <img
          src="/images/page-banner.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <p className="relative max-w-2xl font-body text-2xl font-bold uppercase leading-snug tracking-tight text-paper sm:text-3xl">
          A website isn't the finish line. It's the handshake that starts everything else.
        </p>
      </section>
    </main>
  );
}
