import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationDot,  FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdEmail, MdSend, MdCheckCircle, MdError } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" }); 

  const changeInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    setLoading(true);

    if (!data.name || !data.email || !data.message) {
      setStatus({ type: "error", message: "Please fill all fields." });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_APP_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent! I'll get back to you soon." });
        setData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong. Try LinkedIn?" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen py-20 px-6 lg:px-12 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-amber-400/5 blur-[100px] rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-6xl"
      >
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-white">
            Get In <span className="text-amber-400">Touch</span>
          </h1>
          <p className="text-gray-400 mt-4 font-mono uppercase tracking-widest text-sm">
            Available for Internships & Freelance Projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Let's build something great.</h3>
            
            <div className="space-y-6">
              {[
                { icon: <FaLocationDot />, label: "Location", val: "Hamirpur, H.P, India", color: "text-red-400" },
                { icon: <FaPhoneAlt />, label: "Phone", val: "+91-8278779865", color: "text-green-400" },
                { icon: <MdEmail />, label: "Email", val: "chandelkeshav4@gmail.com", color: "text-blue-400" },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                >
                  <div className={`text-xl ${item.color}`}>{item.icon}</div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{item.label}</p>
                    <p className="text-white font-medium">{item.val}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Socials for Recruiters */}
            <div className="pt-8">
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-4">Social Profiles</p>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/keshav-chandel-9ba2a7186" className="p-4 rounded-xl bg-indigo-600/20 border border-indigo-600/30 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/keshavchandel13" className="p-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Glass Form */}
          <motion.div 
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={changeInput}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-amber-400 focus:outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={changeInput}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-amber-400 focus:outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={data.message}
                  onChange={changeInput}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-amber-400 focus:outline-none transition-all resize-none"
                  placeholder="Project details or inquiry..."
                ></textarea>
              </div>

              <button
                disabled={loading}
                className="w-full py-4 rounded-xl bg-amber-400 text-black font-black uppercase tracking-widest hover:bg-amber-300 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? "Transmitting..." : <>Send Message <MdSend /></>}
              </button>
            </form>

            <AnimatePresence>
              {status.message && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className={`mt-6 p-4 rounded-xl flex items-center gap-3 ${status.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}
                >
                  {status.type === 'success' ? <MdCheckCircle /> : <MdError />}
                  <span className="text-sm font-bold">{status.message}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;