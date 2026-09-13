import { useMemo } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import Vehicles from './components/Vehicles'
import Reviews from './components/Reviews'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppWidget from './components/WhatsAppWidget'
import MobileActionBar from './components/MobileActionBar'

import useScrollReveal from './hooks/useScrollReveal'
import useScrollSpy from './hooks/useScrollSpy'
import { navLinks } from './data/site'

export default function App() {
  const sectionIds = useMemo(() => navLinks.map((link) => link.id), [])
  const activeId = useScrollSpy(sectionIds)
  useScrollReveal()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <Header activeId={activeId} />

      <main id="main">
        <Hero />
        <TrustBar />
        <Services />
        <Vehicles />
        <Reviews />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <WhatsAppWidget />
      <MobileActionBar />
    </>
  )
}
