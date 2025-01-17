import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const ContactUs = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // State to handle loading
  const [feedback, setFeedback] = useState(""); // State for feedback message

  // Handle input changes
  const changeInput = (e) => {
  
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_URL);
    setFeedback(""); // Reset feedback message
    setLoading(true); // Set loading state to true

    // Validate inputs
    if (!data.name || !data.email || !data.message) {
      setFeedback("All fields are required.");
      setLoading(false);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      setFeedback("Invalid email format.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/send-email`, // Using environment variable
   
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.headers.get("content-type")?.includes("application/json")) {
        const result = await response.json();
        if (response.ok) {
          setFeedback("Message sent successfully!");
          setData({ name: "", email: "", message: "" }); // Reset form
        } else {
          setFeedback(result.error || "Failed to send the message.");
        }
      } else {
        const textResult = await response.text();
        setFeedback(textResult || "Failed to send the message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setFeedback("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

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
          {/* Contact Details */}
          <div className="flex flex-col items-center text-lg space-y-9">
            <div className="w-full max-w-3xl p-8 bg-white bg-opacity-30 rounded-xl shadow-2xl backdrop-blur-lg">
              {/* Address */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white mr-4">
                  <FaLocationDot size={24} />
                </div>
                <div>
                  <h2 className="text-blue-300 font-semibold">Address</h2>
                  <p className="text-white">Hamirpur, H.P</p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white mr-4">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h2 className="text-blue-300 font-semibold">Phone</h2>
                  <p className="text-white">+91-8278779865</p>
                </div>
              </div>
              {/* Email */}
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
            <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Name"
                value={data.name}
                onChange={changeInput}
                name="name"
                className="p-4 border border-slate-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-200"
              />
              <input
                type="text"
                placeholder="Email"
                value={data.email}
                onChange={changeInput}
                name="email"
                className="p-4 border border-slate-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-200"
              />
              <textarea
                name="message"
                placeholder="Type your message"
                value={data.message}
                onChange={changeInput}
                className="p-4 border border-slate-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-200 resize-none"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300 font-medium"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
            {feedback && <p className="mt-4 text-center text-red-600">{feedback}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
