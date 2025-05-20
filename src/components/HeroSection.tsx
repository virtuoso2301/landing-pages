'use client'

import { motion } from 'framer-motion'
// import AnimatedText from './AnimatedText'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="hero-section" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://wphelp.blog/wp-content/uploads/2020/07/face-recog-header.gif"
          alt="Hero Background Animation"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          unoptimized
          priority
          
        />
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-1"></div>
      </div>
      {/* npx shadcn@latest add "https://21st.dev/r/shadcn/button" */}
      
      <div className="container mx-auto px-6 relative z-10"> {/* Ensure content is above overlay */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="px-4 py-2 bg-blue-900/50 text-blue-300 rounded-full text-sm font-medium">
              AI-Powered Technology
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Next-Gen Face Recognition
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10"
          >
            Reliable, precise, and ultra-fast facial recognition built for modern enterprises and developers
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4"
          >
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
              Get Started
            </button>
            <a href="#try-it-yourself" className="px-8 py-4 bg-transparent border border-blue-400 hover:bg-blue-900/30 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 inline-block">
              Live Demo
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
