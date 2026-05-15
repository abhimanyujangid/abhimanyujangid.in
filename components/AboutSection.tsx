"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const text = "Abhimanyu blends creativity and logic to build modern digital experiences. Always exploring new ideas, crafting interactive interfaces, and experimenting with technology and design.";
export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    // Animate the opacity of the solid-colored foreground words
    gsap.to(wordsRef.current, {
      opacity: 1,
      stagger: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-[200vh] bg-background">
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20 md:py-0 gap-12 overflow-hidden">

        {/* Left Side: Text Reveal */}
        <div className="w-full md:w-[55%] flex flex-col justify-center h-full pt-12 md:pt-0">
          <p className="text-sm md:text-base font-medium tracking-wide mb-8 text-primary/70">
            —— FULL-STACK DEVELOPER
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.1] flex flex-wrap">
            {text.split(" ").map((word, i) => (
              <span key={i} className="relative inline-block mr-[0.25em] mb-[0.1em]">
                {/* The faded background word */}
                <span className="text-primary/20">{word}</span>
                {/* The solid foreground word that gets revealed by GSAP */}
                <span
                  ref={(el) => { wordsRef.current[i] = el; }}
                  className="text-primary absolute left-0 top-0 opacity-0"
                >
                  {word}
                </span>
              </span>
            ))}
          </h2>
          <p className="mt-12 text-3xl md:text-5xl font-medium tracking-widest text-primary/60">
            こんにちは ッ
          </p>
        </div>

        {/* Right Side: Fixed Image */}
        <div className="w-full md:w-[40%] h-[40vh] md:h-[75vh] relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/images/profile.png"
            onError={(e) => {
              // Fallback to a stunning Unsplash portrait if profile.jpg doesn't exist
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=2000&auto=format&fit=crop";
            }}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
