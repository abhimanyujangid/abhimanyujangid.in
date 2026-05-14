"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedButton({ href, children, className = "" }: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <>
      <motion.div
        className="absolute inset-0 bg-[#555555] origin-bottom z-0"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      />

      <div className="relative z-10 overflow-hidden flex flex-col items-center justify-center h-full">
        {/* Initial Text */}
        <motion.span
          className="block whitespace-nowrap"
          initial={{ y: 0 }}
          animate={{ y: isHovered ? "-150%" : 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {children}
        </motion.span>

        {/* Hover Text */}
        <motion.span
          className="absolute block whitespace-nowrap"
          initial={{ y: "150%" }}
          animate={{ y: isHovered ? 0 : "150%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {children}
        </motion.span>
      </div>
    </>
  );

  const baseClasses = `relative overflow-hidden rounded-full bg-black px-8 py-3 text-[0.9rem] font-medium uppercase tracking-wide flex items-center justify-center border transition-colors duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] text-white ${
    isHovered ? "border-[#555555]" : "border-black"
  } ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={baseClasses}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={baseClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </button>
  );
}
