import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './component/Navbar';
import Profile from './pages/Profile';

const App = () => {
    return (
        <div>
           <Navbar/>
           <BrowserRouter>
                <Routes>
                <Route path="/profile" element={<Profile/>} />
                </Routes>
            </BrowserRouter>,
        </div>
    );
};

export default App;