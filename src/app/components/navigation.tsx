'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from '../../images/bg.jpg'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 z-50 w-full backdrop-blur-md"
      style={{ backgroundColor: 'rgba(70, 130, 180, 0.8)' }} // Light blue with transparency
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            {/* Add your logo image here */}
            <img
              src={Logo} // Replace with the actual path to your logo
              alt="MemeCoin Logo"
              className="h-8 w-8"
              style={{ width: '100px', height: '100px', borderRadius: '30px' }}
            />
            <a href="#" className="text-2xl font-bold text-white">Fluffer</a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex space-x-8"
            >
              {['Home', 'How to Buy', 'Roadmap', 'Partners', 'Tokenomics', 'Community'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white hover:text-blue-200 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {['Home', 'How to Buy', 'Roadmap', 'Partners', 'Tokenomics', 'Community'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-blue-200 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  )
}
