"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Loader, Menu, X } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "#about" },
  { name: "WORK", path: "#work" },
];

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const targetId = path.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1500; // 1.5 seconds for a nice slow cinematic scroll
        let start: number | null = null;

        const animation = (currentTime: number) => {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const progress = Math.min(timeElapsed / duration, 1);
          
          // Easing function (ease-in-out cubic) for a buttery smooth stop
          const ease = progress < 0.5 
            ? 4 * progress * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

          window.scrollTo(0, startPosition + distance * ease);

          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          }
        };

        requestAnimationFrame(animation);
      }
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      {/* Main Navbar */}
      <div className="relative z-20 px-6 py-6 md:px-12 flex items-center justify-between w-full bg-[#D7D6D3] md:bg-transparent">
        {/* Left Logo */}
        <div className="flex items-center w-1/2">
          <Link href="/" aria-label="Home">
            <Loader className="w-8 h-8 text-primary animate-[spin_3s_linear_infinite]" strokeWidth={2} />
          </Link>
        </div>

        {/* Right Content */}
        <div className="flex w-1/2 items-center justify-end md:justify-between">
          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative flex items-center text-[0.95rem] font-semibold uppercase tracking-tight text-primary h-8"
              >
                <motion.div
                  layout
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    width: hoveredLink === link.name ? "auto" : 0,
                    opacity: hoveredLink === link.name ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                  className="overflow-hidden flex items-center"
                >
                  <span className="pr-2 ">&rarr;</span>
                </motion.div>
                <motion.span layout transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}>
                  {link.name}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Right CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <AnimatedButton href="mailto:[abhimanyujangid79@gmail.com]">Mail Me</AnimatedButton>

            <button
              className="md:hidden text-primary focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-full left-0 w-full bg-[#C9C7C3] overflow-hidden md:hidden z-10 border-t border-[#D8D5D1]/50 shadow-sm"
          >
            <div className="px-6 py-4 flex flex-col space-y-4 pb-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className="text-xs font-bold uppercase tracking-wide text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
