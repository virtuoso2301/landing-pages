import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/images/WhatsApp Image 2025-05-06.jpeg",
    "/images/WhatsApp Image 2025-05-06 at 2.20.08 PM (5).jpeg",
    "/images/WhatsApp Image 2025-05-06 at 2.20.08 PM (6).jpeg",
    "/images/WhatsApp Image 2025-05-06 at 2.20.08 PM (7).jpeg"
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-8 md:py-12 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a]"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight whitespace-nowrap"
          >
            All Your Services, <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3,
                type: "spring",
                stiffness: 200,
                damping: 10
              }}
              className="bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] bg-clip-text text-transparent"
            >One Tap Away</motion.span>
          </motion.h1>
          <p className="text-lg text-gray-400 mb-8">
            Book trusted home cleaners in just a few taps! Whether it's a quick refresh or a deep clean, our professionals are background-checked and ready to deliver. Get instant pricing, real-time tracking, and flexible scheduling — all with a satisfaction guarantee. A cleaner, more comfortable home is just one tap away!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 8px 30px #D2A95E44" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="gap-3 bg-gradient-to-r from-[#2885E5] via-[#1A6BCB] to-[#2885E5] text-black border-none hover:opacity-90 px-6 py-3 rounded-xl font-semibold text-lg flex items-center justify-center"
            >
              <span className="flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Call Us for Services
              </span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative flex flex-col items-center">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.5
              }}
              className="w-[320px] h-[600px] bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] rounded-[3rem] p-2 shadow-2xl flex flex-col items-center justify-center relative"
            >
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative bg-[#1a1a1a]">
                <motion.img 
                  src={images[currentImage]}
                  alt="Sliding Images"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;