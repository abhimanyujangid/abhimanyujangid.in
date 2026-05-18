"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Loader } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../layout/Navbar";


export default function HeroMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current || !textRef.current) return;

    const getScrollAmount = () => {
      const textWidth = textRef.current!.scrollWidth;
      return -(textWidth - window.innerWidth);
    };

    const tween = gsap.to(textRef.current, {
      x: getScrollAmount,
      ease: "none"
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="h-screen w-full overflow-hidden flex flex-col justify-between pt-32 pb-8 bg-[#D7D6D3] relative">
      <Navbar />
      {/* Spacer for Navbar */}
      <div className="flex-1 flex flex-col justify-center">
        <div
          ref={textRef}
          className="flex items-center whitespace-nowrap uppercase tracking-[-0.06em] leading-[0.9] font-medium text-[clamp(6rem,15vw,11rem)] text-primary w-max px-6 md:px-12"
        >
          <span>HI </span>
          <div className="mx-2 md:mx-6 flex items-center justify-center">
            <Loader className="w-[clamp(4rem,10vw,12rem)] h-[clamp(4rem,10vw,12rem)] animate-[spin_10s_linear_infinite]" strokeWidth={1.5} />
          </div>
          <span>I&apos;M ABHIMANYU —</span>
          <span className="ml-8 md:ml-16">FULL STACK DEVELOPER,</span>
          <span className="ml-8 md:ml-16">

          </span>
          {/* Portrait Image Placeholder */}
          <div className="ml-8 md:ml-16 w-[clamp(5rem,13vw,14rem)] h-[clamp(4rem,11vw,12rem)] bg-[#111111] rounded-xl overflow-hidden shrink-0 transform -rotate-2 flex items-center justify-center">
            <span className="text-white text-xs tracking-normal font-normal">
              <Image src="images/profile.png" alt="Hero" width={200} height={200} className="-rotate-2 w-full h-full object-cover" />
            </span>
          </div>
          <span className="ml-8 md:ml-16 pr-[20vw]">
            AI AUTOMATION ENGINEER
          </span>
        </div>
      </div>

      {/* Bottom Info Section (Now inside the pinned screen) */}
      <div className="w-full flex flex-col px-6 md:px-12 lg:px-30 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 leading-[1.5] text-primary">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-md font-medium text-md"
          >
            Hi, I&apos;m Abhimanyu, a frontend developer crafting modern digital experiences that blend creativity with performance.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="max-w-md md:justify-self-end text-md"
          >
            Frontend Developer, UI/UX Designer, Creative Coder, Modern Web Experiences
          </motion.div>
        </div>

        {/* Footer of Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 flex justify-between items-end text-sm font-semibold uppercase tracking-wide text-primary"
        >
          <div className="flex items-center space-x-2">
          </div>
          <div className="flex items-center space-x-2 gap-2">
            <Loader className="w-5 h-5 animate-[spin_3s_linear_infinite]" strokeWidth={1.5} />
            <span>Abhimanyu Jangid</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
