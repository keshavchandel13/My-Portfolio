import React from "react";
import SideBar from "./components/SideBar";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Projects from "./Sections/Projects";
import TechStack from "./Sections/TechStack";
import Education from "./Sections/Education";
import Certificates from "./Sections/Certificates";
import ContactUs from "./Sections/ContactUs";

function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-950 selection:bg-indigo-500 selection:text-white">
      <SideBar />
      <main className="flex-1 overflow-x-hidden md:pl-64">
        <section id="home">
          <Home />
        </section>
        
        <section id="about">
          <About />
        </section>

        <section id="experience" className="bg-slate-900/30">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="tech-stack" className="bg-slate-900/30">
          <TechStack />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="certificates">
          <Certificates />
        </section>

        <section id="contact" className="bg-indigo-950/20">
          <ContactUs />
        </section>

        <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5">
          <p>© 2026 | Built with MERN & Framer Motion by Keshav Chandel</p>
        </footer>
      </main>
    </div>
  );
}

export default App;