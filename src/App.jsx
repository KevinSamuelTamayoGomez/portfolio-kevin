import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './sections/Services'
import Projects from './sections/Projects'
import About from './sections/About'
import ContactCTA from './sections/ContactCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
