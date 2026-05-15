"use client";
import Hero from "@/components/Hero";
import WorksSection from "@/components/WorksSection";
import AboutSection from "@/components/AboutSection";

const Home = () => {
  return (
    <main className="flex flex-col font-sans">
      <Hero />
      <WorksSection />
      <AboutSection />
    </main>
  );
};

export default Home;
