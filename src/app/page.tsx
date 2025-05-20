import Image from "next/image";

import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import Demo from "@/components/Demo";
import Industry from "@/components/Industry";
import { motion } from "framer-motion";
// import AnimatedText from "@/components/AnimatedText";

// import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <Demo />
      <Industry />
    </main>
  );
}
