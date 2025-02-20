"use client";

import { Badge } from "@/components/ui/badge";
import { JSX, useState } from "react";
// Skill icons
import { AiOutlineApi } from "react-icons/ai";
import {
  FaGitAlt,
  FaReact,
} from "react-icons/fa";
import {
  SiAppwrite,
  SiExpress,
  SiFoodpanda,
  SiMantine,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: JSX.Element;
  color?: string;
}

const SkillsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skillsList: Skill[] = [
    { name: "TypeScript", icon: <SiTypescript />, color: "#007ACC" },
    { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Redux toolkit", icon: <SiRedux />, color: "#764ABC" },
    { name: "RESTful APIs", icon: <AiOutlineApi />, color: "#009688" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "AppWrite", icon: <SiAppwrite />, color: "#00B0D8" },
    { name: "Zustand", icon: <SiFoodpanda />, color: "#996633" },
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
