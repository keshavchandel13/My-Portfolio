import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FaDownload, FaBriefcase, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from "react-scroll";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className=" py-16 relative flex flex-col items-start justify-center min-h-[90vh] w-full gap-6 bg-slate-950 text-white px-8  md:px-16  overflow-hidden"
    >
      <div className=" absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full" />
      
      <motion.div variants={itemVariants} className="z-10">
        <span className="text-indigo-400 font-mono tracking-widest uppercase text-sm mb-2 block">
          Available for Opportunities
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight">
          Hi, I'm <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Keshav Chandel</span>
        </h1>
      </motion.div>

      <motion.div variants={itemVariants} className="h-12 md:h-16 z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300">
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer.",
                "MERN Specialist.",
                "AI/ML Enthusiast.",
                "Solution Architect."
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </h2>
      </motion.div>

      <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed z-10">
        Engineering student at <span className="text-white border-b border-amber-400">JP University</span>. 
        I bridge the gap between complex backend logic (Node/Python) and sleek, user-centric interfaces.
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-4 z-10">
        <Link to='contact' smooth={true} duration={600}>
          <button className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.4)]">
            <FaBriefcase className="group-hover:scale-110 transition-transform" />
            <span className="font-semibold">Hire Me</span>
          </button>
        </Link>
        
        <a 
          href="/Keshav Chandel - Resume.pdf" 
          download="KeshavChandelResume"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-600 hover:border-amber-400 hover:text-amber-400 transition-all duration-300"
        >
          <FaDownload />
          <span className="font-semibold">Download CV</span>
        </a>
      </motion.div>

      <motion.div variants={itemVariants} className="flex items-center gap-6 mt-8 z-10">
        <div className="h-[1px] w-12 bg-gray-600"></div>
        <a href="https://github.com/keshavchandel13" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white text-2xl transition-colors">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/keshav-chandel-9ba2a7186/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0077b5] text-2xl transition-colors">
          <FaLinkedin />
        </a>
        <a href="https://wa.me/yournumber" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#25D366] text-2xl transition-colors">
          <FaSquareWhatsapp />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Home;