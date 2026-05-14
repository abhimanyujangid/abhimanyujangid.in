"use client";

import { useTheme } from "@/context/ThemeContext";

import Hero from "@/components/Hero";

const Home = () => {
  const { theme } = useTheme();

  return (
    <main className="flex flex-col font-sans">
      <Hero />
    </main>
  );
};

export default Home;
