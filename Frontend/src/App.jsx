import React from "react";
import SideBar from "./components/SideBar";
import Home from "./Sections/Home";
import About from './sections/About';
import Education from './sections/Education';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import WorkExperience from './sections/WorkExperience';
import ContactUs from "./Sections/ContactUs";

function App() {
  return ( 
    <div className="flex flex-col md:flex-row min-h-screen">
      <SideBar/>
      <main className="flex-1 overflow-auto  md:pl-64">
        <section id="home" className=""><Home/></section>
        <section id="about" className=""><About/></section>
        <section id="education" className=""><Education/></section>
        <section id="tech-Stack" className=""><TechStack/></section>
        <section id="projects" className=""><Projects/></section>
        <section id="work-experience" className=""><WorkExperience/></section>
        <section id="contact" className=""><ContactUs/></section>

      </main>

    </div>
 
  )
}

export default App
