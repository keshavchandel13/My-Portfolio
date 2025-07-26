import React from "react";
import ShinyText from "../animation/ShinnyText"
import ProfileCard from '../animation/ProfileCard'
import ScrollReveal from "../animation/ScrollReveal";
const About = () => {
  return (
    <div className="flex pb-6 text-white  flex-col items-center p-2  lg:flex-row   text-sm   gap-4 lg:gap-12 sm:p-3 md:p-6  lg:p-12">
      {/* Img */}
      <div className="flex justify-center h-full w-full lg:w-10/12 bg-cover  lg:ml-0 ">
        <ProfileCard
          name="Keshav Chandel"
          title="Web Developer"
          handle="chandelkeshav4"
          status=""
          contactText="Contact Me"
          avatarUrl="/keshav.jpeg"
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => <Link to="contact"/>}
        />
      </div>
      {/* About me */}
      <div className="w-80 lg:w-full h-full ">
        {" "}
        <h1 className="text-center text-xl   border-b-4 pb-4 font-semibold lg:text-5xl mb-5">
          <ShinyText text="About Me" disabled={false} speed={3} className='custom-class' />
        </h1>{" "}
        <p className="mb-1 italic text-sm lg:text-lg">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={10}
            blurStrength={10}
          >
            I am a dedicated and passionate Computer Science Engineering student.
            With a solid foundation in C/C++, Python and the MERN stack, I am
            driven by my fascination with artificial intelligence and web
            development.

          </ScrollReveal>

        </p>
        <p className="italic mt-2 text-sm lg:text-lg">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            My journey is marked by hands-on projects and continuous learning as I
            strive to bridge theoretical knowledge with real-world applications. I
            thrive on challenges and am committed to developing innovative
            solutions that enhance both user experience and technical
            functionality.
          </ScrollReveal>
        </p>
      </div>
    </div>
  );
};

export default About;
