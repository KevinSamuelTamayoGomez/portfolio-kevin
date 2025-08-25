export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="container py-16">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="text-zinc-600 mt-2 max-w-2xl">{subtitle}</p>}
      <div className="mt-8">{children}</div>
    </section>
  )
}
