import { Link, Navigate, useParams } from "react-router-dom";
import { getProject } from "../helpers/ProjectList";

function Architecture({ items }) {
  return (
    <div className="architecture-diagram">
      {items.map((item, index) => (
        <div className="architecture-step" key={item.title}>
          <span className="architecture-number">0{index + 1}</span>
          <strong>{item.title}</strong>
          <em>{item.detail}</em>
          <small>{item.note}</small>
          {index < items.length - 1 && <i aria-hidden="true">→</i>}
        </div>
      ))}
    </div>
  );
}

function ProjectDisplay() {
  const { id } = useParams();
  const project = getProject(id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <article className="case-study" id="top">
      <header className="case-hero">
        <div className="case-hero-topline">
          <Link className="back-link" to="/projects">← All projects</Link>
          <span>{project.number} / 03</span>
        </div>
        <p className="section-label">{project.type}</p>
        <h1>{project.name}</h1>
        <p className="case-deck">{project.summary}</p>
        <div className="case-facts">
          <div><span>When</span><strong>{project.date}</strong></div>
          <div><span>Outcome</span><strong>{project.outcome}</strong></div>
          <div><span>Role</span><strong>Product engineering</strong></div>
        </div>
      </header>

      <section className="case-section case-overview">
        <p className="section-label">01 · Context</p>
        <div>
          <h2>The project in brief.</h2>
          <p className="large-copy">{project.overview}</p>
        </div>
      </section>

      {project.image && (
        <figure className="case-image">
          <img src={project.image} alt={project.imageAlt} />
          <figcaption>Prototype concept visual</figcaption>
        </figure>
      )}

      {project.architecture && (
        <section className="case-section architecture-section">
          <p className="section-label">02 · Architecture</p>
          <div>
            <h2>Four layers, one continuous conversation.</h2>
            <p>The backend coordinated product state and model behaviour instead of treating the LLM as a standalone chat endpoint.</p>
            <Architecture items={project.architecture} />
          </div>
        </section>
      )}

      <section className="case-section contribution-section">
        <p className="section-label">{project.architecture ? "03" : "02"} · Contribution</p>
        <div>
          <h2>What I worked on.</h2>
          <div className="contribution-grid">
            {project.contributions.map((contribution, index) => (
              <div className="contribution-card" key={contribution.title}>
                <span>0{index + 1}</span>
                <h3>{contribution.title}</h3>
                <p>{contribution.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {project.results && (
        <section className="results-panel">
          <div className="results-heading">
            <p className="section-label">04 · Evaluation</p>
            <h2>Measured with people, not just prompts.</h2>
          </div>
          <div className="result-grid">
            {project.results.map((result) => (
              <div key={result.value}>
                <strong>{result.value}</strong>
                <span>{result.label}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="case-close">
        <div>
          <p className="section-label">Project boundary</p>
          <p>{project.disclaimer}</p>
        </div>
        <div>
          <p className="section-label">Toolkit</p>
          <div className="project-tags">
            {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </div>
      </section>

      <nav className="case-pagination" aria-label="Project navigation">
        <Link to="/projects">View all projects</Link>
        <a href="mailto:yiping247@gmail.com">Discuss this work ↗</a>
      </nav>
    </article>
  );
}

export default ProjectDisplay;
