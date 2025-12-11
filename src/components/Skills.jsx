import { motion } from 'framer-motion'

const Skills = ({ closeSection }) => {
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
          My <span className="text-blush">Skills</span>
        </h2>

        <p className="text-gray-600 mb-8 text-lg">
          Technologies and tools I work with to bring ideas to life
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
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
        <div className="mt-12 bg-gradient-to-r from-pale-pink to-metallic-pink/30 p-8 rounded-2xl">
          <h3 className="font-playfair text-3xl font-bold text-brown-coffee mb-6">
            Certifications 📜
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold text-brown-coffee">Android 14 and Kotlin Development</p>
              <p className="text-sm text-gray-600">Udemy</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold text-brown-coffee">Core JAVA Programming</p>
              <p className="text-sm text-gray-600">NPTEL</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold text-brown-coffee">AI & ML using Python</p>
              <p className="text-sm text-gray-600">NPTEL</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold text-brown-coffee">Soft Skills</p>
              <p className="text-sm text-gray-600">NPTEL</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Skills