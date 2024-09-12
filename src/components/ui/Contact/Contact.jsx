import Container from "../../../layouts/Container";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <Container>
        <h2>Get Us</h2>
        <div className="wrapper">
          <LocationMap />
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

const LocationMap = () => {
  <div className="map"></div>;
};

const ContactForm = () => {
  <div className="contact-form">
    <form>
      <input type="text" />
      <input type="email" />
      <textarea></textarea>
    </form>
  </div>;
};

export default Contact;
