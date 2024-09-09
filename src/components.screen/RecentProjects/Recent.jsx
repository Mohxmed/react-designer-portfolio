import "./recent.css";
import Container from "../../layouts/Container";
import img from "../../assets/projects/project2.png";
import img2 from "../../assets/projects/project2.webp";
import Project from "../../components/Project";

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
          <Project delay={0} img={img} title={"Gaming Website"} />
          <Project delay={200} img={img2} title={"NFTs Store"} />
        </div>
      </Container>
    </div>
  );
};
