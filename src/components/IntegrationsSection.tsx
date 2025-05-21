"use client";
import { LucideCreditCard, LucideTruck, LucideMessageCircle, LucideMail, LucideImage, LucideLanguages, LucideDollarSign, LucideBell } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, textVariant } from "@/utils/motion";

const integrations = [
  { 
    icon: <LucideCreditCard size={32} />, 
    title: "Payment Gateways",
    subtitle: "Razorpay, Stripe",
    color: "from-indigo-500 to-indigo-600"
  },
  { 
    icon: <LucideTruck size={32} />, 
    title: "Logistics APIs",
    subtitle: "Shiprocket, Delhivery",
    color: "from-indigo-500 to-indigo-600"
  },
  { 
    icon: <LucideMessageCircle size={32} />, 
    title: "SMS Gateway",
    subtitle: "SMS, WhatsApp, Bulk SMS",
    color: "from-indigo-500 to-indigo-600"
  },
  { 
    icon: <LucideMail size={32} />, 
    title: "Email Setup",
    subtitle: "Transactional & Marketing Emails",
    color: "from-indigo-500 to-indigo-600"
  },
  { 
    icon: <LucideImage size={32} />, 
    title: "Captcha Setup",
    subtitle: "Fraud detection, signifyd, sift, kount, ReCAPTCHA",
    color: "from-indigo-500 to-indigo-600"
  },
  { 
    icon: <LucideLanguages size={32} />, 
    title: "Image Compressor",
    subtitle: "TinyPNG, ImageKit, Cloudinary",
    color: "from-indigo-500 to-indigo-600"
  },
  { 
    icon: <LucideDollarSign size={32} />, 
    title: "Live Chats & Support",
    subtitle: "Tidio, Zendesk, Intercom, Freshchat, WhatsApp Business API",
    color: "from-indigo-500 to-indigo-600"
  },
  { 
    icon: <LucideBell size={32} />, 
    title: "Notifications",
    subtitle: "Firebase Push",
    color: "from-indigo-500 to-indigo-600"
  },
];

export default function IntegrationsSection() {
  return (
    <motion.section 
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 relative overflow-hidden flex items-center"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <motion.h2 
          variants={textVariant(0.1)}
          className="text-3xl md:text-4xl font-bold text-indigo-600 font-montserrat mb-8 text-center"
        >
          Seamless Integrations
        </motion.h2>
        
        <motion.p
          variants={textVariant(0.2)}
          className="text-gray-600 text-base md:text-lg text-center mb-6 max-w-2xl mx-auto"
        >
          Power your business with our comprehensive suite of integrations
        </motion.p>
        
        <motion.div 
          variants={staggerContainer(0.1, 0.2)}
          className="bg-white backdrop-blur-xl rounded-2xl p-4 border border-gray-200 shadow-lg"
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {integrations.map((integration, idx) => (
              <motion.div
                key={integration.title}
                variants={fadeIn("up", "spring", idx * 0.1, 0.75)}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative h-full"
              >
                <div className="relative bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-200 hover:border-indigo-200 transition-all duration-300 h-full flex flex-col shadow-md hover:shadow-lg">
                  <div className={`mb-2 sm:mb-3 p-2 rounded-lg bg-gradient-to-br ${integration.color} w-fit`}>
                    <div className="text-white">
                      {integration.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
                    {integration.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 flex-grow">
                    {integration.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}