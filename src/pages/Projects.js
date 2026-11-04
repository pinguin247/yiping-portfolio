import { Link } from "react-router-dom";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="inner-page" id="top">
      <header className="inner-hero">
        <Link className="back-link" to="/">← Home</Link>
        <p className="section-label">Selected work · 2023–2024</p>
        <h1>Projects where software meets people.</h1>
        <p className="inner-intro">
          Applied AI, mobile products, and systems thinking—documented with the problem,
          architecture, individual contribution, and honest constraints.
        </p>
      </header>

      <section className="projects-stack" aria-label="Project case studies">
        {ProjectList.map((project, index) => (
          <ProjectItem key={project.id} project={project} featured={index === 0} />
        ))}
      </section>
    </div>
  );
}

export default Projects;
