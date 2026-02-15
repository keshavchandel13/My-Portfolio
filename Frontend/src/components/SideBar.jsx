import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { FaDiagramProject, FaBriefcase, FaUserGraduate, FaLaptopCode, FaEnvelope } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

const SideBar = () => {
  const [isVisible, setVisibility] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) setVisibility(false);
      else setVisibility(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "Home", icon: <FaHome />, to: "home" },
    { name: "About", icon: <IoPerson />, to: "about" },
    { name: "Experience", icon: <FaBriefcase />, to: "experience" },
    { name: "Projects", icon: <FaDiagramProject />, to: "projects" },
    { name: "Tech Stack", icon: <FaLaptopCode />, to: "tech-stack" },
    { name: "Education", icon: <FaUserGraduate />, to: "education" },
    { name: "Certificates", icon: <GrCertificate />, to: "certificates" },
    { name: "Contact", icon: <FaEnvelope />, to: "contact" },
  ];

  return (
    <>
      <button
        className="fixed top-5 left-5 z-[60] bg-indigo-600 p-3 rounded-xl text-white shadow-xl lg:hidden"
        onClick={() => setVisibility(!isVisible)}
      >
        {isVisible ? <FaTimes /> : <FaBars />}
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="fixed top-0 left-0 h-screen bg-slate-900 border-r border-white/5 w-64 z-50 flex flex-col py-8"
          >
            <div className="flex flex-col items-center mb-8 px-4">
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-amber-400 to-indigo-600 mb-3">
                <img
                  src="/keshav.jpeg"
                  alt="Keshav Chandel"
                  className="h-28 w-28 rounded-full object-cover border-4 border-slate-900"
                />
              </div>
              <h2 className="text-white font-bold text-lg">Keshav Chandel</h2>
              <p className="text-indigo-400 text-[10px] uppercase tracking-widest font-mono">Full Stack Engineer</p>
            </div>

            <ul className="flex-1 px-4 space-y-1 overflow-y-auto no-scrollbar">
              {menuItems.map((item, index) => (
                <li key={item.name}>
                  <Link
                    activeClass="bg-indigo-600/20 text-indigo-400 border-r-4 border-indigo-500"
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                    className="flex items-center gap-4 px-4 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer group"
                    onClick={() => window.innerWidth < 1024 && setVisibility(false)}
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span className="font-medium text-sm">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="px-4 mt-4">
              <a 
                href="/Keshav Chandel - Resume.pdf" 
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold hover:bg-amber-400 hover:text-black transition-all"
              >
                <FaDownload /> DOWNLOAD CV
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBar;