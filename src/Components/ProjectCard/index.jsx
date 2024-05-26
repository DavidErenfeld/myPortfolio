import "./style.css";
import WebsiteIcon from "../../Components/Icons/WebsiteIcon";
import GithubIcon from "../../Components/Icons/GithubIcon";

const ProjectCard = ({
  projectName,
  projectDescription,
  websiteLink,
  githubLink,
  technologies,
}) => {
  return (
    <section className="card">
      <h3 className="title">{projectName}</h3>
      <p className="description">{projectDescription}</p>
      <div className="links">
        <div className="link">
          <div>
            <GithubIcon />
          </div>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            Read More on GitHub
          </a>
        </div>
        <div className="link">
          <div>
            <WebsiteIcon />
          </div>
          <a href={websiteLink} target="_blank" rel="noopener noreferrer">
            Link to Website
          </a>
        </div>
      </div>
      <div className="technologies-container">
        <p className="sub-titel">technologies</p>
        <div className="technologies">
          {technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectCard;
