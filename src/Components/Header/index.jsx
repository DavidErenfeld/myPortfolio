import React, { useState } from "react";
import "./style.css";
import { MdMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = ({ sections, toggleMobileNav, isMobileNavOpen }) => {
  const [animationComplete, setAnimationComplete] = useState(true);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const sidebarVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 40 },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: { type: "spring", stiffness: 40 },
    },
  };

  return (
    <>
      <a className="my-name" href="#">
        David Erenfeld
      </a>
      <nav className="nav flex-row-space-between flex-gap-large">
        <h3>
          <a href={`#${sections.about}`}>About Me</a>
        </h3>
        <h3>
          <a href={`#${sections.projects}`}>Projects</a>
        </h3>
        <h3>
          <a href={`#${sections.aducation}`}>Aducation</a>
        </h3>
        <h3>
          <a href={`#${sections.skills}`}>Skills</a>
        </h3>
        <h3>
          <a href={`#${sections.contact}`}>Contact</a>
        </h3>
      </nav>
      <MdMenu className="nav-mobile-icon" onClick={toggleMobileNav} />
      {isMobileNavOpen || !animationComplete ? (
        <motion.nav
          className="nav-mobile"
          variants={sidebarVariants}
          initial="closed"
          animate={isMobileNavOpen ? "open" : "closed"}
          onAnimationComplete={handleAnimationComplete}
        >
          <FaTimes
            className="close-nav-mobile-icon"
            onClick={toggleMobileNav}
          />
          <h3>
            <a href={`#${sections.about}`} onClick={toggleMobileNav}>
              About Me
            </a>
          </h3>
          <h3>
            <a href={`#${sections.projects}`} onClick={toggleMobileNav}>
              Projects
            </a>
          </h3>
          <h3>
            <a href={`#${sections.aducation}`} onClick={toggleMobileNav}>
              Aducation
            </a>
          </h3>
          <h3>
            <a href={`#${sections.skills}`} onClick={toggleMobileNav}>
              Skills
            </a>
          </h3>
          <h3>
            <a href={`#${sections.contact}`} onClick={toggleMobileNav}>
              Contact
            </a>
          </h3>
        </motion.nav>
      ) : null}
    </>
  );
};

export default Header;
