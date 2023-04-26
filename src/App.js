import React from 'react'
import Navbar from './components/navbar/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.js'
import Projects from './components/pages/Projects';
import './App.css'
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact  Component={Home}/>
          <Route path='/Projects' excat Component={Projects}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
