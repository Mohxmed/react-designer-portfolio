import "./about.css";
import Container from "../../layouts/Container";
import image from "../../assets/landing-card/card-image.png";
import signature from "../../assets/about/signature.png";
import appList from "../../assets/about/List.png";

export default function AboutSection() {
  return (
    <div className="about">
      <Container>
        <div className="pic" data-aos="fade-down-right">
          <img src={image} />
        </div>
        <div className="info" data-aos="fade-up-left">
          <div className="persona">
            <h1>Ariene Rey</h1>
            <p className="position">an UI/UX Designer.</p>
            <p className="brief">
              UX Designer based in Jakarta, Indonesia.
              <br /> I am designing with a minimal and beautiful design in mind.
            </p>
          </div>
          <div className="mail">
            <span>Email me </span>
            <a href="#">ariene.rey@gmail.com</a>
          </div>
          <img src={signature} />
          <div className="skills">
            <span>Tools & Skills</span>
            <img src={appList} />
          </div>
        </div>
      </Container>
    </div>
  );
}
