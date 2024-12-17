'use client';

import { motion } from 'framer-motion';
import { Wallet, ArrowRight, DollarSign, Rocket } from 'lucide-react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const steps = [
  { icon: Wallet, title: 'Create a Wallet', description: 'Download and set up a compatible crypto wallet.' },
  { icon: DollarSign, title: 'Add Funds', description: 'Add some ETH to your wallet for gas fees and to swap.' },
  { icon: ArrowRight, title: 'Swap for MemeCoins', description: 'Use a DEX like Uniswap to swap ETH for MemeCoins.' },
  { icon: Rocket, title: 'HODL to the Moon', description: 'Hold onto your MemeCoins and watch them soar!' },
];

const pieChartData = {
  labels: [
    'DEX Liquidity Pool - 45%',
    'CEX Liquidity - 20%',
    'Team Allocation - 7%',
    'Community (Airdrops/Contests) - 7%',
    'Marketing - 7%',
    'Treasury Wallet - 7%',
    'Charity - 7%',
  ],
  datasets: [
    {
      data: [45, 20, 7, 7, 7, 7, 7],
      backgroundColor: [
        '#ff6384',
        '#36a2eb',
        '#ffcd56',
        '#ff9f40',
        '#4bc0c0',
        '#9966ff',
        '#c9cbcf',
      ],
      borderColor: '#fff',
      borderWidth: 2,
    },
  ],
};

export function HowToBuy() {
  return (
    <section id="how-to-buy" className="py-20 bg-purple-900/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          How to Buy MemeCoins
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-purple-800/50 rounded-lg p-6 flex flex-col items-center text-center"
            >
              <step.icon size={48} className="mb-4 text-purple-300" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-purple-200">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Pie Chart Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold mb-6">Token Allocation for fluffer </h3>
          <div className="w-full max-w-md mx-auto">
            <Pie data={pieChartData} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
