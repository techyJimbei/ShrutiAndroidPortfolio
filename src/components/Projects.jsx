import { motion } from 'framer-motion'
import WavyDivider from './WavyDivider'

const Projects = () => {
  const projects = [
    {
      title: 'AgriSense',
      image: '/agrisense_image.jpeg',
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
        frontend: 'https://github.com/techyJimbei/AgriSense',
        backend: 'https://github.com/Shantanu-getcoffee/AgriSense-Backend'
      }
    },
    {
      title: 'PawnBet',
      image: '/pawnbet_image.jpeg',
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
        frontend: 'https://github.com/techyJimbei/PawnBet-Frontend',
        backend: 'https://github.com/techyJimbei/Pawnbet'
      }
    },
    {
      title: 'Momentum',
      image: '/momentum_image.jpeg',
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
        frontend: 'https://github.com/techyJimbei/momentum'
      }
    }
  ]

  return (
    <section id="projects" className="relative min-h-screen pt-12 pb-20 bg-pink-50 overflow-hidden">


      {/* Top Divider */}
      <div className="absolute top-[-20px] left-0 w-full rotate-180 leading-none z-10">
        <WavyDivider color="fill-[#FFF8F0]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with handwritten note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center relative"
        >
          <h2 className="font-playfair text-6xl font-bold text-brown-coffee mb-4">
            Featured <span className="text-blush">Projects</span>
          </h2>

          {/* Cute handwritten note */}
          <motion.div
            initial={{ opacity: 0, rotate: -3, y: 10 }}
            animate={{ opacity: 1, rotate: -2, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-block mt-2"
          >
            <div className="bg-yellow-200 px-4 py-2 rounded-lg shadow-md transform -rotate-1 border-2 border-yellow-300">
              <p className="text-sm text-gray-700 font-caveat italic">
                check out what I've been building!
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`transition-all duration-300 ${index === 1 ? 'md:ml-20' : ''}`}
            >
              {/* Scrapbook-style wrapper */}
              <div className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border-4 border-white transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 hover:scale-[1.02] transition-all duration-300`}>
                <div className={`md:flex gap-6 items-center ${index === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Project Image - Polaroid style */}
                  <div className="md:w-1/3 p-4 flex items-center justify-center relative">

                    {/* Sticker Links for first project */}
                    {index === 0 && (
                      <>
                        {/* Frontend Link */}
                        <motion.a
                          href={project.links.frontend}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute -left-20 -top-8 z-20 w-44 rotate-[-12deg] hover:scale-110 transition-transform cursor-pointer group"
                          whileHover={{ rotate: -8, scale: 1.1 }}
                        >
                          <img
                            src="/frontend_link.png"
                            alt="Visit Frontend"
                            className="w-full drop-shadow-lg scale-50"
                          />
                          <div className="absolute inset-0 flex items-center justify-center pt-2">
                            <span className="text-xs font-bold text-center leading-tight px-2 py-1 text-brown-coffee bg-white/70 backdrop-blur-sm rounded-lg shadow-sm group-hover:text-claret transition-colors">
                              frontend repo
                            </span>
                          </div>
                        </motion.a>

                        {/* Backend Link */}
                        <motion.a
                          href={project.links.backend}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute -left-24 top-80 z-10 w-44 hover:scale-110 transition-transform cursor-pointer group"
                          style={{ transform: 'rotate(-40deg)' }}
                          whileHover={{ rotate: -35, scale: 1.1 }}
                        >
                          <img
                            src="/backend_link.png"
                            alt="Visit Backend"
                            className="w-full drop-shadow-lg scale-90"
                          />
                          <div className="absolute inset-0 flex items-center justify-center pt-2" style={{ transform: 'rotate(40deg)' }}>
                            <span className="text-xs font-bold text-center leading-tight px-2 py-1 text-brown-coffee bg-white/70 backdrop-blur-sm rounded-lg shadow-sm group-hover:text-claret transition-colors">
                              backend repo
                            </span>
                          </div>
                        </motion.a>
                      </>
                    )}

                    {/* Sticker Links for second project */}
                    {index === 1 && (
                      <>
                        <motion.a
                          href={project.links.frontend}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute -right-20 -top-8 z-20 w-44 rotate-[15deg] hover:scale-110 transition-transform cursor-pointer group"
                          whileHover={{ rotate: 10, scale: 1.1 }}
                        >
                          <img
                            src="/frontend_link.png"
                            alt="Visit Frontend"
                            className="w-full drop-shadow-lg scale-50"
                          />
                          <div className="absolute inset-0 flex items-center justify-center pt-2">
                            <span className="text-xs font-bold text-center leading-tight px-2 py-1 text-brown-coffee bg-white/70 backdrop-blur-sm rounded-lg shadow-sm group-hover:text-claret transition-colors">
                              frontend repo
                            </span>
                          </div>
                        </motion.a>

                        <motion.a
                          href={project.links.backend}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute -right-24 top-80 z-10 w-44 rotate-[35deg] hover:scale-110 transition-transform cursor-pointer group"
                          whileHover={{ rotate: 30, scale: 1.1 }}
                        >
                          <img
                            src="/backend_link.png"
                            alt="Visit Backend"
                            className="w-full drop-shadow-lg scale-90"
                          />
                          <div className="absolute inset-0 flex items-center justify-center pt-2">
                            <span className="text-xs font-bold text-center leading-tight px-2 py-1 text-brown-coffee bg-white/70 backdrop-blur-sm rounded-lg shadow-sm group-hover:text-claret transition-colors">
                              backend repo
                            </span>
                          </div>
                        </motion.a>
                      </>
                    )}

                    {/* Sticker Link for third project */}
                    {index === 2 && (
                      <motion.a
                        href={project.links.frontend}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute -left-20 -top-6 z-20 w-40 rotate-[-18deg] hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ rotate: -12, scale: 1.1 }}
                      >
                        <img
                          src="/frontend_link.png"
                          alt="Visit Frontend"
                          className="w-full drop-shadow-lg scale-50"
                        />
                        <div className="absolute inset-0 flex items-center justify-center pt-2">
                          <span className="text-xs font-bold text-center leading-tight px-2 py-1 text-brown-coffee bg-white/70 backdrop-blur-sm rounded-lg shadow-sm group-hover:text-claret transition-colors">
                            frontend repo
                          </span>
                        </div>
                      </motion.a>
                    )}

                    {/* Polaroid frame effect */}
                    <div className="bg-white p-3 shadow-xl transform hover:scale-105 transition-transform">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover rounded-lg border-2 border-pink-100"
                      />
                      {/* Polaroid caption */}
                      <div className="mt-2 text-center">
                        <p className="text-xs font-handwriting text-gray-600 italic">"{project.title}"</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="md:w-2/3 p-6 md:p-4 flex flex-col justify-center h-full">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-playfair text-2xl font-bold text-[#D86487]">
                        {project.title}
                      </h3>
                      <motion.span
                        className="text-[10px] font-medium text-blush bg-gradient-to-r from-pink-100 to-purple-100 px-3 py-1 rounded-full border-2 border-pink-300 shadow-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.timeline}
                      </motion.span>
                    </div>

                    <p className="text-gray-700 mb-3 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Features with cute checkmarks */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-[#D86487] mb-2 text-sm flex items-center gap-1">
                        <span className="text-base"></span> Key Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {project.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start text-xs text-gray-600"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <span className="text-pink-400 mr-1.5 mt-0.5 text-sm">*</span>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack with sticker style */}
                    <div className="border-t border-pink-200/50 pt-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <motion.span
                            key={tech}
                            className="bg-gradient-to-r from-pink-100 to-purple-100 text-gray-700 px-3 py-1 rounded-full text-[11px] font-semibold border-2 border-pink-200 shadow-sm hover:shadow-md transition-shadow"
                            whileHover={{ scale: 1.05, y: -2 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>


                    </div>
                  </div>
                </div>
              </div>

              {/* Cute arrow between projects */}
              {index < projects.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="flex justify-center my-8"
                >
                  <div className="bg-yellow-300 px-4 py-2 rounded-full shadow-lg transform rotate-3 border-2 border-yellow-400">
                    <span className="text-2xl">↓</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects