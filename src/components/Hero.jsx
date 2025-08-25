import { PROFILE } from '../data'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pattern-cafe">
      <div className="container py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-espresso/15 text-xs bg-white/70">
            <span className="w-2 h-2 rounded-full bg-mint"></span>
            Disponible para proyectos
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4">
            {PROFILE.role}
          </h1>
          <p className="mt-4 max-w-xl text-espresso/70">
            {PROFILE.tagline}
          </p>

          {/* Stack corto */}
          <div className="flex flex-wrap gap-2 mt-5">
            {['Node.js','PostgreSQL','Prisma','Express','React','Vite','Tailwind'].map(s => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-6">
            <a className="btn btn-primary" href={PROFILE.ctaLink}>Hablemos</a>
            <a href="#proyectos" className="btn btn-ghost">Ver proyectos →</a>
          </div>

          <div className="flex items-center gap-4 mt-8 text-sm text-espresso/70">
            <a href={`mailto:${PROFILE.email}`} className="hover:opacity-80">{PROFILE.email}</a>
            <span className="hidden md:inline">•</span>
            <a href={`tel:${PROFILE.phone.replaceAll(' ', '')}`} className="hover:opacity-80">{PROFILE.phone}</a>
          </div>
        </div>

        {/* Lado derecho: “tarjeta de producto” del POS */}
        <div className="glass p-6 md:p-8">
          <div className="text-sm text-espresso/60">Vista previa — POS Cafetería</div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            <div className="card p-4">
              <div className="text-xs text-espresso/60">Mesas</div>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {[...Array(6)].map((_,i)=>(<div key={i} className="h-10 rounded-xl bg-espresso/10" />))}
              </div>
            </div>
            <div className="card p-4 col-span-2">
              <div className="text-xs text-espresso/60">Pedido actual</div>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="flex justify-between"><span>Latte</span><span>$45</span></li>
                <li className="flex justify-between"><span>Capuccino</span><span>$42</span></li>
                <li className="flex justify-between font-semibold"><span>Total</span><span>$87</span></li>
              </ul>
              <button className="btn btn-primary w-full mt-4">Cobrar</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
