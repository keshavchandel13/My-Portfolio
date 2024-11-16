import React from "react";

const About = () => {
  return (
    <div className="flex pb-6 text-white bg-gradient-to-br from-gray-800 to-gray-900 flex-col items-center p-2  lg:flex-row   text-sm   gap-4 lg:gap-12 sm:p-3 md:p-6  lg:p-12">
      {/* Img */}
      <div className="flex justify-center h-full w-full lg:w-10/12 bg-cover  lg:ml-0 ">
        <img
          className="h-32 w-44 lg:w-10/12   rounded border-2 drop-shadow-2xl lg:h-72 "
          src="/keshav.jpeg"
          alt=""
        />
      </div>
      {/* About me */}
      <div className="w-80 lg:w-full h-full ">
        {" "}
        <h1 className="text-center text-xl   border-b-4 pb-4 font-semibold lg:text-5xl mb-5">
          About Me
        </h1>{" "}
        <p className="mb-1 italic text-sm lg:text-lg">
          {" "}
          I am a dedicated and passionate Computer Science Engineering student.
          With a solid foundation in C/C++, Python,s and the MERN stack, I am
          driven by my fascination with artificial intelligence and web
          development.{" "}
        </p>{" "}
        <p className="italic text-sm lg:text-lg">
          My journey is marked by hands-on projects and continuous learning as I
          strive to bridge theoretical knowledge with real-world applications. I
          thrive on challenges and am committed to developing innovative
          solutions that enhance both user experience and technical
          functionality.
        </p>
      </div>
    </div>
  );
};

export default About;
