'use client'

import { motion } from 'framer-motion'

interface FlyingTextProps {
  text: string
  direction: 'left' | 'right'
}

export function FlyingText({ text, direction }: FlyingTextProps) {
  const variants = {
    hidden: { opacity: 0, x: direction === 'left' ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <div className="py-8">
      <motion.h3
        className="text-2xl font-bold text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.h3>
    </div>
  )
}

