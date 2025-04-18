import React from "react";
import "./HeroSection.css";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import ProfileImage from "../assets/homeimage.png";
import { Typewriter } from "react-simple-typewriter";

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
          <h1>
            Hi, I am Kelechi Eze-{" "}
            <span className="typewriter">
              <Typewriter
                words={["Web Developer", "UX Designer", "Programmer"]} // Words to cycle
                loop={Infinity} // Infinite loop
                cursor
                cursorStyle="|" // Smoother cursor
                typeSpeed={70} // Slower typing speed for smooth effect
                deleteSpeed={50} // Slower deletion for better flow
                delaySpeed={2000} // Delay before switching words
              />
            </span>
          </h1>

          <p>
            I design and code beautifully simple things and I love what I do. Just simple like that!
          </p>

          {/* Call to Action Button */}
          <button className="hire-button" onClick={handleHireMeClick}>
            Hire Me! ↗
          </button>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://www.instagram.com/babylee_thevoice?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/kelechi-joseph-934449340/"><FaLinkedin /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaXTwitter /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
