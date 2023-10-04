import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo.png';
import './Navbar.css'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>   
            <nav className="navbar">
                {/* Wrapped the logo with a Link component pointing to the Home page */}
                <Link to='/'>
                    <img src={logo} className='logo' alt='logo'/>
                </Link>
                <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    {menuOpen ? 'X' : '☰'}
                </div>
                <div className={`menu-links ${menuOpen ? 'active' : ''}`}>
                    <Link to='/' onClick={toggleMenu}>Home</Link>
                    <Link to='/services' onClick={toggleMenu}>Services</Link>
                    <Link to='/about' onClick={toggleMenu}>About</Link>
                    <Link to='/insight' onClick={toggleMenu}>Insight</Link>
                    <Link to='/contact' onClick={toggleMenu}>Contact</Link>
                    <Link to="/subsidiaries" className="btn-link" onClick={toggleMenu}>
                        <button>Subsidiaries</button>
                   
                    </Link>
                    <Link to="/clients" className="btn-link" onClick={toggleMenu}>
                        <button>Client Zone</button>
                    </Link>
                   
                </div>
            </nav>
        </>  
    )
}

export default Navbar;

