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
                <Card.Link href={project.git} target="__blank" as={Button}>
                  Github
                </Card.Link>
              </Card.Body>
            </Card>
          );
        })}
      </motion.div>
    </div>
  );
}
