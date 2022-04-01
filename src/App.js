import React, {forwardRef, useRef} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
// import { Button, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Nav0 from './components/Navbar';
// import Skillset from './components/Skillset';
// import Greeting from './components/Greeting';
// import Intro from './components/Intro';
// import Projects from './components/Projects';
// import Profile from './components/Profile';
import Bottom from './components/Bottom';
import ScrollToTop from './components/ScrollToTop';


function App() {
  // const aboutSection = useRef(null);
  
  
  return (
    <div className="App">
      <Nav0/>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      
      <Bottom />
      <ScrollToTop/>
    </div>
  );
}

export default App;
