import Navbar from './components/Navbar'
import IntroHeading from './components/IntroHeading'
import About from './components/About'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <IntroHeading />
      <About />
      <Hero />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
