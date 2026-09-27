import Image from "next/image";

// Promo graphics Lili put together for Instagram - reused here as a grid so
// the site shows the same style guests would see on social.
const POSTS = [
  {
    src: "/images/instagram/3-seconds-glass.webp",
    alt: "\"Your website has 3 seconds to make them stay\" - Beyond Hello promo graphic",
    width: 900,
    height: 1125,
  },
  {
    src: "/images/instagram/custom-web-design.webp",
    alt: "\"Custom web design\" - Beyond Hello promo graphic showing a website mockup",
    width: 900,
    height: 1125,
  },
  {
    src: "/images/instagram/lives-in-hand.webp",
    alt: "\"Your website lives in their hand\" - mobile-first design promo graphic",
    width: 900,
    height: 750,
  },
  {
    src: "/images/instagram/before-after.webp",
    alt: "\"Same business, different first impression\" - before and after website redesign",
    width: 900,
    height: 750,
  },
  {
    src: "/images/instagram/pretty-outside.webp",
    alt: "\"Pretty on the outside, serious underneath\" - Beyond Hello promo graphic",
    width: 900,
    height: 1125,
  },
  {
    src: "/images/instagram/3-seconds-laptop.webp",
    alt: "\"Your website has 3 seconds to make them stay\" - laptop promo graphic",
    width: 900,
    height: 1125,
  },
];

export default function InstagramGrid() {
  return (
    <section className="border-t border-line py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-lg">
          <span className="eyebrow">On the grid</span>
          <h2 className="mt-4 font-body text-xl font-bold uppercase tracking-tight sm:text-2xl">
            What we're posting
          </h2>
        </div>
        {/* TODO (Lili): point this at your real Instagram URL once you have it. */}
        <a href="#" className="btn-secondary text-xs">
          Follow along →
        </a>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {POSTS.map((post) => (
          <div
            key={post.src}
            className="group relative aspect-[4/5] overflow-hidden rounded-lg border border-line bg-card"
          >
            <Image
              src={post.src}
              alt={post.alt}
              fill
              sizes="(min-width: 640px) 33vw, 50vw"
              className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
