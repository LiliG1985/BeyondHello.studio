import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Beyond Hello by email or WhatsApp to talk about your website project.",
  alternates: {
    canonical: "/contact",
  },
};

const CONTACT_EMAIL = "hello@beyondhello.studio";

export default function ContactPage() {
  return (
    <main className="py-14">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
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

        <div className="relative mx-auto w-full max-w-sm">
          <div className="glow-blob absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue via-violet to-pink opacity-30" />
          <img
            src="/images/contact-visual.webp"
            alt="Glowing email, phone, chat and location icons woven through streams of light and code"
            className="relative w-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      <section className="mt-20 border-t border-line pt-16">
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
