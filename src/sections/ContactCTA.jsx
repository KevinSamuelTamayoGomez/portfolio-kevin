import Section from '../components/Section'
import { PROFILE } from '../data'

export default function ContactCTA() {
  return (
    <Section id="contacto" title="¿Listo para despegar?" subtitle="Cuéntame qué necesitas y te respondo en 24h.">
      <div className="flex flex-wrap items-center gap-4">
        <a className="btn" href={PROFILE.ctaLink}>Escríbeme por WhatsApp</a>
        <a href={`tel:${PROFILE.phone.replaceAll(' ', '')}`} className="inline-flex items-center gap-2 text-sm hover:opacity-80">{PROFILE.phone}</a>
        <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 text-sm hover:opacity-80">{PROFILE.email}</a>
      </div>
    </Section>
  )
}
