'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const roadmapItems = [
  { phase: 'Phase 1', title: 'Launch', description: 'Token launch and initial marketing push' },
  { phase: 'Phase 2', title: 'Growth', description: 'Community expansion and partnerships' },
  { phase: 'Phase 3', title: 'Development', description: 'Platform development and use case implementation' },
  { phase: 'Phase 4', title: 'Expansion', description: 'Global marketing and exchange listings' },
];

export function Roadmap() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div>
      {/* Roadmap Section */}
      <section id="roadmap" ref={ref} className="py-20 bg-indigo-900/50"
      style={{ backgroundColor: 'rgba(70, 130, 180, 0.8)' }} // Light blue with transparency
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Roadmap</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-500 hidden md:block" />
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col items-center mb-8 md:flex-row ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                <div
                  className={`bg-purple-800/50 rounded-lg p-6 shadow-lg max-w-md w-full md:w-auto ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {item.phase}: {item.title}
                  </h3>
                  <p>{item.description}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full md:static md:translate-x-0" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How to Buy Section */}
      

      {/* Token Address Section */}
      <section id="token-address" className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Token Address</h2>
          <div className="bg-purple-800/50 p-6 rounded-lg inline-block">
            <p className="mb-4">Copy the address below to add the Fluffer token to your wallet:</p>
            <div className="flex items-center justify-center space-x-4">
              <input
                type="text"
                readOnly
                value="AKYkEmhcoGdgc7kEqTBzr8UjXc5Y6uPXnW7EKjaxAHim"
                className="bg-transparent border-b-2 border-purple-500 text-lg font-medium text-center text-white focus:outline-none"
              />
              <button
                onClick={() => navigator.clipboard.writeText("AKYkEmhcoGdgc7kEqTBzr8UjXc5Y6uPXnW7EKjaxAHim")}
                className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition duration-300"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
