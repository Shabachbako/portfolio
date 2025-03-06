import React from "react";
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";
import logo from "../assets/logo.png"; // Adjust path as needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <ul className="footer-nav">
          <li><a href="#">Meet Me</a></li>
          <li><a href="#">Works</a></li>
          <li><a href="#">Achievements</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Copyright */}
        <p className="footer-text">
          © 2024 All rights reserved by <a href="#">ThemeJunction</a>
        </p>
      </div>

      {/* Scroll to Top Button */}
      <div className="scroll-to-top">
        <a href="#top">
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
