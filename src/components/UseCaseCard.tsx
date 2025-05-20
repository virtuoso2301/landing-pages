import React from "react";
import { motion } from "framer-motion";

interface UseCaseCardProps {
  userType: string;
  question: string;
  answer: string;
  delay: number;
}

export const UseCaseCard: React.FC<UseCaseCardProps> = ({ userType, question, answer, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
    >
      <div className="text-blue-600 font-medium mb-2">{userType}</div>
      <h3 className="text-lg font-semibold mb-3">"{question}"</h3>
      <p className="text-gray-600">{answer}</p>
    </motion.div>
  );
};