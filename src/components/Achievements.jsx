import React from "react";
import "./Achievements.css";
import uiDesignImage from "../assets/design.png"; // Import the image

const Achievements = () => {
  // Scroll to Contact Section
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="achievements">
      <div className="achievements-container">
        {/* Left Content */}
        <div className="achievements-text">
          <h2>
            Achievements in my <br /> <span className="highlight">professional life.</span>
          </h2>
          <p>
            Since beginning my journey as a freelance designer nearly 8 years ago,
            I've done remote work for agencies, consulted for startups, and collaborated
            with talented people to create digital products for both business and consumer use.
          </p>
          {/* Smooth Scroll Button to Contact Section */}
          <button className="contact-btn" onClick={handleContactClick}>
            Contact Me ↗
          </button>
        </div>

        {/* Right Content */}
        <div className="achievements-card">
          <h3>
            <span className="highlight">Interface Designer</span>
          </h3>
          <p>
            As a UI designer, I work closely with clients to understand their needs and
            goals for their software or website.
          </p>
          <img src={uiDesignImage} alt="UI Design Elements" className="design-image" />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
