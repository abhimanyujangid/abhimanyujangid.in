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
      Hey there! I&apos;m a full-stack developer currently working at 
      <span className="font-[family-name:var(--font-departure-mono)] mx-2">
        Designing Alley
      </span> 
      and also contributing as a part-time 
      <span className="font-[family-name:var(--font-departure-mono)] mx-2">
        Senior MERN Developer at True Response Softech.
      </span>
      I specialize in building scalable systems, leading microservice development, 
      and designing efficient backend architectures using Node.js, NestJS, and modern 
      database technologies.
    </p>

    {isExpanded && (
      <>
        <p className="text-base text-left md:text-justify mb-2">
          My experience spans building production-grade applications with 
          <span className="mx-1 font-[family-name:var(--font-departure-mono)]">
            Next.js, React, MongoDB, PostgreSQL, and Docker
          </span>.
          I&apos;ve developed 3D model viewers with Three.js, implemented TCP and gRPC 
          microservices within an Nx monorepo, optimized database schemas, and 
          built secure data pipelines using the MongoDB Aggregation Framework.
        </p>

        <p className="text-base text-left md:text-justify mb-2">
          On the backend side, I work heavily with authentication flows, secure 
          API design, deployment pipelines, microservice orchestration, and production 
          operations using 
          <span className="font-[family-name:var(--font-departure-mono)] mx-1">
            Nginx, PM2, and Docker.
          </span>
          I’ve also implemented payment gateways (Razorpay & Stripe), real-time 
          communication with WebSockets, and automated workflows using cron jobs.
        </p>

        <p className="text-base text-left md:text-justify mb-2">
          Previously, I worked at 
          <span className="font-[family-name:var(--font-departure-mono)] mx-2">
            Infini Applications, Mauritius
          </span>
          as a MERN stack intern, where I contributed to CMS development, 
          improved feature workflows, and strengthened UI/UX consistency.
          I love solving real-world problems, optimizing system performance, 
          and turning complex technical challenges into clean, maintainable solutions.
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