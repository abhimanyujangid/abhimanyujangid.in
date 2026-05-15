import React from "react";

const experiences = [
  {
    role: "Software Developer",
    company: "Designing Alley (Remote)",
    date: "Jun 2024 — Present",
    url: "https://designingalley.com"
  },
  {
    role: "Full Stack Developer",
    company: "Infini Application",
    date: "May 2024 — Jul 2024",
    url: "https://www.linkedin.com/company/infinitechltd/"
  },
];

export default function ExperienceSection() {
  return (
    <section className="w-full min-h-screen bg-background px-6 md:px-12 py-24 flex items-center">
      <div className="w-full flex flex-col md:flex-row gap-12 md:gap-0">
        {/* Left Side */}
        <div className="w-full md:w-1/4 lg:w-1/3">
          <p className="text-sm md:text-base font-medium tracking-wide text-primary">
            —— EXPERIENCE
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col">
          {experiences.map((exp, idx) => (
            <a
              key={idx}
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 py-6 md:py-8 border-primary/20 ${idx === 0 ? 'border-t border-b' : 'border-b'} group cursor-pointer hover:bg-primary/5 transition-colors duration-300`}
            >
              <div className="font-medium text-base md:text-lg lg:text-xl text-primary transition-transform duration-300 group-hover:translate-x-2">
                {exp.role}
              </div>
              <div className="font-medium text-base md:text-lg lg:text-xl text-primary/80">
                {exp.company}
              </div>
              <div className="font-medium text-base md:text-lg lg:text-xl text-primary/80 md:text-right">
                {exp.date}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
