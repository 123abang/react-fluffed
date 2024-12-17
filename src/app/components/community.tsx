'use client'

import { useState } from 'react'
// import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const communityMembers = [
  { name: 'Member 1', role: 'Founder', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Member 2', role: 'Developer', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Member 3', role: 'Marketing', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Member 4', role: 'Community Manager', image: '/placeholder.svg?height=200&width=200' },
]

export function Community() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === communityMembers.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? communityMembers.length - 1 : prevIndex - 1
    )
  }

  return (
    <section id="community" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Meet the Community</h2>
        <div className="relative w-full max-w-md mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-purple-800/50 rounded-lg p-6 text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                {/* <Image
                  src={communityMembers[currentIndex].image}
                  alt={communityMembers[currentIndex].name}
                  layout="fill"
                  objectFit="cover"
                /> */}
              </div>
              <h3 className="text-xl font-semibold mb-2">{communityMembers[currentIndex].name}</h3>
              <p className="text-purple-300">{communityMembers[currentIndex].role}</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-purple-500 p-2 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-purple-500 p-2 rounded-full"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

