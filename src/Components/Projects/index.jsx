import ProjectCard from "../ProjectCard";
import "./style.css";

const Projects = () => {
  return (
    <>
      <h2>My Projects</h2>
      <div className="projects">
        <ProjectCard
          projectName="My Portfolio"
          githubLink="https://github.com/your-repo-link"
          websiteLink="https://your-website-link"
          technologies={["Javascript", "React", "HTML", "CSS3"]}
        />
        <ProjectCard
          projectName="Travel easily server"
          githubLink="https://github.com/DavidErenfeld/Travel-Easily-Server.git"
          websiteLink="https://enigmatic-island-56921-258869278475.herokuapp.com/api-docs/"
          technologies={["Typescript", "NodeJS", "Express", "Jest", "Swagger"]}
        />
        <ProjectCard
          projectName="Travel easily front"
          githubLink="https://github.com/DavidErenfeld/Travel-Easily-Front.git"
          websiteLink="https://travel-easily.netlify.app/"
          technologies={["Typescript", "React", "HTML", "CSS3"]}
        />
        {/* <ProjectCard
          projectName="Travel easily"
          githubLink="https://github.com/your-repo-link"
          websiteLink="https://your-website-link"
          technologies={["nodeJS", "express", "css", "express", "html"]}
        /> */}
      </div>
    </>
  );
};
export default Projects;
