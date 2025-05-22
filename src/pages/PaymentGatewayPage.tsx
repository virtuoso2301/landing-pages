// import { motion } from "framer-motion";

// const PaymentGatewayPage = () => (
//   <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]">
//     <motion.section
//       id="payment"
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="w-full max-w-7xl mx-auto py-20"
//     >
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] bg-clip-text text-transparent inline-block">
//             Secure Payment Options
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto text-lg">
//             We support multiple secure payment methods for your convenience
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//           {/* Credit Card */}
//           <motion.div
//             whileHover={{ scale: 1.04, rotate: 2, boxShadow: "0 8px 40px #D2A95E55" }}
//             whileTap={{ scale: 0.97, rotate: -2 }}
//             initial={{ opacity: 0, y: 40, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 180 }}
//             className="bg-gradient-to-br from-[#232323] via-[#2a2a2a] to-[#1a1a1a] p-8 rounded-3xl border border-[#D2A95E]/30 flex flex-col items-center shadow-xl hover:shadow-2xl transition-all duration-300"
//           >
//             <div className="w-20 h-20 bg-[#1a1a1a] rounded-2xl flex items-center justify-center mb-4 border-2 border-[#D2A95E]/30 shadow-inner">
//               <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
//                 <path d="M3 10H21M7 15H8M12 15H13M6 19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19Z" stroke="#D2A95E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-[#D2A95E] mb-2">Credit Card</h3>
//             <p className="text-gray-400 text-center text-sm mt-3">Secure payments with Visa, Mastercard and more</p>
//           </motion.div>

//           {/* PayPal */}
//           <motion.div
//             whileHover={{ scale: 1.04, rotate: 2, boxShadow: "0 8px 40px #D2A95E55" }}
//             whileTap={{ scale: 0.97, rotate: -2 }}
//             initial={{ opacity: 0, y: 40, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.18, type: "spring", stiffness: 180 }}
//             className="bg-gradient-to-br from-[#232323] via-[#2a2a2a] to-[#1a1a1a] p-8 rounded-3xl border border-[#D2A95E]/30 flex flex-col items-center shadow-xl hover:shadow-2xl transition-all duration-300"
//           >
//             <div className="w-20 h-20 bg-[#1a1a1a] rounded-2xl flex items-center justify-center mb-4 border-2 border-[#D2A95E]/30 shadow-inner">
//               <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/paypal/paypal-original.svg" alt="PayPal" className="w-12 h-12" />
//             </div>
//             <h3 className="text-xl font-bold text-[#D2A95E] mb-2">PayPal</h3>
//             <p className="text-gray-400 text-center text-sm mt-3">Pay easily with your PayPal account</p>
//           </motion.div>

//           {/* UPI */}
//           <motion.div
//             whileHover={{ scale: 1.04, rotate: 2, boxShadow: "0 8px 40px #D2A95E55" }}
//             whileTap={{ scale: 0.97, rotate: -2 }}
//             initial={{ opacity: 0, y: 40, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.26, type: "spring", stiffness: 180 }}
//             className="bg-gradient-to-br from-[#232323] via-[#2a2a2a] to-[#1a1a1a] p-8 rounded-3xl border border-[#D2A95E]/30 flex flex-col items-center shadow-xl hover:shadow-2xl transition-all duration-300"
//           >
//             <div className="w-20 h-20 bg-[#1a1a1a] rounded-2xl flex items-center justify-center mb-4 border-2 border-[#D2A95E]/30 shadow-inner">
//               <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
//                 <circle cx="12" cy="12" r="10" stroke="#D2A95E" strokeWidth="2"/>
//                 <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14M9 9H9.01M15 9H15.01" stroke="#D2A95E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-[#D2A95E] mb-2">UPI Payments</h3>
//             <p className="text-gray-400 text-center text-sm mt-3">Instant UPI payments with any provider</p>
//           </motion.div>

//           {/* Bank Transfer */}
//           <motion.div
//             whileHover={{ scale: 1.04, rotate: 2, boxShadow: "0 8px 40px #D2A95E55" }}
//             whileTap={{ scale: 0.97, rotate: -2 }}
//             initial={{ opacity: 0, y: 40, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.34, type: "spring", stiffness: 180 }}
//             className="bg-gradient-to-br from-[#232323] via-[#2a2a2a] to-[#1a1a1a] p-8 rounded-3xl border border-[#D2A95E]/30 flex flex-col items-center shadow-xl hover:shadow-2xl transition-all duration-300"
//           >
//             <div className="w-20 h-20 bg-[#1a1a1a] rounded-2xl flex items-center justify-center mb-4 border-2 border-[#D2A95E]/30 shadow-inner">
//               <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
//                 <path d="M12 18V2M12 18L6 12M12 18L18 12M19 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H19C20.1046 2 21 2.89543 21 4V20C21 21.1046 20.1046 22 19 22Z" stroke="#D2A95E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-[#D2A95E] mb-2">Bank Transfer</h3>
//             <p className="text-gray-400 text-center text-sm mt-3">Direct bank transfers with secure processing</p>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   </div>
// );

// export default PaymentGatewayPage;