import React, { useState } from "react";

const ContactUs = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // Loading state
  const [feedback, setFeedback] = useState(""); // Feedback message

  // Handle input changes
  const changeInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback(""); // Reset feedback message
    setLoading(true); // Start loading

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
        `${process.env.URL}/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (response.ok) {
        setFeedback("Message sent successfully!");
        setData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setFeedback(result.error || "Failed to send the message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setFeedback("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={changeInput}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={changeInput}
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          value={data.message}
          onChange={changeInput}
          placeholder="Your message"
          required
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      {feedback && <p>{feedback}</p>} {/* Display feedback message */}
    </div>
  );
};

export default ContactUs;
