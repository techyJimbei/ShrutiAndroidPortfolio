import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = ({ closeSection }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon 😊')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/shruti',
      color: 'from-gray-700 to-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/shruti',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Email',
      icon: '✉️',
      url: 'mailto:ishrut.malviya29@gmail.com',
      color: 'from-blush to-claret'
    },
    {
      name: 'Phone',
      icon: '📱',
      url: 'tel:+917470800781',
      color: 'from-green-500 to-green-700'
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
          Let's Build Something <span className="text-blush">Amazing</span>
        </h2>
        <p className="font-caveat text-3xl text-gray-600 mb-8">Together! ✨</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-brown-coffee mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-pale-pink focus:border-blush focus:outline-none transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brown-coffee mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-pale-pink focus:border-blush focus:outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brown-coffee mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border-2 border-pale-pink focus:border-blush focus:outline-none transition resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blush to-metallic-pink text-white font-semibold py-3 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Message 📤
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div>
            <div className="bg-gradient-to-br from-pale-pink to-metallic-pink/30 p-8 rounded-2xl mb-6">
              <h3 className="font-playfair text-2xl font-bold text-brown-coffee mb-4">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:ishrut.malviya29@gmail.com"
                  className="flex items-center text-gray-700 hover:text-blush transition group"
                >
                  <span className="text-2xl mr-3 group-hover:scale-110 transition">✉️</span>
                  <span className="text-sm">ishrut.malviya29@gmail.com</span>
                </a>
                <a
                  href="tel:+917470800781"
                  className="flex items-center text-gray-700 hover:text-blush transition group"
                >
                  <span className="text-2xl mr-3 group-hover:scale-110 transition">📱</span>
                  <span className="text-sm">+91 7470800781</span>
                </a>
                <div className="flex items-center text-gray-700">
                  <span className="text-2xl mr-3">📍</span>
                  <span className="text-sm">Indore, Madhya Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-brown-coffee mb-4">Connect with me:</h4>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center justify-between p-4 bg-gradient-to-r ${link.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <span className="flex items-center">
                    <span className="text-2xl mr-3">{link.icon}</span>
                    <span className="font-semibold">{link.name}</span>
                  </span>
                  <span>→</span>
                </motion.a>
              ))}
            </div>

            {/* Status Badge */}
            <div className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
              <p className="text-center text-green-700 font-semibold flex items-center justify-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Currently open for internships and collaborations!
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="font-caveat text-2xl text-gray-600">
            Let's create something amazing together! ✨
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact