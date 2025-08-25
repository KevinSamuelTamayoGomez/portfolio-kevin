import { PROFILE } from '../data'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-brand/30 via-transparent to-transparent" />
      <div className="container py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Disponible para proyectos
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">
            {PROFILE.role}
          </h1>
          <p className="text-zinc-600 mt-4 max-w-xl">{PROFILE.tagline}</p>
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <a className="btn" href={PROFILE.ctaLink}>Trabajemos juntos</a>
            <a href="#proyectos" className="inline-flex items-center gap-2 text-sm hover:opacity-80">
              Ver proyectos →
            </a>
          </div>
          <div className="flex items-center gap-4 mt-8 text-sm text-zinc-600">
            <a href={`mailto:${PROFILE.email}`} className="hover:opacity-80">{PROFILE.email}</a>
            <span className="hidden md:inline">•</span>
            <a href={`tel:${PROFILE.phone.replaceAll(' ', '')}`} className="hover:opacity-80">{PROFILE.phone}</a>
          </div>
        </div>
        <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-soft border bg-gradient-to-tr from-brand/10 via-zinc-100 to-transparent" />
      </div>
    </section>
  )
}
