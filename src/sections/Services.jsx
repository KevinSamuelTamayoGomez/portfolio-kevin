import Section from '../components/Section'
import ServiceCard from '../components/ServiceCard'
import { SERVICES } from '../data'

export default function Services() {
  return (
    <Section id="servicios" title="Servicios" subtitle="Soluciones rápidas, modernas y enfocadas en resultados.">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((s) => (<ServiceCard key={s.title} {...s} />))}
      </div>
    </Section>
  )
}
