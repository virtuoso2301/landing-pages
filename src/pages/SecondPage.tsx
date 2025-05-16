import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const featureImages = [
  "/images/WhatsApp Image 2025-05-06 at 2.20.08 PM (5).jpeg",
  "/images/WhatsApp Image 2025-05-06 at 2.20.08 PM (6).jpeg",
  "/images/WhatsApp Image 2025-0.jpeg",
  "/images/WhatsApp Image 2025-05-06.jpeg"
];

const SecondPage = () => {
  const isMobile = useIsMobile();
  const [currentFeatureImage, setCurrentFeatureImage] = useState(0);

  // Auto-advance animation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureImage((prev) => (prev + 1) % featureImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const featureMainDimensions = {
    width: isMobile ? "260px" : "320px",
    height: isMobile ? "480px" : "600px",
    roundedClass: isMobile ? "rounded-[1.5rem]" : "rounded-[3rem]",
    innerRoundedClass: isMobile ? "rounded-[1.3rem]" : "rounded-[2.5rem]"
  };

  const featureSecondaryDimensions = {
    width: isMobile ? "220px" : "280px",
    height: isMobile ? "420px" : "525px",
    roundedClass: isMobile ? "rounded-xl" : "rounded-[2.5rem]",
    innerRoundedClass: isMobile ? "rounded-lg" : "rounded-[2rem]"
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] py-0 sm:py-20"
    >
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl mx-auto"
      >
        <div className="container mx-auto px-2 sm:px-4 mt-0 sm:mt-8 mb-0 sm:mb-8">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-24">
            {/* Previous Image Frame - Hide on small screens */}
            <motion.div
              className="relative flex-col items-center hidden md:flex"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.8, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div
                className={`bg-gradient-to-b from-[#F9F37A]/70 to-[#D2A95E]/70 ${featureSecondaryDimensions.roundedClass} p-[6px] shadow-lg flex flex-col items-center justify-center relative`}
                style={{ width: featureSecondaryDimensions.width, height: featureSecondaryDimensions.height }}
              >
                {/* Mobile Frame Design */}
                <div
                  className={`absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#F9F37A]/70 to-[#D2A95E]/70 rounded-b-xl z-10`}
                  style={{ width: isMobile ? "100px" : "120px", height: isMobile ? "20px" : "25px" }}
                ></div>
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 bg-[#333] rounded-full z-10`}
                  style={{ top: isMobile ? "10px" : "12px", width: isMobile ? "40px" : "50px", height: isMobile ? "5px" : "6px" }}
                ></div>
                <div className={`w-full h-full ${featureSecondaryDimensions.innerRoundedClass} overflow-hidden relative bg-[#1a1a1a]`}>
                  <div className={`absolute inset-0 border-[0.2px] border-[#D2A95E]/20 ${featureSecondaryDimensions.innerRoundedClass}`}></div>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentFeatureImage + "-prev"}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      src={featureImages[(currentFeatureImage - 1 + featureImages.length) % featureImages.length]}
                      alt="Previous Image"
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Current Image Frame (Highlighted) */}
            <motion.div
              className="relative flex flex-col items-center z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeatureImage + "-main"}
                  initial={{ opacity: 0, x: 100, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className={`bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] ${featureMainDimensions.roundedClass} p-2 shadow-2xl flex flex-col items-center justify-center relative`}
                  style={{ width: featureMainDimensions.width, height: featureMainDimensions.height }}
                >
                  {/* Mobile Frame Design */}
                  <div
                    className={`absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] rounded-b-[1.5rem] z-10`}
                    style={{ width: isMobile ? "120px" : "150px", height: isMobile ? "24px" : "30px" }}
                  ></div>
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 bg-[#333] rounded-full z-10`}
                    style={{ top: isMobile ? "12px" : "15px", width: isMobile ? "50px" : "60px", height: isMobile ? "6px" : "8px" }}
                  ></div>
                  <div className={`w-full h-full ${featureMainDimensions.innerRoundedClass} overflow-hidden relative bg-[#1a1a1a]`}>
                    <div className={`absolute inset-0 border-[0.2px] border-[#D2A95E]/30 ${featureMainDimensions.innerRoundedClass}`}></div>
                    <motion.img
                      key={currentFeatureImage + "-main-img"}
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      src={featureImages[currentFeatureImage]}
                      alt="Current Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="flex justify-center items-center gap-2 mt-4">
                {featureImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentFeatureImage(idx)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 transition-all duration-200 ${
                      currentFeatureImage === idx ? "bg-[#D2A95E] border-[#D2A95E]" : "bg-transparent border-[#D2A95E] hover:bg-[#F9F37A]"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Next Image Frame - Hide on small screens */}
            <motion.div
              className="relative flex-col items-center hidden md:flex"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.8, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div
                className={`bg-gradient-to-b from-[#F9F37A]/70 to-[#D2A95E]/70 ${featureSecondaryDimensions.roundedClass} p-[6px] shadow-lg flex flex-col items-center justify-center relative`}
                style={{ width: featureSecondaryDimensions.width, height: featureSecondaryDimensions.height }}
              >
                {/* Mobile Frame Design */}
                <div
                  className={`absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#F9F37A]/70 to-[#D2A95E]/70 rounded-b-xl z-10`}
                  style={{ width: isMobile ? "100px" : "120px", height: isMobile ? "20px" : "25px" }}
                ></div>
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 bg-[#333] rounded-full z-10`}
                  style={{ top: isMobile ? "10px" : "12px", width: isMobile ? "40px" : "50px", height: isMobile ? "5px" : "6px" }}
                ></div>
                <div className={`w-full h-full ${featureSecondaryDimensions.innerRoundedClass} overflow-hidden relative bg-[#1a1a1a]`}>
                  <div className={`absolute inset-0 border-[0.2px] border-[#D2A95E]/20 ${featureSecondaryDimensions.innerRoundedClass}`}></div>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentFeatureImage + "-next"}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      src={featureImages[(currentFeatureImage + 1) % featureImages.length]}
                      alt="Next Image"
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default SecondPage;