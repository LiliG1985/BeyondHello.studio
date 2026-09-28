import { PROJECTS } from "@/lib/projects";

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-yellow">
          <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L1.3 7.8l6.1-.7L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const testimonials = PROJECTS.filter((p) => p.testimonial);
  if (testimonials.length === 0) return null;

  return (
    <section className="border-t border-line py-16">
      <div className="mb-10 max-w-lg">
        <span className="eyebrow">What clients say</span>
        <h2 className="mt-4 font-body text-xl font-bold uppercase tracking-tight sm:text-2xl">
          Don't just take our word for it
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {testimonials.map((p) => (
          <figure
            key={p.id}
            className="relative overflow-hidden rounded-xl2 border border-pink/30 bg-card p-8"
          >
            <div className="glow-blob pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-pink via-yellow to-blue opacity-20" />
            <Stars />
            <blockquote className="relative mt-5">
              <p className="text-lg font-medium leading-relaxed text-paper">
                "{p.testimonial.quote}"
              </p>
            </blockquote>
            <figcaption className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              {p.testimonial.attribution} · {p.tag}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
