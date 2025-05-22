// "use client";

// import React, { createContext, useContext, useRef } from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// const MouseEnterContext = createContext<
//   [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
// >(undefined);

// export const CardContainer = ({
//   children,
//   className,
//   containerClassName,
// }: {
//   children?: React.ReactNode;
//   className?: string;
//   containerClassName?: string;
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isMouseEntered, setIsMouseEntered] = React.useState(false);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!containerRef.current) return;
//     const { left, top, width, height } =
//       containerRef.current.getBoundingClientRect();
//     const x = (e.clientX - left - width / 2) / 25;
//     const y = (e.clientY - top - height / 2) / 25;
//     containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
//   };

//   const handleMouseEnter = () => {
//     setIsMouseEntered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsMouseEntered(false);
//     if (!containerRef.current) return;
//     containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
//   };

//   return (
//     <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
//       <div
//         className={`flex items-center justify-center ${containerClassName}`}
//         style={{
//           perspective: "1000px",
//         }}
//       >
//         <motion.div
//           ref={containerRef}
//           onMouseEnter={handleMouseEnter}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           animate={{
//             scale: isMouseEntered ? 1.05 : 1,
//           }}
//           transition={{
//             duration: 0.3,
//             ease: "easeOut",
//           }}
//           className={`flex items-center justify-center relative w-full ${className}`}
//         >
//           {children}
//         </motion.div>
//       </div>
//     </MouseEnterContext.Provider>
//   );
// };

// export const CardBody = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div
//       className={`h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d] ${className}`}
//     >
//       {children}
//     </div>
//   );
// };

// export const CardItem = ({
//   as: Tag = "div",
//   children,
//   className,
//   translateX = 0,
//   translateY = 0,
//   translateZ = 0,
//   rotateX = 0,
//   rotateY = 0,
//   rotateZ = 0,
//   ...rest
// }: {
//   as?: React.ElementType;
//   children: React.ReactNode;
//   className?: string;
//   translateX?: number | string;
//   translateY?: number | string;
//   translateZ?: number | string;
//   rotateX?: number | string;
//   rotateY?: number | string;
//   rotateZ?: number | string;
// }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const [isMouseEntered] = useMouseEnter();

//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseXSpring = useSpring(x);
//   const mouseYSpring = useSpring(y);

//   // Convert string values to numbers for useSpring
//   const rotateXNum = typeof rotateX === 'string' ? parseFloat(rotateX) : rotateX;
//   const rotateYNum = typeof rotateY === 'string' ? parseFloat(rotateY) : rotateY;
//   const rotateZNum = typeof rotateZ === 'string' ? parseFloat(rotateZ) : rotateZ;

//   const rotateXSpring = useSpring(rotateXNum);
//   const rotateYSpring = useSpring(rotateYNum);
//   const rotateZSpring = useSpring(rotateZNum);

//   const transform = useTransform(
//     [mouseXSpring, mouseYSpring, rotateXSpring, rotateYSpring, rotateZSpring],
//     (latestValues) => {
//       const [mouseX, mouseY, rotateX, rotateY, rotateZ] = latestValues;
//       return `translateX(${mouseX}px) translateY(${mouseY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
//     }
//   );

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!ref.current) return;
//     const rect = ref.current.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;
//     const xPct = mouseX / width - 0.5;
//     const yPct = mouseY / height - 0.5;
//     x.set(xPct * 10);
//     y.set(yPct * 10);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <Tag
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         transform,
//       }}
//       className={`w-fit ${className}`}
//       {...rest}
//     >
//       {children}
//     </Tag>
//   );
// };

// // Create a hook to use the context
// export const useMouseEnter = () => {
//   const context = useContext(MouseEnterContext);
//   if (context === undefined) {
//     throw new Error("useMouseEnter must be used within a MouseEnterProvider");
//   }
//   return context;
// };






import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
 
export const CardContainer = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["12.5deg", "-12.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-12.5deg", "12.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Get the mouse position relative to the card container
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate the mouse position as a fraction of the card's dimensions
    // where the center of the card is (0, 0)
    const xPct = (mouseX / width - 0.5);
    const yPct = (mouseY / height - 0.5);
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const CardBody = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "transform-style-3d relative h-full w-full rounded-xl p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
}) => {
  return (
    <motion.div
      className={cn("absolute", className)}
      style={{
        transform: `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
        transformStyle: "preserve-3d",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};