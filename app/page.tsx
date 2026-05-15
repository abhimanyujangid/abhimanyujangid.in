"use client";
import Hero from "@/components/Hero";
import WorksSection from "@/components/WorksSection";

const Home = () => {
  return (
    <main className="flex flex-col font-sans">
      <Hero />
      <WorksSection />
    </main>
  );
};

export default Home;
