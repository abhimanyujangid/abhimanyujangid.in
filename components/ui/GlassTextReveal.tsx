"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassTextRevealProps {
  baseText: string;
  revealText: string;
  className?: string;
}

export default function GlassTextReveal({ baseText, revealText, className }: GlassTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // 48px is 3rem (half of our 6rem cursor width/height)
  const maskImage = useMotionTemplate`radial-gradient(48px circle at ${smoothX}px ${smoothY}px, black 80%, transparent 100%)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("relative cursor-none py-2 px-2 -mx-2 -my-2 overflow-hidden", className)}
    >
      {/* Base Text Layer */}
      <div className="relative z-10 text-primary">
        {baseText}
      </div>

      {/* Glass Circular Cursor */}
      <motion.div
        className="absolute top-0 left-0 w-[6rem] h-[6rem] rounded-full border border-primary/20 bg-background/40 backdrop-blur-md pointer-events-none z-[15] shadow-sm"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHovered ? 1 : 0,
        }}
        animate={{
          scale: isHovered ? 1 : 0.5,
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 25 },
          opacity: { duration: 0.2 }
        }}
      />

      {/* Reveal Text Layer (Masked, above the glass cursor) */}
      <motion.div
        className="absolute top-2 left-2 right-2 bottom-2 z-20 text-primary pointer-events-none"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
          opacity: isHovered ? 1 : 0,
        }}
      >
        {revealText}
      </motion.div>
    </div>
  );
}
