import {motion} from 'framer-motion'

const ServiceModal = ({isOpen, onClose, service}) => {
  if (!isOpen || !service) return null

  const serviceDetails = {
    "AI Automation": {
      description: "Transform your business with intelligent automation that works around the clock.",
      features: [
        "Customer service chatbots that handle 80% of inquiries",
        "Automated invoice processing and financial workflows",
        "Smart inventory management with predictive ordering",
        "Email marketing automation with personalized content",
        "Social media scheduling and response automation",
        "CRM data entry and lead qualification automation"
      ],
      benefits: [
        "Reduce operational costs by up to 40%",
        "Eliminate human errors in repetitive tasks",
        "24/7 availability for customer interactions",
        "Free up staff for high-value strategic work",
        "Improve response times and customer satisfaction"
      ],
      timeline: "2-4 weeks implementation"
    },
    "Generative AI": {
      description: "Harness the power of AI to create content, generate insights, and produce innovative solutions.",
      features: [
        "Automated content creation for blogs and social media",
        "Personalized product descriptions at scale",
        "Dynamic report generation with data insights",
        "Custom image and video content creation",
        "Automated email sequences tailored to customer behavior",
        "AI-powered market research and competitor analysis"
      ],
      benefits: [
        "Create content 10x faster than traditional methods",
        "Maintain consistent brand voice across all platforms",
        "Generate personalized content for each customer",
        "Reduce content creation costs by up to 70%",
        "Unlock creative possibilities with AI assistance"
      ],
      timeline: "3-6 weeks implementation"
    },
    "Agentic AI Systems": {
      description: "Deploy autonomous AI agents that make decisions, interact with customers, and manage complex workflows independently.",
      features: [
        "AI sales agents that qualify leads and book appointments",
        "Autonomous customer support with escalation protocols",
        "Smart project management with resource allocation",
        "AI-driven quality control and compliance monitoring",
        "Intelligent data analysis with actionable recommendations",
        "Automated decision-making for routine business processes"
      ],
      benefits: [
        "Scale your business without proportional staff increases",
        "Make data-driven decisions 24/7",
        "Reduce management overhead significantly",
        "Improve process consistency and reliability",
        "Enable rapid business scaling and expansion"
      ],
      timeline: "4-8 weeks implementation"
    }
  }

  const details = serviceDetails[service.title] || {}

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      
      {/* Modal */}
      <motion.div
        initial={{opacity: 0, scale: 0.95}}
        animate={{opacity: 1, scale: 1}}
        exit={{opacity: 0, scale: 0.95}}
        className="bg-white rounded-2xl p-8 max-w-4xl w-full relative z-10 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <div className="text-primary-600">
              {service.icon}
            </div>
            <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {details.description}
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h4>
            <ul className="space-y-2 mb-6">
              {details.features?.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Business Benefits:</h4>
            <ul className="space-y-2 mb-6">
              {details.benefits?.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-4 pt-6 mt-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-300 font-semibold"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default ServiceModal