import Container from "../../../layouts/Container";
import LocationMap from "./LocationMap";
import ContactForm from "./ContactForm";

import "./contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <Container>
        <div className="wrapper">
          <LocationMap />
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

export default Contact;
