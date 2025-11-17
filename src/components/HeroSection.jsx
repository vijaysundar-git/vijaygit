import {useState} from 'react'
import {motion} from 'framer-motion'
import ContactModal from './ContactModal'

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleBookCall = () => {
    setIsModalOpen(true)
  }

  const handleExploreServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      const headerHeight = 100; // Account for fixed header
      const elementPosition = servicesSection.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-25 via-white to-gray-25 pt-28 pb-12 px-4">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-25 via-white to-gray-25"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.04) 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, rgba(251, 191, 36, 0.04) 0%, transparent 50%)`
      }}></div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto text-center px-4">
          <motion.h1
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.2, ease: "easeOut"}}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Transform your business with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-500">
              AI and automation
            </span>
          </motion.h1>
          
          <motion.p
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.4, ease: "easeOut"}}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Streamline operations, eliminate repetitive tasks, and reduce errors with AI & Automation solutions tailored for UK businesses.
          </motion.p>
          
          <motion.div
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.6, ease: "easeOut"}}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button
              onClick={handleExploreServices}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Our Services
            </button>
            <button
              onClick={handleBookCall}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Book a Call
            </button>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        animate={{y: [0, -20, 0]}}
        transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
      
      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default HeroSection