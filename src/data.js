const whatsappDigits = '529612627700'

export const PROFILE = {
  name: 'Kevin Samuel Tamayo Gómez',
  role: 'Backend-first — Sistemas POS, APIs y Webs',
  tagline: 'Construyo sistemas de punto de venta (POS), APIs robustas y frontends claros para negocios.',
  location: 'México',
  email: 'kevin.samuel.gomez@outlook.com',
  phone: '+52 961 262 7700',
  github: 'https://github.com/KevinSamuelTamayoGomez',
  linkedin: 'https://linkedin.com/in/', // agrega cuando lo tengas
  website: '#',
  ctaLink: `https://wa.me/${whatsappDigits}?text=Hola%20Kevin%2C%20vi%20tu%20portafolio%20y%20quiero%20hablar%20de%20un%20proyecto.`
}

export const SERVICES = [
  {
    title: 'Sistema POS para cafeterías',
    desc: 'Pedidos, caja, recibos, inventario y reportes. Integración con impresoras/QR.',
    tags: ['Node.js', 'PostgreSQL', 'Prisma', 'React'],
    price: 'a medida'
  },
  {
    title: 'APIs y Backends',
    desc: 'Diseño e implementación de APIs seguras y escalables.',
    tags: ['Node', 'Express', 'JWT', 'Docker'],
    price: 'a medida'
  },
  {
    title: 'Dashboards/Admin',
    desc: 'Paneles con métricas de ventas, productos y usuarios.',
    tags: ['React', 'Vite', 'Tailwind'],
    price: 'desde $600 USD'
  },
  {
    title: 'Webs de marca',
    desc: 'Landing corporativa rápida y SEO básico.',
    tags: ['React', 'Vite'],
    price: 'desde $300 USD'
  },
]

export const PROJECTS = [
  {
    title: 'Café POS — MVP (en progreso)',
    type: 'Sistema POS',
    result: 'Pedidos + tickets; módulos: mesas, caja, inventario',
    desc: 'Diseño backend-first: Node + PostgreSQL + Prisma. Front en React/Tailwind. Próximamente demo pública.',
    img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1600&auto=format&fit=crop',
    url: '#',
    stack: ['Node', 'Express', 'PostgreSQL', 'Prisma', 'React', 'Vite', 'Tailwind']
  },
  {
    title: 'Dashboard ventas — demo',
    type: 'Admin Panel',
    result: 'Tabla + filtros + gráficos (mock)',
    desc: 'UI base para administrar categorías, productos y roles.',
    img: 'https://images.unsplash.com/photo-1551281044-8e1494b3f83b?q=80&w=1600&auto=format&fit=crop',
    url: '#',
    stack: ['React', 'Vite', 'Tailwind']
  },
  {
    title: 'Web de marca para cafetería — demo',
    type: 'Landing',
    result: 'Performance 90+',
    desc: 'Sitio sencillo para mostrar menú, horarios y ubicación.',
    img: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1600&auto=format&fit=crop',
    url: '#',
    stack: ['React', 'Tailwind', 'Vite']
  }
]

export const TESTIMONIALS = [
  { quote: 'Kevin nos ayudó a estructurar el backend del POS con buenas prácticas.', author: 'Dueño de café (demo)' },
  { quote: 'Comunicación clara y entregas puntuales.', author: 'Cliente (demo)' },
]
