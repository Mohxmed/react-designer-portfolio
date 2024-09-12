import Container from "../../../layouts/Container";
import "./footer.css";

import { SocialIcons } from "../../../components/Socials";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <h1>Let's Connect!</h1>
        <SocialIcons />
      </Container>
    </div>
  );
};

export default Footer;
