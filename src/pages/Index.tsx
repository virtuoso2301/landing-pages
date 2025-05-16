import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import TechnologyPage from "./TechnologyPage";
import FeaturesPage from "./FeaturesPage";
import SecondPage from "./SecondPage";

const Index = () => {
  const isMobile = useIsMobile();
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/WhatsApp Image 2025-05-06.jpeg",
    "/images/WhatsApp Image 2025-05-06 at 2.20.08 PM (5).jpeg",
    "/images/WhatsApp Image 2025-05-06 at 2.20.08 PM (6).jpeg",
    "/images/WhatsApp Image 2025-05-06 at 2.20.08 PM (7).jpeg"
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-8 md:py-12 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a]"
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
              All Your Services,{" "}
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
                className="bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] bg-clip-text text-transparent"
              >
                One Tap Away
              </motion.span>
            </motion.h1>
            <p className="text-base sm:text-lg text-gray-400 mb-8">
              Book trusted home cleaners in just a few taps! Whether it's a quick refresh or a deep clean, our professionals are background-checked and ready to deliver. Get instant pricing, real-time tracking, and flexible scheduling — all with a satisfaction guarantee. A cleaner, more comfortable home is just one tap away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 8px 30px #D2A95E44" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="gap-3 bg-gradient-to-r from-[#F9F37A] via-[#D2A95E] to-[#F9F37A] text-black border-none hover:opacity-90 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center"
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
                  Call Us for Services
                </span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>
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
                  className="w-[280px] h-[520px] bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] rounded-[2rem] p-2 shadow-2xl flex flex-col items-center justify-center relative"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[24px] bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] rounded-b-[1.5rem] z-10"></div>
                  <div className="absolute top-[12px] left-1/2 transform -translate-x-1/2 w-[50px] h-[6px] bg-[#333] rounded-full z-10"></div>
                  <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative bg-[#1a1a1a]">
                    <div className="absolute inset-0 border-[0.2px] border-[#D2A95E]/30 rounded-[1.8rem]"></div>
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
                        ? "bg-[#D2A95E] border-[#D2A95E]"
                        : "bg-transparent border-[#D2A95E] hover:bg-[#F9F37A]"
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
      <div className="w-full bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]">
        <SecondPage />
      </div>

      {/* Features Page Section */}
      <div className="w-full bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]">
        <FeaturesPage />
      </div>

      {/* Technology Section */}
      <div className="w-full bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]">
        <TechnologyPage />
      </div>
    </div>
  );
};

export default Index;
