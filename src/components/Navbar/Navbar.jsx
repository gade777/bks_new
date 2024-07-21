import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownName);
    }
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      setOpenDropdown(null);
    }
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        {/* <img src={bks1} alt="Logo" /> */}
      </Link>
      <div className={`links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeDropdown}>Home</Link>
        <div className="dropdown">
          <span onClick={() => toggleDropdown('content')}>Content</span>
          <div className={`dropdown-content ${openDropdown === 'content' ? 'show' : ''}`}>
            <a href="https://www.hindueshop.com/" target="_blank" rel="noopener noreferrer" onClick={closeDropdown}>Books</a>
            <Link to="/research" onClick={closeDropdown}>Research Papers</Link>
          </div>
        </div>
        <div className="dropdown">
          <span onClick={() => toggleDropdown('liveWorkshop')}>Live Workshop</span>
          <div className={`dropdown-content ${openDropdown === 'liveWorkshop' ? 'show' : ''}`}>
            <Link to="/workshop-india" onClick={closeDropdown}>India</Link>
            <Link to="/workshop-global" onClick={closeDropdown}>Global</Link>
          </div>
        </div>
        <Link to="/Instructor" onClick={closeDropdown}>Coach Profile</Link>
        <div className="auth-buttons">
          <Link to="/login" className="auth-button" onClick={closeDropdown}>Login</Link>
          <Link to="/register" className="auth-button" onClick={closeDropdown}>Register</Link>
        </div>
        <Link to="/cart" className="cart-link" onClick={closeDropdown}>Cart</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
}

export default Navbar;
