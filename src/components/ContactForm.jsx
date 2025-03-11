import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaThumbsUp } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ Spinner state

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Please do not reload the page while your form is being submitted...");
    setLoading(true); // ✅ Activate spinner

    try {
      const response = await axios.post("https://portfolio-wk5m.onrender.com/send", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setStatus(response.data.message);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      setShowModal(true);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false); // ✅ Stop spinner
    }
  };

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

          <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="First name" required value={formData.firstName} onChange={handleChange} style={{ color: "black" }} />
            <input type="text" name="lastName" placeholder="Last name" required value={formData.lastName} onChange={handleChange} style={{ color: "black" }} />
            <input type="email" name="email" placeholder="Email address" required value={formData.email} onChange={handleChange} style={{ color: "black" }} />
            <input type="tel" name="phone" placeholder="Phone number" required value={formData.phone} onChange={handleChange} style={{ color: "black" }} />
            <textarea name="message" placeholder="What's The Job" rows="4" required value={formData.message} onChange={handleChange} style={{ color: "black" }}></textarea>
            
            <button type="submit" className="send-message-btn" disabled={loading}>
              {loading ? (
                <span className="spinner"></span> // ✅ Show spinner while loading
              ) : (
                <>Send Message <span className="arrow">↗</span></>
              )}
            </button>
          </form>

          {status && <p className="status-message">{status}</p>}
        </div>

        {/* Right Side - Contact Details */}
        <div className="contact-info">
          <p className="availability">
            I'm currently available to take on new projects, so feel free to send me a message. You can contact me anytime, 24/7.
          </p>
          <p className="contact-detail"><a href="tel:+2349166798290">+234 916 679 8290</a></p>
          <p className="contact-detail"><a href="mailto:kelechieze2000@gmail.com">kelechieze2000@gmail.com</a></p>
          <p className="contact-detail">
            <a href="#">Warne Park Street Pine,<br />FL 33157, New York</a>
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="https://www.instagram.com/babylee_thevoice?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/kelechi-joseph-934449340/"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* ✅ Success Modal */}
      {showModal && (
        <div className="modal-overlay1">
          <div className="modal1">
            <FaThumbsUp className="thumbs-up-icon" />
            <h3>Message Sent Successfully!</h3>
            <p>I'll get back to you as soon as possible.</p>
            <button onClick={() => setShowModal(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
