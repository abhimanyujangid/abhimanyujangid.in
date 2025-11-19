import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { useTheme } from "@/context/ThemeContext"; // Import useTheme hook
import { differenceInMonths, differenceInYears, parse } from "date-fns";
import designAleyLogo from "@/public/Experience/designingalley_logo.png";
import infinitechltd from "@/public/Experience/infinitechltd.png";
import trueResponse from "@/public/Experience/True_Response_Softech.png";
import Image from "next/image";

const calculateDuration = (startDate: string, endDate: string) => {
  const start = parse(startDate, "MMM yyyy", new Date());
  const end =
    endDate === "Present" ? new Date() : parse(endDate, "MMM yyyy", new Date());

  const years = differenceInYears(end, start);
  const months = (differenceInMonths(end, start) % 12) + 1;

  return `${years} yr${years !== 1 ? "s" : ""} ${months} mo${
    months !== 1 ? "s" : ""
  }`;
};

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "True Response Softech Pvt Ltd",
      logo: trueResponse, // Replace with actual logo
      position: "Senior MERN Developer (Part-time)",
      startDate: "Oct 2025",
      endDate: "Present",
      description: [
        "Contributing as a part-time Senior MERN Developer, leveraging prior discussions and strong industry experience.",
        "Leading development of scalable MERN-based modules, improving backend performance and frontend usability.",
        "Collaborating with the core engineering team to design REST APIs, optimize database queries, and enhance deployment workflows."
      ]
    },
    {
      id: 2,
      company: "Designing Alley, kota",
      logo: designAleyLogo,
      position: "Software Developer",
      startDate: "Jun 2024",
      endDate: "Present",
      
    },
    {
      id: 3,
      company: "Infini Application, Mauritius",
      logo: infinitechltd,
      position: "Developer and Tester Intern",
      startDate: "May 2024",
      endDate: "Jul 2024",
    },
    
  ];

  const { theme } = useTheme();

  return (
    <section>
      <h2 className="text-2xl font-semibold text-foreground mb-3 font-[family-name:var(--font-departure-mono)]">
        Experience
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-none lg:flex lg:flex-wrap mb-8">
        {experiences.map((experience) => (
          <Card
            key={experience.id}
            className={`rounded-2xl w-full lg:w-52 ${
              theme === "dark" && "bg-gray-600 border-gray-500"
            }`}
          >
            <CardHeader className="pb-0 text-sm">
              <Image
                src={experience.logo}
                alt={experience.company}
                className={`mb-2 w-10 h-10 object-contain ${
                  theme === "dark" &&
                  experience.company === "Designing Alley, kota" &&
                  "invert"
                }`}
              />
              <span
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-slate-600"
                }`}
              >
                {experience.company}
              </span>
            </CardHeader>
            <CardContent>
              <CardDescription
                className={`pb-1 text-base text-[0.9rem] font-semibold font-[family-name:var(--font-departure-mono)] ${
                  theme === "dark" ? "text-gray-100" : "text-zinc-700"
                }`}
              >
                {experience.position}
              </CardDescription>
              <CardDescription
                className={`pb-3 text-sm ${
                  theme === "dark" && "text-gray-300"
                }`}
              >
                {experience.startDate} - {experience.endDate} <br />{" "}
                {calculateDuration(experience.startDate, experience.endDate)}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
