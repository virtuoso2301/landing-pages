import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Brain, Users, FileText, Lock, Check } from "lucide-react";

const features = [
  {
    icon: <MessageCircle size={32} />,
    title: "24/7 Instant Support",
    description: "Get immediate help with services, projects, and general inquiries anytime you need.",
    color: "from-blue-400 via-blue-600 to-purple-500",
    delay: 0,
  },
  {
    icon: <Brain size={32} />,
    title: "Smart Service Navigation",
    description: "Easily explore CodeKrafters' offerings like web apps, mobile apps, UI/UX design, and DevOps.",
    color: "from-purple-400 via-pink-500 to-indigo-500",
    delay: 0.1,
  },
  {
    icon: <Users size={32} />,
    title: "Personalized Responses",
    description: "The chatbot adapts answers based on your interests and previous interactions.",
    color: "from-indigo-400 via-blue-500 to-purple-400",
    delay: 0.2,
  },
  {
    icon: <FileText size={32} />,
    title: "Project Inquiry Assistant",
    description: "Quickly get estimates, timelines, and connect with a human representative.",
    color: "from-pink-400 via-red-400 to-yellow-400",
    delay: 0.3,
  },
  {
    icon: <Lock size={32} />,
    title: "Secure Conversations",
    description: "End-to-end encrypted chats to keep your data safe and private.",
    color: "from-green-400 via-teal-400 to-blue-400",
    delay: 0.4,
  },
  {
    icon: <Check size={32} />,
    title: "Quick Resolution",
    description: "Get answers to common questions instantly without waiting for email responses.",
    color: "from-cyan-400 via-blue-400 to-purple-400",
    delay: 0.5,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300/30 via-purple-300/20 to-pink-300/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-300/30 via-purple-300/20 to-blue-300/10 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow-md">
            Powerful Features
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 bg-clip-text text-transparent drop-shadow-lg">
            Enhance Your Experience
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: feature.delay, duration: 0.7, type: "spring" }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div
                className={`mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br ${feature.color} shadow-xl backdrop-blur-md bg-opacity-70 border-4 border-white/40`}
              >
                <span className="text-white drop-shadow-lg">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-800 via-purple-700 to-pink-600 bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-gray-700 font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;