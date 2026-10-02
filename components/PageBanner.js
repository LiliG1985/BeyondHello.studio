export default function PageBanner({ eyebrow, title, subtitle, image }) {
  return (
    <div className="relative -mx-5 mb-14 overflow-hidden border-b border-line px-5 py-16 sm:mb-16">
      <img
        src={image || "/images/page-banner.jpg"}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/75" />
      <div className="relative mx-auto max-w-6xl">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="mt-5 font-body text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-paper sm:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-xl text-lg text-paper/80">{subtitle}</p>}
      </div>
    </div>
  );
}
