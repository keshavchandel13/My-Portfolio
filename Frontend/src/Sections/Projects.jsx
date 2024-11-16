import React from "react";
import { motion } from "framer-motion";
const ProjectData = [
  // Project 1
  {
    title: "Photography Business Portfolio",
    description:
      "An interactive website designed to showcase photography services and attract potential clients.",
    image: "/jbm.png",
    techStack: "Node.js, React.js",
    link: "https://jbm-wg9v-keshavchandel13s-projects.vercel.app/",
  },
  // Project 2
  {
    title: "Zomato Clone: Food Delivery Platform",
    description:
      "A visually appealing and functional clone of a popular food delivery service, emphasizing intuitive user experience.",
    image: "/zomato.png",
    techStack: "HTML, CSS",
    link: "https://zomato-clone-indol-rho.vercel.app/",
  },
  // Project 3
  {
    title: "Task Management Web App",
    description:
      "A to-do list application for efficient task tracking, designed to boost productivity through an intuitive interface.",
    image: "/todo.png",
    techStack: "HTML5, CSS, JavaScript",
    link: "https://project-5-to-do-list.vercel.app/",
  },
  // Project 4
  {
    title: "Text-to-Speech Converter Tool",
    description:
      "A web-based tool that converts text into speech, enhancing accessibility for various users.",
    image: "/texttospeech.png",
    techStack: "HTML5, CSS, JavaScript",
    link: "https://project-01-text-to-speech.vercel.app/",
  },
  // Project 5
  {
    title: "Weather Forecast Web App",
    description:
      "A responsive weather application that provides real-time weather updates for any location worldwide.",
    image: "/weather.png",
    techStack: "HTML5, CSS, JavaScript",
    link: "https://jbm-wg9v-keshavchandel13s-projects.vercel.app/",
  },
  // Project 6
  {
    title: "Billy-fy: Business Billing System",
    description:
      "A robust billing web application designed to manage business transactions and generate invoices seamlessly.",
    image: "/billify.png",
    techStack: "Python, Flask, HTML5, CSS, MySQL",
    link: "https://jbm-wg9v-keshavchandel13s-projects.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="text-white min-h-screen p-4 pb-8">
      {/* headind */}
      <h1 className="text-center font-extrabold text-4xl mb-6">PROJECTS</h1>
      {/* projects box */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {ProjectData.map((project, index) => (
          <motion.div
            key={index}
            className="border-2 rounded-md relative overflow-hidden shadow-xl hover:shadow-2xl transform transition-all duration-500 lg:border"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <img
              src={project.image}
              alt=""
              className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute p-4 bottom-0  bg-black bg-opacity-80 transition-transform duration-500 hover:translate-y-0 translate-y-20 ">
              <h1 className="font-bold text-2xl ">{project.title}</h1>
              <h2 className="text-sm mt-2">{project.techStack}</h2>
              <p className="text-sm mt-2 ">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                className="text-blue-500 underline"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
