import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "Why Beyond Hello exists, how our fixed-price website process works, and who we're the right fit for.",
  alternates: {
    canonical: "/about",
  },
};

const STEPS = [
  {
    n: "01",
    label: "Ideas",
    text: "A short scoping call to figure out exactly what your site needs to do, and just as important, what it doesn't. We look at who's actually landing on your site, what they're trying to accomplish, and where the current version loses them.",
  },
  {
    n: "02",
    label: "Design & develop",
    text: "A custom build on a fixed timeline, with real progress you can see along the way, not a black box. You'll see working versions early, so nothing about the final site is a surprise.",
  },
  {
    n: "03",
    label: "Launch & beyond",
    text: "You get a live, working site, plus a clear path for what to add next as the business grows: a blog, a booking flow, a second language, whatever comes next for you.",
  },
];

const FIT = [
  {
    label: "Good fit",
    items: [
      "You're launching or relaunching and want it done properly, once",
      "You have a real offer and just need the site to carry it",
      "You'd rather pay a fair fixed price than an hourly clock",
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
              The name comes from a simple idea: a hello is where a relationship starts, not
              where it ends. Most business websites handle the hello well enough, a logo, a
              headline, a few photos, then leave a visitor to find their own way to becoming a
              customer. Beyond Hello exists to close that gap, with sites built to carry someone
              past the first hello and into a call booked, a question answered, a sale made.
            </p>
            <p>
              We work with founders and small teams worldwide, remotely, on fixed-price
              packages, so you know exactly what you're getting before you book, and can go
              from an idea to a live site in a matter of weeks.
            </p>
            <p>
              Beyond Hello is based in Dubai, but the work isn't limited to it: clients come from
              across the UAE and from around the world, all handled remotely.
            </p>
          </div>
          <Link href="/book" className="btn-primary mt-10">
            Book your build →
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="glow-blob absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-pink via-yellow to-blue opacity-30" />
          <img
            src="/images/about-hero.jpg"
            alt="A quiet lounge corner overlooking the Dubai skyline at night"
            className="relative w-full rounded-xl border border-line object-cover shadow-2xl"
          />
        </div>
      </div>

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
          Fixed-price, fixed-scope work goes better when expectations line up early. Here's the
          honest version.
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
