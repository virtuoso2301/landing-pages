import React from "react";
import { motion } from "framer-motion";
import { User, Briefcase, Repeat } from "lucide-react";

const useCases = [
  {
    userType: "Potential Clients",
    icon: <User size={32} />,
    question: "What services do you offer?",
    answer:
      "Our chatbot provides detailed information about our web development, mobile app, UI/UX design, and DevOps services, helping potential clients understand our offerings.",
    color: "from-blue-400 via-purple-400 to-pink-400",
    delay: 0,
  },
  {
    userType: "Job Seekers",
    icon: <Briefcase size={32} />,
    question: "Are there any open roles?",
    answer:
      "Job seekers can quickly learn about current openings, required skills, and application processes without having to search through multiple pages.",
    color: "from-pink-400 via-yellow-400 to-purple-400",
    delay: 0.15,
  },
  {
    userType: "Returning Clients",
    icon: <Repeat size={32} />,
    question: "I want to update my project.",
    answer:
      "Existing clients can easily initiate project updates, schedule meetings with their project manager, or request support through the chatbot.",
    color: "from-green-400 via-blue-400 to-purple-400",
    delay: 0.3,
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300/30 via-purple-300/20 to-pink-300/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-300/30 via-purple-300/20 to-blue-300/10 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow-md">
            Real Examples
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 bg-clip-text text-transparent drop-shadow-lg">
            How Our Chatbot Helps
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {useCases.map((uc, idx) => (
            <motion.div
              key={uc.userType}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: uc.delay, duration: 0.7, type: "spring" }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div
                className={`mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br ${uc.color} shadow-xl backdrop-blur-md bg-opacity-70 border-4 border-white/40`}
              >
                <span className="text-white drop-shadow-lg">{uc.icon}</span>
              </div>
              <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-blue-800 via-purple-700 to-pink-600 bg-clip-text text-transparent">
                {uc.userType}
              </h3>
              <div className="mb-2 text-blue-700 font-semibold italic">"{uc.question}"</div>
              <p className="text-gray-700 font-medium">{uc.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;