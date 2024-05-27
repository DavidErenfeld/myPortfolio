import TextWithAnimation from "../TextWithAnimation";
import "./style.css";
import {
  FaCode,
  FaServer,
  FaPuzzlePiece,
  FaSearch,
  FaGraduationCap,
} from "react-icons/fa";

const AboutMe = () => {
  return (
    <>
      <h2>About Me</h2>
      <section className="about-me-container ">
        <p className="about-intro">
          I'm a final-year Computer Science student with a focus on full-stack
          development
        </p>
        <div className="list-container">
          <div className="about-box">
            <FaCode className="about-icon" />
            <p>
              Developed strong skills in both client-side and server-side
              programming
            </p>
          </div>
          <div className="about-box">
            <FaPuzzlePiece className="about-icon" />
            <p>Passionate about solving technical challenges</p>
          </div>
          <div className="about-box">
            <FaSearch className="about-icon" />
            <p>
              Actively seeking opportunities to apply my skills in practical
              settings
            </p>
          </div>
          <div className="about-box">
            <FaGraduationCap className="about-icon" />
            <p>
              Committed to continuously learning and growing within the field
            </p>
          </div>
        </div>
        <p className="about-outro">
          I am committed to continuously learning and growing within the field,
          aiming to make a significant impact wherever I work.
        </p>
      </section>
    </>
  );
};

export default AboutMe;
