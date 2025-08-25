import { PROFILE } from '../data'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-zinc-200">
      <div className="container h-16 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand"></span>
          {PROFILE.name}
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#servicios" className="hover:opacity-80">Servicios</a>
          <a href="#proyectos" className="hover:opacity-80">Proyectos</a>
          <a href="#sobre-mi" className="hover:opacity-80">Sobre mí</a>
          <a href="#contacto" className="hover:opacity-80">Contacto</a>
        </nav>
        <a href={PROFILE.ctaLink} className="btn">Hablemos</a>
      </div>
    </header>
  )
}
