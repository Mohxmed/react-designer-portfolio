import Container from "../../layouts/Container";
import "./landing-contact.css";

const LandingContact = () => {
  return (
    <div className="landing-contact" data-aos="fade-down">
      <Container>
        <div className="content">
          <h1 data-aos="flip-right" data-aos-delay="100">
            interested
            <br /> working <br />
            with me?
          </h1>
          <div className="contact-btns">
            <button
              data-aos="flip-left"
              data-aos-delay="200"
              className="btn mail-btn"
            >
              Contact Me
            </button>
            <button
              data-aos="flip-left"
              data-aos-delay="300"
              className="btn seemore-btn"
            >
              See More Projects
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LandingContact;
