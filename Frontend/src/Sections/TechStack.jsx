import React from "react";
import TrueFocus from "../animation/TrueFocus";
import {
  FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt,
  FaGithub, FaBootstrap
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiFlask
} from "react-icons/si";

const techs = [
  { skill: "React", icon: <FaReact color="#61DBFB" size={32} />, style: "" },
  { skill: "MongoDB", icon: <SiMongodb color="#47A248" size={32} />, style: "" },
  { skill: "Express", icon: <SiExpress color="#fff" size={32} />, style: "bg-black" },
  { skill: "Node.js", icon: <FaNodeJs color="#3C873A" size={32} />, style: "" },
  { skill: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={32} />, style: "" },
  { skill: "Python", icon: <FaPython color="#3776AB" size={32} />, style: "" },
  { skill: "Flask", icon: <SiFlask color="#000" size={32} />, style: "" },
  { skill: "HTML5", icon: <FaHtml5 color="#E34F26" size={32} />, style: "" },
  { skill: "CSS3", icon: <FaCss3Alt color="#1572B6" size={32} />, style: "" },
  { skill: "Tailwind", icon: <SiTailwindcss color="#38BDF8" size={32} />, style: "" },
  { skill: "Github", icon: <FaGithub size={32} />, style: "" },
  { skill: "Bootstrap", icon: <FaBootstrap color="#563d7c" size={32} />, style: "" },
];

const TechStack = () => {
  return (
    <div className="text-white py-6 px-3 lg:px-8">
      <h1 className="text-center text-4xl mb-12 font-semibold">
        <TrueFocus
          sentence="Tech Stack"
          manualMode={false}
          blurAmount={4}
          borderColor="cyan"
          animationDuration={1}
          pauseBetweenAnimations={1}
        />
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-4 font-medium font-serif text-sm">
        {techs.map((tech, index) => (
          <div
            key={index}
            className={`border p-3 rounded-lg shadow-md shadow-blue-500/20 text-center bg-gray-800 hover:bg-blue-500 hover:scale-105 transition-all duration-300 ease-in-out lg:p-5 ${tech.style}`}
          >
            <div className="flex justify-center mb-1">{tech.icon}</div>
            <div>{tech.skill}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
