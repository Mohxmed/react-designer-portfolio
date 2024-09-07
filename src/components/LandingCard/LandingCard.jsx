// Components
import Container from "../../layouts/Container";
import { CardContent } from "./LandingCardComponents";

// Styles
import "./landing-card.css";

const LandingCard = () => {
  return (
    <div className="landing-card">
      <Container>
        <CardContent />
      </Container>
    </div>
  );
};

export default LandingCard;
