import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const CONTACT_DESCRIPTION =
  "Get in touch with Beyond Hello by email or WhatsApp to talk about your website project.";

export const metadata = {
  title: "Contact",
  description: CONTACT_DESCRIPTION,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: "/contact",
    siteName: "Beyond Hello",
    title: "Contact · Beyond Hello",
    description: CONTACT_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact · Beyond Hello",
    description: CONTACT_DESCRIPTION,
  },
};

const CONTACT_EMAIL = "hello@beyondhello.studio";

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden py-14">
      {/* Background depth: soft colour glows sitting behind the copy, same
          treatment used on the homepage, so this page doesn't feel flat
          against the plain dark background. */}
      <div className="glow-blob pointer-events-none absolute -left-24 -top-10 h-80 w-80 rounded-full bg-pink opacity-20" />
      <div className="glow-blob pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full bg-blue opacity-20" />
      <div className="glow-blob pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-violet via-pink to-yellow opacity-10" />

      <div className="relative">
        <span className="eyebrow">Contact</span>
        <h1 className="mt-5 font-body text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl">
          Say <span className="text-gradient">hello.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/80">
          The fastest way to get started is to book a package directly. Got questions first?
          Send a message below.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <a href={`mailto:${CONTACT_EMAIL}`} className="btn-secondary">
            {CONTACT_EMAIL}
          </a>
          <Link href="/book" className="btn-secondary">
            Or skip ahead and book →
          </Link>
        </div>

        <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
          <span>Dubai, UAE · Worldwide clients</span>
          <span>Replies within 1 business day</span>
        </div>
      </div>

      <section className="relative mt-20 border-t border-line pt-16">
        <h2 className="font-body text-xl font-bold uppercase tracking-tight">Send a message</h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Tell us a bit about what you need. We reply by email within 1 business day.
        </p>
        <div className="mt-8 max-w-xl">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
