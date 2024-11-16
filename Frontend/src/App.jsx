import React from "react";
import SideBar from "./components/SideBar";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Education from "./Sections/Education";
import TechStack from "./Sections/TechStack";
import Projects from './sections/Projects';
import WorkExperience from './sections/WorkExperience';
import ContactUs from "./Sections/ContactUs";

function App() {
  return ( 
    <div className="flex flex-col md:flex-row min-h-screen">
      <SideBar/>
      <main className="flex-1 overflow-auto  md:pl-64">
        <section id="home" className=""><Home/></section>
        <section id="about" className="bg-gradient-to-br from-gray-800 to-gray-900"><About/></section>
        <section id="education" className="bg-gradient-to-br from-gray-800 to-gray-900"><Education/></section>
        <section id="tech-Stack" className="bg-gradient-to-br from-gray-800 to-gray-900"><TechStack/></section>
        <section id="projects" className="bg-gradient-to-br from-gray-800 to-gray-900"><Projects/></section>
        <section id="work-experience" className="bg-gradient-to-br from-gray-800 to-gray-900"><WorkExperience/></section>
        <section id="contact" className="bg-gradient-to-br from-gray-800 to-gray-900"><ContactUs/></section>

      </main>

    </div>
 
  )
}

export default App
