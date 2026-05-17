"use client";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Footer from "@/components/Footer";
import WorksSection from "@/components/sections/WorksSection";

const Home = () => {
  return (
    <main className="flex flex-col font-sans">
      <Hero />
      <WorksSection />
      <AboutSection />
      <ExperienceSection />
      <Footer />
    </main>
  );
};

export default Home;
