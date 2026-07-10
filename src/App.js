import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Projects from './Projects'; 

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;