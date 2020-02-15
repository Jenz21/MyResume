import React from "react";
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './vendor/fontawesome-free/css/all.min.css';
import './vendor/devicon/devicon.css';
import './index.css';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';





function App(){



  return([
    <Sidebar />,
    <div className="container-fluid p-0">
      <About />
      <hr className="m-0"></hr>
      <Skills />
      <hr className="m-0"></hr>
      <Experience/>
      <hr className="m-0"></hr>
      <Education />
      <hr className="m-0"></hr>
      <Projects />
    </div>
    
  ])
}


export default App; 

