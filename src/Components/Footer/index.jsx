import React from "react";
import { FaLinkedin, FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";
import "./style.css"; // Importing the CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/david-erenfeld?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="footer-icon" />
        </a>
        <a href="mailto:1020dudu@gmail.com">
          <FaEnvelope className="footer-icon" />
        </a>
        <a
          href="https://wa.me/+972503781079"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="footer-icon" />
        </a>
        <a href="tel:+972503781079">
          <FaPhone className="footer-icon" />
        </a>
      </div>
      <p className="footer-text">
        © 2024 All rights reserved to David Erenfeld
      </p>
    </footer>
  );
};

export default Footer;
