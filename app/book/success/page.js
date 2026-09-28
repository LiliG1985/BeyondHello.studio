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

const WHATSAPP_LINK = "https://wa.me/971552537712";

export default async function BookingSuccessPage({ searchParams }) {
  const isFreeCall = searchParams?.free === "1";
  const freeCallName = searchParams?.name || "";
  const sessionId = searchParams?.session_id;
  const stripe = getStripe();

  let session = null;
  if (!isFreeCall && stripe && sessionId) {
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
      <span className="eyebrow mx-auto w-fit">
        {isFreeCall ? "Request sent" : paid ? "✓ Payment received" : "Booking"}
      </span>
      <h1 className="mt-6 font-display text-4xl font-bold sm:text-5xl">
        {isFreeCall ? "Almost there" : paid ? "You're booked!" : "Almost there"}
      </h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-paper/80">
        {isFreeCall
          ? `Thanks${
              freeCallName ? `, ${freeCallName}` : ""
            }. Your time and date request has been sent, and we'll be in touch to confirm your call.`
          : paid
          ? `Thanks${meta.name ? `, ${meta.name}` : ""}. Your deposit for the ${
              meta.packageName || "project"
            } package is confirmed, and we'll email you within 24 hours to lock in your exact build slot.`
          : "We couldn't confirm a payment for this session. If you completed checkout, refresh this page in a moment. Otherwise, head back and try again."}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link href="/" className="btn-secondary inline-block">
          Back to home
        </Link>
        {isFreeCall && (
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-secondary inline-block">
            Or message us on WhatsApp →
          </a>
        )}
      </div>
    </main>
  );
}
