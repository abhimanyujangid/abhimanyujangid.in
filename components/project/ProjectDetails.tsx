"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <section id="project-details" className="relative w-full bg-background pt-24 pb-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 relative items-start">
        {/* Left Side: Overview & Tech Stack (Sticky) */}
        <div className="w-full md:w-1/3 md:sticky md:top-32 flex flex-col space-y-12 shrink-0">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest text-primary/50 mb-6 border-b border-primary/20 pb-4">
              Overview
            </h2>
            <p className="text-lg md:text-xl font-medium leading-relaxed text-primary">
              {project.overview}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest text-primary/50 mb-6 border-b border-primary/20 pb-4">
              Tech Stack
            </h2>
            <ul className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <li
                  key={index}
                  className="px-4 py-2 rounded-full border border-primary/20 text-sm font-medium text-primary bg-primary/5"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Image Gallery */}
        <div className="w-full md:w-2/3 flex flex-col space-y-12 md:space-y-24">
          {project.gallery.map((imgSrc, index) => (
            <div key={index} className="w-full relative aspect-[4/3] md:aspect-video rounded-xl overflow-hidden bg-primary/5 group">
              {/* For standard internal or next/image configured external URLs */}
              <Image
                src={imgSrc}
                alt={`${project.name} preview ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
