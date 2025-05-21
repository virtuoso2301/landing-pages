"use client";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, User, MapPin, History, LogIn } from "lucide-react";

const features = [
  { icon: <ShoppingCart size={32} />, title: "Add to Cart, Wishlist" },
  { icon: <History size={32} />, title: "Order History, Returns" },
  { icon: <User size={32} />, title: "Profile Info, Saved Addresses" },
  { icon: <MapPin size={32} />, title: "Live Order Tracking, OTP Login" },
];

export default function UserPanelSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600 font-montserrat mb-4 text-center relative max-w-3xl mx-auto leading-tight"
      >
        Smooth, Personal, and Feature-Rich for Your Customers
      </motion.h2>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="grid grid-cols-3 sm:grid-cols-2 md:flex md:flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 max-w-5xl mx-auto relative"
      >
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            viewport={{ once: true }}
            className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-2 sm:p-4 md:p-6 flex flex-col items-center w-full sm:w-[240px] md:w-64 min-h-[100px] sm:min-h-[140px] md:min-h-[160px] hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-200 hover:bg-white ${
              idx === features.length - 1 ? 'col-start-2 sm:col-start-auto md:col-start-auto' : ''
            }`}
            aria-label={feature.title}
          >
            <motion.div 
              className="mb-1 sm:mb-2 md:mb-3 text-indigo-600 bg-indigo-50 p-2 rounded-full"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              {feature.icon}
            </motion.div>
            <motion.span 
              className="text-xs sm:text-base font-semibold text-gray-700 font-inter text-center leading-relaxed"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {feature.title}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}