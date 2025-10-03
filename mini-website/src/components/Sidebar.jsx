import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            
              <aside className="bg-dark  text-light border-end vh-100 p-3 position-fixed" style={{ top: '60px', left: 0, width: '250px', height: '100%' }}>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link to="/cd" className="nav-link text-light fw-bold">Dashboard</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/profile" className="nav-link text-light fw-bold">Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/setting" className="nav-link text-light fw-bold">Settings</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/product" className="nav-link text-light fw-bold">Product</Link>
                  </li> 
                  <li className="nav-item">
                    <Link to="/useeffect" className="nav-link text-light fw-bold">Use Effect</Link>
                  </li>
                </ul>
              </aside>       
        </div>
    );
};

export default Sidebar;