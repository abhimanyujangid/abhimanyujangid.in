"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

const defaultTitles = [
  "Backend Developer",
  "Scalable Backend Systems",
  "API & Microservices Developer",
  "Performance-Driven Architecture",
  "Database & Server Solutions",
  "Real-Time Backend Applications",
  "Cloud & System Integration",
  "Secure Authentication Systems",
];

export default function CursorSpotlightText({ titles = defaultTitles }: { titles?: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for tracking
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const maskImage = useMotionTemplate`radial-gradient(120px circle at ${smoothX}px ${smoothY}px, black 15%, transparent 100%)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full overflow-hidden bg-background cursor-none"
    >
      {/* Background muted text layer */}
      <div className="relative z-10 w-full mx-auto flex flex-col items-center justify-center gap-4 md:gap-6 text-center select-none px-4 py-24 md:py-32">
        {titles.map((title, i) => (
          <h2
            key={i}
            className="text-4xl md:text-6xl lg:text-7xl font-medium uppercase tracking-[-0.04em] md:tracking-[-0.06em] leading-[0.9] text-primary/10"
          >
            {title}
          </h2>
        ))}
      </div>

      {/* Foreground glowing text layer (Masked) */}
      <motion.div
        className="absolute inset-0 z-20 w-full mx-auto flex flex-col items-center justify-center gap-4 md:gap-6 text-center select-none pointer-events-none px-4 py-24 md:py-32"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
      >
        {titles.map((title, i) => (
          <h2
            key={i}
            className="text-4xl md:text-6xl lg:text-7xl font-medium uppercase tracking-[-0.04em] md:tracking-[-0.06em] leading-[0.9] text-primary"
          >
            {title}
          </h2>
        ))}
      </motion.div>

      {/* Custom Circular Cursor Glow */}
      <motion.div
        className="absolute top-0 left-0 w-[4rem] h-[4rem] rounded-full border border-primary/30 bg-primary/5 backdrop-blur-[2px] pointer-events-none z-30 mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHovered ? 1 : 0,
        }}
        animate={{
          scale: isHovered ? 1 : 0,
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 25 },
          opacity: { duration: 0.2 }
        }}
      />
    </div>
  );
}
