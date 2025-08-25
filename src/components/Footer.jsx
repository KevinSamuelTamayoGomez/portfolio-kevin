import { PROFILE } from '../data'

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container h-16 flex items-center justify-between text-sm text-zinc-600">
        <span>© {new Date().getFullYear()} {PROFILE.name}. Todos los derechos reservados.</span>
        <div className="flex items-center gap-4">
          <a href={PROFILE.github} className="hover:opacity-80">GitHub</a>
          <a href={PROFILE.linkedin} className="hover:opacity-80">LinkedIn</a>
          <a href={PROFILE.website} className="hover:opacity-80">Website</a>
        </div>
      </div>
    </footer>
  )
}
