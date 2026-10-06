export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <span className="inline-block rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-700">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl font-bold text-ink-950 md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-ink-500">{subtitle}</p>}
    </div>
  )
}
