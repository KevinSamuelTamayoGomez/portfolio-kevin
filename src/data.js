const whatsappDigits = '529612627700' // +52 (México) + tu número sin espacios

export const PROFILE = {
  name: 'Kevin Samuel Tamayo Gómez',
  role: 'Desarrollador Freelance — Webs & Apps',
  tagline: 'Desarrollo páginas rápidas y apps prácticas para negocios y emprendedores.',
  location: 'México',
  email: 'kevin.samuel.gomez@outlook.com',
  phone: '+52 961 262 7700',
  github: 'https://github.com/',         // pon tu usuario cuando lo tengas
  linkedin: 'https://linkedin.com/in/',   // pon tu perfil cuando lo tengas
  website: '#',
  ctaLink: `https://wa.me/${whatsappDigits}?text=Hola%20Kevin%2C%20vi%20tu%20portafolio%20y%20quiero%20hablar%20de%20un%20proyecto.`
}

export const SERVICES = [
  { title: 'Landing Pages', desc: 'SEO básico y performance alto (Lighthouse 90+).', tags: ['React', 'Tailwind', 'Vite'], price: 'desde $300 USD' },
  { title: 'Web Corporativa', desc: 'Sitios completos con blog, formularios y CMS opcional.', tags: ['React', 'Headless CMS'], price: 'desde $600 USD' },
  { title: 'Apps MVP', desc: 'Prototipos funcionales para validar ideas rápido.', tags: ['React Native (opcional)', 'Firebase'], price: 'desde $1,000 USD' },
  { title: 'Automatizaciones', desc: 'Integraciones con APIs, chatbots y flujos.', tags: ['APIs', 'Automation'], price: 'a medida' },
]

// por ahora sin demos reales: dejamos “Próximamente” y # como URL
export const PROJECTS = [
  {
    title: 'Restaurante — Próximamente',
    type: 'Landing Page',
    result: 'Reservas online (demo)',
    desc: 'Landing mobile-first con formulario y mapa.',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop',
    url: '#',
    stack: ['React', 'Tailwind', 'Vite']
  },
  {
    title: 'E‑commerce — Próximamente',
    type: 'E‑commerce Demo',
    result: 'Checkout simple',
    desc: 'Catálogo y carrito (demo).',
    img: 'https://images.unsplash.com/photo-1521334726092-b509a19597d1?q=80&w=1600&auto=format&fit=crop',
    url: '#',
    stack: ['React', 'Stripe (demo)']
  },
  {
    title: 'Taskly — Próximamente',
    type: 'App MVP',
    result: 'Login + CRUD (demo)',
    desc: 'App básica con auth y lista de tareas.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    url: '#',
    stack: ['Expo/React Native', 'Firebase']
  }
]

export const TESTIMONIALS = [
  { quote: 'Profesional y rápido. La comunicación fue clara todo el tiempo.', author: 'Cliente (demo)' },
  { quote: 'El resultado superó lo que teníamos en mente.', author: 'Empresa (demo)' },
]
