import "./recent.css";
import Container from "../../../layouts/Container";
import projectImg from "../../../assets/projects/project.jpeg";
import Project from "../../../components/Project";
import animateProject from "../../../assets/projects/animate-project.gif";

export const Recent = () => {
  return (
    <div className="recent-projects main-gap">
      <Container>
        <div className="heading" data-aos="fade-down">
          <h1>Recent Projects</h1>
          <button className="btn outline-btn">
            <span>View More</span>
          </button>
        </div>
        <div className="projects-wrapper">
          <Project
            delay={0}
            img={animateProject}
            title={"Social Media Mobile App"}
          />
          <Project delay={200} img={projectImg} title={"ERP System"} />
        </div>
      </Container>
    </div>
  );
};
