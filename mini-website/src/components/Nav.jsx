import React from 'react';
import { Link } from "react-router";
import '../assets/css/NavCss.css';
const Nav = () => {
    return (
        <div>
            <ul> 
              
                <li> 
                    <Link to="/" >Home</Link>
                
                </li>
                <li> 
                    <Link to="/contact" >Contact</Link>
                
                </li>
                 <li> 
                    <Link to="/about" >About</Link>
                
                </li>
            </ul>
        </div>
    );
};

export default Nav;