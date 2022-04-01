import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
// import { Button, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav0 from './components/Navbar';
// import Skillset from './components/Skillset';
import Greeting from './components/Greeting';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Profile from './components/Profile';
import Bottom from './components/Bottom';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div className="App">
      <Nav0/>
      {/* <Routes> */}
        <Greeting/>
        <Intro/>
        <Profile/>
        <Projects/>
      {/* </Routes> */}
      <Bottom />
      <ScrollToTop/>
    </div>
  );
}

export default App;
