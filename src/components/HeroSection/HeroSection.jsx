import "./hero-section.css";
import Container from "../../layouts/Container";
import { HeroInfo, HeroImg } from "./HeroSectionComponent";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section" data-aos="fade-right">
        <Container>
          <HeroInfo />
          <HeroImg />
        </Container>
      </div>
    </>
  );
};

export default HeroSection;
