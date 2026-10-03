"use client";

import { useState } from "react";
import { PACKAGE_LIST, FREE_CALL, getPackage } from "@/lib/packages";

const BOOKING_OPTIONS = [...PACKAGE_LIST, FREE_CALL];

// Same Web3Forms setup the contact form uses. Web3Forms only accepts
// submissions that come from the visitor's own browser on the registered
// domain, so the free-call notification is sent from here (client-side),
// not proxied through our server - a server-to-server request gets silently
// dropped.
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export default function BookingForm({ initialPackage }) {
  const [packageId, setPackageId] = useState(initialPackage);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | error
  const [error, setError] = useState("");

  const pkg = getPackage(packageId);
  const isFree = pkg?.id === FREE_CALL.id;
  const timezone =
    typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : "";

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    // Every package books the same way now: no payment at this step. Every
    // package shows a "From" price, so the real total depends on the actual
    // scope - charging a fixed deposit automatically here would often charge
    // the wrong amount. Instead this just sends the request, we scope the
    // project and confirm the real price on a call, then send a secure link
    // to pay the deposit and lock the slot.
    try {
      if (WEB3FORMS_ACCESS_KEY) {
        await fetch(WEB3FORMS_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: isFree
              ? `Free call requested: ${name}`
              : `${pkg?.name || "Package"} booking request: ${name}`,
            from_name: "Beyond Hello website",
            name,
            email,
            package: isFree ? "Free 20-min call" : pkg?.name,
            message: `${
              isFree ? "Free 20-min call" : `${pkg?.name} booking`
            } requested.\n\nCompany: ${company || "-"}\nPreferred date: ${
              preferredDate || "-"
            }\nTimezone: ${timezone || "-"}\n\nDetails:\n${details || "-"}`,
          }),
        });
      }
    } catch (err) {
      // Don't block the confirmation on an email hiccup.
    }

    window.location.href = isFree
      ? `/book/success?free=1&name=${encodeURIComponent(name)}`
      : `/book/success?scoped=1&package=${encodeURIComponent(pkg?.name || "")}&name=${encodeURIComponent(
          name
        )}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label htmlFor="packageId" className="mb-2 block text-sm font-semibold">
          Package
        </label>
        <select
          id="packageId"
          value={packageId}
          onChange={(e) => setPackageId(e.target.value)}
          className="w-full rounded-lg border border-line bg-card px-4 py-3 text-paper"
        >
          {BOOKING_OPTIONS.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} ·{" "}
              {p.aedFrom
                ? `from AED ${p.aedFrom.toLocaleString()}`
                : p.aed
                ? `AED ${p.aed.toLocaleString()}`
                : "Free"}
            </option>
          ))}
        </select>
        <p className="mt-2 text-xs text-muted">
          {pkg?.bestFor} · Turnaround: {pkg?.timeline}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold">
            Your name
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-line bg-card px-4 py-3 text-paper"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-line bg-card px-4 py-3 text-paper"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-semibold">
            Company <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full rounded-lg border border-line bg-card px-4 py-3 text-paper"
          />
        </div>
        <div>
          <label htmlFor="preferredDate" className="mb-2 block text-sm font-semibold">
            Preferred start date
          </label>
          <input
            id="preferredDate"
            type="date"
            value={preferredDate}
            onChange={(e) => setPreferredDate(e.target.value)}
            className="w-full rounded-lg border border-line bg-card px-4 py-3 text-paper"
          />
        </div>
      </div>

      <div>
        <label htmlFor="details" className="mb-2 block text-sm font-semibold">
          Tell us about the project
        </label>
        <textarea
          id="details"
          rows={4}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="What are you building, and what does the site need to do?"
          className="w-full rounded-lg border border-line bg-card px-4 py-3 text-paper"
        />
      </div>

      {error && (
        <p className="rounded-lg border border-pink/30 bg-pink/10 px-4 py-3 text-sm text-pink">
          {error}
        </p>
      )}

      <button type="submit" disabled={status === "loading"} className="btn-primary disabled:opacity-60">
        {status === "loading"
          ? "Sending your request…"
          : isFree
          ? "Book your free call →"
          : "Request your scope call →"}
      </button>
      <p className="text-xs text-muted">
        {isFree
          ? "No payment needed. We'll email you within 1 business day to confirm a time."
          : "No payment today. We'll confirm your exact price on a quick call, then send a secure link to pay your deposit and lock the slot."}
      </p>
    </form>
  );
}
