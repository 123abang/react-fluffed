'use client'

import { motion } from 'framer-motion'
import FlufferImage from '../../images/fluffer.jpg'

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundColor: 'rgba(70, 130, 180, 0.8)', // Light blue with some transparency
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          welcome to fluffer land to the Moon!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          Join the most hilarious crypto revolution in the galaxy!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative w-64 h-64 mx-auto mb-8"
        >
          <img
            src={FlufferImage} // Use the imported image URL
            alt="Meme Coin Mascot"
            className="w-full h-full object-contain rounded-full"
          />
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
        >
          Buy Fluffer Now!
        </motion.button>
      </div>
    </section>
  )
}
