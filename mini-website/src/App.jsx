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
import Navbar from './components/Navbar';
import Dashbd from './pages/dashbd';
import Profiles from './pages/Profiles';
import Settingss from './pages/Settingss';
import Product from './pages/Product';
import UseEffect from './pages/UseEffect';
const App = () => {
  return (
    <div >
        <BrowserRouter>
        <div>
       
        <Navbar />

        <div className="container-fluid mt-5">
          <div className="row">
           
            <div className="col-md-3">
              <Sidebar />
            </div>

           
            <div className="col-md-9">
              <div className="p-4">
             
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} >
                    <Route path="order" element={<Order />} />
                    <Route path="checkout" element={<Checkout />} />
                  </Route>
                  <Route path="/dashboard" element={<Dashbd />} />
                  <Route path="/profile" element={<Profiles />} />
                  <Route path="/setting" element={<Settingss />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/useeffect" element={<UseEffect />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
        </div>
        </BrowserRouter>
        <div className='row'>
           <Footer/>
        </div>
       
      </div>
  );
};

export default App;