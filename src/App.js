import React from 'react'
import Navbar from './components/navbar/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.js'
import Projects from './components/pages/Projects';
import AboutMe from './components/pages/AboutMe';
import Skills from './components/pages/Skills';
import IndividualProject from './components/pages/IndividualProject.js';
import TechnicalProjects from './components/pages/TechnicalProjects.js';
import ProjectFolder from './components/pages/ProjectFolder.js'
import './App.css'
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/personal-website-react' exact  Component={Home}/>
          <Route path='/Projects' excat Component={Projects}/>
          <Route path='/AboutMe' excat Component={AboutMe}/>
          <Route path='/Skills' excat Component={Skills}/>
          <Route path='/IndividualProject' excat Component={IndividualProject}/>
          <Route path='/ProjectFolder' excat Component={ProjectFolder}/>
          <Route path='/TechnicalProjects' excat Component={TechnicalProjects}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
