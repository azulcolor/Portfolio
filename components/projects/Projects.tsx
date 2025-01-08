import { Project } from "./components";
import { projects } from "./constants";

export const Projects = () => {
  return (
    <section className="dark-section projects-container" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects">
        {projects.map((project) => (
          <Project projectData={project} key={project.name} />
        ))}
      </div>
    </section>
  );
};
