import Container from "../../layouts/Container";
import "./partner.css";

// images
import Logos from "../../assets/logos/Logos.png";

export const Partner = () => {
  return (
    <div className="partners main-gap" data-aos="fade-down">
      <Container>
        <img src={Logos} />
      </Container>
    </div>
  );
};
