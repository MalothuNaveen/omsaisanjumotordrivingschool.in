import { useMemo } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import TrainingExperience from './components/TrainingExperience'
import Vehicles from './components/Vehicles'
import Beginners from './components/Beginners'
import Safety from './components/Safety'
import About from './components/About'
import Reviews from './components/Reviews'
import Locations from './components/Locations'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppWidget from './components/WhatsAppWidget'

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
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <TrainingExperience />
        <Vehicles />
        <Beginners />
        <Safety />
        <About />
        <Reviews />
        <Locations />
        <Faq />
        <TrustBar />
        <FinalCta />
        <Contact />
      </main>

      <Footer />
      <WhatsAppWidget />
    </>
  )
}
