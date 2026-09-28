import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getPackage, FREE_CALL } from "@/lib/packages";

// Note: the free call never reaches this route - BookingForm handles it
// entirely client-side (Web3Forms only accepts submissions sent from the
// visitor's own browser on the registered domain, not a server-to-server
// request like this route would make). This guard is just a safety net.
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { packageId, name, email, company, details, preferredDate, timezone } = body || {};

  const pkg = getPackage(packageId);
  if (!pkg) {
    return NextResponse.json({ error: "Unknown package." }, { status: 400 });
  }
  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }
  if (pkg.id === FREE_CALL.id) {
    return NextResponse.json(
      { error: "The free call is booked from the form directly, not through checkout." },
      { status: 400 }
    );
  }

  const origin = process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin;
  const stripe = getStripe();

  if (!stripe) {
    return NextResponse.json(
      {
        error:
          "Payments aren't switched on yet. Add STRIPE_SECRET_KEY in the Vercel project settings to enable checkout.",
      },
      { status: 503 }
    );
  }

  const depositAmount = pkg.deposit;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "aed",
            unit_amount: Math.round(depositAmount * 100),
            product_data: {
              name: `${pkg.name} package: booking deposit`,
              description:
                "Secures your build slot. The remaining balance is invoiced before launch.",
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        packageId: pkg.id,
        packageName: pkg.name,
        name,
        email,
        company: company || "",
        details: (details || "").slice(0, 490),
        preferredDate: preferredDate || "",
        timezone: timezone || "",
      },
      success_url: `${origin}/book/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/book?package=${pkg.id}&cancelled=1`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Couldn't start checkout. Please try again in a moment." },
      { status: 500 }
    );
  }
}
