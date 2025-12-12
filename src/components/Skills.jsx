import { motion } from 'framer-motion'
import WavyDivider from './WavyDivider'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      emoji: '💻',
      skills: ['Kotlin', 'Java', 'Python'],
      color: 'from-blush to-metallic-pink'
    },
    {
      title: 'Android Dev',
      emoji: '📱',
      skills: ['Jetpack Compose', 'Android 14', 'Material Design'],
      color: 'from-metallic-pink to-pale-pink'
    },
    {
      title: 'Backend & APIs',
      emoji: '🔧',
      skills: ['Spring Boot', 'REST API', 'Flask'],
      color: 'from-brown-coffee to-claret'
    },
    {
      title: 'Machine Learning',
      emoji: '🤖',
      skills: ['TensorFlow', 'YOLOv9', 'OpenCV', 'Computer Vision'],
      color: 'from-claret to-blush'
    },
    {
      title: 'Databases',
      emoji: '🗄️',
      skills: ['PostgreSQL', 'MySQL', 'Firebase'],
      color: 'from-pale-pink to-metallic-pink'
    },
    {
      title: 'Tools',
      emoji: '🛠️',
      skills: ['Git', 'Postman', 'Roboflow', 'JUnit'],
      color: 'from-metallic-pink to-blush'
    }
  ]

  return (
    <section id="skills" className="relative min-h-screen py-24 bg-blue-50">


      {/* Top Divider - Transition from Pink (Projects) */}
      <div className="absolute top-0 left-0 w-full rotate-180 leading-none z-10">
        <WavyDivider color="fill-pink-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl font-bold text-brown-coffee mb-6">
            My <span className="text-blush">Skills</span>
          </h2>
          <p className="text-gray-600 text-xl font-caveat">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-200"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{category.emoji}</span>
                <h3 className="font-playfair text-xl font-bold text-brown-coffee">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`bg-gradient-to-r ${category.color} text-white px-3 py-1 rounded-full text-sm font-medium shadow-md`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-blue-100">
          <h3 className="font-playfair text-3xl font-bold text-brown-coffee mb-6 text-center">
            Certifications 📜
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Android 14 and Kotlin Development", issuer: "Udemy" },
              { title: "Core JAVA Programming", issuer: "NPTEL" },
              { title: "AI & ML using Python", issuer: "NPTEL" },
              { title: "Soft Skills", issuer: "NPTEL" }
            ].map((cert, i) => (
              <div key={i} className="bg-blue-50/50 p-4 rounded-lg border border-blue-100 flex justify-between items-center hover:bg-blue-50 transition-colors">
                <div>
                  <p className="font-semibold text-brown-coffee">{cert.title}</p>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                </div>
                <span className="text-xl">🏅</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
