"use client";

import { Badge } from "@/components/ui/badge";
import { JSX, useState } from "react";
// Skill icons
import {
  FaGitAlt,
  FaReact,
} from "react-icons/fa";
import { LuImage } from "react-icons/lu";
import {
  SiCloudinary,
  SiMantine,
  SiMui,
  SiShadcnui,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: JSX.Element;
  color?: string;
}

const LibrarieSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skillsList: Skill[] = [
    { name: "MantineUi", icon: <SiMantine />, color: "#61DAFB" },
    { name: "ShadcnUi", icon: <SiShadcnui /> },
    { name: "Material-UI", icon: <SiMui />, color: "#61DAFB" },
    { name: "Cloudinary", icon: <SiCloudinary />, color: "#003399" },
    { name: "Imagekit", icon: <LuImage />, color: "#0066cc" },
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold text-left mb-3 font-[family-name:var(--font-departure-mono)]">
      Media Management & UI Libraries
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

export default LibrarieSection;
