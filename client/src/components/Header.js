import React from 'react';
import { useLocation } from 'react-router-dom'; 
import logo from '../assets/logo.png'; 

const Header = () => {
    const location = useLocation(); // Get access to location object
    const isHomePage = location.pathname === '/'; // Check if the current route is the homepage

    // Return null (don't render anything) if it's the homepage
    if (isHomePage) {
        return null;
    }

    if (isHomePage) {
        return null;
    }

    return (
        <header>
            <div id="logo">
                <img src={logo} alt="Tech Detonator Show Logo" />
                <p>Welcome to Tech Detonator Show<br/> Presented by Jainil Thakkar</p>
            </div>
        </header>
    );
};

export default Header;
