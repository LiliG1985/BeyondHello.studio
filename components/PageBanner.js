export default function PageBanner({ eyebrow, title, subtitle, image }) {
  const src = image || "/images/page-banner.jpg";

  return (
    <div className="-mx-5 mb-14 border-b border-line sm:relative sm:overflow-hidden sm:px-5 sm:py-16 sm:mb-16">
      {/* Mobile: the image gets its own full-width block at the top, cropped
          from the top of the photo (object-top) rather than squeezed down
          behind the text, so a lot more of it is actually visible. No dark
          overlay here since the text sits below it, not on top of it. */}
      <div className="h-52 w-full overflow-hidden sm:hidden">
        <img src={src} alt="" aria-hidden="true" className="h-full w-full object-cover object-top" />
      </div>

      {/* Desktop: original full-bleed background-image banner with the text
          overlaid on top, dimmed by the dark gradient below. */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="hidden sm:absolute sm:inset-0 sm:block sm:h-full sm:w-full sm:object-cover"
      />
      <div className="hidden sm:absolute sm:inset-0 sm:block sm:bg-ink/75" />

      <div className="relative mx-auto max-w-6xl px-5 py-8 sm:px-0 sm:py-0">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="mt-5 font-body text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-paper sm:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-xl text-lg text-paper/80">{subtitle}</p>}
      </div>
    </div>
  );
}
