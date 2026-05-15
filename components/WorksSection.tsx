"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function WorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !textRef.current || !projectsRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%", // Pins the section for 1.5x viewport height worth of scrolling
        pin: true,
        scrub: 1,
      }
    });

    // 1. Fade the "WORKS" text to a lighter color (opacity 0.05) and scale slightly
    tl.to(textRef.current, {
      opacity: 0.05,
      scale: 0.9,
      duration: 1,
      ease: "power2.inOut"
    }, 0);

    // 2. Bring up the simple project list from the bottom
    tl.fromTo(projectsRef.current, {
      y: "100%",
      opacity: 0
    }, {
      y: "0%",
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, 0.2);

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="h-screen w-full relative overflow-hidden bg-background flex flex-col items-center justify-center"
    >
      {/* Massive Centered WORKS Text */}
      <div
        ref={textContainerRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
      >
        <div className="flex items-start">
          <h1
            ref={textRef}
            className="text-[20vw] md:text-[22vw] font-medium leading-none text-primary uppercase tracking-[-0.06em]"
          >
            Works
          </h1>
          <span className="mt-[2vw] md:mt-[3vw] ml-4 md:ml-8 text-sm md:text-xl font-medium text-primary">
            ©23 — {currentYear}
          </span>
        </div>
      </div>

      {/* Projects List (Initially hidden and pushed down by GSAP) */}
      <div
        ref={projectsRef}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full pt-32"
      >
        <div className="flex flex-col gap-0 w-full max-w-5xl mx-auto">
          {[
            { id: "01", name: "E-Commerce Experience", year: "2024" },
            { id: "02", name: "Fintech Dashboard UI", year: "2023" },
            { id: "03", name: "Creative Agency Portfolio", year: "2022" },
            { id: "04", name: "Web3 Interactive Platform", year: "2021" },
          ].map((project, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between border-b border-primary/20 py-8 group cursor-pointer"
            >
              <div className="flex items-center gap-6 md:gap-12">
                <span className="text-sm md:text-lg font-medium text-primary/40 group-hover:text-primary transition-colors">
                  {project.id}
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary transition-transform duration-500 group-hover:translate-x-4">
                  {project.name}
                </h2>
              </div>
              <div className="text-sm md:text-lg font-medium text-primary/50">
                {project.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
