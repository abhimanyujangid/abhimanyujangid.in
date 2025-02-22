"use client";

import "swiper/css";
import "swiper/css/effect-cards";
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
      image: "images/portfolio.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Vercel"],
      liveUrl: "https://abhimanyujangid-in.vercel.app/",
      githubUrl: "https://github.com/abhimanyujangid/abhimanyujangid.in"
    },
    {
      id: 2,
      title: "Reels Pro",
      description: "A comprehensive dashboard for managing online store operations, including inventory and sales analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      liveUrl: "https://dashboard-example.com",
      githubUrl: "https://github.com/example/dashboard"
    },
    {
      id: 3,
     title: "Backendproject_MERN",
      description: "A learning project focused on authentication, file handling, JWT, Cloudinary, Multer, database design, and MongoDB aggregation pipeline.",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*abBZXJw9ocX8n7XO",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Multer", "Mongoose", "Aggregation"],
      githubUrl: "https://github.com/abhimanyujangid/backendproject_MERN"
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
      <CarouselItem key={project.id} className="sm:basic-1/2 lg:basis-1/2">
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
