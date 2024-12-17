'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
// import Image from 'next/image'

const partners = [
  { name: 'Partner 1', logo: '/placeholder.svg?height=100&width=100' },
  { name: 'Partner 2', logo: '/placeholder.svg?height=100&width=100' },
  { name: 'Partner 3', logo: '/placeholder.svg?height=100&width=100' },
  { name: 'Partner 4', logo: '/placeholder.svg?height=100&width=100' },
  { name: 'Partner 5', logo: '/placeholder.svg?height=100&width=100' },
  { name: 'Partner 6', logo: '/placeholder.svg?height=100&width=100' },
]

export function Partners() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      x: ['-100%', '0%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        },
      },
    })
  }, [controls])

  return (
    <section id="partners" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Partners</h2>
        <motion.div
          className="flex"
          animate={controls}
          style={{ width: `${partners.length * 200}px` }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="flex-shrink-0 w-48 mx-4">
              <div className="relative w-24 h-24 mb-4 mx-auto">
                {/* <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  layout="fill"
                  objectFit="contain"
                /> */}
              </div>
              <p className="text-center">{partner.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

