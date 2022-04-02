import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Nav0 from './components/Navbar';
import Bottom from './components/Bottom';
import ScrollToTop from './components/ScrollToTop';


function App() {
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
