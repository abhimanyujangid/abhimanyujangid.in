import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import ProjectSection from "@/components/project-section";
import OpenSourceSection from "@/components/opensource-section";
import SkillsSection from "@/components/skills-section";
import SocialSection from "@/components/social-section";
import LibrarieSection from "./Librarie-section";

const BodySection = () => {
  return (
    <section className="px-6 py-4 lg:mt-8 xl:mt-10">
      <AboutSection />
      <SkillsSection />
      <LibrarieSection />
      <ExperienceSection />
      <OpenSourceSection />
      <SocialSection />
      <ProjectSection />
    </section>
  );
};

export default BodySection;
