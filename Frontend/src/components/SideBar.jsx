import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaDiagramProject } from "react-icons/fa6";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

const SideBar = () => {
  const [isVisible, setVisibility] = useState(true);

  const toggleVisibility = () => {
    setVisibility(!isVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setVisibility(false);
      } else {
        setVisibility(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      {/* Toggle button */}
      <button
        className="fixed top-2 left-6 bg-gray-800 p-2 rounded-full z-50 text-white text-xl"
        onClick={toggleVisibility}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <nav
        className={`fixed bg-gray-900 h-screen ${
          isVisible ? "w-64" : "w-0"
        } overflow-hidden transition-all duration-300`}
      >
        <div className={`flex flex-col items-center p-4 ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
          <img
            src="/keshav.jpeg"
            alt="profile"
            className={`rounded-full h-40 w-40 object-cover mb-4 border-4 border-slate-700 ${
              isVisible ? "block" : "hidden"
            }`}
          />
          {isVisible && (
            <h2 className="text-white font-semibold text-xl">Keshav Chandel</h2>
          )}

          {/* Links Section */}
          <ul className={`mt-4 text-white space-y-1 ${isVisible ? "block" : "hidden"}`}>
            {[
              { name: "Home", icon: <FaHome /> },
              { name: "About", icon: <IoPerson /> },
              { name: "Education", icon: <FaUserGraduate /> },
              { name: "Tech Stack", icon: <FaLaptopCode /> },
              { name: "Projects", icon: <FaDiagramProject /> },
              { name: "Work Experience", icon: <FaDiagramProject /> },
              { name: "Contact", icon: <FaEnvelope /> },
            ].map((value) => (
              <li key={value.name} className="flex flex-row w-full h-full items-center">
                <Link
                  to={value.name.toLowerCase().replace(/\s/g, "-")}
                  smooth={true}
                  duration={600}
                  className="flex items-center p-2 space-x-2 hover:bg-gray-700 cursor-pointer"
                >
                  <span className="text-1xl">{value.icon}</span>
                  <span className="ml-4">{value.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
