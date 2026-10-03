import BookingForm from "@/components/BookingForm";
import PageBanner from "@/components/PageBanner";
import { PACKAGE_LIST, getPackage } from "@/lib/packages";

const BOOK_DESCRIPTION =
  "Request your build online. We'll scope your project on a quick call before anything is charged.";

export const metadata = {
  title: "Book",
  description: BOOK_DESCRIPTION,
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    type: "website",
    url: "/book",
    siteName: "Beyond Hello",
    title: "Book · Beyond Hello",
    description: BOOK_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book · Beyond Hello",
    description: BOOK_DESCRIPTION,
  },
};

const NEXT_STEPS = [
  "We scope your project and confirm your exact price on a quick call.",
  "You pay a deposit via a secure link to lock your build slot on the calendar.",
  "We send a short kickoff form for logo, copy, and any brand assets you have.",
];

export default function BookPage({ searchParams }) {
  const requested = searchParams?.package;
  const initialPackage = getPackage(requested) ? requested : PACKAGE_LIST[1].id;
  const cancelled = searchParams?.cancelled === "1";

  return (
    <main className="pb-14">
      <PageBanner
        eyebrow="Book"
        title="Book your build"
        subtitle="Pick a package and tell us a bit about the project. We'll scope it and confirm your exact price on a quick call before anything is charged."
      />

      {cancelled && (
        <p className="mb-8 rounded-lg border border-yellow/30 bg-yellow/10 px-4 py-3 text-sm text-yellow">
          Checkout was cancelled. No payment was taken, so you can pick up where you left off
          below.
        </p>
      )}

      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-xl">
          <BookingForm initialPackage={initialPackage} />
        </div>

        <div className="relative">
          <div className="relative mx-auto w-full max-w-xs">
            <div className="glow-blob absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-pink via-yellow to-blue opacity-30" />
            <img
              src="/images/about-hero.jpg"
              alt="A quiet lounge corner overlooking the Dubai skyline at night"
              className="relative w-full rounded-xl border border-line object-cover shadow-2xl"
            />
          </div>
          <div className="mx-auto mt-8 flex max-w-xs flex-col gap-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              What happens next
            </span>
            {NEXT_STEPS.map((step, i) => (
              <div key={step} className="flex gap-4">
                <span className="font-body text-sm font-bold text-pink">0{i + 1}</span>
                <p className="text-sm leading-relaxed text-paper/80">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
