import BookingForm from "@/components/BookingForm";
import PageBanner from "@/components/PageBanner";
import { PACKAGE_LIST, getPackage } from "@/lib/packages";

export const metadata = {
  title: "Book",
  description: "Book your website build online and lock your slot on the calendar with a deposit.",
  alternates: {
    canonical: "/book",
  },
};

const NEXT_STEPS = [
  "You pay a deposit to lock your build slot on the calendar.",
  "We send a short kickoff form for logo, copy, and any brand assets you have.",
  "You'll hear from us within 24 hours to confirm your exact start date.",
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
        subtitle="Pick a package and tell us a bit about the project. You'll pay a deposit to lock your slot, and the rest is invoiced before launch."
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
