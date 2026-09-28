"use client";

import { useEffect, useRef } from "react";

// Same Web3Forms setup as ContactForm.js and BookingForm.js. This fires once,
// from the customer's own browser right after a successful payment (this
// component only renders on the post-payment success page), to let us know
// a paid booking came in - Web3Forms only accepts submissions sent from the
// visitor's browser on the registered domain, not a server-to-server call,
// so this can't be done from the Stripe webhook instead.
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export default function PaymentNotifier({
  sessionId,
  packageName,
  amount,
  name,
  email,
  company,
  preferredDate,
  details,
  timezone,
}) {
  const firedRef = useRef(false);

  useEffect(() => {
    if (!sessionId || !WEB3FORMS_ACCESS_KEY || firedRef.current) return;

    // Guard against re-sending if the customer refreshes the success page.
    const storageKey = `notified-${sessionId}`;
    try {
      if (window.sessionStorage.getItem(storageKey)) return;
    } catch {
      // If sessionStorage isn't available, fall through and send anyway.
    }

    firedRef.current = true;

    fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New booking: ${packageName || "package"}, AED ${amount} deposit paid`,
        from_name: "Beyond Hello website",
        name,
        email,
        message: [
          "New paid booking on Beyond Hello.",
          "",
          `Package: ${packageName || "-"}`,
          `Deposit paid: AED ${amount}`,
          `Name: ${name || "-"}`,
          `Email: ${email || "-"}`,
          `Company: ${company || "-"}`,
          `Preferred date: ${preferredDate || "-"}`,
          `Timezone: ${timezone || "-"}`,
          "",
          `Details:`,
          details || "-",
        ].join("\n"),
      }),
    })
      .then(() => {
        try {
          window.sessionStorage.setItem(storageKey, "1");
        } catch {
          // Not critical if this can't be stored.
        }
      })
      .catch(() => {
        // Don't disrupt the confirmation page over an email hiccup.
      });
  }, [sessionId, packageName, amount, name, email, company, preferredDate, details, timezone]);

  return null;
}
