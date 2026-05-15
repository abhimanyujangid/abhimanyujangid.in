"use client";
import Hero from "@/components/Hero";
import WorksSection from "@/components/WorksSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

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
