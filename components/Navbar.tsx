"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Loader, Menu, X } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "WORK", path: "/work" },
];

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                  onClick={() => setIsMobileMenuOpen(false)}
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
