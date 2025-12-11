import { motion } from 'framer-motion'

const Projects = ({ closeSection }) => {
  const projects = [
    {
      title: 'AgriSense',
      emoji: '🌾',
      timeline: 'Sept 2025 - Nov 2025',
      description: 'AI-powered agricultural assistant with Gemini AI chatbot, voice assistant, multilingual support, and TensorFlow ML model for plant disease detection with medication recommendations.',
      features: [
        'Gemini AI chatbot with voice assistant',
        'Plant disease detection using TensorFlow',
        'Mandi price tracking & weather predictions',
        'Crop calendar with activity scheduling',
        'Soil nutrient analysis'
      ],
      tech: ['Kotlin', 'Jetpack Compose', 'Spring Boot', 'PostgreSQL', 'TensorFlow', 'Gemini AI'],
      gradient: 'from-green-400 to-emerald-500',
      links: {
        frontend: '#',
        backend: '#'
      }
    },
    {
      title: 'PawnBet',
      emoji: '🏺',
      timeline: 'July 2025 - Oct 2025',
      description: 'Full-stack Android auction app enabling users to bet real money on antiques and collectibles based on estimated value and market demand.',
      features: [
        'Real money betting system',
        'Stripe payment integration',
        'JWT authentication',
        'Dynamic odds calculation',
        'PostgreSQL-backed wallet system',
        'Transaction logging'
      ],
      tech: ['Kotlin', 'Jetpack Compose', 'Spring Boot', 'PostgreSQL', 'Stripe API'],
      gradient: 'from-amber-400 to-orange-500',
      links: {
        frontend: '#',
        backend: '#'
      }
    },
    {
      title: 'Momentum',
      emoji: '⚡',
      timeline: 'April 2025 - June 2025',
      description: 'Social productivity Android app featuring task management, daily goals, coin-based rewards, leaderboards, chat rooms, and story/post sharing.',
      features: [
        'Task management with daily goals',
        'Coin-based reward system',
        'Leaderboards for gamification',
        'Chat rooms for collaboration',
        'Social story/post sharing',
        'Progress tracking'
      ],
      tech: ['Kotlin', 'Jetpack Compose', 'Android', 'Java'],
      gradient: 'from-blue-400 to-purple-500',
      links: {
        frontend: '#'
      }
    }
  ]

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-h-[90vh] overflow-y-auto relative">
      <button
        onClick={closeSection}
        className="absolute top-6 right-6 text-3xl text-brown-coffee hover:text-claret transition"
      >
        ×
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-playfair text-5xl font-bold text-brown-coffee mb-4">
          Featured <span className="text-blush">Projects</span>
        </h2>
        <p className="text-gray-600 mb-8 text-lg font-caveat text-2xl">
          Some things I've built recently ✨
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-pale-pink to-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="md:flex">
                {/* Project Image/Icon */}
                <div className={`md:w-1/3 bg-gradient-to-br ${project.gradient} flex items-center justify-center p-12`}>
                  <span className="text-9xl">{project.emoji}</span>
                </div>

                {/* Project Details */}
                <div className="md:w-2/3 p-8">
                  <h3 className="font-playfair text-3xl font-bold text-brown-coffee mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{project.timeline}</p>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-brown-coffee mb-2">Key Features:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <span className="text-blush mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-brown-coffee mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gradient-to-r from-blush to-metallic-pink text-white px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.links.frontend && (
                      <a
                        href={project.links.frontend}
                        className="flex items-center text-blush hover:text-claret font-semibold transition"
                      >
                        <span className="mr-2">📱</span> Frontend
                      </a>
                    )}
                    {project.links.backend && (
                      <a
                        href={project.links.backend}
                        className="flex items-center text-blush hover:text-claret font-semibold transition"
                      >
                        <span className="mr-2">⚙️</span> Backend
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Projects