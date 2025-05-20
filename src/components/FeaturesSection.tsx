'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import {
  MultiPersonIcon,
  DataStorageIcon,
  ModularDesignIcon,
  FacialMeasurementIcon,
  SystemIntegrationIcon
} from './icons/FeatureIcons';

gsap.registerPlugin(ScrollTrigger);

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: () => React.ReactElement;
  image: string;
};

const features: Feature[] = [
  {
    id: 1,
    title: 'Multi-Person Recognition',
    description: 'Identifies multiple individuals simultaneously within a single frame.',
    icon: MultiPersonIcon,
    image: 'https://ayudawp.com/wp-content/uploads/2020/07/face-recognition-WordPress.gif'
  },
  {
    id: 2,
    title: 'Automatic Data Storage',
    description: 'Stores labeled images and identity details. Ensures quick model updates and easy retraining.',
    icon: DataStorageIcon,
    image: 'https://media.giphy.com/media/idqD4e6kwMJzul2Ftq/giphy.gif'
  },
  {
    id: 3,
    title: 'Modular and Scalable Design',
    description: 'Easily supports additional individuals and new use cases.',
    icon: ModularDesignIcon,
    image: 'https://media.giphy.com/media/N1Fcnipz6WlUROVNpb/giphy.gif'
  },
  {
    id: 4,
    title: 'Facial Measurement Analysis',
    description: 'Extracts metrics like eye-to-nose distance, jaw length, and shoulder width. Builds a unique profile and can extend to attendance/security systems.',
    icon: FacialMeasurementIcon,
    image: 'https://media.giphy.com/media/0hv8d4HrDVI6m7w7pF/giphy.gif'
  },
  {
    id: 5,
    title: 'Seamless System Integration',
    description: 'Easily integrates with existing systems like security cameras, attendance software, and HR systems.',
    icon: SystemIntegrationIcon,
    image: 'https://media.giphy.com/media/fx6Ynu2Hy1HYmsARdw/giphy.gif'
  }
];

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<number>(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for section background
      gsap.to(sectionRef.current, {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

      // Animate section title with split text effect
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top center+=100',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Stagger animate feature buttons
      gsap.fromTo(
        featureRefs.current,
        { opacity: 0, x: -50, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Enhanced content panel animation on tab change
    if (contentRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(
        contentRef.current,
        { opacity: 0, x: 30, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 0.6, ease: 'power3.out' }
      );

      // Animate icon and text separately for smoother transition
      const icon = contentRef.current.querySelector('.feature-icon');
      const text = contentRef.current.querySelector('.feature-text');
      
      if (icon && text) {
        tl.fromTo(
          icon,
          { rotate: -15, scale: 0.9 },
          { rotate: 0, scale: 1, duration: 0.5, ease: 'back.out(1.7)' },
          '-=0.4'
        ).fromTo(
          text,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
          '-=0.3'
        );
      }
    }
  }, [activeFeature]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-blue-950 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 4
        }}
        className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-3xl pointer-events-none" 
      />
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="section-title mb-16 text-center text-4xl font-bold text-white md:text-5xl">
          Key Features That Define Precision
        </h2>

        <div ref={containerRef} className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-12">
          {/* Feature Tabs */}
          <div className="lg:col-span-4">
            <div className="flex flex-col space-y-2">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  ref={(el) => {
                    featureRefs.current[feature.id - 1] = el;
                  }}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`rounded-xl p-6 text-left transition-all transform hover:scale-105 ${
                    activeFeature === feature.id
                      ? 'bg-blue-600 text-white shadow-xl'
                      : 'bg-gray-800/50 text-white hover:bg-gray-700/50'
                  }`}
                  role="tab"
                  aria-selected={activeFeature === feature.id}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${activeFeature === feature.id ? 'text-white' : 'text-blue-400'}`}>
                      <feature.icon />
                    </div>
                    <span className="text-lg font-semibold">{feature.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Feature Content */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative bg-gradient-to-b from-gray-900/50 to-blue-950/50 backdrop-blur-sm p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 rounded-xl lg:col-span-8"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)",
              transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 15 
              }
            }}
            role="tabpanel"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-6">
                <div className="feature-icon w-16 h-16 text-blue-400 flex-shrink-0 transform transition-transform duration-300 hover:scale-110">
                  {features.find((f) => f.id === activeFeature)?.icon()}
                </div>
                <div className="feature-text">
                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {features.find((f) => f.id === activeFeature)?.title}
                  </h3>
                  <p className="text-lg text-gray-200">
                    {features.find((f) => f.id === activeFeature)?.description}
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="relative w-80 h-80 rounded-xl overflow-hidden">
                  <Image
                    src={features.find((f) => f.id === activeFeature)?.image || ''}
                    alt={features.find((f) => f.id === activeFeature)?.title || ''}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized={true}
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}