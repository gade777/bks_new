import React, { useState } from 'react';
import '../Navbar/Navbar.css';

function Navbar() {
 const [isOpen, setIsOpen] = useState(false);
 const [isContentOpen, setIsContentOpen] = useState(false);
 const [isCoursesOpen, setIsCoursesOpen] = useState(false);

 const toggleMenu = () => {
    setIsOpen(!isOpen);
 };

 const toggleContentDropdown = () => {
    setIsContentOpen(!isContentOpen);
 };

 const toggleCoursesDropdown = () => {
    setIsCoursesOpen(!isCoursesOpen);
 };

 return (
    <div className="navbar">
      <div className="logo">
        <img src="http://127.0.0.1:5500/public/assets/test/lllloooo.png" alt="Logo" />
      </div>
      <div className={`links ${isOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <div className="dropdown" onClick={toggleContentDropdown}>
          <span>Content</span>
          <div className={`dropdown-content ${isContentOpen ? "show" : ""}`}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <a href="#">Scope</a>
        <div className="dropdown" onClick={toggleCoursesDropdown}>
          <span>Certificate Courses</span>
          <div className={`dropdown-content ${isCoursesOpen ? "show" : ""}`}>
            <a href="#">Course 1</a>
            <a href="#">Course 2</a>
            <a href="#">Course 3</a>
          </div>
        </div>
        <a href="#">Contact</a>
      </div>
      <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="menu-icon-bar"></div>
        <div className="menu-icon-bar"></div>
        <div className="menu-icon-bar"></div>
      </div>
    </div>
 );
}

export default Navbar;
