import React from "react";
import { motion } from "framer-motion";


const educationData = [
  {
    institution: "Jaypee University Of Information Technology Waknaghat, H.P  ",
    degree: "Bachelor's in Computer Science",
    dates: "2023 - Present",
    image: "/juit.jpg", 
  },
  {
    institution: "Govt Sen. Sec. School Bagwara, H.P",
    degree: "10+2",
    dates: "2022 - 2023",
    image: "/billify.png", 
  },
  {
    institution: "DAV Public Sen. Sec. School Greyoh, H.P",
    degree: "Matriculation",
    dates: "2021 - 2022",
    image: "/dav2.jpeg", 
  },
];

const Education = () => {
  return (
    <>
      <div className="flex justify-center p-6">
      <h1 className="text-center text-3xl   text-violet-600 font-extrabold shadow-lg shadow-fuchsia-800 ">Education</h1>
      </div>
    <div className="flex flex-col  pb-12 gap-6 items-center lg:flex-row justify-center">
        {educationData.map((edu,index)=>(
        <motion.div
          key={index}
          className="bg-white w-72 h-80 rounded shadow-2xl shadow-blue-300/40  hover:shadow-2xl hover:scale-105 transform transition duration-300  " 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}       
          >
            {/* Img */}
          <div className="">
            <img src={edu.image} alt={edu.institution} className="h-44 bg-contain w-72" />
          </div>
          {/* education data */}
          <div className="p-3">
            <h2 className="font-semibold mb-4">{edu.institution}</h2>
            <p>{edu.degree}</p>
            <p>{edu.dates}</p>

          </div>

        </motion.div>
        ))};

    </div>
    </>
  );
};

export default Education;
