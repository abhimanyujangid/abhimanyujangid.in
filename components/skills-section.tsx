"use client";

import { Badge } from "@/components/ui/badge";
import { JSX, useState } from "react";
// Skill icons
import { AiOutlineApi } from "react-icons/ai";
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaNode,
  FaReact,
  FaServer,
} from "react-icons/fa";
import {
  SiAppwrite,
  SiAwslambda,
  SiAmazons3,
  SiExpress,
  SiMongodb,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiPrisma,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import { BsFiletypeJs } from "react-icons/bs";
import { TbBrandReactNative } from "react-icons/tb";

interface Skill {
  name: string;
  icon: JSX.Element;
  color?: string;
}

const SkillsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skillsList: Skill[] = [
    // Languages
    { name: "TypeScript", icon: <SiTypescript />, color: "#007ACC" },
    
    // Frontend
    { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC" },
    { name: "Material UI", icon: <SiMui />, color: "#007FFF" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "React Query", icon: <TbBrandReactNative />, color: "#FF4154" },
    { name: "Zod", icon: <SiZod />, color: "#3E67B1" },
    
    // Backend
    { name: "Node.js", icon: <FaNode />, color: "#339933" },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Nest.js", icon: <SiNestjs />, color: "#E0234E" },
    { name: "WebSockets", icon: <SiSocketdotio /> },
    { name: "RESTful APIs", icon: <AiOutlineApi />, color: "#009688" },
    { name: "Multer", icon: <BsFiletypeJs />, color: "#F7DF1E" },
    
    // Databases & ORM
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
    { name: "Prisma", icon: <SiPrisma />, color: "#2D3748" },
    
    // Cloud & DevOps
    { name: "AWS", icon: <FaAws />, color: "#FF9900" },
    { name: "AWS Lambda", icon: <SiAwslambda />, color: "#FF9900" },
    { name: "AWS S3", icon: <SiAmazons3 />, color: "#569A31" },
    { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
    { name: "Nginx", icon: <SiNginx />, color: "#009639" },
    { name: "VPS", icon: <FaServer />, color: "#0080FF" },
    { name: "AppWrite", icon: <SiAppwrite />, color: "#F02E65" },
    
    // Version Control
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold text-left mb-3 font-[family-name:var(--font-departure-mono)]">
        Skills
      </h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {skillsList.map((skill, index) => (
          <Badge
            key={index}
            variant={hoveredIndex === index ? "secondary" : "outline"}
            className="rounded-full font-normal text-sm cursor-pointer flex items-center gap-2 transition-colors duration-200"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span
              style={{
                color: hoveredIndex === index ? skill.color : "inherit",
              }}
              className="transition-colors duration-200"
            >
              {skill.icon}
            </span>
            {skill.name}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
