import React from "react";
import "./ContactForm.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        {/* Left Side - Form */}
        <div className="contact-form">
          <h2 className="contact-title">
            Let’s <span className="highlight">work</span> together!
          </h2>
          <p className="contact-description">
            I design and code beautifully simple things, and I love what I do. Just simple like that!
          </p>
          <form>
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
            <input type="email" placeholder="Email address" required />
            <input type="tel" placeholder="Phone number" required />
            <textarea placeholder="Message" rows="4" required></textarea>
            <button type="submit" className="send-message-btn">
              Send Message <span className="arrow">↗</span>
            </button>
          </form>
        </div>

        {/* Right Side - Contact Details */}
        <div className="contact-info">
          <p className="availability">
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7.
          </p>
          <p className="contact-detail"><a href="tel:+2349166798290">+234 916 679 8290</a></p>
          <p className="contact-detail"><a href="mailto:gerolddesign@mail.com">kelechieze2000@gmail.com</a></p>
          <p className="contact-detail">
            <a href="#">Warne Park Street Pine,<br />FL 33157, New York</a>
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
