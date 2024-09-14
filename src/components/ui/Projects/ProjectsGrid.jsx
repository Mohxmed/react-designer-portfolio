import Project from "../../Project";
import projects from "@data/projects/projects";
import "./projects.css";
export default function ProjectsGrid() {
  return (
    <>
      {projects &&
        projects.map((project) => {
          return (
            <Project
              link={`${project.id}`}
              title={project.title}
              img={project.img}
            />
          );
        })}
    </>
  );
}
