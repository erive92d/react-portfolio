import { useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import Landing from "./Landing";
import Container from "react-bootstrap/Container";
import Footertag from "./Footer";

function Navigation() {
  const [page, setPage] = useState("#home");

  const currentPage = (val) => setPage(val);

  const handlePage = () => {
    if (page === "#home") {
      return <Landing />;
    }
    if (page === "about") {
      return <About />;
    }
    if (page === "projects") {
      return <Projects />;
    }
    if (page === "contact") {
      return <Contact />;
    }
    if (page === "resume") {
      return <Resume />;
    }
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#about" onClick={() => currentPage("#home")}>
            <h1>DE</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="links" defaultActiveKey="/">
              <Nav.Link href="#about" onClick={() => currentPage("about")}>
                About
              </Nav.Link>
              <Nav.Link href="#project" onClick={() => currentPage("projects")}>
                Projects
              </Nav.Link>
              <Nav.Link href="#contact" onClick={() => currentPage("contact")}>
                Contact
              </Nav.Link>
              <Nav.Link href="#resume" onClick={() => currentPage("resume")}>
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {handlePage()}
      <Footertag />
    </>
  );
}

export default Navigation;
