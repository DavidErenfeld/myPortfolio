import "./style.css";
import WebsiteIcon from "../../Components/Icons/WebsiteIcon";
import GithubIcon from "../../Components/Icons/GithubIcon";

const ProjectCard = ({ projectDetails }) => {
  const { title, projectName, websiteLink, githubLink, technologies } =
    projectDetails;
  return (
    <section className="card flex-col-start-start">
      <p className="tech-tag main-tag">{title}</p>
      <p className="sub-titel">{projectName}</p>
      <div className="links flex-col-start-center flex-gap-s">
        <div className="link flex-row-space-between">
          <div>
            <GithubIcon />
          </div>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            Read More on GitHub
          </a>
        </div>
        <div className="link flex-row-space-between">
          <div>
            <WebsiteIcon />
          </div>
          <a href={websiteLink} target="_blank" rel="noopener noreferrer">
            Link to Website
          </a>
        </div>
      </div>
      <div className="flex-col-start-center flex-gap-s ">
        <h3>technologies</h3>
        <div className="technologies flex-row-center-start flex-wrap flex-gap-s ">
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
