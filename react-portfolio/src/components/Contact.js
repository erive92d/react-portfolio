import { motion } from "framer-motion";
import { useState } from "react";
export default function Contact() {
  const [email, setEmail] = useState("");

  const [subject, setSubject] = useState("");

  const [message, setMessage] = useState("");

  const handleTo = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleSubject = (e) => {
    e.preventDefault();
    setSubject(e.target.value);
  };

  const handleMessage = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    const url = `mailto:${email}?subject=${subject}&body=${message}`;

    window.open(url);
  };

  return (
    <motion.div
      className="tabs"
      initial={{ x: "-100%" }}
      animate={{ x: "calc(100vw - 100%)" }}
      transition={{ type: "tween", duration: 0.5 }}
    >
      <div className="details">
        <h1>This is Contact</h1>
        <form id="email-form">
          <label for="to">To:</label>
          <input
            type="email"
            id="to"
            name="to"
            required
            onChange={(e) => handleTo(e)}
          />
          <label for="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            onChange={(e) => handleSubject(e)}
          />
          <label for="message">Message:</label>
          <textarea
            id="message"
            name="message"
            required
            onChange={(e) => handleMessage(e)}
          ></textarea>
          <button type="submit" onClick={sendMessage}>
            Send Email
          </button>
        </form>
      </div>
    </motion.div>
  );
}
