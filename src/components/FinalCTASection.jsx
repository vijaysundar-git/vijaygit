import {useState} from 'react'
import {motion} from 'framer-motion'
import ContactModal from './ContactModal'

const FinalCTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleBookCall = () => {
    setIsModalOpen(true)
  }

  return (
        <section className="py-24 bg-gradient-to-r from-blue-500 to-blue-600 text-white relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8}}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Ready to transform your business?
          </motion.h2>
          
          <motion.p
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8, delay: 0.2}}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Join UK businesses that have already transformed their operations with{' '}
            <span className="text-blue-600 font-semibold">SJR Tech Services Limited</span>. 
            Start saving time and reducing costs today.
          </motion.p>

          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8, delay: 0.4}}
            className="flex justify-center"
          >
            <button
              onClick={handleBookCall}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </button>
          </motion.div>

          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.8, delay: 0.6}}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-300"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Free 30-min consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Custom strategy included</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default FinalCTASection