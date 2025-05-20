
import React from "react";
import { motion } from "framer-motion";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  delay: number;
  icon?: React.ReactNode;
}

const StepCard = ({ number, title, description, delay, icon }: StepCardProps) => {
  // Generate vibrant gradients based on the step number
  const gradients = [
    "from-violet-500 to-purple-600",
    "from-fuchsia-500 to-pink-600",
    "from-cyan-500 to-blue-600"
  ];
  
  const shadowColors = [
    "shadow-violet-500/30",
    "shadow-fuchsia-500/30",
    "shadow-cyan-500/30"
  ];
  
  const bgColors = [
    "bg-violet-50",
    "bg-fuchsia-50",
    "bg-cyan-50"
  ];
  
  const borderColors = [
    "border-violet-200",
    "border-fuchsia-200",
    "border-cyan-200"
  ];
  
  const textColors = [
    "text-violet-800",
    "text-fuchsia-800",
    "text-cyan-800"
  ];
  
  const gradient = gradients[(number - 1) % gradients.length];
  const shadowColor = shadowColors[(number - 1) % shadowColors.length];
  const bgColor = bgColors[(number - 1) % bgColors.length];
  const borderColor = borderColors[(number - 1) % borderColors.length];
  const textColor = textColors[(number - 1) % textColors.length];
  
  return (
    <motion.div 
      className={`flex flex-col items-center ${bgColor} p-8 rounded-2xl border ${borderColor} shadow-lg`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay / 1000 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <motion.div 
        className={`relative w-24 h-24 mb-6 mx-auto`}
        whileHover={{ rotate: 360 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        {/* Outer circle with animation */}
        <motion.div 
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient} opacity-20`}
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        
        {/* Inner circle with number */}
        <motion.div 
          className={`absolute inset-2 rounded-full bg-gradient-to-r ${gradient} shadow-lg ${shadowColor} flex items-center justify-center`}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="text-white text-3xl font-bold">{number}</div>
        </motion.div>
        
        {/* Icon on top */}
        {icon && (
          <motion.div 
            className="absolute -right-2 -top-2 bg-white rounded-full p-2 shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: (delay / 1000) + 0.3, type: "spring" }}
          >
            <div className={`text-${gradient.split('-')[2]}-500`}>{icon}</div>
          </motion.div>
        )}
      </motion.div>
      
      <motion.h3 
        className={`text-2xl font-bold mb-3 ${textColor}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: (delay / 1000) + 0.2 }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-600 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: (delay / 1000) + 0.4 }}
      >
        {description}
      </motion.p>
      
      <motion.div
        className={`mt-6 h-1 w-20 bg-gradient-to-r ${gradient} rounded-full`}
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        transition={{ delay: (delay / 1000) + 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};

export default StepCard;
