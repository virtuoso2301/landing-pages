import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MessageCircle, ArrowRight } from "lucide-react";
import ChatbotModal from "@/components/ChatbotModal";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Animated, glowing blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 rounded-full blur-3xl z-0"
        style={{ filter: "blur(80px)" }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-600 via-purple-500 to-pink-500 rounded-full blur-3xl z-0"
        style={{ filter: "blur(80px)" }}
      />

      {/* Glass overlay for depth */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-0" />

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent drop-shadow-lg"
        >
          Experience Smarter Support—Try the CodeKrafters Chatbot Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl mb-8 max-w-2xl mx-auto text-blue-100"
        >
          Get instant answers to your questions and streamline your experience with our intelligent assistant.
        </motion.p>
        <Dialog>
          <DialogTrigger asChild>
            <motion.div
              whileHover={{ scale: 1.08, boxShadow: "0 0 32px 8px #a78bfa" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block"
            >
              <Button className="bg-white text-blue-900 hover:bg-gray-100 font-medium px-8 py-6 rounded-full flex items-center gap-2 text-lg mx-auto shadow-xl transition-all duration-300 focus:ring-4 focus:ring-purple-400/40">
                <MessageCircle size={20} />
                Launch Chat
                <ArrowRight size={18} className="ml-1" />
              </Button>
            </motion.div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <ChatbotModal />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CTASection;