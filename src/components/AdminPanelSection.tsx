"use client";
import React from "react";
import { motion } from "framer-motion";

const adminFeatures = [
  {
    icon: "📦",
    title: "Inventory Management",
    desc: "Track stock, automate low-stock alerts."
  },
  {
    icon: "🛒",
    title: "Order Processing",
    desc: "Efficiently handle orders, returns, refunds."
  },
  {
    icon: "📈",
    title: "Sales Analytics",
    desc: "Visualize sales trends, customer insights."
  },
  {
    icon: "👥",
    title: "User Management",
    desc: "Control roles, customer support."
  },
  {
    icon: "⚙️",
    title: "Settings & Customization",
    desc: "Configure payment,site preferences."
  }
];

export default function AdminPanelSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gradient-to-br from-gray-50 to-gray-100 relative"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold text-indigo-600 mb-8 mt-16 text-center"
        >
          Powerful Tools for Store Owners
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Admin image on the left */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 w-full flex-shrink-0"
          >
            <div className="relative w-full flex items-center justify-center p-0 mt-32">
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <img
                  src="\images\admin_panel.png"
                  alt="Admin Panel Illustration"
                  width={2000} height={2000}
                  className="w-full object-contain border border-gray-300 rounded-xl shadow-lg"
                  style={{ zIndex: 1 }}
                />
              </motion.div>
            </div>
          </motion.div>

          <div className="lg:w-1/2 w-full py-8 sm:py-12 md:py-16 px-4">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
              }}
              className="flex flex-col gap-4 sm:gap-6 md:gap-8 overflow-y-auto max-h-[calc(100vh-16rem)] sm:max-h-[calc(100vh-20rem)] pr-0 sm:pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400"
            >
              {adminFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white backdrop-blur-sm rounded-xl shadow-lg p-4 sm:p-6 md:p-8 flex items-start gap-4 sm:gap-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300"
                >
                  <motion.span 
                    className="text-3xl sm:text-4xl md:text-5xl select-none" 
                    aria-hidden
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {feature.icon}
                  </motion.span>
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-1 sm:mb-2 font-montserrat">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 font-inter">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}