import "./recent.css";
import Container from "../../layouts/Container";
import img from "../../assets/project.png";
import img2 from "../../assets/project2.webp";
import Project from "../ProjectTemp";

export const Recent = () => {
  return (
    <div className="recent-projects">
      <Container>
        <div className="heading" data-aos="fade-down">
          <h1>Recent Projects</h1>
          <button className="btn outline-btn">
            <span>View More</span>
          </button>
        </div>
        <div className="projects-wrapper">
          <Project img={img} title={"Gaming Website"} />
          <Project img={img2} title={"NFTs Store"} />
        </div>
      </Container>
    </div>
  );
};
