import projectData from "../utils/projects";
import Card from "react-bootstrap/Card";
import { CardGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
export default function Projects() {
  console.log(projectData);

  const styles = {
    h1: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "7rem",
      fontSize: "3rem",
    },
  };

  return (
    <div className="project-details">
      <motion.h1
        style={styles.h1}
        initial={{ x: "2vw", opacity: 0 }}
        animate={{ x: "0vw", opacity: 100 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        Projects
      </motion.h1>
      <motion.div
        initial={{ x: "0vw", opacity: 0 }}
        animate={{ x: "0vw", opacity: 100 }}
        transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
        className="projects"
      >
        {projectData.map((project) => {
          return (
            <Card
              style={{ width: "20rem", margin: "1rem", textAlign: "center" }}
            >
              <Card.Img
                variant="top"
                src={project.src}
                style={{ height: "15rem" }}
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Link href={project.link} target="__blank" as={Button}>
                  Link
                </Card.Link>
                <Card.Link
                  className="bg-dark"
                  href={project.git}
                  target="__blank"
                  as={Button}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </Card.Link>
              </Card.Body>
            </Card>
          );
        })}
      </motion.div>
    </div>
  );
}
