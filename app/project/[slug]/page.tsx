import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Footer from "@/components/Footer";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectDetails from "@/components/project/ProjectDetails";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Next.js 15+ compatible approach, but this works generally
export default async function ProjectPage({ params }: ProjectPageProps) {
  // Wait for params in next 15 if needed, or simply access slug
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <main className="flex flex-col font-sans bg-background">
      <ProjectHero project={project} />
      <ProjectDetails project={project} />
      <Footer />
    </main>
  );
}

// For static generation
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
