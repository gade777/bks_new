import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import logo from '../../assets/logo_1.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleDropdownItemClick = () => {
    setDropdownOpen(null); // Close dropdown when an item is clicked
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
      setDropdownOpen(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li className="dropdown">
          <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown(1); }}>Content</a>
          <ul className={`dropdown-menu ${dropdownOpen === 1 ? 'show' : ''}`}>
            <li><Link to="https://www.hindueshop.com/" onClick={handleDropdownItemClick}>Books</Link></li>
            <li><Link to="/research" onClick={handleDropdownItemClick}>Research Papers</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown(2); }}>Live Workshops</a>
          <ul className={`dropdown-menu ${dropdownOpen === 2 ? 'show' : ''}`}>
            <li><Link to="/workshop-in" onClick={handleDropdownItemClick}>India</Link></li>
            <li><Link to="/workshop-Global" onClick={handleDropdownItemClick}>Global</Link></li>
          </ul>
        </li>
        <li><Link to="/Instructor">Coach Profile</Link></li>
        {/* <li><Link to="/cart">Cart</Link></li> */}
      </ul>
      {/* <div className="navbar-buttons">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/register" className="btn">Register</Link>
      </div> */}
      <button className="navbar-toggle" onClick={toggleNavbar}>
        <span className="navbar-toggle-icon"></span>
      </button>
    </nav>
  );
};

export default Navbar;
