import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

const featureImages = [
  "/images/WhatsApp Image 2025-05-06 at 2.20.08 PM (5).jpeg",
  "/images/WhatsApp Image 2025-05-06 at 2.20.08 PM (6).jpeg",
  "/images/WhatsApp Image 2025-05-06 at 2.20.08 PM (7).jpeg",
  "/images/Checkout-Payment (1).jpg"
];

const FeaturesPage = () => {
  const isMobile = useIsMobile();
  const featureCardDimensions = {
    width: isMobile ? "400px" : "280px",      // Increased width for mobile
    height: isMobile ? "650px" : "480px",     // Increased height for mobile
    roundedClass: isMobile ? "rounded-2xl" : "rounded-2xl",
    innerRoundedClass: isMobile ? "rounded-2xl" : "rounded-xl"
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]">
      <motion.section
        id="features"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl mx-auto py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] bg-clip-text text-transparent inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Why Choose Our App
            </motion.h2>
            <motion.p
              className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              We've simplified the process of finding and booking qualified professionals for all your home service needs.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center mb-8">
              <div className="text-base sm:text-lg font-bold text-[#D2A95E] text-center mb-4">
                Easy Booking
              </div>
              <CardContainer className="w-full h-auto max-w-[400px] flex items-center justify-center">
                <CardBody className="bg-transparent shadow-xl w-full h-full p-0 border-0 flex flex-col items-center justify-center">
                  <div className="flex justify-center">
                    <div className="relative flex flex-col items-center">
                      <div
                        className={`bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] ${featureCardDimensions.roundedClass} p-[6px] sm:p-2 shadow-lg flex flex-col items-center justify-center relative`}
                        style={{ width: featureCardDimensions.width, height: featureCardDimensions.height }}
                      >
                        {/* Mobile Frame Design */}
                        <div
                          className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] rounded-b-lg z-10"
                          style={{ width: isMobile ? '40px' : '60px', height: isMobile ? '10px' : '14px' }}
                        ></div>
                        <div
                          className="absolute left-1/2 transform -translate-x-1/2 bg-[#333] rounded-full z-10"
                          style={{ top: isMobile ? '6px' : '8px', width: isMobile ? '20px' : '28px', height: isMobile ? '3px' : '5px' }}
                        ></div>
                        <div className={`w-full h-full ${featureCardDimensions.innerRoundedClass} overflow-hidden relative bg-[#1a1a1a]`}>
                          <div className={`absolute inset-0 border border-[#D2A95E]/20 ${featureCardDimensions.innerRoundedClass}`}></div>
                          <img
                            src={featureImages[0]}
                            alt="Easy Booking"
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </CardContainer>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center mb-8">
              <div className="text-base sm:text-lg font-bold text-[#D2A95E] text-center mb-4">
                Smart Scheduling
              </div>
              <CardContainer className="w-full h-auto max-w-[400px] flex items-center justify-center">
                <CardBody className="bg-transparent shadow-xl w-full h-full p-0 border-0 flex flex-col items-center justify-center">
                  <div className="flex justify-center">
                    <div className="relative flex flex-col items-center">
                      <div
                        className={`bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] ${featureCardDimensions.roundedClass} p-[6px] sm:p-2 shadow-lg flex flex-col items-center justify-center relative`}
                        style={{ width: featureCardDimensions.width, height: featureCardDimensions.height }}
                      >
                        {/* Mobile Frame Design */}
                        <div
                          className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] rounded-b-lg z-10"
                          style={{ width: isMobile ? '40px' : '60px', height: isMobile ? '10px' : '14px' }}
                        ></div>
                        <div
                          className="absolute left-1/2 transform -translate-x-1/2 bg-[#333] rounded-full z-10"
                          style={{ top: isMobile ? '6px' : '8px', width: isMobile ? '20px' : '28px', height: isMobile ? '3px' : '5px' }}
                        ></div>
                        <div className={`w-full h-full ${featureCardDimensions.innerRoundedClass} overflow-hidden relative bg-[#1a1a1a]`}>
                          <div className={`absolute inset-0 border border-[#D2A95E]/20 ${featureCardDimensions.innerRoundedClass}`}></div>
                          <img
                            src={featureImages[1]}
                            alt="Smart Scheduling"
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </CardContainer>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center mb-8">
              <div className="text-base sm:text-lg font-bold text-[#D2A95E] text-center mb-4">
                Service Details
              </div>
              <CardContainer className="w-full h-auto max-w-[400px] flex items-center justify-center">
                <CardBody className="bg-transparent shadow-xl w-full h-full p-0 border-0 flex flex-col items-center justify-center">
                  <div className="flex justify-center">
                    <div className="relative flex flex-col items-center">
                      <div
                        className={`bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] ${featureCardDimensions.roundedClass} p-[6px] sm:p-2 shadow-lg flex flex-col items-center justify-center relative`}
                        style={{ width: featureCardDimensions.width, height: featureCardDimensions.height }}
                      >
                        {/* Mobile Frame Design */}
                        <div
                          className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] rounded-b-lg z-10"
                          style={{ width: isMobile ? '40px' : '60px', height: isMobile ? '10px' : '14px' }}
                        ></div>
                        <div
                          className="absolute left-1/2 transform -translate-x-1/2 bg-[#333] rounded-full z-10"
                          style={{ top: isMobile ? '6px' : '8px', width: isMobile ? '20px' : '28px', height: isMobile ? '3px' : '5px' }}
                        ></div>
                        <div className={`w-full h-full ${featureCardDimensions.innerRoundedClass} overflow-hidden relative bg-[#1a1a1a]`}>
                          <div className={`absolute inset-0 border border-[#D2A95E]/20 ${featureCardDimensions.innerRoundedClass}`}></div>
                          <img
                            src={featureImages[2]}
                            alt="Service Details"
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </CardContainer>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center mb-8">
              <div className="text-base sm:text-lg font-bold text-[#D2A95E] text-center mb-4">
                Secure Payments
              </div>
              <CardContainer className="w-full h-auto max-w-[400px] flex items-center justify-center">
                <CardBody className="bg-transparent shadow-xl w-full h-full p-0 border-0 flex flex-col items-center justify-center">
                  <div className="flex justify-center">
                    <div className="relative flex flex-col items-center">
                      <div
                        className={`bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] ${featureCardDimensions.roundedClass} p-[6px] sm:p-2 shadow-lg flex flex-col items-center justify-center relative`}
                        style={{ width: featureCardDimensions.width, height: featureCardDimensions.height }}
                      >
                        {/* Mobile Frame Design */}
                        <div
                          className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] rounded-b-lg z-10"
                          style={{ width: isMobile ? '40px' : '60px', height: isMobile ? '10px' : '14px' }}
                        ></div>
                        <div
                          className="absolute left-1/2 transform -translate-x-1/2 bg-[#333] rounded-full z-10"
                          style={{ top: isMobile ? '6px' : '8px', width: isMobile ? '20px' : '28px', height: isMobile ? '3px' : '5px' }}
                        ></div>
                        <div className={`w-full h-full ${featureCardDimensions.innerRoundedClass} overflow-hidden relative bg-[#1a1a1a]`}>
                          <div className={`absolute inset-0 border border-[#D2A95E]/20 ${featureCardDimensions.innerRoundedClass}`}></div>
                          <img
                            src={featureImages[3]}
                            alt="Secure Payments"
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default FeaturesPage;