import React from "react";
import Typewriter from "typewriter-effect";
import { FaDownload, FaBriefcase } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col items-start w-full gap-6 bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white px-8 py-16 md:py-24 lg:py-32">

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide">
        Hi, I'm <span className="text-amber-400">Keshav Chandel</span>
      </h1>

      {/* Typewriter Effect */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-amber-400">
        <Typewriter
          options={{
            strings: ["Full Stack Developer!", "MERN Stack Enthusiast!", "Web Innovator!"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>

      {/*  Paragraph */}
      <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-4 max-w-3xl">
        Passionate about creating interactive web applications and leveraging modern technologies to deliver high-quality user experiences.
      </p>


      <div className="flex flex-wrap gap-4 mt-6">
        <button className="flex items-center justify-center gap-2 p-2 rounded bg-indigo-600 hover:bg-indigo-900 transition duration-300 text-sm md:text-base shadow-lg">
          <FaBriefcase />
          Hire Me
        </button>
        <button className="flex items-center justify-center gap-2 p-2 rounded bg-orange-600 hover:bg-orange-900 transition duration-300 text-sm md:text-base shadow-lg">
          <FaDownload />
          <a href="/public/KeshavChandelResume.pdf" download="KeshavChandelResume.pdf">
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;