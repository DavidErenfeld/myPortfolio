import React from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
  FaGithub,
} from "react-icons/fa";
import "./style.css";

const Footer = ({ contactDetails }) => {
  const { github, linkedin, email, whatsApp, phonNumber, rights } =
    contactDetails;

  return (
    <footer className="footer-container">
      <div className="footer-icons">
        <a href={`${linkedin}`} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
        <a href={`${github}`} target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" />
        </a>
        <a href={`mailto:${email}`}>
          <FaEnvelope className="footer-icon" />
        </a>
        <a
          href={`https://wa.me/${whatsApp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="footer-icon" />
        </a>
        <a href={`tel:${phonNumber}`}>
          <FaPhone className="footer-icon" />
        </a>
      </div>
      <p className="footer-text">© {rights}</p>
    </footer>
  );
};

export default Footer;
