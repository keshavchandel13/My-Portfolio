import React from "react";
import { scroller } from "react-scroll";
import ShinyText from "../animation/ShinnyText";
import ProfileCard from '../animation/ProfileCard';
import ScrollReveal from "../animation/ScrollReveal";
import { motion } from "framer-motion";

const About = () => {
  const scrollToContact = () => {
    scroller.scrollTo("contact", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const highlights = [
    { label: "Education", value: "B.Tech CSE" },
    { label: "Experience", value: "Full Stack Dev" },
    { label: "Focus", value: "AI & Web" },
    { label: "Location", value: "India" },
  ];

  return (
    <div className="flex min-h-screen text-white flex-col items-center justify-center p-6 lg:flex-row gap-10 lg:gap-16">
      
      {/* Profile Card Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex justify-center w-full lg:w-1/2"
      >
        <ProfileCard
          name="Keshav Chandel"
          title="Full Stack Developer"
          handle="keshavchandel13"
          status="Open for Roles"
          contactText="Get in Touch"
          avatarUrl="/keshav.jpeg"
          showUserInfo={true}
          enableTilt={true}
          onContactClick={scrollToContact}
        />
      </motion.div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="text-left">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            <ShinyText text="About Me" speed={3} />
          </h1>
          <div className="h-1 w-20 bg-amber-400 rounded-full mb-8"></div>
        </div>

        <div className="space-y-4 text-gray-300">
          <ScrollReveal
            baseOpacity={0.2}
            enableBlur={true}
            baseRotation={0}
            blurStrength={8}
            textClassName="text-lg lg:text-xl leading-relaxed italic"
          >
            I am a dedicated Computer Science Engineering student at JP University. 
            With a solid foundation in MERN stack and Python, I am driven by the 
            fascinated by the intersection of Artificial Intelligence and modern 
            Web Architectures.
          </ScrollReveal>

          <ScrollReveal
            baseOpacity={0.2}
            enableBlur={true}
            baseRotation={0}
            blurStrength={8}
            textClassName="text-lg lg:text-xl leading-relaxed italic"
          >
            My journey is defined by building hands-on solutions that bridge the gap 
            between complex backend logic and seamless user experiences. I thrive on 
            technical challenges and am committed to engineering innovative web 
            solutions.
          </ScrollReveal>
        </div>

        {/* Highlight Grid for Recruiters/Clients */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          {highlights.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <p className="text-amber-400 text-xs uppercase tracking-widest font-bold">{item.label}</p>
              <p className="text-white font-medium text-lg">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;