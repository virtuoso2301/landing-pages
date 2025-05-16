import { motion } from "framer-motion";

const TechnologyPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a]">
    <motion.section
      id="technology"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-7xl mx-auto py-10 sm:py-20"
    >
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] bg-clip-text text-transparent inline-block tracking-tight">
            Techstack and Third Party Integration
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            We leverage a robust tech stack and trusted third-party integrations to deliver secure payments, real-time data, seamless user experience, and certified quality. Our platform combines modern frameworks, cloud databases, and industry-leading APIs for reliability and scalability.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12 max-w-5xl mx-auto mt-4 sm:mt-10">
          {/* Flutter - Force full width on xs screens */}
          <motion.div
            whileHover={{ scale: 1.07, boxShadow: "0 12px 36px #D2A95E66" }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.05, type: "spring", stiffness: 300 }}
            className="bg-[#232323] p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl border border-[#D2A95E]/20 flex flex-col items-center shadow-2xl col-span-1"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
              alt="Flutter"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4"
            />
            <h3 className="text-lg sm:text-xl font-bold text-[#D2A95E] mb-2">Flutter</h3>
          </motion.div>
          {/* Payment Gateway */}
          <motion.div
            whileHover={{ scale: 1.07, boxShadow: "0 12px 36px #D2A95E66" }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.1, type: "spring", stiffness: 300 }}
            className="bg-[#232323] p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl border border-[#D2A95E]/20 flex flex-col items-center shadow-2xl col-span-1"
          >
            <img
              src="/images/credit-cards.png"
              alt="Payment Gateway"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4"
            />
            <h3 className="text-lg sm:text-xl font-bold text-[#D2A95E] mb-2">Payment Gateway</h3>
          </motion.div>
          {/* Firebase - Full width on mobile, normal on desktop */}
          <motion.div
            whileHover={{ scale: 1.07, boxShadow: "0 12px 36px #D2A95E66" }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.2, type: "spring", stiffness: 300 }}
            className="bg-[#232323] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#D2A95E]/20 flex flex-col items-center shadow-2xl col-span-2 lg:col-span-1 max-w-md mx-auto lg:max-w-none lg:mx-0"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="w-14 h-14 sm:w-16 sm:h-16 mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-[#D2A95E] mb-2">Firebase</h3>
          </motion.div>
        </div>
      </div>
    </motion.section>
  </div>
);

export default TechnologyPage;