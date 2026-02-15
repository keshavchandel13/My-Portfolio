import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaExternalLinkAlt, FaRocket } from "react-icons/fa";
import DecryptedText from '../animation/Decrypted'
const experiences = [
  {
    role: "AI & ML Intern",
    company: "Infosys Springboard",
    type: "Internship",
    duration: "Sep 2025 - Nov 2025",
    description: "Integrated Flask-based ML models with React frontends. Developed predictive logic and handled complex data processing tasks.",
    skills: ["Flask", "React", "Python", "Machine Learning"],
    certificate: "https://www.linkedin.com/in/keshav-chandel-9ba2a7186/",
    isLatest: true
  },
  {
    role: "Frontend Developer",
    company: "BharatCrest",
    type: "Remote Internship",
    duration: "Jun 2025 - Jul 2025",
    description: "Architected front-end features for live projects, including a secure billing system with PayPal. Enhanced site performance and optimized SEO for the official corporate platform.",
    skills: ["React.js", "SQLite", "Tailwind CSS", "Responsive Design"],
    certificate: "https://www.linkedin.com/in/keshav-chandel-9ba2a7186/",
    isLatest: false
  }
];

export default function Experience() {
  return (
    <div className="py-24 px-6 lg:px-20 min-h-screen text-white relative">
      {/* Background decoration */}
      <div className="absolute top-56 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-indigo-500/50 via-gray-800 to-transparent hidden md:block" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">
            Experience <span className="text-indigo-500">History</span>
          </h1>
          <div className="h-1.5 w-20 bg-amber-400 mx-auto rounded-full" />
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 items-start ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 top-0 z-20">
                <div className={`w-5 h-5 rounded-full border-4 border-slate-900 shadow-xl ${
                  exp.isLatest ? "bg-amber-400 animate-pulse" : "bg-indigo-500"
                }`} />
              </div>

              {/* Content Card */}
              <div className="w-full md:w-[45%] group">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-indigo-500/50 transition-all duration-500 shadow-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-indigo-400 text-xs font-mono font-bold uppercase tracking-widest block mb-1">
                        {exp.type}
                      </span>
                      <h2 className="text-2xl font-bold group-hover:text-amber-400 transition-colors">
                        {exp.role}
                      </h2>
                      <p className="text-gray-300 font-semibold mt-1 flex items-center gap-2">
                        <FaBriefcase className="text-indigo-500" /> {exp.company}
                      </p>
                    </div>
                    {exp.isLatest && (
                      <div className="p-2 bg-amber-400/10 rounded-lg">
                        <FaRocket className="text-amber-400" />
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                    <FaCalendarAlt />
                    <span>{exp.duration}</span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href={exp.certificate}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-amber-400 transition-colors"
                  >
                    View Internship Certificate <FaExternalLinkAlt size={10} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}