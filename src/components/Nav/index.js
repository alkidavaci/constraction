import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './style.css'

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item-box">
            Home
          </Link>
          <Link to="/projects" className="navbar-item-box">
            Projects
          </Link>
          <Link to="/about" className="navbar-item-box">
            About Us
          </Link>
          <Link to="/contact" className="navbar-item-box">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
