import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import Test from './Test';


function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <HelloWorld />
      <h2>Testing...</h2>
      <p>My name is Derek.</p>
      <Test/>
    </div>
  );
}

export default App;
