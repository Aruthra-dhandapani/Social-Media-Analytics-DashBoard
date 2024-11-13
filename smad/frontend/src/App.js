import React from 'react';
import { Routes, Route, Navigate  } from 'react-router-dom';
import Dashboard from './components/Dashboard';  
import YouTube from './components/YouTube';
import Navbar from './components/Navbar';
import About from './components/About';
import Twitter from './components/Twitter';


const App = () => {
  return (
    <div>
      {<Navbar />}
      <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/youtube" element={<YouTube />} />
        <Route path="/twitter" element={<Twitter />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
