import ProjectCard from "../ProjectCard";
import "./style.css";

const Projects = ({ myProjects }) => {
  return (
    <>
      <h2>My Projects</h2>
      <div className="projects">
        {myProjects.map((project, index) => (
          <ProjectCard key={index} projectDetails={project} />
        ))}
      </div>
    </>
  );
};
export default Projects;
