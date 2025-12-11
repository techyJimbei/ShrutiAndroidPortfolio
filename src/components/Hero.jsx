import { motion } from 'framer-motion'

const Hero = ({ setActiveSection }) => {
  const sections = [
    {
      id: 'about',
      label: 'About',
      position: 'top-20 -left-28',
      rotation: '-rotate-6',
      gradient: 'from-rose-300 via-pink-200 to-rose-100',
      imageId: 'about-img',
      image: '/about_image.jpg'
    },
    {
      id: 'skills',
      label: 'Skills',
      position: 'top-8 -right-36',
      rotation: 'rotate-6',
      gradient: 'from-amber-300 via-yellow-200 to-amber-100',
      imageId: 'skills-img',
      image: '/skills_image.jpg'
    },
    {
      id: 'projects',
      label: 'Projects',
      position: 'top-52 -right-40',
      rotation: 'rotate-3',
      gradient: 'from-blue-300 via-cyan-200 to-blue-100',
      imageId: 'projects-img',
      image: '/projects_image.jpg',
      zIndex: 'z-40'
    },
    {
      id: 'experience',
      label: 'Experience',
      position: '-bottom-8 -right-32',
      rotation: '-rotate-4',
      gradient: 'from-purple-300 via-violet-200 to-purple-100',
      imageId: 'experience-img',
      image: '/experience_image.jpg',
      zIndex: 'z-40'
    },
    {
      id: 'contact',
      label: 'Contact Me',
      position: '-bottom-8 -left-24',
      rotation: 'rotate-12',
      gradient: 'from-green-300 via-emerald-200 to-green-100',
      imageId: 'contact-img',
      image: '/contact_me_image.jpg'
    },
  ]

  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="relative"
        style={{
          width: '300px',
          height: 'min(680px, 90vh)'
        }}
      >
        {/* Decorative floating elements */}
        <motion.div
          className="absolute -top-8 -left-8 text-4xl opacity-40 z-0"
          animate={{ rotate: 360, y: [0, -10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute -bottom-8 -right-8 text-4xl opacity-40 z-0"
          animate={{ rotate: -360, y: [0, 10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          💫
        </motion.div>

        <div className="absolute inset-0">
          {sections.map((section, index) => (
            <motion.div
              key={`bg-${section.id}`}
              className={`absolute ${section.position} ${section.rotation} ${section.zIndex || 'z-20'} cursor-pointer`}
              style={{
                height: '200px',
                width: '200px',
                filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.3))'
              }}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.15 + 0.5 }}
              whileHover={{
                scale: 1.15,
                zIndex: 100,
                rotate: 0,
                transition: { duration: 0.1 }
              }}
              onClick={() => setActiveSection(section.id)}
            >
              <div className="relative w-[150px] h-[150px]">
                {/* Image - Full Coverage */}
                <div
                  id={section.imageId}
                  className={`w-full h-full rounded-xl bg-gradient-to-br ${section.gradient} overflow-hidden relative shadow-2xl`}
                >
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h10v10H0V0zm10 10h10v10H10V10z" fill="%23fff" fill-opacity="0.3"/%3E%3C/svg%3E")',
                      backgroundSize: '20px 20px'
                    }}
                  />
                  {/* Image or Emoji */}
                  {section.image ? (
                    <img
                      src={section.image}
                      alt={section.label}
                      className="w-full h-full object-cover relative z-10"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-5xl z-10">
                      {section.id === 'about' && '👩‍💻'}
                      {section.id === 'skills' && '⚡'}
                      {section.id === 'projects' && '🚀'}
                      {section.id === 'experience' && '💼'}
                    </div>
                  )}
                </div>

                {/* Yellow Sticky Note - Folded Corner */}
                <div
                  className={`absolute -bottom-2 ${['about', 'contact'].includes(section.id) ? '-left-2' : '-right-2'} bg-yellow-300 px-3 py-1.5 shadow-lg z-20`}
                  style={{
                    clipPath: ['about', 'contact'].includes(section.id)
                      ? 'polygon(15% 100%, 100% 100%, 100% 0, 0 0, 0 80%)' // Bottom-left cut
                      : 'polygon(0 0, 100% 0, 100% 80%, 85% 100%, 0 100%)', // Bottom-right cut
                    transform: 'rotate(-2deg)'
                  }}
                >
                  <p className="text-sm font-semi text-brown-coffee-800 whitespace-nowrap">
                    {section.label}
                  </p>

                  {/* Folded corner shadow effect */}
                  <div
                    className={`absolute bottom-0 ${['about', 'contact'].includes(section.id) ? 'left-0' : 'right-0'} w-4 h-5 bg-yellow-400`}
                    style={{
                      clipPath: ['about', 'contact'].includes(section.id)
                        ? 'polygon(0 0, 100% 100%, 0 100%)' // Bottom-left fold shadow
                        : 'polygon(100% 0, 100% 100%, 0 100%)', // Bottom-right fold shadow
                      filter: 'brightness(0.7)'
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Phone Frame - Middle layer */}
        <div
          className="relative mx-auto bg-black rounded-[42px] p-2.5 z-10"
          style={{
            width: '100%',
            height: '100%',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(255,255,255,0.1)'
          }}
        >
          {/* Phone Screen */}
          <div className="w-full h-full bg-white rounded-[36px] overflow-hidden relative z-10">
            {/* Instagram Story Header */}
            <div className="absolute top-0 left-0 right-0 z-30 p-3 bg-gradient-to-b from-black/40 to-transparent">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blush to-claret border-2 border-white"></div>
                <span className="text-white font-semibold text-xs drop-shadow-lg">@ShrutiAndroid</span>
                <div className="ml-auto text-white text-base">⋮</div>
              </div>
              {/* Story Progress Bar */}
              <div className="w-full h-0.5 bg-white/60 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="h-full bg-blush"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 5, ease: 'linear', repeat: Infinity }}
                />
              </div>
            </div>




          </div>
        </div>

        {/* Main Instagram Post - Front layer (Moved outside Phone Frame) */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl"
            style={{
              height: '360px',
              width: '250px',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))'
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Instagram Post Header */}
            <div className="flex items-center space-x-2 p-2.5 border-b border-gray-100">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blush to-claret"></div>
              <span className="text-xs font-semibold">@ShrutiAndroid</span>
              <span className="ml-auto text-gray-400 text-sm">⋯</span>
            </div>

            {/* Main Image */}
            <div className="w-full h-48 bg-gradient-to-br from-brown-coffee via-claret to-blush overflow-hidden relative">
              <img
                src="/story_main_image.jpeg"
                alt="Shruti"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center"><span class="text-6xl">👩‍💻</span></div>'
                }}
              />
            </div>

            {/* Instagram Actions */}
            <div className="p-2.5">
              <div className="flex items-center space-x-3 text-lg mb-1.5">
                <span className="cursor-pointer hover:text-red-500 transition">❤️</span>
                <span className="cursor-pointer hover:text-blue-500 transition">💬</span>
                <span className="cursor-pointer hover:text-green-500 transition">📩</span>
                <span className="ml-auto cursor-pointer text-base">🔖</span>
              </div>

              {/* Caption */}
              <p className="text-xs text-gray-800 leading-tight">
                <span className="font-bold">@ShrutiAndroid</span> Building dreams with code ✨
              </p>
              <p className="text-[10px] text-gray-400 mt-1">2 HOURS AGO</p>
            </div>
          </motion.div>
        </div>

        {/* Instagram Story Bottom (Moved outside Phone Frame to overlap Contact) */}
        <div className="absolute bottom-[22px] left-[22px] right-[22px] z-[110]">
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-white/80 backdrop-blur-md rounded-full px-3 py-1.5 border border-blush/30">
              <span className="text-blush/80 text-xs">Send message</span>
            </div>
            <button className="text-xl">❤️</button>
            <button className="text-xl">📩</button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero