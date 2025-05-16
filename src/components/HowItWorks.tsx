
import React from "react";
import { motion } from "framer-motion";
import StepCard from "./StepCard";
import { ArrowRight, Sparkles, MousePointerClick, ZapIcon } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-violet-100 via-fuchsia-50 to-cyan-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-24 right-24 w-72 h-72 bg-purple-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-pink-300 rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-blue-300 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      
      {/* Floating particles */}
      <motion.div 
        className="absolute top-20 left-1/4 w-8 h-8 bg-yellow-300 rounded-full opacity-50"
        animate={{ 
          y: [0, -30, 0], 
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-40 right-1/3 w-6 h-6 bg-pink-400 rounded-full opacity-50"
        animate={{ 
          y: [0, -20, 0], 
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div 
        className="absolute top-1/2 right-1/4 w-10 h-10 bg-blue-400 rounded-full opacity-40"
        animate={{ 
          y: [0, -25, 0], 
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white px-5 py-2 rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              animate={{ rotate: [0, 20, 0, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={18} className="text-yellow-200" />
            </motion.div>
            <span>Interactive Guide</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent mb-4">
            How It Works
          </h2>
          
          <motion.p 
            className="text-lg text-violet-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Experience our intuitive process designed to make your journey seamless and delightful
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 relative">
          {/* Step 1 */}
          <StepCard 
            number={1}
            title="Click the chatbot icon"
            description="Find the chat icon on any page of our website to start a conversation."
            delay={300}
            icon={<MousePointerClick size={24} />}
          />
          
          {/* Arrow Connection 1 */}
          <div className="hidden md:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <ArrowRight size={50} className="text-fuchsia-500" />
              </motion.div>
              <ArrowRight size={50} className="text-transparent" /> {/* Placeholder for sizing */}
            </motion.div>
          </div>
          
          {/* Step 2 */}
          <StepCard 
            number={2}
            title="Ask your question"
            description="Type your query or explore our services through guided options."
            delay={600}
            icon={<ZapIcon size={24} />}
          />
          
          {/* Arrow Connection 2 - Mobile: Down arrow, Desktop: Right arrow */}
          <div className="flex md:hidden items-center justify-center my-4">
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={40} className="text-fuchsia-500 rotate-90" />
            </motion.div>
          </div>
          
          <div className="hidden md:flex items-center justify-center row-start-2 col-start-2">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <ArrowRight size={50} className="text-cyan-500 rotate-90" />
              </motion.div>
              <ArrowRight size={50} className="text-transparent rotate-90" /> {/* Placeholder for sizing */}
            </motion.div>
          </div>
          
          {/* Step 3 */}
          <StepCard 
            number={3}
            title="Get instant replies"
            description="Receive accurate answers or be connected to a real expert if needed."
            delay={900}
            icon={<Sparkles size={24} />}
          />
        </div>
        
        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-6 lg:p-10 bg-gradient-to-r from-violet-600/10 via-fuchsia-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border border-violet-200 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-violet-800 mb-4">Ready to experience the magic?</h3>
            <p className="text-lg text-violet-600 mb-6 max-w-2xl mx-auto">
              Our intelligent assistant is here to make your CodeKrafters journey smoother and more enjoyable.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg shadow-violet-500/30 flex items-center gap-2 mx-auto"
            >
              <span>Start Chatting</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
