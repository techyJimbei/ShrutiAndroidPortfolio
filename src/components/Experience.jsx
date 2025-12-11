import { motion } from 'framer-motion'

const Experience = ({ closeSection }) => {
  const timeline = [
    {
      type: 'internship',
      title: 'Computer Vision & Machine Learning Intern',
      organization: 'Cummins Turbo Technologies',
      period: 'June 2024 - July 2024',
      description: [
        'Built real-time object detection system for machinery parts using YOLOv9',
        'Utilized Python, OpenCV libraries, and Roboflow for model training and annotation',
        'Deployed solution with Flask, optimizing for low latency and industrial usability',
        'Implemented detection reliability checks across frames'
      ],
      icon: '💼',
      color: 'from-blush to-metallic-pink'
    },
    {
      type: 'education',
      title: 'Bachelor of Technology - Computer Science Engineering',
      organization: 'Shri Vaishnav Vidyapeeth Vishwavidyalaya',
      location: 'Indore, Madhya Pradesh',
      period: 'Present',
      grade: 'CGPA: 8.0',
      icon: '🎓',
      color: 'from-metallic-pink to-pale-pink'
    },
    {
      type: 'education',
      title: 'AISSCE (Class XII)',
      organization: 'Mar Thoma Hr. Sec. School',
      location: 'Indore, Madhya Pradesh',
      grade: 'Percentage: 82%',
      icon: '📚',
      color: 'from-pale-pink to-metallic-pink'
    },
    {
      type: 'education',
      title: 'AISSCE (Class X)',
      organization: 'Mar Thoma Hr. Sec. School',
      location: 'Indore, Madhya Pradesh',
      grade: 'Percentage: 85%',
      icon: '📖',
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
          My <span className="text-blush">Journey</span>
        </h2>

        <p className="text-gray-600 mb-8 text-lg">
          Professional experience and educational background
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blush to-metallic-pink"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className={`absolute left-4 top-0 w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                <span className="text-lg">{item.icon}</span>
              </div>

              {/* Content Card */}
              <div className="bg-gradient-to-br from-pale-pink to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="font-playfair text-2xl font-bold text-brown-coffee mb-2">
                  {item.title}
                </h3>
                <p className="text-blush font-semibold mb-1">{item.organization}</p>
                {item.location && (
                  <p className="text-sm text-gray-600 mb-1">{item.location}</p>
                )}
                <p className="text-sm text-gray-500 mb-3">{item.period}</p>
                
                {item.grade && (
                  <p className="text-claret font-bold mb-3">{item.grade}</p>
                )}

                {item.description && (
                  <ul className="space-y-2">
                    {item.description.map((point, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <span className="text-blush mr-2 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-12 bg-gradient-to-r from-blush/10 to-metallic-pink/10 p-8 rounded-2xl">
          <h3 className="font-playfair text-3xl font-bold text-brown-coffee mb-6 flex items-center">
            <span className="mr-3">📜</span>
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <p className="font-semibold text-brown-coffee">Android 14 and Kotlin Development</p>
              <p className="text-sm text-gray-600">Udemy</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <p className="font-semibold text-brown-coffee">Core JAVA Programming</p>
              <p className="text-sm text-gray-600">NPTEL</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <p className="font-semibold text-brown-coffee">Introduction to AI & ML using Python</p>
              <p className="text-sm text-gray-600">NPTEL</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <p className="font-semibold text-brown-coffee">Soft Skills</p>
              <p className="text-sm text-gray-600">NPTEL</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Experience