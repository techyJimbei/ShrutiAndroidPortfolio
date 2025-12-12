import { motion } from 'framer-motion'
import WavyDivider from './WavyDivider'

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/techyJimbei',
      color: 'from-gray-700 to-gray-900'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shruti-malviya/',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/shrutymalviya/',
      color: 'from-yellow-500 to-orange-500' 
    }
  ]

  return (
    <section id="contact" className="relative py-24 bg-[#FFF8F0] min-h-[50vh]">
      {/* Top Divider - Transition from Pink (About) */}
      <div className="absolute top-0 left-0 w-full rotate-180 leading-none z-10">
        <WavyDivider color="fill-pink-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 w-full items-center">

            {/* Left Column - Get in Touch */}
            <div>
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-pink-100/50">
                <h2 className="font-playfair text-4xl font-bold text-brown-coffee mb-8">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <a
                    href="mailto:ishrut.malviya29@gmail.com"
                    className="flex items-center text-gray-700 hover:text-blush transition group"
                  >
                    <span className="text-3xl mr-4 group-hover:scale-110 transition p-2 bg-pink-50 rounded-full">✉️</span>
                    <span className="text-lg font-medium">ishrut.malviya29@gmail.com</span>
                  </a>
                  <a
                    href="tel:+917470800781"
                    className="flex items-center text-gray-700 hover:text-blush transition group"
                  >
                    <span className="text-3xl mr-4 group-hover:scale-110 transition p-2 bg-pink-50 rounded-full">📱</span>
                    <span className="text-lg font-medium">+91 7470800781</span>
                  </a>
                  <div className="flex items-center text-gray-700">
                    <span className="text-3xl mr-4 p-2 bg-pink-50 rounded-full">📍</span>
                    <span className="text-lg font-medium">Indore, Madhya Pradesh, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Social Links */}
            <div>
              <div className="space-y-4">
                <h3 className="font-bold text-2xl text-brown-coffee mb-8 text-center md:text-left">Connect with me:</h3>
                {socialLinks.map((link, index) => (
  <motion.a
    key={link.name}
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`flex items-center justify-between p-5 
      bg-gradient-to-r from-[#FFF3D4] to-[#FBE7A1] 
      text-brown-coffee rounded-xl hover:shadow-xl 
      transition-all duration-300 transform hover:-translate-y-1 group`}
  >
    <span className="flex items-center">
      <span className="text-3xl mr-4 group-hover:rotate-12 transition-transform">{link.icon}</span>
      <span className="font-semibold text-lg">{link.name}</span>
    </span>
    <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
  </motion.a>
))}

              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
