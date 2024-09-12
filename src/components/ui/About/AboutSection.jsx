import "./about.css";
import Container from "../../../layouts/Container";
import { AboutSectionData } from "./AboutSectionData";

export default function AboutSection() {
  return (
    <div className="about">
      <Container>
        <AboutSectionData />
      </Container>
    </div>
  );
}
