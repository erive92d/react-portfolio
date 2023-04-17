import { Container, Row, Col } from "react-bootstrap";


export default function Footertag() {

  return (
    <footer className="bg-dark text-light" >
      <Container>
        <Row>
          <Col md={6} xs={4}>
            <p>&copy; 2023 Portfolio</p>
          </Col>
          <Col md={6} xs={6} >
            <div className="d-flex justify-content-end">
              <a
                href="https://github.com/your-github-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light mx-3"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/your-linkedin-username/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light mx-3"
              >
                LinkedIn
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );



}