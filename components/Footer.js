"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// TODO (Lili): swap in your real LinkedIn URL once you have it.
const SOCIALS = [
  { label: "WhatsApp", href: "https://wa.me/971552537712" },
  { label: "Instagram", href: "https://www.instagram.com/beyond_hello_digital_design/" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "mailto:hello@beyondhello.studio" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent("Keep me posted, Beyond Hello");
    const body = encodeURIComponent(`Please add me to the list: ${email}`);
    window.location.href = `mailto:hello@beyondhello.studio?subject=${subject}&body=${body}`;
  }

  return (
    <footer className="relative mt-10 overflow-hidden border-t border-line pb-14 pt-10 sm:mt-24 sm:pt-16">
      <img
        src="/images/footer-scene.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/60" />
      <img
        src="/images/brand/bh-chrome-render.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-4 hidden w-40 opacity-90 sm:block lg:w-52"
      />
      <Image
        src="/images/logo-main.webp"
        alt=""
        aria-hidden="true"
        width={1971}
        height={467}
        className="relative mb-8 h-9 w-auto"
      />
      <div className="relative flex flex-col gap-8 border-b border-line pb-12 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="max-w-sm font-body text-2xl font-bold uppercase tracking-tight sm:text-3xl">
          Let's build something bolder
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-sm items-center gap-2 border-b border-paper/30 pb-2 sm:w-80"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            aria-label="Your email"
            className="w-full bg-transparent text-sm text-paper placeholder:text-muted focus:outline-none"
          />
          <button type="submit" aria-label="Send" className="text-paper transition-colors hover:text-pink">
            →
          </button>
        </form>
      </div>

      <div className="relative mt-10 flex flex-col gap-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-6">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} className="transition-colors hover:text-paper">
              {s.label}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/work" className="hover:text-paper">Work</Link>
          <Link href="/pricing" className="hover:text-paper">Services</Link>
          <Link href="/contact" className="hover:text-paper">Contact</Link>
          <span>© {new Date().getFullYear()} Beyond Hello</span>
        </div>
      </div>
    </footer>
  );
}
