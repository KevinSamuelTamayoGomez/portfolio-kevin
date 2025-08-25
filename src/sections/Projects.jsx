import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../data'

export default function Projects() {
  return (
    <Section id="proyectos" title="Proyectos" subtitle="Muestras de trabajo. Próximamente reemplazar por demos reales.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (<ProjectCard key={p.title} {...p} />))}
      </div>
    </Section>
  )
}
