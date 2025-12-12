import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-[#FFF8F0] min-h-screen w-full flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />
    </div>
  )
}

export default App