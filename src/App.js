import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Button, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav0 from './components/Navbar';
import Skillset from './components/Skillset';
import Greeting from './components/Greeting';
import Intro from './components/Intro';


function App() {
  return (
    <div className="App">
      <Nav0/>
      <Greeting/>
      <Intro/>
      <Skillset/>
      {/* <h1 variant>Hello World!</h1> */}
    </div>
  );
}

export default App;
