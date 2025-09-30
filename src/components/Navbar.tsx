import React from 'react';
import logo from "../assets/logo-ls.jpg";
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <NavLink to="/">
                <img src={logo} alt="storeLogo" className='logo' />
            </NavLink>
            <div className='menuLinks'>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "link active-link" : "link"}
                >
                    Accueil
                </NavLink>
                <NavLink 
                    to="/services" 
                    className={({ isActive }) => isActive ? "link active-link" : "link"}
                >
                    Nos services
                </NavLink>
                <NavLink 
                    to="/contact" 
                    className={({ isActive }) => isActive ? "link active-link" : "link"}
                >
                    Contact
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => isActive ? "link active-link" : "link"}
                >
                    About
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
