import { useCallback, useEffect, useState } from "react";
import Aos from "aos";

// Components
import Container from "../../layouts/Container";
import { CardContent } from "./LandingCardComponents";

// Styles
import "./landing-card.css";

const LandingCard = () => {
  // AOS Settings
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <div className="landing-card">
      <Container>
        <CardContent />
      </Container>
    </div>
  );
};

export default LandingCard;
