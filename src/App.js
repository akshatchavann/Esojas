import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';

import Home from './Home';
import Projects from './Projects'; 

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;