import { useEffect } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import { Tab } from 'bootstrap'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Resume from './Resume'
export default function Mynav (props) {
  

    return (

      <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="About">
        <About />
      </Tab>
      <Tab eventKey="profile" title="Projects">
        <Projects/>
      </Tab>
      <Tab eventKey="contact" title="Contacts">
        <Contact/>
      </Tab>
      <Tab eventKey="resume" title="Resume">
        <Resume/>
      </Tab>
    </Tabs>
      
      
      
      
        
    )
}