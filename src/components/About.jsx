import { motion } from 'framer-motion'
import WavyDivider from './WavyDivider'

const About = () => {
  return (
    <section id="about" className="relative min-h-[80vh] py-24 bg-pink-50">


      {/* Top Divider - Transition from Yellow (Experience) */}
      <div className="absolute top-0 left-0 w-full rotate-180 leading-none z-10">
        <WavyDivider color="fill-yellow-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-playfair text-5xl font-bold text-brown-coffee mb-8 text-center">
            About <span className="text-blush">Me</span>
          </h2>

          <div className="grid md:grid-cols-[30%_70%] gap-8 items-start bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-pink-100">
            {/* Left Column - Intro & Tags */}
            <div className="space-y-6">
              <div>
                <p className="text-base text-gray-700 leading-relaxed font-medium">
                  Hi! I'm <span className="font-bold text-blush">Shruti Malviya</span>, a Computer Science Engineering student at Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore, with an unwavering passion for crafting exceptional Android applications.
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-center bg-pale-pink/50 px-4 py-2 rounded-full w-fit border border-pink-100">
                  <span className="text-blush mr-2 text-lg">📍</span>
                  <span className="text-sm font-semibold text-brown-coffee">Indore, India</span>
                </div>
                <div className="flex items-center bg-metallic-pink/10 px-4 py-2 rounded-full w-fit border border-pink-100">
                  <span className="text-blush mr-2 text-lg">🎓</span>
                  <span className="text-sm font-semibold text-brown-coffee">CSE Student</span>
                </div>
              </div>
            </div>

            {/* Right Column - Content Cards */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blush/10 to-metallic-pink/10 p-4 rounded-xl border-l-4 border-blush hover:shadow-md transition-all">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-semibold text-brown-coffee">Android development</span> is my canvas for innovation. I specialize in building intuitive mobile experiences using <span className="font-semibold text-claret">Kotlin</span> and <span className="font-semibold text-claret">Jetpack Compose</span>.
                </p>
              </div>

              <div className="bg-gradient-to-r from-metallic-pink/10 to-pale-pink/10 p-4 rounded-xl border-l-4 border-metallic-pink hover:shadow-md transition-all">
                <p className="text-sm text-gray-700 leading-relaxed">
                  I'm currently diving deep into <span className="font-semibold text-brown-coffee">scaling backend systems</span>. Building robust <span className="font-semibold text-claret">Spring Boot</span> architectures and optimizing performance excites me.
                </p>
              </div>

              <div className="bg-gradient-to-r from-pale-pink/10 to-blush/10 p-4 rounded-xl border-l-4 border-pale-pink hover:shadow-md transition-all">
                <p className="text-sm text-gray-700 leading-relaxed">
                  What drives me most is <span className="font-semibold text-brown-coffee">real user feedback</span>. Deploying applications and iterating based on actual usage patterns is where the magic happens.
                </p>
              </div>

              <div className="bg-gradient-to-br from-brown-coffee/5 to-claret/5 p-5 rounded-xl border border-pink-100">
                <h3 className="font-playfair text-lg font-bold text-brown-coffee mb-3 flex items-center">
                  <span className="mr-2">🎯</span> Currently Focused On
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blush mr-2 mt-0.5">▸</span>
                    <span>Building scalable Android apps with clean architecture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blush mr-2 mt-0.5">▸</span>
                    <span>Optimizing backend performance & deployment pipelines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blush mr-2 mt-0.5">▸</span>
                    <span>Implementing CI/CD for faster iteration cycles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blush mr-2 mt-0.5">▸</span>
                    <span>Exploring ML/Computer Vision for mobile apps</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
