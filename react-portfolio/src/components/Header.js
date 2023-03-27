import { useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import Nav from "react-bootstrap/Nav";
import Footercomp from "./Footer";

function Header() {
  const [location, setLocation] = useState("about");

  const renderPage = () => {
    if (location === "about") {
      return <About />;
    }
    if (location === "projects") {
      return <Projects />;
    }
    if (location === "contacts") {
      return <Contact />;
    } else {
      return <Resume />;
    }
  };

  const handlePage = (value) => setLocation(value);

  return (
    <div className="main">
      <Navigation handlePage={handlePage} currentLocation={location} />
      {renderPage()}
      <Footercomp />
    </div>
  );
}

function Navigation(props) {
  console.log(props.currentLocation,'s')
  return (
    <Nav className="mb-3" fill variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link
          href="#about"
          onClick={() => props.handlePage("about")}
        >
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="#projects"
          onClick={() => props.handlePage("projects")}
          eventKey="link-1"

        >
          Projects
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="#contacts"
          onClick={() => props.handlePage("contacts")}
          eventKey="link-2"
        >
          Contacts
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="#resume"
          onClick={() => props.handlePage("resume")}
          eventKey="link-3"
        >
          Resume
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;
