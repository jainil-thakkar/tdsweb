import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavBar = () => {
    return (
        <nav className="sticky-nav">
            <div>
                <img src={logo} alt="Logo" className="nav-logo"/>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/episodes">Episodes</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
