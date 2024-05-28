import TextWithAnimation from "../TextWithAnimation";
import "./style.css";
import {
  FaCode,
  FaPuzzlePiece,
  FaSearch,
  FaGraduationCap,
} from "react-icons/fa";

const AboutMe = () => {
  return (
    <>
      <h2>About Me</h2>
      <section className="about-me-container flex-col-start-center flex-gap-m">
        <p className="about-intro">
          I'm a final-year Computer Science student with a focus on full-stack
          development
        </p>
        <div className="about-details flex-col-center-center flex-gap-s">
          <div className="flex-row-center-start flex-gap-m">
            <FaCode className="about-icon" />
            <h3>
              Developed strong skills in both client-side and server-side
              programming
            </h3>
          </div>
          <div className="flex-row-center-start flex-gap-m">
            <FaPuzzlePiece className="about-icon" />
            <h3>Passionate about solving technical challenges</h3>
          </div>
          <div className="flex-row-center-start flex-gap-m">
            <FaSearch className="about-icon" />
            <h3>
              Actively seeking opportunities to apply my skills in practical
              settings
            </h3>
          </div>
          <div className="flex-row-center-start flex-gap-m">
            <FaGraduationCap className="about-icon" />
            <h3>
              Committed to continuously learning and growing within the field
            </h3>
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
