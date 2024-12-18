'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import Verified from '../../images/Verified-Seal-.png'
import Unknown from '../../images/Unknown.jpeg'
import Unknowns from '../../images/Unknown.png'
import Dex from '../../images/dex.jpeg'
import Det from '../../images/det.png'
import Coin from '../../images/coin.png'

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

  const partners = [
    { img: Unknown, name: 'Partner 1' },
    { img: Verified, name: 'Partner 2' },
    { img: Unknowns, name: 'Partner 3' },
    { img: Dex, name: 'Partner 4' },
    { img: Det, name: 'Partner 5' },
    { img: Coin, name: 'Partner 6' },
  ]

  return (
    <section
      id="partners"
      className="py-20 overflow-hidden"
      style={{ backgroundColor: 'rgba(70, 130, 180, 0.8)' }} // Light blue with transparency
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Partners</h2>
        <motion.div
          className="flex"
          animate={controls}
          style={{ width: `${partners.length * 200 * 2}px` }} // Adjust width dynamically for duplicates
        >
          {/* Render the partners twice for an infinite loop effect */}
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="flex-shrink-0 w-48 mx-4">
              <div className="relative w-24 h-24 mb-4 mx-auto">
                <img
                  src={partner.img}
                  alt={`${partner.name} logo`}
                />
              </div>
              <p className="text-center">{partner.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
