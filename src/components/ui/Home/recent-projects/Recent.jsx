import "./recent.css";
import Container from "@layouts/Container";
import projectImg from "@assets/projects/project.jpeg";
import Project from "@components/Project";
import animateProject from "@assets/projects/animate-project.gif";
import projects from "@data/projects/projects";
import { Link } from "react-router-dom";

const Recent = () => {
  return (
    <div className="recent-projects main-gap">
      <Container>
        <div className="heading" data-aos="fade-down">
          <h1>Recent Projects</h1>
          <button className="btn outline-btn">
            <Link to={"/projects"}>
              <span>View More</span>
            </Link>
          </button>
        </div>
        <div className="projects-wrapper">
          <Project
            link={`/projects/${projects[0].id}`}
            delay={0}
            img={projects[0].img}
            title={projects[0].title}
          />
          <Project
            link={`/projects/${projects[1].id}`}
            delay={200}
            img={projects[1].img}
            title={projects[1].title}
          />
        </div>
      </Container>
    </div>
  );
};
export default Recent;
