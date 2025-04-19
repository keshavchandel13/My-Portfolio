import React from "react";
import TrueFocus from "../animation/TrueFocus";

const techs = [
  "React",
  "MongoDB",
  "Express",
  "Node.js",
  "JavaScript",
  "Python",
  "Flask",
  "HTML5/CSS",
  "Tailwind",
];

const TechStack = () => {
  return (
    // tech Stack section
    <div className="text-white py-8 px-4 lg:px-12">
      <h1 className="text-center text-6xl mb-10 font-semibold">
        <TrueFocus
          sentence="Tech Stack"
          manualMode={false}
          blurAmount={4}
          borderColor="cyan"
          animationDuration={1}
          pauseBetweenAnimations={1}
        />
      </h1>

      <div className="grid grid-cols-3 gap-2 lg:gap-6 font-medium font-serif">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-xl shadow-blue-500/30 text-center bg-gray-800 hover:bg-blue-500 hover:scale-105 transition-all duration-300 ease-in-out lg:p-8"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
