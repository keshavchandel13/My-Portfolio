import React from "react";
import { useEffect } from "react";
import SideBar from "./components/SideBar";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Education from "./Sections/Education";
import TechStack from "./Sections/TechStack";
import Projects from "./Sections/Projects";

import ContactUs from "./Sections/ContactUs";
import Certificates from "./Sections/Certificates";


function App() {

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-gray-800 to-gray-900">
      <SideBar />
      <main className="flex-1 overflow-auto  md:pl-64">
        <section id="home" className="">
          <Home />
        </section>
        <section id="about" className="">
          <About />
        </section>
        <section id="education" className="">
          <Education />
        </section>
        <section id="tech-stack" className="">
          <TechStack />
        </section>
        <section id="projects" className="">
          <Projects />
        </section>
        <section id="projects" className="">
          <Certificates/>
        </section>
        <section id="contact" className="">
          <ContactUs />
        </section>
      </main>
    </div>
  );
}

export default App;
