import Container from "@layouts/Container";
import "./landing-contact.css";
import { Link } from "react-router-dom";

const LandingContact = () => {
  return (
    <div className="landing-contact main-gap " data-aos="fade-down">
      <Container>
        <div className="content">
          <h1 data-aos="flip-right" data-aos-delay="100">
            interested working with me?
          </h1>
          <div className="contact-btns">
            <Link to={"/contact"}>
              <button
                data-aos="flip-left"
                data-aos-delay="200"
                className="btn mail-btn"
              >
                Contact Me
              </button>
            </Link>
            <Link to={"/projects"}>
              <button
                data-aos="flip-left"
                data-aos-delay="300"
                className="btn seemore-btn"
              >
                See More Projects
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LandingContact;
