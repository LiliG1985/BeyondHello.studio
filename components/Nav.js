"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative py-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo-main.webp"
            alt="Beyond Hello Studio"
            width={1971}
            height={467}
            priority
            className="h-8 w-auto sm:h-11"
          />
        </Link>
        <div className="flex items-center gap-8">
          <ul className="hidden gap-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/book"
            className="hidden whitespace-nowrap rounded-md border border-paper/25 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-paper transition-colors hover:border-pink hover:text-pink sm:inline-flex"
          >
            Book your build
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-6 w-6 flex-col items-center justify-center gap-1.5 sm:hidden"
          >
            <span
              className={`block h-px w-6 bg-paper transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-paper transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full z-50 border-y border-line bg-ink sm:hidden">
          <ul className="flex flex-col divide-y divide-line text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-5 py-4 transition-colors hover:text-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/book"
                onClick={() => setOpen(false)}
                className="block px-5 py-4 text-paper"
              >
                Book your build
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
