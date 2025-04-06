import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";  
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // Close menu on mobile
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Email */}
        <div className="logo-email">
          <img src={logo} alt="Logo" className="logo" />
          <span className="email">Kelechieze2000@gmail.com</span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a onClick={() => scrollToSection("hero")}>Meet Me</a></li>
          <li><a onClick={() => scrollToSection("works")}>Works</a></li>
          <li><a onClick={() => scrollToSection("portfolio")}>Portfolio</a></li>
          <li><a onClick={() => scrollToSection("achievements")}>Achievements</a></li>
          <li><a onClick={() => scrollToSection("skills")}>Skills</a></li>
          <li><a onClick={() => scrollToSection("contact")}>Contact</a></li>

          {/* Resume Button (ONLY Visible in Mobile Menu) */}
          {menuOpen && (
            <li className="mobile-resume">
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
