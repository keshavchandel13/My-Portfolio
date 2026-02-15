import React from "react";
import { motion } from "framer-motion";
import TrueFocus from "../animation/TrueFocus";
import {
  FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt,
  FaGithub, FaBootstrap, FaDatabase
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiFlask, SiFramer
} from "react-icons/si";

const techCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: <FaReact />, color: "#61DBFB" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8" },
      { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A" },
      { name: "Express", icon: <SiExpress />, color: "#FFFFFF" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "Flask", icon: <SiFlask />, color: "#808080" },
    ]
  },
  {
    title: "Programming & Tools",
    skills: [
      { name: "Python", icon: <FaPython />, color: "#3776AB" },
      { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF" },
      { name: "Animations", icon: <SiFramer />, color: "#E91E63" },
    ]
  }
];

const TechStack = () => {
  return (
    <div className="text-white py-16 px-6 lg:px-12 min-h-screen">
      <div className="mb-16">
        <TrueFocus
          sentence="Tech Stack"
          manualMode={false}
          blurAmount={8}
          borderColor="#fbbf24"
          glowColor="rgba(251, 191, 36, 0.4)"
          animationDuration={0.8}
        />
        
      </div>

      <div className="max-w-7xl mx-auto space-y-12">
        {techCategories.map((cat, catIdx) => (
          <div key={catIdx}>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-amber-400"></span>
              {cat.title}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {cat.skills.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(255,255,255,0.05)",
                    boxShadow: `0 0 20px ${tech.color}33` 
                  }}
                  className="relative group p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-4 transition-all duration-300"
                >
                  <div 
                    className="text-4xl transition-transform duration-300 group-hover:scale-110"
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-gray-400 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                  
                  
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl"
                    style={{ backgroundColor: tech.color }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;