import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getPackage, FREE_CALL } from "@/lib/packages";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

// The free call has nothing to charge, so it skips Stripe entirely - it just
// emails the booking details (same Web3Forms setup the contact form uses)
// and sends the visitor straight to the confirmation page.
async function bookFreeCall({ name, email, company, details, preferredDate, timezone, origin }) {
  if (WEB3FORMS_ACCESS_KEY) {
    try {
      await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Free call booked: ${name}`,
          from_name: "Beyond Hello website",
          name,
          email,
          message: `Free 20-min call requested.\n\nCompany: ${company || "-"}\nPreferred date: ${
            preferredDate || "-"
          }\nTimezone: ${timezone || "-"}\n\nDetails:\n${details || "-"}`,
        }),
      });
    } catch (err) {
      // Don't block the booking on an email hiccup - it's still logged server-side.
      console.error("Free call notification email failed:", err);
    }
  }

  return NextResponse.json({ url: `${origin}/book/success?free=1&name=${encodeURIComponent(name)}` });
}

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

  const origin = process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin;

  if (pkg.id === FREE_CALL.id) {
    return bookFreeCall({ name, email, company, details, preferredDate, timezone, origin });
  }

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
