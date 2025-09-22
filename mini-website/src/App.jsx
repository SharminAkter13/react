import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Order from './pages/Order';
import Checkout from './pages/Checkout';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
const App = () => {
  return (
    <div >
      <div className='d-flex flex-column min-vh-100'>
        <BrowserRouter>
        <div className="row">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} >
              <Route path="order" element={<Order />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
          </Routes>
          <div className="d-flex flex-grow-1">
          <Sidebar/>
          </div>
          <Footer/>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;