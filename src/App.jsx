import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Solutions from './components/Solutions'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#050a14]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Solutions />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
