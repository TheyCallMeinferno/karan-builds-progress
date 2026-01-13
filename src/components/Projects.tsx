import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech">
              {project.tech.join(" • ")}
            </div>

            <div className="links">
              <a href={project.link} target="_blank">Live</a>
              <a href={project.github} target="_blank">GitHub</a>
            </div>

            <span className="status">{project.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
