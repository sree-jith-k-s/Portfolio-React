import React, { useState } from 'react';
import '../assets/css/Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Sreejith</div>
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="menu-button"
            onClick={toggleMenu}
          >
            <span id="menu-icon" className="menu-icon">
              {isMenuOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>
        <ul
          id="menu"
          className={`navbar-links ${isMenuOpen ? 'open' : 'hidden md:flex space-x-4'}`}
        >
          <li>
            <a href="#home" className="link hover:text-zinc-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="link hover:text-zinc-300">
              About
            </a>
          </li>
          <li>
            <a href="#profile" className="link hover:text-zinc-300">
              Profile
            </a>
          </li>
          <li>
            <a href="#education" className="link hover:text-zinc-300">
              Education
            </a>
          </li>
          <li>
            <a href="#project" className="link hover:text-zinc-300">
              Project
            </a>
          </li>
          <li>
            <a href="#know" className="link hover:text-zinc-300">
              Know More
            </a>
          </li>
          <li>
            <a href="#connect" className="link hover:text-zinc-300">
              Connect
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
