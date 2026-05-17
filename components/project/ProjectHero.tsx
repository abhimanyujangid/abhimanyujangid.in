"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const handleScroll = () => {
    const detailsSection = document.getElementById("project-details");
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen bg-background flex flex-col items-center justify-center overflow-hidden">
      {/* Center Content: Logo and Name */}
      <div className="flex flex-col items-center justify-center z-10 space-y-6">
        <div className="w-32 h-32 md:w-48 md:h-48 relative flex items-center justify-center">
          {project.logo ? (
            <Image
              src={project.logo}
              alt={`${project.name} Logo`}
              fill
              className="object-contain"
            />
          ) : (
            // Default Logo Block if no logo is provided
            <div className="w-full h-full border-4 border-primary flex items-center justify-center rounded-xl bg-primary/5">
              <span className="text-4xl md:text-6xl font-bold text-primary tracking-tighter">
                {project.name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <h1 className="text-[clamp(5rem,12vw,14rem)] font-medium leading-[0.9] tracking-[-0.06em] uppercase text-primary text-center">
          {project.name}
        </h1>
      </div>

      {/* Bottom Left: Scroll Down */}
      <div className="absolute bottom-10 left-6 md:left-12 flex items-center space-x-4 cursor-pointer group z-20" onClick={handleScroll}>
        <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary group-hover:text-background transition-colors"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
        <span className="text-sm md:text-base font-medium text-primary uppercase tracking-widest group-hover:opacity-70 transition-opacity">
          Scroll Down
        </span>
      </div>

      {/* Bottom Right: Links */}
      <div className="absolute bottom-10 right-6 md:right-12 flex items-center space-x-6 z-20">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-primary hover:opacity-70 transition-opacity"
            title="View Source on GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        )}
        {project.deploy && (
          <a
            href={project.deploy}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-primary hover:opacity-70 transition-opacity"
            title="View Live Site"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" x2="21" y1="14" y2="3" />
            </svg>
          </a>
        )}
      </div>
    </section>
  );
}
