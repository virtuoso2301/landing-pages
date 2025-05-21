"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const images = [
  { src: "/images/zackbee.png", client: "Zackbee", highlights: ["Modern UI", "Fast Checkout"] },
  { src: "/images/verlas.png", client: "Verlas", highlights: ["SEO Optimized", "Mobile Ready"] },
  { src: "/images/shriramjewellers.png", client: "Shriram Jewellers", highlights: ["Custom Features", "High Conversion"] },
  { src: "/images/leafyland.png", client: "Leafyland", highlights: ["Brand Colors", "Easy Admin"] },
];

export default function ImageSlider() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);

  // Create a continuous loop by duplicating the slides
  const slides = [
    ...images,
    ...images, // Duplicate for seamless loop
  ];

  const handlePrev = () => {
    if (isTransitioning.current || !containerRef.current) return;
    isTransitioning.current = true;

    const currentX = gsap.getProperty(containerRef.current, "x") as number;
    const slideWidth = containerRef.current.offsetWidth / slides.length;
    
    gsap.to(containerRef.current, {
      x: currentX + slideWidth,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        isTransitioning.current = false;
        setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }
    });
  };

  const handleNext = () => {
    if (isTransitioning.current || !containerRef.current) return;
    isTransitioning.current = true;

    const currentX = gsap.getProperty(containerRef.current, "x") as number;
    const slideWidth = containerRef.current.offsetWidth / slides.length;
    
    gsap.to(containerRef.current, {
      x: currentX - slideWidth,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        isTransitioning.current = false;
        setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    });
  };

  // Reset position when reaching the end of the loop
  useEffect(() => {
    if (!containerRef.current) return;

    const totalWidth = containerRef.current.offsetWidth;
    const slideWidth = totalWidth / slides.length;

    if (activeIdx === 0) {
      gsap.set(containerRef.current, { x: 0 });
    } else if (activeIdx === images.length - 1) {
      gsap.set(containerRef.current, { x: -slideWidth * (images.length - 1) });
    }
  }, [activeIdx, images.length, slides.length]);

  return (
    <section className="w-full h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col justify-center items-center relative overflow-hidden">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600 font-montserrat mb-4 sm:mb-6 md:mb-8 text-center px-4 drop-shadow-lg">
        Our E-commerce Masterpieces
      </h2>
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
        <div 
          ref={containerRef}
          className="flex h-full items-center justify-center" 
          style={{ width: `${slides.length * 40}vw` }}
        >
          {slides.map((img, idx) => (
            <div
              key={`${img.client}-${idx}`}
              className={twMerge(
                clsx(
                  "slide group relative h-full w-[80vw] sm:w-[60vw] md:w-[35vw] mx-[2vw] sm:mx-[2.5vw] rounded-2xl shadow-2xl overflow-hidden bg-white backdrop-blur-sm transition-all duration-500 border border-gray-200 hover:border-indigo-200",
                  idx === activeIdx ? "z-20" : "z-10"
                )
              )}
            >
              <div className="relative w-full h-full">
                <Image 
                  src={img.src} 
                  alt={img.client} 
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 768px) 60vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover p-0"
                  priority={idx === activeIdx}
                  quality={100}
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 sm:pb-6 md:pb-8 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600/90 to-gray-800/90 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                  <span className="font-bold text-xl sm:text-2xl mb-2 sm:mb-4">{img.client}</span>
                  <ul className="text-center space-y-1 text-sm sm:text-base">
                    {img.highlights.map((h) => (
                      <li key={h}>• {h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 flex gap-2 z-30">
        <button
          onClick={handlePrev}
          className="bg-white text-indigo-600 rounded-full w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center shadow-lg hover:bg-indigo-50 border border-gray-200 hover:border-indigo-200 transition-all duration-300"
          aria-label="Previous"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="bg-white text-indigo-600 rounded-full w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center shadow-lg hover:bg-indigo-50 border border-gray-200 hover:border-indigo-200 transition-all duration-300"
          aria-label="Next"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
