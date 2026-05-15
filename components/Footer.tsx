"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for cursor
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Spring for the circle radius
  const radius = useSpring(0, { stiffness: 300, damping: 20 });

  useEffect(() => {
    if (isHovered) {
      const isMobile = window.innerWidth < 768;
      radius.set(isMobile ? 100 : 160);
    } else {
      radius.set(0);
    }
  }, [isHovered, radius]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY]);

  const smoothScroll = useSmoothScroll();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    smoothScroll(e, path);
  };

  const maskImage = useMotionTemplate`radial-gradient(circle ${radius}px at ${cursorX}px ${cursorY}px, black 100%, transparent 100%)`;

  return (
    <footer className="w-full bg-background pt-32 pb-12 flex flex-col justify-between min-h-[80vh] relative overflow-hidden">

      {/* Huge LET'S TALK Text with Interactive Spotlight */}
      <div
        ref={containerRef}
        className="w-full flex justify-center items-center relative py-20 cursor-pointer"
        onMouseEnter={(e) => {
          setIsHovered(true);
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            mouseX.set(x);
            mouseY.set(y);
            // Instantly snap the spring to the cursor so it doesn't fly in from top-left (0,0)
            if (typeof cursorX.jump === "function") cursorX.jump(x);
            if (typeof cursorY.jump === "function") cursorY.jump(y);
          }
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* BASE LAYER (Unmasked, Solid Black Text) */}
        <h1 className="text-[16vw] md:text-[18vw] font-medium leading-none tracking-[-0.06em] text-center text-primary relative z-10">
          LET&apos;S TALK
        </h1>

        {/* TOP LAYER (Masked) */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            WebkitMaskImage: maskImage,
            maskImage: maskImage,
          }}
        >
          {/* Solid Yellow Background inside the mask */}
          <div className="absolute inset-0 bg-[#FAFF00]" />

          {/* White Text perfectly overlaying the base text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-[16vw] md:text-[18vw] font-medium leading-none tracking-[-0.06em] text-center text-white">
              LET&apos;S TALK
            </h1>
          </div>

          {/* Rotating Smiley SVG following the cursor inside the mask */}
          <motion.div
            className="absolute left-0 top-0 flex items-center justify-center"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: "-50%",
              translateY: "-50%",
              width: "280px",
              height: "280px",
            }}
          >
            <motion.svg
              width="55%"
              height="55%"
              viewBox="0 0 100 100"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              {/* Eyes */}
              <circle cx="30" cy="35" r="8" fill="#111111" />
              <circle cx="70" cy="35" r="8" fill="#111111" />
              {/* Smile */}
              <path d="M 20 60 Q 50 90 80 60" stroke="#111111" strokeWidth="12" strokeLinecap="round" fill="transparent" />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Bottom Grid */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0">
        {/* Left Side Empty */}
        <div className="hidden md:block w-full"></div>

        {/* Right Side Links */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 text-sm md:text-base font-medium">
          {/* Navigation */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-primary/50 tracking-wide mb-2 uppercase">—— Navigation</h3>
            <Link href="#top" onClick={(e) => handleNavClick(e, "#top")} className="text-primary hover:text-primary/60 transition-colors">HOME</Link>
            <Link href="#about" onClick={(e) => handleNavClick(e, "#about")} className="text-primary hover:text-primary/60 transition-colors">ABOUT</Link>
            <Link href="#work" onClick={(e) => handleNavClick(e, "#work")} className="text-primary hover:text-primary/60 transition-colors">WORK</Link>
            <Link href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="text-primary hover:text-primary/60 transition-colors">CONTACT</Link>
          </div>

          {/* Socials */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-primary/50 tracking-wide mb-2 uppercase">—— Socials</h3>
            <a href="https://x.com/Abhimanyu2984" className="text-primary hover:text-primary/60 transition-colors">X / TWITTER</a>
            <a href="https://www.linkedin.com/in/abhimanyu-jangid-098a62216/" className="text-primary hover:text-primary/60 transition-colors">LINKEDIN</a>
            <a href="https://github.com/abhimanyujangid" className="text-primary hover:text-primary/60 transition-colors">GITHUB</a>
          </div>

          {/* Credits */}
          <div className="flex flex-col space-y-4 col-span-2 sm:col-span-1">
            <h3 className="text-primary/50 tracking-wide mb-2 uppercase">—— Credits</h3>
            <p className="text-primary/80">
              RAJASTHAN,<br />
              INDIA
            </p>
            <p className="text-primary/80 mt-4">
              ©{new Date().getFullYear()} ABHIMANYU<br />
              POWERED BY NEXT.JS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
