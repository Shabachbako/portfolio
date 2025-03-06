import React from "react";
import "./HeroSection.css";
import { FaFacebookF, FaInstagram, FaDribbble, FaBehance } from "react-icons/fa";
import ProfileImage from "../assets/profile.png"; // Importing a default image

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Side - Image */}
        <div className="hero-image">
          <img src={ProfileImage} alt="Profile" />
        </div>

        {/* Right Side - Content */}
        <div className="hero-content">
          <h1>Hi, I am Kelechi - Web Developer + UX Designer</h1>
          <p>
            I design and code beautifully simple things and I love what I do. Just simple like that!
          </p>

          {/* Call to Action Button */}
          <button className="hire-button">Hire Me! ↗</button>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaDribbble /></a>
            <a href="#"><FaBehance /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
