import Header from "./Header";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.div
      initial={{ x: "2vw", opacity: 0 }}
      animate={{ x: "0vw", opacity: 100 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="resume">
        <div>
          <h1>Full-Stack Web Development</h1>
          <div className="skills">
            <p>
              Developed and maintained multiple websites and web applications
              using HTML, CSS, Javascript, React, MongoDB, and MySQL.
            </p>

            <p>
              Collaborated with designers and other developers to create
              responsive, user-friendly interfaces.
            </p>

            <p>
              Implemented back-end features and database management using
              Node.js, Express.js, and other technologies.
            </p>

            <p>
              Worked with APIs and integrated third-party libraries and
              frameworks to enhance functionality
            </p>

            <p>
              Participated in code reviews and contributed to team development
              efforts
            </p>
          </div>
        </div>

        <div className="resumeFile">
          <h2>Resume</h2>
          <p>Here's a link to view my resume:</p>
          <a
            href="https://docs.google.com/document/d/1pch-mCKIKW-K7kF4qxVOMj_KkFnW41o4V9eL6vTm7aA/edit?usp=sharing"
            target="__blank"
          >
            View Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
}
