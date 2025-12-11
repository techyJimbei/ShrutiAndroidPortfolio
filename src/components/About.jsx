import { motion } from 'framer-motion'

const About = ({ closeSection }) => {
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
        <h2 className="font-playfair text-5xl font-bold text-brown-coffee mb-6">
          About <span className="text-blush">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            {/* Image Placeholder */}
            <div className="polaroid rotate-2 mb-6">
              <div className="w-full h-64 bg-gradient-to-br from-metallic-pink to-blush rounded-lg flex items-center justify-center">
                <span className="text-8xl">👩‍💻</span>
              </div>
              <p className="font-caveat text-center text-xl mt-2">That's me! 💫</p>
            </div>

            {/* Fun Facts */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-pale-pink rounded-lg">
                <div className="text-3xl mb-2">📁</div>
                <div className="text-sm font-semibold text-brown-coffee">life</div>
              </div>
              <div className="text-center p-4 bg-metallic-pink/30 rounded-lg">
                <div className="text-3xl mb-2">🎨</div>
                <div className="text-sm font-semibold text-brown-coffee">design</div>
              </div>
              <div className="text-center p-4 bg-blush/30 rounded-lg">
                <div className="text-3xl mb-2">✨</div>
                <div className="text-sm font-semibold text-brown-coffee">random</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hi! I'm <span className="font-bold text-blush">Shruti Malviya</span>, a Computer Science Engineering student at Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore, with a passion for creating innovative mobile applications and exploring the fascinating world of Machine Learning.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              With a CGPA of <span className="font-bold text-claret">8.0</span>, I've been diving deep into Android development using Kotlin and Jetpack Compose, building full-stack applications with Spring Boot, and experimenting with AI/ML technologies like TensorFlow and Computer Vision.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, sipping coffee ☕, and turning creative ideas into functional, beautiful digital experiences.
            </p>

            <div className="bg-gradient-to-r from-blush/10 to-metallic-pink/10 p-6 rounded-xl mt-6">
              <h3 className="font-playfair text-2xl font-bold text-brown-coffee mb-4">
                Quick Facts
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-blush mr-2">📍</span>
                  <span>Based in Indore, Madhya Pradesh</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blush mr-2">🎓</span>
                  <span>B.Tech in Computer Science Engineering</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blush mr-2">💻</span>
                  <span>Android Developer & ML Enthusiast</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blush mr-2">☕</span>
                  <span>Fueled by coffee and creativity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About