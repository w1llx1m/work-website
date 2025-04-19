
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutUS from './components/AboutUS'

function App() {
  return (
    <div className="font-sans bg-white text-gray-900 scroll-smooth">
      <Hero />
      <About />
      <AboutUS />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App