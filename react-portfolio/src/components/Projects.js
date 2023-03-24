import { motion } from "framer-motion";
import projectData from "../projects/projectData";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function Projects() {
  console.log(projectData)
  const handleLink = (git) => {
    window.open(git)
  }


  return (
    <motion.div className="project-div"
      initial={{ y: "100%" }}
      animate={{ y: "calc(75vh - 100%)" }}
      transition={{ type: "tween", stiffness: 80, duration: 0.5 }}
    >
      <h1 className="mb-3">Projects</h1>
      <Row xs={2} md={4} className="g-3 mb-5">
      {projectData.map((proj) => (
        <Col>
          <Card style={{cursor: 'pointer'}} onClick={()=> handleLink(proj.git) }>
            <Card.Img variant="top" src={proj.src} />
            <Card.Body>
              <Card.Title>{proj.title}</Card.Title>
              <Card.Text>
                {proj.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </motion.div>
  );
}
