import { Link } from "react-router-dom";

function ProjectVisual({ project }) {
  if (project.image) {
    return <img src={project.image} alt={project.imageAlt} />;
  }

  return (
    <div className="mini-architecture" aria-label="FitBuddy architecture preview">
      <span>mobile</span>
      <i aria-hidden="true">→</i>
      <span>API</span>
      <i aria-hidden="true">→</i>
      <span>LLM</span>
      <b>adaptive feedback loop</b>
    </div>
  );
}

function ProjectItem({ project, featured = false }) {
  return (
    <article className={featured ? "project-card project-card-featured" : "project-card"}>
      <div className="project-card-visual">
        <ProjectVisual project={project} />
        <span className="project-index">{project.number}</span>
      </div>

      <div className="project-card-copy">
        <div className="project-card-meta">
          <span>{project.type}</span>
          <span>{project.date}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <div className="project-tags" aria-label="Technologies">
          {project.technologies.slice(0, featured ? 5 : 3).map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <Link className="inline-link" to={`/projects/${project.id}`}>
          Read case study <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}

export default ProjectItem;
