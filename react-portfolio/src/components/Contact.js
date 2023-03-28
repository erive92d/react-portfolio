import Header from "./Header";
import { motion } from "framer-motion";
import { useState } from "react";
export default function Contact() {
  const [getContact, setGetContact] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleContact = () => {
    window.open(
      `mailto:${getContact.email}?subject=${getContact.subject}&body=${getContact.message}%20goes%20here`
    );
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    console.log(name, value);

    if (name === "email") {
      setGetContact((prev) => ({
        ...prev,
        email: value,
      }));
    }
    if (name === "subject") {
      setGetContact((prev) => ({
        ...prev,
        subject: value,
      }));
    }

    if (name === "message") {
      setGetContact((prev) => ({
        ...prev,
        message: value,
      }));
    }
  };

  console.log(getContact);

  return (
    <motion.div
      className="tabs"
      initial={{ x: "-100%" }}
      animate={{ x: "calc(100vw - 100%)" }}
      transition={{ type: "tween", duration: 0.5 }}
    >
      <div className="">
        <h1>Contact Me!</h1>
      </div>

      <form>
        <input
          type="email"
          id="email"
          onChange={(e) => handleChange(e)}
          name="email"
          required
          placeholder="example@email.com"
        ></input>
        <input
          type="text"
          id="subject"
          onChange={(e) => handleChange(e)}
          name="subject"
          placeholder="Subject"
        ></input>
        <textarea
          type="text"
          id="message"
          onChange={(e) => handleChange(e)}
          name="message"
          required
          placeholder="enter message..."
        ></textarea>
        <button type="submit" value="Submit" onClick={handleContact}>
          Submit
        </button>
      </form>
    </motion.div>
  );
}
