"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const techLogos = [
  { src: "/images/wordpress.png", alt: "WordPress" },
  { src: "/images/icons8-php-logo-50.png", alt: "PHP" },
  { src: "/images/laravel.svg", alt: "Laravel" },
  { src: "/images/codeigniter-plain.svg", alt: "CodeIgniter" },
  { src: "/images/pngwing.com (1).png", alt: "Shopify" },
  { src: "/images/icons8-magento-48.png", alt: "Magento" },
  { src: "/images/dotnet.256x256.png", alt: ".NET" },
  { src: "/images/mern.svg", alt: "MERN Stack" },
  { src: "/images/icons8-angular-48.png", alt: "Angular" },
];

export default function TechnologyStackScroller() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current || !containerRef.current) return;
    
    const ctx = gsap.context(() => {
      const container = containerRef.current!;
      const logos = Array.from(container.children);
      const logoWidth = logos[0].getBoundingClientRect().width;
      const gap = 64; // gap between logos
      const totalWidth = (logoWidth + gap) * logos.length;
      
      // Set initial position
      gsap.set(container, { x: 0 });
      
      // Create the infinite scroll animation
      const animation = gsap.to(container, {
        x: -totalWidth / 2, // Move by half the total width
        duration: 20,
        ease: "none",
        repeat: -1,
        onRepeat: () => {
          // Reset position when animation completes
          gsap.set(container, { x: 0 });
        }
      });

      // Pause animation on hover
      container.addEventListener('mouseenter', () => {
        animation.pause();
      });

      container.addEventListener('mouseleave', () => {
        animation.play();
      });

      return () => {
        animation.kill();
      };
    }, scrollerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 font-montserrat mb-8 text-center">
        Powered by Proven Technologies
      </h2>
      <div className="overflow-hidden relative max-w-6xl mx-auto" ref={scrollerRef}>
        <div 
          ref={containerRef}
          className="flex gap-16 py-2"
        >
          {/* First set of logos */}
          {techLogos.map((logo, idx) => (
            <div
              key={`${logo.alt}-${idx}`}
              className="tech-logo flex flex-col items-center justify-center w-32 h-24"
            >
              <div className="w-20 h-16 flex items-center justify-center">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="w-20 h-16 object-contain mb-1"
                  onError={(e) => {
                    console.error('Failed to load:', logo.src);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <span className="text-xs font-semibold text-gray-600 text-center">{logo.alt}</span>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {techLogos.map((logo, idx) => (
            <div
              key={`${logo.alt}-duplicate-${idx}`}
              className="tech-logo flex flex-col items-center justify-center w-32 h-24"
            >
              <div className="w-20 h-16 flex items-center justify-center">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="w-20 h-16 object-contain mb-1"
                  onError={(e) => {
                    console.error('Failed to load:', logo.src);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <span className="text-xs font-semibold text-gray-600 text-center">{logo.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}