import { motion } from 'framer-motion'

const Hero = () => {
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
    <div className="w-full min-h-screen flex items-center justify-center overflow-visible p-4 relative bg-[#FFF8F0] pb-40">
      {/* "Yep! That's Me" Text */}
      <motion.div
        className="absolute top-10 left-10 z-0 pointer-events-none"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <h1 className="text-[7rem] leading-none text-claret" style={{ fontFamily: '"Pinyon Script", cursive' }}>
          Yep!
        </h1>
        <h2 className="text-5xl italic font-semibold text-claret mt-2 ml-4" style={{ fontFamily: '"Playfair Display", serif' }}>
          That's Me.
        </h2>
      </motion.div>

      {/* Retro Notepad Window */}
      <motion.div
        className="absolute top-64 left-12 w-64 bg-white border-8 border-pink-300 rounded-[4px] shadow-xl overflow-hidden z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -6, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 1.2 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
        }}
      >
        {/* Title Bar */}
        <div className="bg-gradient-to-r from-pink-200 to-pink-100 px-2 py-1 flex items-center justify-between border-b border-pink-300">
          <div className="flex items-center gap-2">
            <span className="text-lg">📄</span>
            <span className="text-xs font-medium text-pink-900/80 font-sans">Untitled - Notepad</span>
          </div>
          <div className="flex gap-1">
            <div className="w-4 h-4 border border-pink-400/50 bg-white/50 rounded-[2px] flex items-center justify-center hover:bg-white transition-colors cursor-default">
              <div className="w-2 h-[1px] bg-pink-800/50"></div>
            </div>
            <div className="w-4 h-4 border border-pink-400/50 bg-white/50 rounded-[2px] flex items-center justify-center hover:bg-white transition-colors cursor-default">
              <div className="w-2 h-2 border border-pink-800/50"></div>
            </div>
            <div className="w-4 h-4 border border-pink-400/50 bg-red-300/50 rounded-[2px] flex items-center justify-center hover:bg-red-300 transition-colors cursor-default">
              <span className="text-[10px] leading-none text-red-900/70 font-sans">x</span>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="h-52 w-full relative bg-white">
          <img src="/window_image.jpeg" alt="Window Content" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      {/* Text Overlay */}
      <motion.div
        className="absolute top-[29rem] left-4 z-20 pointer-events-none"
        initial={{ opacity: 0, rotate: -5 }}
        animate={{ opacity: 1, rotate: -2 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="h-16 w-50 text-center bg-white px-3 py-3 rounded-xl shadow-md">
          <p
            className="text-xs leading-relaxed text-[#1a237e] font-serif italic drop-shadow-sm"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            this is who you're dealing with<br />
            <span className="text-xs">(sorry not sorry)</span>
          </p>
        </div>
      </motion.div>

      {/* Folder Icons Row */}
      <motion.div
        className="absolute top-[34rem] left-6 z-20 flex gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        {[
          { label: "Android development" },
          { label: "Backend Development" },
          { label: "Deployment" }
        ].map((folder, index) => (
          <div key={index} className="flex flex-col items-center gap-1 group cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-16 h-12 relative"
            >
              <img src="/pink_folder_icon_colored_bg.png" alt="Folder" className="w-full h-full object-contain drop-shadow-sm rounded-xl" />
            </motion.div>
            <span className="text-[10px] font-medium text-gray-600 font-sans tracking-tight text-center max-w-[80px] leading-tight">
              {folder.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* IDE Window (Right Side) */}
      <motion.div
        className="absolute top-6 -right-8 h-[600px] w-[400px] bg-white border-8 border-pink-300 overflow-hidden z-10 rounded-xl"
        style={{
          boxShadow: '-15px 0 30px -10px rgba(0, 0, 0, 0.15), 0 20px 40px -12px rgba(0, 0, 0, 0.25)'
        }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img src="/ide_window.png" alt="IDE Screenshot" className="w-full h-full object-cover object-left" />
      </motion.div>

      {/* Ribbon Image (Left Side) */}
      <motion.div
        className="absolute top-[34%] left-[32%]  w-40 z-40 pointer-events-none"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <img src="/ribbon_image.png" alt="Decorative Ribbon" className="w-full h-auto drop-shadow-xl" />
      </motion.div>
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
              onClick={() => {
                const element = document.getElementById(section.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <div className="relative w-[150px] h-[150px]">
                {/* Image - Full Coverage */}
                <div
                  id={section.imageId}
                  className={`w-full h-full rounded-xl bg-gradient-to-br ${section.gradient} overflow-hidden relative shadow-2xl`}
                >
                  {/* Pattern overlay */}

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
            boxShadow: '15px 0 30px -10px rgba(0, 0, 0, 0.15), 0 25px 50px -12px rgba(0, 0, 0, 0.4), inset 0 2px 4px rgba(255,255,255,0.1)'
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