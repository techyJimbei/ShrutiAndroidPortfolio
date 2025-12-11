import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState(null)

  const closeSection = () => {
    setActiveSection(null)
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center" style={{ minHeight: '100vh' }}>
      <AnimatePresence mode="wait">
        {!activeSection ? (
          <Hero key="hero" setActiveSection={setActiveSection} />
        ) : (
          <motion.div
            key="dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={closeSection}
          >
            {/* Dialog Box - No border radius since components have their own */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Content Container - Components handle their own styling */}
              <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
                {activeSection === 'about' && <About closeSection={closeSection} />}
                {activeSection === 'skills' && <Skills closeSection={closeSection} />}
                {activeSection === 'projects' && <Projects closeSection={closeSection} />}
                {activeSection === 'experience' && <Experience closeSection={closeSection} />}
                {activeSection === 'contact' && <Contact closeSection={closeSection} />}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App