import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
    <nav className="navbar">
        <ul className="navbar-list">
            <li className="navbar-item">
                <Link to="/">Inici</Link>
            </li>
            <li className="navbar-item">
                <Link to="/login">Login</Link>
            </li>
        </ul>
    </nav>
);

export default Navbar;
