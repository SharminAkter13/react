import React from 'react';

const Sidebar = () => {
    return (
        <div>
            
              <aside className="bg-light border-end vh-100 p-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                  </li>
                </ul>
              </aside>       
        </div>
    );
};

export default Sidebar;