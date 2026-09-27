import Link from "next/link";
import { getStripe } from "@/lib/stripe";

export const metadata = {
  title: "Booking confirmed",
  // This is a post-checkout confirmation page, not content for search
  // engines to index.
  robots: {
    index: false,
    follow: false,
  },
};

export default async function BookingSuccessPage({ searchParams }) {
  const sessionId = searchParams?.session_id;
  const stripe = getStripe();

  let session = null;
  if (stripe && sessionId) {
    try {
      session = await stripe.checkout.sessions.retrieve(sessionId);
    } catch (err) {
      console.error("Couldn't retrieve session:", err);
    }
  }

  const paid = session?.payment_status === "paid";
  const meta = session?.metadata || {};

  return (
    <main className="py-20 text-center">
      <span className="eyebrow mx-auto w-fit">{paid ? "✓ Payment received" : "Booking"}</span>
      <h1 className="mt-6 font-display text-4xl font-bold sm:text-5xl">
        {paid ? "You're booked!" : "Almost there"}
      </h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-paper/80">
        {paid
          ? `Thanks${meta.name ? `, ${meta.name}` : ""}. Your deposit for the ${
              meta.packageName || "project"
            } package is confirmed, and we'll email you within 24 hours to lock in your exact build slot.`
          : "We couldn't confirm a payment for this session. If you completed checkout, refresh this page in a moment. Otherwise, head back and try again."}
      </p>
      <Link href="/" className="btn-secondary mt-8 inline-block">
        Back to home
      </Link>
    </main>
  );
}
