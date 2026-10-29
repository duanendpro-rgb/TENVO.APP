export default function Card({ title, children, className = '' }) {
  return (
    <section className={`rounded-2xl border border-brand-border bg-white p-5 ${className}`}>
      {title && <h2 className="mb-3 font-display text-lg font-bold">{title}</h2>}
      {children}
    </section>
  )
}

export function Badge({ ok, children }) {
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
        ok ? 'bg-brand-okBg text-brand-okText' : 'bg-brand-todoBg text-brand-todoText'
      }`}
    >
      {children}
    </span>
  )
}
