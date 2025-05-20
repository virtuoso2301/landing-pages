'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaShieldAlt, FaUserClock, FaStore, FaLock, FaHospital, FaCalendarCheck } from 'react-icons/fa'

const industries = [
  {
    icon: <FaShieldAlt className="w-8 h-8 text-blue-500" />,
    name: "Security & Surveillance",
    points: [
      "Real-time monitoring for unauthorized access.",
      "Smart city surveillance in public or restricted areas."
    ]
  },
  {
    icon: <FaUserClock className="w-8 h-8 text-blue-500" />,
    name: "Smart Attendance Systems",
    points: [
      "Automatically marks attendance when individuals are recognized.",
      "Useful for schools, universities, and corporate offices."
    ]
  },
  {
    icon: <FaStore className="w-8 h-8 text-blue-500" />,
    name: "Retail Analytics",
    points: [
      "Identifies repeat customers for personalized services.",
      "Tracks customer movement patterns using body measurements."
    ]
  },
  {
    icon: <FaLock className="w-8 h-8 text-blue-500" />,
    name: "Access Control Systems",
    points: [
      "Grants or denies access based on recognized individuals.",
      "Integrates with door lock systems for smart building entry."
    ]
  },
  {
    icon: <FaHospital className="w-8 h-8 text-blue-500" />,
    name: "Healthcare Monitoring",
    points: [
      "Helps track and monitor patients, especially those with memory disorders.",
      "Used in elderly care or critical patient monitoring."
    ]
  },
  {
    icon: <FaCalendarCheck className="w-8 h-8 text-blue-500" />,
    name: "Event Management",
    points: [
      "Streamlines guest check-in by recognizing registered participants.",
      "Enhances event security by flagging unknown faces."
    ]
  }
]

export default function Industries() {
  return (
    <section id="industries" className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-blue-950 overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 4
        }}
        className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Industry We Use
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Explore how our facial recognition technology transforms various sectors
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-b from-gray-900/50 to-blue-950/50 backdrop-blur-sm p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500"
              style={{
                clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)",
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 15 
                }
              }}
            >
              {/* Glowing border effect on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
                  filter: 'blur(10px)',
                }}
              />

              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  className="p-3 bg-blue-900/30 rounded-lg group-hover:bg-blue-800/40 transition-all duration-300" 
                  style={{
                    clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)'
                  }}
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1,
                    transition: { duration: 0.5 }
                  }}
                >
                  {industry.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {industry.name}
                </motion.h3>
              </div>
              <ul className="space-y-3 relative z-10">
                {industry.points.map((point, pointIndex) => (
                  <motion.li 
                    key={pointIndex} 
                    className="flex items-start gap-2 text-gray-300 group-hover:text-gray-200 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + pointIndex * 0.1 }}
                  >
                    <motion.span 
                      className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0 group-hover:bg-purple-400 transition-all duration-300"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="group-hover:text-white transition-colors duration-300">{point}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Hover effect overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}