import "./hero-section.css";
import Container from "../../../layouts/Container";
import { HeroInfo } from "./HeroSectionComponent";
import HeroImg from "./HeroImg";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <Container>
          <HeroInfo />
          <HeroImg />
        </Container>
      </div>
    </>
  );
};

export default HeroSection;
