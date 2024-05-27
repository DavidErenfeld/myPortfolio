import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJest,
  SiSwagger,
  SiMongodb,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiJsdelivr,
  SiJavascript,
  SiReact,
} from "react-icons/si";
import "./style.css";

const Skills = () => {
  return (
    <>
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skills-category">
          <p>Backend</p>
          <div className="icons-container">
            <SiReact className="skill-icon react" />
            <FaNode className="skill-icon node" />
            <SiExpress className="skill-icon express" />
          </div>
        </div>
        <div className="skills-category">
          <p>Frontend</p>
          <div className="icons-container">
            <SiHtml5 className="skill-icon html" />
            <SiCss3 className="skill-icon css" />
            <SiJavascript className="skill-icon javascript" />
            <SiTypescript className="skill-icon typescript aa" />
          </div>
        </div>

        <div className="skills-category">
          <p>Others</p>
          <div className="icons-container">
            <SiMongodb className="skill-icon mongodb" />
            <SiJest className="skill-icon jest" />
            <SiSwagger className="skill-icon swagger" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
