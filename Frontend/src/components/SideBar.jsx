import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaDiagramProject } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
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
        className="fixed top-3 left-4 bg-gray-800 p-2 rounded-full z-50 text-white text-2xl shadow-md hover:bg-gray-700 transition duration-300"
        onClick={toggleVisibility}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <nav
        className={`fixed bg-gray-900 h-screen transition-all duration-300 z-40 ${
          isVisible ? "w-64" : "w-0"
        } overflow-hidden`}
      >
        <div
          className={`flex flex-col items-center p-4 transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src="/keshav.jpeg"
            alt="profile"
            className={`rounded-full h-36 w-36 object-cover mb-4 border-4 border-slate-700 shadow-lg transition-all duration-300 ${
              isVisible ? "scale-100" : "scale-0"
            }`}
          />
          {isVisible && (
            <h2 className="text-white font-semibold text-xl mb-1 tracking-wide">
              Keshav Chandel
            </h2>
          )}

          {/* Links */}
          <ul className="mt-4 text-white space-y-2 w-full px-2 text-[17px]">
            {[
              { name: "Home", icon: <FaHome /> },
              { name: "About", icon: <IoPerson /> },
              { name: "Education", icon: <FaUserGraduate /> },
              { name: "Tech Stack", icon: <FaLaptopCode /> },
              { name: "Projects", icon: <FaDiagramProject /> },
              { name: "Certificates", icon: <GrCertificate /> },
              { name: "Contact", icon: <FaEnvelope /> },
            ].map((value) => (
              <li
                key={value.name}
                className="flex items-center rounded-md transition duration-200 hover:bg-gray-700 cursor-pointer"
              >
                <Link
                  to={value.name.toLowerCase().replace(/\s/g, "-")}
                  smooth={true}
                  duration={600}
                  className="flex items-center w-full p-2"
                >
                  <span className="text-xl">{value.icon}</span>
                  <span className="ml-4 font-xl">{value.name}</span>
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
