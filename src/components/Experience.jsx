import { motion } from 'framer-motion'
import WavyDivider from './WavyDivider'

const Experience = () => {
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
    }
  ]

  return (
    <section id="experience" className="relative min-h-screen py-24 bg-yellow-50">


      {/* Top Divider - Transition from Blue (Skills) */}
      <div className="absolute top-0 left-0 w-full rotate-180 leading-none z-10">
        <WavyDivider color="fill-blue-50" />
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
            My <span className="text-blush">Journey</span>
          </h2>
          <p className="text-gray-600 text-xl font-caveat">
            Professional experience and educational background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative px-4">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blush to-metallic-pink hidden md:block"></div>
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blush to-metallic-pink md:hidden"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 relative`}
              >
                {/* Timeline Dot (Center for Desktop, Left for Mobile) */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-blush to-metallic-pink flex items-center justify-center shadow-lg z-20 border-4 border-yellow-50">
                  <span className="text-xs text-white">✨</span>
                </div>

                {/* Empty Spacer for alternating layout */}
                <div className="hidden md:block w-1/2" />

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-16 md:pl-0">
                  <div className={`bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 ${index % 2 === 0 ? 'border-claret' : 'border-blush'} relative`}>
                    {/* Triangle Pointer */}
                    <div
                      className={`hidden md:block absolute top-1 w-4 h-4 bg-white transform rotate-45 ${index % 2 === 0 ? '-right-2 border-r border-t border-gray-100' : '-left-2 border-l border-b border-gray-100'}`}
                    />

                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <h3 className="font-playfair text-xl font-bold text-brown-coffee leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-blush font-semibold text-sm">{item.period}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 font-medium mb-2">{item.organization}</p>
                    {item.location && (
                      <p className="text-sm text-gray-500 mb-4 flex items-center">
                        <span className="mr-1">📍</span> {item.location}
                      </p>
                    )}

                    {item.grade && (
                      <div className="inline-block bg-pink-50 px-3 py-1 rounded-full text-xs font-bold text-claret mb-4">
                        {item.grade}
                      </div>
                    )}

                    {item.description && (
                      <ul className="space-y-2 mt-2">
                        {item.description.map((point, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600">
                            <span className="text-blush mr-2 mt-1.5 text-xs">●</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
