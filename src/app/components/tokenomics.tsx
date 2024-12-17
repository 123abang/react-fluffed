'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const tokenomicsData = {
  labels: ['Team', 'Marketing', 'Development', 'Community', 'Liquidity'],
  datasets: [
    {
      data: [10, 20, 30, 25, 15],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
      ],
    },
  ],
}

export function Tokenomics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="tokenomics" ref={ref} className="py-20 bg-blue-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Tokenomics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Doughnut data={tokenomicsData} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Token Distribution</h3>
            <ul className="space-y-2">
              <li style={{color:'white'}}>Team: 10%</li>
              <li>Marketing: 20%</li>
              <li>Development: 30%</li>
              <li>Community: 25%</li>
              <li>Liquidity: 15%</li>
            </ul>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Contract Address</h3>
              <p className="break-all bg-purple-800/50 p-4 rounded-lg">
                0x1234567890123456789012345678901234567890
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

