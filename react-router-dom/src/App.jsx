import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;