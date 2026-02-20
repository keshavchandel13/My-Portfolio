import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
const ProjectData = [
  {
    title: "Photography Business Portfolio",
    description:
      "An interactive website designed to showcase photography services and attract potential clients.",
    image: "/jbm.png",
    techStack: "Node.js, React.js",
    link: "https://jbm-wg9v-keshavchandel13s-projects.vercel.app/",
    github:""
  },
  {
    title: "Personalized- E-Com Website Sparkify",
    description:
      "A modern and scalable e-commerce platform built with Next.js and MongoDB featuring dynamic product rendering, admin-side product management (add/delete), optimized API handling, and smooth UI animations using Framer Motion. Designed with performance, clean architecture, and future feature expansion in mind.",
    image: "/Sparkify.png",
    techStack: "Next.js, MongoDB, Framer Motion",
    link: "https://sparkify-shop.vercel.app/",
    github:""
  },
  
  
  {
    title: "Zomato Clone: Food Delivery Platform",
    description:
      "A visually appealing and functional clone of a popular food delivery service, emphasizing intuitive user experience.",
    image: "/zomato.png",
    techStack: "HTML, CSS",
    link: "/",
    github:""
  },
  
    
  {
    title: "Task Management Web App",
    description:
      "A to-do list application for efficient task tracking, designed to boost productivity through an intuitive interface.",
    image: "/todo.png",
    techStack: "HTML5, CSS, JavaScript",
    link: "https://project-5-to-do-list.vercel.app/",
    github:""
  },
  
  {
    title: "Weather Forecast Web App",
    description:
      "A responsive weather application that provides real-time weather updates for any location worldwide.",
    image: "/weather.png",
    techStack: "HTML5, CSS, JavaScript",
    link: "https://weather-app-nine-eta-91.vercel.app/",
    github:""
  },
  
  {
    title: "Billy-fy: Business Billing System",
    description:
      "A robust billing web application designed to manage business transactions and generate invoices seamlessly.",
    image: "/billify.png",
    techStack: "Python, Flask, HTML5, CSS, MySQL",
    link: "/",
    github:""
  },
];

const Projects = () => {
  return (
    <div className="text-white min-h-screen py-20 px-6 lg:px-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
          Featured <span className="text-amber-400">Works</span>
        </h1>
        <div className="h-1.5 w-24 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {ProjectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-white/10 hover:border-indigo-500/50 transition-all duration-500 shadow-2xl"
          >
            
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-fill group-hover:scale-110 transition-transform duration-700"
              />
              
              {project.featured && (
                <div className="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                  Top Project
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-80" />
            </div>
            
            <div className="p-6 relative">
              <div className="flex flex-wrap gap-2 mb-4">
                {Array.isArray(project.techStack) ? project.techStack.map((tech, i) => (
                  <span key={i} className="text-[10px] font-mono text-indigo-400 bg-indigo-400/10 px-2 py-0.5 rounded-md border border-indigo-400/20">
                    {tech}
                  </span>
                )) : <span className="text-[10px] font-mono text-indigo-400">{project.techStack}</span>}
              </div>

              <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                {project.description}
              </p>

              
              <div className="flex items-center gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors"
                >
                  <FaExternalLinkAlt size={12} /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  title="View Source Code"
                >
                  <FaGithub size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;