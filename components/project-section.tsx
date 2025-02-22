"use client";

import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { ProjectCard } from "./ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern portfolio website built with Next.js and Tailwind CSS, featuring responsive design and smooth animations.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/portfolio"
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      description: "A comprehensive dashboard for managing online store operations, including inventory and sales analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      liveUrl: "https://dashboard-example.com",
      githubUrl: "https://github.com/example/dashboard"
    },
    {
      id: 3,
      title: "thired",
      description: "A comprehensive dashboard for managing online store operations, including inventory and sales analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      liveUrl: "https://dashboard-example.com",
      githubUrl: "https://github.com/example/dashboard"
    },
    {
      id: 4,
      title: "4h",
      description: "A comprehensive dashboard for managing online store operations, including inventory and sales analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      liveUrl: "https://dashboard-example.com",
      githubUrl: "https://github.com/example/dashboard"
    }
  ];
  return (
    <section className="overflow-hidden">
      <h2 className="text-2xl font-semibold text-left mb-4 font-[family-name:var(--font-departure-mono)]">
      Projects
      </h2>
      <Carousel
     opts={{
      align: "start",
    }}
      className="w-full max-w-4xl mx-auto" 
      >
      <CarouselPrevious />
      <CarouselContent>
      {projects.map((project) => (
      <CarouselItem key={project.id} className="sm:basic-1/2 lg:basis-1/3">
        <ProjectCard project={project} />
      </CarouselItem>
      ))}
      </CarouselContent>
      <CarouselNext />
      </Carousel>
    </section>
  );
};

export default ProjectSection;
