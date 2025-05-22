import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const SecondPageSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
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
      className="py-8 md:py-12 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* First Mobile Frame */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-[320px] h-[600px] bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] rounded-[3rem] p-2 shadow-2xl flex flex-col items-center justify-center relative"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[150px] h-[30px] bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] rounded-b-[1.5rem] z-10"></div>
              <div className="absolute top-[15px] left-1/2 transform -translate-x-1/2 w-[60px] h-[8px] bg-[#333] rounded-full z-10"></div>
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative bg-[#1a1a1a]">
                <div className="absolute inset-0 border-[0.2px] border-[#D2A95E]/3 rounded-[2.5rem]"></div>
                <img 
                  src={images[0]}
                  alt="Mobile Frame 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Middle Sliding Frame */}
          <div className="relative flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-[320px] h-[600px] bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] rounded-[3rem] p-2 shadow-2xl flex flex-col items-center justify-center relative"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[150px] h-[30px] bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] rounded-b-[1.5rem] z-10"></div>
                <div className="absolute top-[15px] left-1/2 transform -translate-x-1/2 w-[60px] h-[8px] bg-[#333] rounded-full z-10"></div>
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative bg-[#1a1a1a]">
                  <div className="absolute inset-0 border-[0.2px] border-[#D2A95E]/3 rounded-[2.5rem]"></div>
                  <img 
                    src={images[currentImage]}
                    alt="Sliding Images"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center items-center gap-2 mt-4">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ${currentImage === idx ? 'bg-[#D2A95E] border-[#D2A95E]' : 'bg-transparent border-[#D2A95E] hover:bg-[#F9F37A]'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Third Mobile Frame */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-[320px] h-[600px] bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] rounded-[3rem] p-2 shadow-2xl flex flex-col items-center justify-center relative"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[150px] h-[30px] bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] rounded-b-[1.5rem] z-10"></div>
              <div className="absolute top-[15px] left-1/2 transform -translate-x-1/2 w-[60px] h-[8px] bg-[#333] rounded-full z-10"></div>
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative bg-[#1a1a1a]">
                <div className="absolute inset-0 border-[0.2px] border-[#D2A95E]/3 rounded-[2.5rem]"></div>
                <img 
                  src={images[2]}
                  alt="Mobile Frame 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SecondPageSection;