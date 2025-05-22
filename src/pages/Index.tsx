import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
// import TechnologyPage from "./TechnologyPage";
import FeaturesPage from "./FeaturesPage";
import SecondPage from "./SecondPage";

const Index = () => {
  const isMobile = useIsMobile();
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/iphone.png",
    "/images/iPhone13.png",
    "/images/iphone3.jpg",
    "/images/iphone4.jpg",
    
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-8 md:py-12 bg-[#0F172A]"
      >
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          {/* Hero Content */}
          <div className="order-2 md:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
            >
              Born 2 Dance,{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
                className="bg-gradient-to-b from-[#e] to-[#8b2a8b] bg-clip-text text-transparent"
              >
                One Tap Away
              </motion.span>
            </motion.h1>
            <p className="text-base sm:text-lg text-gray-400 mb-8">
            Born to Dance is your ultimate companion for tracking routines, celebrating progress, and staying in sync with your passion. Whether you're in the studio or on stage, let every move speak your story.
              {/* Book trusted home cleaners in just a few taps! Whether it's a quick refresh or a deep clean, our professionals are background-checked and ready to deliver. Get instant pricing, real-time tracking, and flexible scheduling — all with a satisfaction guarantee. A cleaner, more comfortable home is just one tap away! */}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 30px #D2A95E44" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="gap-3 bg-gradient-to-r from-[#2885E5] via-[#1a5c9e] to-[#2885E5] text-white border-none hover:opacity-90 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Call us now
                  </span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.button>
                <motion.a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center justify-center gap-2 bg-[#2885E5] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-base sm:text-lg hover:opacity-90"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Get it on Play Store
                </motion.a>
                <motion.a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center justify-center gap-2 bg-[#2885E5] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-base sm:text-lg hover:opacity-90"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  Download on App Store
                </motion.a>
              </div>
          </div>
          {/* Hero Image */}
          <div className="flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative flex flex-col items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="w-[280px] h-[520px] bg-gradient-to-b from-[#000000] to-[#000000] rounded-[2rem] p-2 shadow-2xl flex flex-col items-center justify-center relative"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[24px] bg-gradient-to-b from-[#000000] to-[#000000] rounded-b-[1.5rem] z-10"></div>
                  <div className="absolute top-[12px] left-1/2 transform -translate-x-1/2 w-[50px] h-[6px] bg-[#333] rounded-full z-10"></div>
                  <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative bg-[#1a1a1a]">
                    <div className="absolute inset-0 border-[0.2px] border-[#8b2a8b]/30 rounded-[1.8rem]"></div>
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
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 transition-all duration-200 ${
                      currentImage === idx
                        ? "bg-[#8b2a8b] border-[#8b2a8b]"
                        : "bg-transparent border-[#8b2a8b] hover:bg-[#e63366]"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Second Page Section */}
      <div className="w-full bg-[#0F172A]">
        <SecondPage />
      </div>

      {/* Features Page Section */}
      <div className="w-full bg-[#0F172A]">
        <FeaturesPage />
      </div>

      {/* Technology Section */}
      <div className="w-full bg-[#0F172A]">
        {/* <TechnologyPage /> */}
      </div>
    </div>
  );
};

export default Index;
