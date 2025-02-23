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
      description: "The project understanding ImageKit and how large applications handle media processing. Users can upload videos with progress tracking.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      technologies: ["Next.js", "Next-Auth", "Mongoose", "ImageKit", "DaisyUI","Bcryptjs"],
      githubUrl: "https://github.com/abhimanyujangid/reelspro"
    },    
    {
      id: 3,
     title: "Backendproject_MERN",
      description: "A learning project focused on authentication, file handling, JWT, Cloudinary, Multer, database design, and MongoDB aggregation pipeline.",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*abBZXJw9ocX8n7XO",
      technologies: ["Node.js", "server", "MongoDB", "JWT", "Cloudinary", "Multer", "Mongoose", "Aggregation"],
      githubUrl: "https://github.com/abhimanyujangid/backendproject_MERN"
    },    
    {
      id: 4,
      title: "Stackoverflow clone",
      description: "A stackover flow inspired project using Next.js and Appwrite. And also using Zustand for state management and ShadcnUI for design.",
      image: "images/StackFlow.png",
      technologies: ["Next.js", "zustand", "AppWrite", "ShadcnUI", "MagicUI", "TailwindCSS"],
      liveUrl: "https://dashboard-example.com",
      githubUrl: "https://github.com/abhimanyujangid/qna_system"
    }
  ];
  return (
    <section className="overflow-hidden ">
      <h2 className="text-2xl font-semibold text-left mb-4 font-[family-name:var(--font-departure-mono)]">
      Projects
      </h2>
      <div className="">
     <Carousel
     opts={{
      align: "start",
    }}
      className="w-full max-w-4xl  mx-auto" 
      >
      <CarouselPrevious className="cursor-pointer"/>
      <CarouselContent>
      {projects.map((project) => (
      <CarouselItem key={project.id} className="sm:basic-1/2 lg:basis-1/2">
        <ProjectCard project={project} />
      </CarouselItem>
      ))}
      </CarouselContent>
      <CarouselNext className="cursor-pointer" />
      </Carousel>
      </div>
    </section>
  );
};

export default ProjectSection;
