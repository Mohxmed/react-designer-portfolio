import { useEffect, useState } from "react";
import Aos from "aos";

// Components
import Container from "../../layouts/Container";
import { CardContent } from "./LandingCardComponents";

// Styles
import "./landing-card.css";

const LandingCard = () => {
  const [TargetX, setTargetX] = useState(0);
  const [TargetY, setTargetY] = useState(0);

  function handleMouseMove() {
    const { clientX, clientY } = event;
    const calcX = (clientX / window.innerWidth) * 20;
    const calcY = (clientY / window.innerHeight) * 20;
    setTargetX(calcX);
    setTargetY(calcY);
  }
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
        <CardContent
          targetX={TargetX}
          targetY={TargetY}
          mouseMove={handleMouseMove}
        />
      </Container>
    </div>
  );
};

export default LandingCard;
