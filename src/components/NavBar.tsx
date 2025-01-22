import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "@/app/styles/NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo"></div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}>
        <li><a href="#hero" className="navbar-link">Home</a></li>
        <li><a href="#projects" className="navbar-link">Projects</a></li>
        <li><a href="#skills" className="navbar-link">Skills</a></li>
        <li><a href="#about" className="navbar-link">About</a></li>
        <li><a href="#contact" className="navbar-link">Contact</a></li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
    </nav>
  );
};

export default NavBar;
