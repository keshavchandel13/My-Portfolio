import React from 'react'
import Typewriter from "typewriter-effect";
const TechStack = () => {
  return (
    <div>
<div className="   text-white py-8 px-2 lg:p-12 ">
      <h1 className="text-center text-5xl mb-8 font-semibold text-cyan-400 underline tracking-wider decoration-wavy decoration-yellow-500"> <Typewriter
          options={{
            strings: ["Tech Stack"],
            autoStart: true,
            loop: true,
          }}
        /></h1>
    <div className="grid grid-cols-3 grid-rows-3 text-center gap-4 font-medium font-serif">
      <div className="border p-4 shadow-2xl shadow-blue-500/30 hover:scale-105 hover:bg-blue-500 rounded">React</div>
      <div className="border p-4 shadow-2xl shadow-blue-500/30 hover:scale-105 hover:bg-blue-500 rounded">MongoDb</div>
      <div className="border p-4 shadow-2xl shadow-blue-500/30 hover:scale-105 hover:bg-blue-500 rounded">Express</div>
      <div className="border p-4 shadow-2xl shadow-blue-500/30 hover:scale-105 hover:bg-blue-500 rounded">NodeJs</div>
      <div className="border p-4 shadow-2xl shadow-blue-500/30 hover:scale-105 hover:bg-blue-500 rounded">JavaScript</div>
      <div className="border p-4 shadow-2xl shadow-blue-500/30 hover:scale-105 hover:bg-blue-500 rounded">Python</div>
      <div className="border p-4 shadow-2xl shadow-blue-500/30 hover:scale-105 hover:bg-blue-500 rounded">Flask</div>
      <div className="border p-4 shadow-2xl shadow-blue-500/30 hover:scale-105 hover:bg-blue-500 rounded">HTML5/CSS</div>
      <div className="border p-4 shadow-2xl shadow-blue-500/30 hover:scale-105 hover:bg-blue-500 rounded">Tailwind CSS</div>
    </div>
    </div>
      
    </div>
  )
}

export default TechStack
