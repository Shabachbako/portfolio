import React from "react";
import "./HeroSection.css";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import ProfileImage from "../assets/homeimage.png"; // Importing a default image

const HeroSection = () => {
  // Scroll to Contact Section
  const handleHireMeClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <button className="hire-button" onClick={handleHireMeClick}>
            Hire Me! ↗
          </button>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
