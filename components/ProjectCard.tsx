"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github,  } from "lucide-react";
import Image from "next/image";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden h-full bg-card hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="object-cover transition-transform duration-300 hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <CardHeader className="space-y-2">
        <CardTitle className="text-xl  font-semibold font-[family-name:var(--font-departure-mono)]">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs hover:bg-primary/10 hover:font-[family-name:var(--font-departure-mono)] cursor-pointer">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-sm line-clamp-3 font-[family-name:var(--font-departure-mono)]">
          {project.description}
        </CardDescription>
        <div className="flex gap-3">
          {project.liveUrl && (
            <Button variant="default" size="sm" className="flex-1 bg-primary/90 hover:bg-primary font-[family-name:var(--font-departure-mono)]" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" size="sm" className="flex-1 border border-primary text-primary hover:bg-primary/10 font-[family-name:var(--font-departure-mono)]" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}