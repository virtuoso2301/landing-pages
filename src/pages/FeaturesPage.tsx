import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

const featureImages = [
  "/images/iphone9.png",
  "/images/iphone10.png",
  "/images/iphone11.png",
  "/images/iPhone13.png"
];

const FeaturesPage = () => {
  const isMobile = useIsMobile();
  const featureCardDimensions = {
    width: isMobile ? "240px" : "300px",
    height: isMobile ? "490px" : "610px",
    roundedClass: isMobile ? "rounded-[1.5rem]" : "rounded-[3rem]",
    innerRoundedClass: isMobile ? "rounded-[1.3rem]" : "rounded-[2.5rem]"
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A]">
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
              className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-b from-[#2885E5] to-[#1A6BCB] bg-clip-text text-transparent inline-block"
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
            We are the best Online  Dance  teaching app 
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center mb-8">
              <div className="text-base sm:text-lg font-bold text-[#e63366] text-center mb-4">
                Easy steps
              </div>
              <CardContainer className="w-full h-auto max-w-[400px] flex items-center justify-center">
                <CardBody className="bg-transparent shadow-xl w-full h-full p-0 border-0 flex flex-col items-center justify-center">
                  <div className="flex justify-center">
                    <div className="relative flex flex-col items-center">
                      <div
                        className={`bg-gradient-to-b from-[#000000] to-[#000000] ${featureCardDimensions.roundedClass} p-[6px] sm:p-2 shadow-lg flex flex-col items-center justify-center relative`}
                        style={{ width: featureCardDimensions.width, height: featureCardDimensions.height }}
                      >
                        {/* Mobile Frame Design */}
                        <div
                          className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#000000] to-[#000000] rounded-b-[1.5rem] z-10"
                          style={{ width: isMobile ? '120px' : '150px', height: isMobile ? '24px' : '30px' }}
                        ></div>
                        <div
                          className="absolute left-1/2 transform -translate-x-1/2 bg-[#333] rounded-full z-10"
                          style={{ top: isMobile ? '12px' : '15px', width: isMobile ? '50px' : '60px', height: isMobile ? '6px' : '8px' }}
                        ></div>
                        <div className={`w-full h-full ${featureCardDimensions.innerRoundedClass} overflow-hidden relative bg-[#1a1a1a]`}>
                          <div className={`absolute inset-0 border border-[#8b2a8b]/20 ${featureCardDimensions.innerRoundedClass}`}></div>
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
              <div className="text-base sm:text-lg font-bold text-[#e63366] text-center mb-4">
                best dancers
              </div>
              <CardContainer className="w-full h-auto max-w-[400px] flex items-center justify-center">
                <CardBody className="bg-transparent shadow-xl w-full h-full p-0 border-0 flex flex-col items-center justify-center">
                  <div className="flex justify-center">
                    <div className="relative flex flex-col items-center">
                      <div
                        className={`bg-gradient-to-b from-[#000000] to-[#000000] ${featureCardDimensions.roundedClass} p-[6px] sm:p-2 shadow-lg flex flex-col items-center justify-center relative`}
                        style={{ width: featureCardDimensions.width, height: featureCardDimensions.height }}
                      >
                        {/* Mobile Frame Design */}
                        <div
                          className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#000000] to-[#000000] rounded-b-[1.5rem] z-10"
                          style={{ width: isMobile ? '120px' : '150px', height: isMobile ? '24px' : '30px' }}
                        ></div>
                        <div
                          className="absolute left-1/2 transform -translate-x-1/2 bg-[#333] rounded-full z-10"
                          style={{ top: isMobile ? '12px' : '15px', width: isMobile ? '50px' : '60px', height: isMobile ? '6px' : '8px' }}
                        ></div>
                        <div className={`w-full h-full ${featureCardDimensions.innerRoundedClass} overflow-hidden relative bg-[#1a1a1a]`}>
                          <div className={`absolute inset-0 border border-[#8b2a8b]/20 ${featureCardDimensions.innerRoundedClass}`}></div>
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
              <div className="text-base sm:text-lg font-bold text-[#e63366] text-center mb-4">
                Easy Payment
              </div>
              <CardContainer className="w-full h-auto max-w-[400px] flex items-center justify-center">
                <CardBody className="bg-transparent shadow-xl w-full h-full p-0 border-0 flex flex-col items-center justify-center">
                  <div className="flex justify-center">
                    <div className="relative flex flex-col items-center">
                      <div
                        className={`bg-gradient-to-b from-[#000000] to-[#000000] ${featureCardDimensions.roundedClass} p-[6px] sm:p-2 shadow-lg flex flex-col items-center justify-center relative`}
                        style={{ width: featureCardDimensions.width, height: featureCardDimensions.height }}
                      >
                        {/* Mobile Frame Design */}
                        <div
                          className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#000000] to-[#000000] rounded-b-[1.5rem] z-10"
                          style={{ width: isMobile ? '120px' : '150px', height: isMobile ? '24px' : '30px' }}
                        ></div>
                        <div
                          className="absolute left-1/2 transform -translate-x-1/2 bg-[#333] rounded-full z-10"
                          style={{ top: isMobile ? '12px' : '15px', width: isMobile ? '50px' : '60px', height: isMobile ? '6px' : '8px' }}
                        ></div>
                        <div className={`w-full h-full ${featureCardDimensions.innerRoundedClass} overflow-hidden relative bg-[#1a1a1a]`}>
                          <div className={`absolute inset-0 border border-[#8b2a8b]/20 ${featureCardDimensions.innerRoundedClass}`}></div>
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
              <div className="text-base sm:text-lg font-bold text-[#e63366] text-center mb-4">
                1000+ Classes
              </div>
              <CardContainer className="w-full h-auto max-w-[400px] flex items-center justify-center">
                <CardBody className="bg-transparent shadow-xl w-full h-full p-0 border-0 flex flex-col items-center justify-center">
                  <div className="flex justify-center">
                    <div className="relative flex flex-col items-center">
                      <div
                        className={`bg-gradient-to-b from-[#000000] to-[#000000] ${featureCardDimensions.roundedClass} p-[6px] sm:p-2 shadow-lg flex flex-col items-center justify-center relative`}
                        style={{ width: featureCardDimensions.width, height: featureCardDimensions.height }}
                      >
                        {/* Mobile Frame Design */}
                        <div
                          className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#000000] to-[#000000] rounded-b-[1.5rem] z-10"
                          style={{ width: isMobile ? '120px' : '150px', height: isMobile ? '24px' : '30px' }}
                        ></div>
                        <div
                          className="absolute left-1/2 transform -translate-x-1/2 bg-[#333] rounded-full z-10"
                          style={{ top: isMobile ? '12px' : '15px', width: isMobile ? '50px' : '60px', height: isMobile ? '6px' : '8px' }}
                        ></div>
                        <div className={`w-full h-full ${featureCardDimensions.innerRoundedClass} overflow-hidden relative bg-[#1a1a1a]`}>
                          <div className={`absolute inset-0 border border-[#8b2a8b]/20 ${featureCardDimensions.innerRoundedClass}`}></div>
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