import React from "react";
import { motion } from "framer-motion";
import ScrollFloat from "../animation/ScrollFloat";
import { FaGraduationCap, FaCalendarAlt, FaSchool } from "react-icons/fa";

const educationData = [
  {
    institution: "Jaypee University of Information Technology",
    location: "Solan, H.P",
    degree: "Bachelor of Technology in CSE",
    dates: "2023 - 2027",
    image: "/juit.jpg",
    current: true, 
  },
  {
    institution: "Govt Sen. Sec. School Bagwara",
    location: "Hamirpur, H.P",
    degree: "Senior Secondary (Non-Medical)",
    dates: "2022 - 2023",
    image: "/bagwaraSchool.jpeg",
    current: false,
  },
  {
    institution: "DAV Public Sen. Sec. School Greyoh",
    location: "Mandi, H.P",
    degree: "Matriculation",
    dates: "2021 - 2022",
    image: "/dav2.jpeg",
    current: false,
  },
];

const Education = () => {
  return (
    <div className="py-20 px-6 min-h-screen bg-transparent">
      {/* Section Header */}
      <div className="flex justify-center mb-16">
        <ScrollFloat
          animationDuration={1.5}
          textClassName="text-white font-black text-5xl md:text-7xl uppercase tracking-tighter"
        >
          Education
        </ScrollFloat>
      </div>

      {/* Cards Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className={`relative group overflow-hidden rounded-2xl bg-white/5 border ${
              edu.current ? "border-amber-500/50 shadow-[0_0_25px_rgba(245,158,11,0.1)]" : "border-white/10"
            } backdrop-blur-md transition-all duration-500`}
          >
            {/* Status Badge for Recruiters */}
            {edu.current && (
              <div className="absolute top-4 right-4 z-20 bg-amber-500 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">
                Current
              </div>
            )}

            {/* Image Section with Overlay */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={edu.image}
                alt={edu.institution}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-amber-400">
                <FaGraduationCap />
                <span className="text-xs font-mono uppercase tracking-widest">Academic Journey</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors leading-tight mb-2">
                {edu.institution}
              </h2>
              <p className="text-gray-400 text-sm mb-4 italic">{edu.location}</p>
              
              <div className="space-y-3 border-t border-white/5 pt-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <FaSchool className="text-indigo-400 shrink-0" />
                  <span className="text-sm font-medium">{edu.degree}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FaCalendarAlt className="text-indigo-400 shrink-0" />
                  <span className="text-sm font-mono">{edu.dates}</span>
                </div>
              </div>
            </div>

            {/* Decorative bottom line */}
            <div className={`h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${
              edu.current ? "from-amber-400 to-orange-600" : "from-indigo-500 to-purple-600"
            }`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;