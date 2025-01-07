import { Project } from "./components";
import { projects } from "./constants";

export const Projects = () => {
  return (
    <section className="dark-section projects-container">
      <h2 className="projects-title">Projects</h2>
      <section className="projects">
        {projects.map((project) => (
          <Project projectData={project} key={project.name} />
        ))}
      </section>
    </section>
  );
};
