import { useEffect } from "react";
import Aos from "aos";

// Components
import Container from "../../layouts/Container";
import { CardContent } from "./LandingCardComponents";

// Styles
import "./landing-card.css";
import "aos/dist/aos.css";

const LandingCard = () => {
  // AOS Settings
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <div className="landing-card" data-aos="zoom-in">
      <Container>
        <CardContent />
      </Container>
    </div>
  );
};

export default LandingCard;
