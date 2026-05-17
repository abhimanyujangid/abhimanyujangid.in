"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectRowProps {
  id: string;
  name: string;
  slug: string;
  year: string;
  image: string;
  link?: string;
}

export default function ProjectRow({ id, name, slug, year, image, link }: ProjectRowProps) {
  const [isHovered, setIsHovered] = useState(false);

  const innerContent = (
    <>
      {/* Text Layer */}
      <div className="flex items-center gap-6 md:gap-12 relative z-10">
        <span className="text-sm md:text-lg font-medium text-primary/40 group-hover:text-primary transition-colors">
          {id}
        </span>
        <motion.h2
          animate={{ x: isHovered ? 16 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, mass: 1 }}
          className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tight text-primary"
        >
          {name}
        </motion.h2>
      </div>
      <div className="text-sm md:text-lg font-medium text-primary/50 relative z-10">
        {year}
      </div>

      {/* Hover Image Reveal */}
      <motion.div
        initial={false}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.75,
          rotate: isHovered ? 10 : 0
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15, mass: 1.2 }}
        className="absolute -right-[10%] top-1/2 w-48 h-32 md:w-80 md:h-56 rounded-xl overflow-hidden pointer-events-none z-[999] shadow-2xl origin-center"
        style={{ y: "-50%" }} // Fixes centering with Framer Motion transforms
      >
        <Image src={image} alt={name} width={400} height={300} className="w-full h-full  " />
      </motion.div>
    </>
  );

  const containerClasses = "relative flex items-center justify-between border-b border-primary/20 py-12 group cursor-pointer w-full block";

  return (
    <Link
      href={`/project/${slug}`}
      className={containerClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {innerContent}
    </Link>
  );
}
