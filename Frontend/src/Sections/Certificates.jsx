import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";

const certificateData = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Sep 2024",
    image: "/freecodecamp.jpg",
    link: "https://www.freecodecamp.org/certification/KeshavChandel/responsive-web-design",
    category: "Frontend"
  },
  {
    title: "Programming Using Python",
    issuer: "Infosys Springboard",
    date: "Oct 2024",
    image: "/pythonInfo.jpg",
    link: "https://www.linkedin.com/in/keshav-chandel-9ba2a7186/",
    category: "Python"
  },
  {
    title: "React JS Advanced",
    issuer: "Scaler",
    date: "Nov 2024",
    image: "/reactScaler.jpg",
    link: "https://www.linkedin.com/in/keshav-chandel-9ba2a7186/",
    category: "MERN"
  },
  {
    title: "Python Pandas",
    issuer: "Simplilearn",
    date: "Feb 2025",
    image: "/pandas.jpg",
    link: "https://www.linkedin.com/in/keshav-chandel-9ba2a7186/",
    category: "Data Science"
  },
];

const Certificates = () => {
  return (
    <div className="text-white min-h-screen py-20 px-6 lg:px-12">
      <div className="flex flex-col items-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-4"
        >
          <FaAward className="text-indigo-400 text-3xl" />
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-center">
          Certifications & <span className="text-amber-400">Badges</span>
        </h1>
        <p className="text-gray-400 mt-4 font-mono text-sm tracking-widest uppercase">
          Verified expertise across multiple domains
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {certificateData.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative flex flex-col h-full bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-amber-400/50 transition-all duration-300 shadow-xl"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
              <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-[10px] font-bold px-2 py-1 rounded text-indigo-300 uppercase">
                {cert.category}
              </span>
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h2 className="text-lg font-bold leading-tight group-hover:text-amber-400 transition-colors">
                  {cert.title}
                </h2>
                <FaCheckCircle className="text-green-500 text-sm mt-1 shrink-0" />
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-300 font-medium">{cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.date}</p>
              </div>

              <div className="mt-auto pt-5">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                >
                  Verify <FaExternalLinkAlt size={10} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;