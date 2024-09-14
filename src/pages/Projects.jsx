import React from "react";
import Container from "../layouts/Container";
import ProjectsGrid from "@components/ui/Projects/ProjectsGrid";

export default function Projects() {
  return (
    <div className="project-wrapper">
      <Container>
        <ProjectsGrid />
      </Container>
    </div>
  );
}
