import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image}/>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href={project.github}>
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;