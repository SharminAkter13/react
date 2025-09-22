import React from 'react';
import Navbar from '../components/Navbar';
import { Link, Outlet } from 'react-router';

const Services = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <div>
            <h1>This is Gallery Section</h1>
            </div>
            <nav>
                <ul>
                    <li>
                      <Link to="order">Order</Link>
                    </li>
                    <li>
                      <Link to="checkout">Checkout</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Services;