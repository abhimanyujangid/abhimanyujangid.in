import HeroImage from "@/components/hero-image";
import { RoughNotation } from "react-rough-notation";

const HeroSection = () => {
  return (
    <main className="flex flex-col gap-6 items-center sm:items-start pl-0 sm:px-14 md:pl-20 grow">
      <div className="mt-16">
        <HeroImage />
      </div>
      <h1 className="text-4xl xl:text-5xl font-bold">Abhimanyu Jangid</h1>
      <ol className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-departure-mono)]">
        <li className="mb-2">
          I work on all things{" "}
          <RoughNotation
            type="highlight"
            color="#df8c4a"
            animationDelay={150}
            show
          >
            Software Developer
          </RoughNotation>{" "}
          at <br className="block md:hidden" />
          Designing Alley
        </li>
        <li className="mb-2">Truly love working on Web</li>
      </ol>
    </main>
  );
};

export default HeroSection;
