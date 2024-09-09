import { BsEye, BsLayersFill } from "react-icons/bs";
import { CgArrowTopRight } from "react-icons/cg";

const Project = ({ img, title, delay }) => {
  return (
    <div className="project" data-aos="fade-left" data-aos-delay={`${delay}`}>
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
    </div>
  );
};
export default Project;
