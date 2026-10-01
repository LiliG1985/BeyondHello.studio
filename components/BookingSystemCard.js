export default function BookingSystemCard({ pkg }) {
  const aedValue = pkg.aed || pkg.aedFrom;
  const priceLabel = `${pkg.aedFrom ? "From " : ""}AED ${aedValue.toLocaleString()}`;

  return (
    <div
      className={`flex flex-col gap-4 rounded-lg border p-7 ${
        pkg.featured ? "border-pink/50 bg-pink/[0.04]" : "border-line bg-card"
      }`}
    >
      <span
        className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${
          pkg.featured ? "text-pink" : "text-muted"
        }`}
      >
        {pkg.name}
        {pkg.featured ? ` · ${pkg.featuredLabel}` : ""}
      </span>
      <div className="flex flex-wrap items-baseline gap-2 font-body text-3xl font-bold">
        {priceLabel}
        {pkg.priceNote && <span className="text-sm font-medium text-muted">({pkg.priceNote})</span>}
      </div>
      <p className="text-sm text-muted">{pkg.tagline}</p>
      {pkg.features && pkg.features.length > 0 && (
        <div className="flex flex-1 flex-col gap-2">
          {pkg.includesNote && <p className="text-xs font-semibold text-paper/80">{pkg.includesNote}</p>}
          <ul className="flex flex-col gap-2 text-sm text-paper/90">
            {pkg.features.map((f) => (
              <li key={f} className="flex gap-2">
                <span className={pkg.featured ? "text-pink" : "text-blue"}>✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {pkg.timeline && <p className="text-xs text-muted">Turnaround: {pkg.timeline}</p>}
    </div>
  );
}
