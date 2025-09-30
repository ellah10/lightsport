import React, { useState } from 'react';
import logo from "../assets/logo-ls.jpg";
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <NavLink to="/">
                <img src={logo} alt="storeLogo" className='logo' />
            </NavLink>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div className={`menuLinks ${isOpen ? "open" : ""}`}>
                <NavLink to="/" className={({ isActive }) => isActive ? "link active-link" : "link"} onClick={() => setIsOpen(false)}>Accueil</NavLink>
                <NavLink to="/services" className={({ isActive }) => isActive ? "link active-link" : "link"} onClick={() => setIsOpen(false)}>Nos services</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "link active-link" : "link"} onClick={() => setIsOpen(false)}>Contact</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "link active-link" : "link"} onClick={() => setIsOpen(false)}>About</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
