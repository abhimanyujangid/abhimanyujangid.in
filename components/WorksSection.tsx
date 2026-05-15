"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function WorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null); // changed to DivElement so it wraps both texts

  const currentYear = new Date().getFullYear().toString().slice(-2);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!containerRef.current || !textRef.current) return;

    // Fade the entire "WORKS" text wrapper as we scroll down.
    gsap.to(textRef.current, {
      opacity: 0.05,
      scale: 0.95,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", // When WorksSection hits top of viewport
        end: "+=100%", // Fade out over the first 100vh of scrolling
        scrub: true,
      }
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-background min-h-screen"
    >
      {/* Pinned WORKS Text Background (using CSS sticky for natural scrolling) */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none z-10 overflow-hidden">
        <div ref={textRef} className="flex items-start">
          <h1 className="text-[20vw] md:text-[22vw] font-medium leading-none text-primary uppercase tracking-[-0.06em]">
            Works
          </h1>
          <span className="mt-[2vw] md:mt-[3vw] ml-4 md:ml-8 text-sm md:text-xl font-medium text-primary">
            ©22 — {currentYear}
          </span>
        </div>
      </div>

      {/* Projects List (Scrolls naturally over the pinned background) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center pb-32">
        {/* Spacer so the first project appears after scrolling past the giant text */}
        <div className="h-[70vh] w-full pointer-events-none" /> 
        
        <div className="flex flex-col gap-0 w-full max-w-5xl mx-auto">
          {[
            { id: "01", name: "E-Commerce Experience", year: "2024" },
            { id: "02", name: "Fintech Dashboard UI", year: "2023" },
            { id: "03", name: "Creative Agency Portfolio", year: "2022" },
            { id: "04", name: "Web3 Interactive Platform", year: "2021" },
          ].map((project, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-between border-b border-primary/20 py-12 group cursor-pointer"
            >
              <div className="flex items-center gap-6 md:gap-12">
                <span className="text-sm md:text-lg font-medium text-primary/40 group-hover:text-primary transition-colors">
                  {project.id}
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tight text-primary transition-transform duration-500 group-hover:translate-x-4">
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
