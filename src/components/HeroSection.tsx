"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Monitor, Smartphone } from "lucide-react";

export default function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-20 px-4 flex flex-col items-center text-center min-h-[80vh] md:min-h-[90vh]"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Text Content */}
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-600 font-montserrat mb-4 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            An E-commerce Website That Sells
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.3, 
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-inter mb-8 max-w-3xl mx-auto px-4"
          >
            With great aesthetics, intuitive UX/UI, and SEO-friendly layouts
          </motion.p>
        </motion.div>

        {/* Features List */}
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { 
                staggerChildren: 0.15,
                delayChildren: 0.4
              } 
            },
          }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full px-2"
        >
          {[
            "Conversion-Driven Layouts",
            "Mobile-Responsive & Fast",
            "Modern Color Palette",
            "SEO Optimized",
          ].map((item, index) => (
            <motion.li
              key={item}
              variants={{ 
                hidden: { 
                  opacity: 0, 
                  y: 20,
                  scale: 0.8 
                }, 
                visible: { 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }
                } 
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(79, 70, 229, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white backdrop-blur-sm rounded-lg px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base text-gray-700 font-semibold shadow-md border border-gray-200 hover:border-indigo-200"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        {/* Device Mockups */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            transition: {
              delay: 0.6,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }
          }}
          className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center justify-center mt-4 w-full max-w-4xl"
        >
          {/* Mobile */}
          <motion.div 
            className="relative w-40 h-72 sm:w-48 sm:h-80 md:w-56 md:h-96"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Smartphone 
                size={60} 
                className="absolute left-1/2 -translate-x-1/2 top-0 text-indigo-600 w-16 h-16 sm:w-20 sm:h-20" 
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Image 
                src="/images/Homepagemobileview.png" 
                alt="Mobile View" 
                fill 
                className="object-contain rounded-xl shadow-lg bg-white/80 backdrop-blur-sm border border-gray-200" 
                sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 224px"
              />
            </motion.div>
          </motion.div>
          
          {/* Desktop */}
          <motion.div 
            className="relative w-80 h-56 sm:w-96 sm:h-64 md:w-[28rem] md:h-72"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 }}
            >
              <Monitor 
                size={80} 
                className="absolute left-1/2 -translate-x-1/2 top-0 text-indigo-600 w-20 h-20 sm:w-24 sm:h-24" 
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <Image 
                src="/images/Screenshot 2025-05-21 163337.png" 
                alt="Desktop View" 
                fill 
                quality={85}
                priority
                className="object-cover rounded-xl shadow-lg bg-white/80 backdrop-blur-sm border border-gray-200" 
                sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, 448px"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}