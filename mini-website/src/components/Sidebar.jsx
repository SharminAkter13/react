import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            
              <aside className="bg-light border-end vh-100 p-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/profile" className="nav-link">Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/setting" className="nav-link">Settings</Link>
                  </li>
                </ul>
              </aside>       
        </div>
    );
};

export default Sidebar;