"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold text-left mb-3 font-[family-name:var(--font-departure-mono)]">
        About Me
      </h2>
      <div className="pr-4">
        <p
          className={`text-base text-left md:text-justify mb-2 ${
            !isExpanded ? "line-clamp-4" : ""
          }`}
        >
          Hey there! I&apos;m a full-stack developer at  
          <span className="font-[family-name:var(--font-departure-mono)] mx-2">
          Designing Alley
          </span>, specializing in frontend development with MUI and backend development focused on authentication and delivery system integration. I love building scalable applications and solving real-world problems with clean and efficient code.
        </p>
        {isExpanded && (
          <>
            <p className="text-base text-left md:text-justify mb-2">
              Currently, I&apos;m working on a 3D printing platform, integrating FedEx APIs and implementing microservices to optimize performance. My stack includes Next.js, Three.js for STL file visualization, Redux Toolkit for state management, and MongoDB aggregation pipelines for better data handling.
            </p>
            <p className="text-base text-left md:text-justify mb-2">
              I&apos;ve also worked on schema design for delivery systems, FedEx API integrations, and optimizing business workflows. My experience includes an internship in
               <span className="font-[family-name:var(--font-departure-mono)] mx-2">
              Infini Application, Mauritius
          </span>, where I contributed to CMS testing and development using the MERN stack, enhancing functionality and user experience.
            </p>
          </>
        )}
        <Button
          onClick={toggleExpand}
          variant="link"
          className="p-0 mb-2 text-blue-500"
        >
          {isExpanded ? "Read less" : "Read more"}
        </Button>
      </div>
    </section>
  );
};

export default AboutSection;