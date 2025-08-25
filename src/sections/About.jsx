import Section from '../components/Section'
import { PROFILE } from '../data'

export default function About() {
  return (
    <Section id="sobre-mi" title="Sobre mí" subtitle="Un poco de mi forma de trabajar y enfoque.">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4 text-sm leading-relaxed text-zinc-700">
          <p>Hola, soy {PROFILE.name}. Me especializo en construir <strong>webs rápidas</strong> y <strong>apps ligeras</strong> que ayudan a negocios y emprendedores a vender más.</p>
          <p>Trabajo con <strong>React y Tailwind</strong>. Me enfoco en <strong>performance</strong>, <strong>UX clara</strong> y <strong>entregas puntuales</strong>. Puedo integrar pagos, autenticación y paneles de contenido.</p>
          <p>¿Tu objetivo? Lo convierto en una solución directa, sin humo.</p>
        </div>
        <div className="card p-6">
          <h4 className="font-semibold">Proceso de trabajo</h4>
          <ol className="mt-3 space-y-2 text-sm text-zinc-600 list-decimal list-inside">
            <li>Brief rápido: objetivos, referencias y alcance.</li>
            <li>Propuesta + cotización: entregables y tiempos.</li>
            <li>Anticipo 50% y kick-off del proyecto.</li>
            <li>Iteraciones con demo y feedback.</li>
            <li>Entrega final + soporte.</li>
          </ol>
        </div>
      </div>
    </Section>
  )
}
