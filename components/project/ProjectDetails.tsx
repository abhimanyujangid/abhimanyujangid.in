"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <section id="project-details" className="relative w-full bg-background pt-24 pb-32">
      <div className="w-[min(92%,1600px)] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative items-start">
        {/* Left Side: Overview & Tech Stack (Sticky) */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col space-y-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-primary"></span>
              <h2 className="text-[0.95rem] font-medium uppercase tracking-[-0.02em] text-primary">
                Overview
              </h2>
            </div>
            <p className="text-[1.1rem] leading-[1.5] font-normal text-primary">
              {project.overview}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-primary"></span>
              <h2 className="text-[0.95rem] font-medium uppercase tracking-[-0.02em] text-primary">
                Tech Stack
              </h2>
            </div>
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
        <div className="lg:col-span-8 flex flex-col space-y-12 lg:space-y-24">
          {project.gallery.map((imgSrc, index) => (
            <div key={index} className="w-full relative aspect-[4/3] md:aspect-video rounded-xl overflow-hidden bg-primary/5 group">
              {/* For standard internal or next/image configured external URLs */}
              <Image
                src={imgSrc}
                alt={`${project.name} preview ${index + 1}`}
                fill
                className=" group-hover:scale-101 transition-transform duration-700 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
