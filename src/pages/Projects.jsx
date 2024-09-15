import React from "react";
import Container from "../layouts/Container";
import ProjectsGrid from "@components/ui/Projects/ProjectsGrid";
import LandingContact from "../components/ui/Home/contact-block/LandingContact";

export default function Projects() {
  return (
    <div className="project-wrapper">
      <Container>
        <ProjectsGrid />
      </Container>
    </div>
  );
}
