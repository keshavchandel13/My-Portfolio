import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {

  // use state to handle on change of input
  const [data,setData] = useState({
    name:"",
    email:"",
    message:""
  });
  const changeInput=(e)=>{
    const {name,value} = e.target;
    setData(previousInput=>{
      return {...previousInput, [name]:value}
    });
  }

// Function to handle email
const handleSubmit = async (e) =>{
  e.preventDefault();
  try{
    const response = await fetch("http://localhost:5000/send-email", {
      method:"POST",
      headers:{
        "Content-Type":"application/json;charset=utf-8",
      },
      body:JSON.stringify(data),
    }); 
    if(response.headers.get('content-type')?.includes('aplication/json')){
      const result = await response.json();
      if(response.ok){
        alert(result.message);
      } else{
        alert("Failed to send the message: "+ result.error);
      }
    } else{
      const textResult = await response.text();
      console.log('Text response:',textResult);
      alert(textResult);
    }
  }
  catch(error){
    console.log("Error: "+error);
    alert("Error in sending the message");
  }
};

// Connection with server
useEffect(() => {
  fetch('http://localhost:5000/send-email')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error: ", error));
},[]);


  return (
    <div className="relative min-h-screen p-4">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-blue-900 opacity-60"></div>

      <div className="relative z-10 text-white py-10 px-6">
        <h1 className="text-center font-extrabold text-white text-4xl mb-10 tracking-wider">
          CONTACT US
        </h1>
        <div className="flex flex-col gap-8 items-center lg:flex-row justify-center">
          <div className="flex flex-col items-center text-lg space-y-9">
            {/* Contact Box */}
            <div className="w-full max-w-3xl p-8 bg-white bg-opacity-30 rounded-xl shadow-2xl backdrop-blur-lg">
              {/* Address Section */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white mr-4">
                  <FaLocationDot size={24} />
                </div>
                <div>
                  <h2 className="text-blue-300 font-semibold">Address</h2>
                  <p className="text-white">Hamirpur, H.P</p>
                </div>
              </div>

              {/* Phone Section */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white mr-4">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h2 className="text-blue-300 font-semibold">Phone</h2>
                  <p className="text-white">+91-8278779865</p>
                </div>
              </div>

              {/* Email Section */}
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white mr-4">
                  <MdEmail size={24} />
                </div>
                <div>
                  <h2 className="text-blue-300 font-semibold">Email</h2>
                  <p className="text-white">chandelkeshav4@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white text-black p-6 w-96 rounded-xl shadow-lg">
            <h1 className="text-2xl font-semibold text-center mb-6 text-blue-700">
              SEND MESSAGE
            </h1>
            <form onSubmit={handleSubmit}  method="post" className="flex flex-col gap-6">
              {/* Name */}
              <input
                type="text"
                placeholder="Name"
                value={data.name}
                onChange={changeInput}
                name="name"
                className="p-4 border border-slate-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-200"
              />
              {/* Email */}
              <input
                type="text"
                placeholder="Email"
                value={data.email}
                onChange={changeInput}
                name="email"
                className="p-4 border border-slate-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-200"
              />
              {/* Message */}
              <textarea
                name="message"
                placeholder="Type your message"
                value={data.message}
                onChange={changeInput}
                className="p-4 border border-slate-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-200 resize-none"
                rows="4"
              ></textarea>
              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300 font-medium"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
