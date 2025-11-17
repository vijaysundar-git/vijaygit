import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12" id="contact">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
          >
            <h3 className="text-2xl font-bold text-white mb-6">SJR Tech Services Limited</h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-lg">
              Transforming UK businesses with AI automation solutions that drive growth and efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/www.alumind.co.uk/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.2}}
          >
            <h4 className="text-xl font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-lg">AI Automation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-lg">Generative AI</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-lg">Agentic AI Systems</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-lg">Consulting</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.4}}
          >
            <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400 text-lg">
              <p>📧 vijay.sundaresan@sjrtchsrv.tech</p>
              <p>📞 +44 7405 146240</p>
              <p>📍 London, United Kingdom</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.6}}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 SJR Tech Services Limited. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer