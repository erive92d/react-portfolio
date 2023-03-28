import { motion } from "framer-motion";
import projectData from "../data/projectData";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Projects() {
  console.log(projectData);
  const handleLink = (git) => {
    window.open(git);
  };

  if (!projectData) {
    return <h1>Loading...</h1>;
  }

  return (
    <motion.div
      className="project-div"
      initial={{ x: "100%" }}
      animate={{ x: "calc(100vw - 100%)" }}
      transition={{ type: "tween", duration: 0.5 }}
    >
      <h1 className="mb-3">Projects</h1>
      <Row xs={2} md={4} className="g-4 mb-3">
        {projectData.map((proj) => (
          <Col>
            <Card
              style={{ cursor: "pointer" }}
              onClick={() => handleLink(proj.git)}
            >
              <Card.Img variant="top" src={proj.src} />
              <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>{proj.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div>
        <a
          href="https://github.com/erive92d?tab=repositories"
          className="badge badge-primary"
          style={{
            textDecoration: "none",
            color: "white",
            background: "#0d6efd",
            padding: "5px",
            borderRadius: "10px",
          }}
          target="__blank"
        >
          View More
        </a>
      </div>
    </motion.div>
  );
}
