'use client'

import { motion } from 'framer-motion'
import { Twitter, TextIcon as Telegram, DiscIcon as Discord } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-purple-900 py-12" 
    style={{ backgroundColor: 'rgba(70, 130, 180, 0.8)' }} // Light blue with transparency
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold">MemeCoins</h3>
            <p className="mt-2 text-purple-300">To the moon and beyond!</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            <a href="#" className="text-white hover:text-purple-300 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-purple-300 transition-colors">
              <Telegram size={24} />
            </a>
            <a href="#" className="text-white hover:text-purple-300 transition-colors">
              <Discord size={24} />
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center text-sm text-purple-300"
        >
          &copy; {new Date().getFullYear()} MemeCoins. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}

