import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="projects-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <div className="tech">
            {project.tech.map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <p className="status">{project.status}</p>

          {project.link && (
            <a href={project.link} target="_blank">View Project</a>
          )}
        </div>
      ))}
    </section>
  );
}
