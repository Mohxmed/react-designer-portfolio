import Container from "../../../layouts/Container";
import "./footer.css";

import { SocialIcons } from "../../../components/Socials";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <h1>Let's Connect!</h1>
        <SocialIcons
          linkedInLink={"https://linkedin.com"}
          instagramLink={"https://instagram.com"}
          dribbleLink={"https://dribble.com"}
          youtubeLink={"https://youtube.com"}
        />
      </Container>
    </div>
  );
};

export default Footer;
