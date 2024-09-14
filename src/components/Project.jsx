import { BsEye, BsLayersFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Project = ({ img, title, delay, link }) => {
  return (
    <div className="project" data-aos="fade-left" data-aos-delay={`${delay}`}>
      <Link to={link} style={{ textDecoration: "none", color: "#000" }}>
        <div className="img-overlay">
          <img src={img} alt="#" />
        </div>
        <div className="project-info">
          <h3>{title}</h3>
          <div className="actions">
            <a>
              <BsLayersFill /> View Case Study
            </a>
            <a>
              <BsEye /> Live Preview
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Project;
